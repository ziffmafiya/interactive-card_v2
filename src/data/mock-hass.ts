import type { HomeAssistant } from "custom-card-helpers";

export function createMockHass(): HomeAssistant {
  const states: Record<string, any> = {
    "sensor.main_all_power_rt": {
      entity_id: "sensor.main_all_power_rt",
      state: "3420",
      attributes: {
        friendly_name: "Total Home Power",
        unit_of_measurement: "W",
        device_class: "power",
        last_period: 2900,
      },
    },
    "sensor.today_usage": {
      entity_id: "sensor.today_usage",
      state: "18.6",
      attributes: {
        friendly_name: "Today's Energy Usage",
        unit_of_measurement: "kWh",
        device_class: "energy",
        last_period: 21.4,
      },
    },
    "sensor.main_all_energy_fwd_total": {
      entity_id: "sensor.main_all_energy_fwd_total",
      state: "14820",
      attributes: {
        friendly_name: "Total Energy Consumption",
        unit_of_measurement: "kWh",
        device_class: "energy",
      },
    },
    "sensor.solar_power": {
      entity_id: "sensor.solar_power",
      state: "4850",
      attributes: {
        friendly_name: "Solar Generation",
        unit_of_measurement: "W",
        device_class: "power",
        last_period: 4100,
      },
    },
    "sensor.battery_power": {
      entity_id: "sensor.battery_power",
      state: "1200",
      attributes: {
        friendly_name: "Battery Charge Power",
        unit_of_measurement: "W",
        device_class: "power",
      },
    },
    "sensor.battery_level": {
      entity_id: "sensor.battery_level",
      state: "78",
      attributes: {
        friendly_name: "Home Battery SOC",
        unit_of_measurement: "%",
        device_class: "battery",
      },
    },
    "sensor.grid_power": {
      entity_id: "sensor.grid_power",
      state: "-230",
      attributes: {
        friendly_name: "Grid Feed-in Power",
        unit_of_measurement: "W",
        device_class: "power",
      },
    },
    "sensor.ac_power": {
      entity_id: "sensor.ac_power",
      state: "1450",
      attributes: {
        friendly_name: "Air Conditioner",
        unit_of_measurement: "W",
        device_class: "power",
        icon: "mdi:air-conditioner",
      },
    },
    "sensor.ev_power": {
      entity_id: "sensor.ev_power",
      state: "7200",
      attributes: {
        friendly_name: "EV Charger",
        unit_of_measurement: "W",
        device_class: "power",
        icon: "mdi:car-electric",
      },
    },
    "sensor.heater_power": {
      entity_id: "sensor.heater_power",
      state: "850",
      attributes: {
        friendly_name: "Water Heater",
        unit_of_measurement: "W",
        device_class: "power",
        icon: "mdi:water-boiler",
      },
    },
    "sensor.fridge_power": {
      entity_id: "sensor.fridge_power",
      state: "120",
      attributes: {
        friendly_name: "Refrigerator",
        unit_of_measurement: "W",
        device_class: "power",
        icon: "mdi:fridge",
      },
    },
    "sensor.kitchen_power": {
      entity_id: "sensor.kitchen_power",
      state: "380",
      attributes: {
        friendly_name: "Kitchen Appliances",
        unit_of_measurement: "W",
        device_class: "power",
        icon: "mdi:microwave",
      },
    },
    "sensor.water_temperature": {
      entity_id: "sensor.water_temperature",
      state: "58.4",
      attributes: {
        friendly_name: "Water Temperature",
        unit_of_measurement: "°C",
        device_class: "temperature",
      },
    },
    "switch.water_heater": {
      entity_id: "switch.water_heater",
      state: "on",
      attributes: {
        friendly_name: "Water Heater Switch",
        icon: "mdi:water-boiler",
      },
    },
    "input_select.heating_status": {
      entity_id: "input_select.heating_status",
      state: "heating",
      attributes: {
        options: ["idle", "heating", "ready"],
        friendly_name: "Heating Status",
      },
    },
    "input_select.heating_strategy": {
      entity_id: "input_select.heating_strategy",
      state: "solar",
      attributes: {
        options: ["solar", "grid", "wait"],
        friendly_name: "Heating Strategy",
      },
    },
    "input_text.heating_reason": {
      entity_id: "input_text.heating_reason",
      state: "Surplus solar power exceeds 2.5 kW threshold.",
      attributes: {
        friendly_name: "Strategy Reason",
      },
    },
    "input_datetime.heating_target": {
      entity_id: "input_datetime.heating_target",
      state: "17:00:00",
      attributes: {
        has_time: true,
        has_date: false,
        friendly_name: "Target Time",
      },
    },
    "input_boolean.heating_override": {
      entity_id: "input_boolean.heating_override",
      state: "off",
      attributes: {
        friendly_name: "Manual Override",
      },
    },
  };

  const mockHass: any = {
    states,
    language: "en",
    selectedLanguage: "en",
    locale: {
      language: "en",
      number_format: "language",
      time_format: "language",
      date_format: "language",
      first_weekday: "language",
    },
    themes: {
      default_theme: "default",
      default_dark_theme: "default",
      themes: {},
      darkMode: true,
    },
    selectedTheme: {
      theme: "default",
      dark: true,
    },
    callService: async (domain: string, service: string, serviceData?: any) => {
      console.log(`[MockHass] callService: ${domain}.${service}`, serviceData);
      return Promise.resolve();
    },
    callWS: async (msg: any) => {
      if (msg.type === "history/history_during_period") {
        const now = Date.now();
        const hour = 3600 * 1000;
        const points = 24;
        const result: Record<string, any[]> = {};
        for (const entityId of msg.entity_ids ?? []) {
          result[entityId] = Array.from({ length: points }).map((_, i) => ({
            entity_id: entityId,
            state: String(Math.max(0, Math.round(1500 + 1200 * Math.sin((i / points) * Math.PI * 2) + Math.random() * 200))),
            last_changed: new Date(now - (points - i) * hour).toISOString(),
            last_updated: new Date(now - (points - i) * hour).toISOString(),
            attributes: states[entityId]?.attributes ?? {},
          }));
        }
        return result;
      }
      return [];
    },
    connection: {
      subscribeEvents: () => () => {},
      subscribeMessage: () => () => {},
      sendMessagePromise: async () => ({}),
    },
  };

  return mockHass as HomeAssistant;
}
