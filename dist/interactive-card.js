//#region src/theme/card-theme.ts
function e(e, t = !1) {
	switch (e) {
		case "native": return {
			surfacePrimary: "var(--ha-card-background, var(--card-background-color))",
			surfaceSecondary: "var(--secondary-background-color, var(--ha-card-background))",
			surfaceFloating: "var(--ha-card-background, var(--card-background-color))",
			surfaceCardBackground: "var(--ha-card-background, var(--card-background-color))",
			surfaceTextPrimary: "var(--primary-text-color)",
			surfaceTextSecondary: "var(--secondary-text-color)",
			surfaceIconPrimary: "var(--primary-text-color)",
			surfaceCardBorder: "var(--divider-color)",
			border: "1px solid var(--divider-color)",
			shadow: "var(--ha-card-box-shadow, none)",
			shadowFloating: "var(--ha-card-box-shadow, none)",
			blur: "none",
			blurFloating: "none",
			dialogBackground: "var(--card-background-color, var(--ha-card-background, #fff))",
			dialogBorder: "1px solid var(--divider-color)",
			dialogShadow: "0 20px 50px rgba(0,0,0,.18)",
			dialogBlur: "none",
			popoverBackground: "var(--card-background-color, var(--ha-card-background, #fff))",
			selectDropdownBackground: "var(--card-background-color, var(--ha-card-background, #fff))",
			popoverBorder: "1px solid var(--divider-color)",
			popoverShadow: "0 12px 32px rgba(0,0,0,.18)",
			popoverBlur: "none",
			controlBackground: "var(--secondary-background-color, var(--ha-card-background))",
			controlBorder: "1px solid var(--divider-color)",
			actionBackground: "var(--secondary-background-color, var(--ha-card-background))",
			actionHoverBackground: t ? "rgba(255,255,255,.14)" : "rgba(0,0,0,.08)",
			actionBorder: "1px solid var(--divider-color)",
			radiusDialog: "24px",
			radiusPopover: "24px",
			radiusControl: "var(--ha-card-border-radius, 10px)",
			radiusButton: "var(--ha-card-border-radius, 10px)",
			radiusCard: "var(--ha-card-border-radius, 12px)",
			textPrimary: "var(--primary-text-color)",
			textSecondary: "var(--secondary-text-color)",
			scrollbarTrack: t ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.06)",
			scrollbarThumb: t ? "rgba(255,255,255,.30)" : "rgba(0,0,0,.25)",
			scrollbarThumbHover: t ? "rgba(255,255,255,.42)" : "rgba(0,0,0,.38)",
			scrollbarThumbBorder: t ? "1px solid rgba(255,255,255,.12)" : "1px solid rgba(0,0,0,.10)",
			scrollbarBlur: "none",
			scrollbarWidth: "thin",
			scrollbarSize: "3px",
			scrollbarRadius: "999px",
			selectionSurface: "var(--secondary-background-color, transparent)",
			selectionBorder: "1px solid var(--divider-color)",
			statusSuccess: "var(--en-color-success)",
			statusSuccessSurface: "var(--en-color-success-soft)",
			statusSuccessBorder: "1px solid var(--en-color-success-border)",
			iconBadgeBackground: "transparent",
			iconBadgeHoverBackground: "transparent",
			iconBadgeBrandStrength: "18%",
			iconBadgeHoverBrandStrength: "24%",
			iconBadgeForeground: "currentColor",
			iconBadgeBorder: "transparent",
			iconBadgeBorderBrandStrength: "28%",
			iconBadgeBorderWidth: "1px",
			iconBadgeShadow: "0 3px 10px rgba(0,0,0,.10)",
			iconBadgeBlur: "none",
			highlight: "none"
		};
		case "solid": return {
			surfacePrimary: t ? "#111318" : "#F2F3F7",
			surfaceSecondary: t ? "#1a1d24" : "#f7f7f7",
			surfaceFloating: t ? "#171a20" : "#F2F3F7",
			surfaceCardBackground: t ? "#111318" : "#F2F3F7",
			surfaceTextPrimary: t ? "#f5f5f7" : "#202124",
			surfaceTextSecondary: t ? "rgba(255,255,255,.62)" : "rgba(32,33,36,.62)",
			surfaceIconPrimary: t ? "#d8d9df" : "#3f444d",
			surfaceCardBorder: t ? "rgba(255,255,255,.12)" : "rgba(20,24,32,.10)",
			border: t ? "1px solid rgba(255,255,255,.12)" : "1px solid rgba(20,24,32,.10)",
			shadow: t ? "0 10px 40px rgba(0,0,0,.30)" : "0 10px 40px rgba(0,0,0,.14)",
			shadowFloating: t ? "0 14px 42px rgba(0,0,0,.36)" : "0 14px 42px rgba(0,0,0,.18)",
			blur: "none",
			blurFloating: "none",
			dialogBackground: t ? "#171a20" : "#F2F3F7",
			dialogBorder: t ? "1px solid rgba(255,255,255,.12)" : "1px solid rgba(20,24,32,.10)",
			dialogShadow: t ? "0 20px 50px rgba(0,0,0,.38)" : "0 20px 50px rgba(0,0,0,.18)",
			dialogBlur: "none",
			popoverBackground: t ? "#171a20" : "#F2F3F7",
			selectDropdownBackground: t ? "#171a20" : "#F2F3F7",
			popoverBorder: t ? "1px solid rgba(255,255,255,.12)" : "1px solid rgba(20,24,32,.10)",
			popoverShadow: t ? "0 14px 42px rgba(0,0,0,.36)" : "0 14px 42px rgba(0,0,0,.18)",
			popoverBlur: "none",
			controlBackground: t ? "#1a1d24" : "#f7f7f7",
			controlBorder: t ? "1px solid rgba(255,255,255,.12)" : "1px solid rgba(20,24,32,.10)",
			actionBackground: t ? "rgba(255,255,255,.10)" : "rgba(0,0,0,.07)",
			actionHoverBackground: t ? "rgba(255,255,255,.16)" : "rgba(0,0,0,.12)",
			actionBorder: t ? "1px solid rgba(255,255,255,.12)" : "1px solid rgba(20,24,32,.10)",
			radiusDialog: "24px",
			radiusPopover: "24px",
			radiusControl: "12px",
			radiusButton: "14px",
			radiusCard: "24px",
			textPrimary: t ? "#f5f5f7" : "#202124",
			textSecondary: t ? "rgba(255,255,255,.62)" : "rgba(32,33,36,.62)",
			scrollbarTrack: t ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.08)",
			scrollbarThumb: t ? "rgba(255,255,255,.22)" : "rgba(0,0,0,.20)",
			scrollbarThumbHover: t ? "rgba(255,255,255,.34)" : "rgba(0,0,0,.32)",
			scrollbarThumbBorder: t ? "1px solid rgba(255,255,255,.12)" : "1px solid rgba(0,0,0,.10)",
			scrollbarBlur: "none",
			scrollbarWidth: "thin",
			scrollbarSize: "3px",
			scrollbarRadius: "999px",
			selectionSurface: t ? "rgba(255,255,255,.10)" : "rgba(0,0,0,.06)",
			selectionBorder: t ? "1px solid rgba(255,255,255,.16)" : "1px solid rgba(0,0,0,.12)",
			statusSuccess: "var(--en-color-success)",
			statusSuccessSurface: "var(--en-color-success-soft)",
			statusSuccessBorder: "1px solid var(--en-color-success-border)",
			iconBadgeBackground: "transparent",
			iconBadgeHoverBackground: "transparent",
			iconBadgeBrandStrength: "100%",
			iconBadgeHoverBrandStrength: "100%",
			iconBadgeForeground: "#fff",
			iconBadgeBorder: "transparent",
			iconBadgeBorderBrandStrength: "0%",
			iconBadgeBorderWidth: "0px",
			iconBadgeShadow: "0 4px 12px rgba(0,0,0,.14)",
			iconBadgeBlur: "none",
			highlight: "none"
		};
		default: return {
			surfacePrimary: "rgba(255,255,255,.08)",
			surfaceSecondary: "rgba(255,255,255,.06)",
			surfaceFloating: "rgba(255,255,255,.14)",
			surfaceCardBackground: "rgba(255,255,255,.08)",
			surfaceTextPrimary: t ? "#fff" : "#000",
			surfaceTextSecondary: t ? "rgba(255,255,255,.65)" : "rgba(0,0,0,.65)",
			surfaceIconPrimary: t ? "rgba(255,255,255,.78)" : "rgba(0,0,0,.72)",
			surfaceCardBorder: "rgba(255,255,255,.18)",
			border: "1px solid rgba(255,255,255,.18)",
			shadow: "0 10px 40px rgba(0,0,0,.18)",
			shadowFloating: "0 14px 42px rgba(0,0,0,.28)",
			blur: "blur(25px)",
			blurFloating: "blur(30px)",
			dialogBackground: "rgba(255,255,255,.08)",
			dialogBorder: "1px solid rgba(255,255,255,.18)",
			dialogShadow: "0 28px 90px rgba(0,0,0,.4)",
			dialogBlur: "blur(30px)",
			popoverBackground: "rgba(255,255,255,.14)",
			selectDropdownBackground: t ? "rgba(28,28,32,.88)" : "rgba(248,248,250,.9)",
			popoverBorder: "1px solid rgba(255,255,255,.18)",
			popoverShadow: "0 14px 42px rgba(0,0,0,.28)",
			popoverBlur: "blur(30px)",
			controlBackground: "rgba(255,255,255,.06)",
			controlBorder: "1px solid rgba(255,255,255,.18)",
			actionBackground: "rgba(255,255,255,.15)",
			actionHoverBackground: "rgba(255,255,255,.25)",
			actionBorder: "1px solid rgba(255,255,255,.12)",
			radiusDialog: "24px",
			radiusPopover: "24px",
			radiusControl: "16px",
			radiusButton: "18px",
			radiusCard: "28px",
			textPrimary: t ? "#fff" : "#000",
			textSecondary: t ? "rgba(255,255,255,.65)" : "rgba(0,0,0,.65)",
			scrollbarTrack: t ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.06)",
			scrollbarThumb: t ? "rgba(255,255,255,.25)" : "rgba(0,0,0,.25)",
			scrollbarThumbHover: t ? "rgba(255,255,255,.35)" : "rgba(0,0,0,.35)",
			scrollbarThumbBorder: t ? "1px solid rgba(255,255,255,.15)" : "1px solid rgba(0,0,0,.12)",
			scrollbarBlur: "blur(10px)",
			scrollbarWidth: "thin",
			scrollbarSize: "3px",
			scrollbarRadius: "999px",
			selectionSurface: t ? "rgba(255,255,255,.12)" : "rgba(0,0,0,.08)",
			selectionBorder: t ? "1px solid rgba(255,255,255,.2)" : "1px solid rgba(0,0,0,.14)",
			statusSuccess: "var(--en-color-success)",
			statusSuccessSurface: "var(--en-color-success-soft)",
			statusSuccessBorder: "1px solid var(--en-color-success-border)",
			iconBadgeBackground: "rgba(255,255,255,.10)",
			iconBadgeHoverBackground: "rgba(255,255,255,.16)",
			iconBadgeBrandStrength: "0%",
			iconBadgeHoverBrandStrength: "0%",
			iconBadgeForeground: "currentColor",
			iconBadgeBorder: "rgba(255,255,255,.18)",
			iconBadgeBorderBrandStrength: "0%",
			iconBadgeBorderWidth: "1px",
			iconBadgeShadow: "0 5px 16px rgba(0,0,0,.12)",
			iconBadgeBlur: "blur(18px)",
			highlight: "linear-gradient(180deg, rgba(255,255,255,.16), transparent)"
		};
	}
}
//#endregion
//#region src/theme/theme-storage.ts
var t = "interactive-card:appearance-theme:v1", n = /* @__PURE__ */ new Set([
	"glass",
	"solid",
	"native"
]);
function r() {
	try {
		let e = globalThis.localStorage?.getItem(t);
		return e === "black" || e === "white" ? "solid" : e === "default" ? "native" : e && n.has(e) ? e : "glass";
	} catch {
		return "glass";
	}
}
function i(e) {
	try {
		globalThis.localStorage?.setItem(t, e);
	} catch {}
}
//#endregion
//#region src/design-system/motion.ts
var a = {
	fast: "150ms",
	normal: "300ms",
	slow: "500ms",
	carousel: "350ms",
	easing: "cubic-bezier(.25,.1,.25,1)"
}, o = {
	fast: 150,
	normal: 300,
	slow: 500,
	carousel: 350
}, s = {
	control: "16px",
	popover: "24px",
	button: "18px",
	modal: "24px",
	card: "28px",
	round: "999px"
}, c = {
	card: "0 10px 40px rgba(0,0,0,.18)",
	floating: "0 14px 42px rgba(0,0,0,.28)",
	modal: "0 28px 90px rgba(0,0,0,.4)"
}, l = {
	xs: "4px",
	sm: "8px",
	md: "16px",
	lg: "24px",
	xl: "32px"
};
//#endregion
//#region src/design-system/tokens.ts
function u() {
	return `
    --en-color-primary:#444D9E;
    --en-color-primary-hover:color-mix(in srgb,var(--en-color-primary) 14%,transparent);
    --en-color-primary-active:color-mix(in srgb,var(--en-color-primary) 86%,#000);
    --en-color-primary-border:color-mix(in srgb,var(--en-color-primary) 45%,transparent);
    --en-color-primary-soft:color-mix(in srgb,var(--en-color-primary) 12%,transparent);
    --en-color-primary-glow:color-mix(in srgb,var(--en-color-primary) 16%,transparent);
    --en-color-accent:#FBB03B;
    --en-color-accent-hover:color-mix(in srgb,var(--en-color-accent) 14%,transparent);
    --en-color-accent-active:color-mix(in srgb,var(--en-color-accent) 86%,#000);
    --en-color-accent-border:color-mix(in srgb,var(--en-color-accent) 45%,transparent);
    --en-color-accent-soft:color-mix(in srgb,var(--en-color-accent) 12%,transparent);
    --en-color-accent-glow:color-mix(in srgb,var(--en-color-accent) 16%,transparent);
    --en-color-success:#8CC34B;
    --en-color-success-hover:color-mix(in srgb,var(--en-color-success) 14%,transparent);
    --en-color-success-active:color-mix(in srgb,var(--en-color-success) 86%,#000);
    --en-color-success-border:color-mix(in srgb,var(--en-color-success) 45%,transparent);
    --en-color-success-soft:color-mix(in srgb,var(--en-color-success) 12%,transparent);
    --en-color-success-glow:color-mix(in srgb,var(--en-color-success) 16%,transparent);
    --en-color-warning:var(--en-color-accent);
    --en-color-selected:var(--en-color-primary);
    --en-color-focus:var(--en-color-primary);
    --en-color-series-1:var(--en-color-primary);
    --en-color-series-2:var(--en-color-accent);
    --en-color-series-3:var(--en-color-success);
    --en-color-series-4:color-mix(in srgb,var(--en-color-primary) 80%,#fff);
    --en-color-series-5:color-mix(in srgb,var(--en-color-accent) 80%,#fff);
    --en-color-series-6:color-mix(in srgb,var(--en-color-success) 80%,#fff);
    --en-space-xs:${l.xs};
    --en-space-sm:${l.sm};
    --en-space-md:${l.md};
    --en-space-lg:${l.lg};
    --en-space-xl:${l.xl};
    --en-radius-control:${s.control};
    --en-radius-popover:${s.popover};
    --en-radius-button:${s.button};
    --en-radius-modal:${s.modal};
    --en-radius-card:${s.card};
    --en-radius-round:${s.round};
    --ic-radius-dialog:var(--en-dialog-radius,28px);
    --ic-radius-popover:var(--en-radius-popover);
    --ic-radius-control:var(--en-radius-control);
    --ic-radius-button:var(--en-control-radius,999px);
    --ic-radius-card:var(--en-radius-card);
    --en-shadow-card:${c.card};
    --en-shadow-floating:${c.floating};
    --en-shadow-modal:${c.modal};
    --ic-shadow-dialog:var(--en-shadow-modal);
    --ic-shadow-popover:var(--en-shadow-floating);
    --ic-shadow-card:var(--en-shadow-card);
    --en-motion-fast:${a.fast};
    --en-motion-normal:${a.normal};
    --en-motion-slow:${a.slow};
    --en-motion-carousel:${a.carousel};
    --en-easing-standard:${a.easing};
    --en-title-xl-size:34px;
    --en-title-xl-weight:600;
    --en-title-xl-line-height:1.15;
    --en-title-xl-letter-spacing:-0.5px;
    --en-title-lg-size:24px;
    --en-title-lg-weight:600;
    --en-title-lg-line-height:1.2;
    --en-title-lg-letter-spacing:-0.3px;
    --en-title-md-size:18px;
    --en-title-md-weight:600;
    --en-title-md-line-height:1.25;
    --en-title-md-letter-spacing:-0.1px;
    --en-body-size:14px;
    --en-body-line-height:1.4;
    --en-helper-size:13px;
    --en-helper-weight:400;
    --en-helper-line-height:1.3;
    --en-helper-opacity:.7;
    --en-data-weight:700;
    --en-section-heading-size:var(--en-title-lg-size);
    --en-section-heading-weight:var(--en-title-lg-weight);
    --en-section-heading-line-height:var(--en-title-lg-line-height);
    --en-section-heading-letter-spacing:var(--en-title-lg-letter-spacing);
    --en-section-heading-margin-bottom:16px;
    --en-circuit-shadow-safe-area:18px;
    --ic-dialog-padding:24px 32px;
    --ic-dialog-content-gap:24px;
    --ic-dialog-field-group-gap:20px;
    --ic-dialog-section-gap:24px;
    --ic-dialog-field-gap:8px;
    --ic-dialog-footer-gap:12px;
    --ic-dialog-footer-padding:24px 32px;
    --ic-field-height:var(--en-control-height,52px);
    --ic-field-padding-inline:var(--en-control-padding-inline,20px);
    --ic-field-font-size:var(--en-control-font-size,16px);
    --ic-button-height:var(--en-control-height-compact,38px);
    --ic-picker-item-radius:var(--en-panel-radius,18px);
    --en-control-height:40px;
    --en-control-height-compact:40px;
    --en-control-radius:999px;
    --en-panel-radius:18px;
    --en-dialog-radius:28px;
    --en-control-padding-inline:20px;
    --en-control-padding-inline-compact:14px;
    --en-control-font-size:16px;
    --en-control-font-weight:400;
    --en-control-active-background:var(--en-color-primary);
    --en-control-active-foreground:#fff;
    --en-label-font-size:14px;
    --en-label-font-weight:600;
    --en-helper-font-size:13px;
    --en-helper-font-weight:400;
    --en-control-gap:8px;
    --en-card-content-inset:18px;
    --en-kpi-content-start-inset:1.125px;
    --en-kpi-content-end-inset:4.5px;
    --en-field-group-gap:20px;
    --en-section-gap:24px;
    --en-menu-item-height:40px;
    --en-menu-item-radius:999px;
    --en-menu-item-gap:6px;
    --en-scrollbar-width:thin;
    --en-scrollbar-size:3px;
    --en-menu-scrollbar-inset:8px;
    --en-menu-scrollbar-content-gap:8px;
    --en-menu-padding-bottom:16px;
    --en-menu-bottom-padding:var(--en-menu-padding-bottom);
    --en-segmented-radius:999px;
    --en-chevron-offset-y:-3px;
    --ic-focus-ring:2px solid var(--en-color-focus);
  `;
}
//#endregion
//#region src/theme/theme-provider.ts
var d = [
	"energy-kpi-card",
	"energy-kpi-section",
	"energy-trend-card",
	"energy-circuit-section",
	"energy-ev-charging-scene",
	"energy-solar-scene",
	"energy-battery-scene",
	"energy-appliance-scene",
	"energy-pet-scene",
	"energy-insight-card",
	"energy-flow-diagram",
	"energy-theme-selector",
	"energy-settings-card",
	"energy-automation-card"
].join(","), f = "interactive-card-theme-provider", p = r(), ee;
function te() {
	let e = document.querySelector("home-assistant")?.hass?.themes?.darkMode;
	if (typeof e == "boolean") return e;
	let t = getComputedStyle(document.documentElement).getPropertyValue("--primary-text-color").trim(), n = t.match(/^#([\da-f]{6})$/i), r = t.match(/rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i), i = n ? [
		n[1].slice(0, 2),
		n[1].slice(2, 4),
		n[1].slice(4, 6)
	].map((e) => Number.parseInt(e, 16)) : r ? r.slice(1, 4).map(Number) : void 0;
	return i ? i[0] * .2126 + i[1] * .7152 + i[2] * .0722 > 150 : window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
}
function ne() {
	let e = document.getElementById(f);
	if (e instanceof HTMLStyleElement) return e;
	let t = document.createElement("style");
	return t.id = f, document.head.append(t), t;
}
function m(t) {
	p = t;
	let n = te();
	ee = n;
	let r = e(t, n), i = ne(), a = t === "native" ? "" : `
        ${d} {
          --primary-text-color: var(--ic-card-primary-text);
          --secondary-text-color: var(--ic-card-secondary-text);
        }
      `;
	i.textContent = `
    :root {
      ${u()}
      --en-surface-primary:${r.surfacePrimary};
      --en-surface-secondary:${r.surfaceSecondary};
      --en-surface-floating:${r.surfaceFloating};
      --en-surface-card-bg:${r.surfaceCardBackground};
      --en-surface-text-primary:${r.surfaceTextPrimary};
      --en-surface-text-secondary:${r.surfaceTextSecondary};
      --en-surface-icon-primary:${r.surfaceIconPrimary};
      --en-surface-card-border:${r.surfaceCardBorder};
      --en-solid-surface:${r.surfaceCardBackground};
      --en-solid-surface-border:${r.surfaceCardBorder};
      --en-solid-heading:${r.surfaceTextPrimary};
      --en-solid-text:${r.surfaceTextPrimary};
      --en-solid-text-secondary:${r.surfaceTextSecondary};
      --en-solid-icon:${r.surfaceIconPrimary};
      --en-solid-shadow:${r.shadow};
      --en-surface-control:${r.controlBackground};
      --en-text-primary:${r.textPrimary};
      --en-text-secondary:${r.textSecondary};
      --en-heading-primary:${r.textPrimary};
      --en-subtitle-secondary:${r.textSecondary};
      --en-body-primary:${r.textPrimary};
      --en-body-secondary:${r.textSecondary};
      --en-scrollbar-track:${r.scrollbarTrack};
      --en-scrollbar-thumb:${r.scrollbarThumb};
      --en-scrollbar-thumb-hover:${r.scrollbarThumbHover};
      --en-scrollbar-thumb-border:${r.scrollbarThumbBorder};
      --en-scrollbar-blur:${r.scrollbarBlur};
      --en-scrollbar-width:${r.scrollbarWidth};
      --en-scrollbar-size:${r.scrollbarSize};
      --en-scrollbar-radius:${r.scrollbarRadius};
      --en-selection-surface:${r.selectionSurface};
      --en-selection-border:${r.selectionBorder};
      --en-surface-selected:${r.selectionSurface};
      --en-border-selected:${r.selectionBorder};
      --en-status-success:${r.statusSuccess};
      --en-status-success-surface:${r.statusSuccessSurface};
      --en-status-success-border:${r.statusSuccessBorder};
      --en-icon-badge-background:${r.iconBadgeBackground};
      --en-icon-badge-hover-background:${r.iconBadgeHoverBackground};
      --en-icon-badge-brand-strength:${r.iconBadgeBrandStrength};
      --en-icon-badge-hover-brand-strength:${r.iconBadgeHoverBrandStrength};
      --en-icon-badge-foreground:${r.iconBadgeForeground};
      --en-icon-badge-border:${r.iconBadgeBorder};
      --en-icon-badge-border-brand-strength:${r.iconBadgeBorderBrandStrength};
      --en-icon-badge-border-width:${r.iconBadgeBorderWidth};
      --en-icon-badge-shadow:${r.iconBadgeShadow};
      --en-icon-badge-blur:${r.iconBadgeBlur};
      --en-border:${r.border};
      --en-border-control:${r.controlBorder};
      --en-shadow-surface:${r.shadow};
      --en-shadow-floating:${r.shadowFloating};
      --en-blur:${r.blur};
      --en-blur-floating:${r.blurFloating};
      --en-blur-control:${r.blur};
      --ic-dialog-background:${r.dialogBackground};
      --ic-dialog-border:${r.dialogBorder};
      --ic-dialog-shadow:${r.dialogShadow};
      --ic-dialog-blur:${r.dialogBlur};
      --ic-popover-background:${r.popoverBackground};
      --ic-select-dropdown-background:${r.selectDropdownBackground};
      --ic-popover-border:${r.popoverBorder};
      --ic-popover-shadow:${r.popoverShadow};
      --ic-popover-blur:${r.popoverBlur};
      --ic-control-background:${r.controlBackground};
      --ic-control-border:${r.controlBorder};
      --ic-action-background:${r.actionBackground};
      --ic-action-hover-background:${r.actionHoverBackground};
      --ic-action-border:${r.actionBorder};
      --ic-radius-dialog:${r.radiusDialog};
      --ic-radius-popover:${r.radiusPopover};
      --ic-radius-control:${r.radiusControl};
      --ic-radius-button:${r.radiusButton};
      --ic-radius-card:${r.radiusCard};
      --ic-shadow-dialog:${r.dialogShadow};
      --ic-shadow-popover:${r.popoverShadow};
      --ic-border-dialog:${r.dialogBorder};
      --ic-border-popover:${r.popoverBorder};
      --ic-border-control:${r.controlBorder};
      --ic-border-card:${r.border};
      --ic-shadow-card:${r.shadow};
      --ic-card-background:var(--en-surface-primary);
      --ic-card-border:var(--en-border);
      --ic-card-shadow:var(--en-shadow-surface);
      --ic-card-backdrop-filter:var(--en-blur);
      --ic-card-primary-text:var(--en-text-primary);
      --ic-card-secondary-text:var(--en-text-secondary);
      --ic-card-highlight: ${r.highlight};
    }

    ${d} {
      --primary-color:var(--en-color-primary);
      --success-color:var(--en-color-success);
      --warning-color:var(--en-color-accent);
    }

    ${a}
  `, document.documentElement.dataset.icCardTheme !== t && (document.documentElement.dataset.icCardTheme = t), window.dispatchEvent(new CustomEvent("card-theme-changed", { detail: t }));
}
function re(e) {
	i(e), m(e);
}
function ie() {
	return p;
}
m(p);
function ae() {
	te() !== ee && m(p);
}
function oe() {
	let e = new MutationObserver(() => {
		requestAnimationFrame(ae);
	});
	e.observe(document.documentElement, {
		attributes: !0,
		attributeFilter: ["class", "style"]
	});
	let t = document.querySelector("home-assistant");
	t && e.observe(t, {
		attributes: !0,
		attributeFilter: [
			"class",
			"style",
			"theme"
		]
	}), requestAnimationFrame(ae);
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", oe, { once: !0 }) : oe(), window.matchMedia?.("(prefers-color-scheme: dark)").addEventListener("change", () => {
	m(p);
}), window.addEventListener("settheme", () => {
	requestAnimationFrame(() => m(p));
});
//#endregion
//#region node_modules/@lit/reactive-element/css-tag.js
var se = globalThis, ce = se.ShadowRoot && (se.ShadyCSS === void 0 || se.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, le = Symbol(), ue = /* @__PURE__ */ new WeakMap(), de = class {
	constructor(e, t, n) {
		if (this._$cssResult$ = !0, n !== le) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = e, this.t = t;
	}
	get styleSheet() {
		let e = this.o, t = this.t;
		if (ce && e === void 0) {
			let n = t !== void 0 && t.length === 1;
			n && (e = ue.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && ue.set(t, e));
		}
		return e;
	}
	toString() {
		return this.cssText;
	}
}, fe = (e) => new de(typeof e == "string" ? e : e + "", void 0, le), h = (e, ...t) => new de(e.length === 1 ? e[0] : t.reduce((t, n, r) => t + ((e) => {
	if (!0 === e._$cssResult$) return e.cssText;
	if (typeof e == "number") return e;
	throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
})(n) + e[r + 1], e[0]), e, le), pe = (e, t) => {
	if (ce) e.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
	else for (let n of t) {
		let t = document.createElement("style"), r = se.litNonce;
		r !== void 0 && t.setAttribute("nonce", r), t.textContent = n.cssText, e.appendChild(t);
	}
}, me = ce ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
	let t = "";
	for (let n of e.cssRules) t += n.cssText;
	return fe(t);
})(e) : e, { is: he, defineProperty: ge, getOwnPropertyDescriptor: _e, getOwnPropertyNames: ve, getOwnPropertySymbols: ye, getPrototypeOf: be } = Object, xe = globalThis, Se = xe.trustedTypes, Ce = Se ? Se.emptyScript : "", we = xe.reactiveElementPolyfillSupport, g = (e, t) => e, Te = {
	toAttribute(e, t) {
		switch (t) {
			case Boolean:
				e = e ? Ce : null;
				break;
			case Object:
			case Array: e = e == null ? e : JSON.stringify(e);
		}
		return e;
	},
	fromAttribute(e, t) {
		let n = e;
		switch (t) {
			case Boolean:
				n = e !== null;
				break;
			case Number:
				n = e === null ? null : Number(e);
				break;
			case Object:
			case Array: try {
				n = JSON.parse(e);
			} catch {
				n = null;
			}
		}
		return n;
	}
}, Ee = (e, t) => !he(e, t), De = {
	attribute: !0,
	type: String,
	converter: Te,
	reflect: !1,
	useDefault: !1,
	hasChanged: Ee
};
Symbol.metadata ??= Symbol("metadata"), xe.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var _ = class extends HTMLElement {
	static addInitializer(e) {
		this._$Ei(), (this.l ??= []).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, t = De) {
		if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
			let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
			r !== void 0 && ge(this.prototype, e, r);
		}
	}
	static getPropertyDescriptor(e, t, n) {
		let { get: r, set: i } = _e(this.prototype, e) ?? {
			get() {
				return this[t];
			},
			set(e) {
				this[t] = e;
			}
		};
		return {
			get: r,
			set(t) {
				let a = r?.call(this);
				i?.call(this, t), this.requestUpdate(e, a, n);
			},
			configurable: !0,
			enumerable: !0
		};
	}
	static getPropertyOptions(e) {
		return this.elementProperties.get(e) ?? De;
	}
	static _$Ei() {
		if (this.hasOwnProperty(g("elementProperties"))) return;
		let e = be(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(g("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(g("properties"))) {
			let e = this.properties, t = [...ve(e), ...ye(e)];
			for (let n of t) this.createProperty(n, e[n]);
		}
		let e = this[Symbol.metadata];
		if (e !== null) {
			let t = litPropertyMetadata.get(e);
			if (t !== void 0) for (let [e, n] of t) this.elementProperties.set(e, n);
		}
		this._$Eh = /* @__PURE__ */ new Map();
		for (let [e, t] of this.elementProperties) {
			let n = this._$Eu(e, t);
			n !== void 0 && this._$Eh.set(n, e);
		}
		this.elementStyles = this.finalizeStyles(this.styles);
	}
	static finalizeStyles(e) {
		let t = [];
		if (Array.isArray(e)) {
			let n = new Set(e.flat(Infinity).reverse());
			for (let e of n) t.unshift(me(e));
		} else e !== void 0 && t.push(me(e));
		return t;
	}
	static _$Eu(e, t) {
		let n = t.attribute;
		return !1 === n ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
	}
	constructor() {
		super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
	}
	_$Ev() {
		this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((e) => e(this));
	}
	addController(e) {
		(this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
	}
	removeController(e) {
		this._$EO?.delete(e);
	}
	_$E_() {
		let e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
		for (let n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
		e.size > 0 && (this._$Ep = e);
	}
	createRenderRoot() {
		let e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
		return pe(e, this.constructor.elementStyles), e;
	}
	connectedCallback() {
		this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((e) => e.hostConnected?.());
	}
	enableUpdating(e) {}
	disconnectedCallback() {
		this._$EO?.forEach((e) => e.hostDisconnected?.());
	}
	attributeChangedCallback(e, t, n) {
		this._$AK(e, n);
	}
	_$ET(e, t) {
		let n = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, n);
		if (r !== void 0 && !0 === n.reflect) {
			let i = (n.converter?.toAttribute === void 0 ? Te : n.converter).toAttribute(t, n.type);
			this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
		}
	}
	_$AK(e, t) {
		let n = this.constructor, r = n._$Eh.get(e);
		if (r !== void 0 && this._$Em !== r) {
			let e = n.getPropertyOptions(r), i = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? Te : e.converter;
			this._$Em = r;
			let a = i.fromAttribute(t, e.type);
			this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
		}
	}
	requestUpdate(e, t, n, r = !1, i) {
		if (e !== void 0) {
			let a = this.constructor;
			if (!1 === r && (i = this[e]), n ??= a.getPropertyOptions(e), !((n.hasChanged ?? Ee)(i, t) || n.useDefault && n.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(a._$Eu(e, n)))) return;
			this.C(e, t, n);
		}
		!1 === this.isUpdatePending && (this._$ES = this._$EP());
	}
	C(e, t, { useDefault: n, reflect: r, wrapped: i }, a) {
		n && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]), !0 !== i || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), !0 === r && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
	}
	async _$EP() {
		this.isUpdatePending = !0;
		try {
			await this._$ES;
		} catch (e) {
			Promise.reject(e);
		}
		let e = this.scheduleUpdate();
		return e != null && await e, !this.isUpdatePending;
	}
	scheduleUpdate() {
		return this.performUpdate();
	}
	performUpdate() {
		if (!this.isUpdatePending) return;
		if (!this.hasUpdated) {
			if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
				for (let [e, t] of this._$Ep) this[e] = t;
				this._$Ep = void 0;
			}
			let e = this.constructor.elementProperties;
			if (e.size > 0) for (let [t, n] of e) {
				let { wrapped: e } = n, r = this[t];
				!0 !== e || this._$AL.has(t) || r === void 0 || this.C(t, void 0, n, r);
			}
		}
		let e = !1, t = this._$AL;
		try {
			e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach((e) => e.hostUpdate?.()), this.update(t)) : this._$EM();
		} catch (t) {
			throw e = !1, this._$EM(), t;
		}
		e && this._$AE(t);
	}
	willUpdate(e) {}
	_$AE(e) {
		this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
	}
	_$EM() {
		this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
	}
	get updateComplete() {
		return this.getUpdateComplete();
	}
	getUpdateComplete() {
		return this._$ES;
	}
	shouldUpdate(e) {
		return !0;
	}
	update(e) {
		this._$Eq &&= this._$Eq.forEach((e) => this._$ET(e, this[e])), this._$EM();
	}
	updated(e) {}
	firstUpdated(e) {}
};
_.elementStyles = [], _.shadowRootOptions = { mode: "open" }, _[g("elementProperties")] = /* @__PURE__ */ new Map(), _[g("finalized")] = /* @__PURE__ */ new Map(), we?.({ ReactiveElement: _ }), (xe.reactiveElementVersions ??= []).push("2.1.2");
//#endregion
//#region node_modules/lit-html/lit-html.js
var Oe = globalThis, ke = (e) => e, v = Oe.trustedTypes, Ae = v ? v.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, je = "$lit$", y = `lit$${Math.random().toFixed(9).slice(2)}$`, Me = "?" + y, Ne = `<${Me}>`, b = document, x = () => b.createComment(""), S = (e) => e === null || typeof e != "object" && typeof e != "function", Pe = Array.isArray, Fe = (e) => Pe(e) || typeof e?.[Symbol.iterator] == "function", Ie = "[ 	\n\f\r]", C = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Le = /-->/g, Re = />/g, w = RegExp(`>|${Ie}(?:([^\\s"'>=/]+)(${Ie}*=${Ie}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), ze = /'/g, Be = /"/g, Ve = /^(?:script|style|textarea|title)$/i, He = (e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}), T = He(1), E = He(2), D = Symbol.for("lit-noChange"), O = Symbol.for("lit-nothing"), Ue = /* @__PURE__ */ new WeakMap(), k = b.createTreeWalker(b, 129);
function We(e, t) {
	if (!Pe(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return Ae === void 0 ? t : Ae.createHTML(t);
}
var Ge = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = C;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === C ? c[1] === "!--" ? o = Le : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = w) : (Ve.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = w) : o = Re : o === w ? c[0] === ">" ? (o = i ?? C, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? w : c[3] === "\"" ? Be : ze) : o === Be || o === ze ? o = w : o === Le || o === Re ? o = C : (o = w, i = void 0);
		let d = o === w && e[t + 1].startsWith("/>") ? " " : "";
		a += o === C ? n + Ne : l >= 0 ? (r.push(s), n.slice(0, l) + je + n.slice(l) + y + d) : n + y + (l === -2 ? t : d);
	}
	return [We(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, Ke = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = Ge(t, n);
		if (this.el = e.createElement(l, r), k.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = k.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(je)) {
					let t = u[o++], n = i.getAttribute(e).split(y), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? Xe : r[1] === "?" ? Ze : r[1] === "@" ? Qe : Ye
					}), i.removeAttribute(e);
				} else e.startsWith(y) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (Ve.test(i.tagName)) {
					let e = i.textContent.split(y), t = e.length - 1;
					if (t > 0) {
						i.textContent = v ? v.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], x()), k.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], x());
					}
				}
			} else if (i.nodeType === 8) if (i.data === Me) c.push({
				type: 2,
				index: a
			});
			else {
				let e = -1;
				for (; (e = i.data.indexOf(y, e + 1)) !== -1;) c.push({
					type: 7,
					index: a
				}), e += y.length - 1;
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = b.createElement("template");
		return n.innerHTML = e, n;
	}
};
function A(e, t, n = e, r) {
	if (t === D) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = S(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = A(e, i._$AS(e, t.values), i, r)), t;
}
var qe = class {
	constructor(e, t) {
		this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
	}
	get parentNode() {
		return this._$AM.parentNode;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	u(e) {
		let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? b).importNode(t, !0);
		k.currentNode = r;
		let i = k.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new Je(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new $e(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = k.nextNode(), a++);
		}
		return k.currentNode = b, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, Je = class e {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, t, n, r) {
		this.type = 2, this._$AH = O, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
	}
	get parentNode() {
		let e = this._$AA.parentNode, t = this._$AM;
		return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
	}
	get startNode() {
		return this._$AA;
	}
	get endNode() {
		return this._$AB;
	}
	_$AI(e, t = this) {
		e = A(this, e, t), S(e) ? e === O || e == null || e === "" ? (this._$AH !== O && this._$AR(), this._$AH = O) : e !== this._$AH && e !== D && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? Fe(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== O && S(this._$AH) ? this._$AA.nextSibling.data = e : this.T(b.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = Ke.createElement(We(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new qe(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = Ue.get(e.strings);
		return t === void 0 && Ue.set(e.strings, t = new Ke(e)), t;
	}
	k(t) {
		Pe(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(x()), this.O(x()), this, this.options)) : r = n[i], r._$AI(a), i++;
		i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
	}
	_$AR(e = this._$AA.nextSibling, t) {
		for (this._$AP?.(!1, !0, t); e !== this._$AB;) {
			let t = ke(e).nextSibling;
			ke(e).remove(), e = t;
		}
	}
	setConnected(e) {
		this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
	}
}, Ye = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = O, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = O;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = A(this, e, t, 0), a = !S(e) || e !== this._$AH && e !== D, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = A(this, r[n + o], t, o), s === D && (s = this._$AH[o]), a ||= !S(s) || s !== this._$AH[o], s === O ? e = O : e !== O && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === O ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, Xe = class extends Ye {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === O ? void 0 : e;
	}
}, Ze = class extends Ye {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== O);
	}
}, Qe = class extends Ye {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = A(this, e, t, 0) ?? O) === D) return;
		let n = this._$AH, r = e === O && n !== O || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== O && (n === O || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, $e = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		A(this, e);
	}
}, et = Oe.litHtmlPolyfillSupport;
et?.(Ke, Je), (Oe.litHtmlVersions ??= []).push("3.3.3");
var tt = (e, t, n) => {
	let r = n?.renderBefore ?? t, i = r._$litPart$;
	if (i === void 0) {
		let e = n?.renderBefore ?? null;
		r._$litPart$ = i = new Je(t.insertBefore(x(), e), e, void 0, n ?? {});
	}
	return i._$AI(e), i;
}, nt = globalThis, j = class extends _ {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let e = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= e.firstChild, e;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = tt(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return D;
	}
};
j._$litElement$ = !0, j.finalized = !0, nt.litElementHydrateSupport?.({ LitElement: j });
var rt = nt.litElementPolyfillSupport;
rt?.({ LitElement: j }), (nt.litElementVersions ??= []).push("4.2.2");
//#endregion
//#region src/styles/kpi.ts
var it = h`
  .content {
    display: grid;
    width: 100%;
    min-width: 0;
    height: 100%;
    grid-template-columns: minmax(0, 1fr) 55px;
    column-gap: var(--kpi-content-gap, 6px);
    align-items: center;
  }

  .kpi-copy {
    display: flex;
    min-width: 0;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    grid-column: 1;
    grid-row: 1;
  }

  .name {
    justify-self: start;
    align-self: flex-start;
    margin-bottom: 4px;
    transform: translateY(-5px);
    color: var(--en-surface-text-primary, var(--en-heading-primary, var(--primary-text-color)));
    min-width: 0;
    overflow: hidden;
    font-size: var(--kpi-name-size, var(--en-title-md-size, 18px));
    font-weight: var(--en-title-md-weight, 600);
    line-height: var(--en-title-md-line-height, 1.25);
    letter-spacing: -0.3px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  ic-metric-value {
    display: flex;
    height: auto;
    align-items: baseline;
    --metric-value-size: var(--kpi-value-size, 36px);
    --metric-value-weight: var(--en-data-weight, 700);
    --metric-value-letter-spacing: -2px;
    --metric-value-color: var(--en-surface-text-primary, var(--en-heading-primary, var(--primary-text-color)));
    --metric-value-opacity: .8;
    --metric-unit-size: var(--kpi-unit-size, 18px);
    --metric-unit-weight: 500;
    --metric-unit-gap: 6px;
    --metric-unit-color: var(--en-surface-text-secondary, var(--en-text-secondary, var(--secondary-text-color)));
    --metric-unit-opacity: .65;
  }

  ic-trend-indicator {
    align-self: start;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;
    margin-top: 6px;
    color: var(--en-surface-text-secondary, var(--en-subtitle-secondary, var(--secondary-text-color)));
    --trend-indicator-size: var(--en-helper-size, 13px);
    --trend-indicator-weight: var(--en-helper-weight, 400);
    --trend-indicator-line-height: var(--en-helper-line-height, 1.3);
    --trend-indicator-secondary-opacity: var(--en-helper-opacity, .7);
    --trend-neutral-color: var(--en-subtitle-secondary, var(--secondary-text-color));
    --trend-positive-color: var(--en-color-success);
    --trend-negative-color: #ff3b30;
    white-space: nowrap;
  }

  ic-icon-badge {
    grid-column: 2;
    grid-row: 1;
    justify-self: end;
    align-self: center;
    flex-shrink: 0;
    --icon-badge-size: var(--kpi-icon-size, 42px);
    --icon-badge-icon-size: var(--kpi-icon-symbol-size, 21px);
  }
`, M = h`
  .content,
  .form,
  .body {
    box-sizing: border-box;
    padding: var(--ic-dialog-padding, 24px);
    color: var(--en-text-primary, var(--primary-text-color));
  }

  .content {
    gap: var(--ic-dialog-content-gap, 24px);
  }

  .form {
    gap: var(--en-field-group-gap, var(--ic-dialog-field-group-gap, 20px));
  }

  .section {
    gap: var(--ic-dialog-field-gap, 8px);
  }

  .subtitle {
    color: var(--en-text-secondary, var(--secondary-text-color));
    font-size: var(--en-body-size, 14px);
    font-weight: 400;
    line-height: var(--en-body-line-height, 1.4);
  }

  label,
  .field-label {
    gap: var(--ic-dialog-field-gap, 8px);
    color: var(--en-text-primary, var(--primary-text-color));
    font-size: var(--en-label-font-size, 14px);
    font-weight: var(--en-label-font-weight, 600);
    line-height: 1.3;
  }

  input:not([type="checkbox"]):not([type="radio"]),
  textarea,
  .field-control {
    width: 100%;
    min-width: 0;
    height: var(--en-control-height, 52px);
    min-height: var(--en-control-height, 52px);
    max-height: var(--en-control-height, 52px);
    box-sizing: border-box;
    padding-inline: var(--en-control-padding-inline, 20px);
    padding-block: 0;
    border: var(--ic-border-control, var(--en-border));
    border-radius: var(--en-control-radius, 999px);
    outline: none;
    background: var(--ic-control-background, var(--en-surface-control));
    color: var(--en-text-primary, var(--primary-text-color));
    font: inherit;
    font-size: var(--en-control-font-size, 16px);
    font-weight: var(--en-control-font-weight, 400);
    line-height: 1.2;
    letter-spacing: 0;
    transition:
      border-color var(--en-motion-fast, 150ms) var(--en-easing-standard, ease),
      background var(--en-motion-fast, 150ms) var(--en-easing-standard, ease);
  }

  .field-control {
    display: flex;
    align-items: center;
  }

  input:not([type="checkbox"]):not([type="radio"]):hover,
  textarea:hover,
  .field-control:hover {
    border-color: var(--ic-field-hover-border, var(--en-color-primary-border));
  }

  input::placeholder,
  textarea::placeholder {
    color: var(--en-text-secondary, var(--secondary-text-color));
    font-weight: 400;
    opacity: var(--ic-field-placeholder-opacity, .65);
  }

  input:focus-visible,
  textarea:focus-visible,
  .field-control:focus-visible {
    outline: var(--ic-focus-ring, 2px solid var(--en-color-focus));
    outline-offset: 2px;
  }

  .footer,
  .actions {
    box-sizing: border-box;
    justify-content: flex-end;
    gap: var(--ic-dialog-footer-gap, 12px);
  }

  .footer {
    padding: var(--ic-dialog-footer-padding, 24px);
  }

  .footer button,
  .actions button {
    min-height: var(--en-control-height-compact, 38px);
    padding-inline: var(--en-control-padding-inline-compact, 14px);
    border: var(--ic-border-control, var(--en-border));
    border-radius: var(--en-control-radius, 999px);
    background: var(--ic-action-background, var(--en-surface-control));
    color: var(--en-text-primary, var(--primary-text-color));
    font: inherit;
    font-size: var(--en-body-size, 14px);
    font-weight: 600;
  }

  .footer .primary,
  .footer .save,
  .actions .primary,
  .actions .save {
    border-color: transparent;
    background: var(--en-color-primary);
    color: #fff;
  }

  .section-title {
    color: var(--en-heading-primary, var(--primary-text-color));
    font-size: var(--en-body-size, 14px);
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: 0;
    text-transform: none;
  }
`;
h`
  input,
  .trigger {
    box-sizing: border-box;
    width: 100%;
    min-width: 0;
    height: var(--en-control-height, 52px);
    min-height: var(--en-control-height, 52px);
    max-height: var(--en-control-height, 52px);
    padding-block: 0;
    border: var(--ic-border-control, var(--en-border));
    border-radius: var(--en-control-radius, 999px);
    background: var(--ic-control-background, var(--en-surface-control));
    color: var(--en-text-primary, var(--primary-text-color));
    font: inherit;
    font-size: var(--en-control-font-size, 16px);
    font-weight: var(--en-control-font-weight, 400);
    padding-inline: var(--en-control-padding-inline, 20px);
    transition:
      border-color var(--en-motion-fast, 150ms) var(--en-easing-standard, ease),
      background var(--en-motion-fast, 150ms) var(--en-easing-standard, ease);
  }

  input:hover,
  .trigger:hover {
    border-color: var(--ic-field-hover-border, var(--en-color-primary-border));
  }

  input::placeholder {
    color: var(--en-text-secondary, var(--secondary-text-color));
    font-weight: 400;
    opacity: var(--ic-field-placeholder-opacity, .65);
  }

  input:focus-visible,
  .trigger:focus-visible {
    outline: var(--ic-focus-ring, 2px solid var(--en-color-focus));
    outline-offset: 2px;
  }
`;
//#endregion
//#region src/helpers/line-chart.ts
function at(e, t) {
	if (!e.length) return [];
	let n = Math.min(...e), r = Math.max(...e) - n || 1, i = e.length > 1 ? t.width / (e.length - 1) : t.width;
	return e.map((e, a) => ({
		x: a * i,
		y: t.height - (e - n) / r * t.height
	}));
}
function ot(e, t) {
	return at(e, t).map((e, t) => `${t === 0 ? "M" : "L"} ${e.x.toFixed(2)} ${e.y.toFixed(2)}`).join(" ");
}
function st(e, t) {
	return at(e, t).map((e) => `${e.x.toFixed(2)},${e.y.toFixed(2)}`).join(" ");
}
//#endregion
//#region src/helpers/entity.ts
function ct(e, t) {
	return e.states[t];
}
function lt(e, t) {
	let n = ct(e, t);
	return n ? n.state : "";
}
function ut(e, t) {
	let n = Number(lt(e, t));
	return isNaN(n) ? 0 : n;
}
function dt(e, t, n) {
	let r = ct(e, t);
	if (r) return r.attributes[n];
}
//#endregion
//#region src/helpers/entity-state-parser.ts
function N(e, t, n = e, r = "") {
	return {
		entityId: e,
		status: t,
		value: null,
		unit: r,
		name: n
	};
}
function P(e, t) {
	if (!e || !t) return N(t, "missing");
	let n = ct(e, t);
	if (!n) return N(t, "missing");
	let r = n.attributes.friendly_name ?? t, i = n.attributes.unit_of_measurement ?? "", a = n.state.trim();
	if (a === "unknown") return N(t, "unknown", r, i);
	if (a === "unavailable") return N(t, "unavailable", r, i);
	if (a === "") return N(t, "invalid", r, i);
	let o = Number(a);
	return Number.isFinite(o) ? {
		entityId: t,
		status: "valid",
		value: o,
		unit: i,
		name: r
	} : N(t, "invalid", r, i);
}
//#endregion
//#region src/helpers/number-formatter.ts
function ft(e) {
	return Number.isFinite(e) ? Math.min(20, Math.max(0, Math.trunc(e))) : 2;
}
function pt(e, t = {}) {
	if (!Number.isFinite(e)) return "--";
	let n = ft(t.decimals ?? 2), r = e.toFixed(n);
	if (t.trimTrailingZeros && r.includes(".") && (r = r.replace(/\.?0+$/, "")), !t.useGrouping) return r;
	let [i, a] = r.split("."), o = i.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return a === void 0 ? o : `${o}.${a}`;
}
//#endregion
//#region src/helpers/unit-converter.ts
function mt(e, t) {
	let n = t.trim(), r = n.replace(/\s+/g, "").toLowerCase();
	return r === "mw" ? {
		value: e * 1e6,
		unit: "W",
		family: "power"
	} : r === "kw" ? {
		value: e * 1e3,
		unit: "W",
		family: "power"
	} : r === "w" ? {
		value: e,
		unit: "W",
		family: "power"
	} : n === "MWh" ? {
		value: e * 1e6,
		unit: "Wh",
		family: "energy"
	} : n === "kWh" ? {
		value: e * 1e3,
		unit: "Wh",
		family: "energy"
	} : n === "Wh" ? {
		value: e,
		unit: "Wh",
		family: "energy"
	} : {
		value: e,
		unit: n,
		family: "other"
	};
}
function ht(e, t, n = {}) {
	if (!n.autoScale) return {
		value: e,
		unit: t,
		scale: 1
	};
	let r = Math.abs(e);
	if (t === "W") {
		if (r >= 1e6) return {
			value: e / 1e6,
			unit: "MW",
			scale: 1e6
		};
		if (r >= 1e3) return {
			value: e / 1e3,
			unit: "kW",
			scale: 1e3
		};
	}
	if (t === "kW" && r >= 1e3) return {
		value: e / 1e3,
		unit: "MW",
		scale: 1e3
	};
	if (t === "Wh") {
		if (r >= 1e6) return {
			value: e / 1e6,
			unit: "MWh",
			scale: 1e6
		};
		if (r >= 1e3) return {
			value: e / 1e3,
			unit: "kWh",
			scale: 1e3
		};
	}
	return t === "kWh" && r >= 1e3 ? {
		value: e / 1e3,
		unit: "MWh",
		scale: 1e3
	} : {
		value: e,
		unit: t,
		scale: 1
	};
}
//#endregion
//#region src/helpers/metric-formatter.ts
function gt(e, t, n) {
	if (t !== "kW" && t !== "kWh" || Math.abs(e) >= 1e3) return e;
	let r = Number(e.toFixed(n));
	if (Math.abs(r) < 1e3) return e;
	let i = 1e3 - 10 ** -n;
	return Math.sign(e || 1) * i;
}
function F(e, t = {}) {
	let n = t.unit ?? e.unit;
	if (e.status !== "valid" || e.value === null) return {
		value: "--",
		unit: n,
		status: e.status,
		rawValue: e.value
	};
	let r = ht(e.value, n, { autoScale: t.autoScale }), i = t.decimals ?? 2;
	return {
		value: pt(gt(r.value, r.unit, i), {
			decimals: i,
			trimTrailingZeros: t.trimTrailingZeros,
			useGrouping: t.useGrouping
		}),
		unit: r.unit,
		status: e.status,
		rawValue: e.value
	};
}
//#endregion
//#region src/helpers/value-formatter.ts
function _t(e, t, n = {}) {
	if (e == null || isNaN(e)) return {
		value: "--",
		unit: t
	};
	let r = n.autoScale ?? !0, i = e, a = t;
	r && t === "g" && Math.abs(e) >= 1e3 ? (i = e / 1e3, a = "kg") : r && t === "ms" && Math.abs(e) >= 1e3 && (i = e / 1e3, a = "s");
	let o = F({
		entityId: "",
		status: "valid",
		value: i,
		unit: a,
		name: ""
	}, {
		unit: a,
		autoScale: r && a === t,
		decimals: n.decimals ?? 2,
		useGrouping: n.useGrouping
	});
	return {
		value: o.value,
		unit: o.unit
	};
}
//#endregion
//#region src/helpers/kpi-card-resolver.ts
function vt(e) {
	switch (e) {
		case "unknown": return "Entity state is unknown";
		case "unavailable": return "Entity is unavailable";
		case "invalid": return "Entity state is invalid";
		case "missing": return "Entity not found";
		default: return "";
	}
}
function yt(e) {
	let t = (e.id ?? "").toLowerCase(), n = (e.title ?? "").toLowerCase();
	return e.category === "cost" || t === "usage" || t.includes("today") || t.includes("daily") || t.includes("consumption") || n.includes("today") || n.includes("daily") || n.includes("consumption") || n.includes("cost");
}
function bt(e, t) {
	if (!e || !t?.entity) return null;
	let n = P(e, t.entity);
	if (n.status !== "valid" || n.value === null) return {
		value: "--",
		unit: n.unit || t.unit || "",
		status: n.status,
		rawValue: null,
		statusMessage: vt(n.status)
	};
	let r = _t(n.value, n.unit || t.unit || "", {
		autoScale: t.autoScale ?? !0,
		decimals: t.decimals ?? t.precision ?? 2
	});
	return {
		value: r.value,
		unit: r.unit,
		status: n.status,
		rawValue: n.value
	};
}
function xt(e, t) {
	let n = t.subtitle ?? t.trend ?? "", r = {
		text: n,
		color: "var(--secondary-text-color)"
	};
	if (!n && !t.trendMode || t.trendMode === "none" || !e || !t?.entity) return r;
	let i = ct(e, t.entity);
	if (!i) return r;
	let a = yt(t), o = Number(i.state), s = Number(dt(e, t.entity, "last_period"));
	if (!a || !s || Number.isNaN(s)) return r;
	let c = (o - s) / s * 100, l = Math.abs(c).toFixed(1);
	return c > 0 ? {
		text: `↑ ${l}% vs yesterday`,
		color: "#FF3B30"
	} : c < 0 ? {
		text: `↓ ${l}% vs yesterday`,
		color: "var(--en-color-success)"
	} : r;
}
function St(e, t) {
	if (Array.isArray(t?.history) && t.history.length) return t.history.map((e) => Number(e)).filter((e) => !Number.isNaN(e));
	if (!e || !t?.entity) return [];
	let n = Number(ut(e, t.entity)), r = Number(dt(e, t.entity, "last_period")), i = [];
	return Number.isNaN(r) || i.push(r), Number.isNaN(n) || i.push(n), i;
}
//#endregion
//#region src/config/config-normalizer.ts
function Ct(e) {
	return {
		autoScale: !0,
		decimals: 2,
		...e,
		history: Array.isArray(e.history) ? [...e.history] : void 0
	};
}
function wt(e) {
	let t = Array.isArray(e.cards) ? e.cards.map((e) => ({
		...e,
		history: Array.isArray(e.history) ? [...e.history] : void 0
	})) : [];
	return {
		title: "Energy Overview",
		...e,
		cards: t
	};
}
//#endregion
//#region src/components/common/metric-value.ts
var Tt = class extends j {
	constructor(...e) {
		super(...e), this.value = "", this.unit = "", this.status = "valid";
	}
	static {
		this.properties = {
			value: { type: String },
			unit: { type: String },
			status: { type: String }
		};
	}
	static {
		this.styles = h`
    :host {
      display: inline-flex;
      align-items: baseline;
      min-width: 0;
      max-width: 100%;
      overflow: hidden;
      color: var(--primary-text-color);
    }

    .value {
      color: var(--metric-value-color, var(--primary-text-color));
      font-size: var(--metric-value-size, 46px);
      font-weight: var(--metric-value-weight, 700);
      letter-spacing: var(--metric-value-letter-spacing, -2px);
      line-height: var(--metric-value-line-height, 1);
      opacity: var(--metric-value-opacity, 1);
      white-space: nowrap;
    }

    .value.invalid {
      color: var(--secondary-text-color);
    }

    .unit {
      margin-left: var(--metric-unit-gap, 6px);
      color: var(--metric-unit-color, inherit);
      font-size: var(--metric-unit-size, 18px);
      font-weight: var(--metric-unit-weight, 500);
      opacity: var(--metric-unit-opacity, 0.6);
      white-space: nowrap;
    }
  `;
	}
	render() {
		let e = this.status === "valid", t = e ? this.value : "--";
		return T`
      <span class="value ${e ? "" : "invalid"}">${t}</span>
      <span class="unit">${this.unit}</span>
    `;
	}
};
customElements.define("ic-metric-value", Tt);
//#endregion
//#region src/components/common/icon-badge.ts
var Et = class extends j {
	constructor(...e) {
		super(...e), this.icon = "", this.tone = "primary", this.size = 0, this.iconSize = 0;
	}
	static {
		this.properties = {
			icon: { type: String },
			tone: {
				type: String,
				reflect: !0
			},
			size: { type: Number },
			iconSize: {
				type: Number,
				attribute: "icon-size"
			}
		};
	}
	static {
		this.styles = h`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      --icon-badge-brand-color: var(--en-color-primary);
      --icon-badge-soft-color: var(--en-color-primary-soft);
    }

    :host([tone="accent"]) {
      --icon-badge-brand-color: var(--en-color-accent);
      --icon-badge-soft-color: var(--en-color-accent-soft);
    }

    :host([tone="success"]) {
      --icon-badge-brand-color: var(--en-color-success);
      --icon-badge-soft-color: var(--en-color-success-soft);
    }

    .badge {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--icon-badge-size, 42px);
      height: var(--icon-badge-size, 42px);
      border: var(--en-icon-badge-border-width, 1px) solid color-mix(
        in srgb,
        var(--icon-badge-brand-color) var(--en-icon-badge-border-brand-strength, 0%),
        var(--en-icon-badge-border, transparent)
      );
      border-radius: 50%;
      background: color-mix(
        in srgb,
        var(--icon-badge-brand-color) var(--en-icon-badge-brand-strength, 0%),
        var(--en-icon-badge-background, transparent)
      );
      color: var(--icon-badge-brand-color);
      backdrop-filter: var(--en-icon-badge-blur, none);
      -webkit-backdrop-filter: var(--en-icon-badge-blur, none);
      box-shadow: var(--en-icon-badge-shadow);
      transition:
        transform 180ms ease,
        background 180ms ease,
        filter 180ms ease;
    }

    :host(:hover) .badge {
      background: color-mix(
        in srgb,
        var(--icon-badge-brand-color) var(--en-icon-badge-hover-brand-strength, 0%),
        var(--en-icon-badge-hover-background, transparent)
      );
      filter: brightness(1.08);
      transform: scale(1.03);
    }

    /* Solid does not pass through color-mix: older HA WebViews must receive
       the actual brand color as the material surface. */
    :host-context(html[data-ic-card-theme="solid"]) .badge {
      border: 0;
      background: var(--icon-badge-brand-color);
      color: #fff;
      backdrop-filter: none;
      -webkit-backdrop-filter: none;
    }

    :host-context(html[data-ic-card-theme="solid"]):hover .badge {
      background: var(--icon-badge-brand-color);
    }

    /* Native consumes semantic soft/border colors directly. This avoids
       muddy or unsupported runtime color mixing against HA card surfaces. */
    :host-context(html[data-ic-card-theme="native"]) .badge {
      border: 1px solid transparent;
      background: var(--icon-badge-soft-color);
      color: var(--icon-badge-brand-color);
      backdrop-filter: none;
      -webkit-backdrop-filter: none;
    }

    :host-context(html[data-ic-card-theme="native"]):hover .badge {
      background: var(--icon-badge-soft-color);
      filter: brightness(.94);
    }

    ha-icon {
      --mdc-icon-size: var(--icon-badge-icon-size, 21px);
      --state-icon-color: var(--en-icon-badge-foreground, var(--icon-badge-brand-color));
      --state-icon-active-color: var(--en-icon-badge-foreground, var(--icon-badge-brand-color));
      --paper-item-icon-color: var(--en-icon-badge-foreground, var(--icon-badge-brand-color));
      --iron-icon-fill-color: var(--en-icon-badge-foreground, var(--icon-badge-brand-color));
      color: var(--en-icon-badge-foreground, var(--icon-badge-brand-color));
      fill: currentColor;
    }

    :host-context(html[data-ic-card-theme="solid"]) ha-icon {
      --state-icon-color: #fff;
      --state-icon-active-color: #fff;
      --paper-item-icon-color: #fff;
      --iron-icon-fill-color: #fff;
      color: #fff;
      fill: #fff;
    }
  `;
	}
	render() {
		return T`
      <span class="badge" style=${[this.size > 0 ? `--icon-badge-size:${this.size}px` : "", this.iconSize > 0 ? `--icon-badge-icon-size:${this.iconSize}px` : ""].filter(Boolean).join(";")}>
        <ha-icon .icon=${this.icon}></ha-icon>
      </span>
    `;
	}
};
customElements.define("ic-icon-badge", Et);
//#endregion
//#region src/components/common/trend-indicator.ts
var Dt = class extends j {
	constructor(...e) {
		super(...e), this.text = "", this.direction = "neutral", this.status = "neutral", this.showIcon = !1;
	}
	static {
		this.properties = {
			text: { type: String },
			direction: { type: String },
			status: {
				type: String,
				reflect: !0
			},
			showIcon: {
				type: Boolean,
				attribute: "show-icon"
			}
		};
	}
	static {
		this.styles = h`
    :host {
      display: inline-flex;
      align-items: center;
      gap: var(--trend-indicator-gap, 4px);
      color: var(--trend-neutral-color, var(--secondary-text-color));
      font-size: var(--trend-indicator-size, 14px);
      font-weight: var(--trend-indicator-weight, 600);
      line-height: var(--trend-indicator-line-height, 1.3);
    }

    :host([status="positive"]) {
      color: var(--trend-positive-color, var(--en-color-success));
    }

    :host([status="negative"]) {
      color: var(--trend-negative-color, #ff3b30);
    }

    .icon {
      line-height: 1;
    }

    .detail {
      color: var(--trend-neutral-color, var(--en-text-secondary, var(--secondary-text-color)));
      opacity: var(--trend-indicator-secondary-opacity, .7);
    }
  `;
	}
	get directionIcon() {
		return this.direction === "increase" ? "↑" : this.direction === "decrease" ? "↓" : "–";
	}
	render() {
		let e = this.status === "neutral" ? void 0 : this.text.match(/^(.+?)(\s+vs\s+.+)$/i);
		return T`
      ${this.showIcon ? T`<span class="icon" aria-hidden="true">${this.directionIcon}</span>` : null}
      ${e ? T`<span>${e[1]}</span><span class="detail">${e[2]}</span>` : T`<span class="detail">${this.text}</span>`}
    `;
	}
};
customElements.define("ic-trend-indicator", Dt);
//#endregion
//#region src/styles/glass.ts
var Ot = h`
  :host {
    display: block;
    width: 100%;
    min-width: 0;
  }

  .card {
    position: relative;
    width: 100%;
    min-width: 0;
    height: var(--glass-container-height, 170px);
    padding: var(--glass-container-padding, var(--en-space-lg, 24px));
    box-sizing: border-box;
    overflow: hidden;
    border-radius: var(--ic-radius-card);
    background: var(
      --en-surface-primary,
      var(--ic-card-background,
      rgba(255,255,255,0.08)
      )
    );
    backdrop-filter: var(--en-blur, var(--ic-card-backdrop-filter, blur(25px)));
    -webkit-backdrop-filter: var(--en-blur, var(--ic-card-backdrop-filter, blur(25px)));
    border: var(--ic-border-card);
    box-shadow: var(--ic-shadow-card);
    transition:
      transform var(--en-motion-normal, .25s) var(--en-easing-standard, ease),
      box-shadow var(--en-motion-normal, .25s) var(--en-easing-standard, ease);
    color: var(--en-text-primary, var(--primary-text-color));
  }

  .card:hover {
    transform: var(--ic-card-hover-transform, translateY(-4px));
    box-shadow: var(--ic-shadow-card);
  }

  .card:active {
    transform: var(--ic-card-active-transform, scale(.98));
  }

  .card::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    min-width: 0;
    height: 45%;
    pointer-events: none;
    background: var(
      --ic-card-highlight,
      linear-gradient(180deg, rgba(255,255,255,0.16), transparent)
    );
  }

  .content {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
  }
`, kt = class extends j {
	static {
		this.styles = [Ot, h`
      :host {
        display: block;
        width: 100%;
        min-width: 0;
        box-sizing: border-box;
        --glass-container-height: var(--energy-card-height, 170px);
        --glass-container-padding: var(--energy-card-padding, 24px);
      }
    `];
	}
	render() {
		return T`
      <div class="card">
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `;
	}
};
customElements.define("ic-card-container", kt);
//#endregion
//#region src/helpers/text-formatter.ts
var I = {
	compactMenu: 28,
	pickerItem: 38,
	readonlyField: 46
};
function L(e, t = "pickerItem") {
	return R(e, { maxLength: I[t] });
}
function R(e, t = {}) {
	let n = Array.from(e), r = Math.max(9, t.maxLength ?? 42);
	if (n.length <= r) return e;
	let i = t.tailLength ?? Math.round(r * .32), a = Math.max(4, Math.min(i, r - 7)), o = r - a - 3;
	return `${n.slice(0, o).join("")}...${n.slice(-a).join("")}`;
}
//#endregion
//#region src/components/common/select-item.ts
var At = class extends j {
	constructor(...e) {
		super(...e), this.selected = !1, this.indicator = "none", this.hideIndicator = !1, this.disabled = !1, this.variant = "default", this.displayLabel = "", this.rawLabel = "", this.secondaryLabel = "", this.rawSecondaryLabel = "", this.tone = "neutral";
	}
	static {
		this.properties = {
			selected: {
				type: Boolean,
				reflect: !0
			},
			indicator: { type: String },
			hideIndicator: {
				type: Boolean,
				attribute: "hide-indicator"
			},
			disabled: {
				type: Boolean,
				reflect: !0
			},
			variant: {
				type: String,
				reflect: !0
			},
			displayLabel: {
				type: String,
				attribute: "display-label"
			},
			rawLabel: {
				type: String,
				attribute: "raw-label"
			},
			secondaryLabel: {
				type: String,
				attribute: "secondary-label"
			},
			rawSecondaryLabel: {
				type: String,
				attribute: "raw-secondary-label"
			},
			tone: {
				type: String,
				reflect: !0
			}
		};
	}
	static {
		this.styles = h`
    :host { display:block; min-width:0; }
    .item {
      display:flex;
      width:100%;
      min-height:var(--ic-select-item-height,48px);
      box-sizing:border-box;
      align-items:center;
      gap:8px;
      padding:var(--ic-select-item-padding,8px 12px);
      border:1px solid transparent;
      border-radius:var(--en-panel-radius,18px);
      background:transparent;
      color:var(--en-text-primary,var(--primary-text-color));
      cursor:pointer;
      font:inherit;
      font-size:16px;
      font-weight:500;
      text-align:left;
      transition:
        background var(--en-motion-fast,180ms)
          var(--en-easing-standard,ease),
        transform var(--en-motion-fast,180ms)
          var(--en-easing-standard,ease);
    }
    .item:hover {
      background:var(--ic-action-hover-background,rgba(127,127,127,.14));
    }
    .item:active { transform:scale(.98); }
    .item.selected {
      border:var(--en-selection-border,1px solid transparent);
      background:var(--en-selection-surface,transparent);
    }
    .item.no-indicator .indicator { display:none; }
    .item.disabled { cursor:default; opacity:.5; }
    .item:focus-visible {
      outline:var(--ic-focus-ring,2px solid var(--en-color-focus));
      outline-offset:2px;
    }
    :host([variant="compact"]) .item {
      width:100%;
      height:var(--en-menu-item-height,38px);
      min-height:var(--en-menu-item-height,38px);
      padding:0 var(--en-control-padding-inline-compact,14px);
      border:var(--ic-border-control,var(--en-border));
      border-radius:var(--en-menu-item-radius,var(--en-control-radius,999px));
      background:var(--ic-control-background,var(--en-surface-control));
      font-size:14px;
      font-weight:500;
      line-height:1;
    }
    :host([variant="compact"]) .item.selected {
      border:var(--en-selection-border,var(--ic-border-control,var(--en-border)));
      background:var(--en-selection-surface,var(--ic-control-background,var(--en-surface-control)));
    }
    :host([tone="primary"]) .item {
      border-color:transparent;
      background:var(--en-control-active-background,var(--en-color-primary));
      color:var(--en-control-active-foreground,#fff);
    }
    :host([tone="primary"]) .indicator,
    :host([tone="primary"]) .secondary { color:inherit; }
    :host([variant="compact"]) .indicator {
      flex:0 0 18px;
      width:18px;
      height:18px;
      line-height:0;
      transform:none;
    }
    :host([variant="compact"]) ha-icon {
      width:14px;
      height:14px;
      --mdc-icon-size:14px;
    }
    :host([variant="compact"]) .copy { gap:1px; }
    :host([variant="compact"]) .label { line-height:14px; }
    :host([variant="compact"]) .secondary {
      font-size:12px;
      font-weight:400;
      line-height:12px;
    }
    .indicator {
      display:flex;
      flex:0 0 16px;
      width:16px;
      height:16px;
      align-items:center;
      justify-content:center;
      color:var(--en-text-secondary,var(--secondary-text-color));
      transform:var(--ic-select-indicator-transform,none);
    }
    ha-icon {
      width:14px;
      height:14px;
      --mdc-icon-size:14px;
      opacity:.7;
    }
    .dot {
      width:7px;
      height:7px;
      border-radius:50%;
      background:currentColor;
      opacity:.65;
    }
    .copy { display:grid; min-width:0; flex:1 1 auto; gap:0; }
    .label { min-width:0; overflow:hidden; line-height:1.3; text-overflow:ellipsis; white-space:nowrap; }
    .secondary { color:var(--en-text-secondary,var(--secondary-text-color)); font-size:13px; font-weight:400; line-height:1.4; }
    ::slotted(:not([slot])) {
      display:block;
      min-width:0;
      max-width:100%;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
    }
    ::slotted([slot="secondary"]) {
      display:block;
      min-width:0;
      max-width:100%;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
    }
    ::slotted([slot="trailing"]) { align-self:center; justify-self:end; }
  `;
	}
	renderIndicator() {
		return this.indicator === "check" ? T`<ha-icon icon="mdi:check"></ha-icon>` : this.indicator === "plus" ? T`<ha-icon icon="mdi:plus"></ha-icon>` : this.indicator === "dot" ? T`<span class="dot"></span>` : null;
	}
	render() {
		return T`
      <div
        class=${`item ${this.selected ? "selected" : ""} ${this.hideIndicator ? "no-indicator" : ""} ${this.disabled ? "disabled" : ""}`}
        role="button"
        tabindex=${this.disabled ? -1 : 0}
        aria-disabled=${this.disabled}
        aria-label=${this.rawLabel || this.displayLabel || void 0}
        @keydown=${(e) => {
			this.disabled || e.key !== "Enter" && e.key !== " " || (e.preventDefault(), this.click());
		}}
      >
        <span class="indicator">${this.renderIndicator()}</span>
        <span class="copy">
          <span class="label" title=${this.rawLabel || this.displayLabel}><slot>${this.displayLabel}</slot></span>
          <span class="secondary" title=${this.rawSecondaryLabel || this.secondaryLabel}><slot name="secondary">${this.secondaryLabel}</slot></span>
        </span>
        <slot name="trailing"></slot>
      </div>
    `;
	}
};
customElements.define("ic-select-item", At);
//#endregion
//#region src/components/common/picker-item.ts
var jt = class extends At {
	constructor(...e) {
		super(...e), this.variant = "default";
	}
};
customElements.define("ic-picker-item", jt);
//#endregion
//#region src/design-system/scrollbar.ts
var Mt = h`
  * {
    scrollbar-color:
      var(--en-scrollbar-thumb, auto)
      var(--en-scrollbar-track, auto);
    scrollbar-width: var(--en-scrollbar-width, auto);
  }

  *::-webkit-scrollbar {
    width: var(--en-scrollbar-size, revert);
    height: var(--en-scrollbar-size, revert);
  }

  *::-webkit-scrollbar-track {
    background: var(--en-scrollbar-track, revert);
    border-radius: var(--en-scrollbar-radius, revert);
  }

  *::-webkit-scrollbar-thumb {
    border: var(--en-scrollbar-thumb-border, revert);
    border-radius: var(--en-scrollbar-radius, revert);
    background: var(--en-scrollbar-thumb, revert);
    backdrop-filter: var(--en-scrollbar-blur, revert);
    -webkit-backdrop-filter: var(--en-scrollbar-blur, revert);
  }

  *::-webkit-scrollbar-thumb:hover {
    background: var(--en-scrollbar-thumb-hover, revert);
  }
`, Nt = class extends j {
	constructor(...e) {
		super(...e), this.variant = "default";
	}
	static {
		this.properties = { variant: {
			type: String,
			reflect: !0
		} };
	}
	static {
		this.styles = [Mt, h`
    :host {
      display:block;
      min-width:0;
      overflow-x:hidden;
      overflow-y:auto;
      overscroll-behavior:contain;
      scrollbar-width:thin;
      scrollbar-color:
        var(--en-scrollbar-thumb,auto)
        var(--en-scrollbar-track,auto);
      scrollbar-gutter:stable;
      --en-scrollbar-radius:999px;
    }
    :host([variant="menu"]) {
      box-sizing:border-box;
      padding-bottom:var(--en-menu-bottom-padding,var(--en-menu-padding-bottom,16px));
    }
    :host::-webkit-scrollbar { width:var(--en-scrollbar-size,3px); height:var(--en-scrollbar-size,3px); }
    :host::-webkit-scrollbar-track {
      border-radius:999px;
      background:var(--en-scrollbar-track,transparent);
    }
    :host::-webkit-scrollbar-thumb {
      border:var(--en-scrollbar-thumb-border,0);
      border-radius:999px;
      background:var(--en-scrollbar-thumb,rgba(127,127,127,.3));
    }
    :host::-webkit-scrollbar-thumb:hover {
      background:var(--en-scrollbar-thumb-hover,rgba(127,127,127,.45));
    }
  `];
	}
	render() {
		return T`<slot></slot>`;
	}
};
customElements.define("ic-scroll-area", Nt);
//#endregion
//#region src/components/common/field.ts
var Pt = class extends j {
	constructor(...e) {
		super(...e), this.label = "", this.value = "", this.rawValue = "", this.placeholder = "", this.type = "text", this.variant = "editable", this.disabled = !1, this.invalid = !1;
	}
	static {
		this.properties = {
			label: { type: String },
			value: { type: String },
			rawValue: {
				type: String,
				attribute: "raw-value"
			},
			placeholder: { type: String },
			type: { type: String },
			variant: {
				type: String,
				reflect: !0
			},
			disabled: {
				type: Boolean,
				reflect: !0
			},
			invalid: {
				type: Boolean,
				reflect: !0
			}
		};
	}
	static {
		this.styles = h`
    :host { display:grid; min-width:0; gap:8px; }
    .label { color:var(--en-heading-primary,var(--primary-text-color)); font-size:var(--en-label-font-size,14px); font-weight:var(--en-label-font-weight,600); line-height:1.3; }
    .control {
      display:flex; width:100%; min-width:0;
      height:var(--en-control-height,52px); min-height:var(--en-control-height,52px); max-height:var(--en-control-height,52px);
      box-sizing:border-box; align-items:center; gap:var(--en-control-gap,8px);
      padding:0 var(--en-control-padding-inline,20px);
      border:var(--ic-border-control,var(--en-border)); border-radius:var(--en-control-radius,999px);
      outline:0; background:var(--ic-control-background,var(--en-surface-control));
      color:var(--en-text-primary,var(--primary-text-color)); backdrop-filter:var(--en-blur-control,none);
      font:inherit; font-size:var(--en-control-font-size,16px); font-weight:var(--en-control-font-weight,400); line-height:1.2;
      transition:border-color var(--en-motion-fast,150ms),background var(--en-motion-fast,150ms);
    }
    input { flex:1 1 auto; width:100%; min-width:0; height:100%; padding:0; border:0; outline:0; background:transparent; color:inherit; font:inherit; line-height:inherit; }
    input::placeholder { color:var(--en-text-secondary,var(--secondary-text-color)); opacity:.7; font-weight:var(--en-helper-font-weight,400); }
    input[type="number"] { appearance:textfield; -moz-appearance:textfield; }
    input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button { margin:0; -webkit-appearance:none; }
    .value { flex:1 1 auto; min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    .copy { display:grid; flex:1 1 auto; min-width:0; gap:2px; }
    .copy .value { width:100%; }
    .control:hover { border-color:var(--ic-field-hover-border,var(--en-color-primary-border)); }
    .control:focus-within, .control:focus-visible { outline:var(--ic-focus-ring,2px solid var(--en-color-focus)); outline-offset:2px; }
    :host([variant="selectable"]) .control { cursor:pointer; text-align:left; }
    :host([variant="compact"]) .control { height:var(--en-control-height-compact,38px); min-height:var(--en-control-height-compact,38px); max-height:var(--en-control-height-compact,38px); padding-inline:var(--en-control-padding-inline-compact,14px); }
    :host([invalid]) .control { border-color:var(--error-color,#ff3b30); }
    :host([disabled]) { opacity:.5; }
    ::slotted(*) { min-width:0; }
    ::slotted([slot="secondary"]) { overflow:hidden; color:var(--en-text-secondary,var(--secondary-text-color)); font-size:var(--en-helper-font-size,13px); font-weight:var(--en-helper-font-weight,400); text-overflow:ellipsis; white-space:nowrap; }
  `;
	}
	emit(e, t) {
		this.value = t, this.dispatchEvent(new CustomEvent(e, {
			detail: { value: t },
			bubbles: !0,
			composed: !0
		}));
	}
	render() {
		let e = this.variant === "editable" || this.variant === "compact" ? T`<div class="control"><slot name="leading"></slot><input .type=${this.type} .value=${this.value} placeholder=${this.placeholder} ?disabled=${this.disabled} aria-invalid=${this.invalid} @input=${(e) => this.emit("field-input", e.target.value)} @change=${(e) => this.emit("field-change", e.target.value)} /><slot name="trailing"></slot></div>` : this.variant === "selectable" ? T`<button class="control" type="button" ?disabled=${this.disabled} aria-label=${this.rawValue || this.value} @click=${() => this.dispatchEvent(new CustomEvent("field-activate", {
			bubbles: !0,
			composed: !0
		}))}><slot name="leading"></slot><span class="copy"><span class="value" title=${this.rawValue || this.value}>${this.value || this.placeholder}</span><slot name="secondary"></slot></span><slot name="trailing"></slot></button>` : T`<div class="control" role="textbox" aria-readonly="true" aria-label=${this.rawValue || this.value}><slot name="leading"></slot><span class="copy"><span class="value" title=${this.rawValue || this.value}>${this.value || this.placeholder}</span><slot name="secondary"></slot></span><slot name="trailing"></slot></div>`;
		return T`${this.label ? T`<span class="label">${this.label}</span>` : null}${e}`;
	}
};
customElements.define("ic-field", Pt);
//#endregion
//#region src/components/common/inline-picker-panel.ts
var Ft = class extends j {
	constructor(...e) {
		super(...e), this.open = !1, this.maxHeight = 260;
	}
	static {
		this.properties = {
			open: {
				type: Boolean,
				reflect: !0
			},
			maxHeight: {
				type: Number,
				attribute: "max-height"
			}
		};
	}
	static {
		this.styles = h`
    :host {
      display:none;
      width:100%;
      min-width:0;
      box-sizing:border-box;
      margin-top:8px;
    }
    :host([open]) { display:block; }
    .panel {
      display:grid;
      width:100%;
      min-width:0;
      max-height:var(--inline-picker-max-height,260px);
      box-sizing:border-box;
      grid-template-rows:auto minmax(0,1fr);
      gap:8px;
      padding:12px 12px 16px;
      overflow:hidden;
      border:var(--ic-border-control,var(--en-border));
      border-radius:var(--en-panel-radius,18px);
      background:var(--en-surface-secondary,var(--ic-control-background));
    }
    ::slotted([slot="search"]) { min-width:0; }
    ::slotted([slot="content"]) { min-width:0; min-height:0; }
    @media (prefers-reduced-motion:no-preference) {
      :host([open]) .panel { animation:reveal 160ms ease both; }
      @keyframes reveal {
        from { opacity:0; max-height:0; }
        to { opacity:1; max-height:var(--inline-picker-max-height,260px); }
      }
    }
  `;
	}
	updated(e) {
		!e.has("open") || !this.open || requestAnimationFrame(() => {
			this.querySelector("[slot='search']")?.focusInput?.();
		});
	}
	render() {
		return T`<div class="panel"
      style=${`--inline-picker-max-height:${this.maxHeight}px`}>
      <slot name="search"></slot>
      <slot name="content"></slot>
    </div>`;
	}
};
customElements.define("ic-inline-picker-panel", Ft);
//#endregion
//#region src/components/common/search-field.ts
var It = class extends j {
	constructor(...e) {
		super(...e), this.value = "", this.placeholder = "Search...", this.variant = "editable";
	}
	static {
		this.properties = {
			value: { type: String },
			placeholder: { type: String },
			variant: { type: String }
		};
	}
	static {
		this.styles = h`:host{display:block;min-width:0} ha-icon{width:16px;height:16px;--mdc-icon-size:16px;color:var(--en-text-secondary,var(--secondary-text-color));opacity:.7}`;
	}
	focusInput() {
		this.renderRoot.querySelector("ic-field")?.shadowRoot?.querySelector("input")?.focus();
	}
	render() {
		return T`<ic-field type="search" .variant=${this.variant} .value=${this.value} .placeholder=${this.placeholder} @field-input=${(e) => {
			this.value = e.detail.value, this.dispatchEvent(new CustomEvent("search-input", {
				detail: e.detail,
				bubbles: !0,
				composed: !0
			}));
		}}><ha-icon slot="leading" icon="mdi:magnify"></ha-icon></ic-field>`;
	}
};
customElements.define("ic-search-field", It);
//#endregion
//#region src/components/entity-selector.ts
var Lt = class extends j {
	constructor(...e) {
		super(...e), this.value = "", this.filter = {}, this.limit = 1e3, this.placeholder = "Search entity...", this.preferredDeviceClasses = [], this.preferredUnits = [], this.variant = "default", this.search = "";
	}
	static {
		this.properties = {
			hass: { attribute: !1 },
			value: { type: String },
			filter: { attribute: !1 },
			limit: { type: Number },
			placeholder: { type: String },
			preferredDeviceClasses: { attribute: !1 },
			preferredUnits: { attribute: !1 },
			variant: {
				type: String,
				reflect: !0
			}
		};
	}
	static {
		this.styles = [h`
    :host {
      display: block;
      color: var(--primary-text-color);
    }

    ic-search-field { margin-bottom:12px; }
    :host([variant="inline"]) ic-search-field { margin-bottom:0; }

    .current {
      margin-bottom: 12px;
    }

    .section-label {
      margin-bottom: 8px;
      color: var(--en-heading-primary, var(--primary-text-color));
      font-size: 14px;
      font-weight: 600;
      line-height: 1.3;
      letter-spacing: 0;
    }

    .current-value {
      display: grid;
      grid-template-columns: 16px minmax(0, 1fr);
      min-width: 0;
      align-items: center;
      column-gap: 8px;
      box-sizing: border-box;
      width: 100%;
      padding: 10px 12px;
      border: var(
        --en-border-selected,
        var(--en-selection-border)
      );
      border-radius: var(--ic-radius-control);
      background: var(
        --en-surface-selected,
        var(--en-selection-surface)
      );
    }

    .icon-slot {
      display: flex;
      width: 16px;
      height: 16px;
      align-items: center;
      justify-content: center;
      color: var(--en-text-secondary, var(--secondary-text-color));
    }

    .icon-slot ha-icon {
      display: block;
      width: 14px;
      height: 14px;
      --mdc-icon-size: 14px;
      opacity: .7;
      transform: translateY(-5px);
    }

    .current-entity {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .list {
      width: 100%;
      min-width: 0;
      box-sizing: border-box;
      max-height: 300px;
      padding-right: var(--en-space-sm, 8px);
      padding-top: 4px;
    }
    :host([variant="inline"]) .list {
      max-height:none;
      padding-top:0;
    }

    ic-picker-item {
      margin-bottom:4px;
    }

    .current ic-picker-item {
      --ic-select-indicator-transform:translateY(-3px);
    }

    .item {
      display: grid;
      grid-template-columns: 16px minmax(0, 1fr);
      grid-template-rows: auto auto;
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
      align-items: center;
      column-gap: 8px;
      margin-bottom: 8px;
      padding: 12px;
      border: 1px solid transparent;
      border-radius: var(--ic-radius-control);
      background: var(--ic-control-background, transparent);
      cursor: pointer;
    }

    .item > .icon-slot {
      grid-column: 1;
      grid-row: 1;
      align-self: center;
    }

    .name,
    .entity-id {
      grid-column: 2;
      min-width: 0;
      max-width: 100%;
    }

    .item.selected {
      border: var(
        --en-border-selected,
        var(--en-selection-border)
      );
      background: var(
        --en-surface-selected,
        var(--en-selection-surface)
      );
    }

    .name {
      grid-row: 1;
      overflow: hidden;
      font-weight: 600;
      line-height: 18px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .entity-id,
    .empty {
      color: var(--secondary-text-color);
      font-size: 12px;
    }

    .entity-id {
      grid-row: 2;
      overflow: hidden;
      max-width: 100%;
      line-height: 16px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `];
	}
	get entities() {
		if (!this.hass) return [];
		let e = this.filter.domains ?? [], t = this.filter.deviceClasses ?? [], n = this.filter.stateClasses ?? [], r = this.search.trim().toLowerCase();
		return Object.keys(this.hass.states).filter((i) => {
			let a = this.hass?.states[i], o = i.split(".", 1)[0], s = a?.attributes.device_class, c = a?.attributes.state_class;
			return e.length && !e.includes(o) || this.filter.predicate && !this.filter.predicate(i) || t.length && (!s || !t.includes(s)) || n.length && (!c || !n.includes(c)) ? !1 : !r || [
				i,
				a?.attributes.friendly_name,
				o,
				s,
				a?.attributes.unit_of_measurement
			].filter(Boolean).join(" ").toLowerCase().includes(r);
		}).sort((e, t) => {
			let n = (e) => {
				let t = this.hass?.states[e], n = t?.attributes, r = String(n?.device_class ?? ""), i = String(n?.unit_of_measurement ?? "");
				return Number(Number.isFinite(Number(t?.state))) * 4 + Number(!!i) * 2 + Number(this.preferredDeviceClasses.includes(r)) * 2 + Number(this.preferredUnits.includes(i));
			}, r = n(t) - n(e);
			if (r) return r;
			let i = String(this.hass?.states[e]?.attributes.friendly_name ?? e).toLowerCase(), a = String(this.hass?.states[t]?.attributes.friendly_name ?? t).toLowerCase();
			return i.localeCompare(a);
		}).slice(0, this.limit);
	}
	selectEntity(e) {
		this.dispatchEvent(new CustomEvent("entity-selected", {
			detail: { entityId: e },
			bubbles: !0,
			composed: !0
		}));
	}
	renderResults(e) {
		return e.length ? e.map((e) => {
			let t = this.hass?.states[e], n = t?.attributes.friendly_name ?? "", r = String(t?.attributes.unit_of_measurement ?? ""), i = e.split(".", 1)[0], a = String(t?.attributes.device_class ?? ""), o = t ? `${t.state}${r ? ` ${r}` : ""}` : "Unavailable", s = [
				e,
				o,
				i,
				a
			].filter(Boolean).join(" · "), c = [
				L(e, "pickerItem"),
				o,
				i,
				a
			].filter(Boolean).join(" · ");
			return T`
        <ic-picker-item
          .selected=${e === this.value}
          .indicator=${e === this.value ? "check" : "none"}
          .displayLabel=${R(String(n || e), { maxLength: I.pickerItem })}
          .rawLabel=${String(n || e)}
          .secondaryLabel=${c}
          .rawSecondaryLabel=${s}
          @click=${() => this.selectEntity(e)}
        ></ic-picker-item>
      `;
		}) : T`<div class="empty">No matching entities</div>`;
	}
	render() {
		if (!this.hass) return T`<div class="empty">No hass available</div>`;
		let e = this.entities;
		return this.variant === "inline" ? T`
        <ic-inline-picker-panel open .maxHeight=${260}>
          <ic-search-field slot="search"
            .value=${this.search}
            .placeholder=${this.placeholder}
            variant="compact"
            @search-input=${(e) => {
			this.search = e.detail.value, this.requestUpdate();
		}}
          ></ic-search-field>
          <ic-scroll-area slot="content" class="list">
            ${this.renderResults(e)}
          </ic-scroll-area>
        </ic-inline-picker-panel>
      ` : T`
      <div class="current">
        <ic-field label="Current Entity" variant="readonly"
          .value=${this.value ? L(this.value, "readonlyField") : "Not configured"}
          .rawValue=${this.value || "Not configured"}>
        </ic-field>
      </div>
      <ic-search-field
        .value=${this.search}
        .placeholder=${this.placeholder}
        @search-input=${(e) => {
			this.search = e.detail.value, this.requestUpdate();
		}}
      ></ic-search-field>
      <div class="section-label">Available Entities</div>
      <ic-scroll-area class="list">
        ${e.length ? e.map((e) => {
			let t = this.hass?.states[e], n = t?.attributes.friendly_name ?? "", r = String(t?.attributes.unit_of_measurement ?? ""), i = e.split(".", 1)[0], a = String(t?.attributes.device_class ?? ""), o = [
				e,
				t ? `${t.state}${r ? ` ${r}` : ""}` : "Unavailable",
				i,
				a
			].filter(Boolean).join(" · ");
			return T`
                <ic-picker-item
                  .selected=${e === this.value}
                  .indicator=${e === this.value ? "check" : "none"}
                  .displayLabel=${R(String(n || e), { maxLength: I.pickerItem })}
                  .rawLabel=${String(n || e)}
                  .secondaryLabel=${L(e, "pickerItem")}
                  .rawSecondaryLabel=${o}
                  @click=${() => this.selectEntity(e)}
                ></ic-picker-item>
              `;
		}) : T`<div class="empty">No matching entities</div>`}
      </ic-scroll-area>
    `;
	}
};
customElements.define("ic-entity-selector", Lt);
var z = new class {
	constructor() {
		this.stack = [], this.returnFocus = /* @__PURE__ */ new WeakMap();
	}
	register(e) {
		this.stack = this.stack.filter((t) => t !== e);
		let t = document.activeElement;
		t instanceof HTMLElement && t !== document.body && this.returnFocus.set(e, t), this.stack.push(e);
	}
	unregister(e) {
		this.stack = this.stack.filter((t) => t !== e);
		let t = this.returnFocus.get(e);
		this.returnFocus.delete(e), t?.isConnected && t.focus({ preventScroll: !0 });
	}
	isTop(e) {
		return this.stack.at(-1) === e;
	}
}(), Rt = class extends j {
	constructor(...e) {
		super(...e), this.open = !1, this.title = "", this.closeOnBackdrop = !0, this.closeOnEscape = !0;
	}
	static {
		this.properties = {
			open: {
				type: Boolean,
				reflect: !0
			},
			title: { type: String },
			closeOnBackdrop: {
				type: Boolean,
				attribute: "close-on-backdrop"
			},
			closeOnEscape: {
				type: Boolean,
				attribute: "close-on-escape"
			}
		};
	}
	static {
		this.styles = [Mt, h`
    :host { display:contents; }
    dialog {
      z-index:10000;
      position:fixed;
      inset:0;
      width:100vw;
      height:100vh;
      margin:0;
      max-width:none;
      max-height:none;
      padding:0;
      border:0;
      overflow:hidden;
      background:transparent;
      color:var(--en-text-primary,var(--ic-card-primary-text,var(--primary-text-color)));
    }
    dialog::backdrop {
      background:transparent;
    }
    .visual-backdrop {
      position:absolute;
      inset:0;
      opacity:0;
      will-change:opacity;
      transition:opacity var(--en-motion-normal,280ms) var(--en-easing-standard,cubic-bezier(.25,.1,.25,1));
    }
    .visual-backdrop::before {
      content:"";
      position:absolute;
      inset:0;
      background:rgba(0,0,0,.3);
      backdrop-filter:blur(2px);
    }
    dialog.visible .visual-backdrop {
      opacity:1;
    }
    .surface {
      position:absolute;
      left:50%;
      top:50%;
      display:flex;
      flex-direction:column;
      width:min(calc(100vw - 24px),var(--dialog-width,var(--app-dialog-width,520px)));
      max-width:calc(100vw - 24px);
      max-height:calc(100dvh - 24px);
      box-sizing:border-box;
      overflow:hidden;
      border:var(--ic-border-dialog,var(--ic-dialog-border,var(--en-border)));
      border-radius:var(--dialog-radius,var(--ic-radius-dialog));
      background:var(--ic-dialog-background,var(--en-surface-primary,var(--ic-card-background,rgba(255,255,255,.12))));
      box-shadow:var(--ic-shadow-dialog,var(--ic-dialog-shadow,var(--en-shadow-surface)));
      backdrop-filter:var(--ic-dialog-blur,var(--en-blur,var(--ic-card-backdrop-filter,blur(30px))));
      -webkit-backdrop-filter:var(--ic-dialog-blur,var(--en-blur,var(--ic-card-backdrop-filter,blur(30px))));
      opacity:0;
      transform:translate(-50%,-50%) translateY(10px) scale(.96);
      transition:
        opacity var(--en-motion-normal,280ms) var(--en-easing-standard,cubic-bezier(.25,.1,.25,1)),
        transform var(--en-motion-normal,280ms) var(--en-easing-standard,cubic-bezier(.25,.1,.25,1));
    }
    dialog.visible .surface {
      opacity:1;
      transform:translate(-50%,-50%) translateY(0) scale(1);
    }
    header {
      display:flex;
      align-items:center;
      justify-content:var(--dialog-header-justify,space-between);
      gap:var(--dialog-header-gap,8px);
      min-height:var(--dialog-header-min-height,77px);
      box-sizing:border-box;
      padding:var(--dialog-header-padding,var(--app-dialog-header-padding,24px 32px));
      border-bottom:var(--dialog-header-border,var(--ic-dialog-border,1px solid rgba(255,255,255,.1)));
      color:var(--en-heading-primary,var(--primary-text-color));
      font-size:var(--en-title-lg-size,24px);
      font-weight:var(--en-title-lg-weight,600);
      line-height:var(--en-title-lg-line-height,1.2);
      letter-spacing:var(--en-title-lg-letter-spacing,-0.3px);
      flex:0 0 auto;
    }
    .close {
      order:var(--dialog-close-order,0);
      display:grid;
      width:var(--dialog-close-size,40px);
      height:var(--dialog-close-size,40px);
      flex:0 0 var(--dialog-close-size,40px);
      place-items:center;
      padding:0; border:0; background:transparent; color:inherit;
      border-radius:var(--en-control-radius,999px);
      outline:none;
      cursor:pointer; font:inherit; font-size:22px;
    }
    .close:focus-visible {
      outline:var(--ic-focus-ring);
      outline-offset:2px;
    }
    .body {
      flex:1 1 auto;
      min-height:0;
      overflow-y:auto;
      overflow-x:hidden;
      padding:var(--dialog-body-padding,var(--app-dialog-body-padding,0));
    }
    footer {
      flex:0 0 auto;
      display:block;
      width:100%;
      min-width:0;
      box-sizing:border-box;
    }
    footer > slot[name="footer"] {
      display:block;
      width:100%;
      min-width:0;
      box-sizing:border-box;
    }
    footer > slot[name="footer"]::slotted(*) {
      display:block;
      width:100%;
      min-width:0;
      box-sizing:border-box;
    }
    footer:empty { display:none; }

    @media (max-width: 719px) {
      header {
        min-height: 64px;
        padding: 16px;
        font-size: var(--en-title-md-size, 20px);
      }

      .close {
        width: 36px;
        height: 36px;
        flex-basis: 36px;
      }
    }
  `];
	}
	updated(e) {
		if (!e.has("open")) return;
		let t = this.renderRoot.querySelector("dialog");
		t && (this.open && !t.open ? (window.clearTimeout(this.closeTimer), z.register(t), t.showModal(), requestAnimationFrame(() => t.classList.add("visible"))) : !this.open && t.open && (t.classList.remove("visible"), window.clearTimeout(this.closeTimer), this.closeTimer = window.setTimeout(() => {
			t.open && t.close(), z.unregister(t);
		}, o.normal)));
	}
	disconnectedCallback() {
		window.clearTimeout(this.closeTimer);
		let e = this.renderRoot.querySelector("dialog");
		e && z.unregister(e), super.disconnectedCallback();
	}
	requestClose(e) {
		let t = this.renderRoot.querySelector("dialog");
		!t || !z.isTop(t) || this.dispatchEvent(new CustomEvent("dialog-close", {
			detail: { reason: e },
			bubbles: !0,
			composed: !0
		}));
	}
	render() {
		return T`<dialog aria-modal="true"
      @cancel=${(e) => {
			e.preventDefault(), this.closeOnEscape && this.requestClose("escape");
		}}
    >
      <div
        class="visual-backdrop"
        @click=${() => {
			this.closeOnBackdrop && this.requestClose("backdrop");
		}}
      ></div>
      <section class="surface" role="document">
        <header>
          <slot name="header">${this.title}</slot>
          <button class="close" type="button" aria-label="Close"
            @click=${() => this.requestClose("button")}>&times;</button>
        </header>
        <div class="body"><slot></slot></div>
        <footer><slot name="footer"></slot></footer>
      </section>
    </dialog>`;
	}
};
customElements.define("ic-dialog", Rt);
//#endregion
//#region src/components/common/app-dialog.ts
var zt = class extends j {
	constructor(...e) {
		super(...e), this.open = !1, this.title = "", this.closeOnBackdrop = !0, this.closeOnEscape = !0;
	}
	static {
		this.properties = {
			open: {
				type: Boolean,
				reflect: !0
			},
			title: { type: String },
			closeOnBackdrop: {
				type: Boolean,
				attribute: "close-on-backdrop"
			},
			closeOnEscape: {
				type: Boolean,
				attribute: "close-on-escape"
			}
		};
	}
	static {
		this.styles = h`
    :host { display:contents; }

    .footer-proxy {
      display:block;
      width:100%;
      min-width:0;
      box-sizing:border-box;
    }
  `;
	}
	forwardClose(e) {
		e.stopPropagation(), this.dispatchEvent(new CustomEvent("dialog-close", {
			detail: e.detail,
			bubbles: !0,
			composed: !0
		}));
	}
	render() {
		return T`<ic-dialog
      .open=${this.open}
      .title=${this.title}
      .closeOnBackdrop=${this.closeOnBackdrop}
      .closeOnEscape=${this.closeOnEscape}
      @dialog-close=${this.forwardClose}
    >
      <slot name="header" slot="header">${this.title}</slot>
      <slot></slot>
      <div class="footer-proxy" slot="footer">
        <slot name="footer"></slot>
      </div>
    </ic-dialog>`;
	}
};
customElements.define("ic-app-dialog", zt);
//#endregion
//#region src/components/common/button.ts
var Bt = class extends j {
	constructor(...e) {
		super(...e), this.variant = "secondary", this.disabled = !1, this.loading = !1;
	}
	static {
		this.properties = {
			variant: {
				type: String,
				reflect: !0
			},
			disabled: {
				type: Boolean,
				reflect: !0
			},
			loading: {
				type: Boolean,
				reflect: !0
			}
		};
	}
	static {
		this.styles = h`
    :host { display:inline-flex; }
    button {
      display:inline-flex;
      width:var(--ic-button-width,auto);
      box-sizing:border-box;
      align-items:center;
      justify-content:center;
      gap:var(--en-control-gap,8px);
      min-height:var(--en-control-height-compact,38px);
      padding-inline:var(--en-control-padding-inline-compact,14px);
      border:var(--ic-border-control,var(--en-border));
      border-radius:var(--en-control-radius,999px);
      background:var(--ic-action-background,var(--en-surface-control));
      color:var(--en-text-primary,var(--primary-text-color));
      cursor:pointer;
      font:inherit;
      font-size:var(--en-body-size,14px);
      font-weight:600;
      transition:filter var(--en-motion-fast,150ms),transform var(--en-motion-fast,150ms);
    }
    button:hover:not(:disabled) { filter:brightness(1.08); }
    button:active:not(:disabled) { transform:scale(.98); }
    button:focus-visible { outline:var(--ic-focus-ring); outline-offset:2px; }
    button:disabled { opacity:.45; cursor:not-allowed; }
    :host([variant="primary"]) button { border-color:transparent; background:var(--en-color-primary); color:#fff; }
    :host([variant="destructive"]) button { color:var(--error-color,#ff3b30); }
  `;
	}
	render() {
		return T`<button type="button" ?disabled=${this.disabled || this.loading}>
      ${this.loading ? "Saving…" : T`<slot></slot>`}
    </button>`;
	}
};
customElements.define("ic-button", Bt);
//#endregion
//#region src/components/common/dialog-footer.ts
var Vt = class extends j {
	static {
		this.styles = h`
    :host {
      display: block;
      width: 100%;
      min-width: 100%;
      max-width: 100%;
      align-self: stretch;
      box-sizing: border-box;
    }

    .footer {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      width: 100%;
      min-width: 0;
      box-sizing: border-box;
      gap: var(--ic-dialog-footer-gap, 12px);
      padding: var(--ic-dialog-footer-padding, 24px 32px);
    }

    @media (max-width: 719px) {
      .footer {
        grid-template-columns: 1fr;
        gap: 10px;
        padding: 16px;
      }

      .leading,
      .actions {
        width: 100%;
      }

      .actions {
        justify-content: flex-end;
        flex-wrap: wrap;
      }
    }

    .leading,
    .actions {
      display: flex;
      align-items: center;
      min-width: 0;
      gap: var(--ic-dialog-footer-gap, 12px);
    }

    .leading {
      justify-self: start;
    }

    .actions {
      justify-content: flex-end;
      justify-self: end;
    }

    .leading:empty {
      display: none;
    }

    ::slotted(ic-button) {
      min-width: 88px;
      --ic-button-width: 100%;
    }
  `;
	}
	render() {
		return T`
      <div class="footer">
        <div class="leading"><slot name="leading"></slot></div>
        <div class="actions"><slot></slot></div>
      </div>
    `;
	}
};
customElements.define("ic-dialog-footer", Vt);
//#endregion
//#region src/components/common/confirm-dialog.ts
var Ht = class extends j {
	constructor(...e) {
		super(...e), this.open = !1, this.title = "Confirm", this.message = "", this.confirmLabel = "Confirm";
	}
	static {
		this.properties = {
			open: { type: Boolean },
			title: { type: String },
			message: { type: String },
			confirmLabel: {
				type: String,
				attribute: "confirm-label"
			}
		};
	}
	static {
		this.styles = h`
    :host { display: contents; }
    ic-app-dialog { --app-dialog-width: 440px; }
    .message {
      box-sizing: border-box;
      padding: var(--ic-dialog-padding, 24px 32px);
      color: var(--en-text-secondary, var(--secondary-text-color));
      font-size: var(--en-body-size, 14px);
      line-height: 1.4;
    }
  `;
	}
	emit(e) {
		this.dispatchEvent(new CustomEvent(e, {
			bubbles: !0,
			composed: !0
		}));
	}
	render() {
		return T`
      <ic-app-dialog
        .open=${this.open}
        .title=${this.title}
        @dialog-close=${(e) => {
			e.stopPropagation(), this.emit("confirm-cancel");
		}}
      >
        <div class="message">${this.message}</div>
        <ic-dialog-footer slot="footer">
          <ic-button @click=${() => this.emit("confirm-cancel")}>Cancel</ic-button>
          <ic-button variant="destructive" @click=${() => this.emit("confirm-accept")}>
            ${this.confirmLabel}
          </ic-button>
        </ic-dialog-footer>
      </ic-app-dialog>
    `;
	}
};
customElements.define("ic-confirm-dialog", Ht);
//#endregion
//#region src/components/common/segmented-control.ts
var Ut = class extends j {
	constructor(...e) {
		super(...e), this.options = [], this.value = "", this.label = "Options", this.widthMode = "fit", this.size = "default";
	}
	static {
		this.properties = {
			options: { attribute: !1 },
			value: { type: String },
			label: { type: String },
			widthMode: {
				type: String,
				attribute: "width",
				reflect: !0
			},
			size: {
				type: String,
				reflect: !0
			}
		};
	}
	static {
		this.styles = h`
    :host { display:inline-flex; width:fit-content; max-width:100%; min-width:0; }
    :host([width="full"]) { display:block; width:100%; max-width:100%; }
    .control {
      position:relative;
      display:inline-flex;
      width:max-content;
      max-width:100%;
      min-width:0;
      min-height:var(--segment-height,var(--en-control-height-compact,38px));
      box-sizing:border-box;
      gap:3px;
      padding:4px var(--segment-padding-inline-end,4px) 4px 4px;
      border:var(--ic-border-control,var(--en-border));
      border-radius:var(--en-control-radius,var(--en-segmented-radius,999px));
      background:var(--ic-control-background,var(--en-surface-control));
      backdrop-filter:var(--en-blur-control,none);
      -webkit-backdrop-filter:var(--en-blur-control,none);
    }
    :host([width="full"]) .control { width:100%; }
    :host([size="compact-28"]) .control {
      height:28px;
      min-height:28px;
      max-height:28px;
    }
    .indicator {
      position:absolute;
      z-index:0;
      top:4px;
      bottom:4px;
      left:4px;
      width:var(--segment-active-width,40px);
      border:1px solid color-mix(in srgb, var(--en-color-primary) 68%, transparent);
      border-radius:var(--en-control-radius,var(--en-segmented-radius,999px));
      background:var(--en-control-active-background,var(--en-color-primary));
      box-shadow:
        0 0 0 1px color-mix(in srgb, var(--en-color-primary) 24%, transparent),
        0 0 14px var(--en-color-primary-glow);
      transform:translateX(var(--segment-active-offset,0px));
      transition:transform var(--en-motion-normal,300ms) var(--en-easing-standard,ease);
      pointer-events:none;
    }
    button {
      position:relative;
      z-index:2;
      box-sizing:border-box;
      flex:0 0 auto;
      min-width:0;
      padding:0 var(--segment-padding-inline,12px);
      border:0;
      border-radius:var(--en-control-radius,var(--en-segmented-radius,999px));
      background:transparent;
      color:var(--en-text-secondary,var(--secondary-text-color));
      cursor:pointer;
      font:inherit;
      font-size:var(--segment-font-size,13px);
      white-space:nowrap;
    }
    button:hover { background:var(--ic-action-hover-background,rgba(127,127,127,.14)); }
    button.active { background:transparent; color:var(--en-control-active-foreground,#fff); font-weight:600; }
    :host([width="full"]) .indicator {
      width:calc((100% - 8px - (var(--segment-count) - 1) * 3px) / var(--segment-count));
      transform:translateX(calc(var(--segment-index) * (100% + 3px)));
    }
    :host([width="full"]) button { flex:1 1 0; min-width:0; }
    button:focus-visible { outline:var(--ic-focus-ring); outline-offset:2px; }
  `;
	}
	select(e) {
		e !== this.value && this.dispatchEvent(new CustomEvent("segmented-change", {
			detail: { value: e },
			bubbles: !0,
			composed: !0
		}));
	}
	updated() {
		if (this.widthMode === "full") return;
		let e = this.shadowRoot?.querySelector(".control"), t = this.shadowRoot?.querySelector("button.active");
		!e || !t || (e.style.setProperty("--segment-active-width", `${t.offsetWidth}px`), e.style.setProperty("--segment-active-offset", `${t.offsetLeft - 4}px`));
	}
	render() {
		let e = Math.max(0, this.options.findIndex((e) => e.value === this.value));
		return T`<div class="control" role="radiogroup" aria-label=${this.label}
      style=${`--segment-count:${Math.max(1, this.options.length)};--segment-index:${e}`}>
      <span class="indicator" aria-hidden="true"></span>
      ${this.options.map((e) => T`<button type="button" role="radio"
        class=${e.value === this.value ? "active" : ""}
        aria-checked=${e.value === this.value}
        @click=${() => this.select(e.value)}>${e.label}</button>`)}
    </div>`;
	}
};
customElements.define("ic-segmented-control", Ut);
//#endregion
//#region src/components/common/card-settings-dialog.ts
var Wt = class extends j {
	constructor(...e) {
		super(...e), this.open = !1, this.title = "Card Settings", this.entity = "", this.error = "", this.subtitle = "", this.trendMode = "none", this.cardId = "", this.canDelete = !1, this.deleteConfirmOpen = !1, this.entitySelectorOpen = !1, this.entityFilter = { domains: [
			"sensor",
			"number",
			"input_number"
		] };
	}
	static {
		this.properties = {
			open: { type: Boolean },
			title: { type: String },
			hass: { attribute: !1 },
			entity: { type: String },
			entityFilter: { attribute: !1 },
			error: { type: String },
			subtitle: { type: String },
			trendMode: {
				type: String,
				attribute: "trend-mode"
			},
			cardId: {
				type: String,
				attribute: "card-id"
			},
			canDelete: {
				type: Boolean,
				attribute: "can-delete"
			},
			deleteConfirmOpen: { state: !0 },
			entitySelectorOpen: { state: !0 }
		};
	}
	static {
		this.styles = [h`
    :host {
      display: contents;
    }

    ic-app-dialog {
      --app-dialog-width: 520px;
      --app-dialog-body-padding: 0;
      --dialog-overflow-x: hidden;
      --dialog-overflow-y: auto;
    }

    .content {
      display:grid;
      gap: 14px;
      padding: 8px 0 0;
    }

    .section {
      display: grid;
      gap: 8px;
    }

    .section-label {
      color: var(--en-heading-primary, var(--primary-text-color));
      font-size: 13px;
      font-weight: 700;
    }

    .field {
      display: grid;
      gap: 6px;
    }

    .field input {
      width: 100%;
      box-sizing: border-box;
      padding: 10px 12px;
      border: 1px solid var(--en-border-default, rgba(255,255,255,.16));
      border-radius: var(--ic-radius-control);
      background: var(--en-surface-raised, rgba(255,255,255,.04));
      color: var(--primary-text-color);
      font: inherit;
    }

    .field input:focus {
      outline: 2px solid color-mix(in srgb, var(--primary-color, #5bb7ff) 55%, transparent);
      outline-offset: 1px;
    }

    ic-segmented-control {
      --segment-font-size: 12px;
    }

    .error {
      margin: 0 0 10px;
      padding: 9px 11px;
      border: 1px solid color-mix(
        in srgb,
        var(--error-color, #ff3b30) 35%,
        transparent
      );
      border-radius: var(--ic-radius-control);
      background: color-mix(
        in srgb,
        var(--error-color, #ff3b30) 12%,
        transparent
      );
      color: var(--error-color, #ff3b30);
      font-size: 13px;
    }

    .selector-panel {
      min-width: 0;
    }
  `, M];
	}
	close() {
		this.deleteConfirmOpen = !1, this.entitySelectorOpen = !1, this.dispatchEvent(new CustomEvent("settings-close", {
			bubbles: !0,
			composed: !0
		}));
	}
	handleEntitySelected(e) {
		e.stopPropagation(), this.entitySelectorOpen = !1, this.dispatchEvent(new CustomEvent("entity-selected", {
			detail: e.detail,
			bubbles: !0,
			composed: !0
		}));
	}
	handleSettingsSave() {
		this.dispatchEvent(new CustomEvent("settings-save", {
			detail: {
				subtitle: this.subtitle,
				trendMode: this.trendMode
			},
			bubbles: !0,
			composed: !0
		}));
	}
	handleTrendModeChange(e) {
		this.trendMode = e.detail.value;
	}
	requestDelete() {
		!this.canDelete || !this.cardId || (this.deleteConfirmOpen = !0);
	}
	confirmDelete() {
		!this.canDelete || !this.cardId || (this.deleteConfirmOpen = !1, this.dispatchEvent(new CustomEvent("settings-delete", {
			detail: { id: this.cardId },
			bubbles: !0,
			composed: !0
		})));
	}
	render() {
		return T`
      <ic-app-dialog
        .open=${this.open}
        .title=${this.title}
        @dialog-close=${(e) => {
			e.stopPropagation(), this.close();
		}}
      >
        <div class="content">
          ${this.error ? T`<div class="error" role="alert">${this.error}</div>` : null}
          <div class="selector">
            <ic-field
              label="Current Entity"
              variant="selectable"
              .value=${this.entity ? L(this.entity, "readonlyField") : "Select an entity"}
              .rawValue=${this.entity || "Select an entity"}
              aria-expanded=${this.entitySelectorOpen}
              @field-activate=${() => {
			this.entitySelectorOpen = !this.entitySelectorOpen;
		}}
            ></ic-field>
            ${this.entitySelectorOpen ? T`
                  <div class="selector-panel">
                    <ic-entity-selector
                      variant="inline"
                      .hass=${this.hass}
                      .value=${this.entity}
                      .filter=${this.entityFilter}
                      @entity-selected=${this.handleEntitySelected}
                    ></ic-entity-selector>
                  </div>
                ` : null}
          </div>

          <div class="section">
            <div class="section-label">Subtitle</div>
            <div class="field">
              <input
                type="text"
                placeholder="Leave blank to hide the subtitle"
                .value=${this.subtitle}
                @input=${(e) => {
			this.subtitle = e.target.value;
		}}
              />
            </div>
          </div>

          <div class="section">
            <div class="section-label">Subtitle behavior</div>
            <div class="field">
              <ic-segmented-control
                width="full"
                label="Subtitle behavior"
                .options=${[
			{
				value: "none",
				label: "Hide"
			},
			{
				value: "vs_yesterday",
				label: "Yesterday"
			},
			{
				value: "vs_last_period",
				label: "Last period"
			}
		]}
                .value=${this.trendMode}
                @segmented-change=${this.handleTrendModeChange}
              ></ic-segmented-control>
            </div>
          </div>

        </div>
        <ic-dialog-footer slot="footer">
          ${this.canDelete ? T`<ic-button slot="leading" variant="destructive" @click=${this.requestDelete}>
                Delete
              </ic-button>` : null}
          <ic-button @click=${this.close}>Cancel</ic-button>
          <ic-button variant="primary" @click=${this.handleSettingsSave}>Save</ic-button>
        </ic-dialog-footer>
      </ic-app-dialog>
      <ic-confirm-dialog
        .open=${this.deleteConfirmOpen}
        title="Delete KPI Card?"
        message="This card will be removed from the dashboard."
        confirm-label="Delete"
        @confirm-cancel=${() => {
			this.deleteConfirmOpen = !1;
		}}
        @confirm-accept=${this.confirmDelete}
      ></ic-confirm-dialog>
    `;
	}
};
customElements.define("ic-card-settings-dialog", Wt);
//#endregion
//#region src/components/energy-kpi-card.ts
var Gt = class extends j {
	constructor(...e) {
		super(...e), this.config = {}, this.validation = { status: "valid" }, this.previewMode = !1, this._chartOpen = !1, this._settingsOpen = !1, this._settingsError = "";
	}
	static {
		this.properties = {
			config: { attribute: !1 },
			validation: { attribute: !1 },
			previewMode: {
				type: Boolean,
				attribute: "preview-mode"
			}
		};
	}
	setConfig(e) {
		if (!e || !e.entity) throw Error("Please define an entity");
		this.config = Ct(e);
	}
	set hass(e) {
		this._hass = e, this.requestUpdate();
	}
	getEnergyValue() {
		return bt(this._hass, this.config);
	}
	getTrend() {
		return xt(this._hass, this.config);
	}
	static {
		this.styles = [
			it,
			h`
    :host {
      display: block;
      width: 100%;
      min-width: 0;
    }

    ic-card-container {
      min-width: 0;
      --energy-card-height: var(--kpi-card-height, 170px);
      --energy-card-padding:
        var(--kpi-padding,24px)
        var(--en-kpi-content-end-inset,4.5px)
        var(--kpi-padding,24px)
        var(--en-kpi-content-start-inset,1.125px);
    }

    ic-card-container.preview {
      --energy-card-height: 160px;
      cursor: default;
    }

    .chart-action {
      display: var(--kpi-chart-action-display, block);
      margin-top: 8px;
    }

    .chart-action button {
      background: rgba(255,255,255,.12);
      border: 1px solid rgba(255,255,255,.18);
      border-radius: var(--ic-radius-control);
      color: var(--primary-text-color);
      cursor: pointer;
      padding: 6px 10px;
      font-size: 0.9rem;
    }

    .chart-action button:hover {
      background: rgba(255,255,255,.2);
    }

    .sparkline {
      display: var(--kpi-sparkline-display, inline-flex);
      align-items: center;
      justify-content: center;
      width: 100%;
      min-height: 30px;
      cursor: pointer;
      border-radius: var(--ic-radius-control);
      background: rgba(255,255,255,.05);
    }

    .sparkline-empty {
      color: var(--secondary-text-color);
      font-size: 0.78rem;
      padding: 6px 8px;
    }

    .config-error {
      color: var(--error-color, var(--secondary-text-color));
      font-size: 0.78rem;
      margin-top: 6px;
    }

    .chart-body {
      padding: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 240px;
      background: transparent;
    }

    .chart-empty {
      color: var(--secondary-text-color);
      font-size: 0.95rem;
    }

    .chart-footer {
      display: flex;
      justify-content: space-between;
      padding: 12px 16px 16px;
      color: var(--secondary-text-color);
      font-size: 0.9rem;
    }

  `,
			M
		];
	}
	getIconCategory() {
		let e = (this.config.unit ?? "").toLowerCase(), t = `${this.config.id ?? ""} ${this.config.title ?? ""}`.toLowerCase();
		return this.config.category === "cost" || t.includes("cost") ? "cost" : e === "w" || e === "kw" || t.includes("power") ? "power" : "energy";
	}
	getIconTone() {
		let e = this.getIconCategory();
		return e === "power" ? "primary" : e === "cost" ? "accent" : "success";
	}
	getSparklineData() {
		return St(this._hass, this.config);
	}
	_toggleChart(e) {
		e && e.stopPropagation(), this._chartOpen = !this._chartOpen, this.requestUpdate();
	}
	renderChartModal(e) {
		let t = e.length ? Math.min(...e) : 0, n = e.length ? Math.max(...e) : 0;
		return T`
      <ic-app-dialog
        .open=${this._chartOpen}
        .title=${this.config.title ?? "Energy Trend"}
        @dialog-close=${() => this._toggleChart()}
      >
          <div class="chart-body">
            ${e.length ? T`
              <svg width="320" height="220" viewBox="0 0 320 220" preserveAspectRatio="none">
                <path d="${ot(e, {
			width: 320,
			height: 180
		})}" fill="none" stroke="var(--primary-text-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <polyline points="${st(e, {
			width: 320,
			height: 180
		})}" fill="none" stroke="var(--primary-text-color)" stroke-width="6" stroke-linecap="round"></polyline>
              </svg>
            ` : T`<div class="chart-empty">No trend data available</div>`}
          </div>
          <div class="chart-footer">
            <div>Min: ${t.toFixed(2)}</div>
            <div>Max: ${n.toFixed(2)}</div>
            <div>Points: ${e.length}</div>
          </div>
      </ic-app-dialog>
    `;
	}
	_openSettings(e) {
		if (e && e.stopPropagation(), this.config?.type === "custom" && this.config?.id) {
			this.dispatchEvent(new CustomEvent("edit-custom-kpi", {
				detail: this.config,
				bubbles: !0,
				composed: !0
			}));
			return;
		}
		this.dispatchEvent(new CustomEvent("open-card-settings", {
			detail: { id: this.config?.id || this.config?.entity || this.config?.title },
			bubbles: !0,
			composed: !0
		})), this._settingsError = "", this._settingsOpen = !0, this.requestUpdate();
	}
	_closeSettings() {
		this._settingsError = "", this._settingsOpen = !1, this.requestUpdate();
	}
	_selectEntityForCard(e) {
		let t = {
			key: this.config?.id || this.config?.entity || this.config?.title,
			entity: e
		};
		this.dispatchEvent(new CustomEvent("set-card-entity", {
			detail: t,
			bubbles: !0,
			composed: !0
		})), t.result?.success ? (this._settingsError = "", this._settingsOpen = !1) : this._settingsError = t.result?.reason ?? "Unable to update entity", this.requestUpdate();
	}
	_saveCardSettings(e) {
		this.dispatchEvent(new CustomEvent("update-kpi-card-settings", {
			detail: {
				key: this.config?.id || this.config?.entity || this.config?.title,
				subtitle: e.subtitle ?? "",
				trendMode: e.trendMode ?? "none"
			},
			bubbles: !0,
			composed: !0
		})), this._settingsOpen = !1, this.requestUpdate();
	}
	_deleteCard(e) {
		!e || e !== this.config.id || (this.dispatchEvent(new CustomEvent("delete-kpi-card", {
			detail: { id: e },
			bubbles: !0,
			composed: !0
		})), this._closeSettings());
	}
	renderSingle(e = this.config) {
		let t = this.config;
		this.config = e;
		let n = this.getTrend(), r = this.getEnergyValue(), i = n.color === "#FF3B30" ? "negative" : n.color === "var(--en-color-success)" ? "positive" : "neutral", a = this.getSparklineData(), o = this.getIconTone(), s = ot(a, {
			width: 120,
			height: 28
		}), c = T`
      <ic-card-container
        class=${this.previewMode ? "preview" : ""}
        @click=${this.previewMode ? void 0 : this._openSettings}
      >
        <div class="content">
          <div class="kpi-copy">
            <div class="name">
              ${this.config.title ?? "Energy"}
            </div>
            <ic-metric-value
              .value=${r?.value ?? ""}
              .unit=${r?.unit ?? this.config.unit ?? ""}
              .status=${r?.status ?? "unavailable"}
            ></ic-metric-value>
            ${r?.statusMessage ? T`<div class="config-error">${r.statusMessage}</div>` : T``}
            ${this.validation.status === "invalid" ? T`<div class="config-error">${this.validation.reason}</div>` : T``}
            ${this.previewMode ? null : n.text ? T`
                  <ic-trend-indicator
                    .text=${n.text}
                    .status=${i}
                  ></ic-trend-indicator>
                ` : null}
            ${this.previewMode ? null : T`
                <div
                  class="sparkline"
                  style="margin-top:8px"
                  @click=${this._toggleChart}
                >
                  ${s ? T`<svg width="120" height="30" viewBox="0 0 120 30" preserveAspectRatio="none">
                        <path d="${s}" fill="none" stroke="var(--primary-text-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>` : T`<div class="sparkline-empty">No trend data</div>`}
                </div>

                <div class="chart-action">
                  <button @click=${this._toggleChart}>View trend chart</button>
                </div>
              `}
          </div>

          <ic-icon-badge
            class=${this.getIconCategory()}
            .icon=${this.config.icon ?? "mdi:lightning-bolt"}
            .tone=${o}
          ></ic-icon-badge>
        </div>
      </ic-card-container>

      ${this.previewMode ? null : this.renderChartModal(a)}

      ${this.previewMode ? null : T`<ic-card-settings-dialog
        .open=${this._settingsOpen}
        .title=${"KPI Settings"}
        .hass=${this._hass}
        .entity=${this.config.entity ?? ""}
        .subtitle=${this.config.subtitle ?? this.config.trend ?? ""}
        .trendMode=${this.config.trendMode ?? "none"}
        .cardId=${this.config.id ?? ""}
        .canDelete=${!!this.config.id}
        .error=${this._settingsError}
        .entityFilter=${{ domains: [
			"sensor",
			"number",
			"input_number"
		] }}
        @settings-close=${() => this._closeSettings()}
        @entity-selected=${(e) => this._selectEntityForCard(e.detail.entityId)}
        @settings-save=${(e) => {
			this._saveCardSettings(e.detail);
		}}
        @settings-delete=${(e) => {
			this._deleteCard(e.detail.id);
		}}
      ></ic-card-settings-dialog>`}
    `;
		return this.config = t, c;
	}
	render() {
		return this.config ? this.renderSingle() : T``;
	}
	getCardSize() {
		return 3;
	}
};
customElements.define("energy-kpi-card", Gt), window.customCards = [...window.customCards || [], {
	type: "energy-kpi-card",
	name: "Energy KPI Card",
	description: "Glass style energy KPI card"
}], console.log("Energy KPI Card Loaded v2");
//#endregion
//#region src/components/common/menu-item.ts
var Kt = class extends At {
	constructor(...e) {
		super(...e), this.variant = "compact";
	}
};
customElements.define("ic-menu-item", Kt);
//#endregion
//#region src/components/kpi-item.ts
var qt = class extends j {
	constructor(...e) {
		super(...e), this.selected = !1;
	}
	static {
		this.properties = {
			item: { attribute: !1 },
			selected: { type: Boolean },
			leadingIcon: {
				type: String,
				attribute: "leading-icon"
			}
		};
	}
	static {
		this.styles = h`
    :host { display:block; }
    ::slotted([slot="action"]) {
      align-self:center;
      justify-self:end;
    }
  `;
	}
	onClick() {
		this.dispatchEvent(new CustomEvent("kpi-click", {
			detail: this.item,
			bubbles: !0,
			composed: !0
		}));
	}
	render() {
		if (!this.item) return T``;
		let e = this.leadingIcon?.includes("plus") ? "plus" : this.leadingIcon?.includes("check") || this.selected ? "check" : "plus";
		return T`
      <ic-menu-item
        .selected=${this.selected}
        .indicator=${e}
        @click=${this.onClick}
      >
        ${this.item.title}
        <slot name="action" slot="trailing"></slot>
      </ic-menu-item>
    `;
	}
};
customElements.define("kpi-item", qt);
//#endregion
//#region src/components/common/action-menu.ts
var Jt = class extends j {
	static {
		this.styles = h`
    :host { display:block; width:100%; min-width:0; max-height:inherit; overflow:hidden; }
    .shell {
      display:grid;
      width:100%;
      max-height:inherit;
      min-height:0;
      box-sizing:border-box;
      grid-template-rows:minmax(0,1fr) auto;
      overflow:hidden;
      padding:8px var(--en-menu-scrollbar-inset,8px);
    }
    .scroll {
      display:grid;
      width:100%;
      min-height:0;
      box-sizing:border-box;
      gap:var(--en-menu-item-gap,6px);
      padding:
        0
        var(--en-menu-scrollbar-content-gap,8px)
        var(--en-menu-bottom-padding,16px)
        0;
    }
    .footer {
      display:grid;
      min-width:0;
      padding-top:6px;
      background:inherit;
    }
    ::slotted([slot="footer"]) { display:block; width:100%; box-sizing:border-box; padding-bottom:12px; }
  `;
	}
	render() {
		return T`<div class="shell"><ic-scroll-area class="scroll" variant="menu"><slot></slot></ic-scroll-area><div class="footer"><slot name="footer"></slot></div></div>`;
	}
};
customElements.define("ic-action-menu", Jt);
//#endregion
//#region src/components/kpi-picker.ts
var Yt = class extends j {
	constructor(...e) {
		super(...e), this.items = [], this.customItems = [], this.selectedItems = [];
	}
	static {
		this.properties = {
			items: { type: Array },
			customItems: { type: Array },
			selectedItems: { type: Array },
			hass: { type: Object }
		};
	}
	_toggleKpiLocal(e) {
		this.dispatchEvent(new CustomEvent("toggle-kpi", {
			detail: e,
			bubbles: !0,
			composed: !0
		}));
	}
	_createCustomKpi() {
		this.dispatchEvent(new CustomEvent("create-custom-kpi", {
			bubbles: !0,
			composed: !0
		}));
	}
	_editCustomKpi(e) {
		this.dispatchEvent(new CustomEvent("edit-custom-kpi", {
			detail: e,
			bubbles: !0,
			composed: !0
		}));
	}
	_toggleCustomKpi(e) {
		this.dispatchEvent(new CustomEvent("toggle-custom-kpi", {
			detail: e,
			bubbles: !0,
			composed: !0
		}));
	}
	_toggleItem(e) {
		if (e?.type === "custom" || e?.id?.startsWith("custom-")) {
			this._toggleCustomKpi(e);
			return;
		}
		this._toggleKpiLocal(e);
	}
	static {
		this.styles = h`
    :host{
      display:block;
      width:100%;
      max-height:min(
        520px,
        calc(100vh - 120px),
        var(--popover-max-height,520px)
      );
      min-width:0;
      overflow:hidden;
    }

    .panel{
      width:100%;
      max-height:inherit;
    }

    .section-title{
      font-size:11px;
      text-transform: uppercase;
      color:var(--en-text-secondary,var(--secondary-text-color));
      letter-spacing:0.08em;
      margin:10px 8px 6px;
    }

    .empty{
      font-size:14px;
      color: var(--secondary-text-color);
      margin: 6px 0 0;
    }

    kpi-item{
      display:block;
      margin:0;
    }

    .empty{
      display:grid;
      gap:4px;
      margin:4px 8px 8px;
      padding:10px 0;
    }

    button{
      padding:8px 10px;
      border:1px solid var(--en-border,var(--divider-color));
      border-radius:var(--en-control-radius,999px);
      background:transparent;
      color:var(--en-text-primary,var(--primary-text-color));
      cursor:pointer;
    }

    .more{
      display:grid;
      width:28px;
      height:28px;
      padding:0;
      place-items:center;
      border:0;
    }

    .more ha-icon{
      width:16px;
      height:16px;
      --mdc-icon-size:16px;
    }
  `;
	}
	render() {
		let e = this.selectedItems || [], t = (t) => t.id ? e.includes(t.id) : e.includes(t.entity), n = [...this.items.filter(t)], r = [...this.items.filter((e) => !t(e))];
		return T`
      <ic-action-menu class="panel">
        <div class="section-title">Displayed Cards</div>
        ${n.length ? n.map((e) => T`
          <div style="display:flex;align-items:center;gap:8px">
            <div style="flex:1;" @click=${() => this._toggleItem(e)}>
              <kpi-item
                .item=${e}
                .selected=${!0}
              ></kpi-item>
            </div>
          </div>
        `) : T`<div class="empty">No active cards yet.</div>`}

        <div class="section-title">Available Cards</div>
        ${r.length ? r.map((e) => T`
          <div style="display:flex;align-items:center;gap:8px">
            <div style="flex:1;" @click=${() => this._toggleItem(e)}>
              <kpi-item
                .item=${e}
                .selected=${!1}
              ></kpi-item>
            </div>
          </div>
        `) : T`<div class="empty">All cards are enabled.</div>`}

        <div class="section-title">Custom cards</div>
        ${this.customItems.length ? this.customItems.map((e) => T`
          <kpi-item
            .item=${{
			...e,
			title: e.title ?? e.name ?? "Custom KPI"
		}}
            .selected=${!!e.enabled}
            leadingIcon="mdi:check"
            @click=${() => this._toggleCustomKpi(e)}
          >
            <button
              slot="action"
              class="more"
              type="button"
              aria-label=${`Edit ${e.title ?? e.name ?? "custom KPI"}`}
              @click=${(t) => {
			t.stopPropagation(), this._editCustomKpi(e);
		}}
            >
              <ha-icon icon="mdi:dots-horizontal"></ha-icon>
            </button>
          </kpi-item>
        `) : T`
          <div class="empty">
            <span>No custom cards yet</span>
          </div>
        `}

        <ic-menu-item
          tone="primary"
          indicator="plus"
          @click=${this._createCustomKpi}
        >Create Custom KPI</ic-menu-item>

      </ic-action-menu>
    `;
	}
};
customElements.define("kpi-picker", Yt);
//#endregion
//#region src/components/common/section-header.ts
var Xt = class extends j {
	constructor(...e) {
		super(...e), this.title = "", this.subtitle = "", this.showActions = !0, this.level = "section";
	}
	static {
		this.properties = {
			title: { type: String },
			subtitle: { type: String },
			showActions: {
				type: Boolean,
				attribute: "show-actions"
			},
			level: { type: String }
		};
	}
	static {
		this.styles = h`
    :host {
      display: block;
      color: var(--en-body-primary, var(--primary-text-color));
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      margin-bottom: var(--en-section-heading-margin-bottom, 16px);
    }

    .copy {
      min-width: 0;
    }

    .title {
      color: var(--en-heading-primary, var(--primary-text-color));
      font-size: var(--en-title-lg-size, 24px);
      font-weight: var(--en-title-lg-weight, 600);
      line-height: var(--en-title-lg-line-height, 1.2);
      letter-spacing: var(--en-title-lg-letter-spacing, -0.3px);
    }

    .title.page {
      font-size: var(--en-title-xl-size, 34px);
      font-weight: var(--en-title-xl-weight, 600);
      line-height: var(--en-title-xl-line-height, 1.15);
      letter-spacing: var(--en-title-xl-letter-spacing, -0.5px);
    }

    .subtitle {
      margin-top: 4px;
      color: var(--en-subtitle-secondary, var(--secondary-text-color));
      font-size: var(--section-header-subtitle-size, 13px);
    }

    .actions {
      display: flex;
      flex: 0 0 auto;
      align-items: center;
      gap: var(--section-header-action-gap, 8px);
    }

    ::slotted([slot="actions"]) {
      flex: 0 0 auto;
    }
  `;
	}
	render() {
		return T`
      <div class="header">
        <div class="copy">
          <div class="title ${this.level}">${this.title}</div>
          ${this.subtitle ? T`<div class="subtitle">${this.subtitle}</div>` : null}
        </div>
        ${this.showActions ? T`
              <div class="actions">
                <slot name="actions"></slot>
              </div>
            ` : null}
      </div>
    `;
	}
};
customElements.define("ic-section-header", Xt);
//#endregion
//#region src/components/common/action-button.ts
var Zt = class extends j {
	constructor(...e) {
		super(...e), this.icon = "+", this.label = "Action", this.disabled = !1;
	}
	static {
		this.properties = {
			icon: { type: String },
			label: { type: String },
			disabled: {
				type: Boolean,
				reflect: !0
			}
		};
	}
	static {
		this.styles = h`
    :host {
      display: inline-flex;
      flex: 0 0 auto;
    }

    button {
      display: grid;
      width: var(--section-action-size, 34px);
      height: var(--section-action-size, 34px);
      padding: 0;
      place-items: center;
      border: var(--ic-action-border, none);
      border-radius: var(--en-control-radius,999px);
      background: var(
        --section-action-background,
        var(--ic-action-background, rgba(255, 255, 255, 0.15))
      );
      color: var(--primary-text-color);
      cursor: pointer;
      font: inherit;
      font-size: var(--section-action-icon-size, 22px);
      line-height: 1;
      transition:
        transform var(--en-motion-fast, 0.2s) var(--en-easing-standard, ease),
        background var(--en-motion-fast, 0.2s) var(--en-easing-standard, ease);
    }

    button:hover {
      transform: scale(1.08);
      background: var(
        --section-action-hover-background,
        var(--ic-action-hover-background, rgba(255, 255, 255, 0.25))
      );
    }

    button:active {
      transform: scale(0.96);
    }

    button:focus-visible {
      outline: var(--ic-focus-ring);
      outline-offset: 2px;
    }

    button:disabled {
      cursor: default;
      opacity: 0.5;
      transform: none;
    }

    ha-icon {
      width: 18px;
      height: 18px;
      transform: var(--section-action-icon-transform, none);
    }
  `;
	}
	handleClick() {
		this.dispatchEvent(new CustomEvent("action-click", {
			bubbles: !0,
			composed: !0
		}));
	}
	render() {
		return T`
      <button
        type="button"
        aria-label=${this.label}
        ?disabled=${this.disabled}
        @click=${this.handleClick}
      >
        ${this.icon.startsWith("mdi:") ? T`<ha-icon .icon=${this.icon}></ha-icon>` : this.icon}
      </button>
    `;
	}
};
customElements.define("ic-action-button", Zt);
var Qt = new class {
	open(e) {
		this.active && this.active !== e && this.active.dispatchEvent(new CustomEvent("popover-manager-close")), this.active = e;
	}
	close(e) {
		this.active === e && (this.active = void 0);
	}
}(), $t = class extends j {
	constructor(...e) {
		super(...e), this.open = !1, this.align = "end", this.placement = "bottom-end", this.offset = 8, this.closeOnOutsideClick = !0, this.outsidePointer = (e) => {
			this.closeOnOutsideClick && !e.composedPath().includes(this) && this.requestClose();
		}, this.escape = (e) => {
			e.key === "Escape" && this.requestClose();
		}, this.managerClose = () => this.requestClose(), this.reposition = () => this.positionPopover();
	}
	static {
		this.properties = {
			open: {
				type: Boolean,
				reflect: !0
			},
			align: { type: String },
			anchor: { attribute: !1 },
			placement: { type: String },
			offset: { type: Number },
			closeOnOutsideClick: {
				type: Boolean,
				attribute: "close-on-outside-click"
			}
		};
	}
	static {
		this.styles = [Mt, h`
    :host { display:inline-flex; }
    .popover {
      position:fixed;
      z-index:1000;
      left:var(--popover-left,0);
      top:var(--popover-top,0);
      min-width:var(--popover-min-width,210px);
      max-width:var(--popover-max-width,calc(100vw - 16px));
      max-height:var(--popover-max-height,calc(100vh - 16px));
      overflow:hidden;
      padding:6px;
      box-sizing:border-box;
      border:var(--ic-border-popover,var(--ic-popover-border,var(--en-border)));
      border-radius:var(--popover-radius,var(--ic-radius-popover));
      background:var(--ic-popover-background,var(--en-surface-floating,var(--en-surface-primary,var(--ic-card-background))));
      color:var(--en-text-primary,var(--ic-card-primary-text,var(--primary-text-color)));
      box-shadow:var(--ic-shadow-popover,var(--ic-popover-shadow,var(--en-shadow-floating)));
      backdrop-filter:var(--ic-popover-blur,var(--en-blur-floating,var(--en-blur,var(--ic-card-backdrop-filter))));
      -webkit-backdrop-filter:var(--ic-popover-blur,var(--en-blur-floating,var(--en-blur,var(--ic-card-backdrop-filter))));
      opacity:0;
      visibility:hidden;
      pointer-events:none;
      transform:translateY(-4px) scale(.98);
      transform-origin:top right;
      transition:
        opacity var(--en-motion-fast,180ms) var(--en-easing-standard,ease),
        transform var(--en-motion-fast,180ms) var(--en-easing-standard,ease),
        visibility var(--en-motion-fast,180ms);
    }
    .popover.end { transform-origin:top right; }
    .popover.start { transform-origin:top left; }
    .popover.open {
      opacity:1; visibility:visible; pointer-events:auto;
      transform:translateY(0) scale(1);
    }
    ::slotted(button) {
      width:100%;
      border:0;
      border-radius:var(--ic-radius-control);
      padding:10px 12px;
      background:transparent;
      color:inherit;
      text-align:left;
      cursor:pointer;
    }
    ::slotted(button:hover) {
      background:var(--ic-action-hover-background,rgba(127,127,127,.14));
    }
  `];
	}
	connectedCallback() {
		super.connectedCallback(), this.addEventListener("popover-manager-close", this.managerClose);
	}
	disconnectedCallback() {
		document.removeEventListener("pointerdown", this.outsidePointer, !0), document.removeEventListener("keydown", this.escape), window.removeEventListener("resize", this.reposition), window.removeEventListener("scroll", this.reposition, !0), Qt.close(this), super.disconnectedCallback();
	}
	updated(e) {
		e.has("open") && (this.open ? (Qt.open(this), this.positionPopover(), queueMicrotask(() => document.addEventListener("pointerdown", this.outsidePointer, !0)), document.addEventListener("keydown", this.escape), window.addEventListener("resize", this.reposition), window.addEventListener("scroll", this.reposition, !0)) : (document.removeEventListener("pointerdown", this.outsidePointer, !0), document.removeEventListener("keydown", this.escape), window.removeEventListener("resize", this.reposition), window.removeEventListener("scroll", this.reposition, !0), Qt.close(this)));
	}
	requestClose() {
		this.open && this.dispatchEvent(new CustomEvent("popover-close", {
			bubbles: !0,
			composed: !0
		}));
	}
	positionPopover() {
		let e = this.renderRoot.querySelector(".popover"), t = this.renderRoot.querySelector("slot[name=\"anchor\"]"), n = this.anchor ?? t?.assignedElements({ flatten: !0 })[0];
		if (!e || !n) return;
		let r = n.getBoundingClientRect(), i = this.getRootNode(), a = (i instanceof ShadowRoot ? i.host : void 0)?.getBoundingClientRect(), o = Math.max(8, a?.left ?? 8), s = Math.min(window.innerWidth - 8, a?.right ?? window.innerWidth - 8);
		e.style.setProperty("--popover-max-width", `${Math.max(0, s - o)}px`);
		let c = Math.max(120, Math.min(window.innerHeight - r.bottom - this.offset - 8, (a?.bottom ?? window.innerHeight - 8) - r.bottom - this.offset));
		e.style.setProperty("--popover-max-height", `${c}px`);
		let l = e.getBoundingClientRect(), u = this.placement === "bottom-start" || this.align === "start" ? r.left : r.right - l.width;
		u = Math.min(Math.max(o, u), Math.max(o, s - l.width));
		let d = r.bottom + this.offset, f = r.top - l.height - this.offset;
		d + l.height > window.innerHeight - 8 && f >= 8 && (d = f), e.style.setProperty("--popover-left", `${u}px`), e.style.setProperty("--popover-top", `${d}px`), e.classList.toggle("start", u <= r.left + 1), e.classList.toggle("end", u > r.left + 1);
	}
	render() {
		return T`<slot name="anchor"></slot><div
      class="popover ${this.align} ${this.open ? "open" : ""}"
      role="menu"
    ><slot></slot></div>`;
	}
};
customElements.define("ic-popover", $t);
//#endregion
//#region src/config/kpi-card-draft.ts
var en = /^[a-z0-9_]+\.[a-z0-9_]+$/, tn = /^[a-z0-9][a-z0-9_-]*$/;
function B(e) {
	return e?.trim() || void 0;
}
function nn(e) {
	if (e === void 0 || e === "") return 2;
	if (typeof e == "number") return e;
	let t = e.trim();
	return t ? Number(t) : 2;
}
function V(e) {
	return {
		id: B(e.id),
		title: e.title?.trim() ?? "",
		entity: e.entity?.trim() ?? "",
		category: B(e.category),
		unit: B(e.unit),
		icon: B(e.icon),
		enabled: e.enabled ?? !0,
		autoScale: e.autoScale ?? !0,
		decimals: nn(e.decimals),
		order: e.order,
		subtitle: (e.subtitle ?? e.trend)?.trim() ?? "",
		trendMode: e.trendMode ?? "none"
	};
}
function rn(e, t = []) {
	let n = {};
	return e.title || (n.title = "Title required"), e.entity ? en.test(e.entity) || (n.entity = "Invalid entity ID") : n.entity = "Entity required", e.id && (tn.test(e.id) ? t.some((t) => t.toLowerCase() === e.id?.toLowerCase()) && (n.id = "Card ID already exists") : n.id = "Invalid card ID"), (!Number.isInteger(e.decimals) || e.decimals < 0 || e.decimals > 4) && (n.decimals = "Decimals must be an integer from 0 to 4"), {
		valid: Object.keys(n).length === 0,
		errors: n
	};
}
function an(e) {
	return e.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function on(e, t = []) {
	let n = e.entity.split(".")[1] ?? "", r = `custom-${an(e.title) || an(n) || "kpi"}`, i = new Set(t.map((e) => e.toLowerCase()));
	if (!i.has(r)) return r;
	let a = 2;
	for (; i.has(`${r}-${a}`);) a++;
	return `${r}-${a}`;
}
function sn(e, t = []) {
	let n = V(e), r = rn(n, t);
	if (!r.valid) return {
		valid: !1,
		draft: n,
		validation: r
	};
	let i = {
		type: "custom",
		id: n.id ?? on(n, t),
		name: n.title,
		title: n.title,
		entity: n.entity,
		enabled: n.enabled,
		autoScale: n.autoScale,
		decimals: n.decimals,
		order: n.order,
		subtitle: n.subtitle || "",
		trendMode: n.trendMode ?? "none"
	};
	return n.category && (i.category = n.category), n.unit && (i.unit = n.unit), n.icon && (i.icon = n.icon), {
		valid: !0,
		draft: n,
		config: i,
		validation: r
	};
}
//#endregion
//#region src/components/common/icon-input.ts
var cn = class extends j {
	constructor(...e) {
		super(...e), this.value = "", this.label = "Icon";
	}
	static {
		this.properties = {
			value: { type: String },
			label: { type: String }
		};
	}
	static {
		this.styles = h`
    :host {
      display: block;
    }

    ha-icon {
      color: var(--primary-text-color);
      opacity: 0.72;
      --mdc-icon-size: 21px;
    }
  `;
	}
	updateValue(e) {
		this.value = e.detail.value, this.dispatchEvent(new CustomEvent("icon-change", {
			detail: { icon: this.value.trim() },
			bubbles: !0,
			composed: !0
		}));
	}
	render() {
		return T`
      <ic-field .label=${this.label} .value=${this.value} placeholder="mdi:flash"
        @field-input=${this.updateValue}>
        <ha-icon slot="trailing" .icon=${this.value.trim() || "mdi:shape-outline"}
          aria-hidden="true"></ha-icon>
      </ic-field>
    `;
	}
};
customElements.define("ic-icon-input", cn);
//#endregion
//#region src/components/kpi/kpi-card-builder-dialog.ts
var ln = class extends j {
	constructor(...e) {
		super(...e), this.open = !1, this.mode = "create", this.draft = {}, this.existingIds = [], this.deleteConfirmOpen = !1, this.formDraft = {}, this.validation = {
			valid: !0,
			errors: {}
		}, this.showEntitySelector = !1;
	}
	static {
		this.properties = {
			open: { type: Boolean },
			mode: { type: String },
			hass: { attribute: !1 },
			draft: { attribute: !1 },
			existingIds: { attribute: !1 },
			deleteConfirmOpen: { state: !0 }
		};
	}
	static {
		this.styles = [h`
    :host {
      display: contents;
      --en-label-font-weight: 400;
      container-type: inline-size;
    }

    ic-app-dialog {
      --app-dialog-width: 560px;
      --app-dialog-radius: var(--ic-radius-dialog);
      --app-dialog-body-padding: 0;
      width: min(100%, 100%);
      max-width: 100%;
      container-type: inline-size;
    }

    .form {
      display: grid;
      gap: 24px;
      padding: 8px 32px 32px;
      color: var(--en-text-primary, var(--primary-text-color));
      width: 100%;
      max-width: 100%;
      min-width: 0;
      box-sizing: border-box;
    }

    .section {
      display: grid;
      gap: 14px;
    }

    .section-title {
      color: var(--en-heading-primary, var(--primary-text-color));
      font-size: .78rem;
      font-weight: 700;
      letter-spacing: .08em;
      text-transform: uppercase;
    }

    label {
      display: grid;
      gap: 6px;
      width: 100%;
      max-width: 100%;
      min-width: 0;
      font-size: 0.82rem;
      color: var(--en-text-secondary, var(--secondary-text-color));
      box-sizing: border-box;
    }

    .appearance-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      align-items: start;
      column-gap: 16px;
      row-gap: 14px;
      min-width: 0;
      width: 100%;
      max-width: 100%;
    }

    .appearance-grid > * {
      min-width: 0;
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
    }

    .checkbox {
      display: grid;
      grid-column: 1 / -1;
      gap: 8px;
    }

    .error {
      color: var(--error-color);
      font-size: 0.76rem;
    }

    button {
      min-height: 40px;
      padding: 8px 16px;
      border: var(--en-border-control, var(--en-border));
      border-radius: var(--ic-radius-button);
      background: var(--en-surface-control, transparent);
      color: var(--en-text-primary, var(--primary-text-color));
      cursor: pointer;
    }

    .selector {
      padding-top: 8px;
      border-top: 1px solid var(--divider-color);
    }

    .preview {
      display: grid;
      gap: 8px;
      width: 100%;
      max-width: 100%;
      min-width: 0;
    }

    .preview-label {
      color: var(--secondary-text-color);
      font-size: .75rem;
      font-weight: 600;
      letter-spacing: .08em;
      text-transform: uppercase;
    }

    .preview energy-kpi-card {
      display: block;
      height: 160px;
      pointer-events: none;
      width: 100%;
      max-width: 100%;
      min-width: 0;
      box-sizing: border-box;
    }

    @container (max-width: 719px) {
      .form {
        padding: 8px 16px 20px;
      }

      .appearance-grid {
        grid-template-columns: 1fr;
        row-gap: 16px;
      }

      .preview energy-kpi-card {
        height: 126px;
      }
    }

    @media (max-width: 719px) {
      .form {
        padding: 8px 16px 20px;
      }

      .appearance-grid {
        grid-template-columns: 1fr;
        row-gap: 16px;
      }

      .preview energy-kpi-card {
        height: 126px;
      }
    }
  `, M];
	}
	willUpdate(e) {
		(e.has("open") && this.open || e.has("draft")) && (this.formDraft = { ...this.draft }, this.validation = {
			valid: !0,
			errors: {}
		}, this.showEntitySelector = !1, this.deleteConfirmOpen = !1);
	}
	updateField(e, t) {
		this.formDraft = {
			...this.formDraft,
			[e]: t
		}, this.validation = {
			valid: !0,
			errors: {}
		}, this.requestUpdate();
	}
	close() {
		this.deleteConfirmOpen = !1, this.dispatchEvent(new CustomEvent("kpi-builder-close", {
			bubbles: !0,
			composed: !0
		}));
	}
	handleEntitySelected(e) {
		e.stopPropagation(), this.updateField("entity", e.detail.entityId), this.showEntitySelector = !1;
	}
	submit() {
		let e = V(this.formDraft).id, t = this.mode === "edit" && e ? this.existingIds.filter((t) => t.toLowerCase() !== e.toLowerCase()) : this.existingIds, n = sn(this.formDraft, t);
		if (this.validation = n.validation, !n.valid) {
			this.requestUpdate();
			return;
		}
		this.dispatchEvent(new CustomEvent("kpi-builder-submit", {
			detail: {
				config: n.config,
				mode: this.mode
			},
			bubbles: !0,
			composed: !0
		}));
	}
	requestDeleteConfirmation() {
		this.mode === "edit" && (this.deleteConfirmOpen = !0);
	}
	requestDelete() {
		let e = V(this.formDraft).id;
		!e || this.mode !== "edit" || (this.deleteConfirmOpen = !1, this.dispatchEvent(new CustomEvent("kpi-builder-delete", {
			detail: { id: e },
			bubbles: !0,
			composed: !0
		})));
	}
	render() {
		let e = V(this.formDraft), t = this.validation.errors;
		return T`
      <ic-app-dialog
        .open=${this.open}
        .title=${this.mode === "edit" ? "Edit KPI Card" : "Create KPI Card"}
        @dialog-close=${(e) => {
			e.stopPropagation(), this.close();
		}}
      >
        <div class="form">
          <div class="section">
            <div class="section-title">Basic Information</div>
            <div>
              <ic-field label="Name" .value=${e.title}
                @field-input=${(e) => this.updateField("title", e.detail.value)}></ic-field>
              ${t.title ? T`<span class="error">${t.title}</span>` : null}
            </div>

            <div>
              <ic-field label="Entity" variant="selectable"
                .value=${e.entity ? L(e.entity, "readonlyField") : "Select an entity"}
                .rawValue=${e.entity || "Select an entity"}
                aria-expanded=${this.showEntitySelector}
                @field-activate=${() => {
			this.showEntitySelector = !this.showEntitySelector, this.requestUpdate();
		}}></ic-field>
              ${t.entity ? T`<span class="error">${t.entity}</span>` : null}
            </div>

            ${this.showEntitySelector ? T`
                  <div class="selector">
                    <ic-entity-selector
                      .hass=${this.hass}
                      .value=${e.entity}
                      .filter=${{ domains: ["sensor"] }}
                      @entity-selected=${this.handleEntitySelected}
                    ></ic-entity-selector>
                  </div>
                ` : null}
          </div>

          <div class="section">
            <div class="section-title">Appearance</div>
            <div class="appearance-grid">
              <ic-icon-input
                .value=${e.icon ?? ""}
                @icon-change=${(e) => this.updateField("icon", e.detail.icon)}
              ></ic-icon-input>

              <ic-field label="Unit" .value=${e.unit ?? ""}
                placeholder="Auto (entity unit)"
                @field-input=${(e) => this.updateField("unit", e.detail.value)}></ic-field>

              <label>
                Decimals
                <ic-segmented-control width="full" label="Decimals"
                  .value=${String(e.decimals)}
                  .options=${[
			0,
			1,
			2,
			3,
			4
		].map((e) => ({
			value: String(e),
			label: String(e)
		}))}
                  @segmented-change=${(e) => this.updateField("decimals", e.detail.value)}>
                </ic-segmented-control>
                ${t.decimals ? T`<span class="error">${t.decimals}</span>` : null}
              </label>

              <label>
                Automatic unit scaling
                <ic-segmented-control width="full" label="Automatic unit scaling"
                  .value=${e.autoScale ? "on" : "off"}
                  .options=${[{
			value: "off",
			label: "Off"
		}, {
			value: "on",
			label: "On"
		}]}
                  @segmented-change=${(e) => this.updateField("autoScale", e.detail.value === "on")}>
                </ic-segmented-control>
              </label>

              <ic-field label="Subtitle" .value=${e.subtitle ?? ""}
                placeholder="Leave blank to hide the subtitle"
                @field-input=${(e) => this.updateField("subtitle", e.detail.value)}></ic-field>

              <label>
                Subtitle Behavior
                <ic-segmented-control width="full" label="Subtitle behavior"
                  .value=${e.trendMode ?? "none"}
                  .options=${[
			{
				value: "none",
				label: "Hide"
			},
			{
				value: "vs_yesterday",
				label: "Yesterday"
			},
			{
				value: "vs_last_period",
				label: "Last period"
			}
		]}
                  @segmented-change=${(e) => this.updateField("trendMode", e.detail.value)}>
                </ic-segmented-control>
              </label>
            </div>
          </div>

          <div class="section preview">
            <div class="section-title">Preview</div>
            <energy-kpi-card
              .config=${{
			...e,
			type: "custom",
			title: e.title || "Custom KPI",
			icon: e.icon || "mdi:flash"
		}}
              .hass=${this.hass}
              .previewMode=${!0}
            ></energy-kpi-card>
          </div>
        </div>

        <ic-dialog-footer slot="footer">
          ${this.mode === "edit" ? T`
                <ic-button slot="leading" variant="destructive" @click=${this.requestDeleteConfirmation}>
                  Delete
                </ic-button>
              ` : null}
          <ic-button @click=${this.close}>Cancel</ic-button>
          <ic-button variant="primary" @click=${this.submit}>
            ${this.mode === "edit" ? "Save" : "Add Card"}
          </ic-button>
        </ic-dialog-footer>
      </ic-app-dialog>
      <ic-confirm-dialog
        .open=${this.deleteConfirmOpen}
        title="Delete KPI Card?"
        message="This card will be removed from the dashboard."
        confirm-label="Delete"
        @confirm-cancel=${() => {
			this.deleteConfirmOpen = !1;
		}}
        @confirm-accept=${this.requestDelete}
      ></ic-confirm-dialog>
    `;
	}
};
customElements.define("ic-kpi-card-builder-dialog", ln);
//#endregion
//#region src/data/kpi-config.ts
var un = [
	{
		id: "total_usage",
		title: "Total Usage",
		icon: "mdi:meter-electric",
		category: "energy",
		unit: "Wh",
		defaultEntity: "sensor.main_all_energy_fwd_total",
		defaultEnabled: !0,
		entityType: "sensor",
		autoScale: !0,
		decimals: 2,
		keywords: [
			"main_all_energy_fwd_total",
			"total",
			"energy"
		]
	},
	{
		id: "usage",
		title: "Today's Usage",
		icon: "mdi:lightning-bolt",
		category: "energy",
		unit: "Wh",
		defaultEntity: "sensor.today_usage",
		defaultEnabled: !0,
		entityType: "sensor",
		autoScale: !0,
		decimals: 2,
		keywords: [
			"today",
			"usage",
			"daily",
			"energy"
		]
	},
	{
		id: "power",
		title: "Current Power",
		icon: "mdi:flash",
		category: "energy",
		unit: "W",
		defaultEntity: "sensor.main_all_power_rt",
		defaultEnabled: !0,
		entityType: "sensor",
		autoScale: !0,
		decimals: 2,
		keywords: [
			"main_all_power_rt",
			"current",
			"power"
		]
	},
	{
		id: "solar_generation",
		title: "Solar Generation",
		icon: "mdi:solar-power",
		category: "solar",
		unit: "W",
		defaultEntity: "sensor.solar_power",
		defaultEnabled: !0,
		entityType: "sensor",
		autoScale: !0,
		decimals: 2,
		keywords: [
			"solar",
			"generation",
			"power"
		]
	},
	{
		id: "cost",
		title: "Today's Cost",
		icon: "mdi:currency-eur",
		category: "cost",
		unit: "€",
		defaultEntity: "",
		defaultEnabled: !1,
		entityType: "sensor",
		autoScale: !1,
		decimals: 2
	},
	{
		id: "peak_power",
		title: "Peak Power",
		icon: "mdi:flash-circle",
		category: "energy",
		unit: "W",
		defaultEntity: "",
		defaultEnabled: !1,
		entityType: "sensor",
		autoScale: !0,
		decimals: 2
	},
	{
		id: "solar_self_consumption",
		title: "Solar Self Consumption",
		icon: "mdi:solar-power",
		category: "solar",
		unit: "%",
		defaultEntity: "",
		defaultEnabled: !1,
		entityType: "sensor",
		autoScale: !1,
		decimals: 1
	},
	{
		id: "renewable_ratio",
		title: "Renewable",
		icon: "mdi:leaf",
		category: "carbon",
		unit: "%",
		defaultEntity: "",
		defaultEnabled: !1,
		entityType: "sensor",
		autoScale: !1,
		decimals: 1
	},
	{
		id: "grid_import",
		title: "Grid Import",
		icon: "mdi:download",
		category: "grid",
		unit: "Wh",
		defaultEntity: "",
		defaultEnabled: !1,
		entityType: "sensor",
		autoScale: !0,
		decimals: 2
	},
	{
		id: "grid_export",
		title: "Grid Export",
		icon: "mdi:upload",
		category: "grid",
		unit: "Wh",
		defaultEntity: "",
		defaultEnabled: !1,
		entityType: "sensor",
		autoScale: !0,
		decimals: 2
	},
	{
		id: "carbon_saved",
		title: "Carbon Saved",
		icon: "mdi:leaf",
		category: "carbon",
		unit: "kg",
		defaultEntity: "",
		defaultEnabled: !1,
		entityType: "sensor",
		autoScale: !1,
		decimals: 2
	},
	{
		id: "monthly_cost",
		title: "Monthly Cost",
		icon: "mdi:currency-eur",
		category: "cost",
		unit: "€",
		defaultEntity: "",
		defaultEnabled: !1,
		entityType: "sensor",
		autoScale: !1,
		decimals: 2
	},
	{
		id: "efficiency_score",
		title: "Energy Efficiency Score",
		icon: "mdi:star-outline",
		category: "efficiency",
		unit: "",
		defaultEntity: "",
		defaultEnabled: !1,
		entityType: "sensor",
		autoScale: !1,
		decimals: 0
	}
], dn = un;
//#endregion
//#region src/data/entity-discovery.ts
function fn(e) {
	if (!e || typeof e != "string") return;
	let t = e.trim().toLowerCase();
	return [
		"kwh",
		"wh",
		"mwh",
		"j",
		"kj",
		"mj"
	].includes(t) ? "energy" : [
		"w",
		"kw",
		"mw"
	].includes(t) ? "power" : [
		"c",
		"₹",
		"$",
		"€",
		"£"
	].includes(t) ? "currency" : t;
}
function pn(e) {
	return e ? e.toLowerCase().replace(/[\-_\.\s]+/g, " ").split(" ").filter(Boolean) : [];
}
function mn(e, t, n) {
	let r = 0, i = (t?.device_class || "")?.toString().toLowerCase(), a = (t?.state_class || "")?.toString().toLowerCase(), o = fn(t?.unit_of_measurement || t?.unit), s = n.title?.toLowerCase() ?? "", c = (n.match?.keywords || []).map((e) => e.toLowerCase()), l = (n.match?.units || []).map(fn).filter(Boolean);
	i && n.match?.device_class && i === n.match.device_class.toLowerCase() && (r += 30), a && n.match?.state_class && a === n.match.state_class.toLowerCase() && (r += 25), o && l.length && (l.includes(o) ? r += 22 : l.some((e) => e && o === e) && (r += 18));
	let u = pn(e), d = pn(t?.friendly_name || t?.friendlyName || "");
	for (let t of c) e.toLowerCase().includes(t) && (r += 10), u.includes(t) && (r += 8), d.includes(t) && (r += 6), s.includes(t) && (r += 5);
	return (e.toLowerCase().includes("ecomain") || (t?.friendly_name || "").toLowerCase().includes("ecomain")) && (r += 5), e.startsWith("sensor.") || (r -= 50), Math.max(r, 0);
}
function hn(e, t, n = 5) {
	let r = e?.states ?? {}, i = [];
	for (let e of Object.keys(r)) {
		if (!e.startsWith("sensor.")) continue;
		let n = r[e], a = {
			entityId: e,
			score: mn(e, n.attributes, t),
			attributes: n.attributes,
			state: n.state
		};
		i.push(a);
	}
	return i.sort((e, t) => t.score - e.score || e.entityId.localeCompare(t.entityId)).slice(0, n);
}
function gn(e, t, n = 5) {
	let r = {};
	for (let i of t) {
		let t = i.id ?? i.title ?? "unknown";
		r[t] = hn(e, i, n);
	}
	return r;
}
//#endregion
//#region src/data/kpi-card-model.ts
function _n(...e) {
	return e.find((e) => typeof e == "string" && e.trim().length > 0);
}
function H(e) {
	return e.id ?? e.entity ?? e.title;
}
function vn(e) {
	return e.map((e) => ({
		id: e.id,
		title: e.title,
		match: {
			keywords: e.keyword ? [e.keyword] : e.keywords ?? [],
			units: e.unit ? [e.unit] : e.units ?? []
		}
	}));
}
function yn(e) {
	return {
		id: e.id,
		title: e.title,
		entity: _n(e.entity, e.defaultEntity),
		category: e.category,
		unit: e.unit,
		icon: e.icon,
		enabled: e.defaultEnabled ?? !1,
		entityType: e.entityType,
		autoScale: e.autoScale ?? !1,
		decimals: e.decimals ?? 2,
		icon_bg: e.icon_bg,
		icon_glow: e.icon_glow,
		icon_color: e.icon_color
	};
}
function bn(e, t, n = {}) {
	let r = /* @__PURE__ */ new Map();
	for (let t of e) t.id && r.set(t.id, t), t.title && r.set(t.title.trim().toLowerCase(), t), t.entity && r.set(t.entity, t);
	let i = t.map((t) => {
		let i = r.get(t.id);
		!i && t.title && (i = r.get(t.title.trim().toLowerCase())), !i && t.entity && (i = r.get(t.entity)), !i && t.title && (i = e.find((e) => (e.title ?? "").trim().toLowerCase() === t.title.trim().toLowerCase()));
		let a = _n(i?.entity, t.entity, t.defaultEntity, n[t.id]?.[0]?.entityId), o = typeof i?.enabled == "boolean" ? i.enabled : i ? !0 : !!t.defaultEnabled;
		return {
			...yn(t),
			...i ?? {},
			entity: a,
			enabled: o,
			autoScale: i?.autoScale ?? t.autoScale ?? !1,
			decimals: i?.decimals ?? t.decimals ?? 2
		};
	}), a = e.filter((e) => {
		let n = H(e);
		return !t.some((t) => n && (t.id === n || t.entity === e.entity || t.title === e.title));
	});
	return [...i, ...a];
}
function xn(e, t, n) {
	return bn(t, n, gn(e, vn(n)));
}
function Sn(e, t) {
	let n = !1, r = e.map((e) => e.id === t.id ? (n = !0, {
		...e,
		enabled: !e.enabled
	}) : e);
	return n ? r : [...r, {
		...yn(t),
		enabled: !0
	}];
}
function Cn(e, t, n, r) {
	let i = !1, a = !1;
	return {
		cards: e.map((e) => H(e) === t ? r[t] === !0 ? (a = !0, e) : e.entity === n ? e : (i = !0, {
			...e,
			entity: n
		}) : e),
		changed: i,
		locked: a
	};
}
function wn(e, t, n) {
	if (t === n) return e;
	let r = [...e], [i] = r.splice(t, 1);
	return i ? (r.splice(n, 0, i), r) : e;
}
//#endregion
//#region src/data/kpi-card-manager.ts
var Tn = class {
	constructor(e) {
		this.templates = e;
	}
	resolve(e, t) {
		return xn(e, t, this.templates);
	}
	create(e, t) {
		let n = H(t);
		return n && e.some((e) => H(e) === n) ? {
			cards: e,
			changed: !1
		} : {
			cards: [...e, { ...t }],
			changed: !0
		};
	}
	update(e, t, n) {
		let r = !1, i = e.map((e) => H(e) !== t || !Object.entries(n).some(([t, n]) => e[t] !== n) ? e : (r = !0, {
			...e,
			...n
		}));
		return {
			cards: r ? i : e,
			changed: r
		};
	}
	remove(e, t) {
		let n = e.filter((e) => H(e) !== t);
		return {
			cards: n.length === e.length ? e : n,
			changed: n.length !== e.length
		};
	}
	enable(e, t) {
		return this.update(e, t, { enabled: !0 });
	}
	disable(e, t) {
		return this.update(e, t, { enabled: !1 });
	}
	toggleTemplate(e, t) {
		let n = Sn(e, t);
		return {
			cards: n,
			changed: n !== e
		};
	}
	updateEntity(e, t, n, r) {
		return Cn(e, t, n, r);
	}
	reorder(e, t, n) {
		let r = wn(e, t, n).map((e, t) => e.type === "custom" || e.id?.startsWith("custom-") ? {
			...e,
			order: t
		} : e);
		return {
			cards: r,
			changed: r !== e
		};
	}
};
//#endregion
//#region src/config/config-events.ts
function En(e) {
	return new CustomEvent("config-changed", {
		detail: { config: e },
		bubbles: !0,
		composed: !0
	});
}
function Dn(e, t) {
	return e.dispatchEvent(En(t));
}
//#endregion
//#region src/config/config-validation.ts
function On(e) {
	return e.enabled === !0 && (typeof e.entity != "string" || e.entity.trim().length === 0) ? {
		status: "invalid",
		reason: "Entity required"
	} : { status: "valid" };
}
//#endregion
//#region src/config/kpi-config-merger.ts
function kn(e) {
	return e == null ? !1 : typeof e != "string" || e.trim().length > 0;
}
function U(e) {
	return typeof e == "string" && e.trim().length > 0 ? e : void 0;
}
function An(e) {
	return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
function jn(e) {
	let t = e.metadata;
	return !!(t && typeof t == "object" && t.entityLocked === !0);
}
function W(...e) {
	let t = {};
	for (let n of e) for (let [e, r] of Object.entries(n)) kn(r) && (t[e] = An(r));
	return t;
}
function Mn(e) {
	let t = U(e.entity) ?? U(e.defaultEntity);
	return W({
		id: e.id,
		title: e.title,
		entity: t,
		category: e.category,
		unit: e.unit,
		icon: e.icon,
		enabled: e.defaultEnabled ?? !1,
		entityType: e.entityType,
		autoScale: e.autoScale ?? !1,
		decimals: e.decimals ?? 2,
		icon_bg: e.icon_bg,
		icon_glow: e.icon_glow,
		icon_color: e.icon_color
	});
}
function G(e) {
	return U(e.title)?.trim().toLowerCase();
}
function Nn(e, t) {
	let n = U(t.id);
	if (n) return e.find((e) => U(e.config.id) === n);
	let r = U(t.entity);
	if (r) {
		let t = e.find((e) => U(e.config.entity) === r);
		if (t) return t;
	}
	let i = G(t);
	if (i) return e.find((e) => G(e.config) === i);
}
function Pn(e, t, n) {
	let r = U(e.id);
	if (r) return `id:${r}`;
	let i = U(e.entity);
	if (i) return `entity:${i}`;
	let a = G(e);
	return a ? `title:${a}` : `${t}:anonymous:${n}`;
}
function Fn(e, t, n) {
	t.forEach((t, r) => {
		let i = Nn(e, t), a = n === "yaml" && jn(t);
		if (i) {
			let e = n === "yaml" && !a && i.origin === "repository" && U(i.config.entity) ? {
				...t,
				entity: void 0
			} : t;
			i.config = W(i.config, e), i.origin = n, i.entityLocked ||= a;
			return;
		}
		e.push({
			identity: Pn(t, n, r),
			config: W(t),
			origin: n,
			entityLocked: a
		});
	});
}
function In(e, t) {
	if (!t) return;
	let n = [
		e.templateId,
		U(e.config.id),
		G(e.config)
	].filter((e) => !!e);
	for (let e of n) {
		let n = U(t[e]?.[0]?.entityId);
		if (n) return n;
	}
}
function Ln(e) {
	let t = {};
	return U(e.id) || U(e.entity) || G(e) || (t.id = "Card identity required"), e.enabled === !0 && !U(e.entity) && (t.entity = "Entity required"), {
		valid: Object.keys(t).length === 0,
		errors: t
	};
}
function Rn(e) {
	let t = e.templates.map((e) => ({
		identity: `id:${e.id}`,
		config: Mn(e),
		origin: "template",
		templateId: e.id,
		entityLocked: !1
	}));
	return Fn(t, e.repositoryCards ?? [], "repository"), Fn(t, e.yamlCards ?? [], "yaml"), t.map((t) => {
		let n = W(t.config);
		if (!U(n.entity)) {
			let r = In(t, e.discovery);
			r && (n = W(n, { entity: r }));
		}
		return {
			identity: t.identity,
			config: n,
			metadata: {
				origin: t.origin,
				templateId: t.templateId,
				entityLocked: t.entityLocked,
				removable: t.templateId === void 0
			},
			validation: Ln(n)
		};
	});
}
//#endregion
//#region src/config/kpi-config-persistence.ts
var zn = /* @__PURE__ */ new Set([
	"identity",
	"metadata",
	"validation",
	"discovery"
]);
function Bn(e) {
	return e == null ? !1 : typeof e != "string" || e.trim().length > 0;
}
function K(e) {
	return typeof e == "string" && e.trim().length > 0 ? e : void 0;
}
function Vn(e) {
	let t = e?.metadata;
	return !!(t && typeof t == "object" && t.entityLocked === !0);
}
function Hn(e) {
	return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
function q(e, t) {
	return Array.isArray(e) && Array.isArray(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : e === t;
}
function Un(e) {
	return K(e.title)?.trim().toLowerCase();
}
function Wn(e, t) {
	let n = K(e.id), r = K(t.id);
	if (n || r) return !!(n && n === r);
	let i = K(e.entity), a = K(t.entity);
	if (i && a) return i === a;
	let o = Un(e), s = Un(t);
	return !!(o && o === s);
}
function Gn(e) {
	return {
		id: e.id,
		title: e.title,
		entity: K(e.entity) ?? K(e.defaultEntity),
		category: e.category,
		unit: e.unit,
		icon: e.icon,
		enabled: e.defaultEnabled ?? !1,
		entityType: e.entityType,
		autoScale: e.autoScale ?? !1,
		decimals: e.decimals ?? 2,
		icon_bg: e.icon_bg,
		icon_glow: e.icon_glow,
		icon_color: e.icon_color
	};
}
function Kn(e, t, n) {
	if (!n) return;
	let r = [
		t?.id,
		K(e.id),
		Un(e)
	].filter((e) => !!e);
	for (let e of r) {
		let t = K(n[e]?.[0]?.entityId);
		if (t) return t;
	}
}
function qn(e, t, n, r) {
	let i = Gn(t), a = { id: t.id };
	for (let [o, s] of Object.entries(e)) if (!(o === "id" || zn.has(o) || !Bn(s)) && !(n && Bn(n[o]) && (o !== "entity" || Vn(n) || q(s, n[o])))) {
		if (o === "entity") {
			let n = Kn(e, t, r);
			if (q(s, i.entity) || q(s, n)) continue;
		} else if (q(s, i[o])) continue;
		a[o] = Hn(s);
	}
	return Object.keys(a).length > 1 ? a : void 0;
}
function Jn(e, t) {
	let n = {}, r = K(e.id) ? "id" : K(e.entity) ? "entity" : Un(e) ? "title" : void 0;
	r && (n[r] = e[r]);
	for (let [i, a] of Object.entries(e)) i !== r && (zn.has(i) || !Bn(a) || t && Bn(t[i]) && (i !== "entity" || Vn(t) || q(a, t[i])) || (n[i] = Hn(a)));
	let i = +!!r;
	return Object.keys(n).length > i || !t ? n : void 0;
}
function Yn(e) {
	let t = [];
	for (let n of e.cards) {
		let r = K(n.id) ? e.templates.find((e) => e.id === n.id) : void 0, i = e.yamlCards?.find((e) => Wn(e, n)), a = r ? qn(n, r, i, e.discovery) : Jn(n, i);
		a && t.push(a);
	}
	return t;
}
//#endregion
//#region src/config/kpi-config-coordinator.ts
var Xn = class extends Error {
	constructor(e, t, n) {
		super(t, { cause: n }), this.name = "KpiConfigCoordinatorError", this.stage = e;
	}
};
function Zn(e) {
	return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
function Qn(e) {
	let t = {}, n = /* @__PURE__ */ new Set([
		"identity",
		"metadata",
		"validation",
		"discovery"
	]);
	for (let [r, i] of Object.entries(e)) n.has(r) || (t[r] = Zn(i));
	return t;
}
var $n = class {
	constructor(e, t) {
		this.saveQueue = Promise.resolve(), this.repository = e, this.templates = t;
	}
	async resolve(e = {}) {
		await this.saveQueue;
		let t;
		try {
			t = await this.repository.load();
		} catch (e) {
			throw new Xn("load", "Unable to load KPI configuration", e);
		}
		return Rn({
			templates: this.templates,
			repositoryCards: t,
			yamlCards: e.yamlCards,
			discovery: e.discovery
		});
	}
	saveUserCards(e) {
		let t = e.map(Qn), n = this.saveQueue.then(async () => {
			try {
				await this.repository.save(t);
			} catch (e) {
				throw new Xn("save", "Unable to save KPI configuration", e);
			}
		});
		return this.saveQueue = n.catch(() => void 0), n;
	}
}, er = "interactive-card:kpi-config:v1";
function tr(e) {
	return e.map((e) => ({
		...e,
		history: Array.isArray(e.history) ? [...e.history] : void 0
	}));
}
function nr(e) {
	if (!e || typeof e != "object") return !1;
	let t = e;
	return !!(typeof t.id == "string" && t.id.trim() || typeof t.entity == "string" && t.entity.trim() || typeof t.title == "string" && t.title.trim());
}
var rr = class {
	constructor(e = er) {
		this.storageKey = e;
	}
	async load() {
		let e = globalThis.localStorage?.getItem(this.storageKey);
		if (!e) return [];
		try {
			let t = JSON.parse(e);
			return t.version !== 1 || !Array.isArray(t.cards) ? [] : tr(t.cards.filter(nr));
		} catch {
			return [];
		}
	}
	async save(e) {
		let t = {
			version: 1,
			cards: tr(e)
		};
		globalThis.localStorage?.setItem(this.storageKey, JSON.stringify(t));
	}
}, ir = h`
  .energy-card-grid {
    display: grid;
    width: 100%;
    min-width: 0;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: var(--energy-grid-gap, 16px);
    overflow: visible;
  }

  .energy-card-grid > * {
    width: 100%;
    min-width: 0;
  }

  @container (max-width: 1200px) {
    .energy-card-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @container (max-width: 599px) {
    .energy-card-grid {
      grid-template-columns: minmax(0, 1fr);
      gap: var(--energy-grid-mobile-gap, 10px);
    }
  }
`, J = un, Y = new Tn(J);
function ar(e) {
	return e.type === "custom" || e.id?.startsWith("custom-") === !0;
}
var or = class extends j {
	constructor(...e) {
		super(...e), this._repository = new rr(), this._coordinator = new $n(this._repository, J), this._yamlCards = [], this._discovery = {}, this._resolutionVersion = 0, this._hasRepositoryResolution = !1, this.config = {
			title: "Energy Overview",
			cards: []
		}, this.headerMenuOpen = !1, this._builderOpen = !1, this._builderMode = "create", this._builderDraft = {}, this._dragIndex = null, this._entityLocks = {};
	}
	setConfig(e) {
		this.config = wt(e), this._yamlCards = this.config.cards.map((e) => ({
			...e,
			history: Array.isArray(e.history) ? [...e.history] : void 0
		})), this._hass && this._startConfigResolution(!0);
	}
	_captureEntityLocks(e) {
		let t = {};
		for (let n of e) {
			let e = H(n.config);
			e && n.metadata.entityLocked && (t[e] = !0);
		}
		this._entityLocks = t;
	}
	set hass(e) {
		this._hass = e, this._startConfigResolution(!this._hasRepositoryResolution), this.requestUpdate();
	}
	_createDiscoveryResults() {
		return this._hass ? gn(this._hass, vn(J)) : {};
	}
	_startConfigResolution(e) {
		let t = this._createDiscoveryResults();
		if (this._discovery = t, e) {
			let e = Rn({
				templates: J,
				yamlCards: this._yamlCards,
				discovery: t
			});
			this._captureEntityLocks(e), this.config = {
				...this.config,
				cards: e.map((e) => e.config)
			}, this.requestUpdate();
		}
		let n = ++this._resolutionVersion;
		this._coordinator.resolve({
			yamlCards: this._yamlCards,
			discovery: t
		}).then((e) => {
			n === this._resolutionVersion && (this._hasRepositoryResolution = !0, this._captureEntityLocks(e), this.config = {
				...this.config,
				cards: e.map((e) => e.config)
			}, this.requestUpdate());
		}).catch((e) => {
			console.error("[KPI] Unable to resolve KPI configuration", e);
		});
	}
	static {
		this.styles = [ir, h`



    :host{


      display:block;
      width:100%;
      min-width:0;
      position:relative;
      container-type:inline-size;


    }






    .grid{
      --kpi-card-height:170px;
      --kpi-padding:20px;
      --kpi-value-size:42px;
      --kpi-unit-size:16px;
      --kpi-icon-size:64px;
      --kpi-icon-symbol-size:30px;
      --kpi-sparkline-display:none;
      --kpi-chart-action-display:none;
    }




    .draggable{

      cursor:grab;
      min-width:0;

    }


    .draggable:active{

      cursor:grabbing;

    }


    .draggable.dragging{

      opacity:.6;

      transform:scale(.98);

    }

    @container (max-width:1200px){
      .grid{
        --kpi-card-height:160px;
        --kpi-padding:18px;
        --kpi-value-size:40px;
        --kpi-icon-size:58px;
        --kpi-icon-symbol-size:28px;
      }
    }

    @container (max-width:599px){
      .grid{
        --kpi-card-height:150px;
        --kpi-padding:14px;
        --kpi-value-size:clamp(16px,7vw,24px);
        --kpi-unit-size:13px;
        --kpi-icon-size:46px;
        --kpi-icon-symbol-size:23px;
      }
    }

  `];
	}
	toggleHeaderMenu() {
		this.headerMenuOpen = !this.headerMenuOpen, this.requestUpdate();
	}
	_commitConfigChange(e = this.config.cards) {
		this._resolutionVersion++;
		let t = Yn({
			cards: e,
			templates: J,
			yamlCards: this._yamlCards,
			discovery: this._discovery
		}), n = Rn({
			templates: J,
			repositoryCards: t,
			yamlCards: this._yamlCards,
			discovery: this._discovery
		});
		this._captureEntityLocks(n);
		let r = n.map((e) => e.config), i = [];
		for (let t of e) {
			let e = H(t), n = r.findIndex((t) => H(t) === e);
			n >= 0 && i.push(...r.splice(n, 1));
		}
		i.push(...r), this._hasRepositoryResolution = !0, this.config = {
			...this.config,
			cards: i
		}, this.requestUpdate(), this._coordinator.saveUserCards(t).catch((e) => {
			console.error("[KPI] Unable to save KPI configuration", e);
		}), Dn(this, this.config);
	}
	_toggleKpi(e) {
		let t = e.detail;
		if (!t || !t.id) return;
		let n = Y.toggleTemplate(this.config.cards, t).cards;
		this._commitConfigChange(n);
	}
	_openCreateBuilder() {
		this._builderMode = "create", this._builderDraft = {}, this._editingCardKey = void 0, this._builderOpen = !0, this.headerMenuOpen = !1, this.requestUpdate();
	}
	_openEditBuilder(e) {
		let t = e.detail;
		t && (this._builderMode = "edit", this._builderDraft = { ...t }, this._editingCardKey = H(t), this._builderOpen = !0, this.headerMenuOpen = !1, this.requestUpdate());
	}
	_closeBuilder() {
		this._builderOpen = !1, this._editingCardKey = void 0, this.requestUpdate();
	}
	_submitBuilder(e) {
		e.stopPropagation();
		let { config: t, mode: n } = e.detail;
		if (n === "edit" && this._editingCardKey) {
			let e = Y.update(this.config.cards, this._editingCardKey, t);
			e.changed && this._commitConfigChange(e.cards);
		} else {
			let e = this.config.cards.filter(ar).length, n = Y.create(this.config.cards, {
				...t,
				type: "custom",
				name: t.title,
				order: t.order ?? e
			});
			n.changed && this._commitConfigChange(n.cards);
		}
		this._closeBuilder();
	}
	_toggleCustomKpi(e) {
		let t = e.detail, n = t ? H(t) : void 0;
		if (!t || !n) return;
		let r = t.enabled ? Y.disable(this.config.cards, n) : Y.enable(this.config.cards, n);
		r.changed && this._commitConfigChange(r.cards);
	}
	_removeKpi(e) {
		let t = e.detail;
		if (!t || !t.id) return;
		let n = Y.disable(this.config.cards, t.id);
		n.changed && this._commitConfigChange(n.cards);
	}
	_deleteCustomKpi(e) {
		e.stopPropagation();
		let t = e.detail?.id;
		if (!t) return;
		let n = this.config.cards.find((e) => H(e) === t);
		if (!n || !ar(n)) return;
		let r = Y.remove(this.config.cards, t);
		r.changed && this._commitConfigChange(r.cards), this._closeBuilder();
	}
	_handleSetCardEntity(e) {
		let t = e.detail || {}, n = t.key, r = t.entity;
		if (!n || !r) {
			t.result = {
				success: !1,
				reason: "Unable to identify the KPI card or entity"
			};
			return;
		}
		if (!this.config.cards.some((e) => H(e) === n)) {
			t.result = {
				success: !1,
				reason: "KPI card configuration not found"
			};
			return;
		}
		let i = Y.updateEntity(this.config.cards, n, r, this._entityLocks);
		if (i.locked) {
			t.result = {
				success: !1,
				reason: "Entity managed by YAML configuration"
			};
			return;
		}
		i.changed && this._commitConfigChange(i.cards), t.result = { success: !0 };
	}
	_handleUpdateCardEntity(e) {
		let t = e.detail || {}, n = t.id, r = t.entity;
		if (!n || !r) return;
		let i = Y.updateEntity(this.config.cards, n, r, this._entityLocks);
		i.locked && console.warn(`[KPI] YAML entity present for ${n}; refusing to overwrite with ${r}`), i.changed && this._commitConfigChange(i.cards);
	}
	_handleUpdateCardSettings(e) {
		let t = e.detail || {}, n = t.key;
		if (!n) return;
		let r = Y.update(this.config.cards, n, {
			subtitle: t.subtitle ?? "",
			trend: void 0,
			trendMode: t.trendMode ?? "none"
		});
		r.changed && this._commitConfigChange(r.cards);
	}
	_handleDeleteCard(e) {
		e.stopPropagation();
		let t = e.detail?.id;
		if (!t) return;
		let n = this.config.cards.find((e) => H(e) === t);
		if (!n) return;
		let r = ar(n) ? Y.remove(this.config.cards, t) : Y.disable(this.config.cards, t);
		r.changed && this._commitConfigChange(r.cards);
	}
	_onDragStart(e, t) {
		let n = e.dataTransfer;
		n && (n.setData("text/plain", String(t)), n.effectAllowed = "move"), this._dragIndex = t;
	}
	_onDragOver(e) {
		e.preventDefault();
		let t = e.dataTransfer;
		t && (t.dropEffect = "move");
	}
	_onDrop(e, t) {
		e.preventDefault();
		let n = e.dataTransfer?.getData("text/plain"), r = this._dragIndex;
		n && (r = parseInt(n, 10));
		let i = t;
		if (r == null || isNaN(r) || r === i) return;
		let a = Y.reorder(this.config.cards, r, i);
		a.changed && this._commitConfigChange(a.cards), this._dragIndex = null;
	}
	_onDragEnd(e) {
		this._dragIndex = null, this.requestUpdate();
	}
	render() {
		return this.config ? T`




      <ic-section-header .title=${this.config.title} level="section">
        <ic-popover
          slot="actions"
          style="--popover-min-width:280px"
          .open=${this.headerMenuOpen}
          placement="bottom-end"
          .offset=${8}
          .closeOnOutsideClick=${!0}
          @popover-close=${() => {
			this.headerMenuOpen = !1, this.requestUpdate();
		}}
        >
          <ic-action-button
            slot="anchor"
            icon="+"
            label="KPI actions"
            @action-click=${this.toggleHeaderMenu}
          ></ic-action-button>
          <kpi-picker
            .items=${dn}
            .customItems=${this.config.cards.filter(ar)}
            .selectedItems=${this.config.cards.filter((e) => !!e.enabled).map((e) => e.id ?? e.entity)}
            .hass=${this._hass}
            @toggle-kpi=${this._toggleKpi}
            @create-custom-kpi=${this._openCreateBuilder}
            @edit-custom-kpi=${this._openEditBuilder}
            @toggle-custom-kpi=${this._toggleCustomKpi}
            @remove-kpi=${this._removeKpi}
            @update-card-entity=${this._handleUpdateCardEntity}
          ></kpi-picker>
        </ic-popover>
      </ic-section-header>








      <ic-kpi-card-builder-dialog
        .open=${this._builderOpen}
        .mode=${this._builderMode}
        .hass=${this._hass}
        .draft=${this._builderDraft}
        .existingIds=${this.config.cards.map((e) => e.id).filter((e) => !!e)}
        @kpi-builder-close=${this._closeBuilder}
        @kpi-builder-submit=${this._submitBuilder}
        @kpi-builder-delete=${this._deleteCustomKpi}
      ></ic-kpi-card-builder-dialog>











      <div class="grid energy-card-grid">

        ${this.config.cards.filter((e) => !!e.enabled).map((e, t) => {
			let n = On(e);
			return T`
              <div class="draggable" draggable="true"
                @dragstart=${(e) => this._onDragStart(e, t)}
                @dragover=${(e) => this._onDragOver(e)}
                @drop=${(e) => this._onDrop(e, t)}
                @dragend=${(e) => this._onDragEnd(e)}
              >
                <energy-kpi-card
                  .config=${e}
                  .hass=${this._hass}
                  .validation=${n}
                  @edit-custom-kpi=${this._openEditBuilder}
                  @set-card-entity=${(e) => {
				e.stopPropagation(), this._handleSetCardEntity(e);
			}}
                  @update-kpi-card-settings=${(e) => {
				e.stopPropagation(), this._handleUpdateCardSettings(e);
			}}
                  @delete-kpi-card=${this._handleDeleteCard}
                ></energy-kpi-card>
              </div>

            `;
		})}

      </div>





    ` : T``;
	}
	getGridOptions() {
		return { columns: "full" };
	}
};
customElements.define("energy-kpi-section", or);
//#endregion
//#region src/config/trend-config-normalizer.ts
var sr = [
	"1H",
	"24H",
	"7D",
	"30D"
], cr = [
	"power",
	"energy",
	"cost",
	"circuit"
], lr = [
	"smooth",
	"raw",
	"step"
], ur = ["smooth", "high_precision"], dr = [
	"line",
	"area",
	"bar"
];
function fr(e, t, n) {
	let r = e.entity?.trim();
	if (r) return {
		entity: r,
		order: typeof e.order == "number" && Number.isFinite(e.order) ? Math.max(0, Math.trunc(e.order)) : t,
		chartMode: dr.includes(e.chartMode) ? e.chartMode : n,
		name: e.name?.trim() || void 0,
		color: e.color?.trim() || void 0,
		category: cr.includes(e.category) ? e.category : void 0,
		unit: e.unit?.trim() || void 0,
		enabled: e.enabled !== !1,
		decimals: typeof e.decimals == "number" && Number.isFinite(e.decimals) ? Math.max(0, Math.min(4, Math.trunc(e.decimals))) : 2,
		autoScale: e.autoScale !== !1,
		lineStyle: e.lineStyle === "dashed" ? "dashed" : "solid",
		renderMode: ur.includes(e.renderMode) ? e.renderMode : void 0,
		axis: e.axis === "left" || e.axis === "right" ? e.axis : "auto"
	};
}
function X(e) {
	let t = dr.includes(e.chartMode) ? e.chartMode : "line", n = sr.includes(e.timeframe) ? e.timeframe : "24H", r = cr.includes(e.category) ? e.category : "energy", i = typeof e.height == "number" && Number.isFinite(e.height) ? Math.max(240, e.height) : 350;
	return {
		id: e.id?.trim() || void 0,
		type: e.type,
		title: e.title?.trim() || "Energy Trend",
		height: i,
		curve: lr.includes(e.curve) ? e.curve : "smooth",
		renderMode: ur.includes(e.renderMode) ? e.renderMode : "smooth",
		fullWidth: e.fullWidth !== !1,
		timeframe: n,
		category: r,
		entities: Array.isArray(e.entities) ? e.entities.map((e, n) => fr(e, n, t)).filter((e) => !!e).sort((e, t) => (e.order ?? 0) - (t.order ?? 0)).map((e, t) => ({
			...e,
			order: t
		})) : []
	};
}
//#endregion
//#region src/config/trend-config-coordinator.ts
var pr = class {
	constructor(e) {
		this.saveQueue = Promise.resolve(), this.repository = e;
	}
	async resolve(e, t) {
		await this.saveQueue;
		let n = await this.repository.load(e);
		return X(n ? {
			...t,
			...n,
			id: t.id ?? n.id,
			type: t.type ?? n.type,
			entities: n.entities
		} : t);
	}
	save(e, t) {
		let n = X(t), r = this.saveQueue.then(() => this.repository.save(e, n));
		return this.saveQueue = r.catch(() => void 0), r;
	}
}, mr = {
	"1H": 3600 * 1e3,
	"24H": 1440 * 60 * 1e3,
	"7D": 10080 * 60 * 1e3,
	"30D": 720 * 60 * 60 * 1e3
};
function hr(e, t = /* @__PURE__ */ new Date()) {
	return {
		start: new Date(t.getTime() - mr[e]),
		end: t
	};
}
function gr(e, t, n) {
	return `history/period/${encodeURIComponent(t.toISOString())}?end_time=${encodeURIComponent(n.toISOString())}&filter_entity_id=${encodeURIComponent(e.join(","))}&minimal_response&no_attributes`;
}
async function _r(e, t, n, r = /* @__PURE__ */ new Date()) {
	let i = [...new Set(t.map((e) => e.trim()).filter(Boolean))], a = hr(n, r);
	if (!i.length) return {
		...a,
		entities: {}
	};
	let o = await e.callApi("GET", gr(i, a.start, a.end));
	if (!Array.isArray(o)) throw Error("Home Assistant returned an invalid history response");
	let s = {};
	return i.forEach((e, t) => {
		let n = Array.isArray(o[t]) ? o[t] : [], r = n.find((e) => e.entity_id)?.entity_id;
		s[r ?? e] = n;
	}), {
		...a,
		entities: s
	};
}
//#endregion
//#region src/helpers/trend-transformer.ts
function vr(e, t) {
	return t === "other" ? `unit:${e || "unitless"}` : `${t}:${e}`;
}
function yr(e, t) {
	let n = [], r = t, i = "other";
	for (let a of e) {
		let e = Number(a.state), o = Date.parse(a.last_changed ?? a.last_updated ?? "");
		if (!Number.isFinite(e) || !Number.isFinite(o)) continue;
		let s = mt(e, t);
		r = s.unit, i = s.family, n.push({
			timestamp: o,
			value: s.value
		});
	}
	return n.sort((e, t) => e.timestamp - t.timestamp), {
		points: n.filter((e, t) => t === 0 || e.timestamp !== n[t - 1].timestamp),
		unit: r,
		family: i
	};
}
function br(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = t.get(n.axisId) ?? [];
		e.push(n), t.set(n.axisId, e);
	}
	let n = [...t.entries()].map(([e, t]) => {
		let n = t.flatMap((e) => e.points.map((e) => e.value)), r = n.length ? Math.min(...n) : 0, i = n.length ? Math.max(...n) : 0;
		return {
			id: e,
			axisGroup: t.find((e) => e.axisGroup)?.axisGroup,
			category: t[0].category,
			unit: t[0].unit,
			precision: Math.max(...t.map((e) => e.precision)),
			min: r,
			max: i
		};
	}), r = /* @__PURE__ */ new Set();
	return n.map((e, t) => {
		let n = e.axisGroup;
		return (!n || r.has(n)) && (n = r.has("left") ? r.has("right") ? void 0 : "right" : "left"), n && r.add(n), {
			...e,
			axisGroup: t < 2 ? n : void 0
		};
	}).sort((e, t) => e.axisGroup === t.axisGroup ? 0 : e.axisGroup === "left" ? -1 : 1);
}
function xr(e, t, n, r = {}) {
	let i = t.map((t) => {
		let i = r[t.entity] ?? {}, a = String(e[t.entity]?.find((e) => e.attributes?.unit_of_measurement)?.attributes?.unit_of_measurement ?? ""), o = i.unit || a || t.unit || "", s = yr(e[t.entity] ?? [], o), c = vr(s.unit, s.family);
		return {
			id: t.entity,
			entity: t.entity,
			name: t.name ?? i.name ?? t.entity,
			color: t.color,
			chartMode: t.chartMode ?? "line",
			category: t.category ?? n,
			unit: s.unit,
			axisId: c,
			baseAxisId: c,
			requestedAxis: t.axis,
			axisGroup: t.axis === "left" || t.axis === "right" ? t.axis : void 0,
			precision: t.decimals ?? 2,
			points: s.points,
			visible: t.enabled !== !1,
			lineStyle: t.lineStyle ?? "solid",
			renderMode: t.renderMode
		};
	}), a = /* @__PURE__ */ new Map();
	for (let e of i) {
		if (e.requestedAxis !== "left" && e.requestedAxis !== "right") continue;
		let t = a.get(e.baseAxisId) ?? /* @__PURE__ */ new Set();
		t.add(e.requestedAxis), a.set(e.baseAxisId, t);
	}
	let o = i.map((e) => {
		let t = a.get(e.baseAxisId), n = (e.requestedAxis === "left" || e.requestedAxis === "right" ? e.requestedAxis : void 0) ?? (t?.size === 1 ? [...t][0] : void 0) ?? (t?.size === 2 ? "left" : void 0), { baseAxisId: r, requestedAxis: i, ...o } = e;
		return {
			...o,
			axisId: n ? `${r}:${n}` : r,
			axisGroup: n
		};
	});
	return {
		series: o,
		axes: br(o.filter((e) => e.points.length > 0))
	};
}
//#endregion
//#region src/components/common/glass-container.ts
var Sr = class extends j {
	static {
		this.styles = Ot;
	}
	render() {
		return T`
      <div class="card">
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `;
	}
};
customElements.define("ic-glass-container", Sr);
//#endregion
//#region src/helpers/trend-chart-formatters.ts
var Cr = [
	"var(--en-color-series-1)",
	"var(--en-color-series-2)",
	"var(--en-color-series-3)",
	"var(--en-color-series-4)",
	"var(--en-color-series-5)",
	"var(--en-color-series-6)"
];
function Z(e, t) {
	return Cr[t % Cr.length];
}
function wr(e, t, n = {}) {
	let r = _t(e / t.displayScale, t.displayUnit, {
		autoScale: !1,
		decimals: n.decimals ?? t.precision,
		useGrouping: !0
	});
	return n.includeUnit === !1 || !r.unit ? r.value : `${r.value} ${r.unit}`;
}
function Tr(e, t) {
	return wr(e, t, {
		includeUnit: !1,
		decimals: t.precision
	});
}
function Er(e, t, n = t.precision) {
	return wr(e, t, { decimals: n });
}
function Dr(e, t) {
	let n = t === "1H" || t === "24H" ? {
		hour: "2-digit",
		minute: "2-digit"
	} : {
		month: "short",
		day: "numeric"
	};
	return new Intl.DateTimeFormat(void 0, n).format(e);
}
//#endregion
//#region src/helpers/trend-chart-geometry.ts
function Or(e) {
	let t = e.flatMap((e) => e.points.map((e) => e.timestamp)), n = t.length ? Math.min(...t) : 0, r = t.length ? Math.max(...t) : n + 1;
	return {
		min: n,
		max: r === n ? n + 1 : r
	};
}
function kr(e, t, n) {
	return n.left + (e - t.min) / (t.max - t.min) * n.width;
}
function Ar(e, t, n) {
	let r = t.max - t.min || 1;
	return n.top + n.height - (e - t.min) / r * n.height;
}
function jr(e, t) {
	if (!e.length) return;
	let n = 0, r = e.length - 1;
	for (; n < r;) {
		let i = Math.floor((n + r) / 2);
		e[i].timestamp < t ? n = i + 1 : r = i;
	}
	if (n === 0) return e[0];
	let i = e[n - 1], a = e[n];
	return t - i.timestamp <= a.timestamp - t ? i : a;
}
//#endregion
//#region src/helpers/trend-chart-layout.ts
function Mr(e, t, n = {}) {
	let r = Math.max(0, e), i = Math.max(0, t), a = Math.min(2, Math.max(1, n.axisCount ?? 1)), o = n.hasLeftAxis ?? !0, s = n.hasRightAxis ?? a > 1, c = 8 + (o ? n.leftAxisWidth ?? 42 : 0), l = 8 + (s ? n.rightAxisWidth ?? 42 : 0), u = n.top ?? 12, d = n.bottom ?? 30, f = Math.max(c, r - l), p = Math.max(u, i - d);
	return {
		width: r,
		height: i,
		plot: {
			left: c,
			top: u,
			right: f,
			bottom: p,
			width: Math.max(0, f - c),
			height: Math.max(0, p - u)
		}
	};
}
//#endregion
//#region src/helpers/trend-sampling-resolver.ts
var Nr = {
	"1H": 1,
	"24H": 15,
	"7D": 120,
	"30D": 480
}, Pr = {
	"1H": 60,
	"24H": 96,
	"7D": 84,
	"30D": 90
}, Fr = {
	"1H": .25,
	"24H": 1,
	"7D": 15,
	"30D": 60
}, Ir = {
	"1H": 480,
	"24H": 2880,
	"7D": 1344,
	"30D": 1440
};
function Lr(e, t, n = "smooth") {
	return n === "high_precision" ? {
		intervalMinutes: Fr[e],
		maxPoints: Ir[e],
		aggregation: "minmax"
	} : {
		intervalMinutes: Nr[e],
		maxPoints: Pr[e],
		aggregation: t === "energy" || t === "cost" ? "last" : "average"
	};
}
function Rr(e, t) {
	let n = new Date(e);
	n.setHours(0, 0, 0, 0);
	let r = t * 6e4;
	return n.getTime() + Math.floor((e - n.getTime()) / r) * r;
}
function zr(e, t, n, r = "smooth") {
	if (!e.length) return [];
	let i = Lr(t, n, r), a = /* @__PURE__ */ new Map();
	for (let t of e) {
		let e = Rr(t.timestamp, i.intervalMinutes), n = a.get(e) ?? [];
		n.push(t), a.set(e, n);
	}
	return [...a.entries()].flatMap(([e, t]) => {
		if (i.aggregation === "minmax") {
			let e = t.reduce((e, t) => t.value < e.value ? t : e), n = t.reduce((e, t) => t.value > e.value ? t : e);
			return e === n ? [e] : e.timestamp <= n.timestamp ? [e, n] : [n, e];
		}
		return [{
			timestamp: e,
			value: i.aggregation === "last" ? t[t.length - 1].value : t.reduce((e, t) => e + t.value, 0) / t.length
		}];
	}).slice(-i.maxPoints);
}
var Br = class {
	constructor() {
		this.cache = /* @__PURE__ */ new WeakMap();
	}
	sample(e, t, n, r = "smooth") {
		let i = `${t}:${n}:${r}`, a = this.cache.get(e), o = a?.get(i);
		if (o) return o;
		let s = zr(e, t, n, r), c = a ?? /* @__PURE__ */ new Map();
		return c.set(i, s), this.cache.set(e, c), s;
	}
};
//#endregion
//#region src/helpers/trend-axis-unit-resolver.ts
function Vr(e, t) {
	let n = Math.max(0, e) / 6;
	return t.find((e) => e >= n) ?? t[t.length - 1];
}
function Hr(e, t, n) {
	let r = Math.max(Math.abs(t), Math.abs(n)), i = Math.abs(n - t);
	if (e === "W" && r <= 1e4) return {
		displayUnit: "W",
		scale: 1,
		tickStep: Vr(i, r <= 1e3 ? [
			50,
			100,
			200
		] : [
			200,
			500,
			1e3,
			2e3
		])
	};
	let a = e === "W" ? 1e3 : 1, o = i / a;
	return {
		displayUnit: e === "W" ? "kW" : e,
		scale: a,
		tickStep: Vr(o, [
			.5,
			1,
			2,
			5,
			10,
			20,
			50
		])
	};
}
function Ur(e, t, n) {
	let r = (e === "Wh" || e === "W") && Math.max(Math.abs(t), Math.abs(n)) >= 1e3, i = r ? 1e3 : 1;
	return {
		displayUnit: r && e === "Wh" ? "kWh" : r ? "kW" : e,
		scale: i,
		tickStep: Vr(Math.abs(n - t) / i, [
			.1,
			.2,
			.5,
			1,
			2,
			5,
			10,
			20,
			50,
			100,
			200,
			500
		])
	};
}
function Wr(e, t, n, r) {
	return e === "power" || t === "W" || t === "kW" ? Hr(t, n, r) : Ur(t, n, r);
}
//#endregion
//#region src/helpers/trend-axis-resolver.ts
var Gr = 6;
function Kr(e) {
	if (!Number.isFinite(e) || e <= 0) return 1;
	let t = 10 ** Math.floor(Math.log10(e)), n = e / t;
	return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * t;
}
function qr(e) {
	let t = Wr(e.category, e.unit, e.min, e.max), n = e.min / t.scale, r = e.max / t.scale;
	n >= 0 && (n = 0), r <= 0 && (r = 0), n === r && (r += t.tickStep);
	let i = Math.abs(r - n), a = Math.max(t.tickStep, Kr(i / Gr)), o = Math.floor(n / a) * a, s = Math.ceil(r / a) * a, c = Math.round((s - o) / a), l = Array.from({ length: c + 1 }, (e, t) => o + t * a);
	return {
		...e,
		min: o * t.scale,
		max: s * t.scale,
		displayUnit: t.displayUnit,
		displayScale: t.scale,
		tickStep: a,
		ticks: l.map((e) => ({
			value: e * t.scale,
			displayValue: e
		}))
	};
}
function Jr(e) {
	return e.map(qr);
}
//#endregion
//#region src/helpers/trend-chart-model.ts
var Yr = class {
	constructor() {
		this.hiddenKey = "", this.samplingCache = new Br(), this.prepared = {
			series: [],
			axes: [],
			excludedAxisCount: 0
		};
	}
	resolve(e, t, n, r, i) {
		let a = [...n].sort().join("\0");
		if (e === this.sourceSeries && t === this.sourceAxes && a === this.hiddenKey && r === this.timeframe && i === this.renderMode) return this.prepared;
		let o = e.filter((e) => e.visible && !n.has(e.id)).map((e) => ({
			...e,
			points: this.samplingCache.sample(e.points, r, e.category, e.renderMode ?? i)
		})), s = br(o), c = s.slice(0, 2), l = new Set(c.map((e) => e.id)), u = o.filter((e) => l.has(e.axisId)).map((e) => ({
			...e,
			axisGroup: c.find((t) => t.id === e.axisId)?.axisGroup
		}));
		return this.sourceSeries = e, this.sourceAxes = t, this.hiddenKey = a, this.timeframe = r, this.renderMode = i, this.prepared = {
			series: u,
			axes: Jr(c.length ? c : t.slice(0, 2)),
			excludedAxisCount: Math.max(0, s.length - 2)
		}, this.prepared;
	}
};
//#endregion
//#region src/helpers/trend-time-ticks.ts
function Xr(e, t) {
	let n = new Date(e), r = n.getHours() * 60 + n.getMinutes(), i = Math.ceil(r / t) * t;
	return n.setHours(0, i, 0, 0), n.getTime();
}
function Zr(e) {
	let t = new Date(e);
	return t.setHours(0, 0, 0, 0), t.getTime() < e && t.setDate(t.getDate() + 1), t.getTime();
}
function Qr(e, t, n) {
	let r, i;
	if (t === "1H") r = Xr(e.min, 15), i = (e) => e + 900 * 1e3;
	else if (t === "24H") r = Xr(e.min, 360), i = (e) => e + 360 * 60 * 1e3;
	else {
		let a = t === "7D" ? 1 : n < 520 ? 7 : n < 800 ? 5 : 3;
		r = Zr(e.min), i = (e) => {
			let t = new Date(e);
			return t.setDate(t.getDate() + a), t.getTime();
		};
	}
	let a = [];
	for (; r <= e.max;) a.push(r), r = i(r);
	return a;
}
//#endregion
//#region src/components/trend/trend-axis-labels.ts
var $r = class extends j {
	constructor(...e) {
		super(...e), this.labels = [];
	}
	static {
		this.properties = { labels: { attribute: !1 } };
	}
	static {
		this.styles = h`
    :host {
      position: absolute;
      z-index: 2;
      inset: 0;
      display: block;
      overflow: visible;
      pointer-events: none;
    }

    .label {
      position: absolute;
      color: var(--secondary-text-color, #6e6e73);
      font-size: 12px;
      line-height: 1;
      white-space: nowrap;
      transform: translateY(-50%);
    }

    .right {
      text-align: right;
      transform: translate(-100%, -50%);
    }

    .left {
      text-align: left;
      transform: translateY(-50%);
    }
  `;
	}
	render() {
		return T`
      ${this.labels.map((e) => T`
          <span
            class=${`label ${e.align}`}
            style=${`left:${e.x}px;top:${e.y}px`}
          >
            ${e.text}
          </span>
        `)}
    `;
	}
};
customElements.define("ic-trend-axis-labels", $r);
//#endregion
//#region src/components/trend/trend-hover-markers.ts
var ei = class extends j {
	constructor(...e) {
		super(...e), this.markers = [];
	}
	static {
		this.properties = { markers: { attribute: !1 } };
	}
	static {
		this.styles = h`
    :host {
      position: absolute;
      z-index: 2;
      inset: 0;
      pointer-events: none;
    }

    span {
      position: absolute;
      width: 7px;
      height: 7px;
      border: 2px solid var(--card-background-color, #fff);
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
  `;
	}
	render() {
		return T`
      ${this.markers.map((e) => T`
          <span
            style=${`left:${e.x}px;top:${e.y}px;background:${e.color}`}
          ></span>
        `)}
    `;
	}
};
customElements.define("ic-trend-hover-markers", ei);
//#endregion
//#region src/helpers/trend-curve.ts
function ti(e) {
	if (e.length < 2) return e.map(() => 0);
	let t = e.slice(0, -1).map((t, n) => Math.max(e[n + 1].x - t.x, 1e-4)), n = t.map((t, n) => (e[n + 1].y - e[n].y) / t), r = Array(e.length).fill(0);
	r[0] = n[0], r[r.length - 1] = n[n.length - 1];
	for (let i = 1; i < e.length - 1; i += 1) {
		let e = n[i - 1], a = n[i];
		if (e === 0 || a === 0 || e * a <= 0) {
			r[i] = 0;
			continue;
		}
		let o = t[i - 1], s = t[i], c = 2 * s + o, l = s + 2 * o;
		r[i] = (c + l) / (c / e + l / a);
	}
	return r;
}
function ni(e) {
	if (e.length < 2) return [];
	let t = ti(e);
	return e.slice(0, -1).map((n, r) => {
		let i = e[r + 1], a = Math.max(i.x - n.x, 1e-4);
		return {
			start: n,
			control1: {
				x: n.x + a / 3,
				y: n.y + t[r] * a / 3
			},
			control2: {
				x: i.x - a / 3,
				y: i.y - t[r + 1] * a / 3
			},
			end: i
		};
	});
}
//#endregion
//#region src/components/trend/trend-line-renderer.ts
function ri(e, t) {
	let n = /^#([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(e);
	return n ? `rgba(${parseInt(n[1], 16)},${parseInt(n[2], 16)},${parseInt(n[3], 16)},${t})` : e;
}
function ii(e, t) {
	let n = t.trim();
	for (let t = 0; t < 8; t += 1) {
		let t = !1;
		if (n = n.replace(/var\((--[^,)\s]+)(?:,\s*([^)]+))?\)/g, (n, r, i) => {
			let a = e.getPropertyValue(r).trim();
			return a ? (t = !0, a) : i?.trim() ? (t = !0, i.trim()) : n;
		}).trim(), !t) break;
	}
	return n;
}
function ai(e, t, n) {
	if (t.length) {
		if (e.moveTo(t[0].x, t[0].y), n === "raw") {
			t.slice(1).forEach((t) => e.lineTo(t.x, t.y));
			return;
		}
		if (n === "step") {
			t.slice(1).forEach((n, r) => {
				e.lineTo(n.x, t[r].y), e.lineTo(n.x, n.y);
			});
			return;
		}
		for (let n of ni(t)) e.bezierCurveTo(n.control1.x, n.control1.y, n.control2.x, n.control2.y, n.end.x, n.end.y);
	}
}
var oi = class extends j {
	constructor(...e) {
		super(...e), this.series = [], this.axes = [], this.curve = "smooth";
	}
	static {
		this.properties = {
			series: { attribute: !1 },
			axes: { attribute: !1 },
			layout: { attribute: !1 },
			curve: { type: String }
		};
	}
	static {
		this.styles = h`
    :host {
      position: absolute;
      inset: 0;
      display: block;
      pointer-events: none;
    }

    canvas {
      display: block;
      width: 100%;
      height: 100%;
    }
  `;
	}
	shouldUpdate(e) {
		return e.has("series") || e.has("axes") || e.has("layout") || e.has("curve");
	}
	updated(e) {
		this.draw();
	}
	draw() {
		let e = this.renderRoot.querySelector("canvas"), t = e?.getContext("2d"), n = this.layout;
		if (!e || !t || !n || !n.width || !n.height || !this.series.length || !this.axes.length) return;
		let r = Math.max(1, window.devicePixelRatio || 1);
		e.width = Math.round(n.width * r), e.height = Math.round(n.height * r), t.setTransform(r, 0, 0, r, 0, 0), t.clearRect(0, 0, n.width, n.height);
		let i = getComputedStyle(this);
		t.strokeStyle = i.getPropertyValue("--divider-color").trim() || "rgba(127,127,127,.25)", t.lineWidth = 1;
		for (let e of this.axes[0].ticks) {
			let r = Ar(e.value, this.axes[0], n.plot);
			t.beginPath(), t.moveTo(n.plot.left, r), t.lineTo(n.plot.right, r), t.stroke();
		}
		let a = Or(this.series), o = this.series.flatMap((e, t) => {
			let r = this.axes.find((t) => t.id === e.axisId);
			return !r || !e.points.length ? [] : [{
				color: ii(i, Z(e.color, t)),
				chartMode: e.chartMode,
				lineStyle: e.lineStyle,
				points: e.points.map((e) => ({
					x: kr(e.timestamp, a, n.plot),
					y: Ar(e.value, r, n.plot)
				}))
			}];
		});
		for (let e of o) {
			if (e.chartMode !== "area" || e.points.length < 2) continue;
			let r = t.createLinearGradient(0, n.plot.top, 0, n.plot.bottom);
			r.addColorStop(0, ri(e.color, .35)), r.addColorStop(1, ri(e.color, 0)), t.beginPath(), ai(t, e.points, this.curve);
			let i = e.points[0], a = e.points[e.points.length - 1];
			t.lineTo(a.x, n.plot.bottom), t.lineTo(i.x, n.plot.bottom), t.closePath(), t.fillStyle = r, t.fill();
		}
		for (let e of o) {
			if (e.chartMode === "bar") {
				let r = Math.max(2, Math.min(18, n.plot.width / Math.max(1, e.points.length) * .65));
				t.fillStyle = e.color;
				for (let i of e.points) t.fillRect(i.x - r / 2, i.y, r, Math.max(1, n.plot.bottom - i.y));
				continue;
			}
			if (e.points.length > 1) {
				t.beginPath(), ai(t, e.points, this.curve), t.strokeStyle = e.color, t.lineWidth = 2, t.lineCap = "round", t.lineJoin = "round", t.setLineDash(e.lineStyle === "dashed" ? [7, 5] : []), t.stroke(), t.setLineDash([]);
				continue;
			}
			let r = e.points[0];
			r && (t.fillStyle = e.color, t.beginPath(), t.arc(r.x, r.y, 4, 0, Math.PI * 2), t.fill());
		}
	}
	render() {
		return T`<canvas aria-hidden="true"></canvas>`;
	}
};
customElements.define("ic-trend-line-renderer", oi);
//#endregion
//#region src/components/trend/trend-chart.ts
var si = class extends j {
	constructor(...e) {
		super(...e), this.series = [], this.axes = [], this.timeframe = "24H", this.status = "idle", this.errorMessage = "", this.curve = "smooth", this.renderMode = "smooth", this.hiddenSeries = /* @__PURE__ */ new Set(), this.chartModel = new Yr(), this.layoutAxisKey = "";
	}
	static {
		this.properties = {
			series: { attribute: !1 },
			axes: { attribute: !1 },
			timeframe: { type: String },
			status: { type: String },
			errorMessage: { type: String },
			curve: { type: String },
			renderMode: { type: String },
			hiddenSeries: { attribute: !1 }
		};
	}
	static {
		this.styles = h`
    :host {
      display: flex;
      width: 100%;
      min-width: 0;
      min-height: 190px;
      flex-direction: column;
    }

    .state {
      display: grid;
      min-height: 190px;
      flex: 1;
      place-items: center;
      color: var(--secondary-text-color);
      font-size: 0.88rem;
      text-align: center;
    }

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }

    .chart {
      position: relative;
      width: 100%;
      min-width: 0;
      min-height: 190px;
      flex: 1;
    }

    .plot-surface {
      position: absolute;
      inset: 0;
      touch-action: none;
    }

    .hover-line {
      position: absolute;
      width: 1px;
      background: repeating-linear-gradient(
        to bottom,
        var(--secondary-text-color, #6e6e73) 0 4px,
        transparent 4px 8px
      );
      pointer-events: none;
    }

    .time-label {
      position: absolute;
      color: var(--secondary-text-color, #6e6e73);
      font-size: 11px;
      white-space: nowrap;
      transform: translateX(-50%);
    }

    .tooltip {
      position: absolute;
      z-index: 3;
      top: 8px;
      min-width: 150px;
      padding: 10px 12px;
      border: 1px solid var(--divider-color);
      border-radius: var(--ic-radius-popover);
      background: var(--card-background-color);
      box-shadow: var(--ic-shadow-popover);
      color: var(--primary-text-color);
      pointer-events: none;
      transform: translateX(-50%);
    }

    .tooltip-time {
      margin-bottom: 7px;
      color: var(--secondary-text-color);
      font-size: 0.72rem;
    }

    .tooltip-row {
      display: flex;
      justify-content: space-between;
      gap: 16px;
      margin-top: 4px;
      font-size: 0.78rem;
    }

    .tooltip-name {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .tooltip-value {
      font-weight: 600;
      white-space: nowrap;
    }

    .axis-warning {
      margin: 0 0 8px;
      color: var(--secondary-text-color);
      font-size: 12px;
      line-height: 1.35;
    }

  `;
	}
	get visibleSeries() {
		return this.chartModel.resolve(this.series, this.axes, this.hiddenSeries, this.timeframe, this.renderMode).series;
	}
	get activeAxes() {
		return this.chartModel.resolve(this.series, this.axes, this.hiddenSeries, this.timeframe, this.renderMode).axes;
	}
	get excludedAxisCount() {
		return this.chartModel.resolve(this.series, this.axes, this.hiddenSeries, this.timeframe, this.renderMode).excludedAxisCount;
	}
	getAxisWidth(e) {
		if (!e) return 0;
		let t = e.ticks.reduce((t, n) => Math.max(t, Tr(n.value, e).length), 0);
		return Math.min(96, Math.max(42, t * 7 + 14));
	}
	updateLayout(e, t) {
		let n = this.activeAxes, r = n.find((e) => e.axisGroup !== "right"), i = n.find((e) => e.axisGroup === "right");
		this.layout = Mr(e, t, {
			axisCount: n.length,
			leftAxisWidth: this.getAxisWidth(r),
			rightAxisWidth: this.getAxisWidth(i),
			hasLeftAxis: !!r,
			hasRightAxis: !!i
		});
	}
	updated() {
		let e = this.renderRoot.querySelector(".chart");
		if (!e) return;
		let t = this.activeAxes.map((e) => `${e.id}:${e.displayUnit}:${e.precision}:${e.ticks.map((e) => e.displayValue).join(",")}`).join("|"), n = e !== this.observedChart;
		if (!n && t === this.layoutAxisKey) return;
		this.layoutAxisKey = t, n && (this.resizeObserver?.disconnect(), this.observedChart = e, this.resizeObserver = new ResizeObserver(([e]) => {
			let t = e.contentRect.width, n = e.contentRect.height;
			this.layout?.width === t && this.layout?.height === n || (this.updateLayout(t, n), this.requestUpdate());
		}), this.resizeObserver.observe(e));
		let r = e.getBoundingClientRect();
		this.updateLayout(r.width, r.height);
	}
	disconnectedCallback() {
		this.resizeObserver?.disconnect(), this.hoverFrame !== void 0 && cancelAnimationFrame(this.hoverFrame), this.resizeObserver = void 0, this.observedChart = void 0, super.disconnectedCallback();
	}
	handlePointerMove(e) {
		let t = e.currentTarget.getBoundingClientRect(), n = this.activeAxes, r = this.visibleSeries;
		if (!t.width || !r.length || !n.length) return;
		let i = this.layout;
		if (!i?.plot.width) return;
		let a = i.plot, o = e.clientX - t.left, s = Math.min(a.left + a.width, Math.max(a.left, o)), c = Or(r), l = c.min + (s - a.left) / a.width * (c.max - c.min), u = jr(r[0].points, l);
		!u || u.timestamp === this.hoverTimestamp || (this.pendingHoverTimestamp = u.timestamp, this.hoverFrame === void 0 && (this.hoverFrame = requestAnimationFrame(() => {
			this.hoverFrame = void 0;
			let e = this.pendingHoverTimestamp;
			this.pendingHoverTimestamp = void 0, !(e === void 0 || e === this.hoverTimestamp) && (this.hoverTimestamp = e, this.requestUpdate());
		})));
	}
	clearHover() {
		this.hoverFrame !== void 0 && (cancelAnimationFrame(this.hoverFrame), this.hoverFrame = void 0), this.pendingHoverTimestamp = void 0, this.hoverTimestamp !== void 0 && (this.hoverTimestamp = void 0, this.requestUpdate());
	}
	renderReadyChart() {
		let e = this.visibleSeries, t = this.activeAxes;
		if (!e.length || !t.length) return T`
        <div class="state">No series visible</div>
      `;
		let n = this.layout, r = n?.plot;
		if (!n || !r?.width || !r.height) return T`
        <div class="chart"></div>
      `;
		let i = Or(e), a = Qr(i, this.timeframe, r.width), o = t.flatMap((e) => {
			let t = e.axisGroup !== "right";
			return e.ticks.map((n) => ({
				id: `${e.id}:${n.value}`,
				text: Tr(n.value, e),
				x: t ? r.left - 18 : r.right + 18,
				y: Ar(n.value, e, r),
				align: t ? "right" : "left"
			}));
		}), s = this.hoverTimestamp === void 0 ? void 0 : kr(this.hoverTimestamp, i, r), c = this.hoverTimestamp === void 0 ? [] : e.map((e, t) => ({
			item: e,
			index: t,
			point: jr(e.points, this.hoverTimestamp)
		})).filter((e) => !!e.point), l = c.flatMap(({ item: e, index: n, point: i }) => {
			let a = t.find((t) => t.id === e.axisId);
			return a && i && s !== void 0 ? [{
				id: e.id,
				x: s,
				y: Ar(i.value, a, r),
				color: Z(e.color, n)
			}] : [];
		});
		return T`
      ${this.excludedAxisCount ? T`
            <div class="axis-warning" role="status">
              Multiple units detected. Please select series to compare.
            </div>
          ` : null}
      <div class="chart">
        <ic-trend-line-renderer
          .series=${e}
          .axes=${t}
          .layout=${n}
          .curve=${this.curve}
        ></ic-trend-line-renderer>

        <div
          class="plot-surface"
          @pointermove=${this.handlePointerMove}
          @pointerleave=${this.clearHover}
        >
          ${a.map((e) => T`
            <span
              class="time-label"
              style=${`left:${kr(e, i, r)}px;top:${r.bottom + 8}px`}
            >
              ${Dr(e, this.timeframe)}
            </span>
          `)}
          ${s === void 0 ? null : T`
                <span
                  class="hover-line"
                  style=${`left:${s}px;top:${r.top}px;height:${r.height}px`}
                ></span>
              `}
        </div>
        <ic-trend-hover-markers
          .markers=${l}
        ></ic-trend-hover-markers>
        <ic-trend-axis-labels
          .labels=${o}
        ></ic-trend-axis-labels>

        ${s === void 0 || this.hoverTimestamp === void 0 ? null : T`
              <div
                class="tooltip"
                style=${`left:${s}px`}
              >
                <div class="tooltip-time">
                  ${Dr(this.hoverTimestamp, this.timeframe)}
                </div>
                ${c.map(({ item: e, index: n, point: r }) => T`
                  <div class="tooltip-row">
                    <span class="tooltip-name">
                      <span
                        class="dot"
                        style=${`background:${Z(e.color, n)}`}
                      ></span>
                      ${e.name}
                    </span>
                    <span class="tooltip-value">
                      ${Er(r?.value ?? 0, t.find((t) => t.id === e.axisId) ?? t[0], e.precision)}
                    </span>
                  </div>
                `)}
              </div>
            `}
      </div>
    `;
	}
	render() {
		return this.status === "ready" ? this.renderReadyChart() : T`
      <div class="state" role="status" aria-live="polite">
        ${this.status === "loading" ? "Loading history…" : this.status === "error" ? this.errorMessage || "Unable to load history" : this.status === "empty" ? "No history data for this timeframe" : "History data is not loaded yet"}
      </div>
    `;
	}
};
customElements.define("ic-trend-chart", si);
//#endregion
//#region src/components/trend/trend-legend.ts
var ci = class extends j {
	constructor(...e) {
		super(...e), this.series = [], this.axes = [], this.hiddenSeries = /* @__PURE__ */ new Set();
	}
	static {
		this.properties = {
			series: { attribute: !1 },
			axes: { attribute: !1 },
			hiddenSeries: { attribute: !1 }
		};
	}
	static {
		this.styles = h`
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: 8px 14px;
      margin-bottom: 8px;
    }

    button {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 3px 0;
      border: none;
      background: transparent;
      color: var(--secondary-text-color);
      cursor: pointer;
      font: inherit;
      font-size: 14px;
      border-radius:var(--ic-radius-control,12px);
      transition:
        background var(--en-motion-fast,150ms) var(--en-easing-standard,ease),
        opacity var(--en-motion-fast,150ms) var(--en-easing-standard,ease);
    }

    button:hover {
      background:var(--ic-action-hover-background,rgba(127,127,127,.12));
    }

    button.hidden {
      opacity: 0.45;
      text-decoration: line-through;
    }

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
  `;
	}
	toggle(e, t) {
		e.stopPropagation(), this.dispatchEvent(new CustomEvent("trend-series-toggle", {
			detail: { seriesId: t },
			bubbles: !0,
			composed: !0
		}));
	}
	render() {
		return T`
      ${this.series.map((e, t) => {
			let n = !e.visible || this.hiddenSeries.has(e.id), r = this.axes.find((t) => t.id === e.axisId)?.displayUnit ?? e.unit;
			return T`
          <button
            class=${n ? "hidden" : ""}
            type="button"
            aria-pressed=${!n}
            @click=${(t) => this.toggle(t, e.id)}
          >
            <span
              class="dot"
              style=${`background:${Z(e.color, t)}`}
            ></span>
            ${e.name}${r ? ` · ${r}` : ""}
          </button>
        `;
		})}
    `;
	}
};
customElements.define("ic-trend-legend", ci);
//#endregion
//#region src/components/common/subpage-header.ts
var li = class extends j {
	constructor(...e) {
		super(...e), this.title = "";
	}
	static {
		this.properties = { title: { type: String } };
	}
	static {
		this.styles = h`
    :host {
      display:flex;
      flex:1 1 auto;
      min-width:0;
      align-items:center;
      gap:8px;
    }
    button {
      display:grid;
      width:var(--subpage-back-size,40px);
      height:var(--subpage-back-size,40px);
      flex:0 0 var(--subpage-back-size,40px);
      place-items:center;
      padding:0;
      border:0;
      border-radius:var(--en-control-radius,999px);
      outline:0;
      background:transparent;
      color:inherit;
      cursor:pointer;
    }
    button:hover {
      background:var(--ic-action-hover-background,rgba(127,127,127,.14));
    }
    button:focus-visible {
      outline:var(--ic-focus-ring,2px solid var(--en-color-focus));
      outline-offset:2px;
    }
    ha-icon {
      width:var(--subpage-back-icon-size,18px);
      height:var(--subpage-back-icon-size,18px);
      --mdc-icon-size:var(--subpage-back-icon-size,18px);
      transform:translateY(var(--en-chevron-offset-y,-3px));
    }
    span {
      min-width:0;
      overflow:hidden;
      font-size:var(--subpage-title-size,inherit);
      font-weight:var(--subpage-title-weight,inherit);
      line-height:var(--subpage-title-line-height,inherit);
      letter-spacing:var(--subpage-title-letter-spacing,inherit);
      text-overflow:ellipsis;
      white-space:nowrap;
    }
  `;
	}
	render() {
		return T`
      <button type="button" aria-label="Back"
        @click=${() => this.dispatchEvent(new CustomEvent("subpage-back", {
			bubbles: !0,
			composed: !0
		}))}>
        <ha-icon icon="mdi:chevron-left"></ha-icon>
      </button>
      <span>${this.title}</span>
    `;
	}
};
customElements.define("ic-subpage-header", li);
//#endregion
//#region src/components/trend/trend-settings-dialog.ts
var ui = class extends j {
	constructor(...e) {
		super(...e), this.open = !1, this.selectedEntity = "", this.draft = X({ entities: [] }), this.configuredIndex = 0, this.view = "list", this.entityPickerExpanded = !1, this.manuallyEditedNames = /* @__PURE__ */ new Set(), this.manuallyEditedUnits = /* @__PURE__ */ new Set();
	}
	static {
		this.properties = {
			open: { type: Boolean },
			config: { attribute: !1 },
			selectedEntity: {
				type: String,
				attribute: "selected-entity"
			},
			hass: { attribute: !1 }
		};
	}
	static {
		this.styles = [h`
    :host { display:contents; }
    ic-app-dialog {
      --app-dialog-width:620px;
      --ic-field-placeholder-opacity:.7;
    }
    ic-app-dialog.series-view {
      --ic-dialog-padding:20px 32px 24px;
    }
    .content {
      display:grid;
      max-height:min(560px,calc(100vh - 180px));
    }
    .section { display:grid; }
    .entity-field-group { display:grid; min-width:0; }
    .series-identity {
      display:flex;
      align-items:center;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
    }
    .series-list { display:grid; gap:4px; }
    .series-list button {
      display:flex; width:100%; min-height:40px; box-sizing:border-box;
      align-items:center; gap:10px; padding:0 12px;
      border:1px solid transparent;
      border-radius:var(--ic-radius-control);
      background:transparent;
      color:var(--en-text-primary,var(--primary-text-color));
      cursor:pointer; font:inherit; font-size:14px; text-align:left;
    }
    .series-list button:hover { background:var(--ic-action-hover-background,rgba(127,127,127,.14)); }
    .series-list .series-label {
      min-width:0; flex:1 1 auto; overflow:hidden;
      text-overflow:ellipsis; white-space:nowrap;
    }
    .series-list ha-icon {
      flex:0 0 16px; width:16px; height:16px; --mdc-icon-size:16px;
      color:var(--en-text-secondary,var(--secondary-text-color));
      opacity:.75;
      transform:translateY(var(--en-chevron-offset-y,-3px));
    }
    .switch {
      display:grid; width:32px; height:20px; place-items:center;
      border:0; border-radius:999px;
      background:var(--en-surface-secondary,rgba(127,127,127,.18)); cursor:pointer;
    }
    .switch::after {
      content:""; width:12px; height:12px; border-radius:50%;
      background:var(--en-control-active-foreground,#fff);
      box-shadow:0 1px 3px rgba(0,0,0,.18);
      transform:translateX(-6px); transition:transform var(--en-motion-fast,180ms);
    }
    .switch.on { background:var(--en-color-primary); }
    .switch.on::after { transform:translateX(6px); }
    .field-grid {
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:var(--en-field-group-gap,20px);
      padding:0;
      margin:0;
    }
    label { display:grid; }
    .wide { grid-column:1 / -1; }
    .parameter-row {
      display:flex; min-height:40px; align-items:center;
      justify-content:space-between; gap:16px;
      color:var(--en-text-secondary,var(--secondary-text-color));
      font-size:12px;
    }
    .parameter-row.wide { grid-column:1 / -1; }
    .parameter-copy { display:grid; gap:2px; }
    .parameter-value { color:var(--en-text-primary,var(--primary-text-color)); font-size:13px; }
    .chart-option {
      display:flex; min-height:40px; align-items:center;
      justify-content:space-between; gap:16px;
    }
    .chart-option > span {
      color:var(--en-text-primary,var(--primary-text-color));
      font-size:14px;
      font-weight:500;
    }
    .footer { display:flex; justify-content:flex-end; gap:10px; padding:14px 24px; }
    .delete-action { margin-inline-end:auto; }
  `, M];
	}
	willUpdate(e) {
		if (e.has("open") && this.open || e.has("config") && !this.open) {
			this.draft = X(this.config ?? { entities: [] });
			let e = this.selectedEntity ? this.draft.entities.findIndex((e) => e.entity === this.selectedEntity) : -1;
			this.configuredIndex = e >= 0 ? e : 0, this.view = e >= 0 ? "series" : "list", this.entityPickerExpanded = !1, this.manuallyEditedNames = new Set(this.draft.entities.flatMap((e, t) => {
				let n = this.hass?.states[e.entity], r = String(n?.attributes.friendly_name ?? ""), i = e.name?.trim() ?? "";
				return i && i !== r && i !== e.entity ? [t] : [];
			})), this.manuallyEditedUnits = new Set(this.draft.entities.flatMap((e, t) => {
				let n = String(this.hass?.states[e.entity]?.attributes.unit_of_measurement ?? ""), r = e.unit?.trim() ?? "";
				return r && r !== n ? [t] : [];
			}));
		}
	}
	updateEntity(e, t, n = !0) {
		this.draft = {
			...this.draft,
			entities: this.draft.entities.map((n, r) => r === e ? {
				...n,
				...t
			} : n)
		}, this.requestUpdate(), n && this.emitChange();
	}
	selectEntity(e) {
		e.stopPropagation();
		let t = e.detail.entityId, n = this.hass?.states[t], r = { entity: t };
		this.manuallyEditedNames.has(this.configuredIndex) || (r.name = String(n?.attributes.friendly_name ?? t)), this.manuallyEditedUnits.has(this.configuredIndex) || (r.unit = String(n?.attributes.unit_of_measurement ?? "")), this.updateEntity(this.configuredIndex, r, !1), this.entityPickerExpanded = !1;
	}
	handleDialogClose(e) {
		if (e.stopPropagation(), e.detail.reason === "escape" && this.entityPickerExpanded) {
			this.entityPickerExpanded = !1, this.requestUpdate();
			return;
		}
		this.close();
	}
	updateChart(e) {
		this.draft = {
			...this.draft,
			...e
		}, this.requestUpdate(), this.emitChange();
	}
	emitChange() {
		this.dispatchEvent(new CustomEvent("trend-settings-change", {
			detail: { config: X(this.draft) },
			bubbles: !0,
			composed: !0
		}));
	}
	close() {
		this.dispatchEvent(new CustomEvent("trend-settings-close", {
			bubbles: !0,
			composed: !0
		}));
	}
	save() {
		this.dispatchEvent(new CustomEvent("trend-settings-save", {
			detail: { config: X(this.draft) },
			bubbles: !0,
			composed: !0
		}));
	}
	deleteSeries() {
		if (this.view !== "series") return;
		let e = this.draft.entities[this.configuredIndex];
		e && (this.draft = {
			...this.draft,
			entities: this.draft.entities.filter((t) => t.entity !== e.entity)
		}, this.configuredIndex = Math.max(0, Math.min(this.configuredIndex, this.draft.entities.length - 1)), this.selectedEntity = "", this.entityPickerExpanded = !1, this.view = "list", this.requestUpdate(), this.emitChange());
	}
	render() {
		let e = this.draft.entities[this.configuredIndex];
		return T`
      <ic-app-dialog class=${this.view === "series" ? "series-view" : ""}
        .open=${this.open} title="Trend Settings"
        @dialog-close=${this.handleDialogClose}
        @click=${() => {
			this.entityPickerExpanded && (this.entityPickerExpanded = !1, this.requestUpdate());
		}}>
        ${this.view === "series" ? T`
          <ic-subpage-header slot="header"
            title="Edit Series"
            @subpage-back=${() => {
			this.view = "list", this.requestUpdate();
		}}>
          </ic-subpage-header>
        ` : T`<span slot="header">Trend Settings</span>`}
        <ic-scroll-area class="content">
          ${this.view === "series" && e ? T`
            <section class="section">
              <div class="entity-field-group"
                @click=${(e) => e.stopPropagation()}>
                <ic-field variant="selectable"
                  .value=${L(e.entity, "readonlyField")}
                  .rawValue=${e.entity}
                  aria-expanded=${this.entityPickerExpanded}
                  @field-activate=${() => {
			this.entityPickerExpanded = !this.entityPickerExpanded, this.requestUpdate();
		}}></ic-field>
                ${this.entityPickerExpanded ? T`
                  <ic-entity-selector variant="inline"
                    .hass=${this.hass}
                    .value=${e.entity}
                    .filter=${{ domains: ["sensor"] }}
                    .preferredDeviceClasses=${[
			"power",
			"energy",
			"monetary",
			"current",
			"voltage"
		]}
                    .preferredUnits=${[
			"W",
			"kW",
			"MW",
			"Wh",
			"kWh",
			"MWh"
		]}
                    @entity-selected=${this.selectEntity}>
                  </ic-entity-selector>
                ` : null}
              </div>
              <div class="field-grid">
                <ic-field class="wide" label="Display Name" .value=${e.name ?? ""}
                  @field-input=${(e) => {
			this.manuallyEditedNames.add(this.configuredIndex), this.updateEntity(this.configuredIndex, { name: e.detail.value });
		}}></ic-field>
                <ic-field label="Unit" placeholder="Auto" .value=${e.unit ?? ""}
                  @field-input=${(e) => {
			this.manuallyEditedUnits.add(this.configuredIndex), this.updateEntity(this.configuredIndex, { unit: e.detail.value });
		}}></ic-field>
                <label class="wide">Chart Mode
                  <ic-segmented-control width="fit" label="Chart mode" .value=${e.chartMode ?? "line"}
                    .options=${[
			{
				value: "line",
				label: "Line"
			},
			{
				value: "area",
				label: "Area"
			},
			{
				value: "bar",
				label: "Bar"
			}
		]}
                    @segmented-change=${(e) => this.updateEntity(this.configuredIndex, { chartMode: e.detail.value })}>
                  </ic-segmented-control>
                </label>
                <label class="wide">Axis
                  <ic-segmented-control width="fit" label="Axis" .value=${e.axis ?? "auto"}
                    .options=${[
			{
				value: "auto",
				label: "Auto"
			},
			{
				value: "left",
				label: "Left"
			},
			{
				value: "right",
				label: "Right"
			}
		]}
                    @segmented-change=${(e) => this.updateEntity(this.configuredIndex, { axis: e.detail.value })}>
                  </ic-segmented-control>
                </label>
                <label class="wide">Decimal Places
                  <ic-segmented-control width="fit" label="Decimal places" .value=${String(e.decimals ?? 2)}
                    .options=${[
			0,
			1,
			2,
			3,
			4
		].map((e) => ({
			value: String(e),
			label: String(e)
		}))}
                    @segmented-change=${(e) => this.updateEntity(this.configuredIndex, { decimals: Number(e.detail.value) })}>
                  </ic-segmented-control>
                </label>
                <label class="wide">Resolution
                  <ic-segmented-control width="fit" label="Data resolution" .value=${e.renderMode ?? "smooth"}
                    .options=${[{
			value: "smooth",
			label: "Auto"
		}, {
			value: "high_precision",
			label: "Detailed"
		}]}
                    @segmented-change=${(e) => this.updateEntity(this.configuredIndex, { renderMode: e.detail.value })}>
                  </ic-segmented-control>
                </label>
              </div>
            </section>
          ` : T`
            <section class="section">
              <div class="section-title">Series</div>
              ${this.draft.entities.length ? T`
                <div class="series-list">
                  ${this.draft.entities.map((e, t) => T`
                    <button type="button"
                      @click=${() => {
			this.configuredIndex = t, this.view = "series", this.requestUpdate();
		}}>
                      <span class="series-label" title=${e.name ?? e.entity}>
                        ${R(e.name ?? e.entity, { maxLength: I.readonlyField })}
                      </span>
                      <ha-icon icon="mdi:chevron-right"></ha-icon>
                    </button>
                  `)}
                </div>
              ` : T`<div class="field-control series-identity">No series configured</div>`}
            </section>
            <section class="section">
              <div class="section-title">Chart Settings</div>
              <div class="chart-option">
                <span>Full Width</span>
                <button class="switch ${this.draft.fullWidth === !1 ? "" : "on"}" type="button"
                  @click=${() => this.updateChart({ fullWidth: this.draft.fullWidth === !1 })}></button>
              </div>
              <ic-field label="Chart Height" type="number" .value=${String(this.draft.height ?? 350)}
                @field-change=${(e) => this.updateChart({ height: Number(e.detail.value) })}></ic-field>
            </section>
          `}
        </ic-scroll-area>
        <div class="footer" slot="footer">
          ${this.view === "series" ? T`
            <ic-button class="delete-action" variant="destructive"
              @click=${this.deleteSeries}>Delete</ic-button>
          ` : null}
          <ic-button @click=${this.close}>Cancel</ic-button>
          <ic-button variant="primary" @click=${this.save}>Save</ic-button>
        </div>
      </ic-app-dialog>
    `;
	}
};
customElements.define("ic-trend-settings-dialog", ui);
//#endregion
//#region src/repositories/local-storage-trend-config-repository.ts
var di = "interactive-card:trend-config:v1";
function fi(e) {
	return {
		...e,
		entities: e.entities.map((e) => ({ ...e }))
	};
}
function pi(e) {
	return !!(e && typeof e == "object" && Array.isArray(e.entities));
}
var mi = class {
	constructor(e = di) {
		this.storageKey = e;
	}
	async load(e) {
		let t = globalThis.localStorage?.getItem(this.storageKey);
		if (t) try {
			let n = JSON.parse(t), r = n.version === 1 ? n.cards?.[e] : void 0;
			return pi(r) ? fi(r) : void 0;
		} catch {
			return;
		}
	}
	async save(e, t) {
		let n = {}, r = globalThis.localStorage?.getItem(this.storageKey);
		if (r) try {
			let e = JSON.parse(r);
			e.version === 1 && e.cards && (n = e.cards);
		} catch {
			n = {};
		}
		let i = {
			version: 1,
			cards: {
				...n,
				[e]: fi(t)
			}
		};
		globalThis.localStorage?.setItem(this.storageKey, JSON.stringify(i));
	}
}, hi = [
	"1H",
	"24H",
	"7D",
	"30D"
];
function gi(e) {
	if (e instanceof Error) return e.message;
	if (typeof e == "string" && e.trim()) return e;
	if (e && typeof e == "object") {
		let t = e, n = t.body?.message ?? t.message, r = t.status_code;
		if (n) return `${r ? `${r}: ` : ""}${String(n)}`;
	}
	return "Unable to load history";
}
function _i(e, t) {
	if (!e.startsWith("sensor.")) return !1;
	let n = t?.states[e]?.attributes ?? {}, r = String(n.device_class ?? "").toLowerCase(), i = String(n.unit_of_measurement ?? "").toLowerCase();
	return [
		"power",
		"energy",
		"monetary"
	].includes(r) || [
		"w",
		"kw",
		"mw",
		"wh",
		"kwh",
		"mwh",
		"€",
		"$",
		"£"
	].includes(i);
}
function vi(e, t, n) {
	return String(n?.trim() || e?.states[t]?.attributes.friendly_name || t);
}
var yi = class extends j {
	constructor(...e) {
		super(...e), this.timeframe = "24H", this.status = "idle", this.errorMessage = "", this.series = [], this.axes = [], this.loadVersion = 0, this.settingsMenuOpen = !1, this.seriesSearch = "", this.settingsDialogOpen = !1, this.settingsDialogEntity = "", this.hiddenSeriesIds = /* @__PURE__ */ new Set(), this.configCoordinator = new pr(new mi()), this.configResolutionVersion = 0, this.configStorageId = "energy-trend";
	}
	static {
		this.properties = {
			hass: { attribute: !1 },
			config: { attribute: !1 }
		};
	}
	set hass(e) {
		let t = !this._hass;
		this._hass = e, t && this.config && this.loadHistory();
	}
	get hass() {
		return this._hass;
	}
	static {
		this.styles = h`
    :host {
      display: block;
      box-sizing: border-box;
      width: 100%;
      min-width: 0;
    }

    ic-glass-container {
      display: block;
      width: 100%;
      min-width: 0;
      --glass-container-height: var(--trend-card-height, 350px);
    }

    .body {
      display: flex;
      flex-direction: column;
      height: 100%;
      min-height: 0;
      min-width: 0;
    }

    .ranges {
      display: block;
      flex:0 0 auto;
      margin:0;
      --segment-font-size:.75rem;
    }

    .chart-header {
      display:flex;
      min-width:0;
      align-items:center;
      justify-content:space-between;
      gap:12px;
      margin-bottom:12px;
    }

    .chart-header ic-trend-legend {
      min-width:0;
      flex:1 1 auto;
    }

    .trend-menu {
      display:grid;
      width:280px;
      min-width:220px;
      max-width:100%;
      max-height:min(520px,var(--popover-max-height,520px));
      box-sizing:border-box;
    }

    .series-manager-row.hidden-series {
      opacity:.55;
    }

    .menu-title {
      margin:8px 10px 4px;
      color:var(--en-text-secondary,var(--secondary-text-color));
      font-size:11px;
      font-weight:600;
      letter-spacing:.08em;
      text-transform:uppercase;
    }

    .entity-item {
      display:block;
      width:100%;
      min-height:36px;
      overflow:hidden;
      padding:7px 10px;
      border:0;
      border-radius:var(--ic-radius-control);
      background:transparent;
      color:var(--en-text-primary,var(--primary-text-color));
      cursor:pointer;
      font:inherit;
      font-size:13px;
      text-align:left;
      text-overflow:ellipsis;
      white-space:nowrap;
    }

    .entity-item:hover {
      background:var(--ic-action-hover-background,rgba(127,127,127,.14));
    }

    .settings-chevron {
      width:14px;
      height:14px;
      --mdc-icon-size:14px;
      color:var(--en-text-secondary,var(--secondary-text-color));
      transition:transform var(--en-motion-fast,180ms)
        var(--en-easing-standard,ease);
    }

    .settings-chevron.open {
      transform:rotate(180deg);
    }

    .series-row { min-width:0; }
    ic-trend-chart {
      flex: 1;
      min-height: 0;
    }
  `;
	}
	setConfig(e) {
		if (!e || !Array.isArray(e.entities)) throw Error("entities is required");
		let t = X(e), n = ++this.configResolutionVersion;
		this.configStorageId = this.getConfigStorageId(t), this.config = t, this.timeframe = this.config.timeframe ?? "24H", this._hass && this.loadHistory(), this.configCoordinator.resolve(this.configStorageId, t).then((e) => {
			n === this.configResolutionVersion && (this.config = e, this.timeframe = e.timeframe ?? "24H", this.requestUpdate(), this._hass && this.loadHistory());
		}).catch((e) => {
			console.error("[energy-trend-card] Unable to restore configuration", e);
		});
	}
	getConfigStorageId(e) {
		return (e.id?.trim() || e.title?.trim() || "energy-trend").toLowerCase().replace(/[^a-z0-9_-]+/g, "-");
	}
	getEntityMetadata() {
		return !this.config || !this._hass ? {} : Object.fromEntries(this.config.entities.map((e) => {
			let t = this._hass?.states[e.entity];
			return [e.entity, {
				name: String(t?.attributes.friendly_name ?? e.entity),
				unit: String(t?.attributes.unit_of_measurement ?? "")
			}];
		}));
	}
	async loadHistory() {
		if (!this.config || !this._hass) return;
		let e = ++this.loadVersion;
		this.status = "loading", this.errorMessage = "", this.requestUpdate();
		try {
			let t = await _r(this._hass, this.config.entities.map((e) => e.entity), this.timeframe);
			if (e !== this.loadVersion) return;
			let n = xr(t.entities, this.config.entities, this.config.category ?? "energy", this.getEntityMetadata());
			this.series = n.series, this.axes = n.axes, this.status = n.series.some((e) => e.points.length > 0) ? "ready" : "empty";
		} catch (t) {
			if (e !== this.loadVersion) return;
			console.error("[energy-trend-card] History load failed", t), this.series = [], this.axes = [], this.status = "error", this.errorMessage = gi(t);
		}
		this.requestUpdate();
	}
	changeTimeframe(e) {
		this.timeframe !== e && this.config && (this.commitTrendConfig({
			...this.config,
			timeframe: e
		}), this.dispatchEvent(new CustomEvent("trend-timeframe-changed", {
			detail: { timeframe: e },
			bubbles: !0,
			composed: !0
		})));
	}
	toggleLegendSeries(e) {
		e.stopPropagation();
		let t = new Set(this.hiddenSeriesIds);
		t.has(e.detail.seriesId) ? t.delete(e.detail.seriesId) : t.add(e.detail.seriesId), this.hiddenSeriesIds = t, this.requestUpdate();
	}
	commitTrendConfig(e) {
		++this.configResolutionVersion, this.config = X(e), this.timeframe = this.config.timeframe ?? "24H";
		let t = new Map(this.config.entities.map((e) => [e.entity, e]));
		this.series = this.series.map((e) => {
			let n = t.get(e.entity);
			return n ? {
				...e,
				name: n.name ?? e.name,
				precision: n.decimals ?? 2,
				visible: n.enabled !== !1,
				axisGroup: n.axis === "left" || n.axis === "right" ? n.axis : void 0,
				lineStyle: n.lineStyle ?? "solid",
				chartMode: n.chartMode ?? "line",
				renderMode: n.renderMode
			} : e;
		}), this.requestUpdate(), this.loadHistory(), this.configCoordinator.save(this.configStorageId, this.config).catch((e) => {
			console.error("[energy-trend-card] Unable to save configuration", e);
		}), this.dispatchEvent(new CustomEvent("config-changed", {
			detail: { config: this.config },
			bubbles: !0,
			composed: !0
		}));
	}
	addSeries(e) {
		if (!this.config || !this._hass?.states[e]) return;
		let t = this._hass.states[e], n = String(t.attributes.unit_of_measurement ?? "");
		this.commitTrendConfig({
			...this.config,
			entities: [...this.config.entities, {
				entity: e,
				order: this.config.entities.length,
				name: String(t.attributes.friendly_name ?? e),
				unit: n,
				category: n.includes("Wh") ? "energy" : "power",
				enabled: !0,
				decimals: 2,
				autoScale: !0
			}]
		});
	}
	toggleSeriesVisibility(e) {
		this.config && this.commitTrendConfig({
			...this.config,
			entities: this.config.entities.map((t) => t.entity === e ? {
				...t,
				enabled: t.enabled === !1
			} : t)
		});
	}
	toggleSettingsMenu() {
		this.settingsMenuOpen = !this.settingsMenuOpen, this.requestUpdate();
	}
	render() {
		if (!this.config) return T``;
		let e = this.config.height ?? 350, t = new Set(this.config.entities.map((e) => e.entity)), n = Object.keys(this._hass?.states ?? {}).filter((e) => _i(e, this._hass) && !t.has(e)).filter((e) => {
			let t = this.seriesSearch.trim().toLowerCase();
			if (!t) return !0;
			let n = String(this._hass?.states[e]?.attributes.friendly_name ?? "").toLowerCase();
			return e.toLowerCase().includes(t) || n.includes(t);
		});
		return T`
      <ic-section-header .title=${this.config.title ?? "Energy Trend"}>
        <ic-popover slot="actions" style="--popover-min-width:280px"
          .open=${this.settingsMenuOpen} placement="bottom-end" .offset=${8}
          .closeOnOutsideClick=${!0}
          @popover-close=${() => {
			this.settingsMenuOpen = !1, this.requestUpdate();
		}}>
          <ic-action-button slot="anchor" icon="+" label="Manage trend series"
            @action-click=${this.toggleSettingsMenu}></ic-action-button>
          <ic-action-menu class="trend-menu">
              <div class="menu-title">Displayed Series</div>
              ${this.config.entities.length ? this.config.entities.map((e) => {
			let t = vi(this._hass, e.entity, e.name), n = R(t, { maxLength: I.compactMenu });
			return T`
                <div class="series-manager-row ${e.enabled === !1 ? "hidden-series" : ""}">
                  <ic-menu-item
                    .selected=${e.enabled !== !1}
                    .indicator=${e.enabled === !1 ? "none" : "check"}
                    .rawLabel=${t}
                    @click=${() => this.toggleSeriesVisibility(e.entity)}>
                    ${n}
                  </ic-menu-item>
                </div>
              `;
		}) : T`<div class="entity-item">No displayed series</div>`}

              <div class="menu-title">Available Series</div>
              <ic-search-field variant="compact" placeholder="Search entities"
                .value=${this.seriesSearch}
                @search-input=${(e) => {
			this.seriesSearch = e.detail.value, this.requestUpdate();
		}}></ic-search-field>
              ${n.length ? n.map((e) => {
			let t = vi(this._hass, e), n = R(t, { maxLength: I.compactMenu });
			return T`
                <ic-menu-item indicator="plus"
                  .rawLabel=${t}
                  .secondaryLabel=${L(e, "compactMenu")}
                  .rawSecondaryLabel=${e}
                  @click=${() => this.addSeries(e)}>
                  ${n}
                </ic-menu-item>
              `;
		}) : T`<div class="entity-item">No available sensors</div>`}
          </ic-action-menu>
        </ic-popover>
      </ic-section-header>

      <ic-glass-container
        style=${`--trend-card-height:${e}px`}
        @click=${() => {
			this.settingsDialogEntity = "", this.settingsDialogOpen = !0, this.requestUpdate();
		}}>
        <div class="body">
          <div class="chart-header">
            <ic-trend-legend style="margin:0" .series=${this.series}
              .axes=${[]} .hiddenSeries=${this.hiddenSeriesIds}
              @trend-series-toggle=${this.toggleLegendSeries}></ic-trend-legend>
            <ic-segmented-control class="ranges" width="fit" size="compact-28" label="Trend timeframe"
              .value=${this.timeframe}
              .options=${hi.map((e) => ({
			value: e,
			label: e
		}))}
              @click=${(e) => e.stopPropagation()}
              @segmented-change=${(e) => this.changeTimeframe(e.detail.value)}>
            </ic-segmented-control>
          </div>
          <ic-trend-chart .series=${this.series} .axes=${this.axes}
            .timeframe=${this.timeframe} .status=${this.status}
            .errorMessage=${this.errorMessage} .curve=${this.config.curve ?? "smooth"}
            .hiddenSeries=${this.hiddenSeriesIds}
            .renderMode=${this.config.renderMode ?? "smooth"}></ic-trend-chart>
        </div>
      </ic-glass-container>

      <ic-trend-settings-dialog .open=${this.settingsDialogOpen}
        .hass=${this.hass}
        .config=${this.config}
        .selectedEntity=${this.settingsDialogEntity}
        @trend-settings-close=${() => {
			this.settingsDialogEntity = "", this.settingsDialogOpen = !1, this.requestUpdate();
		}}
        @trend-settings-save=${(e) => {
			e.stopPropagation(), this.settingsDialogEntity = "", this.settingsDialogOpen = !1, this.commitTrendConfig(e.detail.config);
		}}
        @trend-settings-change=${(e) => {
			e.stopPropagation(), this.commitTrendConfig(e.detail.config);
		}}></ic-trend-settings-dialog>
    `;
	}
	getCardSize() {
		return Math.max(3, Math.ceil((this.config?.height ?? 350) / 50));
	}
	getGridOptions() {
		return { columns: this.config?.fullWidth === !1 ? 6 : "full" };
	}
};
customElements.define("energy-trend-card", yi), window.customCards = [...window.customCards ?? [], {
	type: "energy-trend-card",
	name: "Energy Trend Card",
	description: "Historical energy analysis with multiple series"
}];
//#endregion
//#region src/data/circuit-config.ts
var bi = [];
function xi(e, t) {
	let n = P(e, t.entity), r = n.status === "valid" && n.value !== null ? mt(n.value, n.unit) : null, i = r?.family === "power", a = i ? r.value : n.value, o = F(i && r ? {
		...n,
		value: r.value,
		unit: "W"
	} : n, {
		autoScale: !0,
		decimals: i && a !== null && Math.abs(a) < 1e3 ? 0 : 2
	});
	return {
		config: t,
		power: a,
		value: o.value,
		unit: o.unit,
		stateStatus: o.status,
		active: o.status === "valid" && a !== null && a > 1
	};
}
function Si(e) {
	return [...e].sort((e, t) => {
		let n = e.power ?? -Infinity;
		return (t.power ?? -Infinity) - n;
	});
}
function Ci(e) {
	return e.map((e, t) => ({
		circuit: e,
		index: t
	})).sort((e, t) => e.circuit.config.order - t.circuit.config.order || e.index - t.index).map(({ circuit: e }) => e);
}
function wi(e, t) {
	return Ci(t.filter((e) => e.enabled).map((t) => xi(e, t)));
}
//#endregion
//#region src/managers/circuit-manager.ts
function Ti(e) {
	let t = {};
	return e.id.trim() || (t.id = "ID required"), e.entity.trim() || (t.entity = "Entity required"), e.name.trim() || (t.name = "Display name required"), {
		valid: Object.keys(t).length === 0,
		errors: t
	};
}
function Ei(e, t) {
	return {
		...e,
		id: e.id.trim(),
		entity: e.entity.trim(),
		name: e.name.trim(),
		icon: e.icon?.trim() || "mdi:electric-switch",
		enabled: e.enabled ?? !0,
		order: e.order ?? t
	};
}
var Di = class {
	create(e, t) {
		let n = Ei(t, e.length);
		return !Ti(n).valid || e.some((e) => e.id === n.id) ? {
			circuits: [...e],
			changed: !1
		} : {
			circuits: [...e, n],
			changed: !0
		};
	}
	update(e, t) {
		let n = e.findIndex((e) => e.id === t.id);
		if (n < 0) return this.create(e, t);
		let r = Ei(t, n);
		return Ti(r).valid ? {
			circuits: e.map((e, t) => t === n ? {
				...e,
				...r
			} : { ...e }),
			changed: !0
		} : {
			circuits: [...e],
			changed: !1
		};
	}
	remove(e, t) {
		let n = e.filter((e) => e.id !== t);
		return {
			circuits: n,
			changed: n.length !== e.length
		};
	}
	reorder(e, t) {
		let n = new Map(t.map((e, t) => [e, t]));
		return {
			circuits: e.map((e, t) => ({
				...e,
				order: n.get(e.id) ?? e.order ?? t
			})),
			changed: !0
		};
	}
}, Oi = class {
	constructor(e) {
		this.manager = new Di(), this.repository = e;
	}
	async resolve(e) {
		let t = await this.repository.load();
		return t === void 0 ? e.map((e) => ({ ...e })) : t.map((e) => ({ ...e }));
	}
	async update(e, t) {
		let n = await this.resolve(e), r = n.some((e) => e.id === t.id) ? this.manager.update(n, t) : this.manager.create(n, t);
		return r.changed && await this.repository.save(r.circuits), r.circuits;
	}
	async remove(e, t) {
		let n = await this.resolve(e), r = this.manager.remove(n, t);
		return r.changed && await this.repository.save(r.circuits), r.circuits;
	}
	async reorder(e, t) {
		let n = await this.resolve(e), r = this.manager.reorder(n, t);
		return r.changed && await this.repository.save(r.circuits), r.circuits;
	}
}, ki = "interactive-card:circuit-config:v1";
function Ai(e) {
	return e.map((e) => ({ ...e }));
}
function ji(e) {
	if (!e || typeof e != "object") return !1;
	let t = e;
	return typeof t.id == "string" && typeof t.entity == "string" && typeof t.name == "string";
}
var Mi = class {
	constructor(e = ki) {
		this.storageKey = e;
	}
	async load() {
		let e = globalThis.localStorage?.getItem(this.storageKey);
		if (e) try {
			let t = JSON.parse(e);
			return t.version !== 1 || !Array.isArray(t.circuits) ? void 0 : t.circuits.filter(ji).map((e, t) => ({
				...e,
				enabled: e.enabled ?? !0,
				order: e.order ?? t
			}));
		} catch {
			return;
		}
	}
	async save(e) {
		let t = {
			version: 1,
			circuits: Ai(e)
		};
		globalThis.localStorage?.setItem(this.storageKey, JSON.stringify(t));
	}
	async update(e) {
		let t = await this.load() ?? [], n = t.some((t) => t.id === e.id) ? t.map((t) => t.id === e.id ? {
			...t,
			...e
		} : t) : [...t, { ...e }];
		await this.save(n);
	}
	async remove(e) {
		let t = await this.load() ?? [];
		await this.save(t.filter((t) => t.id !== e));
	}
}, Ni = class extends j {
	static {
		this.styles = h`
    :host {
      display: block;
      width: 100%;
      min-width: 0;
    }

    ic-card-container {
      --energy-card-height: var(--circuit-card-height, 150px);
      --energy-card-padding: 18px;
      --ic-shadow-card: var(--circuit-card-shadow, 0 8px 18px rgba(0,0,0,.16));
      --ic-card-hover-transform: translateY(-1px);
      --ic-card-active-transform: translateY(-1px);
      cursor: pointer;
    }

    :host(:hover) ic-card-container {
      --ic-border-card: 1px solid color-mix(
        in srgb,
        var(--en-color-primary) 28%,
        transparent
      );
      --ic-shadow-card: inset 0 0 0 1px color-mix(
        in srgb,
        var(--en-color-primary) 18%,
        transparent
      ), 0 8px 18px rgba(0,0,0,.18);
    }

    ic-card-container:focus-visible {
      outline: var(--ic-focus-ring);
      outline-offset: 3px;
    }

    .content {
      display: grid;
      height: 100%;
      place-items: center;
      align-content: center;
      gap: 10px;
      color: var(--en-surface-text-primary, var(--primary-text-color));
    }

    .plus {
      display: grid;
      width: 38px;
      height: 38px;
      place-items: center;
      border: 1px solid var(--en-surface-card-border, var(--divider-color));
      border-radius: 50%;
      background: var(--en-surface-secondary, rgba(255, 255, 255, 0.08));
      color: var(--en-surface-icon-primary, var(--primary-text-color));
      opacity: 1;
      --mdc-icon-size: 20px;
    }

    .label {
      font-size: 14px;
      font-weight: 600;
    }
  `;
	}
	requestAdd() {
		this.dispatchEvent(new CustomEvent("add-circuit-request", {
			bubbles: !0,
			composed: !0
		}));
	}
	handleKeydown(e) {
		e.key !== "Enter" && e.key !== " " || (e.preventDefault(), this.requestAdd());
	}
	render() {
		return T`
      <ic-card-container
        role="button"
        tabindex="0"
        aria-label="Add Circuit"
        @click=${this.requestAdd}
        @keydown=${this.handleKeydown}
      >
        <div class="content">
          <ha-icon class="plus" icon="mdi:plus" aria-hidden="true"></ha-icon>
          <span class="label">Add Circuit</span>
        </div>
      </ic-card-container>
    `;
	}
};
customElements.define("ic-circuit-add-card", Ni);
//#endregion
//#region src/components/circuit/circuit-card.ts
var Pi = class extends j {
	constructor(...e) {
		super(...e), this.selected = !1;
	}
	static {
		this.properties = {
			circuit: { attribute: !1 },
			hass: { attribute: !1 },
			selected: {
				type: Boolean,
				reflect: !0
			}
		};
	}
	static {
		this.styles = h`
    :host {
      display: block;
      width: 100%;
      min-width: 0;
      height: 100%;
      color: var(--en-surface-text-primary, var(--primary-text-color));
    }

    ic-card-container {
      --energy-card-height: var(--circuit-card-height, 150px);
      --energy-card-padding:
        var(--circuit-card-padding-block,18px)
        var(--en-card-content-inset,18px);
      --ic-shadow-card: var(--circuit-card-shadow, 0 8px 18px rgba(0,0,0,.16));
      --ic-card-hover-transform: translateY(-1px);
      --ic-card-active-transform: translateY(-1px);
      cursor: pointer;
    }

    :host(:hover) ic-card-container {
      --ic-border-card: 1px solid color-mix(
        in srgb,
        var(--en-color-primary) 28%,
        transparent
      );
      --ic-shadow-card: inset 0 0 0 1px color-mix(
        in srgb,
        var(--en-color-primary) 18%,
        transparent
      ), 0 8px 18px rgba(0,0,0,.18);
    }

    :host([selected]) ic-card-container {
      --ic-border-card: 1px solid color-mix(
        in srgb,
        var(--en-color-primary) 55%,
        transparent
      );
      --ic-shadow-card:
        inset 0 0 0 1px color-mix(
          in srgb,
          var(--en-color-primary) 35%,
          transparent
        ),
        0 8px 18px rgba(0,0,0,.2);
    }

    ic-card-container:focus-visible {
      outline: var(--ic-focus-ring);
      outline-offset: 3px;
    }

    .circuit {
      display: grid;
      grid-template-columns: minmax(0, 1fr) 64px;
      grid-template-areas:
        "information icon";
      column-gap: 14px;
      height: 100%;
      min-width: 0;
      align-items: center;
    }

    .information {
      grid-area: information;
      display: flex;
      min-width: 0;
      flex-direction: column;
      justify-content: center;
      gap: 8px;
    }

    .identity {
      display: flex;
      min-width: 0;
      align-items: center;
      gap: 8px;
    }

    .status {
      width: 8px;
      height: 8px;
      flex: 0 0 auto;
      border-radius: 50%;
      background: var(--secondary-text-color);
      opacity: 0.55;
    }

    .status.active {
      background: var(--en-color-success);
      opacity: 1;
      box-shadow: 0 0 10px color-mix(
        in srgb,
        var(--en-color-success) 65%,
        transparent
      );
    }

    .status.warning {
      background: var(--en-color-accent);
      opacity: 1;
      box-shadow: 0 0 10px color-mix(
        in srgb,
        var(--en-color-accent) 60%,
        transparent
      );
    }

    .name {
      min-width: 0;
      overflow: hidden;
      color: var(--en-surface-text-primary, var(--en-heading-primary, var(--primary-text-color)));
      font-size: var(--en-title-md-size, 18px);
      font-weight: var(--en-title-md-weight, 600);
      line-height: var(--en-title-md-line-height, 1.25);
      letter-spacing: var(--en-title-md-letter-spacing, -0.1px);
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    ic-metric-value {
      --metric-value-size: var(--circuit-value-size, 32px);
      --metric-value-letter-spacing: -1px;
      --metric-unit-size: var(--circuit-unit-size, 14px);
      --metric-value-color: var(--en-surface-text-primary, var(--primary-text-color));
      --metric-unit-color: var(--en-surface-text-secondary, var(--secondary-text-color));
    }

    .icon-area {
      grid-area: icon;
      display: grid;
      width: 64px;
      height: 64px;
      place-items: center;
      color: var(--en-surface-icon-primary, var(--primary-text-color));
      opacity: var(--circuit-icon-opacity, 0.48);
    }

    .icon-area.active {
      opacity: var(--circuit-active-icon-opacity, 0.62);
    }

    .icon {
      --mdc-icon-size: var(--circuit-icon-size, 46px);
    }
  `;
	}
	openSettings() {
		this.circuit && (console.debug("[ActiveCircuits] circuit clicked", this.circuit.config.id), this.dispatchEvent(new CustomEvent("circuit-selected", {
			detail: { circuit: this.circuit },
			bubbles: !0,
			composed: !0
		})));
	}
	handleKeydown(e) {
		e.key !== "Enter" && e.key !== " " || (e.preventDefault(), this.openSettings());
	}
	render() {
		let e = this.circuit;
		if (!e) return null;
		let t = e.stateStatus === "valid" ? e.active ? "active" : "idle" : "warning";
		return T`
      <ic-card-container
        role="button"
        tabindex="0"
        aria-label=${[
			e.config.name,
			e.value,
			e.unit
		].filter(Boolean).join(" ")}
        @click=${this.openSettings}
        @keydown=${this.handleKeydown}
      >
        <article class="circuit">
          <div class="information">
            <div class="identity">
              <span
                class="status ${t}"
                aria-hidden="true"
              ></span>
              <span class="name">${e.config.name}</span>
            </div>
            <ic-metric-value
              .value=${e.value}
              .unit=${e.unit}
              .status=${e.stateStatus}
            ></ic-metric-value>
          </div>
          <div
            class="icon-area ${t === "active" ? "active" : ""}"
          >
            <ha-icon
              class="icon"
              .icon=${e.config.icon ?? "mdi:electric-switch"}
              aria-hidden="true"
            ></ha-icon>
          </div>
        </article>
      </ic-card-container>
    `;
	}
};
customElements.define("ic-circuit-card", Pi);
//#endregion
//#region src/helpers/power-entity.ts
var Fi = /* @__PURE__ */ new Set([
	"w",
	"kw",
	"mw"
]);
function Ii(e) {
	let t = String(e ?? "").trim().replace(/\s+/g, "").toLowerCase();
	if (Fi.has(t)) return t === "mw" ? "MW" : t === "kw" ? "kW" : "W";
}
function Li(e, t) {
	if (e.split(".", 1)[0].toLowerCase() !== "sensor") return !1;
	let n = String(t?.attributes?.device_class ?? "").trim().toLowerCase(), r = String(t?.attributes?.unit_of_measurement ?? "").trim(), i = Ii(r);
	return r ? !!i : n === "power";
}
//#endregion
//#region src/components/common/info-panel.ts
var Ri = class extends j {
	constructor(...e) {
		super(...e), this.items = [];
	}
	static {
		this.properties = { items: { attribute: !1 } };
	}
	static {
		this.styles = h`
    :host { display:block; }
    .panel {
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(120px,1fr));
      gap:12px;
      padding:12px;
      border:var(--ic-border-control,var(--en-border));
      border-radius:var(--en-panel-radius,18px);
      background:var(--ic-control-background,var(--en-surface-control));
    }
    .item { display:grid; min-width:0; gap:4px; }
    span { color:var(--en-text-secondary,var(--secondary-text-color)); font-size:13px; font-weight:400; line-height:1.4; }
    strong { overflow:hidden; color:var(--en-text-primary,var(--primary-text-color)); font-size:14px; font-weight:600; line-height:1.4; text-overflow:ellipsis; white-space:nowrap; }
    @media(max-width:520px) { .panel { grid-template-columns:1fr; } }
  `;
	}
	render() {
		return T`<div class="panel">${this.items.map((e) => T`
      <div class="item"><span>${e.label}</span><strong>${e.value || "--"}</strong></div>
    `)}</div>`;
	}
};
customElements.define("ic-info-panel", Ri);
//#endregion
//#region src/components/common/icon-picker.ts
var zi = [
	"mdi:stove",
	"mdi:air-conditioner",
	"mdi:water-boiler",
	"mdi:fridge",
	"mdi:washing-machine",
	"mdi:power-plug",
	"mdi:flash"
], Bi = class extends j {
	constructor(...e) {
		super(...e), this.value = "", this.search = "";
	}
	static {
		this.properties = {
			value: { type: String },
			hass: { attribute: !1 }
		};
	}
	static {
		this.styles = h`
    :host {
      display:block;
      width:100%;
      min-width:0;
    }
    .list { min-height:0; padding-right:6px; }
    .grid {
      display:grid;
      grid-template-columns:repeat(auto-fill,minmax(88px,1fr));
      gap:6px;
      padding-bottom:12px;
    }
    .icon-option {
      display:grid;
      min-width:0;
      height:56px;
      box-sizing:border-box;
      place-items:center;
      gap:3px;
      padding:6px;
      border:var(--ic-border-control,var(--en-border));
      border-radius:var(--ic-radius-control);
      background:var(--ic-control-background,var(--en-surface-control));
      color:var(--en-text-primary,var(--primary-text-color));
      cursor:pointer;
      font:inherit;
    }
    .icon-option:hover {
      background:var(--ic-action-hover-background,rgba(127,127,127,.14));
    }
    .icon-option.selected {
      border:var(--en-selection-border,var(--ic-border-control,var(--en-border)));
      background:var(--en-selection-surface,var(--ic-control-background));
    }
    .icon-option:focus-visible {
      outline:var(--ic-focus-ring,2px solid var(--en-color-focus));
      outline-offset:2px;
    }
    .icon-option ha-icon {
      width:22px;
      height:22px;
      --mdc-icon-size:22px;
    }
    .icon-name {
      width:100%;
      min-width:0;
      overflow:hidden;
      color:var(--en-text-secondary,var(--secondary-text-color));
      font-size:11px;
      line-height:1;
      text-align:center;
      text-overflow:ellipsis;
      white-space:nowrap;
    }
    .empty {
      padding:12px;
      color:var(--en-text-secondary,var(--secondary-text-color));
      font-size:13px;
    }
  `;
	}
	get icons() {
		let e = this.search.trim().toLowerCase();
		if (!e) return [...zi];
		let t = e.startsWith("mdi:") ? e : `mdi:${e.replace(/\s+/g, "-")}`;
		return Array.from(/* @__PURE__ */ new Set([t, ...zi.filter((t) => t.includes(e))]));
	}
	select(e) {
		this.value = e, this.dispatchEvent(new CustomEvent("icon-change", {
			detail: { icon: e },
			bubbles: !0,
			composed: !0
		}));
	}
	render() {
		let e = this.icons;
		return T`
      <ic-inline-picker-panel open .maxHeight=${260}>
        <ic-search-field slot="search"
          .value=${this.search}
          placeholder="Search icons..."
          variant="compact"
          @search-input=${(e) => {
			this.search = e.detail.value, this.requestUpdate();
		}}
        ></ic-search-field>
        <ic-scroll-area slot="content" class="list">
          <div class="grid">
            ${e.length ? e.map((e) => T`
              <button class="icon-option ${e === this.value ? "selected" : ""}"
                type="button" title=${e} aria-pressed=${e === this.value}
                @click=${() => this.select(e)}>
                <ha-icon .icon=${e}></ha-icon>
                <span class="icon-name">${e}</span>
              </button>
            `) : T`<div class="empty">No matching icons</div>`}
          </div>
        </ic-scroll-area>
      </ic-inline-picker-panel>
    `;
	}
};
customElements.define("ic-icon-picker", Bi);
//#endregion
//#region src/components/circuit/circuit-settings-modal.ts
var Vi = class extends j {
	constructor(...e) {
		super(...e), this.open = !1, this.mode = "edit", this.entityPickerExpanded = !1, this.iconPickerExpanded = !1, this.saving = !1, this.deleting = !1;
	}
	static {
		this.properties = {
			open: { type: Boolean },
			hass: { attribute: !1 },
			circuit: { attribute: !1 },
			mode: { type: String }
		};
	}
	static {
		this.styles = [h`
    :host {
      display: contents;
    }

    ic-app-dialog {
      --app-dialog-width: 500px;
    }

    .form {
      display: grid;
    }

    .actions {
      display: flex;
      gap: 8px;
    }

    .entity-state { color:var(--en-text-secondary,var(--secondary-text-color)); font-size:var(--en-helper-font-size,13px); white-space:nowrap; }

    button {
      padding: 9px 12px;
      border:var(--ic-border-control,var(--en-border));
      border-radius: var(--ic-radius-button);
      background:var(--ic-action-background,var(--en-surface-control));
      color:var(--en-text-primary,var(--primary-text-color));
      cursor: pointer;
    }

    .actions { justify-content:flex-end; padding-top:4px; }
    .delete-action { margin-inline-end:auto; }
    .inline-field-group { display:grid; min-width:0; }
    .entity-error {
      margin: 6px 0 0;
      color: var(--error-color, #ff3b30);
      font-size: var(--en-helper-font-size, 13px);
      font-weight: 400;
      line-height: 1.3;
    }
  `, M];
	}
	willUpdate(e) {
		this.circuit && (e.has("open") && this.open || !this.draft || this.draft.id !== this.circuit.id) && (this.draft = { ...this.circuit }, this.entityPickerExpanded = !1, this.iconPickerExpanded = !1, this.saving = !1, this.deleting = !1);
	}
	close() {
		this.draft = this.circuit ? { ...this.circuit } : void 0, this.entityPickerExpanded = !1, this.iconPickerExpanded = !1, this.saving = !1, this.deleting = !1, this.dispatchEvent(new CustomEvent("circuit-settings-close", {
			bubbles: !0,
			composed: !0
		}));
	}
	updateField(e, t) {
		this.draft && (this.draft = {
			...this.draft,
			[e]: t
		}, this.requestUpdate());
	}
	selectEntity(e) {
		e.stopPropagation(), this.updateField("entity", e.detail.entityId), this.entityPickerExpanded = !1;
	}
	selectIcon(e) {
		e.stopPropagation(), this.updateField("icon", e.detail.icon), this.iconPickerExpanded = !1;
	}
	handleDialogClose(e) {
		if (e.stopPropagation(), e.detail.reason === "escape" && this.entityPickerExpanded) {
			this.entityPickerExpanded = !1, this.requestUpdate();
			return;
		}
		if (e.detail.reason === "escape" && this.iconPickerExpanded) {
			this.iconPickerExpanded = !1, this.requestUpdate();
			return;
		}
		this.close();
	}
	renderEntityTrigger() {
		let e = this.draft?.entity.trim() ?? "", t = e ? this.hass?.states[e] : void 0, n = String(t?.attributes.friendly_name ?? (e || "Select a sensor")), r = String(t?.attributes.unit_of_measurement ?? ""), i = t ? `${t.state}${r ? ` ${r}` : ""}` : "--", a = this.entityValidationMessage;
		return T`<div class="inline-field-group entity-field-group"
      @click=${(e) => e.stopPropagation()}>
      <ic-field label="Sensor" variant="selectable" .value=${n}
        .invalid=${!!a}
        aria-expanded=${this.entityPickerExpanded}
        @field-activate=${() => {
			this.entityPickerExpanded = !this.entityPickerExpanded, this.iconPickerExpanded = !1, this.requestUpdate();
		}}
      >
        <span slot="secondary" title=${e || "No entity selected"}>
          ${e ? L(e, "readonlyField") : "No entity selected"}
        </span>
        <span slot="trailing" class="entity-state">${i}</span>
      </ic-field>
      ${this.entityPickerExpanded ? T`
        <ic-entity-selector
          variant="inline"
          .hass=${this.hass}
          .value=${this.draft?.entity ?? ""}
          .filter=${{
			domains: ["sensor"],
			predicate: (e) => Li(e, this.hass?.states[e])
		}}
          .preferredDeviceClasses=${["power"]}
          .preferredUnits=${[
			"W",
			"kW",
			"MW"
		]}
          @entity-selected=${this.selectEntity}
        ></ic-entity-selector>
      ` : null}
      ${a ? T`<div class="entity-error" role="alert">${a}</div>` : null}
    </div>`;
	}
	get entityValidationMessage() {
		let e = this.draft?.entity.trim() ?? "";
		return e ? Li(e, this.hass?.states[e]) ? "" : "This entity is not a real-time power sensor. Select a sensor using W, kW, or MW." : "";
	}
	get hasValidPowerEntity() {
		let e = this.draft?.entity.trim() ?? "";
		return !!e && Li(e, this.hass?.states[e]);
	}
	get canSave() {
		if (!this.draft || this.saving || this.deleting) return !1;
		let e = this.draft.name.trim(), t = this.draft.entity.trim();
		return !e || !t || !this.hasValidPowerEntity ? !1 : !this.circuit || e !== this.circuit.name.trim() || t !== this.circuit.entity.trim() || (this.draft.icon?.trim() || "") !== (this.circuit.icon?.trim() || "");
	}
	renderEntityStatus() {
		let e = this.draft?.entity.trim() ?? "", t = e ? this.hass?.states[e] : void 0, n = t?.state ?? "", r = e ? t ? n === "unavailable" ? "Unavailable" : n === "unknown" ? "Unknown" : "Online" : "Disabled" : "Unknown", i = String(t?.attributes.unit_of_measurement ?? ""), a = r === "Online" ? (() => {
			if (!this.draft) return `${n}${i ? ` ${i}` : ""}`;
			let e = xi(this.hass, this.draft);
			return `${e.value}${e.unit ? ` ${e.unit}` : ""}`;
		})() : "--", o = Date.parse(t?.last_updated ?? t?.last_changed ?? ""), s = Number.isFinite(o) ? Math.max(0, Math.floor((Date.now() - o) / 1e3)) : void 0, c = s === void 0 ? "--" : s < 60 ? `Updated ${s}s ago` : s < 3600 ? `Updated ${Math.floor(s / 60)}m ago` : `Updated ${Math.floor(s / 3600)}h ago`;
		return T`<ic-info-panel aria-label="Entity status" .items=${[
			{
				label: "Entity Status",
				value: r
			},
			{
				label: "Current State",
				value: a
			},
			{
				label: "Last Updated",
				value: c
			}
		]}></ic-info-panel>`;
	}
	save() {
		if (!this.draft || this.saving) return;
		let e = {
			...this.draft,
			name: this.draft.name.trim(),
			entity: this.draft.entity.trim(),
			icon: this.draft.icon?.trim() || void 0,
			category: this.draft.category?.trim() || void 0
		};
		if (!e.name || !e.entity || !this.hasValidPowerEntity) {
			this.requestUpdate();
			return;
		}
		this.saving = !0, this.requestUpdate();
		let t = {
			circuit: e,
			complete: () => {
				this.saving = !1, this.close();
			},
			fail: () => {
				this.saving = !1, this.requestUpdate();
			}
		};
		this.dispatchEvent(new CustomEvent("circuit-config-changed", {
			detail: t,
			bubbles: !0,
			composed: !0
		}));
	}
	deleteCircuit() {
		if (this.mode !== "edit" || !this.circuit || this.saving || this.deleting) return;
		this.deleting = !0, this.requestUpdate();
		let e = {
			circuitId: this.circuit.id,
			complete: () => {
				this.deleting = !1, this.close();
			},
			fail: () => {
				this.deleting = !1, this.requestUpdate();
			}
		};
		this.dispatchEvent(new CustomEvent("circuit-delete-request", {
			detail: e,
			bubbles: !0,
			composed: !0
		}));
	}
	render() {
		return this.draft ? T`
      <ic-app-dialog
        .open=${this.open}
        .title=${this.mode === "create" ? "Add Circuit" : "Edit Circuit"}
        @dialog-close=${this.handleDialogClose}
        @click=${() => {
			!this.iconPickerExpanded && !this.entityPickerExpanded || (this.iconPickerExpanded = !1, this.entityPickerExpanded = !1, this.requestUpdate());
		}}
      >
        <span slot="header">${this.mode === "create" ? "Add Circuit" : "Edit Circuit"}</span>

        <div class="form">
          <ic-field label="Circuit Name" .value=${this.draft.name}
            @field-input=${(e) => this.updateField("name", e.detail.value)}></ic-field>

          ${this.renderEntityTrigger()}

          <div class="inline-field-group icon-field-group"
            @click=${(e) => e.stopPropagation()}>
            <ic-field label="Icon" variant="selectable"
              .value=${this.draft.icon || "Select an icon"}
              .rawValue=${this.draft.icon || "Select an icon"}
              aria-expanded=${this.iconPickerExpanded}
              @field-activate=${() => {
			this.iconPickerExpanded = !this.iconPickerExpanded, this.entityPickerExpanded = !1, this.requestUpdate();
		}}>
              <ha-icon slot="leading"
                .icon=${this.draft.icon || "mdi:shape-outline"}></ha-icon>
            </ic-field>
            ${this.iconPickerExpanded ? T`
              <ic-icon-picker
                .hass=${this.hass}
                .value=${this.draft.icon ?? ""}
                @icon-change=${this.selectIcon}
              ></ic-icon-picker>
            ` : null}
          </div>

          ${this.renderEntityStatus()}

          <div class="actions">
            ${this.mode === "edit" ? T`
              <ic-button class="delete-action" variant="destructive"
                @click=${this.deleteCircuit}
                .disabled=${this.saving || this.deleting}>
                ${this.deleting ? "Deleting…" : "Delete"}
              </ic-button>
            ` : null}
            <ic-button @click=${this.close} .disabled=${this.deleting}>Cancel</ic-button>
            <ic-button variant="primary" @click=${this.save}
              .disabled=${!this.canSave} .loading=${this.saving}>
              ${this.mode === "create" ? "Add Circuit" : "Save"}
            </ic-button>
          </div>
        </div>
      </ic-app-dialog>
    ` : null;
	}
};
customElements.define("ic-circuit-settings-modal", Vi);
//#endregion
//#region src/components/energy-circuit-section.ts
function Hi() {
	let e = globalThis.crypto?.randomUUID?.();
	return e ? `circuit-${e}` : [
		"circuit",
		Date.now().toString(36),
		Math.random().toString(36).slice(2, 10)
	].join("-");
}
var Ui = class extends j {
	constructor(...e) {
		super(...e), this.config = {
			title: "Active Circuits",
			circuits: [...bi]
		}, this.repository = new Mi(), this.coordinator = new Oi(this.repository), this.baseCircuits = [], this.resolvedCircuits = [], this.resolutionVersion = 0, this.visibleCount = 4, this.trackCardWidth = 0, this.trackStep = 0, this.settledIndex = 0, this.canScrollPrevious = !1, this.canScrollNext = !1, this.dragStartX = 0, this.dragStartScrollLeft = 0, this.dragged = !1, this.builderOpen = !1, this.circuitDialogOpen = !1;
	}
	static {
		this.properties = { config: { attribute: !1 } };
	}
	set hass(e) {
		this._hass = e, this.requestUpdate();
	}
	get hass() {
		return this._hass;
	}
	setConfig(e) {
		if (!e || typeof e != "object") throw Error("Invalid Energy Circuit Section configuration");
		let t = this.normalizeCircuits(e.circuits);
		this.baseCircuits = t, this.resolvedCircuits = t, this.config = {
			...e,
			title: e.title?.trim() || "Active Circuits",
			circuits: t
		}, this.resolveUserConfig();
	}
	getGridOptions() {
		return { columns: "full" };
	}
	static {
		this.styles = [ir, h`
    :host {
      display: block;
      width: 100%;
      min-width: 0;
      color: var(--primary-text-color);
      container-type: inline-size;
    }

    .carousel-shell {
      position: relative;
      width: 100%;
      max-width: 100%;
      min-width: 0;
      box-sizing: border-box;
    }

    .carousel-viewport {
      --circuit-shadow-gutter: 20px;
      position: relative;
      width: calc(
        100% + var(--circuit-shadow-gutter) + var(--circuit-shadow-gutter)
      );
      max-width: none;
      min-width: 0;
      box-sizing: border-box;
      overflow-x: hidden;
      overflow-y: hidden;
      margin:
        calc(0px - var(--circuit-shadow-gutter));
      padding:
        var(--circuit-shadow-gutter);
      cursor: grab;
      touch-action: pan-x;
      overscroll-behavior-inline: contain;
      scroll-behavior: smooth;
      scroll-snap-type: x mandatory;
      scroll-padding-inline: var(--circuit-shadow-gutter);
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    .carousel-viewport::-webkit-scrollbar {
      display: none;
    }

    .carousel-viewport.dragging {
      cursor: grabbing;
      scroll-behavior: auto;
      user-select: none;
    }

    .carousel-shell.static-grid .carousel-viewport {
      cursor: default;
      touch-action: auto;
      scroll-snap-type: none;
    }

    .carousel-shell.static-grid .track {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(var(--static-circuit-columns, 4), minmax(0, 1fr));
    }

    .carousel-shell.static-grid .carousel-item {
      width: auto;
      min-width: 0;
      flex: none;
      scroll-snap-align: none;
    }

    .track {
      display: flex;
      width: max-content;
      min-width: 0;
      gap: var(--circuit-grid-gap, 16px);
    }

    .carousel-item {
      flex: 0 0 var(--track-card-width, calc((100% - 48px) / 4));
      width: var(--track-card-width, calc((100% - 48px) / 4));
      min-width: 0;
      scroll-snap-align: start;
      scroll-snap-stop: always;
    }

    .carousel-item.outside-page {
      visibility: hidden;
      pointer-events: none;
    }

    .carousel-viewport.interacting .carousel-item.outside-page {
      visibility: visible;
      pointer-events: auto;
    }

    .carousel-item > * {
      width:100%;
      min-width:0;
    }

    ic-circuit-card {
      --circuit-card-height: 150px;
    }

    .navigation {
      position: absolute;
      z-index: 20;
      top: 50%;
      display: grid;
      width: 38px;
      height: 38px;
      place-items: center;
      border: 1px solid rgba(255, 255, 255, 0.18);
      border-radius: 50%;
      background: rgba(30, 30, 30, 0.2);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.24);
      transform: translateY(-50%);
      padding: 0;
      color: var(--primary-text-color);
      cursor: pointer;
      opacity: 0;
      pointer-events: none;
      transition: opacity 300ms ease;
    }

    :host(:hover) .navigation {
      opacity: 1;
      pointer-events: auto;
    }

    .navigation.left {
      left: 16px;
    }

    .navigation.right {
      right: 16px;
    }

    .navigation:hover {
      background: rgba(255, 255, 255, 0.3);
    }

    .navigation ha-icon {
      width: 20px;
      height: 20px;
      --mdc-icon-size: 20px;
      background: transparent;
      transform: translateY(-2px);
    }

    @media (hover: none) {
      .navigation {
        opacity: 1;
        pointer-events: auto;
      }
    }

    ic-circuit-add-card {
      --circuit-card-height: 150px;
    }

    @container (max-width: 1200px) {
      .carousel-shell.static-grid .track {
        --static-circuit-columns: 3;
      }
    }

    @container (max-width: 599px) {
      .carousel-shell.static-grid .track {
        --static-circuit-columns: 1;
      }
      .track {
        --circuit-grid-gap: 10px;
      }
    }

  `];
	}
	firstUpdated() {
		this.resizeObserver = new ResizeObserver((e) => {
			let t = e[0]?.contentRect.width ?? 0, n = t > 1200 ? 4 : t > 599 ? 3 : 1, r = t <= 599 ? 10 : 16, i = (t - r * (n - 1)) / n, a = Math.max(0, i + r), o = n !== this.visibleCount, s = Math.abs(a - this.trackStep) > .5;
			!o && !s || (this.visibleCount = n, this.trackCardWidth = Math.max(0, i), this.trackStep = a, this.requestUpdate(), this.updateComplete.then(() => this.syncNavigationState()));
		}), this.resizeObserver.observe(this);
	}
	disconnectedCallback() {
		this.resizeObserver?.disconnect(), this.scrollSettleTimer !== void 0 && window.clearTimeout(this.scrollSettleTimer), super.disconnectedCallback();
	}
	normalizeCircuits(e) {
		return (e ?? [...bi]).filter((e) => !!(e?.id && e.name && e.entity)).map((e, t) => ({
			...e,
			enabled: e.enabled ?? !0,
			order: e.order ?? t
		}));
	}
	get viewport() {
		return this.renderRoot.querySelector(".carousel-viewport");
	}
	scrollByCard(e) {
		let t = this.viewport;
		if (!t || !this.trackStep) return;
		let n = this.resolvedCircuits.filter((e) => e.enabled !== !1).length + 1, r = Math.max(0, n - this.visibleCount), i = Math.round(t.scrollLeft / this.trackStep), a = Math.max(0, Math.min(r, i + e));
		t.classList.add("interacting"), t.scrollTo({
			left: a * this.trackStep,
			behavior: "smooth"
		});
	}
	scheduleScrollSettle() {
		let e = this.viewport;
		!e || !this.trackStep || (e.classList.add("interacting"), this.scrollSettleTimer !== void 0 && window.clearTimeout(this.scrollSettleTimer), this.scrollSettleTimer = window.setTimeout(() => {
			this.scrollSettleTimer = void 0;
			let t = this.resolvedCircuits.filter((e) => e.enabled !== !1).length + 1, n = Math.max(0, t - this.visibleCount), r = Math.max(0, Math.min(n, Math.round(e.scrollLeft / this.trackStep)));
			this.settledIndex = r, e.classList.remove("interacting"), this.syncNavigationState(), this.requestUpdate();
		}, 140));
	}
	syncNavigationState() {
		let e = this.viewport;
		if (!e) return;
		let t = e.scrollLeft > 1, n = e.scrollLeft + e.clientWidth < e.scrollWidth - 1;
		t === this.canScrollPrevious && n === this.canScrollNext || (this.canScrollPrevious = t, this.canScrollNext = n, this.requestUpdate());
	}
	handlePointerDown(e) {
		if (e.button !== 0 || !e.isPrimary) return;
		let t = e.currentTarget;
		this.dragPointerId = e.pointerId, this.dragStartX = e.clientX, this.dragStartScrollLeft = t.scrollLeft, this.dragged = !1;
	}
	handlePointerMove(e) {
		if (this.dragPointerId !== e.pointerId) return;
		let t = e.currentTarget, n = e.clientX - this.dragStartX;
		!this.dragged && Math.abs(n) <= 4 || (this.dragged || (this.dragged = !0, t.setPointerCapture(e.pointerId), t.classList.add("dragging", "interacting")), t.scrollLeft = this.dragStartScrollLeft - n);
	}
	handlePointerEnd(e) {
		if (this.dragPointerId !== e.pointerId) return;
		let t = e.currentTarget;
		t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), t.classList.remove("dragging"), this.dragPointerId = void 0, this.syncNavigationState(), this.scheduleScrollSettle();
	}
	preventClickAfterDrag(e) {
		this.dragged &&= (e.preventDefault(), e.stopPropagation(), !1);
	}
	openBuilder() {
		this.builderDraft = {
			id: Hi(),
			name: "",
			entity: "",
			icon: "mdi:electric-switch",
			enabled: !0,
			order: this.resolvedCircuits.length
		}, this.builderOpen = !0, this.requestUpdate();
	}
	openCircuitSettings(e) {
		e.stopPropagation();
		let t = e.detail.circuit.config;
		this.selectedCircuit = { ...t }, this.circuitDialogOpen = !0, console.debug("[CircuitSettings] dialog opened", t.id), this.requestUpdate();
	}
	closeCircuitSettings() {
		this.circuitDialogOpen = !1, this.selectedCircuit = void 0, this.requestUpdate();
	}
	async resolveUserConfig() {
		let e = ++this.resolutionVersion, t = await this.coordinator.resolve(this.baseCircuits);
		e === this.resolutionVersion && (this.resolvedCircuits = t, this.requestUpdate(), await this.updateComplete, this.syncNavigationState());
	}
	async handleCircuitConfigChanged(e) {
		try {
			let t = await this.coordinator.update(this.baseCircuits, e.detail.circuit);
			this.resolvedCircuits = t, this.config = {
				...this.config,
				circuits: t
			}, this.builderOpen = !1, this.requestUpdate(), await this.updateComplete, this.syncNavigationState(), e.detail.complete?.(), this.dispatchEvent(new CustomEvent("config-changed", {
				detail: { config: this.config },
				bubbles: !0,
				composed: !0
			}));
		} catch (t) {
			e.detail.fail?.(), console.error("[energy-circuit-section] Unable to save circuit", t);
		}
	}
	async handleCircuitDeleteRequest(e) {
		try {
			let t = e.detail.circuitId, n = await this.coordinator.remove(this.baseCircuits, t);
			this.baseCircuits = n, this.resolvedCircuits = n, this.config = {
				...this.config,
				circuits: n
			}, this.requestUpdate(), await this.updateComplete, this.syncNavigationState(), e.detail.complete?.(), this.dispatchEvent(new CustomEvent("config-changed", {
				detail: { config: this.config },
				bubbles: !0,
				composed: !0
			}));
		} catch (t) {
			e.detail.fail?.(), console.error("[energy-circuit-section] Unable to delete circuit", t);
		}
	}
	render() {
		let e = wi(this._hass, this.resolvedCircuits), t = Math.min(this.settledIndex, Math.max(0, e.length + 1 - this.visibleCount)), n = e.length + 1, r = n > this.visibleCount, i = Math.min(n, this.visibleCount);
		return T`
      <ic-section-header
        .title=${this.config.title ?? "Active Circuits"}
        .showActions=${!1}
      ></ic-section-header>

      <div class="carousel-shell ${r ? "" : "static-grid"}">
        <div class="carousel-viewport active-circuits-viewport"
            @scroll=${r ? () => {
			this.syncNavigationState(), this.scheduleScrollSettle();
		} : void 0}
            @pointerdown=${r ? this.handlePointerDown : void 0}
            @pointermove=${r ? this.handlePointerMove : void 0}
            @pointerup=${r ? this.handlePointerEnd : void 0}
            @pointercancel=${r ? this.handlePointerEnd : void 0}
            @click=${r ? this.preventClickAfterDrag : void 0}>
          <div
            class="track active-circuits-track"
            style=${r && this.trackCardWidth > 0 ? `--track-card-width:${this.trackCardWidth}px` : `--static-circuit-columns:${i}`}
          >
              ${e.map((e, n) => T`
                <div class="carousel-item ${r && (n < t || n >= t + this.visibleCount) ? "outside-page" : ""}">
                  <ic-circuit-card
                    .circuit=${e}
                    .hass=${this._hass}
                    .selected=${this.circuitDialogOpen && this.selectedCircuit?.id === e.config.id}
                    @circuit-selected=${this.openCircuitSettings}
                    @circuit-config-changed=${this.handleCircuitConfigChanged}
                    @circuit-delete-request=${this.handleCircuitDeleteRequest}
                  ></ic-circuit-card>
                </div>
              `)}
              <div class="carousel-item ${r && (e.length < t || e.length >= t + this.visibleCount) ? "outside-page" : ""}">
                <ic-circuit-add-card
                  @add-circuit-request=${this.openBuilder}
                ></ic-circuit-add-card>
              </div>
          </div>
        </div>
          ${r && this.canScrollPrevious ? T`
                <button class="navigation left" type="button"
                  aria-label="Previous circuits"
                  @click=${(e) => {
			e.stopPropagation(), this.scrollByCard(-1);
		}}>
                  <ha-icon icon="mdi:chevron-left"></ha-icon>
                </button>
              ` : null}
          ${r && this.canScrollNext ? T`
                <button class="navigation right" type="button"
                  aria-label="Next circuits"
                  @click=${(e) => {
			e.stopPropagation(), this.scrollByCard(1);
		}}>
                  <ha-icon icon="mdi:chevron-right"></ha-icon>
                </button>
              ` : null}
      </div>

      <ic-circuit-settings-modal
        .open=${this.circuitDialogOpen}
        .hass=${this._hass}
        .circuit=${this.selectedCircuit}
        mode="edit"
        @circuit-settings-close=${this.closeCircuitSettings}
        @circuit-config-changed=${this.handleCircuitConfigChanged}
        @circuit-delete-request=${this.handleCircuitDeleteRequest}
      ></ic-circuit-settings-modal>

      <ic-circuit-settings-modal
        .open=${this.builderOpen}
        .hass=${this._hass}
        .circuit=${this.builderDraft}
        mode="create"
        @circuit-settings-close=${() => {
			this.builderOpen = !1, this.requestUpdate();
		}}
        @circuit-config-changed=${this.handleCircuitConfigChanged}
      ></ic-circuit-settings-modal>
    `;
	}
};
customElements.define("energy-circuit-section", Ui);
//#endregion
//#region src/helpers/energy-flow-layout.ts
function Wi(e, t, n, r) {
	let i = /* @__PURE__ */ new Map();
	return e.forEach((a, o) => {
		let s = e.length <= 1 ? .5 : o / (e.length - 1);
		i.set(a.id, r(t + (n - t) * s));
	}), i;
}
function Gi(e) {
	return e === "grid" ? "var(--en-color-primary)" : e === "solar" ? "var(--en-color-accent)" : e === "battery" ? "var(--en-color-success)" : e === "home" ? "var(--en-color-primary-hover)" : "var(--en-text-secondary)";
}
function Ki(e, t) {
	let n = t < 620, r = n ? 760 : 520, i = /* @__PURE__ */ new Map(), a = e.find((e) => e.type === "home"), o = e.filter((e) => e.type === "circuit"), s = e.filter((e) => e.type !== "home" && e.type !== "circuit");
	if (n) {
		s.forEach((e, n) => {
			i.set(e.id, {
				x: t / 2,
				y: 82 + n * 105
			});
		});
		let e = 110 + s.length * 105;
		a && i.set(a.id, {
			x: t / 2,
			y: e
		}), o.forEach((n, r) => {
			i.set(n.id, {
				x: t / 2,
				y: e + 130 + r * 88
			});
		}), r = Math.max(760, e + 130 + Math.max(0, o.length - 1) * 88 + 70);
	} else {
		a && i.set(a.id, {
			x: t / 2,
			y: 235
		});
		let e = {
			solar: {
				x: t / 2,
				y: 72
			},
			grid: {
				x: t * .13,
				y: 235
			},
			battery: {
				x: t * .87,
				y: 235
			}
		};
		s.forEach((n, r) => {
			i.set(n.id, e[n.type] ?? {
				x: t * (.2 + r * .2),
				y: 72
			});
		}), Wi(o, t * .12, t * .88, (e) => ({
			x: e,
			y: 430
		})).forEach((e, t) => i.set(t, e));
	}
	return {
		width: t,
		height: r,
		mobile: n,
		positions: i
	};
}
function qi(e, t, n) {
	if (n) {
		let n = (e.y + t.y) / 2;
		return `M ${e.x} ${e.y} C ${e.x} ${n}, ${t.x} ${n}, ${t.x} ${t.y}`;
	}
	let r = Math.abs(t.x - e.x);
	if (Math.abs(t.y - e.y) >= r) {
		let n = (e.y + t.y) / 2;
		return `M ${e.x} ${e.y} C ${e.x} ${n}, ${t.x} ${n}, ${t.x} ${t.y}`;
	}
	let i = (e.x + t.x) / 2;
	return `M ${e.x} ${e.y} C ${i} ${e.y}, ${i} ${t.y}, ${t.x} ${t.y}`;
}
//#endregion
//#region src/helpers/energy-flow-model.ts
function Ji(e, t, n) {
	let r = new Map(e.map((e) => [e.id, e]));
	return t.flatMap((e, t) => {
		let i = r.get(e.source), a = r.get(e.target);
		if (!i || !a) return [];
		let o = e.direction === "reverse", s = o ? a : i, c = n.positions.get(o ? a.id : i.id), l = n.positions.get(o ? i.id : a.id);
		if (!c || !l) return [];
		let u = Math.abs(e.power);
		return [{
			id: `energy-flow-path-${t}`,
			edge: e,
			path: qi(c, l, n.mobile),
			color: Gi(s.type),
			width: Math.min(8, 1.5 + Math.sqrt(u) / 13),
			duration: Math.max(1.2, 5 - Math.min(3.8, u / 1200))
		}];
	});
}
//#endregion
//#region src/components/flow/energy-flow-detail-modal.ts
var Yi = class extends j {
	constructor(...e) {
		super(...e), this.open = !1;
	}
	static {
		this.properties = {
			open: { type: Boolean },
			node: { attribute: !1 }
		};
	}
	static {
		this.styles = [h`
    :host { display:contents; }
    .body { display:grid; gap:16px; padding:18px; color:var(--primary-text-color); }
    .hero { display:flex; align-items:center; gap:12px; }
    .hero ha-icon { --mdc-icon-size:34px; color:var(--en-color-primary); }
    .metrics { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; }
    .metric { padding:12px; border:1px solid var(--divider-color); border-radius:var(--ic-radius-control); }
    .metric span { color:var(--secondary-text-color); font-size:11px; }
    .metric strong { display:block; margin-top:5px; }
  `, M];
	}
	close() {
		this.dispatchEvent(new CustomEvent("energy-flow-detail-close", {
			bubbles: !0,
			composed: !0
		}));
	}
	updated() {
		this.node && (this.lastNode = this.node);
	}
	render() {
		let e = this.node ?? this.lastNode;
		if (!e) return null;
		let t = F({
			entityId: e.id,
			name: e.name,
			status: "valid",
			value: e.power,
			unit: "W"
		}, {
			autoScale: !0,
			decimals: 2
		});
		return T`<ic-app-dialog
      .open=${this.open}
      .title=${e.name}
      @dialog-close=${this.close}
    ><div class="body">
      <div class="hero"><ha-icon .icon=${e.icon}></ha-icon><strong>${e.name}</strong></div>
      <div class="metrics">
        <div class="metric"><span>Current Power</span><strong>${t.value} ${t.unit}</strong></div>
        <div class="metric"><span>Today Usage</span><strong>Not configured</strong></div>
        <div class="metric"><span>Trend</span><strong>Live</strong></div>
      </div>
    </div></ic-app-dialog>`;
	}
};
customElements.define("ic-energy-flow-detail-modal", Yi);
//#endregion
//#region src/components/flow/energy-flow-edge-layer.ts
var Xi = class extends j {
	constructor(...e) {
		super(...e), this.paths = [], this.width = 1, this.height = 1;
	}
	static {
		this.properties = {
			paths: { attribute: !1 },
			width: { type: Number },
			height: { type: Number }
		};
	}
	static {
		this.styles = h`
    :host { position:absolute; inset:0; z-index:1; display:block; pointer-events:none; }
    svg { width:100%; height:100%; overflow:visible; }
    .base { opacity:.18; }
    .flow { opacity:.58; }
    .particle { filter:drop-shadow(0 0 4px currentColor); }
  `;
	}
	render() {
		return E`<svg viewBox=${`0 0 ${this.width} ${this.height}`} preserveAspectRatio="none">
      ${this.paths.map((e) => E`
        <path class="base" d=${e.path} fill="none" stroke=${e.color} stroke-width=${e.width + 3} stroke-linecap="round"></path>
        <path class="flow" d=${e.path} fill="none" stroke=${e.color} stroke-width=${e.width} stroke-linecap="round"></path>
        ${Math.abs(e.edge.power) > 0 ? E`
          <circle class="particle" r=${Math.max(3, e.width / 1.8)} fill=${e.color}>
            <animateMotion
              dur=${`${e.duration}s`}
              repeatCount="indefinite"
              path=${e.path}
            ></animateMotion>
          </circle>` : null}
      `)}
    </svg>`;
	}
};
customElements.define("ic-energy-flow-edge-layer", Xi);
//#endregion
//#region src/components/flow/energy-flow-node.ts
var Zi = class extends j {
	static {
		this.properties = { node: { attribute: !1 } };
	}
	static {
		this.styles = h`
    :host {
      position: absolute;
      z-index: 10;
      display: block;
      transform: translate(-50%, -50%);
    }

    button {
      display: grid;
      width: var(--flow-node-size, 100px);
      height: var(--flow-node-size, 100px);
      padding: 12px;
      box-sizing: border-box;
      place-items: center;
      align-content: center;
      gap: 3px;
      border: var(--ic-card-border, 1px solid rgba(255,255,255,.18));
      border-radius: 50%;
      background: var(--ic-card-background, rgba(255,255,255,.08));
      box-shadow:
        var(--ic-card-shadow, 0 10px 40px rgba(0,0,0,.18)),
        0 0 25px color-mix(in srgb, var(--node-color) 22%, transparent);
      backdrop-filter: var(--ic-card-backdrop-filter, blur(25px));
      -webkit-backdrop-filter: var(--ic-card-backdrop-filter, blur(25px));
      color: var(--primary-text-color);
      cursor: pointer;
      transition: transform .2s ease;
    }

    button:hover { transform: scale(1.05); }
    button:focus-visible { outline:var(--ic-focus-ring); outline-offset:3px; }
    ha-icon { color:var(--node-color); --mdc-icon-size:25px; }
    .name { max-width:100%; overflow:hidden; color:var(--en-heading-primary,var(--primary-text-color)); font-size:12px; font-weight:650; text-overflow:ellipsis; white-space:nowrap; }
    .power { font-size:13px; font-weight:750; }
    :host([node-type="home"]) { --flow-node-size:132px; }
    :host([node-type="home"]) ha-icon { --mdc-icon-size:34px; }
    :host([node-type="home"]) .power { font-size:17px; }
    :host([node-type="circuit"]) { --flow-node-size:78px; }
    :host([node-type="circuit"]) ha-icon { --mdc-icon-size:19px; }
    :host([node-type="circuit"]) .name { font-size:10px; }
    :host([node-type="circuit"]) .power { font-size:11px; }
  `;
	}
	updated() {
		this.node && this.setAttribute("node-type", this.node.type);
	}
	selectNode() {
		this.node && this.dispatchEvent(new CustomEvent("energy-flow-node-selected", {
			detail: { node: this.node },
			bubbles: !0,
			composed: !0
		}));
	}
	render() {
		let e = this.node;
		if (!e) return null;
		let t = F({
			entityId: e.id,
			name: e.name,
			status: "valid",
			value: e.power,
			unit: "W"
		}, {
			autoScale: !0,
			decimals: Math.abs(e.power) < 1e3 ? 0 : 2
		});
		return T`<button
      type="button"
      style=${`--node-color:${Gi(e.type)}`}
      aria-label=${`${e.name} ${t.value} ${t.unit}`}
      @click=${this.selectNode}
    >
      <span class="name">${e.name}</span>
      <ha-icon .icon=${e.icon}></ha-icon>
      <span class="power">${t.value} ${t.unit}</span>
    </button>`;
	}
};
customElements.define("ic-energy-flow-node", Zi);
//#endregion
//#region src/components/energy-flow-diagram.ts
var Qi = class extends j {
	constructor(...e) {
		super(...e), this.config = {
			title: "Energy Flow",
			nodes: [],
			edges: [],
			maxCircuits: 5
		}, this.circuitRepository = new Mi(), this.circuits = [], this.width = 900;
	}
	static {
		this.properties = { config: { attribute: !1 } };
	}
	set hass(e) {
		this._hass = e, this.circuits.length || this.loadCircuits(), this.requestUpdate();
	}
	get hass() {
		return this._hass;
	}
	setConfig(e) {
		if (!e || !Array.isArray(e.nodes) || !Array.isArray(e.edges)) throw Error("Energy Flow requires nodes and edges");
		this.config = {
			...e,
			title: e.title?.trim() || "Energy Flow",
			maxCircuits: Math.max(0, e.maxCircuits ?? 5)
		}, e.circuits?.length ? this.circuits = e.circuits.map((e, t) => ({
			...e,
			enabled: e.enabled ?? !0,
			order: e.order ?? t
		})) : this.loadCircuits();
	}
	getGridOptions() {
		return { columns: "full" };
	}
	static {
		this.styles = h`
    :host {
      display:block;
      width:100%;
      min-width:0;
      color:var(--primary-text-color);
      container-type:inline-size;
    }

    ic-glass-container {
      display:block;
      width:100%;
      min-width:0;
      --glass-container-height:auto;
      --glass-container-padding:18px;
    }

    .flow {
      position:relative;
      width:100%;
      min-width:0;
      height:var(--flow-height,520px);
      overflow:visible;
    }

    .more {
      position:absolute;
      z-index:12;
      right:12px;
      bottom:10px;
      padding:7px 10px;
      border:1px solid var(--divider-color);
      border-radius:999px;
      background:var(--ic-card-background,rgba(255,255,255,.08));
      color:var(--secondary-text-color);
      backdrop-filter:var(--ic-card-backdrop-filter,blur(18px));
      font-size:12px;
      cursor:pointer;
    }

    @container (max-width:619px) {
      .flow { --flow-height:760px; }
    }
  `;
	}
	firstUpdated() {
		let e = this.renderRoot.querySelector(".flow");
		e && (this.resizeObserver = new ResizeObserver((e) => {
			let t = e[0]?.contentRect.width ?? 0;
			t <= 0 || Math.abs(t - this.width) < 1 || (this.width = t, this.requestUpdate());
		}), this.resizeObserver.observe(e));
	}
	disconnectedCallback() {
		this.resizeObserver?.disconnect(), super.disconnectedCallback();
	}
	async loadCircuits() {
		let e = await this.circuitRepository.load();
		this.circuits = e ?? [], this.requestUpdate();
	}
	createCircuitFlow() {
		let e = this.config.nodes.find((e) => e.type === "home");
		if (!e || !this._hass) return {
			nodes: [],
			edges: [],
			hiddenCount: 0
		};
		let t = Si(this.circuits.filter((e) => e.enabled).map((e) => xi(this._hass, e))), n = this.config.maxCircuits ?? 5, r = t.slice(0, n);
		return {
			nodes: r.map((e) => ({
				id: `circuit:${e.config.id}`,
				type: "circuit",
				name: e.config.name,
				icon: e.config.icon ?? "mdi:electric-switch",
				power: e.power ?? 0
			})),
			edges: r.map((t) => ({
				source: e.id,
				target: `circuit:${t.config.id}`,
				power: t.power ?? 0,
				direction: "forward"
			})),
			hiddenCount: Math.max(0, t.length - r.length)
		};
	}
	selectNode(e) {
		this.selectedNode = e.detail.node, this.requestUpdate();
	}
	render() {
		let e = this.createCircuitFlow(), t = [...this.config.nodes, ...e.nodes], n = [...this.config.edges, ...e.edges], r = Ki(t, this.width), i = Ji(t, n, r);
		return T`
      <ic-section-header .title=${this.config.title ?? "Energy Flow"}>
      </ic-section-header>
      <ic-glass-container>
        <div
          class="flow"
          style=${`--flow-height:${r.height}px`}
          @energy-flow-node-selected=${this.selectNode}
        >
          <ic-energy-flow-edge-layer
            .paths=${i}
            .width=${r.width}
            .height=${r.height}
          ></ic-energy-flow-edge-layer>
          ${t.map((e) => {
			let t = r.positions.get(e.id);
			return t ? T`
              <ic-energy-flow-node
                style=${`left:${t.x}px;top:${t.y}px`}
                .node=${e}
              ></ic-energy-flow-node>` : null;
		})}
          ${e.hiddenCount > 0 ? T`
            <button
              class="more"
              type="button"
              @click=${() => this.dispatchEvent(new CustomEvent("energy-flow-more-circuits", {
			detail: { count: e.hiddenCount },
			bubbles: !0,
			composed: !0
		}))}
            >+ ${e.hiddenCount} more circuits</button>` : null}
        </div>
      </ic-glass-container>
      <ic-energy-flow-detail-modal
        .open=${!!this.selectedNode}
        .node=${this.selectedNode}
        @energy-flow-detail-close=${() => {
			this.selectedNode = void 0, this.requestUpdate();
		}}
      ></ic-energy-flow-detail-modal>
    `;
	}
};
customElements.define("energy-flow-diagram", Qi);
//#endregion
//#region src/components/energy-theme-selector.ts
var $i = class extends j {
	constructor(...e) {
		super(...e), this.config = {}, this.themeChanged = () => this.requestUpdate();
	}
	static {
		this.properties = { config: { attribute: !1 } };
	}
	static {
		this.styles = h`
    :host {
      display:inline-block;
      width:auto;
      max-width:100%;
      min-width:0;
      color:var(--ic-card-primary-text,var(--primary-text-color));
    }
    ic-segmented-control {
      --segment-font-size:16px;
      --segment-padding-inline:10.5px;
      --segment-padding-inline-end:8px;
    }
  `;
	}
	connectedCallback() {
		super.connectedCallback(), window.addEventListener("card-theme-changed", this.themeChanged);
	}
	disconnectedCallback() {
		window.removeEventListener("card-theme-changed", this.themeChanged), super.disconnectedCallback();
	}
	setConfig(e) {
		this.config = { ...e };
	}
	getCardSize() {
		return 1;
	}
	getGridOptions() {
		return {
			columns: 4,
			rows: 1
		};
	}
	select(e) {
		re(e), this.requestUpdate();
	}
	render() {
		return T`
      <ic-segmented-control
        width="fit"
        label="Card style"
        .value=${ie()}
        .options=${[
			{
				value: "glass",
				label: "G"
			},
			{
				value: "native",
				label: "D"
			},
			{
				value: "solid",
				label: "S"
			}
		]}
        @segmented-change=${(e) => this.select(e.detail.value)}
      ></ic-segmented-control>
    `;
	}
};
customElements.define("energy-theme-selector", $i), window.customCards = [...window.customCards ?? [], {
	type: "energy-theme-selector",
	name: "Energy Theme Selector",
	description: "Global appearance selector for eNecess Energy cards"
}];
//#endregion
//#region src/components/energy-settings-card.ts
var ea = class extends j {
	constructor(...e) {
		super(...e), this.config = {};
	}
	static {
		this.properties = { config: { attribute: !1 } };
	}
	static {
		this.styles = h`
    :host {
      display:block;
      width:100%;
      min-width:0;
      color:var(--en-text-primary,var(--primary-text-color));
    }
    .surface {
      padding:var(--en-space-lg,24px);
      box-sizing:border-box;
      border:var(--en-border,1px solid var(--divider-color));
      border-radius:var(--ic-radius-card);
      background:var(--en-surface-primary,var(--ha-card-background));
      box-shadow:var(--en-shadow-surface,var(--ha-card-box-shadow,none));
      backdrop-filter:var(--en-blur,none);
      -webkit-backdrop-filter:var(--en-blur,none);
    }
    h2 {
      margin:0 0 var(--en-space-xs,4px);
      color:var(--en-heading-primary,var(--primary-text-color));
      font-size:var(--en-title-md-size,18px);
      font-weight:var(--en-title-md-weight,600);
      line-height:var(--en-title-md-line-height,1.25);
      letter-spacing:var(--en-title-md-letter-spacing,-0.1px);
    }
    p {
      margin:0 0 var(--en-space-md,16px);
      color:var(--en-subtitle-secondary,var(--secondary-text-color));
      font-size:13px;
    }
  `;
	}
	setConfig(e) {
		this.config = { ...e };
	}
	getCardSize() {
		return 3;
	}
	getGridOptions() {
		return {
			columns: 6,
			rows: 3
		};
	}
	render() {
		return T`<section class="surface">
      <h2>${this.config.title ?? "Energy Settings"}</h2>
      <p>Dashboard appearance</p>
      <energy-theme-selector
        .config=${{ compact: !0 }}
      ></energy-theme-selector>
    </section>`;
	}
};
customElements.define("energy-settings-card", ea);
//#endregion
//#region src/helpers/automation-scenario-resolver.ts
var ta = {
	running: {
		status: "running",
		label: "Running",
		icon: "mdi:play-circle",
		tone: "success"
	},
	waiting: {
		status: "waiting",
		label: "Waiting",
		icon: "mdi:clock-outline",
		tone: "waiting"
	},
	scheduled: {
		status: "scheduled",
		label: "Scheduled",
		icon: "mdi:calendar-clock",
		tone: "waiting"
	},
	completed: {
		status: "completed",
		label: "Completed",
		icon: "mdi:check-circle",
		tone: "complete"
	},
	paused: {
		status: "paused",
		label: "Paused",
		icon: "mdi:pause-circle",
		tone: "paused"
	},
	blocked: {
		status: "blocked",
		label: "Blocked",
		icon: "mdi:alert-circle",
		tone: "blocked"
	},
	disabled: {
		status: "disabled",
		label: "Disabled",
		icon: "mdi:power",
		tone: "disabled"
	},
	unknown: {
		status: "unknown",
		label: "Unavailable",
		icon: "mdi:help-circle",
		tone: "disabled"
	}
};
function na(e) {
	let t = String(e ?? "").trim().toLowerCase(), n = {
		charging: "running",
		heating: "running",
		active: "running",
		idle: "waiting",
		scheduled: "scheduled",
		ready: "completed",
		complete: "completed",
		error: "blocked",
		unavailable: "unknown",
		off: "disabled"
	};
	return n[t] ? n[t] : t in ta ? t : "unknown";
}
function ra(e) {
	return ta[na(e)];
}
function ia(e) {
	let t = String(e ?? "").trim() || "Not set";
	switch (t.toLowerCase()) {
		case "solar": return {
			label: t,
			icon: "mdi:white-balance-sunny",
			tone: "solar"
		};
		case "grid": return {
			label: t,
			icon: "mdi:transmission-tower",
			tone: "grid"
		};
		case "wait": return {
			label: t,
			icon: "mdi:clock-outline",
			tone: "wait"
		};
		default: return {
			label: t,
			icon: "mdi:tune-variant",
			tone: "neutral"
		};
	}
}
function Q(e, t) {
	if (!e || !t) return "";
	let n = e.states[t]?.state?.trim();
	return n === "unknown" || n === "unavailable" ? "" : n ?? "";
}
function aa(e, t) {
	return Q(e, t).toLowerCase() === "on";
}
function oa(e, t) {
	return !!(e && t && Q(e, t));
}
function sa(e) {
	return e ? e.replace(/[_-]+/g, " ").replace(/\b\w/g, (e) => e.toUpperCase()) : "Unavailable";
}
function ca(e) {
	if (!e) return "Not available";
	let t = e.match(/^(\d{1,2}):(\d{2})/);
	if (t) return `${t[1].padStart(2, "0")}:${t[2]}`;
	let n = new Date(e);
	return Number.isNaN(n.getTime()) ? e : new Intl.DateTimeFormat(void 0, {
		hour: "2-digit",
		minute: "2-digit"
	}).format(n);
}
function la(e) {
	return !!e && !/^0{1,2}:00(?::00)?$/.test(e.trim());
}
function ua(e) {
	if (!e) return "";
	let t = new Date(e);
	return Number.isNaN(t.getTime()) ? "" : new Intl.DateTimeFormat(void 0, {
		hour: "2-digit",
		minute: "2-digit"
	}).format(t);
}
function da(e) {
	switch (e) {
		case "running": return "Automation is actively managing this scenario";
		case "waiting": return "Waiting for the next suitable opportunity";
		case "scheduled": return "The next action has been scheduled";
		case "completed": return "The planned automation has finished";
		case "paused": return "Automatic actions are temporarily paused";
		case "blocked": return "Automation needs attention before it can continue";
		case "disabled": return "Automatic control is currently turned off";
		case "unknown": return "Waiting for Home Assistant status";
	}
}
function fa(e, t) {
	let n = e?.states[t.device_entity], r = Q(e, t.device_entity), i = !!r, a = aa(e, t.device_entity), o = t.power_entity ? F(P(e, t.power_entity), {
		autoScale: !0,
		decimals: 1,
		trimTrailingZeros: !0
	}) : void 0, s = t.temperature_entity ? F(P(e, t.temperature_entity), {
		decimals: 1,
		trimTrailingZeros: !0
	}) : void 0, c = t.target_temperature_entity ? F(P(e, t.target_temperature_entity), {
		decimals: 1,
		trimTrailingZeros: !0
	}) : void 0, l = Q(e, t.last_action_entity), u = ra(Q(e, t.status_entity)), d = Q(e, t.strategy_entity), f = Q(e, t.target_time_entity), p = Q(e, t.estimated_finish_entity);
	return {
		title: t.title?.trim() || "Automation Scenario",
		icon: t.icon?.trim() || "mdi:white-balance-sunny",
		status: u,
		strategy: ia(d),
		reason: Q(e, t.reason_entity) || da(u.status),
		targetTime: ca(f),
		estimatedFinish: ca(p),
		deviceName: t.device_name?.trim() || String(n?.attributes.friendly_name ?? ""),
		deviceStateLabel: sa(r),
		deviceAvailable: i,
		deviceOn: a,
		powerValue: o?.value ?? "--",
		powerUnit: o?.unit ?? "",
		temperatureValue: s?.value ?? "--",
		temperatureUnit: s?.unit ?? "",
		targetTemperatureValue: c?.value ?? "",
		manualOverride: aa(e, t.manual_override_entity),
		manualOverrideAvailable: oa(e, t.manual_override_entity),
		strategyAvailable: !!d,
		targetAvailable: la(f),
		nextActionAvailable: la(p) || la(f),
		lastActionAvailable: !!(l || i),
		automationEnabled: t.automation_entity ? aa(e, t.automation_entity) : ra(Q(e, t.status_entity)).status !== "disabled",
		lastAction: l || (i ? a ? "Started device" : "Stopped device" : "No recent action"),
		lastActionTime: ua(t.last_action_entity ? e?.states[t.last_action_entity]?.last_changed : n?.last_changed)
	};
}
//#endregion
//#region src/components/energy-automation-card.ts
var pa = [
	"status_entity",
	"strategy_entity",
	"reason_entity",
	"target_time_entity",
	"manual_override_entity",
	"device_entity"
], ma = class extends j {
	constructor(...e) {
		super(...e), this.actionError = "";
	}
	static {
		this.properties = {
			config: { attribute: !1 },
			actionPending: { state: !0 },
			actionError: { state: !0 }
		};
	}
	set hass(e) {
		this._hass = e, this.requestUpdate();
	}
	get hass() {
		return this._hass;
	}
	setConfig(e) {
		if (!e || typeof e != "object") throw Error("Automation Card requires a configuration");
		for (let t of pa) if (!String(e[t] ?? "").trim()) throw Error(`Automation Card requires ${t}`);
		this.config = {
			...e,
			title: e.title?.trim() || "Automation Scenario",
			icon: e.icon?.trim() || "mdi:white-balance-sunny"
		};
	}
	getGridOptions() {
		return {
			columns: "full",
			rows: 6,
			min_rows: 5
		};
	}
	getCardSize() {
		return 6;
	}
	static {
		this.styles = h`
    :host { display:block; width:100%; min-width:0; color:var(--primary-text-color); container-type:inline-size; }
    ic-glass-container { --glass-container-height:auto; --glass-container-padding:0; }
    .content-shell { padding:clamp(28px,3vw,var(--en-space-xl,32px)); }
    .card-content { display:grid; min-width:0; }
    .region { min-width:0; padding:28px 0; border-top:1px solid color-mix(in srgb,var(--primary-text-color) 8%,transparent); }

    .hero { display:grid; grid-template-columns:auto minmax(0,1fr) auto; align-items:center; gap:14px; padding-bottom:24px; }
    .hero-copy { min-width:0; }
    .hero-title { overflow:hidden; color:var(--en-heading-primary,var(--primary-text-color)); font-size:var(--en-title-lg-size,24px); font-weight:var(--en-title-lg-weight,600); line-height:var(--en-title-lg-line-height,1.2); letter-spacing:var(--en-title-lg-letter-spacing,-.3px); text-overflow:ellipsis; white-space:nowrap; }
    .hero-description { margin-top:4px; color:var(--secondary-text-color); font-size:var(--en-helper-size,13px); line-height:var(--en-helper-line-height,1.3); }
    .hero-actions { display:flex; align-items:center; gap:8px; }
    .icon-circle { --icon-color:var(--en-color-primary); display:grid; width:38px; height:38px; flex:0 0 38px; place-items:center; border-radius:50%; background:color-mix(in srgb,var(--icon-color) 13%,transparent); color:var(--icon-color); }
    .icon-circle ha-icon { width:19px; height:19px; }
    .icon-circle.solar,.icon-circle.temperature { --icon-color:var(--en-color-accent); }
    .icon-circle.power,.icon-circle.execution { --icon-color:var(--en-color-success); }
    .icon-circle.time,.icon-circle.override { --icon-color:var(--en-color-primary); }
    .icon-circle.neutral { --icon-color:var(--secondary-text-color); }

    .status-pill { display:inline-flex; height:32px; box-sizing:border-box; align-items:center; gap:8px; padding:0 13px; border:var(--en-border-control); border-radius:var(--en-control-radius,999px); background:var(--en-surface-control); color:var(--primary-text-color); font-size:var(--en-helper-size,13px); font-weight:650; white-space:nowrap; }
    .status-dot { width:7px; height:7px; border-radius:50%; background:var(--secondary-text-color); }
    .status-pill.running .status-dot,.status-pill.completed .status-dot { background:var(--en-color-success); }
    .status-pill.waiting .status-dot,.status-pill.paused .status-dot { background:var(--en-color-accent); }
    .status-pill.scheduled .status-dot { background:#64a8ff; }
    .status-pill.blocked .status-dot { background:var(--error-color,#ff3b30); }
    .status-pill.unknown,.status-pill.disabled { background:color-mix(in srgb,var(--secondary-text-color) 8%,transparent); color:var(--secondary-text-color); }
    .status-pill.manual { color:var(--en-color-primary); }
    .status-pill.manual .status-dot { background:var(--en-color-primary); }

    .summary { display:flex; width:max-content; max-width:100%; flex-wrap:wrap; align-items:stretch; padding:0; }
    .summary-item { display:grid; grid-template-columns:38px minmax(0,1fr); min-width:150px; flex:0 1 auto; align-items:center; gap:10px; padding:0 18px; }
    .summary-item:first-child { padding-left:0; }
    .summary-item + .summary-item { border-left:1px solid color-mix(in srgb,var(--primary-text-color) 9%,transparent); }
    .summary-value { overflow:hidden; color:var(--primary-text-color); font-size:var(--en-title-md-size,18px); font-weight:var(--en-title-md-weight,600); line-height:1.2; text-overflow:ellipsis; white-space:nowrap; }
    .label { margin-top:3px; color:var(--secondary-text-color); font-size:var(--en-helper-size,13px); font-weight:var(--en-helper-weight,400); line-height:1.3; }

    .live-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); }
    .live-column { display:grid; gap:18px; min-width:0; }
    .live-column:first-child { padding-right:clamp(24px,4vw,48px); }
    .live-column + .live-column { padding-left:clamp(24px,4vw,48px); border-left:1px solid color-mix(in srgb,var(--primary-text-color) 9%,transparent); }
    .data-row { display:grid; grid-template-columns:38px minmax(0,1fr) auto; align-items:center; gap:12px; min-width:0; }
    .data-copy { min-width:0; }
    .data-label { color:var(--secondary-text-color); font-size:var(--en-label-font-size,14px); font-weight:var(--en-label-font-weight,600); line-height:1.2; }
    .data-value { margin-top:4px; overflow:hidden; color:var(--primary-text-color); font-size:var(--en-title-md-size,18px); font-weight:var(--en-data-weight,700); line-height:1.2; text-overflow:ellipsis; white-space:nowrap; }
    .data-support { margin-top:3px; color:var(--secondary-text-color); font-size:var(--en-helper-size,13px); line-height:1.3; }
    ic-metric-value { display:block; margin-top:4px; --metric-value-size:var(--en-title-md-size,18px); --metric-value-letter-spacing:-.1px; --metric-unit-size:13px; --metric-unit-gap:4px; }
    ha-switch { flex:0 0 auto; --switch-checked-color:var(--en-color-primary); --switch-unchecked-button-color:var(--secondary-text-color); }

    .action-row { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:10px; }
    .action-row ic-button { width:100%; --ic-button-width:100%; --ic-button-height:58px; --en-control-height-compact:58px; --en-control-padding-inline-compact:14px; }
    .action-row ic-button[variant="primary"] { --ic-action-background:var(--en-color-primary); }
    .action-row ic-button.pause { --ic-action-background:color-mix(in srgb,var(--en-color-accent) 10%,var(--en-surface-control)); }
    .action-row ic-button[variant="destructive"] { --ic-action-background:color-mix(in srgb,var(--error-color,#ff3b30) 8%,var(--en-surface-control)); }
    .action-icon { display:grid; width:28px; height:28px; flex:0 0 28px; place-items:center; border-radius:50%; background:color-mix(in srgb,currentColor 12%,transparent); }
    .action-icon ha-icon { width:16px; height:16px; }
    .action-copy { display:grid; min-width:0; gap:2px; text-align:left; }
    .action-label { font-size:14px; font-weight:650; line-height:1.15; }
    .action-support { overflow:hidden; font-size:var(--en-helper-size,13px); font-weight:var(--en-helper-weight,400); line-height:var(--en-helper-line-height,1.3); opacity:.68; text-overflow:ellipsis; white-space:nowrap; }

    .explanation-surface { padding:20px; border-radius:var(--en-panel-radius,18px); background:color-mix(in srgb,var(--en-color-primary) 4%,var(--en-surface-secondary,transparent)); }
    .explanation-surface.running,.explanation-surface.completed { background:color-mix(in srgb,var(--en-color-success) 5%,var(--en-surface-secondary,transparent)); }
    .explanation-surface.waiting,.explanation-surface.paused { background:color-mix(in srgb,var(--en-color-accent) 6%,var(--en-surface-secondary,transparent)); }
    .explanation-surface.scheduled { background:color-mix(in srgb,#64a8ff 6%,var(--en-surface-secondary,transparent)); }
    .explanation-surface.blocked { background:color-mix(in srgb,var(--error-color,#ff3b30) 5%,var(--en-surface-secondary,transparent)); }
    .explanation-lead { display:grid; grid-template-columns:auto minmax(0,1fr); align-items:baseline; gap:12px; }
    .explanation-state { color:var(--primary-text-color); font-size:var(--en-title-md-size,18px); font-weight:600; }
    .explanation-state.running,.explanation-state.completed { color:var(--en-color-success); }
    .explanation-state.waiting,.explanation-state.paused { color:var(--en-color-accent); }
    .explanation-state.scheduled { color:#64a8ff; }
    .explanation-state.blocked { color:var(--error-color,#ff3b30); }
    .explanation-reason { color:var(--secondary-text-color); font-size:14px; line-height:1.45; }
    .explanation-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:28px; margin-top:20px; padding-top:20px; border-top:1px solid color-mix(in srgb,var(--primary-text-color) 8%,transparent); }
    .explanation-item { display:grid; grid-template-columns:32px minmax(0,1fr); gap:10px; }
    .explanation-item .icon-circle { width:32px; height:32px; flex-basis:32px; }
    .explanation-item .icon-circle ha-icon { width:16px; height:16px; }
    .explanation-value { margin-top:4px; overflow-wrap:anywhere; color:var(--primary-text-color); font-size:14px; font-weight:560; line-height:1.4; }
    .activity-time { color:var(--secondary-text-color); font-variant-numeric:tabular-nums; }
    .error { margin-top:16px; padding:10px 13px; border-radius:var(--en-radius-control,16px); background:color-mix(in srgb,var(--error-color,#ff453a) 8%,transparent); color:var(--error-color,#ff453a); font-size:12px; }

    /* Automation card layout: five aligned visual regions on one surface. */
    .hero { margin:calc(-1 * clamp(28px,3vw,var(--en-space-xl,32px))) calc(-1 * clamp(28px,3vw,var(--en-space-xl,32px))) 0; padding:20px clamp(28px,3vw,var(--en-space-xl,32px)); border-bottom:1px solid color-mix(in srgb,var(--primary-text-color) 9%,transparent); border-radius:var(--ic-radius-card) var(--ic-radius-card) 0 0; background:color-mix(in srgb,var(--en-color-primary) 3%,var(--en-surface-secondary,transparent)); }
    .region { display:grid; gap:14px; padding:24px 0; }
    .section-title { color:var(--en-heading-primary,var(--primary-text-color)); font-size:var(--en-title-md-size,18px); font-weight:var(--en-title-md-weight,600); line-height:var(--en-title-md-line-height,1.25); letter-spacing:var(--en-title-md-letter-spacing,-.1px); }
    .card-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:12px; }
    .info-card { display:grid; grid-template-columns:38px minmax(0,1fr); min-width:0; min-height:92px; box-sizing:border-box; align-items:center; gap:12px; padding:16px; border:var(--en-border-control); border-radius:var(--en-panel-radius,18px); background:var(--en-surface-secondary,rgba(255,255,255,.06)); }
    .info-card-copy { min-width:0; }
    .info-card .data-label { margin:0; }
    .info-card .data-value { margin-top:5px; }
    .live-stack { display:grid; gap:12px; }
    .live-row { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:12px; }
    .live-row .info-card { min-height:104px; }
    .control-card { grid-template-columns:38px minmax(0,1fr) auto; }
    .action-section { display:grid; gap:14px; }
    .action-row { padding:0; border:0; }
    .action-row ic-button { --ic-border-control:1px solid color-mix(in srgb,var(--primary-text-color) 12%,transparent); }
    .explanation-surface { display:grid; gap:0; padding:0; overflow:hidden; border:var(--en-border-control); }
    .explanation-layout { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); }
    .explanation-cell { min-width:0; padding:17px 18px; }
    .explanation-cell:nth-child(even) { border-left:1px solid color-mix(in srgb,var(--primary-text-color) 8%,transparent); }
    .explanation-cell:nth-child(n+3) { border-top:1px solid color-mix(in srgb,var(--primary-text-color) 8%,transparent); }

    @container (max-width:620px) {
      .content-shell { padding:20px; }
      .hero { grid-template-columns:auto minmax(0,1fr) auto; margin:-20px -20px 0; padding:18px 20px; }
      .hero-actions { grid-column:auto; justify-content:flex-end; margin-top:0; }
      .status-pill { max-width:132px; overflow:hidden; text-overflow:ellipsis; }
      .region { padding:24px 0; }
      .card-grid { grid-template-columns:repeat(2,minmax(0,1fr)); }
      .card-grid .info-card:last-child { grid-column:1 / -1; }
      .live-grid { grid-template-columns:1fr; gap:18px; }
      .live-column:first-child,.live-column + .live-column { padding:0; border:0; }
      .live-row { grid-template-columns:1fr; }
      .action-row { grid-template-columns:repeat(2,minmax(0,1fr)); }
      .action-row ic-button:last-child { grid-column:1 / -1; }
      .explanation-lead { grid-template-columns:1fr; gap:6px; }
      .explanation-grid { grid-template-columns:1fr; gap:18px; }
      .explanation-layout { grid-template-columns:1fr; }
      .explanation-cell:nth-child(even) { border-left:0; }
      .explanation-cell + .explanation-cell { border-top:1px solid color-mix(in srgb,var(--primary-text-color) 8%,transparent); }
    }
    @container (max-width:380px) {
      .content-shell { padding:18px; }
      .hero { margin:-18px -18px 0; padding:16px 18px; gap:10px; }
      .status-pill { max-width:112px; padding-inline:10px; }
      .summary-item { min-width:100%; padding:0; border-left:0 !important; }
      .data-row { grid-template-columns:34px minmax(0,1fr) auto; gap:10px; }
      .icon-circle { width:34px; height:34px; flex-basis:34px; }
    }
    @media (prefers-reduced-motion:reduce) { * { transition:none !important; } }
  `;
	}
	defaultAction(e) {
		return {
			domain: "homeassistant",
			service: e === "run_now" ? "turn_on" : "turn_off",
			entity_id: this.config?.device_entity
		};
	}
	async callAction(e) {
		if (!this._hass || !this.config || this.actionPending) return;
		let t = this.config.actions?.[e] ?? this.defaultAction(e), n = t.domain?.trim() || "homeassistant", r = t.service?.trim() || (e === "run_now" ? "turn_on" : "turn_off"), i = t.entity_id?.trim() || this.config.device_entity;
		this.actionPending = e, this.actionError = "";
		try {
			await this._hass.callService(n, r, {
				...t.data,
				...i ? { entity_id: i } : {}
			});
		} catch (e) {
			this.actionError = e instanceof Error ? e.message : "Unable to perform action";
		} finally {
			this.actionPending = void 0;
		}
	}
	waitForEntityState(e, t) {
		return new Promise((n, r) => {
			let i = Date.now(), a = () => {
				this._hass?.states[e]?.state === t ? n() : Date.now() - i >= 5e3 ? r(/* @__PURE__ */ Error("Home Assistant did not confirm the new state")) : window.setTimeout(a, 150);
			};
			a();
		});
	}
	async toggleEntity(e, t, n) {
		if (!this._hass || this.actionPending) return;
		let r = n ? "off" : "on";
		this.actionPending = t, this.actionError = "";
		try {
			await this._hass.callService("homeassistant", n ? "turn_off" : "turn_on", { entity_id: e }), await this.waitForEntityState(e, r);
		} catch (e) {
			this.actionError = e instanceof Error ? e.message : "Unable to update entity";
		} finally {
			this.actionPending = void 0;
		}
	}
	toggleManualOverride() {
		if (!this.config) return;
		let e = this._hass?.states[this.config.manual_override_entity]?.state === "on";
		this.toggleEntity(this.config.manual_override_entity, "manual_override", e);
	}
	toggleDevice() {
		if (!this.config) return;
		let e = this._hass?.states[this.config.device_entity]?.state === "on";
		this.toggleEntity(this.config.device_entity, "device", e);
	}
	openDetails() {
		this.config && this.dispatchEvent(new CustomEvent("hass-more-info", {
			detail: { entityId: this.config.automation_entity || this.config.status_entity },
			bubbles: !0,
			composed: !0
		}));
	}
	renderIcon(e, t) {
		return T`<span class="icon-circle ${t}"><ha-icon .icon=${e}></ha-icon></span>`;
	}
	renderAction(e, t, n, r, i = "secondary") {
		let a = this.actionPending === e;
		return T`<ic-button class=${e === "pause" ? "pause" : ""} .variant=${i} .disabled=${!!this.actionPending} @click=${() => this.callAction(e)}>
      <span class="action-icon"><ha-icon .icon=${a ? "mdi:loading" : r}></ha-icon></span>
      <span class="action-copy"><span class="action-label">${a ? "Working…" : t}</span><span class="action-support">${n}</span></span>
    </ic-button>`;
	}
	render() {
		if (!this.config) return O;
		let e = fa(this._hass, this.config), t = {
			power: !0,
			temperature: !0,
			strategy: !0,
			device: !0,
			next_action: !0,
			last_action: !0,
			...this.config.show
		}, n = {
			current_device: "Current Device",
			target_time: "Target Time",
			heating_strategy: "Heating Strategy",
			water_temperature: "Water Temperature",
			current_power: "Current Power",
			device_status: "Device Status",
			manual_override: "Manual Override",
			...this.config.labels
		}, r = e.targetTemperatureValue ? `${e.targetTemperatureValue}${e.temperatureUnit}` : "", i = t.next_action && e.nextActionAvailable, a = t.last_action && e.lastActionAvailable, o = e.estimatedFinish === "Not available" ? `The system will work toward the ${e.targetTime} target.` : `Expected to finish at ${e.estimatedFinish}.`;
		return T`<ic-glass-container><div class="content-shell"><article class="card-content" aria-label=${e.title}>
      <header class="hero">
        ${this.renderIcon(e.icon, "solar")}
        <div class="hero-copy"><div class="hero-title">${e.title}</div></div>
        <div class="hero-actions">
          <span class="status-pill ${e.manualOverride ? "manual" : e.status.status}"><span class="status-dot"></span>${e.manualOverride ? "Manual Override" : e.status.status === "running" ? "Automation Active" : e.status.label}</span>
          <ic-action-button icon="mdi:dots-horizontal" label="Automation details" @action-click=${this.openDetails}></ic-action-button>
        </div>
      </header>

      <section class="region" aria-label="Current strategy">
        <div class="section-title">Current Strategy</div>
        <div class="card-grid">
          <div class="info-card">${this.renderIcon("mdi:heat-pump", "execution")}<div class="info-card-copy"><div class="data-label">${n.current_device}</div><div class="data-value">${e.deviceAvailable && e.deviceName ? e.deviceName : "Unavailable"}</div></div></div>
          <div class="info-card">${this.renderIcon("mdi:clock-outline", "time")}<div class="info-card-copy"><div class="data-label">${n.target_time}</div><div class="data-value">${e.targetAvailable ? e.targetTime : "--"}</div></div></div>
          <div class="info-card">${this.renderIcon(e.strategyAvailable ? e.strategy.icon : "mdi:tune-variant", "solar")}<div class="info-card-copy"><div class="data-label">${n.heating_strategy}</div><div class="data-value">${e.strategyAvailable ? e.strategy.label : "Unavailable"}</div></div></div>
        </div>
      </section>

      <section class="region" aria-label="Live status">
        <div class="section-title">Live Status</div>
        <div class="live-stack">
          <div class="live-row">
            ${t.temperature ? T`<div class="info-card">${this.renderIcon("mdi:thermometer", "temperature")}<div class="info-card-copy"><div class="data-label">${n.water_temperature}</div><div class="data-value">${e.temperatureValue}${e.temperatureValue === "--" ? "" : e.temperatureUnit}</div><div class="data-support">${r ? `Target ${r}` : e.temperatureValue === "--" ? "Sensor unavailable" : "Current sensor reading"}</div></div></div>` : O}
            ${t.power ? T`<div class="info-card">${this.renderIcon("mdi:flash", "power")}<div class="info-card-copy"><div class="data-label">${n.current_power}</div><ic-metric-value .value=${e.powerValue} .unit=${e.powerUnit} .status=${e.powerValue === "--" ? "unavailable" : "valid"}></ic-metric-value><div class="data-support">${e.powerValue === "--" ? "Sensor unavailable" : "Real-time power usage"}</div></div></div>` : O}
          </div>
          <div class="live-row">
            ${t.device ? T`<div class="info-card control-card">${this.renderIcon("mdi:power", "execution")}<div class="info-card-copy"><div class="data-label">${n.device_status}</div><div class="data-value">${e.deviceStateLabel}</div><div class="data-support">${e.deviceAvailable ? e.deviceOn ? "Running" : "Not running" : "Waiting for Home Assistant"}</div></div><ha-switch .checked=${e.deviceOn} .disabled=${!!this.actionPending || !e.deviceAvailable} aria-label=${n.device_status} @change=${this.toggleDevice}></ha-switch></div>` : O}
            <div class="info-card control-card">${this.renderIcon("mdi:hand-back-right-outline", "override")}<div class="info-card-copy"><div class="data-label">${n.manual_override}</div><div class="data-value">${e.manualOverrideAvailable ? e.manualOverride ? "On" : "Off" : "Unavailable"}</div><div class="data-support">${e.manualOverrideAvailable ? e.manualOverride ? "User control enabled" : "Following automation" : "Waiting for Home Assistant"}</div></div><ha-switch .checked=${e.manualOverride} .disabled=${!!this.actionPending || !e.manualOverrideAvailable} aria-label=${n.manual_override} @change=${this.toggleManualOverride}></ha-switch></div>
          </div>
        </div>
      </section>

      <section class="region action-section" aria-label="Automation controls">
        <div class="section-title">Automation Control</div>
        <div class="action-row">
          ${this.renderAction("run_now", "Run Now", "Start immediately", "mdi:play", "primary")}
          ${this.renderAction("pause", "Pause", "Pause automation", "mdi:pause")}
          ${this.renderAction("stop", "Stop", "Stop current run", "mdi:stop", "destructive")}
        </div>
      </section>

      <section class="region" aria-label="Automation explanation">
        <div class="section-title">Automation Explanation</div>
        <div class="explanation-surface ${e.status.status}">
          <div class="explanation-layout">
            <div class="explanation-cell"><div class="data-label">Status</div><div class="explanation-value explanation-state ${e.status.status}">${e.status.label}</div></div>
            <div class="explanation-cell"><div class="data-label">Reason</div><div class="explanation-value">${e.reason}</div></div>
            <div class="explanation-cell"><div class="data-label">Next Action</div><div class="explanation-value">${i ? o : "--"}</div></div>
            <div class="explanation-cell"><div class="data-label">Last Action</div><div class="explanation-value">${a ? T`${e.lastActionTime ? T`<span class="activity-time">${e.lastActionTime} · </span>` : O}${e.lastAction}` : "--"}</div></div>
          </div>
        </div>
      </section>
      ${this.actionError ? T`<div class="error" role="alert">${this.actionError}</div>` : O}
    </article></div></ic-glass-container>`;
	}
};
customElements.define("energy-automation-card", ma);
//#endregion
//#region src/data/scene-mock-data.ts
var ha = [
	{
		title: "Energy Added",
		value: "24.6",
		unit: "kWh",
		icon: "mdi:battery-charging"
	},
	{
		title: "Charging Time",
		value: "3h 25m",
		icon: "mdi:timer-outline"
	},
	{
		title: "Charging Cost",
		value: "4.80",
		unit: "$",
		icon: "mdi:currency-usd"
	},
	{
		title: "Average Power",
		value: "7.1",
		unit: "kW",
		icon: "mdi:flash"
	}
], ga = [{
	name: "Charging Power",
	color: "var(--en-color-primary)",
	values: [
		0,
		0,
		2.8,
		6.9,
		7.2,
		7.1,
		6.8,
		4.2,
		0
	]
}], _a = [
	{
		title: "Today",
		subtitle: "18:42–22:07",
		values: [
			"24.6 kWh",
			"$4.80",
			"3h 25m"
		]
	},
	{
		title: "Jul 28",
		subtitle: "00:15–03:04",
		values: [
			"18.2 kWh",
			"$3.12",
			"2h 49m"
		]
	},
	{
		title: "Jul 25",
		subtitle: "19:20–23:18",
		values: [
			"28.7 kWh",
			"$5.44",
			"3h 58m"
		]
	}
], va = {
	severity: "success",
	title: "Off-peak charging",
	description: "Your EV charging mostly happens during off-peak hours.",
	icon: "mdi:clock-check-outline"
}, ya = [
	{
		title: "Generation Today",
		value: "18.4",
		unit: "kWh",
		icon: "mdi:solar-power"
	},
	{
		title: "Self Consumption",
		value: "62",
		unit: "%",
		icon: "mdi:home-lightning-bolt"
	},
	{
		title: "Grid Export",
		value: "6.8",
		unit: "kWh",
		icon: "mdi:transmission-tower-export"
	},
	{
		title: "Efficiency",
		value: "91",
		unit: "%",
		icon: "mdi:gauge"
	}
], ba = [{
	name: "Solar Production",
	color: "var(--en-color-accent)",
	values: [
		0,
		0,
		.3,
		1.4,
		3.8,
		5.8,
		5.1,
		3.2,
		1.1,
		.1,
		0
	]
}, {
	name: "Home Consumption",
	color: "var(--en-color-primary)",
	values: [
		1.1,
		.8,
		.9,
		1.4,
		2.1,
		2.7,
		3.5,
		2.8,
		2.4,
		1.9,
		1.3
	]
}], xa = {
	severity: "achievement",
	title: "Strong solar coverage",
	description: "Solar covered 62% of your home usage today.",
	icon: "mdi:white-balance-sunny"
}, Sa = [
	{
		title: "Stored Energy",
		value: "9.7",
		unit: "kWh",
		icon: "mdi:battery-high"
	},
	{
		title: "Cycles",
		value: "184",
		icon: "mdi:sync"
	},
	{
		title: "Efficiency",
		value: "94",
		unit: "%",
		icon: "mdi:gauge"
	},
	{
		title: "Throughput",
		value: "3.2",
		unit: "MWh",
		icon: "mdi:swap-horizontal"
	}
], Ca = [{
	name: "Battery Power",
	color: "var(--en-color-success)",
	values: [
		-2.1,
		-1.4,
		0,
		.8,
		2.5,
		1.8,
		.2,
		-1.1,
		-2.4,
		-.8,
		0
	]
}, {
	name: "Battery Level",
	color: "var(--en-color-primary)",
	values: [
		48,
		44,
		43,
		49,
		61,
		72,
		78,
		74,
		65,
		59,
		58
	]
}], wa = {
	severity: "normal",
	title: "Storage is balanced",
	description: "The battery has enough reserve to support tonight's peak period.",
	icon: "mdi:battery-heart-variant"
}, Ta = [
	{
		title: "Air Conditioner",
		value: "2.4",
		unit: "kW",
		icon: "mdi:air-conditioner"
	},
	{
		title: "Water Heater",
		value: "1.8",
		unit: "kW",
		icon: "mdi:water-boiler"
	},
	{
		title: "Kitchen",
		value: "500",
		unit: "W",
		icon: "mdi:stove"
	},
	{
		title: "EV",
		value: "320",
		unit: "W",
		icon: "mdi:car-electric"
	}
], Ea = [{
	name: "AC",
	color: "var(--en-color-primary)",
	values: [
		0,
		.3,
		1.8,
		2.4,
		2.1,
		.8,
		0,
		1.4,
		2.2,
		.5,
		0
	]
}, {
	name: "Kitchen",
	color: "var(--en-color-accent)",
	values: [
		0,
		0,
		.2,
		.8,
		.3,
		0,
		0,
		.6,
		1.1,
		.2,
		0
	]
}], Da = {
	severity: "warning",
	title: "Higher AC consumption",
	description: "AC consumed 35% more energy than usual.",
	icon: "mdi:alert-circle-outline"
}, Oa = [
	{
		title: "Aquarium",
		value: "45",
		unit: "W",
		icon: "mdi:fishbowl-outline"
	},
	{
		title: "Pet Fountain",
		value: "8",
		unit: "W",
		icon: "mdi:water-pump"
	},
	{
		title: "Automatic Feeder",
		value: "5",
		unit: "W",
		icon: "mdi:bowl-mix-outline"
	},
	{
		title: "Monthly Pet Energy",
		value: "18.4",
		unit: "kWh",
		icon: "mdi:paw"
	}
], ka = {
	severity: "normal",
	title: "Pet energy summary",
	description: "This month your pets used 18.4 kWh.",
	icon: "mdi:paw"
}, $ = class extends j {
	constructor(...e) {
		super(...e), this.sceneConfig = {};
	}
	setConfig(e) {
		this.sceneConfig = { ...e }, this.requestUpdate();
	}
	getGridOptions() {
		return { columns: "full" };
	}
}, Aa = class extends j {
	constructor(...e) {
		super(...e), this.title = "", this.subtitle = "", this.menuOpen = !1;
	}
	static {
		this.properties = {
			title: { type: String },
			subtitle: { type: String }
		};
	}
	static {
		this.styles = h`
    :host {
      display: block;
      width: 100%;
      min-width: 0;
      color: var(--primary-text-color);
      container-type: inline-size;
    }

    .page {
      display: grid;
      width: 100%;
      min-width: 0;
      gap: var(--scene-section-gap, 22px);
    }

    ::slotted(*) {
      min-width: 0;
    }
  `;
	}
	requestSettings() {
		this.menuOpen = !1, this.requestUpdate(), this.dispatchEvent(new CustomEvent("scene-settings-request", {
			detail: { title: this.title },
			bubbles: !0,
			composed: !0
		}));
	}
	toggleMenu() {
		this.menuOpen = !this.menuOpen, this.requestUpdate();
	}
	render() {
		return T`
      <ic-section-header .title=${this.title} .subtitle=${this.subtitle} level="page">
        <ic-popover
          slot="actions"
          style="--popover-min-width:280px"
          .open=${this.menuOpen}
          placement="bottom-end"
          .offset=${8}
          .closeOnOutsideClick=${!0}
          @popover-close=${() => {
			this.menuOpen = !1, this.requestUpdate();
		}}
        >
          <ic-action-button
            slot="anchor"
            icon="mdi:cog-outline"
            label="Scene actions"
            @action-click=${this.toggleMenu}
          ></ic-action-button>
          <button type="button" @click=${this.requestSettings}>
            Settings
          </button>
        </ic-popover>
      </ic-section-header>
      <main class="page"><slot></slot></main>
    `;
	}
};
customElements.define("ic-scene-page-container", Aa);
//#endregion
//#region src/components/scenes/common/scene-hero-card.ts
var ja = class extends j {
	constructor(...e) {
		super(...e), this.title = "", this.icon = "mdi:home-lightning-bolt", this.details = [];
	}
	static {
		this.properties = {
			title: { type: String },
			icon: { type: String },
			status: { attribute: !1 },
			primary: { attribute: !1 },
			details: { attribute: !1 }
		};
	}
	static {
		this.styles = h`
    :host { display:block; width:100%; min-width:0; }
    ic-glass-container {
      --glass-container-height: var(--scene-hero-height, 240px);
    }
    .hero { display:grid; height:100%; grid-template-columns:1fr auto; gap:24px; }
    .copy { display:flex; min-width:0; flex-direction:column; justify-content:center; }
    .status { display:flex; align-items:center; gap:8px; color:var(--secondary-text-color); }
    .dot { width:9px; height:9px; border-radius:50%; background:var(--en-color-success); }
    .dot.idle { background:var(--secondary-text-color); }
    .dot.warning { background:var(--en-color-accent); }
    h2 {
      margin:12px 0 18px;
      color:var(--en-heading-primary,var(--primary-text-color));
      font-size:var(--en-title-xl-size,34px);
      font-weight:var(--en-title-xl-weight,600);
      line-height:var(--en-title-xl-line-height,1.15);
      letter-spacing:var(--en-title-xl-letter-spacing,-0.5px);
    }
    ic-metric-value { --metric-value-size:clamp(42px,6vw,64px); }
    .icon { align-self:center; opacity:.18; --mdc-icon-size:clamp(80px,12vw,150px); }
    .details { display:flex; flex-wrap:wrap; gap:20px; margin-top:18px; }
    .detail { color:var(--secondary-text-color); font-size:13px; }
    .detail strong { color:var(--primary-text-color); font-size:17px; }
  `;
	}
	render() {
		return T`
      <ic-glass-container>
        <div class="hero">
          <div class="copy">
            ${this.status ? T`
              <div class="status">
                <span class="dot ${this.status.state}"></span>${this.status.label}
              </div>` : null}
            <h2>${this.title}</h2>
            ${this.primary ? T`
              <ic-metric-value
                .value=${String(this.primary.value)}
                .unit=${this.primary.unit ?? ""}
                status="valid"
              ></ic-metric-value>` : null}
            <div class="details">
              ${this.details.map((e) => T`
                <div class="detail">${e.title}<br />
                  <strong>${e.value} ${e.unit ?? ""}</strong>
                </div>`)}
            </div>
          </div>
          <ha-icon class="icon" .icon=${this.icon}></ha-icon>
        </div>
      </ic-glass-container>
    `;
	}
};
customElements.define("ic-scene-hero-card", ja);
//#endregion
//#region src/components/scenes/common/scene-metric-grid.ts
var Ma = class extends j {
	constructor(...e) {
		super(...e), this.metrics = [];
	}
	static {
		this.properties = { metrics: { attribute: !1 } };
	}
	static {
		this.styles = h`
    :host { display:block; width:100%; min-width:0; container-type:inline-size; }
    .grid { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:14px; }
    ic-card-container { --energy-card-height:140px; --energy-card-padding:18px; }
    .metric { display:grid; height:100%; grid-template-columns:1fr auto; gap:10px; }
    .title { color:var(--en-subtitle-secondary,var(--secondary-text-color)); font-size:13px; font-weight:600; }
    ic-metric-value { align-self:end; --metric-value-size:30px; --metric-unit-size:13px; }
    ha-icon { opacity:.45; --mdc-icon-size:24px; }
    @container (max-width:900px) { .grid { grid-template-columns:repeat(2,minmax(0,1fr)); } }
  `;
	}
	render() {
		return T`<div class="grid">${this.metrics.map((e) => T`
      <ic-card-container>
        <div class="metric">
          <div class="title">${e.title}</div>
          <ha-icon .icon=${e.icon ?? "mdi:chart-box-outline"}></ha-icon>
          <ic-metric-value
            .value=${String(e.value)}
            .unit=${e.unit ?? ""}
            status="valid"
          ></ic-metric-value>
        </div>
      </ic-card-container>`)}
    </div>`;
	}
};
customElements.define("ic-scene-metric-grid", Ma);
//#endregion
//#region src/components/scenes/common/scene-status-card.ts
var Na = class extends j {
	constructor(...e) {
		super(...e), this.title = "", this.description = "", this.metrics = [];
	}
	static {
		this.properties = {
			title: { type: String },
			description: { type: String },
			metrics: { attribute: !1 }
		};
	}
	static {
		this.styles = h`
    :host { display:block; min-width:0; }
    ic-glass-container { --glass-container-height:auto; }
    h3 {
      margin:0 0 6px;
      font-size:var(--en-title-md-size,18px);
      font-weight:var(--en-title-md-weight,600);
      line-height:var(--en-title-md-line-height,1.25);
      letter-spacing:var(--en-title-md-letter-spacing,-0.1px);
    }
    h3 { color:var(--en-heading-primary,var(--primary-text-color)); }
    p { margin:0 0 18px; color:var(--en-body-secondary,var(--secondary-text-color)); }
    .values { display:flex; flex-wrap:wrap; gap:24px; }
    .value span { color:var(--secondary-text-color); font-size:12px; }
    .value strong { display:block; margin-top:4px; font-size:21px; }
  `;
	}
	render() {
		return T`<ic-glass-container><h3>${this.title}</h3>
      <p>${this.description}</p><div class="values">${this.metrics.map((e) => T`
        <div class="value"><span>${e.title}</span><strong>${e.value} ${e.unit ?? ""}</strong></div>
      `)}</div></ic-glass-container>`;
	}
};
customElements.define("ic-scene-status-card", Na);
//#endregion
//#region src/components/scenes/common/scene-history-list.ts
var Pa = class extends j {
	constructor(...e) {
		super(...e), this.title = "History", this.headings = [], this.entries = [];
	}
	static {
		this.properties = {
			title: { type: String },
			headings: { attribute: !1 },
			entries: { attribute: !1 }
		};
	}
	static {
		this.styles = h`
    :host { display:block; min-width:0; }
    ic-glass-container { --glass-container-height:auto; }
    h3 {
      margin:0 0 16px;
      font-size:var(--en-title-md-size,18px);
      font-weight:var(--en-title-md-weight,600);
      line-height:var(--en-title-md-line-height,1.25);
      letter-spacing:var(--en-title-md-letter-spacing,-0.1px);
    }
    .row { display:grid; grid-template-columns:minmax(130px,1.4fr) repeat(var(--columns),minmax(70px,1fr)); gap:12px; padding:12px 0; border-bottom:1px solid var(--divider-color); }
    .row:last-child { border-bottom:0; }
    h3 { color:var(--en-heading-primary,var(--primary-text-color)); }
    .head { color:var(--en-body-secondary,var(--secondary-text-color)); font-size:11px; text-transform:uppercase; }
    .title { font-weight:600; }
    .subtitle { color:var(--en-subtitle-secondary,var(--secondary-text-color)); font-size:12px; }
    @media(max-width:600px) { .row { font-size:12px; overflow-x:auto; } }
  `;
	}
	render() {
		let e = Math.max(this.headings.length, 1);
		return T`<ic-glass-container><h3>${this.title}</h3>
      <div style=${`--columns:${e}`}>
        ${this.headings.length ? T`<div class="row head"><span></span>${this.headings.map((e) => T`<span>${e}</span>`)}</div>` : null}
        ${this.entries.map((e) => T`<div class="row">
          <div><div class="title">${e.title}</div><div class="subtitle">${e.subtitle ?? ""}</div></div>
          ${e.values.map((e) => T`<span>${e}</span>`)}
        </div>`)}
      </div>
    </ic-glass-container>`;
	}
};
customElements.define("ic-scene-history-list", Pa);
//#endregion
//#region src/components/scenes/common/scene-insight-card.ts
var Fa = class extends j {
	static {
		this.properties = { insight: { attribute: !1 } };
	}
	static {
		this.styles = h`
    :host { display:block; min-width:0; }
    ic-glass-container { --glass-container-height:auto; --glass-container-padding:18px; }
    .insight { display:grid; grid-template-columns:auto 1fr; align-items:center; gap:14px; }
    .icon { display:grid; width:38px; height:38px; place-items:center; border-radius:50%; background:var(--en-color-primary-soft); color:var(--en-color-primary); }
    .warning .icon { background:var(--en-color-accent-soft); color:var(--en-color-accent); }
    .success .icon,.achievement .icon { background:var(--en-color-success-soft); color:var(--en-color-success); }
    h3 {
      margin:0 0 4px;
      font-size:var(--en-title-md-size,18px);
      font-weight:var(--en-title-md-weight,600);
      line-height:var(--en-title-md-line-height,1.25);
      letter-spacing:var(--en-title-md-letter-spacing,-0.1px);
    }
    h3 { color:var(--en-heading-primary,var(--primary-text-color)); }
    p { margin:0; color:var(--en-body-secondary,var(--secondary-text-color)); font-size:13px; }
  `;
	}
	render() {
		return this.insight ? T`<ic-glass-container><div class="insight ${this.insight.severity}">
      <div class="icon"><ha-icon .icon=${this.insight.icon ?? "mdi:lightbulb-on-outline"}></ha-icon></div>
      <div><h3>${this.insight.title}</h3><p>${this.insight.description}</p></div>
    </div></ic-glass-container>` : null;
	}
};
customElements.define("ic-scene-insight-card", Fa);
var Ia = class extends Fa {};
customElements.define("energy-insight-card", Ia);
//#endregion
//#region src/components/scenes/common/scene-chart-card.ts
function La(e) {
	if (!e.length) return "";
	let t = Math.min(...e), n = Math.max(...e), r = Math.max(n - t, 1), i = e.map((n, i) => ({
		x: e.length === 1 ? 0 : i / (e.length - 1) * 760,
		y: 180 - (n - t) / r * 140
	})), a = ni(i);
	return a.length ? `M ${i[0].x} ${i[0].y} ${a.map((e) => `C ${e.control1.x} ${e.control1.y}, ${e.control2.x} ${e.control2.y}, ${e.end.x} ${e.end.y}`).join(" ")}` : `M ${i[0].x} ${i[0].y}`;
}
var Ra = class extends j {
	constructor(...e) {
		super(...e), this.title = "", this.subtitle = "", this.series = [];
	}
	static {
		this.properties = {
			title: { type: String },
			subtitle: { type: String },
			series: { attribute: !1 }
		};
	}
	static {
		this.styles = h`
    :host { display:block; min-width:0; }
    ic-glass-container { --glass-container-height:320px; }
    h3 {
      margin:0;
      font-size:var(--en-title-md-size,18px);
      font-weight:var(--en-title-md-weight,600);
      line-height:var(--en-title-md-line-height,1.25);
      letter-spacing:var(--en-title-md-letter-spacing,-0.1px);
    }
    h3 { color:var(--en-heading-primary,var(--primary-text-color)); }
    p { margin:5px 0 12px; color:var(--en-subtitle-secondary,var(--secondary-text-color)); font-size:13px; }
    svg { display:block; width:100%; height:220px; overflow:visible; }
    .grid { stroke:var(--divider-color); stroke-width:1; }
    .legend { display:flex; gap:16px; }
    .legend span { color:var(--secondary-text-color); font-size:12px; }
    .dot { display:inline-block; width:7px; height:7px; margin-right:5px; border-radius:50%; }
  `;
	}
	render() {
		return T`<ic-glass-container>
      <h3>${this.title}</h3><p>${this.subtitle}</p>
      <svg viewBox="0 0 800 220" preserveAspectRatio="none">
        ${[
			40,
			80,
			120,
			160,
			200
		].map((e) => E`
          <line class="grid" x1="20" x2="780" y1=${e} y2=${e}></line>`)}
        ${this.series.map((e, t) => {
			let n = La(e.values);
			return E`
            <defs><linearGradient id=${`scene-fill-${t}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color=${e.color} stop-opacity=".25"></stop>
              <stop offset="100%" stop-color=${e.color} stop-opacity="0"></stop>
            </linearGradient></defs>
            <path d=${`${n} L 760 205 L 0 205 Z`} fill=${`url(#scene-fill-${t})`}></path>
            <path d=${n} fill="none" stroke=${e.color} stroke-width="3" stroke-linecap="round"></path>`;
		})}
      </svg>
      <div class="legend">${this.series.map((e) => T`
        <span><i class="dot" style=${`background:${e.color}`}></i>${e.name}</span>
      `)}</div>
    </ic-glass-container>`;
	}
};
customElements.define("ic-scene-chart-card", Ra);
//#endregion
//#region src/components/scenes/ev/ev-charging-timeline-card.ts
var za = class extends j {
	constructor(...e) {
		super(...e), this.series = [];
	}
	static {
		this.properties = { series: { attribute: !1 } };
	}
	render() {
		return T`<ic-scene-chart-card
      title="Charging Timeline"
      subtitle="18:00 → 02:00 · optimized charging window"
      .series=${this.series}
    ></ic-scene-chart-card>`;
	}
};
customElements.define("ev-charging-timeline-card", za);
//#endregion
//#region src/components/scenes/ev/ev-charging-scene.ts
var Ba = class extends $ {
	render() {
		return T`<ic-scene-page-container title="EV Charging" subtitle="Smart charging and session intelligence">
      <ic-scene-hero-card title="Tesla Model Y" icon="mdi:car-electric"
        .status=${{
			label: "Charging",
			state: "active"
		}}
        .primary=${{
			title: "Current Power",
			value: "7.2",
			unit: "kW"
		}}
        .details=${[{
			title: "Battery",
			value: "68",
			unit: "%"
		}, {
			title: "Session Energy",
			value: "24.6",
			unit: "kWh"
		}]}
      ></ic-scene-hero-card>
      <ic-scene-metric-grid .metrics=${ha}></ic-scene-metric-grid>
      <ev-charging-timeline-card .series=${ga}></ev-charging-timeline-card>
      <ic-scene-status-card title="Cost Optimization" description="Smart charging follows your lowest tariff window."
        .metrics=${[
			{
				title: "Smart Charging Cost",
				value: "$4.80"
			},
			{
				title: "Normal Grid Cost",
				value: "$7.90"
			},
			{
				title: "Saved This Month",
				value: "$12.40"
			}
		]}>
      </ic-scene-status-card>
      <ic-scene-history-list title="Charging History" .headings=${[
			"Energy",
			"Cost",
			"Duration"
		]} .entries=${_a}></ic-scene-history-list>
      <energy-insight-card .insight=${va}></energy-insight-card>
    </ic-scene-page-container>`;
	}
};
customElements.define("energy-ev-charging-scene", Ba);
//#endregion
//#region src/components/scenes/common/scene-flow-card.ts
var Va = class extends j {
	constructor(...e) {
		super(...e), this.title = "Energy Flow", this.nodes = [];
	}
	static {
		this.properties = {
			title: { type: String },
			nodes: { attribute: !1 }
		};
	}
	static {
		this.styles = h`
    :host { display:block; }
    ic-glass-container { --glass-container-height:220px; }
    h3 {
      margin:0 0 24px;
      font-size:var(--en-title-md-size,18px);
      font-weight:var(--en-title-md-weight,600);
      line-height:var(--en-title-md-line-height,1.25);
      letter-spacing:var(--en-title-md-letter-spacing,-0.1px);
    }
    .flow { display:flex; align-items:center; justify-content:center; gap:clamp(10px,3vw,30px); }
    .node { display:grid; min-width:70px; justify-items:center; gap:7px; text-align:center; }
    .node ha-icon { --mdc-icon-size:34px; color:var(--en-color-primary); }
    h3 { color:var(--en-heading-primary,var(--primary-text-color)); }
    .node span { color:var(--en-body-secondary,var(--secondary-text-color)); font-size:12px; }
    .arrow { opacity:.35; font-size:22px; }
  `;
	}
	render() {
		return T`<ic-glass-container><h3>${this.title}</h3><div class="flow">
      ${this.nodes.map((e, t) => T`
        ${t ? T`<span class="arrow">→</span>` : null}
        <div class="node"><ha-icon .icon=${e.icon}></ha-icon><strong>${e.label}</strong><span>${e.value ?? ""}</span></div>
      `)}
    </div></ic-glass-container>`;
	}
};
customElements.define("ic-scene-flow-card", Va);
//#endregion
//#region src/components/scenes/solar/solar-energy-scene.ts
var Ha = class extends $ {
	render() {
		return T`<ic-scene-page-container title="Solar Energy" subtitle="Production, consumption and grid contribution">
      <ic-scene-hero-card title="Solar Production" icon="mdi:solar-panel-large"
        .status=${{
			label: "Producing",
			state: "active"
		}}
        .primary=${{
			title: "Current",
			value: "5.8",
			unit: "kW"
		}}
        .details=${[{
			title: "Today",
			value: "18.4",
			unit: "kWh"
		}]}
      ></ic-scene-hero-card>
      <ic-scene-metric-grid .metrics=${ya}></ic-scene-metric-grid>
      <ic-scene-flow-card title="Live Energy Flow" .nodes=${[
			{
				label: "Solar",
				value: "5.8 kW",
				icon: "mdi:solar-power"
			},
			{
				label: "Home",
				value: "3.1 kW",
				icon: "mdi:home-lightning-bolt"
			},
			{
				label: "Battery",
				value: "1.2 kW",
				icon: "mdi:battery-charging"
			},
			{
				label: "Grid",
				value: "1.5 kW",
				icon: "mdi:transmission-tower-export"
			}
		]}></ic-scene-flow-card>
      <ic-scene-chart-card title="Solar Trend" subtitle="24-hour production and home consumption"
        .series=${ba}></ic-scene-chart-card>
      <energy-insight-card .insight=${xa}></energy-insight-card>
    </ic-scene-page-container>`;
	}
};
customElements.define("energy-solar-scene", Ha);
//#endregion
//#region src/components/scenes/battery/battery-storage-scene.ts
var Ua = class extends $ {
	render() {
		return T`<ic-scene-page-container title="Battery Storage" subtitle="Storage health and household support">
      <ic-scene-hero-card title="Home Battery" icon="mdi:home-battery"
        .status=${{
			label: "Charging",
			state: "active"
		}}
        .primary=${{
			title: "Battery Level",
			value: "72",
			unit: "%"
		}}
        .details=${[{
			title: "Power",
			value: "2.5",
			unit: "kW"
		}]}
      ></ic-scene-hero-card>
      <ic-scene-metric-grid .metrics=${Sa}></ic-scene-metric-grid>
      <ic-scene-flow-card title="Battery Energy Flow" .nodes=${[
			{
				label: "Solar",
				value: "3.7 kW",
				icon: "mdi:solar-power"
			},
			{
				label: "Battery",
				value: "+2.5 kW",
				icon: "mdi:battery-charging"
			},
			{
				label: "Home",
				value: "1.2 kW",
				icon: "mdi:home-lightning-bolt"
			}
		]}></ic-scene-flow-card>
      <ic-scene-chart-card title="Charge / Discharge Timeline" subtitle="Positive values charge; negative values support the home"
        .series=${Ca}></ic-scene-chart-card>
      <energy-insight-card .insight=${wa}></energy-insight-card>
    </ic-scene-page-container>`;
	}
};
customElements.define("energy-battery-scene", Ua);
//#endregion
//#region src/components/scenes/appliance/appliance-intelligence-scene.ts
var Wa = class extends $ {
	render() {
		return T`<ic-scene-page-container title="Appliance Intelligence" subtitle="Energy usage by household circuit">
      <ic-scene-hero-card title="Energy Usage by Appliance" icon="mdi:devices"
        .status=${{
			label: "4 active circuits",
			state: "active"
		}}
        .primary=${{
			title: "Active Load",
			value: "5.0",
			unit: "kW"
		}}
        .details=${[{
			title: "Top Consumer",
			value: "Air Conditioner"
		}]}
      ></ic-scene-hero-card>
      <ic-scene-metric-grid .metrics=${Ta}></ic-scene-metric-grid>
      <ic-scene-chart-card title="Running Timeline" subtitle="When major appliances were drawing power today"
        .series=${Ea}></ic-scene-chart-card>
      <energy-insight-card .insight=${Da}></energy-insight-card>
    </ic-scene-page-container>`;
	}
};
customElements.define("energy-appliance-scene", Wa);
//#endregion
//#region src/components/scenes/pet/pet-energy-scene.ts
var Ga = class extends $ {
	render() {
		return T`<ic-scene-page-container title="Pet Energy" subtitle="A playful view of energy used by pet devices">
      <ic-scene-hero-card title="Pet Energy" icon="mdi:paw"
        .status=${{
			label: "All devices normal",
			state: "active"
		}}
        .primary=${{
			title: "Current Load",
			value: "58",
			unit: "W"
		}}
        .details=${[{
			title: "This Month",
			value: "18.4",
			unit: "kWh"
		}]}
      ></ic-scene-hero-card>
      <ic-scene-metric-grid .metrics=${Oa}></ic-scene-metric-grid>
      <energy-insight-card .insight=${ka}></energy-insight-card>
    </ic-scene-page-container>`;
	}
};
customElements.define("energy-pet-scene", Ga);
//#endregion
//#region src/data/mock-hass.ts
function Ka() {
	let e = {
		"sensor.main_all_power_rt": {
			entity_id: "sensor.main_all_power_rt",
			state: "3420",
			attributes: {
				friendly_name: "Total Home Power",
				unit_of_measurement: "W",
				device_class: "power",
				last_period: 2900
			}
		},
		"sensor.today_usage": {
			entity_id: "sensor.today_usage",
			state: "18.6",
			attributes: {
				friendly_name: "Today's Energy Usage",
				unit_of_measurement: "kWh",
				device_class: "energy",
				last_period: 21.4
			}
		},
		"sensor.main_all_energy_fwd_total": {
			entity_id: "sensor.main_all_energy_fwd_total",
			state: "14820",
			attributes: {
				friendly_name: "Total Energy Consumption",
				unit_of_measurement: "kWh",
				device_class: "energy"
			}
		},
		"sensor.solar_power": {
			entity_id: "sensor.solar_power",
			state: "4850",
			attributes: {
				friendly_name: "Solar Generation",
				unit_of_measurement: "W",
				device_class: "power",
				last_period: 4100
			}
		},
		"sensor.battery_power": {
			entity_id: "sensor.battery_power",
			state: "1200",
			attributes: {
				friendly_name: "Battery Charge Power",
				unit_of_measurement: "W",
				device_class: "power"
			}
		},
		"sensor.battery_level": {
			entity_id: "sensor.battery_level",
			state: "78",
			attributes: {
				friendly_name: "Home Battery SOC",
				unit_of_measurement: "%",
				device_class: "battery"
			}
		},
		"sensor.grid_power": {
			entity_id: "sensor.grid_power",
			state: "-230",
			attributes: {
				friendly_name: "Grid Feed-in Power",
				unit_of_measurement: "W",
				device_class: "power"
			}
		},
		"sensor.ac_power": {
			entity_id: "sensor.ac_power",
			state: "1450",
			attributes: {
				friendly_name: "Air Conditioner",
				unit_of_measurement: "W",
				device_class: "power",
				icon: "mdi:air-conditioner"
			}
		},
		"sensor.ev_power": {
			entity_id: "sensor.ev_power",
			state: "7200",
			attributes: {
				friendly_name: "EV Charger",
				unit_of_measurement: "W",
				device_class: "power",
				icon: "mdi:car-electric"
			}
		},
		"sensor.heater_power": {
			entity_id: "sensor.heater_power",
			state: "850",
			attributes: {
				friendly_name: "Water Heater",
				unit_of_measurement: "W",
				device_class: "power",
				icon: "mdi:water-boiler"
			}
		},
		"sensor.fridge_power": {
			entity_id: "sensor.fridge_power",
			state: "120",
			attributes: {
				friendly_name: "Refrigerator",
				unit_of_measurement: "W",
				device_class: "power",
				icon: "mdi:fridge"
			}
		},
		"sensor.kitchen_power": {
			entity_id: "sensor.kitchen_power",
			state: "380",
			attributes: {
				friendly_name: "Kitchen Appliances",
				unit_of_measurement: "W",
				device_class: "power",
				icon: "mdi:microwave"
			}
		},
		"sensor.water_temperature": {
			entity_id: "sensor.water_temperature",
			state: "58.4",
			attributes: {
				friendly_name: "Water Temperature",
				unit_of_measurement: "°C",
				device_class: "temperature"
			}
		},
		"switch.water_heater": {
			entity_id: "switch.water_heater",
			state: "on",
			attributes: {
				friendly_name: "Water Heater Switch",
				icon: "mdi:water-boiler"
			}
		},
		"input_select.heating_status": {
			entity_id: "input_select.heating_status",
			state: "heating",
			attributes: {
				options: [
					"idle",
					"heating",
					"ready"
				],
				friendly_name: "Heating Status"
			}
		},
		"input_select.heating_strategy": {
			entity_id: "input_select.heating_strategy",
			state: "solar",
			attributes: {
				options: [
					"solar",
					"grid",
					"wait"
				],
				friendly_name: "Heating Strategy"
			}
		},
		"input_text.heating_reason": {
			entity_id: "input_text.heating_reason",
			state: "Surplus solar power exceeds 2.5 kW threshold.",
			attributes: { friendly_name: "Strategy Reason" }
		},
		"input_datetime.heating_target": {
			entity_id: "input_datetime.heating_target",
			state: "17:00:00",
			attributes: {
				has_time: !0,
				has_date: !1,
				friendly_name: "Target Time"
			}
		},
		"input_boolean.heating_override": {
			entity_id: "input_boolean.heating_override",
			state: "off",
			attributes: { friendly_name: "Manual Override" }
		}
	};
	return {
		states: e,
		language: "en",
		selectedLanguage: "en",
		locale: {
			language: "en",
			number_format: "language",
			time_format: "language",
			date_format: "language",
			first_weekday: "language"
		},
		themes: {
			default_theme: "default",
			default_dark_theme: "default",
			themes: {},
			darkMode: !0
		},
		selectedTheme: {
			theme: "default",
			dark: !0
		},
		callService: async (e, t, n) => (console.log(`[MockHass] callService: ${e}.${t}`, n), Promise.resolve()),
		callWS: async (t) => {
			if (t.type === "history/history_during_period") {
				let n = Date.now(), r = 3600 * 1e3, i = {};
				for (let a of t.entity_ids ?? []) i[a] = Array.from({ length: 24 }).map((t, i) => ({
					entity_id: a,
					state: String(Math.max(0, Math.round(1500 + 1200 * Math.sin(i / 24 * Math.PI * 2) + Math.random() * 200))),
					last_changed: (/* @__PURE__ */ new Date(n - (24 - i) * r)).toISOString(),
					last_updated: (/* @__PURE__ */ new Date(n - (24 - i) * r)).toISOString(),
					attributes: e[a]?.attributes ?? {}
				}));
				return i;
			}
			return [];
		},
		connection: {
			subscribeEvents: () => () => {},
			subscribeMessage: () => () => {},
			sendMessagePromise: async () => ({})
		}
	};
}
//#endregion
//#region src/components/panel/interactive-energy-panel.ts
var qa = class extends j {
	constructor(...e) {
		super(...e), this.narrow = !1, this.config = {}, this.activeTab = "overview", this.activeScene = "ev", this.themeListener = () => this.requestUpdate();
	}
	static {
		this.properties = {
			hass: { attribute: !1 },
			narrow: { type: Boolean },
			panel: { attribute: !1 },
			route: { attribute: !1 },
			config: { attribute: !1 },
			activeTab: { state: !0 },
			activeScene: { state: !0 }
		};
	}
	set hass(e) {
		this._hass = e, this.requestUpdate();
	}
	get hass() {
		return this._hass ||= Ka(), this._hass;
	}
	setConfig(e) {
		this.config = { ...e }, e.default_tab && (this.activeTab = e.default_tab), e.theme && re(e.theme), this.requestUpdate();
	}
	connectedCallback() {
		super.connectedCallback(), window.addEventListener("card-theme-changed", this.themeListener), this.panel?.config?.default_tab && (this.activeTab = this.panel.config.default_tab), this.panel?.config?.theme && re(this.panel.config.theme);
	}
	disconnectedCallback() {
		window.removeEventListener("card-theme-changed", this.themeListener), super.disconnectedCallback();
	}
	toggleMenu() {
		this.dispatchEvent(new CustomEvent("hass-toggle-menu", {
			bubbles: !0,
			composed: !0
		}));
	}
	selectTab(e) {
		this.activeTab = e;
	}
	selectScene(e) {
		this.activeScene = e;
	}
	getLiveState(e) {
		return this.hass.states?.[e]?.state;
	}
	static {
		this.styles = h`
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
	}
	render() {
		let e = this.config.title || this.panel?.config?.title || "Energy Interactive", t = this.getLiveState("sensor.solar_power") || "4.8 kW", n = this.getLiveState("sensor.main_all_power_rt") || "3.4 kW", r = this.getLiveState("sensor.battery_level") || "78%";
		return T`
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
              <span>${e}</span>
            </h1>
          </div>

          <div class="header-center">
            <div class="metric-pill solar">
              <ha-icon icon="mdi:solar-power"></ha-icon>
              <span>Solar: <strong>${t}</strong></span>
            </div>
            <div class="metric-pill power">
              <ha-icon icon="mdi:flash"></ha-icon>
              <span>Load: <strong>${n}</strong></span>
            </div>
            <div class="metric-pill battery">
              <ha-icon icon="mdi:battery-charging-70"></ha-icon>
              <span>Battery: <strong>${r}</strong></span>
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
	renderActiveTab() {
		switch (this.activeTab) {
			case "overview": return this.renderOverviewTab();
			case "analytics": return this.renderAnalyticsTab();
			case "circuits": return this.renderCircuitsTab();
			case "scenes": return this.renderScenesTab();
			case "automations": return this.renderAutomationsTab();
			case "settings": return this.renderSettingsTab();
			default: return this.renderOverviewTab();
		}
	}
	renderOverviewTab() {
		return T`
      <div class="overview-grid">
        <energy-kpi-section .hass=${this.hass}></energy-kpi-section>
        <energy-flow-diagram .hass=${this.hass}></energy-flow-diagram>
        <energy-circuit-section .hass=${this.hass}></energy-circuit-section>
      </div>
    `;
	}
	renderAnalyticsTab() {
		return T`
      <energy-trend-card
        .hass=${this.hass}
        .config=${{
			title: "Energy Historical Analytics",
			timeframe: "24H",
			chartMode: "line",
			fullWidth: !0,
			entities: [
				{
					entity: "sensor.solar_power",
					name: "Solar Generation",
					unit: "W",
					color: "#f59e0b"
				},
				{
					entity: "sensor.main_all_power_rt",
					name: "Total Consumption",
					unit: "W",
					color: "#38bdf8"
				},
				{
					entity: "sensor.battery_power",
					name: "Battery Charge",
					unit: "W",
					color: "#10b981"
				}
			]
		}}
      ></energy-trend-card>
    `;
	}
	renderCircuitsTab() {
		return T`
      <energy-circuit-section
        .hass=${this.hass}
        .config=${{
			title: "Detailed Circuit & Load Distribution",
			circuits: [
				{
					id: "ev",
					name: "EV Fast Charger",
					entity: "sensor.ev_power",
					icon: "mdi:car-electric"
				},
				{
					id: "ac",
					name: "Living Room HVAC",
					entity: "sensor.ac_power",
					icon: "mdi:air-conditioner"
				},
				{
					id: "heater",
					name: "Water Boiler",
					entity: "sensor.heater_power",
					icon: "mdi:water-boiler"
				},
				{
					id: "kitchen",
					name: "Kitchen & Oven",
					entity: "sensor.kitchen_power",
					icon: "mdi:microwave"
				},
				{
					id: "fridge",
					name: "Refrigerator",
					entity: "sensor.fridge_power",
					icon: "mdi:fridge"
				}
			]
		}}
      ></energy-circuit-section>
    `;
	}
	renderScenesTab() {
		return T`
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
	renderSceneContent() {
		switch (this.activeScene) {
			case "ev": return T`<energy-ev-charging-scene></energy-ev-charging-scene>`;
			case "solar": return T`<energy-solar-scene></energy-solar-scene>`;
			case "battery": return T`<energy-battery-scene></energy-battery-scene>`;
			case "appliance": return T`<energy-appliance-scene></energy-appliance-scene>`;
			case "pet": return T`<energy-pet-scene></energy-pet-scene>`;
			default: return T`<energy-ev-charging-scene></energy-ev-charging-scene>`;
		}
	}
	renderAutomationsTab() {
		return T`
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
				run_now: {
					domain: "switch",
					service: "turn_on",
					entity_id: "switch.water_heater"
				},
				pause: {
					domain: "switch",
					service: "turn_off",
					entity_id: "switch.water_heater"
				}
			}
		}}
      ></energy-automation-card>
    `;
	}
	renderSettingsTab() {
		return T`
      <energy-settings-card .hass=${this.hass}></energy-settings-card>
    `;
	}
};
customElements.define("interactive-energy-panel", qa), customElements.get("interactive-card-panel") || customElements.define("interactive-card-panel", class extends qa {});
//#endregion
//#region src/config/card-registry.ts
var Ja = Object.freeze([
	{
		id: "energy-kpi",
		title: "Energy KPI",
		category: "overview",
		icon: "mdi:gauge",
		component: "energy-kpi-section"
	},
	{
		id: "energy-trend",
		title: "Energy Trend",
		category: "analytics",
		icon: "mdi:chart-line",
		component: "energy-trend-card"
	},
	{
		id: "energy-flow",
		title: "Energy Flow",
		category: "overview",
		icon: "mdi:transit-connection-variant",
		component: "energy-flow-diagram"
	},
	{
		id: "active-circuits",
		title: "Active Circuits",
		category: "circuits",
		icon: "mdi:home-lightning-bolt",
		component: "energy-circuit-section"
	},
	{
		id: "ev-scene",
		title: "EV Scene",
		category: "scenes",
		icon: "mdi:ev-station",
		component: "energy-ev-charging-scene"
	},
	{
		id: "solar-scene",
		title: "Solar Scene",
		category: "scenes",
		icon: "mdi:solar-power",
		component: "energy-solar-scene"
	},
	{
		id: "battery-scene",
		title: "Battery Scene",
		category: "scenes",
		icon: "mdi:battery-charging",
		component: "energy-battery-scene"
	},
	{
		id: "insight",
		title: "Energy Insight",
		category: "analytics",
		icon: "mdi:lightbulb-on-outline",
		component: "energy-insight-card"
	},
	{
		id: "theme-selector",
		title: "Energy Theme Selector",
		category: "settings",
		icon: "mdi:palette",
		component: "energy-theme-selector"
	},
	{
		id: "energy-settings",
		title: "Energy Settings",
		category: "settings",
		icon: "mdi:cog-outline",
		component: "energy-settings-card"
	},
	{
		id: "energy-automation",
		title: "Energy Automation",
		category: "automation",
		icon: "mdi:robot-outline",
		component: "energy-automation-card"
	},
	{
		id: "interactive-energy-panel",
		title: "Energy Interactive Dashboard",
		category: "panel",
		icon: "mdi:view-dashboard",
		component: "interactive-energy-panel"
	}
]);
function Ya() {
	let e = window, t = e.customCards ?? [], n = new Set(t.map((e) => e.type));
	e.customCards = [...t, ...Ja.filter((e) => !n.has(e.component)).map((e) => ({
		type: e.component,
		name: e.title,
		description: `eNecess ${e.category} card`
	}))];
}
Ya(), console.log("Interactive Card Loaded");
//#endregion
