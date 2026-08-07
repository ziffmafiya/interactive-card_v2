import { CORE_IDENTITY_DEFAULTS, CORE_STATUS_MAPPINGS, CORE_VISIBILITY_DEFAULTS } from "./automation-defaults.ts";
import { adaptLegacyAutomationConfig, isLegacyAutomationConfig } from "./automation-legacy-adapter.ts";
import type { AutomationScenarioConfig, NormalizedAutomationScenarioConfig, ScenarioActionConfig, ScenarioGoalConfig, ScenarioMetricConfig } from "./automation-scenario.types.ts";
import { automationTemplateRegistry, type AutomationTemplateRegistry } from "./automation-template-registry.ts";

export class AutomationConfigValidationError extends Error {
  readonly issues: string[];

  constructor(issues: string[]) {
    super(issues.join("; "));
    this.name = "AutomationConfigValidationError";
    this.issues = issues;
  }
}

export interface AutomationConfigNormalizationResult {
  config: NormalizedAutomationScenarioConfig;
  migratedLegacy: boolean;
  warnings: string[];
}

function nonEmpty(value: unknown): value is string { return typeof value === "string" && value.trim().length > 0; }

function validateGoal(goal: ScenarioGoalConfig | undefined, name: string, issues: string[]): void {
  if (goal && !nonEmpty(goal.entity)) issues.push(`${name} requires entity`);
}

function validateMetrics(metrics: ScenarioMetricConfig[] | undefined, issues: string[]): void {
  if (metrics !== undefined && !Array.isArray(metrics)) { issues.push("metrics must be an array"); return; }
  metrics?.forEach((metric, index) => {
    if (!metric || typeof metric !== "object" || !nonEmpty(metric.entity)) issues.push(`metrics[${index}] requires entity`);
  });
}

function validateActions(actions: ScenarioActionConfig[] | undefined, issues: string[]): void {
  if (actions !== undefined && !Array.isArray(actions)) { issues.push("actions must be an array"); return; }
  actions?.forEach((action, index) => {
    if (!action || typeof action !== "object" || !nonEmpty(action.id)) issues.push(`actions[${index}] requires id`);
    if (action?.service && action.script_entity) issues.push(`actions[${index}] cannot configure both service and script_entity`);
    if (!action?.service && !action?.script_entity) issues.push(`actions[${index}] requires service or script_entity`);
    if (action?.service && !/^[a-z0-9_]+\.[a-z0-9_]+$/i.test(action.service)) issues.push(`actions[${index}] service must use domain.service`);
  });
}

function collapseVisibility(config: NormalizedAutomationScenarioConfig): void {
  if (!config.goals.length) config.visibility.goals = false;
  if (!config.goals.some((goal) => goal.id === "primary")) config.visibility.primary_goal = false;
  if (!config.goals.some((goal) => goal.id === "secondary")) config.visibility.secondary_goal = false;
  if (!config.strategy) config.visibility.strategy = false;
  if (!config.metrics.some((metric) => metric.visible !== false)) config.visibility.metrics = false;
  if (!config.execution) { config.visibility.execution = false; config.visibility.device_control = false; }
  else if (!config.execution.control) config.visibility.device_control = false;
  if (!config.manualOverrideEntity) config.visibility.manual_override = false;
  if (!config.plan?.steps?.length) config.visibility.plan = false;
  if (!config.explanation.reason_entity && !config.reasonEntity) config.visibility.reason = false;
  if (!config.explanation.next_action_entity) config.visibility.next_action = false;
  if (!config.explanation.last_action_entity) config.visibility.last_action = false;
  if (!config.actions.length) config.visibility.controls = false;
}

export function normalizeAutomationScenarioConfig(
  raw: AutomationScenarioConfig | unknown,
  registry: AutomationTemplateRegistry = automationTemplateRegistry
): AutomationConfigNormalizationResult {
  const migratedLegacy = isLegacyAutomationConfig(raw);
  const input = migratedLegacy ? adaptLegacyAutomationConfig(raw) : raw as AutomationScenarioConfig;
  const issues: string[] = [];
  const warnings: string[] = [];
  if (!input || typeof input !== "object") throw new AutomationConfigValidationError(["Automation Scenario requires a configuration"]);
  if (!nonEmpty(input.status_entity)) issues.push("missing status_entity");

  const requestedTemplate = input.template ?? "custom";
  if (!registry.has(requestedTemplate)) issues.push(`unknown template: ${requestedTemplate}`);
  const template = registry.getOrCustom(requestedTemplate);
  validateGoal(input.goal, "goal", issues);
  validateGoal(input.secondary_goal, "secondary_goal", issues);
  if (input.execution && !nonEmpty(input.execution.entity)) issues.push("execution requires entity");
  if (input.execution?.control && input.execution.control.type !== "switch") issues.push("execution control type must be switch");
  validateMetrics(input.metrics, issues);
  validateActions(input.actions, issues);
  if (issues.length) throw new AutomationConfigValidationError(issues);

  const identity = {
    ...CORE_IDENTITY_DEFAULTS,
    ...template.identityDefaults,
    ...input.identity,
    ...(input.title !== undefined ? { title:input.title } : {}),
    ...(input.subtitle !== undefined ? { subtitle:input.subtitle } : {}),
    ...(input.icon !== undefined ? { icon:input.icon } : {}),
  };
  const strategy = input.strategy ?? (input.strategy_entity ? { entity:input.strategy_entity } : undefined);
  const goals = [
    input.goal ? { ...input.goal, id:"primary" as const } : undefined,
    input.secondary_goal ? { ...input.secondary_goal, id:"secondary" as const } : undefined,
  ].filter((goal): goal is ScenarioGoalConfig & { id:"primary" | "secondary" } => Boolean(goal));
  const explanation = { reason_entity:input.reason_entity, ...input.explanation };
  const config: NormalizedAutomationScenarioConfig = {
    type:"custom:energy-automation-card",
    templateId:template.id,
    identity,
    statusEntity:input.status_entity.trim(),
    reasonEntity:input.reason_entity,
    automationEntity:input.automation_entity,
    goals,
    strategy,
    metrics:(input.metrics ?? []).filter((metric) => metric.visible !== false),
    execution:input.execution,
    manualOverrideEntity:input.manual_override_entity,
    plan:input.plan ?? template.planDefaults,
    explanation,
    actions:input.actions ?? [],
    statusMappings:{ ...CORE_STATUS_MAPPINGS, ...template.statusMappings, ...input.status_mappings },
    strategyMappings:{ ...template.strategyMappings, ...input.strategy_mappings, ...strategy?.mappings },
    visibility:{ ...CORE_VISIBILITY_DEFAULTS, ...template.visibilityDefaults, ...input.show },
  };
  collapseVisibility(config);
  if (migratedLegacy) warnings.push("Legacy automation card configuration was normalized without changing the source YAML");
  return { config, migratedLegacy, warnings };
}
