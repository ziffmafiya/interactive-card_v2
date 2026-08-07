import type { AutomationPlanStepConfig, AutomationScenarioConfig, AutomationScenarioVisibilityConfig, AutomationTemplateId, ExecutionStateMapping, LifecycleStatus, ScenarioActionConfig, ScenarioGoalConfig, ScenarioMetricConfig, ScenarioStrategyConfig, StrategyMappingConfig } from "./automation-scenario.types.ts";

export interface AutomationScenarioTemplate {
  id: AutomationTemplateId;
  name: string;
  identityDefaults: { title: string; subtitle: string; icon: string };
  goalRecommendations?: { primary?: Omit<ScenarioGoalConfig, "entity">; secondary?: Omit<ScenarioGoalConfig, "entity"> };
  strategyDefaults?: Omit<ScenarioStrategyConfig, "entity">;
  statusMappings: Record<string, LifecycleStatus>;
  strategyMappings: Record<string, StrategyMappingConfig>;
  executionMappings?: Record<string, ExecutionStateMapping>;
  metricRecommendations: Array<Omit<ScenarioMetricConfig, "entity">>;
  planDefaults?: { steps: AutomationPlanStepConfig[] };
  actionRecommendations: Array<Omit<ScenarioActionConfig, "service" | "script_entity" | "target_entity">>;
  visibilityDefaults: AutomationScenarioVisibilityConfig;
  configDefaults?: Partial<AutomationScenarioConfig>;
}
