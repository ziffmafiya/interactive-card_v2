import { LitElement, css, html } from "lit";
import type { HomeAssistant } from "custom-card-helpers";

import { createMockHass } from "../../data/mock-hass";
import { setCardTheme } from "../../theme/theme-provider";
import type { CardTheme } from "../../theme/card-theme";

import "../energy-kpi-section";
import "../energy-flow-diagram";
import "../energy-circuit-section";
import "../energy-trend-card";
import "../energy-automation-card";
import "../energy-theme-selector";
import "../energy-settings-card";
import "../scenes/ev/ev-charging-scene";
import "../scenes/solar/solar-energy-scene";
import "../scenes/battery/battery-storage-scene";
import "../scenes/appliance/appliance-intelligence-scene";
import "../scenes/pet/pet-energy-scene";
import "../common/segmented-control";
import "../common/action-button";

export type PanelTab =
  | "overview"
  | "analytics"
  | "circuits"
  | "scenes"
  | "automations"
  | "settings";

export type SceneKey = "ev" | "solar" | "battery" | "appliance" | "pet";

export interface InteractiveEnergyPanelConfig {
  type?: string;
  title?: string;
  default_tab?: PanelTab;
  show_header?: boolean;
  show_pills?: boolean;
  theme?: CardTheme;
}

export class InteractiveEnergyPanel extends LitElement {
  static properties = {
    hass: { attribute: false },
    narrow: { type: Boolean },
    panel: { attribute: false },
    route: { attribute: false },
    config: { attribute: false },
    activeTab: { state: true },
    activeScene: { state: true },
  };

  private _hass?: HomeAssistant;
  narrow = false;
  panel?: { config?: InteractiveEnergyPanelConfig };
  route?: { prefix: string; path: string };
  config: InteractiveEnergyPanelConfig = {};

  activeTab: PanelTab = "overview";
  activeScene: SceneKey = "ev";

  private themeListener = () => this.requestUpdate();

  set hass(value: HomeAssistant | undefined) {
    this._hass = value;
    this.requestUpdate();
  }

  get hass(): HomeAssistant {
    if (!this._hass) {
      this._hass = createMockHass();
    }
    return this._hass;
  }

  setConfig(config: InteractiveEnergyPanelConfig) {
    this.config = { ...config };
    if (config.default_tab) {
      this.activeTab = config.default_tab;
    }
    if (config.theme) {
      setCardTheme(config.theme);
    }
    this.requestUpdate();
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("card-theme-changed", this.themeListener);

    if (this.panel?.config?.default_tab) {
      this.activeTab = this.panel.config.default_tab;
    }
    if (this.panel?.config?.theme) {
      setCardTheme(this.panel.config.theme);
    }
  }

  disconnectedCallback() {
    window.removeEventListener("card-theme-changed", this.themeListener);
    super.disconnectedCallback();
  }

  private toggleMenu() {
    this.dispatchEvent(
      new CustomEvent("hass-toggle-menu", {
        bubbles: true,
        composed: true,
      })
    );
  }

  private selectTab(tab: PanelTab) {
    this.activeTab = tab;
  }

  private selectScene(scene: SceneKey) {
    this.activeScene = scene;
  }

  private getLiveState(entityId: string): string | undefined {
    return this.hass.states?.[entityId]?.state;
  }

  static styles = css`
    :host {
      display: block;
      box-sizing: border-box;
      min-height: 100vh;
      width: 100%;
      background: var(--primary-background-color, #0f172a);
      color: var(--ic-card-primary-text, var(--primary-text-color, #f8fafc));
      font-family: var(--paper-font-body1_-_font-family, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
      overflow-x: hidden;
    }

    .panel-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      width: 100%;
      box-sizing: border-box;
    }

    /* Top App Header */
    .app-header {
      position: sticky;
      top: 0;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 12px 24px;
      background: var(--en-surface-secondary, rgba(15, 23, 42, 0.75));
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--ic-border-card, rgba(255, 255, 255, 0.08));
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 0;
    }

    .menu-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 10px;
      border: 1px solid var(--ic-border-card, rgba(255, 255, 255, 0.1));
      background: var(--en-surface-primary, rgba(255, 255, 255, 0.05));
      color: inherit;
      cursor: pointer;
      padding: 0;
      transition: background 0.2s ease;
    }

    .menu-btn:hover {
      background: var(--en-surface-hover, rgba(255, 255, 255, 0.12));
    }

    .brand-title {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 1.25rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      white-space: nowrap;
      margin: 0;
    }

    .brand-title ha-icon {
      --mdc-icon-size: 24px;
      color: var(--primary-color, #38bdf8);
    }

    .header-center {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
      justify-content: center;
    }

    .metric-pill {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      border-radius: 9999px;
      background: var(--en-surface-primary, rgba(255, 255, 255, 0.06));
      border: 1px solid var(--ic-border-card, rgba(255, 255, 255, 0.08));
      font-size: 0.82rem;
      font-weight: 500;
      color: var(--secondary-text-color, #94a3b8);
      white-space: nowrap;
    }

    .metric-pill ha-icon {
      --mdc-icon-size: 16px;
    }

    .metric-pill.solar {
      color: #f59e0b;
      border-color: rgba(245, 158, 11, 0.2);
      background: rgba(245, 158, 11, 0.08);
    }

    .metric-pill.power {
      color: #38bdf8;
      border-color: rgba(56, 189, 248, 0.2);
      background: rgba(56, 189, 248, 0.08);
    }

    .metric-pill.battery {
      color: #10b981;
      border-color: rgba(16, 185, 129, 0.2);
      background: rgba(16, 185, 129, 0.08);
    }

    .metric-pill strong {
      color: var(--primary-text-color, #f8fafc);
      font-weight: 600;
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    /* Tab Navigation Bar */
    .tab-bar {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 24px;
      background: var(--en-surface-primary, rgba(15, 23, 42, 0.4));
      border-bottom: 1px solid var(--ic-border-card, rgba(255, 255, 255, 0.06));
      overflow-x: auto;
      scrollbar-width: none;
    }

    .tab-bar::-webkit-scrollbar {
      display: none;
    }

    .tab-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      border-radius: 10px;
      border: 1px solid transparent;
      background: transparent;
      color: var(--secondary-text-color, #94a3b8);
      font-size: 0.9rem;
      font-weight: 600;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.2s ease;
    }

    .tab-btn ha-icon {
      --mdc-icon-size: 18px;
    }

    .tab-btn:hover {
      background: var(--en-surface-hover, rgba(255, 255, 255, 0.06));
      color: var(--primary-text-color, #f8fafc);
    }

    .tab-btn.active {
      background: var(--en-surface-floating, rgba(255, 255, 255, 0.12));
      border-color: var(--ic-border-card, rgba(255, 255, 255, 0.15));
      color: var(--primary-color, #38bdf8);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }

    /* Main Content */
    .main-content {
      flex: 1;
      padding: 24px;
      max-width: 1600px;
      margin: 0 auto;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    /* Scene Sub-Bar */
    .scene-selector-bar {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 8px;
    }

    .scene-chip {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      border-radius: 9999px;
      border: 1px solid var(--ic-border-card, rgba(255, 255, 255, 0.1));
      background: var(--en-surface-primary, rgba(255, 255, 255, 0.05));
      color: var(--secondary-text-color, #94a3b8);
      font-size: 0.85rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .scene-chip ha-icon {
      --mdc-icon-size: 16px;
    }

    .scene-chip:hover {
      background: var(--en-surface-hover, rgba(255, 255, 255, 0.1));
      color: var(--primary-text-color, #f8fafc);
    }

    .scene-chip.active {
      background: var(--primary-color, #38bdf8);
      color: #0f172a;
      border-color: var(--primary-color, #38bdf8);
      font-weight: 700;
    }

    .overview-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 24px;
    }

    @media (max-width: 768px) {
      .app-header {
        padding: 10px 16px;
      }
      .tab-bar {
        padding: 6px 16px;
      }
      .main-content {
        padding: 16px;
        gap: 16px;
      }
      .header-center {
        display: none;
      }
    }
  `;

  render() {
    const title = this.config.title || this.panel?.config?.title || "Energy Interactive";
    const solarPower = this.getLiveState("sensor.solar_power") || "4.8 kW";
    const homePower = this.getLiveState("sensor.main_all_power_rt") || "3.4 kW";
    const batteryLevel = this.getLiveState("sensor.battery_level") || "78%";

    return html`
      <div class="panel-container">
        <!-- Top App Header -->
        <header class="app-header">
          <div class="header-left">
            <button
              class="menu-btn"
              @click=${this.toggleMenu}
              title="Toggle Menu"
              aria-label="Toggle Menu"
            >
              <ha-icon icon="mdi:menu"></ha-icon>
            </button>
            <h1 class="brand-title">
              <ha-icon icon="mdi:solar-power-variant"></ha-icon>
              <span>${title}</span>
            </h1>
          </div>

          <div class="header-center">
            <div class="metric-pill solar">
              <ha-icon icon="mdi:solar-power"></ha-icon>
              <span>Solar: <strong>${solarPower}</strong></span>
            </div>
            <div class="metric-pill power">
              <ha-icon icon="mdi:flash"></ha-icon>
              <span>Load: <strong>${homePower}</strong></span>
            </div>
            <div class="metric-pill battery">
              <ha-icon icon="mdi:battery-charging-70"></ha-icon>
              <span>Battery: <strong>${batteryLevel}</strong></span>
            </div>
          </div>

          <div class="header-right">
            <energy-theme-selector></energy-theme-selector>
          </div>
        </header>

        <!-- Navigation Tabs -->
        <nav class="tab-bar">
          <button
            class="tab-btn ${this.activeTab === "overview" ? "active" : ""}"
            @click=${() => this.selectTab("overview")}
          >
            <ha-icon icon="mdi:view-dashboard-outline"></ha-icon>
            <span>Overview</span>
          </button>

          <button
            class="tab-btn ${this.activeTab === "analytics" ? "active" : ""}"
            @click=${() => this.selectTab("analytics")}
          >
            <ha-icon icon="mdi:chart-timeline-variant"></ha-icon>
            <span>Analytics</span>
          </button>

          <button
            class="tab-btn ${this.activeTab === "circuits" ? "active" : ""}"
            @click=${() => this.selectTab("circuits")}
          >
            <ha-icon icon="mdi:home-lightning-bolt-outline"></ha-icon>
            <span>Circuits</span>
          </button>

          <button
            class="tab-btn ${this.activeTab === "scenes" ? "active" : ""}"
            @click=${() => this.selectTab("scenes")}
          >
            <ha-icon icon="mdi:lightning-bolt-circle"></ha-icon>
            <span>Scenes</span>
          </button>

          <button
            class="tab-btn ${this.activeTab === "automations" ? "active" : ""}"
            @click=${() => this.selectTab("automations")}
          >
            <ha-icon icon="mdi:robot-outline"></ha-icon>
            <span>Automations</span>
          </button>

          <button
            class="tab-btn ${this.activeTab === "settings" ? "active" : ""}"
            @click=${() => this.selectTab("settings")}
          >
            <ha-icon icon="mdi:cog-outline"></ha-icon>
            <span>Settings</span>
          </button>
        </nav>

        <!-- Main Content Area -->
        <main class="main-content">
          ${this.renderActiveTab()}
        </main>
      </div>
    `;
  }

  private renderActiveTab() {
    switch (this.activeTab) {
      case "overview":
        return this.renderOverviewTab();
      case "analytics":
        return this.renderAnalyticsTab();
      case "circuits":
        return this.renderCircuitsTab();
      case "scenes":
        return this.renderScenesTab();
      case "automations":
        return this.renderAutomationsTab();
      case "settings":
        return this.renderSettingsTab();
      default:
        return this.renderOverviewTab();
    }
  }

  private renderOverviewTab() {
    return html`
      <div class="overview-grid">
        <energy-kpi-section .hass=${this.hass}></energy-kpi-section>
        <energy-flow-diagram .hass=${this.hass}></energy-flow-diagram>
        <energy-circuit-section .hass=${this.hass}></energy-circuit-section>
      </div>
    `;
  }

  private renderAnalyticsTab() {
    return html`
      <energy-trend-card
        .hass=${this.hass}
        .config=${{
          title: "Energy Historical Analytics",
          timeframe: "24H",
          chartMode: "line",
          fullWidth: true,
          entities: [
            { entity: "sensor.solar_power", name: "Solar Generation", unit: "W", color: "#f59e0b" },
            { entity: "sensor.main_all_power_rt", name: "Total Consumption", unit: "W", color: "#38bdf8" },
            { entity: "sensor.battery_power", name: "Battery Charge", unit: "W", color: "#10b981" },
          ],
        }}
      ></energy-trend-card>
    `;
  }

  private renderCircuitsTab() {
    return html`
      <energy-circuit-section
        .hass=${this.hass}
        .config=${{
          title: "Detailed Circuit & Load Distribution",
          circuits: [
            { id: "ev", name: "EV Fast Charger", entity: "sensor.ev_power", icon: "mdi:car-electric" },
            { id: "ac", name: "Living Room HVAC", entity: "sensor.ac_power", icon: "mdi:air-conditioner" },
            { id: "heater", name: "Water Boiler", entity: "sensor.heater_power", icon: "mdi:water-boiler" },
            { id: "kitchen", name: "Kitchen & Oven", entity: "sensor.kitchen_power", icon: "mdi:microwave" },
            { id: "fridge", name: "Refrigerator", entity: "sensor.fridge_power", icon: "mdi:fridge" },
          ],
        }}
      ></energy-circuit-section>
    `;
  }

  private renderScenesTab() {
    return html`
      <div class="scene-selector-bar">
        <button
          class="scene-chip ${this.activeScene === "ev" ? "active" : ""}"
          @click=${() => this.selectScene("ev")}
        >
          <ha-icon icon="mdi:car-electric"></ha-icon>
          <span>EV Charging</span>
        </button>

        <button
          class="scene-chip ${this.activeScene === "solar" ? "active" : ""}"
          @click=${() => this.selectScene("solar")}
        >
          <ha-icon icon="mdi:solar-power"></ha-icon>
          <span>Solar Intelligence</span>
        </button>

        <button
          class="scene-chip ${this.activeScene === "battery" ? "active" : ""}"
          @click=${() => this.selectScene("battery")}
        >
          <ha-icon icon="mdi:battery-charging"></ha-icon>
          <span>Battery Storage</span>
        </button>

        <button
          class="scene-chip ${this.activeScene === "appliance" ? "active" : ""}"
          @click=${() => this.selectScene("appliance")}
        >
          <ha-icon icon="mdi:devices"></ha-icon>
          <span>Appliance Intelligence</span>
        </button>

        <button
          class="scene-chip ${this.activeScene === "pet" ? "active" : ""}"
          @click=${() => this.selectScene("pet")}
        >
          <ha-icon icon="mdi:paw"></ha-icon>
          <span>Pet Energy</span>
        </button>
      </div>

      <div class="scene-content">
        ${this.renderSceneContent()}
      </div>
    `;
  }

  private renderSceneContent() {
    switch (this.activeScene) {
      case "ev":
        return html`<energy-ev-charging-scene></energy-ev-charging-scene>`;
      case "solar":
        return html`<energy-solar-scene></energy-solar-scene>`;
      case "battery":
        return html`<energy-battery-scene></energy-battery-scene>`;
      case "appliance":
        return html`<energy-appliance-scene></energy-appliance-scene>`;
      case "pet":
        return html`<energy-pet-scene></energy-pet-scene>`;
      default:
        return html`<energy-ev-charging-scene></energy-ev-charging-scene>`;
    }
  }

  private renderAutomationsTab() {
    return html`
      <energy-automation-card
        .hass=${this.hass}
        .config=${{
          title: "Solar Water Heating Optimization",
          icon: "mdi:white-balance-sunny",
          status_entity: "input_select.heating_status",
          strategy_entity: "input_select.heating_strategy",
          reason_entity: "input_text.heating_reason",
          target_time_entity: "input_datetime.heating_target",
          manual_override_entity: "input_boolean.heating_override",
          device_entity: "switch.water_heater",
          power_entity: "sensor.heater_power",
          temperature_entity: "sensor.water_temperature",
          actions: {
            run_now: { domain: "switch", service: "turn_on", entity_id: "switch.water_heater" },
            pause: { domain: "switch", service: "turn_off", entity_id: "switch.water_heater" },
          },
        }}
      ></energy-automation-card>
    `;
  }

  private renderSettingsTab() {
    return html`
      <energy-settings-card .hass=${this.hass}></energy-settings-card>
    `;
  }
}

const elementAliases = [
  "interactive-energy-panel",
  "ha-panel-interactive-energy-panel",
  "ha-panel-interactive_energy_panel",
  "interactive-card-panel",
  "ha-panel-interactive-card-panel",
];

for (const alias of elementAliases) {
  if (!customElements.get(alias)) {
    customElements.define(alias, class extends InteractiveEnergyPanel {});
  }
}

