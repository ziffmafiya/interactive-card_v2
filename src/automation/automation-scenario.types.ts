export type AutomationTemplateId = "solar_water_heating" | "ev_smart_charging" | "custom" | (string & {});

export type LifecycleStatus =
  | "running" | "waiting" | "scheduled" | "paused" | "completed"
  | "blocked" | "disabled" | "unavailable" | "unknown";

export type ScenarioTone = "primary" | "accent" | "success" | "warning" | "critical" | "neutral";
export type ScenarioValueFormat = "auto" | "text" | "number" | "power" | "energy" | "temperature" | "percentage" | "time" | "datetime" | "duration";
export type ScenarioMetricRole = "primary" | "secondary" | "progress" | "constraint";
export type PlanStepStatus = "completed" | "current" | "upcoming" | "skipped" | "blocked" | "unavailable";

export interface ScenarioIdentityConfig { title?: string; subtitle?: string; icon?: string; }
export interface ScenarioGoalConfig { entity: string; label?: string; icon?: string; format?: ScenarioValueFormat; description?: string; }
export interface StrategyMappingConfig { label?: string; icon?: string; tone?: ScenarioTone; description?: string; }
export interface ScenarioStrategyConfig { entity: string; label?: string; mappings?: Record<string, StrategyMappingConfig>; }
export interface ScenarioMetricConfig { entity: string; label?: string; icon?: string; format?: ScenarioValueFormat; role?: ScenarioMetricRole; visible?: boolean; }
export interface ExecutionStateMapping { label?: string; active?: boolean; tone?: ScenarioTone; }
export interface ScenarioDeviceControlConfig { type: "switch"; turn_on_service?: string; turn_off_service?: string; confirmation?: boolean; }
export interface ScenarioExecutionConfig { entity: string; label?: string; icon?: string; state_mappings?: Record<string, ExecutionStateMapping>; control?: ScenarioDeviceControlConfig; }
export interface AutomationPlanStepConfig { id: string; label: string; icon?: string; status?: PlanStepStatus; status_entity?: string; status_mappings?: Record<string, PlanStepStatus>; description?: string; detail_entity?: string; lifecycle_states?: LifecycleStatus[]; }
export interface AutomationPlanConfig { current_step_entity?: string; steps?: AutomationPlanStepConfig[]; }
export interface ScenarioDecisionFactorConfig { entity: string; label?: string; format?: ScenarioValueFormat; influence?: "supports" | "limits" | "blocks" | "informational"; }
export interface ScenarioDecisionContextConfig { summary_entity?: string; factors?: ScenarioDecisionFactorConfig[]; }
export interface ScenarioExplanationConfig { reason_entity?: string; next_action_entity?: string; last_action_entity?: string; decision_context?: ScenarioDecisionContextConfig; }
export interface ScenarioActionConfig { id: string; label?: string; icon?: string; tone?: "primary" | "neutral" | "destructive"; service?: string; target_entity?: string; script_entity?: string; data?: Record<string, unknown>; confirmation?: boolean; available_when?: LifecycleStatus[]; }

export interface AutomationScenarioVisibilityConfig {
  identity?: boolean; lifecycle?: boolean; goals?: boolean; primary_goal?: boolean;
  secondary_goal?: boolean; strategy?: boolean; metrics?: boolean; execution?: boolean;
  device_control?: boolean; manual_override?: boolean; plan?: boolean; explanation?: boolean;
  reason?: boolean; next_action?: boolean; last_action?: boolean; decision_factors?: boolean;
  controls?: boolean;
}

export interface AutomationScenarioConfig {
  type?: string;
  template?: AutomationTemplateId;
  identity?: ScenarioIdentityConfig;
  title?: string;
  subtitle?: string;
  icon?: string;
  status_entity: string;
  reason_entity?: string;
  strategy?: ScenarioStrategyConfig;
  strategy_entity?: string;
  automation_entity?: string;
  goal?: ScenarioGoalConfig;
  secondary_goal?: ScenarioGoalConfig;
  execution?: ScenarioExecutionConfig;
  device_entity?: string;
  manual_override_entity?: string;
  metrics?: ScenarioMetricConfig[];
  plan?: AutomationPlanConfig;
  explanation?: ScenarioExplanationConfig;
  next_action_entity?: string;
  last_action_entity?: string;
  actions?: ScenarioActionConfig[];
  status_mappings?: Record<string, LifecycleStatus>;
  strategy_mappings?: Record<string, StrategyMappingConfig>;
  show?: AutomationScenarioVisibilityConfig;
}

export interface NormalizedAutomationScenarioConfig {
  type: "custom:energy-automation-card";
  templateId: AutomationTemplateId;
  identity: Required<ScenarioIdentityConfig>;
  statusEntity: string;
  reasonEntity?: string;
  automationEntity?: string;
  goals: Array<ScenarioGoalConfig & { id: "primary" | "secondary" }>;
  strategy?: ScenarioStrategyConfig;
  metrics: ScenarioMetricConfig[];
  execution?: ScenarioExecutionConfig;
  manualOverrideEntity?: string;
  plan?: AutomationPlanConfig;
  explanation: ScenarioExplanationConfig;
  actions: ScenarioActionConfig[];
  statusMappings: Record<string, LifecycleStatus>;
  strategyMappings: Record<string, StrategyMappingConfig>;
  visibility: Required<AutomationScenarioVisibilityConfig>;
}

export interface NormalizedScenarioValue { label: string; icon?: string; value: string; unit?: string; available: boolean; }
export interface NormalizedScenarioGoal extends NormalizedScenarioValue { id: "primary" | "secondary"; description?: string; }
export interface NormalizedScenarioMetric extends NormalizedScenarioValue { entityId: string; role: ScenarioMetricRole; }
export interface NormalizedAutomationPlanStep { id: string; label: string; icon?: string; description?: string; detail?: string; status: PlanStepStatus; }
export interface NormalizedAutomationPlan { currentStepId?: string; currentStepIndex?: number; steps: NormalizedAutomationPlanStep[]; }
export interface NormalizedScenarioAction extends ScenarioActionConfig { label: string; tone: "primary" | "neutral" | "destructive"; available: boolean; }
export interface NormalizedAutomationScenario {
  templateId: AutomationTemplateId;
  identity: Required<ScenarioIdentityConfig>;
  lifecycle: { status: LifecycleStatus; label: string; icon: string; tone: ScenarioTone };
  goals: NormalizedScenarioGoal[];
  strategy?: StrategyMappingConfig & { rawValue: string; label: string; icon: string; tone: ScenarioTone };
  metrics: NormalizedScenarioMetric[];
  execution?: { entityId: string; label: string; icon: string; rawState: string; stateLabel: string; active: boolean; tone: ScenarioTone; control?: ScenarioDeviceControlConfig };
  plan?: NormalizedAutomationPlan;
  explanation: { currentStepId?: string; stateLabel: string; reason?: string; nextAction?: string; lastAction?: string; lastActionTime?: string };
  actions: NormalizedScenarioAction[];
  visibility: Required<AutomationScenarioVisibilityConfig>;
}
