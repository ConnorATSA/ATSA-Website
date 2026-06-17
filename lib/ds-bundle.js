/* @ds-bundle: {"format":3,"namespace":"ATSADesignSystem_6b2905","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Radio","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Input.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"CourseCard","sourcePath":"components/marketing/CourseCard.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"52d6cc4ddc2c","components/core/Badge.jsx":"1e371393b697","components/core/Button.jsx":"58f145721b00","components/core/Card.jsx":"444ffc97f9ac","components/core/Icon.jsx":"df1d6558ab1f","components/core/IconButton.jsx":"c44d6f15029d","components/core/Stat.jsx":"4cde238384f6","components/core/Tag.jsx":"7766e3c4aaa1","components/core/styleInject.js":"f54b9b261802","components/feedback/Alert.jsx":"48d0c0966a8f","components/feedback/ProgressBar.jsx":"045c242086bd","components/forms/Checkbox.jsx":"47711df3cdfe","components/forms/Input.jsx":"ee3049e36f2d","components/forms/Select.jsx":"f6a74f978d01","components/forms/Switch.jsx":"8cb7722bfb1e","components/marketing/CourseCard.jsx":"e9909897bbf8","components/navigation/Tabs.jsx":"d46fa5d13dd1","ui_kits/challenge/CheckIn.jsx":"baeff18f4709","ui_kits/challenge/Growth.jsx":"40b52bbe63a4","ui_kits/challenge/Onboarding.jsx":"f6ae8aa84f56","ui_kits/challenge/Team.jsx":"349c9beeccc3","ui_kits/challenge/Tracker.jsx":"10af01bc382e","ui_kits/challenge/data/challenge-content.js":"b838bf6015d2","ui_kits/challenge/store.js":"da50c5954b98","ui_kits/lms/Chrome.jsx":"70ac25fa2349","ui_kits/lms/Views.jsx":"2622cc6a3140","ui_kits/lms/data.js":"81d46caf077f","ui_kits/marketing/CourseDetail.jsx":"305e8882b8c0","ui_kits/marketing/Courses.jsx":"3297bac031db","ui_kits/marketing/Home.jsx":"eed8cc82ee3b","ui_kits/marketing/SiteChrome.jsx":"19481ed3c50b","ui_kits/marketing/data.js":"b2b7adc8be76","ui_kits/mobile/Screens.jsx":"09585e077beb","ui_kits/mobile/data.js":"4701027c8b5d","ui_kits/mobile/ios-frame.jsx":"be3343be4b51"},"inlinedExternals":[],"unexposedExports":[{"name":"injectOnce","sourcePath":"components/core/styleInject.js"}]} */

(() => {

const __ds_ns = (window.ATSADesignSystem_6b2905 = window.ATSADesignSystem_6b2905 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ATSA Icon — a curated set of line icons (Lucide, MIT-licensed) drawn in a
 * single consistent stroke weight that matches the brand's clean, geometric feel.
 * 24×24 viewBox, 2px round strokes, currentColor.
 */

const PATHS = {
  // water / aquatic
  waves: '<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1C7 13 7 11 9.5 11c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1C7 19 7 17 9.5 17c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',
  droplet: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
  lifebuoy: '<circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/><circle cx="12" cy="12" r="4"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
  'shield-check': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  award: '<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/>',
  'graduation-cap': '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
  // people / users
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  // navigation
  'chevron-right': '<path d="m9 18 6-6-6-6"/>',
  'chevron-down': '<path d="m6 9 6 6 6-6"/>',
  'chevron-left': '<path d="m15 18-6-6 6-6"/>',
  'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  'arrow-up-right': '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  menu: '<line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  // status
  check: '<path d="M20 6 9 17l-5-5"/>',
  'check-circle': '<path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>',
  'alert-triangle': '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  star: '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.43a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"/>',
  // objects
  calendar: '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  'map-pin': '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  phone: '<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>',
  mail: '<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/>',
  'book-open': '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
  play: '<polygon points="6 3 20 12 6 21 6 3"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
  bell: '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',
  home: '<path d="M3 9.5 12 3l9 6.5"/><path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10"/>',
  plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
  minus: '<path d="M5 12h14"/>',
  'credit-card': '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>',
  'file-text': '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  settings: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
  'log-out': '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>'
};
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  color = 'currentColor',
  className = '',
  style = {},
  ...rest
}) {
  const inner = PATHS[name];
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className,
    style: {
      display: 'inline-block',
      flexShrink: 0,
      verticalAlign: 'middle',
      ...style
    },
    "aria-hidden": "true",
    dangerouslySetInnerHTML: inner ? {
      __html: inner
    } : undefined
  }, rest));
}
const ICON_NAMES = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/styleInject.js
try { (() => {
/**
 * injectOnce — append a component's CSS to <head> exactly once per id.
 * Lets ATSA components ship real :hover / :focus-visible / :active states
 * while staying styled purely through the design-system CSS variables.
 */
const injected = new Set();
function injectOnce(id, css) {
  if (typeof document === 'undefined') return;
  if (injected.has(id)) return;
  injected.add(id);
  const el = document.createElement('style');
  el.setAttribute('data-atsa-style', id);
  el.textContent = css;
  document.head.appendChild(el);
}
Object.assign(__ds_scope, { injectOnce });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/styleInject.js", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.atsa-avatar {
  display: inline-flex; align-items: center; justify-content: center;
  border-radius: var(--radius-pill); overflow: hidden; flex-shrink: 0;
  font-family: var(--font-heading); font-weight: var(--fw-semibold);
  background: var(--atsa-ocean-20); color: var(--atsa-ocean);
  border: 2px solid #fff; box-shadow: var(--shadow-xs);
  user-select: none;
}
.atsa-avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }
.atsa-avatar--xs { width: 28px; height: 28px; font-size: 11px; }
.atsa-avatar--sm { width: 36px; height: 36px; font-size: 13px; }
.atsa-avatar--md { width: 44px; height: 44px; font-size: 15px; }
.atsa-avatar--lg { width: 56px; height: 56px; font-size: 19px; }
.atsa-avatar--xl { width: 72px; height: 72px; font-size: 24px; }
.atsa-avatar--teal { background: var(--atsa-teal-20); color: #0E7D6C; }
.atsa-avatar--navy { background: var(--atsa-navy); color: #fff; }
.atsa-avatar--sand { background: var(--atsa-sand); color: #6B5A38; }
.atsa-avatar-group { display: inline-flex; }
.atsa-avatar-group > .atsa-avatar + .atsa-avatar { margin-left: -10px; }
`;
function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map(p => p[0] || '').join('').toUpperCase();
}

/** ATSA Avatar — circular user mark from an image or initials. */
function Avatar({
  name = '',
  src,
  size = 'md',
  tone = 'ocean',
  className = '',
  ...rest
}) {
  __ds_scope.injectOnce('avatar', CSS);
  const cls = ['atsa-avatar', `atsa-avatar--${size}`, !src ? `atsa-avatar--${tone}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    title: name
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials(name));
}

/** Overlapping cluster of avatars. */
function AvatarGroup({
  children,
  className = '',
  ...rest
}) {
  __ds_scope.injectOnce('avatar', CSS);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['atsa-avatar-group', className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Avatar, AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.atsa-badge {
  display: inline-flex; align-items: center; gap: 5px;
  font-family: var(--font-heading); font-weight: var(--fw-semibold);
  font-size: var(--fs-xs); line-height: 1; letter-spacing: 0.01em;
  padding: 5px 10px; border-radius: var(--radius-pill);
  border: 1px solid transparent; white-space: nowrap;
}
.atsa-badge--dot::before { content: ""; width: 6px; height: 6px; border-radius: 999px; background: currentColor; }
.atsa-badge--navy    { background: var(--atsa-navy-20); color: var(--atsa-navy); }
.atsa-badge--ocean   { background: var(--atsa-ocean-20); color: var(--atsa-ocean); }
.atsa-badge--aqua    { background: var(--atsa-aqua-20); color: #0E84AE; }
.atsa-badge--teal    { background: var(--atsa-teal-20); color: #0E7D6C; }
.atsa-badge--sand    { background: var(--atsa-sand); color: #6B5A38; }
.atsa-badge--success { background: var(--atsa-success-bg); color: var(--atsa-success); }
.atsa-badge--warning { background: var(--atsa-warning-bg); color: var(--atsa-warning); }
.atsa-badge--danger  { background: var(--atsa-danger-bg); color: var(--atsa-danger); }
.atsa-badge--solid   { background: var(--atsa-navy); color: #fff; }
.atsa-badge--outline { background: transparent; color: var(--atsa-navy); border-color: var(--border-default); }
`;

/** ATSA Badge — a compact status / category pill. */
function Badge({
  children,
  tone = 'navy',
  dot = false,
  icon,
  className = '',
  ...rest
}) {
  __ds_scope.injectOnce('badge', CSS);
  const cls = ['atsa-badge', `atsa-badge--${tone}`, dot ? 'atsa-badge--dot' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 13
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.atsa-btn {
  --_bg: var(--atsa-navy);
  --_fg: #fff;
  --_bd: transparent;
  --_bg-hover: var(--atsa-navy-deep);
  display: inline-flex; align-items: center; justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-heading);
  font-weight: var(--fw-semibold);
  line-height: 1;
  border: var(--border-medium) solid var(--_bd);
  border-radius: var(--radius-pill);
  background: var(--_bg);
  color: var(--_fg);
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  transition: background var(--dur-fast) var(--ease-standard),
              border-color var(--dur-fast) var(--ease-standard),
              color var(--dur-fast) var(--ease-standard),
              transform var(--dur-fast) var(--ease-standard),
              box-shadow var(--dur-fast) var(--ease-standard);
}
.atsa-btn:hover { background: var(--_bg-hover); }
.atsa-btn:active { transform: translateY(1px); }
.atsa-btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 var(--ring-offset) #fff, 0 0 0 calc(var(--ring-offset) + var(--ring-width)) var(--focus-ring);
}
.atsa-btn[disabled], .atsa-btn[aria-disabled="true"] {
  opacity: 0.45; cursor: not-allowed; transform: none; pointer-events: none;
}
.atsa-btn--full { width: 100%; }

/* sizes */
.atsa-btn--sm { font-size: var(--fs-sm); padding: 8px 16px; }
.atsa-btn--md { font-size: var(--fs-body); padding: 11px 22px; }
.atsa-btn--lg { font-size: var(--fs-lg); padding: 15px 30px; }

/* variants */
.atsa-btn--primary { --_bg: var(--atsa-navy); --_fg: #fff; --_bg-hover: var(--atsa-navy-deep); }
.atsa-btn--accent  { --_bg: var(--atsa-teal); --_fg: var(--atsa-navy); --_bg-hover: var(--atsa-teal-80); }
.atsa-btn--ocean   { --_bg: var(--atsa-ocean); --_fg: #fff; --_bg-hover: #185f9c; }
.atsa-btn--secondary {
  --_bg: transparent; --_fg: var(--atsa-navy); --_bd: var(--atsa-navy); --_bg-hover: var(--atsa-cloud);
}
.atsa-btn--ghost {
  --_bg: transparent; --_fg: var(--atsa-navy); --_bd: transparent; --_bg-hover: var(--atsa-cloud);
}
.atsa-btn--subtle {
  --_bg: var(--atsa-cloud); --_fg: var(--atsa-navy); --_bd: transparent; --_bg-hover: var(--atsa-cloud-deep);
}
.atsa-btn--danger { --_bg: var(--atsa-danger); --_fg: #fff; --_bg-hover: #b83f2e; }
/* on navy surfaces */
.atsa-btn--inverse { --_bg: #fff; --_fg: var(--atsa-navy); --_bd: transparent; --_bg-hover: var(--atsa-cloud); }
.atsa-btn--inverse.atsa-btn--secondary {
  --_bg: transparent; --_fg: #fff; --_bd: rgba(255,255,255,0.5); --_bg-hover: rgba(255,255,255,0.12);
}
`;
const SIZE_ICON = {
  sm: 16,
  md: 18,
  lg: 20
};

/**
 * ATSA Button — the brand's primary call-to-action control.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  href,
  disabled = false,
  className = '',
  ...rest
}) {
  __ds_scope.injectOnce('button', CSS);
  const isInverse = variant === 'inverse' || variant === 'inverse-secondary';
  const baseVariant = variant === 'inverse-secondary' ? 'secondary' : variant;
  const cls = ['atsa-btn', `atsa-btn--${baseVariant === 'inverse' ? 'inverse' : baseVariant}`, isInverse && variant === 'inverse-secondary' ? 'atsa-btn--inverse' : '', `atsa-btn--${size}`, fullWidth ? 'atsa-btn--full' : '', className].filter(Boolean).join(' ');
  const sz = SIZE_ICON[size] || 18;
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: sz
  }) : null, children ? /*#__PURE__*/React.createElement("span", null, children) : null, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: sz
  }) : null);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: cls
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    disabled: disabled
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.atsa-card {
  background: var(--surface-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}
.atsa-card--flat { box-shadow: none; }
.atsa-card--raised { box-shadow: var(--shadow-md); border-color: transparent; }
.atsa-card--muted { background: var(--surface-muted); box-shadow: none; border-color: var(--border-subtle); }
.atsa-card--warm  { background: var(--surface-warm); box-shadow: none; border-color: transparent; }
.atsa-card--navy  { background: var(--surface-navy); border-color: transparent; color: var(--text-on-navy); }
.atsa-card--outline { box-shadow: none; border-color: var(--border-default); }
.atsa-card--interactive { cursor: pointer; transition: box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard); }
.atsa-card--interactive:hover { box-shadow: var(--shadow-lg); transform: translateY(-3px); border-color: transparent; }
.atsa-card__pad--none { padding: 0; }
.atsa-card__pad--sm { padding: var(--space-4); }
.atsa-card__pad--md { padding: var(--space-5); }
.atsa-card__pad--lg { padding: var(--space-6); }
`;

/** ATSA Card — the standard surface container. Soft corners, cool shadow. */
function Card({
  children,
  variant = 'default',
  padding = 'md',
  interactive = false,
  className = '',
  ...rest
}) {
  __ds_scope.injectOnce('card', CSS);
  const cls = ['atsa-card', variant !== 'default' ? `atsa-card--${variant}` : '', `atsa-card__pad--${padding}`, interactive ? 'atsa-card--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.atsa-iconbtn {
  --_bg: transparent; --_fg: var(--atsa-navy); --_bg-hover: var(--atsa-cloud);
  display: inline-flex; align-items: center; justify-content: center;
  border: none; border-radius: var(--radius-pill); background: var(--_bg); color: var(--_fg);
  cursor: pointer; padding: 0;
  transition: background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard);
}
.atsa-iconbtn:hover { background: var(--_bg-hover); }
.atsa-iconbtn:focus-visible {
  outline: none; box-shadow: 0 0 0 var(--ring-offset) #fff, 0 0 0 calc(var(--ring-offset) + var(--ring-width)) var(--focus-ring);
}
.atsa-iconbtn[disabled] { opacity: 0.4; cursor: not-allowed; }
.atsa-iconbtn--sm { width: 32px; height: 32px; }
.atsa-iconbtn--md { width: 40px; height: 40px; }
.atsa-iconbtn--lg { width: 48px; height: 48px; }
.atsa-iconbtn--solid  { --_bg: var(--atsa-navy); --_fg: #fff; --_bg-hover: var(--atsa-navy-deep); }
.atsa-iconbtn--subtle { --_bg: var(--atsa-cloud); --_fg: var(--atsa-navy); --_bg-hover: var(--atsa-cloud-deep); }
.atsa-iconbtn--ghost  { --_bg: transparent; --_fg: var(--atsa-slate); --_bg-hover: var(--atsa-cloud); }
.atsa-iconbtn--inverse { --_bg: transparent; --_fg: #fff; --_bg-hover: rgba(255,255,255,0.14); }
`;
const SZ = {
  sm: 18,
  md: 20,
  lg: 22
};

/** ATSA IconButton — a square, pill-rounded button containing a single icon. */
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  className = '',
  ...rest
}) {
  __ds_scope.injectOnce('iconbtn', CSS);
  const cls = ['atsa-iconbtn', `atsa-iconbtn--${variant}`, `atsa-iconbtn--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-label": label
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: SZ[size] || 20
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.atsa-stat { display: flex; flex-direction: column; gap: 6px; }
.atsa-stat__top { display: flex; align-items: center; gap: 8px; }
.atsa-stat__icon { display: inline-flex; align-items: center; justify-content: center; width: 34px; height: 34px; border-radius: var(--radius-md); background: var(--atsa-aqua-20); color: var(--atsa-ocean); flex-shrink: 0; }
.atsa-stat__label { font-family: var(--font-heading); font-size: var(--fs-xs); font-weight: var(--fw-semibold); letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-muted); }
.atsa-stat__value { font-family: var(--font-heading); font-weight: var(--fw-bold); font-size: var(--fs-h1); line-height: 1; color: var(--text-primary); letter-spacing: -0.02em; }
.atsa-stat__foot { display: flex; align-items: center; gap: 5px; font-size: var(--fs-sm); color: var(--text-secondary); }
.atsa-stat__delta { display: inline-flex; align-items: center; gap: 3px; font-weight: var(--fw-semibold); }
.atsa-stat__delta--up { color: var(--atsa-success); }
.atsa-stat__delta--down { color: var(--atsa-danger); }
`;
const TONE_BG = {
  ocean: 'var(--atsa-ocean-20)',
  teal: 'var(--atsa-teal-20)',
  aqua: 'var(--atsa-aqua-20)',
  sand: 'var(--atsa-sand)'
};
const TONE_FG = {
  ocean: 'var(--atsa-ocean)',
  teal: '#0E7D6C',
  aqua: '#0E84AE',
  sand: '#6B5A38'
};

/** ATSA Stat — a single KPI with optional icon and trend delta. */
function Stat({
  label,
  value,
  icon,
  tone = 'ocean',
  delta,
  deltaDirection = 'up',
  foot,
  className = '',
  ...rest
}) {
  __ds_scope.injectOnce('stat', CSS);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['atsa-stat', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "atsa-stat__top"
  }, icon ? /*#__PURE__*/React.createElement("span", {
    className: "atsa-stat__icon",
    style: {
      background: TONE_BG[tone],
      color: TONE_FG[tone]
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  })) : null, /*#__PURE__*/React.createElement("span", {
    className: "atsa-stat__label"
  }, label)), /*#__PURE__*/React.createElement("div", {
    className: "atsa-stat__value"
  }, value), delta || foot ? /*#__PURE__*/React.createElement("div", {
    className: "atsa-stat__foot"
  }, delta ? /*#__PURE__*/React.createElement("span", {
    className: `atsa-stat__delta atsa-stat__delta--${deltaDirection}`
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: deltaDirection === 'up' ? 'arrow-up-right' : 'arrow-right',
    size: 14
  }), delta) : null, foot ? /*#__PURE__*/React.createElement("span", null, foot) : null) : null);
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.atsa-tag {
  display: inline-flex; align-items: center; gap: 6px;
  font-family: var(--font-body); font-weight: var(--fw-semibold);
  font-size: var(--fs-sm); line-height: 1;
  padding: 7px 12px; border-radius: var(--radius-sm);
  background: var(--atsa-cloud); color: var(--atsa-navy);
  border: 1px solid var(--border-subtle);
}
.atsa-tag--active { background: var(--atsa-navy); color: #fff; border-color: var(--atsa-navy); }
.atsa-tag--interactive { cursor: pointer; transition: background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard); }
.atsa-tag--interactive:hover { border-color: var(--atsa-ocean-40); background: #fff; }
.atsa-tag--active.atsa-tag--interactive:hover { background: var(--atsa-navy-deep); }
.atsa-tag__remove { display: inline-flex; cursor: pointer; opacity: 0.6; margin: -2px -4px -2px 0; }
.atsa-tag__remove:hover { opacity: 1; }
`;

/** ATSA Tag — a filter / category chip, optionally selectable or removable. */
function Tag({
  children,
  icon,
  active = false,
  interactive = false,
  onRemove,
  className = '',
  ...rest
}) {
  __ds_scope.injectOnce('tag', CSS);
  const cls = ['atsa-tag', active ? 'atsa-tag--active' : '', interactive || rest.onClick ? 'atsa-tag--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }) : null, children, onRemove ? /*#__PURE__*/React.createElement("span", {
    className: "atsa-tag__remove",
    role: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.atsa-alert {
  display: flex; gap: 12px; align-items: flex-start;
  padding: 14px 16px; border-radius: var(--radius-md);
  border: 1px solid transparent; font-family: var(--font-body); font-size: var(--fs-sm);
  line-height: 1.5; color: var(--text-primary);
}
.atsa-alert__icon { flex-shrink: 0; margin-top: 1px; }
.atsa-alert__body { flex: 1; min-width: 0; }
.atsa-alert__title { font-family: var(--font-heading); font-weight: var(--fw-semibold); font-size: var(--fs-body); margin: 0 0 2px; }
.atsa-alert__close { background: none; border: none; cursor: pointer; color: inherit; opacity: 0.55; padding: 2px; margin: -2px -4px 0 0; display: inline-flex; border-radius: var(--radius-xs); }
.atsa-alert__close:hover { opacity: 1; }
.atsa-alert--info    { background: var(--atsa-ocean-20); border-color: var(--atsa-ocean-40); }
.atsa-alert--info .atsa-alert__icon { color: var(--atsa-ocean); }
.atsa-alert--success { background: var(--atsa-success-bg); border-color: #BCE3D2; }
.atsa-alert--success .atsa-alert__icon { color: var(--atsa-success); }
.atsa-alert--warning { background: var(--atsa-warning-bg); border-color: #EFD9AE; }
.atsa-alert--warning .atsa-alert__icon { color: var(--atsa-warning); }
.atsa-alert--danger  { background: var(--atsa-danger-bg); border-color: #F1C7BF; }
.atsa-alert--danger .atsa-alert__icon { color: var(--atsa-danger); }
.atsa-alert--neutral { background: var(--atsa-cloud); border-color: var(--border-default); }
.atsa-alert--neutral .atsa-alert__icon { color: var(--atsa-ocean); }
`;
const ICONS = {
  info: 'info',
  success: 'check-circle',
  warning: 'alert-triangle',
  danger: 'alert-triangle',
  neutral: 'info'
};

/** ATSA Alert — an inline message banner for status / guidance. */
function Alert({
  variant = 'info',
  title,
  children,
  icon,
  onClose,
  className = '',
  ...rest
}) {
  __ds_scope.injectOnce('alert', CSS);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['atsa-alert', `atsa-alert--${variant}`, className].filter(Boolean).join(' '),
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "atsa-alert__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || ICONS[variant],
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    className: "atsa-alert__body"
  }, title ? /*#__PURE__*/React.createElement("p", {
    className: "atsa-alert__title"
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", null, children) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "atsa-alert__close",
    "aria-label": "Dismiss",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })) : null);
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.atsa-progress { display: flex; flex-direction: column; gap: 6px; }
.atsa-progress__head { display: flex; justify-content: space-between; align-items: baseline; font-family: var(--font-body); }
.atsa-progress__label { font-weight: var(--fw-semibold); font-size: var(--fs-sm); color: var(--text-primary); }
.atsa-progress__value { font-size: var(--fs-sm); color: var(--text-secondary); font-variant-numeric: tabular-nums; }
.atsa-progress__track { width: 100%; background: var(--atsa-cloud-deep); border-radius: var(--radius-pill); overflow: hidden; }
.atsa-progress__track--sm { height: 6px; }
.atsa-progress__track--md { height: 10px; }
.atsa-progress__track--lg { height: 14px; }
.atsa-progress__fill { height: 100%; border-radius: var(--radius-pill); transition: width var(--dur-slow) var(--ease-out); }
.atsa-progress__fill--ocean { background: var(--atsa-ocean); }
.atsa-progress__fill--teal  { background: var(--atsa-teal); }
.atsa-progress__fill--aqua  { background: var(--atsa-aqua); }
.atsa-progress__fill--navy  { background: var(--atsa-navy); }
`;

/** ATSA ProgressBar — course / task completion meter. */
function ProgressBar({
  value = 0,
  max = 100,
  label,
  showValue = false,
  tone = 'teal',
  size = 'md',
  valueFormat,
  className = '',
  ...rest
}) {
  __ds_scope.injectOnce('progress', CSS);
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const display = valueFormat ? valueFormat(value, max) : `${Math.round(pct)}%`;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['atsa-progress', className].filter(Boolean).join(' ')
  }, rest), label || showValue ? /*#__PURE__*/React.createElement("div", {
    className: "atsa-progress__head"
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "atsa-progress__label"
  }, label) : /*#__PURE__*/React.createElement("span", null), showValue ? /*#__PURE__*/React.createElement("span", {
    className: "atsa-progress__value"
  }, display) : null) : null, /*#__PURE__*/React.createElement("div", {
    className: `atsa-progress__track atsa-progress__track--${size}`,
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemax": max,
    "aria-valuemin": 0
  }, /*#__PURE__*/React.createElement("div", {
    className: `atsa-progress__fill atsa-progress__fill--${tone}`,
    style: {
      width: `${pct}%`
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.atsa-check { display: inline-flex; align-items: flex-start; gap: 10px; cursor: pointer; font-family: var(--font-body); font-size: var(--fs-body); color: var(--text-primary); }
.atsa-check input { position: absolute; opacity: 0; width: 0; height: 0; }
.atsa-check__box {
  width: 20px; height: 20px; flex-shrink: 0; margin-top: 1px;
  border: var(--border-medium) solid var(--border-strong); border-radius: var(--radius-xs);
  background: #fff; display: inline-flex; align-items: center; justify-content: center;
  color: #fff; transition: all var(--dur-fast) var(--ease-standard);
}
.atsa-check__box svg { opacity: 0; transform: scale(0.6); transition: all var(--dur-fast) var(--ease-out); }
.atsa-check input:checked + .atsa-check__box { background: var(--atsa-teal); border-color: var(--atsa-teal); }
.atsa-check input:checked + .atsa-check__box svg { opacity: 1; transform: scale(1); }
.atsa-check input:focus-visible + .atsa-check__box { box-shadow: 0 0 0 3px var(--atsa-aqua-20); }
.atsa-check:hover .atsa-check__box { border-color: var(--atsa-ocean); }
.atsa-check input:disabled ~ * { opacity: 0.5; }
.atsa-check--radio .atsa-check__box { border-radius: var(--radius-pill); }
.atsa-check--radio .atsa-check__dot { width: 9px; height: 9px; border-radius: 999px; background: #fff; opacity: 0; transform: scale(0.5); transition: all var(--dur-fast) var(--ease-out); }
.atsa-check--radio input:checked + .atsa-check__box { background: var(--atsa-teal); border-color: var(--atsa-teal); }
.atsa-check--radio input:checked + .atsa-check__box .atsa-check__dot { opacity: 1; transform: scale(1); }
.atsa-check__text { line-height: 1.4; }
.atsa-check__desc { display: block; font-size: var(--fs-sm); color: var(--text-secondary); margin-top: 2px; }
`;

/** ATSA Checkbox — teal-filled tick with optional description. */
function Checkbox({
  label,
  description,
  className = '',
  id,
  ...rest
}) {
  __ds_scope.injectOnce('check', CSS);
  return /*#__PURE__*/React.createElement("label", {
    className: ['atsa-check', className].filter(Boolean).join(' '),
    htmlFor: id
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    id: id
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "atsa-check__box"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    strokeWidth: 3
  })), label || description ? /*#__PURE__*/React.createElement("span", {
    className: "atsa-check__text"
  }, label, description ? /*#__PURE__*/React.createElement("span", {
    className: "atsa-check__desc"
  }, description) : null) : null);
}

/** ATSA Radio — single-select dot, same family as Checkbox. */
function Radio({
  label,
  description,
  className = '',
  id,
  ...rest
}) {
  __ds_scope.injectOnce('check', CSS);
  return /*#__PURE__*/React.createElement("label", {
    className: ['atsa-check', 'atsa-check--radio', className].filter(Boolean).join(' '),
    htmlFor: id
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    id: id
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "atsa-check__box"
  }, /*#__PURE__*/React.createElement("span", {
    className: "atsa-check__dot"
  })), label || description ? /*#__PURE__*/React.createElement("span", {
    className: "atsa-check__text"
  }, label, description ? /*#__PURE__*/React.createElement("span", {
    className: "atsa-check__desc"
  }, description) : null) : null);
}
Object.assign(__ds_scope, { Checkbox, Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.atsa-field { display: flex; flex-direction: column; gap: 6px; }
.atsa-field__label { font-family: var(--font-heading); font-weight: var(--fw-semibold); font-size: var(--fs-sm); color: var(--text-primary); }
.atsa-field__req { color: var(--atsa-danger); margin-left: 2px; }
.atsa-field__hint { font-size: var(--fs-xs); color: var(--text-secondary); }
.atsa-field__error { font-size: var(--fs-xs); color: var(--atsa-danger); display: flex; align-items: center; gap: 4px; }

.atsa-input-wrap { position: relative; display: flex; align-items: center; }
.atsa-input-wrap__icon { position: absolute; left: 14px; display: inline-flex; color: var(--text-muted); pointer-events: none; }
.atsa-input {
  width: 100%; box-sizing: border-box;
  font-family: var(--font-body); font-size: var(--fs-body); color: var(--text-primary);
  background: var(--surface-card);
  border: var(--border-medium) solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 11px 14px;
  transition: border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard), background var(--dur-fast) var(--ease-standard);
}
.atsa-input::placeholder { color: var(--atsa-navy-40); }
.atsa-input:hover { border-color: var(--atsa-ocean-40); }
.atsa-input:focus { outline: none; border-color: var(--atsa-ocean); box-shadow: 0 0 0 3px var(--atsa-aqua-20); background: #fff; }
.atsa-input--has-icon { padding-left: 42px; }
.atsa-input:disabled { background: var(--atsa-cloud); color: var(--text-muted); cursor: not-allowed; }
.atsa-input--error { border-color: var(--atsa-danger); }
.atsa-input--error:focus { box-shadow: 0 0 0 3px var(--atsa-danger-bg); }
textarea.atsa-input { resize: vertical; min-height: 96px; line-height: 1.5; }
`;

/** ATSA Field — label + hint + error wrapper for any control. */
function Field({
  label,
  hint,
  error,
  required,
  htmlFor,
  children,
  className = '',
  ...rest
}) {
  __ds_scope.injectOnce('field', CSS);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['atsa-field', className].filter(Boolean).join(' ')
  }, rest), label ? /*#__PURE__*/React.createElement("label", {
    className: "atsa-field__label",
    htmlFor: htmlFor
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "atsa-field__req"
  }, "*") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    className: "atsa-field__error"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "alert-triangle",
    size: 13
  }), error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "atsa-field__hint"
  }, hint) : null);
}

/** ATSA Input — single-line text field with optional label, icon, hint and error. */
function Input({
  label,
  hint,
  error,
  required,
  icon,
  id,
  className = '',
  textarea = false,
  ...rest
}) {
  __ds_scope.injectOnce('field', CSS);
  const inputCls = ['atsa-input', icon ? 'atsa-input--has-icon' : '', error ? 'atsa-input--error' : ''].filter(Boolean).join(' ');
  const control = textarea ? /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    className: inputCls
  }, rest)) : /*#__PURE__*/React.createElement("div", {
    className: "atsa-input-wrap"
  }, icon ? /*#__PURE__*/React.createElement("span", {
    className: "atsa-input-wrap__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  })) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    className: inputCls
  }, rest)));
  if (!label && !hint && !error) return control;
  return /*#__PURE__*/React.createElement(Field, {
    label: label,
    hint: hint,
    error: error,
    required: required,
    htmlFor: id,
    className: className
  }, control);
}
Object.assign(__ds_scope, { Field, Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.atsa-select-wrap { position: relative; display: flex; align-items: center; }
.atsa-select-wrap__chev { position: absolute; right: 14px; display: inline-flex; color: var(--text-muted); pointer-events: none; }
.atsa-select {
  width: 100%; box-sizing: border-box; appearance: none; -webkit-appearance: none;
  font-family: var(--font-body); font-size: var(--fs-body); color: var(--text-primary);
  background: var(--surface-card);
  border: var(--border-medium) solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 11px 40px 11px 14px; cursor: pointer;
  transition: border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard);
}
.atsa-select:hover { border-color: var(--atsa-ocean-40); }
.atsa-select:focus { outline: none; border-color: var(--atsa-ocean); box-shadow: 0 0 0 3px var(--atsa-aqua-20); }
.atsa-select:disabled { background: var(--atsa-cloud); color: var(--text-muted); cursor: not-allowed; }
`;

/** ATSA Select — native dropdown styled to match the brand inputs. */
function Select({
  label,
  hint,
  error,
  required,
  id,
  options = [],
  placeholder,
  children,
  className = '',
  ...rest
}) {
  __ds_scope.injectOnce('select', CSS);
  const control = /*#__PURE__*/React.createElement("div", {
    className: "atsa-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    className: "atsa-select"
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder) : null, options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  }), children), /*#__PURE__*/React.createElement("span", {
    className: "atsa-select-wrap__chev"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18
  })));
  if (!label && !hint && !error) return control;
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    hint: hint,
    error: error,
    required: required,
    htmlFor: id,
    className: className
  }, control);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.atsa-switch { display: inline-flex; align-items: center; gap: 10px; cursor: pointer; font-family: var(--font-body); font-size: var(--fs-body); color: var(--text-primary); }
.atsa-switch input { position: absolute; opacity: 0; width: 0; height: 0; }
.atsa-switch__track {
  width: 44px; height: 26px; border-radius: var(--radius-pill); background: var(--atsa-navy-40);
  position: relative; flex-shrink: 0; transition: background var(--dur-base) var(--ease-standard);
}
.atsa-switch__thumb {
  position: absolute; top: 3px; left: 3px; width: 20px; height: 20px; border-radius: 999px;
  background: #fff; box-shadow: var(--shadow-sm); transition: transform var(--dur-base) var(--ease-out);
}
.atsa-switch input:checked + .atsa-switch__track { background: var(--atsa-teal); }
.atsa-switch input:checked + .atsa-switch__track .atsa-switch__thumb { transform: translateX(18px); }
.atsa-switch input:focus-visible + .atsa-switch__track { box-shadow: 0 0 0 3px var(--atsa-aqua-20); }
.atsa-switch input:disabled + .atsa-switch__track { opacity: 0.5; }
`;

/** ATSA Switch — a toggle for on/off settings. */
function Switch({
  label,
  className = '',
  id,
  ...rest
}) {
  __ds_scope.injectOnce('switch', CSS);
  return /*#__PURE__*/React.createElement("label", {
    className: ['atsa-switch', className].filter(Boolean).join(' '),
    htmlFor: id
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    id: id
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "atsa-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "atsa-switch__thumb"
  })), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CourseCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.atsa-course {
  display: flex; flex-direction: column; overflow: hidden;
  background: var(--surface-card); border: 1px solid var(--border-subtle);
  border-radius: var(--radius-card); box-shadow: var(--shadow-sm);
  transition: box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard);
}
.atsa-course--interactive { cursor: pointer; }
.atsa-course--interactive:hover { box-shadow: var(--shadow-lg); transform: translateY(-3px); }
.atsa-course__media {
  position: relative; height: 132px; display: flex; align-items: center; justify-content: center;
  overflow: hidden;
}
.atsa-course__media img { width: 100%; height: 100%; object-fit: cover; }
.atsa-course__media--navy  { background: var(--atsa-navy); color: var(--atsa-aqua-60); }
.atsa-course__media--ocean { background: var(--atsa-ocean); color: #cdeafb; }
.atsa-course__media--teal  { background: var(--atsa-teal); color: #eafffb; }
.atsa-course__media--aqua  { background: var(--atsa-aqua); color: #eaf9ff; }
.atsa-course__waves { position: absolute; left: 0; right: 0; bottom: -2px; opacity: 0.5; }
.atsa-course__pricetag {
  position: absolute; top: 12px; right: 12px;
  background: rgba(255,255,255,0.95); color: var(--atsa-navy); backdrop-filter: blur(4px);
  font-family: var(--font-heading); font-weight: var(--fw-bold); font-size: var(--fs-sm);
  padding: 5px 11px; border-radius: var(--radius-pill); box-shadow: var(--shadow-sm);
}
.atsa-course__body { padding: var(--space-5); display: flex; flex-direction: column; gap: 10px; flex: 1; }
.atsa-course__eyebrow { font-family: var(--font-heading); font-size: var(--fs-label); font-weight: var(--fw-semibold); letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-link); }
.atsa-course__title { font-family: var(--font-heading); font-weight: var(--fw-semibold); font-size: var(--fs-h3); line-height: 1.25; color: var(--text-primary); margin: 0; }
.atsa-course__desc { font-size: var(--fs-sm); line-height: 1.55; color: var(--text-secondary); margin: 0; }
.atsa-course__meta { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 2px; }
.atsa-course__meta span { display: inline-flex; align-items: center; gap: 5px; font-size: var(--fs-sm); color: var(--text-secondary); }
.atsa-course__meta svg { color: var(--atsa-ocean); }
.atsa-course__foot { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: auto; padding-top: 14px; border-top: 1px solid var(--border-subtle); }
.atsa-course__price { font-family: var(--font-heading); font-weight: var(--fw-bold); font-size: var(--fs-h4); color: var(--text-primary); }
.atsa-course__price small { font-weight: var(--fw-medium); font-size: var(--fs-xs); color: var(--text-muted); }
`;
const WAVE = /*#__PURE__*/React.createElement("svg", {
  className: "atsa-course__waves",
  width: "100%",
  height: "22",
  viewBox: "0 0 300 22",
  preserveAspectRatio: "none",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 11 q25 -10 50 0 t50 0 t50 0 t50 0 t50 0 t50 0",
  stroke: "currentColor",
  strokeWidth: "3",
  strokeLinecap: "round",
  fill: "none"
}));

/**
 * ATSA CourseCard — the brand's signature card for a training course / program.
 * Composes Badge + Button; an "A rising out of the water" icon header when no image.
 */
function CourseCard({
  title,
  category,
  description,
  icon = 'waves',
  accent = 'navy',
  image,
  duration,
  level,
  price,
  priceNote = 'inc. GST',
  accredited = false,
  ctaLabel = 'View course',
  href,
  onClick,
  footer,
  className = '',
  ...rest
}) {
  __ds_scope.injectOnce('course', CSS);
  const interactive = !!(href || onClick);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['atsa-course', interactive ? 'atsa-course--interactive' : '', className].filter(Boolean).join(' '),
    onClick: onClick
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: `atsa-course__media atsa-course__media--${accent}`
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: ""
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 52,
    strokeWidth: 2.2
  }), WAVE), price != null ? /*#__PURE__*/React.createElement("span", {
    className: "atsa-course__pricetag"
  }, typeof price === 'number' ? `$${price}` : price) : null), /*#__PURE__*/React.createElement("div", {
    className: "atsa-course__body"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      justifyContent: 'space-between'
    }
  }, category ? /*#__PURE__*/React.createElement("span", {
    className: "atsa-course__eyebrow"
  }, category) : /*#__PURE__*/React.createElement("span", null), accredited ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "sand",
    icon: "award"
  }, "Certificate") : null), /*#__PURE__*/React.createElement("h3", {
    className: "atsa-course__title"
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    className: "atsa-course__desc"
  }, description) : null, duration || level ? /*#__PURE__*/React.createElement("div", {
    className: "atsa-course__meta"
  }, duration ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "clock",
    size: 15
  }), duration) : null, level ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "users",
    size: 15
  }), level) : null) : null, /*#__PURE__*/React.createElement("div", {
    className: "atsa-course__foot"
  }, footer ? footer : /*#__PURE__*/React.createElement(React.Fragment, null, price != null ? /*#__PURE__*/React.createElement("span", {
    className: "atsa-course__price"
  }, typeof price === 'number' ? `$${price}` : price, " ", /*#__PURE__*/React.createElement("small", null, priceNote)) : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "primary",
    iconRight: "arrow-right",
    href: href,
    onClick: e => e.stopPropagation()
  }, ctaLabel)))));
}
Object.assign(__ds_scope, { CourseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CourseCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.atsa-tabs { display: flex; gap: 4px; border-bottom: 1.5px solid var(--border-default); }
.atsa-tabs--pills { border-bottom: none; gap: 8px; }
.atsa-tab {
  position: relative; display: inline-flex; align-items: center; gap: 7px;
  font-family: var(--font-heading); font-weight: var(--fw-semibold); font-size: var(--fs-sm);
  color: var(--text-secondary); background: none; border: none; cursor: pointer;
  padding: 12px 14px; border-radius: var(--radius-sm) var(--radius-sm) 0 0;
  transition: color var(--dur-fast) var(--ease-standard), background var(--dur-fast) var(--ease-standard);
}
.atsa-tab::after { content: ""; position: absolute; left: 10px; right: 10px; bottom: -1.5px; height: 3px; border-radius: 3px 3px 0 0; background: var(--atsa-teal); transform: scaleX(0); transition: transform var(--dur-base) var(--ease-out); }
.atsa-tab:hover { color: var(--text-primary); }
.atsa-tab--active { color: var(--atsa-navy); }
.atsa-tab--active::after { transform: scaleX(1); }
.atsa-tab__count { font-size: var(--fs-xs); background: var(--atsa-cloud-deep); color: var(--text-secondary); border-radius: var(--radius-pill); padding: 1px 7px; font-weight: var(--fw-semibold); }
.atsa-tab--active .atsa-tab__count { background: var(--atsa-teal-20); color: #0E7D6C; }

/* pills variant */
.atsa-tabs--pills .atsa-tab { border-radius: var(--radius-pill); padding: 9px 16px; }
.atsa-tabs--pills .atsa-tab::after { display: none; }
.atsa-tabs--pills .atsa-tab:hover { background: var(--atsa-cloud); }
.atsa-tabs--pills .atsa-tab--active { background: var(--atsa-navy); color: #fff; }
.atsa-tabs--pills .atsa-tab--active .atsa-tab__count { background: rgba(255,255,255,0.2); color: #fff; }
`;

/** ATSA Tabs — switch between views. Controlled (value) or uncontrolled (defaultValue). */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = 'underline',
  className = '',
  ...rest
}) {
  __ds_scope.injectOnce('tabs', CSS);
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && items[0].id));
  const active = value !== undefined ? value : internal;
  const select = id => {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['atsa-tabs', variant === 'pills' ? 'atsa-tabs--pills' : '', className].filter(Boolean).join(' '),
    role: "tablist"
  }, rest), items.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    type: "button",
    role: "tab",
    "aria-selected": active === t.id,
    className: ['atsa-tab', active === t.id ? 'atsa-tab--active' : ''].filter(Boolean).join(' '),
    onClick: () => select(t.id)
  }, t.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 16
  }) : null, t.label, t.count != null ? /*#__PURE__*/React.createElement("span", {
    className: "atsa-tab__count"
  }, t.count) : null)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/challenge/CheckIn.jsx
try { (() => {
// ATSA · 1% Better Challenge — daily check-in (today's action). window.CheckIn
function CheckIn({
  onCheckedIn,
  onGoTracker
}) {
  const {
    Button,
    Card,
    Icon,
    ProgressBar
  } = window.ATSADesignSystem_6b2905;
  const store = window.ChallengeStore;
  const [, force] = React.useState(0);
  const [note, setNote] = React.useState('');
  const [noteOpen, setNoteOpen] = React.useState(false);
  const day = store.currentDay();
  const info = window.CHALLENGE_DAYS[day];
  const doneToday = store.isDone(day);
  const allDone = store.completedCount() >= 100;
  const user = store.get().user || {};
  const firstName = (user.name || 'there').split(' ')[0];
  const streak = store.streak();
  const greet = (() => {
    const h = new Date().getHours();
    return h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
  })();
  const doCheckIn = () => {
    const res = store.checkIn(day);
    force(n => n + 1);
    onCheckedIn && onCheckedIn(res);
  };
  if (allDone) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '28px 22px 110px'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "navy",
      padding: "lg",
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        width: 64,
        height: 64,
        borderRadius: 999,
        background: 'var(--atsa-teal)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "award",
      size: 34
    })), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        fontSize: 26,
        margin: '0 0 8px'
      }
    }, "Day 100 \u2014 you did it."), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-on-navy)',
        fontSize: 15,
        lineHeight: 1.6,
        margin: '0 0 20px'
      }
    }, "A hundred 1% changes look like everything in hindsight. Better isn\u2019t a destination \u2014 it\u2019s a direction you keep choosing."), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      fullWidth: true,
      onClick: onGoTracker
    }, "See your 100 days")));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 22px 110px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--atsa-slate)'
    }
  }, greet, ","), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 23,
      color: 'var(--atsa-navy)'
    }
  }, firstName)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      background: streak > 0 ? 'var(--atsa-teal-20)' : 'var(--atsa-cloud)',
      color: streak > 0 ? '#0E7D6C' : 'var(--atsa-slate)',
      borderRadius: 999,
      padding: '8px 14px',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 15,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "droplet",
    size: 17
  }), " ", streak === 1 ? '1 day' : streak + ' days')), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    value: store.completedCount(),
    max: 100,
    tone: "ocean",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 6,
      fontSize: 12.5,
      color: 'var(--atsa-slate)'
    }
  }, /*#__PURE__*/React.createElement("span", null, store.completedCount(), " of 100 days"), /*#__PURE__*/React.createElement("span", null, store.percent(), "% complete"))), /*#__PURE__*/React.createElement(Card, {
    padding: "none",
    style: {
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)',
      border: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: info.themeColor,
      color: '#fff',
      padding: '18px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 44,
      height: 44,
      borderRadius: 12,
      background: 'rgba(255,255,255,0.18)',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: info.themeIcon,
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      opacity: 0.85,
      lineHeight: 1.3
    }
  }, "Theme ", info.themeN, " \xB7 ", info.themeName), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 1
    }
  }, "Day ", day))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 11.5,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--atsa-ocean)',
      marginBottom: 10
    }
  }, "Today\u2019s 1%"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 23,
      lineHeight: 1.3,
      color: 'var(--atsa-navy)',
      margin: '0 0 14px',
      letterSpacing: '-0.01em',
      textWrap: 'pretty'
    }
  }, info.action), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      background: 'var(--atsa-cloud)',
      borderRadius: 'var(--radius-md)',
      padding: '13px 15px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 18,
    style: {
      color: 'var(--atsa-ocean)',
      flexShrink: 0,
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.5,
      lineHeight: 1.55,
      color: 'var(--atsa-slate)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--atsa-navy)'
    }
  }, "Why it works."), " ", info.why)), doneToday ? null : noteOpen ? /*#__PURE__*/React.createElement("textarea", {
    value: note,
    onChange: e => setNote(e.target.value),
    rows: 3,
    placeholder: "Optional: how did it go? (saved with your day)",
    style: {
      width: '100%',
      boxSizing: 'border-box',
      marginTop: 14,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--atsa-navy)',
      border: '1.5px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '11px 13px',
      resize: 'vertical',
      lineHeight: 1.5
    }
  }) : null, doneToday ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      background: 'var(--atsa-teal-20)',
      borderRadius: 'var(--radius-md)',
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 34,
      height: 34,
      borderRadius: 999,
      background: 'var(--atsa-teal)',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 19,
    strokeWidth: 3,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 16,
      color: '#0E7D6C'
    }
  }, "Done for today"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#0E7D6C'
    }
  }, "Nice work. Come back tomorrow for Day ", Math.min(day + 1, 100), "."))) : /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    fullWidth: true,
    iconLeft: "check",
    onClick: doCheckIn
  }, "Mark today done"), !noteOpen ? /*#__PURE__*/React.createElement("button", {
    onClick: () => setNoteOpen(true),
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--atsa-ocean)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 14,
      cursor: 'pointer',
      padding: 6
    }
  }, "+ Add a reflection note") : null))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontSize: 13,
      color: 'var(--atsa-slate)',
      margin: '18px 24px 0',
      lineHeight: 1.5
    }
  }, "Missed a day? That\u2019s normal \u2014 just pick it up today. Consistency beats intensity."));
}
window.CheckIn = CheckIn;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/challenge/CheckIn.jsx", error: String((e && e.message) || e) }); }

// ui_kits/challenge/Growth.jsx
try { (() => {
// ATSA · 1% Better Challenge — badges + reflection journal. window.Growth
function Growth({
  onWriteReflection
}) {
  const {
    Card,
    Icon,
    Tabs
  } = window.ATSADesignSystem_6b2905;
  const store = window.ChallengeStore;
  const C = window.CHALLENGE;
  const [tab, setTab] = React.useState('badges');
  const s = store.get();
  const earned = new Set(s.badges);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 22px 110px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 26,
      color: 'var(--atsa-navy)',
      margin: '0 0 14px',
      letterSpacing: '-0.01em'
    }
  }, "Your growth"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "pills",
    value: tab,
    onChange: setTab,
    items: [{
      id: 'badges',
      label: 'Badges',
      count: earned.size
    }, {
      id: 'journal',
      label: 'Reflections',
      count: Object.keys(s.reflections).length
    }]
  })), tab === 'badges' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, store.BADGES.map(b => {
    const got = earned.has(b.id);
    return /*#__PURE__*/React.createElement(Card, {
      key: b.id,
      padding: "md",
      style: {
        textAlign: 'center',
        opacity: got ? 1 : 0.55,
        background: got ? '#fff' : 'var(--atsa-cloud)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        width: 52,
        height: 52,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        background: got ? 'var(--atsa-teal-20)' : 'var(--atsa-slate-20)',
        color: got ? '#0E7D6C' : 'var(--atsa-slate)'
      }
    }, got ? /*#__PURE__*/React.createElement(Icon, {
      name: b.icon,
      size: 26
    }) : /*#__PURE__*/React.createElement(Icon, {
      name: "award",
      size: 24
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        fontSize: 14.5,
        color: 'var(--atsa-navy)',
        lineHeight: 1.2
      }
    }, b.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--atsa-slate)',
        marginTop: 4,
        lineHeight: 1.4
      }
    }, got ? b.desc : 'Locked'));
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, C.themes.map(t => {
    const r = s.reflections[t.n];
    const prog = store.themeProgress(t.n);
    const unlocked = prog === 10 || !!r;
    return /*#__PURE__*/React.createElement(Card, {
      key: t.n,
      padding: "md",
      style: {
        borderLeft: `4px solid ${t.color}`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: r ? 10 : 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        width: 34,
        height: 34,
        borderRadius: 9,
        background: t.color,
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: t.icon,
      size: 18
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        fontSize: 15.5,
        color: 'var(--atsa-navy)'
      }
    }, t.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'var(--atsa-slate)'
      }
    }, prog, "/10 days")), /*#__PURE__*/React.createElement("button", {
      onClick: () => onWriteReflection(t.n),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: 'var(--atsa-ocean)',
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        fontSize: 13.5,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4
      }
    }, r ? 'Edit' : 'Write', " ", /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 15
    }))), r ? /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--atsa-cloud)',
        borderRadius: 'var(--radius-md)',
        padding: '12px 14px'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14,
        lineHeight: 1.55,
        color: 'var(--atsa-navy)',
        fontStyle: 'italic'
      }
    }, "\u201C", r.text, "\u201D")) : /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '8px 0 0',
        fontSize: 13,
        color: 'var(--atsa-slate)',
        lineHeight: 1.5
      }
    }, t.reflect));
  })));
}
window.Growth = Growth;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/challenge/Growth.jsx", error: String((e && e.message) || e) }); }

// ui_kits/challenge/Onboarding.jsx
try { (() => {
// ATSA · 1% Better Challenge — Onboarding (welcome + sign-up). window.Onboarding
function Onboarding({
  onDone
}) {
  const {
    Button,
    Input,
    Card,
    Checkbox,
    Switch,
    Icon
  } = window.ATSADesignSystem_6b2905;
  const C = window.CHALLENGE;
  const [step, setStep] = React.useState('welcome');
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    school: '',
    reminders: 'daily',
    consent: false
  });
  const set = (k, v) => setForm(f => ({
    ...f,
    [k]: v
  }));
  const canBegin = form.name.trim() && form.email.trim() && form.consent;
  const begin = () => {
    window.ChallengeStore.signUp({
      name: form.name.trim(),
      email: form.email.trim(),
      school: form.school.trim()
    });
    window.ChallengeStore.updateSettings({
      reminders: form.reminders
    });
    onDone();
  };
  if (step === 'welcome') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: '100%',
        background: 'var(--atsa-navy)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 600 600",
      style: {
        position: 'absolute',
        right: -120,
        bottom: -80,
        width: 560,
        opacity: 0.1
      },
      fill: "none",
      stroke: "#fff",
      strokeWidth: "3"
    }, [0, 1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement("path", {
      key: i,
      d: `M-20 ${180 + i * 70} q 80 -42 160 0 t 160 0 t 160 0 t 160 0 t 160 0`,
      strokeLinecap: "round"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        padding: '56px 28px 28px',
        display: 'flex',
        flexDirection: 'column',
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logos/atsa-icon.svg",
      alt: "ATSA",
      style: {
        width: 64,
        height: 64,
        marginBottom: 28
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        alignSelf: 'flex-start',
        padding: '6px 13px',
        borderRadius: 999,
        background: 'rgba(255,255,255,0.1)',
        border: '1px solid rgba(255,255,255,0.18)',
        fontFamily: 'var(--font-heading)',
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--atsa-aqua)',
        marginBottom: 20
      }
    }, "A 100-day teaching challenge"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        fontSize: 44,
        lineHeight: 1.02,
        letterSpacing: '-0.02em',
        margin: 0
      }
    }, "The 1% Better", /*#__PURE__*/React.createElement("br", null), "Challenge"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 18,
        lineHeight: 1.55,
        color: 'rgba(255,255,255,0.82)',
        margin: '18px 0 0',
        maxWidth: 420
      }
    }, C.meta.subtitle), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.14)',
        borderRadius: 'var(--radius-lg)',
        padding: '16px 18px',
        margin: '28px 0 0',
        display: 'flex',
        gap: 13,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "info",
      size: 20,
      style: {
        color: 'var(--atsa-aqua)',
        flexShrink: 0,
        marginTop: 1
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14,
        lineHeight: 1.55,
        color: 'rgba(255,255,255,0.86)'
      }
    }, C.meta.mathsNote)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'auto',
        paddingTop: 28,
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      fullWidth: true,
      iconRight: "arrow-right",
      onClick: () => setStep('signup')
    }, "Start the challenge"), /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        window.ChallengeStore.signUp({
          name: 'Mia Tran',
          email: 'mia@example.com',
          school: 'Toowoomba Swim Co.'
        });
        window.ChallengeStore.seedDemo(34);
        onDone();
      },
      style: {
        background: 'none',
        border: 'none',
        color: 'rgba(255,255,255,0.7)',
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        fontSize: 14,
        cursor: 'pointer',
        padding: 8
      }
    }, "Explore a demo account \u2192"))));
  }

  // sign-up form
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      background: 'var(--surface-page)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 24px 10px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setStep('welcome'),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'none',
      border: 'none',
      color: 'var(--atsa-ocean)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 14,
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 16
  }), " Back")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 24px 24px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 28,
      color: 'var(--atsa-navy)',
      margin: '0 0 6px',
      letterSpacing: '-0.01em'
    }
  }, "Create your account"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--atsa-slate)',
      margin: '0 0 24px',
      lineHeight: 1.5
    }
  }, "Just the basics \u2014 checking in each day takes one tap."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your name",
    placeholder: "e.g. Mia Tran",
    value: form.name,
    onChange: e => set('name', e.target.value),
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    icon: "mail",
    placeholder: "you@example.com",
    value: form.email,
    onChange: e => set('email', e.target.value),
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Swim school / team",
    placeholder: "e.g. Toowoomba Swim Co.",
    hint: "Optional \u2014 lets you join your team later.",
    value: form.school,
    onChange: e => set('school', e.target.value)
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--atsa-navy)',
      marginBottom: 8
    }
  }, "Reminders"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, [['daily', 'Daily nudge'], ['weekly', 'Weekly'], ['off', 'None']].map(([v, l]) => /*#__PURE__*/React.createElement("button", {
    key: v,
    onClick: () => set('reminders', v),
    style: {
      flex: 1,
      padding: '10px 8px',
      borderRadius: 10,
      cursor: 'pointer',
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 13.5,
      border: '1.5px solid ' + (form.reminders === v ? 'var(--atsa-ocean)' : 'var(--border-default)'),
      background: form.reminders === v ? 'var(--atsa-aqua-20)' : '#fff',
      color: form.reminders === v ? 'var(--atsa-navy)' : 'var(--atsa-slate)'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--atsa-cloud)',
      borderRadius: 'var(--radius-md)',
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: form.consent,
    onChange: e => set('consent', e.target.checked),
    label: "I agree to take part",
    description: "We store your name, email and reflections to run the challenge. You can export or delete your data anytime."
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    fullWidth: true,
    iconRight: "arrow-right",
    disabled: !canBegin,
    onClick: begin
  }, "Begin Day 1"))));
}
window.Onboarding = Onboarding;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/challenge/Onboarding.jsx", error: String((e && e.message) || e) }); }

// ui_kits/challenge/Team.jsx
try { (() => {
// ATSA · 1% Better Challenge — Team + friendly leaderboard. window.Team
// Demo team data (a real build pulls this from the user's org / team).
window.CHALLENGE_TEAM = {
  name: 'Toowoomba Swim Co.',
  members: [{
    name: 'Mia Tran',
    days: 34,
    streak: 34,
    you: true
  }, {
    name: 'Priya Nair',
    days: 41,
    streak: 12
  }, {
    name: 'Jack Doyle',
    days: 38,
    streak: 38
  }, {
    name: 'Sam Okafor',
    days: 30,
    streak: 6
  }, {
    name: 'Ella Brooks',
    days: 27,
    streak: 9
  }, {
    name: 'Noah Webb',
    days: 22,
    streak: 0
  }, {
    name: 'Aisha Khan',
    days: 19,
    streak: 19
  }]
};
function Team() {
  const {
    Card,
    Icon,
    Avatar,
    ProgressBar,
    Badge
  } = window.ATSADesignSystem_6b2905;
  const T = window.CHALLENGE_TEAM;
  // Friendly, non-competitive: rank by participation/consistency, celebrate everyone.
  const sorted = [...T.members].sort((a, b) => b.days - a.days);
  const active = T.members.filter(m => m.streak > 0).length;
  const avg = Math.round(T.members.reduce((s, m) => s + m.days, 0) / T.members.length);
  const medal = ['#C9892B', '#8C9BA6', '#B07B4F'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 22px 110px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 26,
      color: 'var(--atsa-navy)',
      margin: '0 0 2px',
      letterSpacing: '-0.01em'
    }
  }, "Your team"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      color: 'var(--atsa-slate)',
      margin: '0 0 18px'
    }
  }, T.name, " \xB7 moving forward together."), /*#__PURE__*/React.createElement(Card, {
    variant: "navy",
    padding: "md",
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 8,
      textAlign: 'center'
    }
  }, [[T.members.length, 'On the challenge'], [active, 'Active this week'], [avg, 'Avg. days done']].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 28,
      color: '#fff'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--text-on-navy)',
      lineHeight: 1.3
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      background: 'var(--atsa-teal-20)',
      borderRadius: 'var(--radius-md)',
      padding: '13px 15px',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 18,
    style: {
      color: '#0E7D6C',
      flexShrink: 0,
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13.5,
      lineHeight: 1.5,
      color: '#0E7D6C'
    }
  }, "This board celebrates showing up \u2014 not speed or winning. Every check-in lifts the whole team.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 11.5,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--atsa-slate)',
      marginBottom: 10
    }
  }, "Team check-ins"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, sorted.map((m, i) => /*#__PURE__*/React.createElement(Card, {
    key: m.name,
    padding: "sm",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      border: m.you ? '1.5px solid var(--atsa-ocean)' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 22,
      textAlign: 'center',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 14,
      color: i < 3 ? medal[i] : 'var(--atsa-navy-40)',
      flexShrink: 0
    }
  }, i + 1), /*#__PURE__*/React.createElement(Avatar, {
    name: m.name,
    tone: m.you ? 'ocean' : 'teal',
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--atsa-navy)'
    }
  }, m.name, m.you ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--atsa-ocean)',
      fontWeight: 700
    }
  }, " \xB7 You") : ''), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--atsa-slate)'
    }
  }, m.days, " days done")), m.streak > 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      color: '#0E7D6C',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 13.5,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "droplet",
    size: 15
  }), " ", m.streak) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--atsa-slate)'
    }
  }, "Resting")))));
}
window.Team = Team;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/challenge/Team.jsx", error: String((e && e.message) || e) }); }

// ui_kits/challenge/Tracker.jsx
try { (() => {
// ATSA · 1% Better Challenge — progress tracker (10×10 grid). window.Tracker
function Tracker({
  onOpenDay
}) {
  const {
    Card,
    Icon,
    ProgressBar,
    Stat
  } = window.ATSADesignSystem_6b2905;
  const store = window.ChallengeStore;
  const C = window.CHALLENGE;
  const done = store.get().done;
  const current = store.currentDay();
  const curInfo = window.CHALLENGE_DAYS[current];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 22px 110px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 26,
      color: 'var(--atsa-navy)',
      margin: '0 0 4px',
      letterSpacing: '-0.01em'
    }
  }, "Your 100 days"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      color: 'var(--atsa-slate)',
      margin: '0 0 20px'
    }
  }, "Ten themes \xB7 ten days each \xB7 one hundred tiny changes."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 10,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "sm",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 26,
      color: 'var(--atsa-navy)'
    }
  }, store.percent(), "%"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--atsa-slate)',
      fontWeight: 600
    }
  }, "Complete")), /*#__PURE__*/React.createElement(Card, {
    padding: "sm",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 26,
      color: 'var(--atsa-teal)'
    }
  }, store.completedCount()), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--atsa-slate)',
      fontWeight: 600
    }
  }, "Days done")), /*#__PURE__*/React.createElement(Card, {
    padding: "sm",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 26,
      color: 'var(--atsa-ocean)'
    }
  }, store.streak()), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--atsa-slate)',
      fontWeight: 600
    }
  }, "Day streak"))), /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 13,
      marginBottom: 22,
      borderLeft: `4px solid ${curInfo.themeColor}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 42,
      height: 42,
      borderRadius: 11,
      background: curInfo.themeColor,
      color: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: curInfo.themeIcon,
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--atsa-slate)',
      fontWeight: 600,
      letterSpacing: '0.04em',
      textTransform: 'uppercase'
    }
  }, "Currently on"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 16.5,
      color: 'var(--atsa-navy)'
    }
  }, "Theme ", curInfo.themeN, " \xB7 ", curInfo.themeName))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, C.themes.map(t => {
    const prog = store.themeProgress(t.n);
    return /*#__PURE__*/React.createElement("div", {
      key: t.n,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 18,
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        fontSize: 12,
        color: 'var(--atsa-navy-60)',
        textAlign: 'right',
        flexShrink: 0
      }
    }, t.n), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(10, 1fr)',
        gap: 5,
        flex: 1
      }
    }, t.days.map(day => {
      const isDone = !!done[day.d];
      const isCurrent = day.d === current;
      return /*#__PURE__*/React.createElement("button", {
        key: day.d,
        onClick: () => onOpenDay(day.d),
        title: `Day ${day.d}`,
        style: {
          aspectRatio: '1',
          borderRadius: 6,
          cursor: 'pointer',
          padding: 0,
          border: isCurrent ? '2px solid var(--atsa-navy)' : '1px solid ' + (isDone ? 'transparent' : 'var(--border-default)'),
          background: isDone ? t.color : '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform .12s'
        }
      }, isDone ? /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 11,
        strokeWidth: 3.5,
        color: "#fff"
      }) : /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 9,
          fontWeight: 600,
          color: 'var(--atsa-navy-40)'
        }
      }, day.d));
    })));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 11.5,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--atsa-slate)',
      marginBottom: 10
    }
  }, "The ten themes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, C.themes.map(t => {
    const prog = store.themeProgress(t.n);
    return /*#__PURE__*/React.createElement("div", {
      key: t.n,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        fontSize: 13.5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 12,
        height: 12,
        borderRadius: 4,
        background: t.color,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        color: 'var(--atsa-navy)',
        fontWeight: 600,
        fontFamily: 'var(--font-heading)'
      }
    }, t.name), /*#__PURE__*/React.createElement("span", {
      style: {
        color: prog === 10 ? '#0E7D6C' : 'var(--atsa-slate)',
        fontWeight: 600,
        fontVariantNumeric: 'tabular-nums'
      }
    }, prog, "/10"));
  }))));
}
window.Tracker = Tracker;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/challenge/Tracker.jsx", error: String((e && e.message) || e) }); }

// ui_kits/challenge/data/challenge-content.js
try { (() => {
/* =====================================================================
   ATSA · The 1% Better Challenge — full content set (source of truth)
   100 daily actions · 10 themes · 'why it works' · reflection prompts.
   Transcribed from the booklet (TR2 V1.0). Exposed as window.CHALLENGE.
   Theme colours are an on-brand aquatic ramp derived from the ATSA
   palette (navy → ocean → aqua → teal) — confirm against the booklet.
   ===================================================================== */
window.CHALLENGE = {
  meta: {
    title: 'The 1% Better Challenge',
    subtitle: '100 tiny changes. 100 days. A better teacher on the deck.',
    totalDays: 100,
    mathsNote: "1% better, every day, for 100 days isn't 100% — it compounds to about 2.7× better. The maths quietly over-delivers."
  },
  themes: [{
    n: 1,
    name: 'Connection & Rapport',
    color: '#0B3B5E',
    icon: 'heart',
    intro: 'Trust is the water everything else floats on. Before a learner will try, they need to feel seen and safe.',
    reflect: 'Which learner did you connect with this week — and what changed once you did?',
    days: [{
      d: 1,
      action: 'Learn one new learner’s name before they get in the water.',
      why: 'A child who hears their own name relaxes faster — the first signal they’re seen, not processed.'
    }, {
      d: 2,
      action: 'Get down to eye level for your first instruction every lesson.',
      why: 'Towering over a nervous child reads as threat; meeting their eye line reads as safety.'
    }, {
      d: 3,
      action: 'Greet each learner by name as they arrive on the deck.',
      why: 'The lesson starts the moment they see you. A named hello sets the tone.'
    }, {
      d: 4,
      action: 'Ask one learner about something outside swimming.',
      why: 'Two minutes of ‘I see the whole you’ buys ten minutes of trust in the water.'
    }, {
      d: 5,
      action: 'Name one thing a learner did well before correcting anything.',
      why: 'Brains learn faster when they feel safe. Lead with the win.'
    }, {
      d: 6,
      action: 'Use a learner’s name in your praise, not just ‘good job’.',
      why: '‘Good job’ is wallpaper. ‘Great reach, Mia’ is a memory.'
    }, {
      d: 7,
      action: 'Find the quiet child and give them a moment of full attention.',
      why: 'The loud ones get noticed by default. The quiet ones often hold the most.'
    }, {
      d: 8,
      action: 'Smile at a parent on the way past and tell them one good thing.',
      why: 'A ten-second positive turns a sceptic into an ally.'
    }, {
      d: 9,
      action: 'Ask about something a learner told you last week.',
      why: '‘How did the soccer game go?’ tells a child you carry them between lessons.'
    }, {
      d: 10,
      action: 'End every lesson with a specific, genuine sign-off.',
      why: 'How a lesson ends is what they carry home. Make the last twenty seconds count.'
    }]
  }, {
    n: 2,
    name: 'Clear Communication',
    color: '#14517D',
    icon: 'book-open',
    intro: 'A nervous child in the water has very little working memory to spare. Say less, show more, mean it.',
    reflect: 'Where did saying less get you more? Note one instruction you’ll keep short.',
    days: [{
      d: 11,
      action: 'Cut one instruction down to three words or fewer.',
      why: 'Working memory is small, especially when nervous and underwater. Fewer words, faster action.'
    }, {
      d: 12,
      action: 'Demonstrate it before you describe it.',
      why: 'A picture beats a paragraph. Show the shape, then add the word.'
    }, {
      d: 13,
      action: 'Give one instruction at a time, not three stacked together.',
      why: '‘Big arms, kick hard, look down’ is three lessons. Pick one.'
    }, {
      d: 14,
      action: 'Pause three seconds after a question before jumping in.',
      why: 'Processing takes time. Silence isn’t failure — it’s the child thinking.'
    }, {
      d: 15,
      action: 'Swap ‘don’t’ for what you do want.',
      why: '‘Don’t put your feet down’ loads the brain with feet down. ‘Float long’ gives it somewhere to go.'
    }, {
      d: 16,
      action: 'Use the same word for the same skill every time.',
      why: 'Consistency of language is consistency of learning.'
    }, {
      d: 17,
      action: 'Check understanding by asking them to show you, not tell you.',
      why: '‘Show me a star float’ reveals what ‘yes I understand’ hides.'
    }, {
      d: 18,
      action: 'Add a hand signal to one verbal cue.',
      why: 'A visual cue cuts through noise, water in ears, and a busy mind.'
    }, {
      d: 19,
      action: 'Lower your voice instead of raising it to get attention.',
      why: 'A loud pool gets louder when you compete with it. Drop your volume and watch them lean in.'
    }, {
      d: 20,
      action: 'Name the next step before you ask for it.',
      why: 'A child who knows what’s coming spends less energy on dread.'
    }]
  }, {
    n: 3,
    name: 'Inclusion & Neurodiversity',
    color: '#1C6FB5',
    icon: 'users',
    intro: 'Neurodiversity is the natural variation in how brains work — e.g. autism (ASD) or ADHD. Small adjustments open the lesson up for everyone.',
    reflect: 'What small adjustment made the biggest difference for one learner this week?',
    days: [{
      d: 21,
      action: 'Offer one hesitant learner a choice (‘noodle or kickboard?’).',
      why: 'Choice returns control to a child who feels they have none. Control lowers fear.'
    }, {
      d: 22,
      action: 'Give one learner a clear ‘first, then’.',
      why: 'Predictable structure is calming and lets them see the finish line.'
    }, {
      d: 23,
      action: 'Warn a learner before any sudden change.',
      why: 'Sensory surprises can feel like a threat. A heads-up turns a shock into a plan.'
    }, {
      d: 24,
      action: 'Let one learner watch a skill before being asked to try it.',
      why: 'Some children learn by observing first. Watching is participating.'
    }, {
      d: 25,
      action: 'Offer a quieter spot away from the splashy group.',
      why: 'Sensory overload — too much input at once — shuts learning down. A calmer corner reopens it.'
    }, {
      d: 26,
      action: 'Break one skill into the smallest possible step and mark it.',
      why: 'For a child who’s stuck, ‘face near the water’ is a win worth celebrating.'
    }, {
      d: 27,
      action: 'Accept a non-verbal yes — a nod, a thumbs up, a point.',
      why: 'Communication isn’t only speech. Honour the answer in whatever form it arrives.'
    }, {
      d: 28,
      action: 'Give one learner extra time without filling the silence.',
      why: 'Processing differences mean the answer is coming. Crowding it makes it slower.'
    }, {
      d: 29,
      action: 'Notice a learner’s special interest and use it (‘let’s be a shark’).',
      why: 'A child’s passion is a doorway. Walk through it instead of around it.'
    }, {
      d: 30,
      action: 'Reflect on one thing you’d have wanted done for you as a learner.',
      why: 'The best inclusive practice starts with ‘what did I need that I didn’t get?’'
    }]
  }, {
    n: 4,
    name: 'Safety & Awareness',
    color: '#2589C0',
    icon: 'lifebuoy',
    intro: 'Your eyes are the safety net. None of the rest matters if this slips.',
    reflect: 'What’s one safety habit that’s now automatic that wasn’t ten days ago?',
    days: [{
      d: 31,
      action: 'Scan the whole class every 30 seconds, even while teaching one child.',
      why: 'One child’s lesson never costs another child your watch.'
    }, {
      d: 32,
      action: 'Count your learners in and count them out.',
      why: 'A headcount is two seconds. Not doing one is the gap incidents live in.'
    }, {
      d: 33,
      action: 'Position yourself so you can see the deep end and the gate.',
      why: 'Where you stand decides what you can prevent. Choose the sightline.'
    }, {
      d: 34,
      action: 'Check the water temperature from a child’s perspective.',
      why: 'What’s ‘fine’ to a warm adult can be cold-shock to a small body.'
    }, {
      d: 35,
      action: 'Clear one trip or slip hazard on the deck before class.',
      why: 'Thirty seconds now beats an incident report later.'
    }, {
      d: 36,
      action: 'Reset one learner’s goggles or cap before they struggle.',
      why: 'Discomfort becomes distress becomes a refusal. Fix the small thing first.'
    }, {
      d: 37,
      action: 'Know exactly where your nearest rescue aid is right now.',
      why: 'In an emergency you won’t go looking — you’ll reach. Put it where your hand expects it.'
    }, {
      d: 38,
      action: 'Watch one learner’s face for signs of cold or fatigue.',
      why: 'Blue lips and a wandering gaze talk before the child does. Read them early.'
    }, {
      d: 39,
      action: 'Run one ‘what would I do if…’ scenario in your head this shift.',
      why: 'Rehearsed responses are fast responses. The brain does what it has practised.'
    }, {
      d: 40,
      action: 'Brief a new learner on one pool rule in plain language.',
      why: 'Rules keep children safe only if they understand them. Drop the jargon.'
    }]
  }, {
    n: 5,
    name: 'Feedback & Encouragement',
    color: '#36B6E0',
    icon: 'star',
    intro: 'We over-correct and under-celebrate. These ten tip the ratio back the other way.',
    reflect: 'Whose face lit up at your feedback this week? What exactly did you say?',
    days: [{
      d: 41,
      action: 'Make one piece of praise specific enough to repeat.',
      why: '‘Lovely straight legs’ tells a child what to do again. ‘Awesome’ tells them nothing.'
    }, {
      d: 42,
      action: 'Praise the effort, not just the outcome, for one learner.',
      why: 'Children praised for trying keep trying. Those praised only for winning quit when it’s hard.'
    }, {
      d: 43,
      action: 'Give one learner a ‘you couldn’t do that last week’ callback.',
      why: 'Naming visible progress is rocket fuel. Be the keeper of their wins.'
    }, {
      d: 44,
      action: 'Replace ‘no’ with ‘nearly — try it like this’.',
      why: 'A near miss is a step, not a failure. Frame it as the rung it is.'
    }, {
      d: 45,
      action: 'Let one learner hear you tell their parent something they did well.',
      why: 'Praise overheard hits twice as hard as praise delivered.'
    }, {
      d: 46,
      action: 'Give one learner a number to chase (‘three big arms’).',
      why: 'A concrete target turns vague effort into a game they can win.'
    }, {
      d: 47,
      action: 'Catch one learner doing the right thing and stop to mark it.',
      why: 'We notice mistakes by reflex. Make a point of catching the good.'
    }, {
      d: 48,
      action: 'Use the feedback sandwich only when it’s genuine, not formulaic.',
      why: 'Children smell a script. Mean the praise or skip it.'
    }, {
      d: 49,
      action: 'Ask one learner what they thought went well.',
      why: 'Self-assessment builds a learner who can coach themselves when you’re not there.'
    }, {
      d: 50,
      action: 'End one correction with belief (‘you’ve got this, I’ve seen it’).',
      why: 'Correction plus confidence is teaching. Correction alone is just criticism.'
    }]
  }, {
    n: 6,
    name: 'Lesson Craft & Technique',
    color: '#2FB6CB',
    icon: 'graduation-cap',
    intro: 'Learners learn by doing, not by listening to you. Sharpen the craft that gets them moving.',
    reflect: 'Which change to a lesson or drill worked best? How will you reuse it?',
    days: [{
      d: 51,
      action: 'Plan the first 60 seconds of one lesson before you teach it.',
      why: 'A strong start sets the whole tone. Don’t improvise the opening.'
    }, {
      d: 52,
      action: 'Build one lesson around a single clear objective.',
      why: 'A lesson that tries to fix everything fixes nothing. Pick the one thing.'
    }, {
      d: 53,
      action: 'Add one game that secretly drills the skill you’re teaching.',
      why: 'Children repeat for fun what they’d refuse as a drill. Hide the broccoli.'
    }, {
      d: 54,
      action: 'Reduce the talking-to-swimming ratio in one class.',
      why: 'More water time, fewer speeches. Doing is where the learning lives.'
    }, {
      d: 55,
      action: 'Use the pool edge, steps or wall as a teaching tool.',
      why: 'The environment is equipment. A wall push teaches streamline for free.'
    }, {
      d: 56,
      action: 'Isolate one part of a stroke before joining it to the whole.',
      why: 'Whole–part–whole works: break it down, polish the piece, put it back.'
    }, {
      d: 57,
      action: 'Change a drill that isn’t working rather than repeating it louder.',
      why: 'If it didn’t land in three goes, the problem is the drill, not the child.'
    }, {
      d: 58,
      action: 'Give one learner a slightly harder challenge to stretch them.',
      why: 'The child who’s coasting is the child who’s bored. Raise the bar a notch.'
    }, {
      d: 59,
      action: 'Use a clear visual target for one skill.',
      why: 'A point to reach pulls better technique than an instruction about the body.'
    }, {
      d: 60,
      action: 'Finish one skill on a success, even an easy one.',
      why: 'Ending on a win wires the brain to come back willing. Never end on the failed rep.'
    }]
  }, {
    n: 7,
    name: 'The Environment',
    color: '#16BFA6',
    icon: 'waves',
    intro: 'The best teachers shape the space on purpose. Decide the environment; don’t inherit it.',
    reflect: 'What did you notice from the learner’s eye level that you’d never seen before?',
    days: [{
      d: 61,
      action: 'Look at your teaching space from the child’s eye level once.',
      why: 'The glare, the depth, the echo — it’s a different pool from down there.'
    }, {
      d: 62,
      action: 'Reduce one source of background noise or distraction.',
      why: 'Every extra input competes with your voice. Quiet the room, sharpen the lesson.'
    }, {
      d: 63,
      action: 'Set up your equipment before learners arrive, not during.',
      why: 'Fumbling for a kickboard is dead time and lost attention. Be ready.'
    }, {
      d: 64,
      action: 'Use the warmest, calmest corner for your most nervous learner.',
      why: 'Place the right child in the right water. Environment can do half your job.'
    }, {
      d: 65,
      action: 'Check the glare and stand to spare their eyes.',
      why: 'A child squinting into the sun can’t watch your demo. Move so they can.'
    }, {
      d: 66,
      action: 'Make one transition between activities smoother and quicker.',
      why: 'Chaos lives in the gaps. Tighten the changeovers and behaviour improves.'
    }, {
      d: 67,
      action: 'Give one nervous learner a consistent ‘home base’ spot.',
      why: 'A known, safe place to return to lets a child venture further from it.'
    }, {
      d: 68,
      action: 'Remove one piece of clutter from your teaching zone.',
      why: 'A tidy space is a calm space — less to trip on, less to fixate on.'
    }, {
      d: 69,
      action: 'Notice the water depth relative to one small learner’s height.',
      why: '‘Chest deep’ for you is ‘over my head’ for them. Match the depth to the child.'
    }, {
      d: 70,
      action: 'Use temperature, light or quiet as a tool, not an accident.',
      why: 'Shape the environment on purpose. Decide it; don’t inherit it.'
    }]
  }, {
    n: 8,
    name: 'Parents & Families',
    color: '#1AA890',
    icon: 'user',
    intro: 'Parents fund, ferry and reinforce. Recruit them as partners and your 30 minutes a week multiply.',
    reflect: 'Which parent conversation shifted from worry to partnership? What did it?',
    days: [{
      d: 71,
      action: 'Tell one parent something specific their child achieved today.',
      why: 'Parents fund and ferry — pay them back in genuine, specific progress.'
    }, {
      d: 72,
      action: 'Explain the ‘why’ behind one drill to a watching parent.',
      why: 'A parent who understands the plan starts reinforcing it at home.'
    }, {
      d: 73,
      action: 'Give one parent a simple thing to practise (or not) at home.',
      why: 'You have 30 minutes a week; they have the bath every night. Recruit them.'
    }, {
      d: 74,
      action: 'Reassure one anxious parent about their child’s pace.',
      why: 'Comparison is the thief of a parent’s joy. Reset the timeline kindly.'
    }, {
      d: 75,
      action: 'Invite one parent’s insight (‘what helps them settle at home?’).',
      why: 'Parents are the experts on their child. Ask, and you’ll teach better.'
    }, {
      d: 76,
      action: 'Manage one expectation honestly before it becomes a complaint.',
      why: 'A hard truth told early and warmly beats a disappointment found late.'
    }, {
      d: 77,
      action: 'Acknowledge one parent’s effort getting their child there.',
      why: 'Wet towels, tantrums, the drive — showing up is work. Notice it.'
    }, {
      d: 78,
      action: 'Use plain language, not swim-teacher jargon, with one family.',
      why: '‘Streamline’ and ‘LTS levels’ mean nothing to most parents. Translate.'
    }, {
      d: 79,
      action: 'Thank one parent for trusting you with their child.',
      why: 'It’s a big thing to hand over a frightened child. Honour the trust out loud.'
    }, {
      d: 80,
      action: 'Help one family see the next milestone, not just today’s hurdle.',
      why: 'Parents stay the course when they can see the road ahead.'
    }]
  }, {
    n: 9,
    name: 'Looking After Yourself',
    color: '#157E97',
    icon: 'droplet',
    intro: 'You can’t pour from an empty cup. A well-resourced teacher is a better teacher.',
    reflect: 'What’s one thing you’ll keep doing to look after yourself on deck?',
    days: [{
      d: 81,
      action: 'Drink water and actually take your break today.',
      why: 'A dehydrated, skipped-break teacher is a short-fused one. Look after the instrument.'
    }, {
      d: 82,
      action: 'Reset between classes with three slow breaths.',
      why: 'A twenty-second reset stops the last hard lesson bleeding into the next child.'
    }, {
      d: 83,
      action: 'Notice one thing you did well this shift, not just what you’d fix.',
      why: 'You coach children to celebrate small wins. Do it for yourself.'
    }, {
      d: 84,
      action: 'Protect your voice — use signals and demos to talk less.',
      why: 'Your voice is a tool you can’t replace mid-season. Spend it wisely.'
    }, {
      d: 85,
      action: 'Ask a colleague one question instead of struggling alone.',
      why: 'The best teachers are the most curious, not the most self-sufficient.'
    }, {
      d: 86,
      action: 'Leave one small thing at work when you clock off.',
      why: 'Carrying every lesson home burns you out. Put one down at the gate.'
    }, {
      d: 87,
      action: 'Stretch or move for two minutes before your shift.',
      why: 'A warm, loose body teaches with more energy and fewer aches.'
    }, {
      d: 88,
      action: 'Swap one ‘I’m so tired’ for one ‘this child made my day’.',
      why: 'What you rehearse in the staffroom is what you’ll feel on deck.'
    }, {
      d: 89,
      action: 'Set one small professional goal for this week.',
      why: 'Growth is a habit, not an event. A tiny weekly aim keeps the engine running.'
    }, {
      d: 90,
      action: 'Forgive yourself for one lesson that didn’t go to plan.',
      why: 'Every great teacher has bad days. Learn the lesson, drop the guilt.'
    }]
  }, {
    n: 10,
    name: 'Leadership & Growth',
    color: '#0E4A6E',
    icon: 'award',
    intro: 'You set the culture you complain about. Finish by becoming the teacher who lifts the others.',
    reflect: 'Look back at Day 1. What can you do now that you couldn’t then?',
    days: [{
      d: 91,
      action: 'Watch a colleague teach for five minutes and steal one idea.',
      why: 'The best professional development is on your own deck. Borrow shamelessly.'
    }, {
      d: 92,
      action: 'Offer one newer teacher a specific, kind piece of encouragement.',
      why: 'Be the senior you wish you’d had.'
    }, {
      d: 93,
      action: 'Ask one learner or parent for feedback and actually listen.',
      why: 'The people you serve see your blind spots. Invite the mirror.'
    }, {
      d: 94,
      action: 'Write down one thing that worked so you don’t lose it.',
      why: 'A teacher’s best ideas die unrecorded. Keep a running list.'
    }, {
      d: 95,
      action: 'Share one of your own tricks with the team this week.',
      why: 'Knowledge hoarded is knowledge wasted. A team that shares lifts everyone.'
    }, {
      d: 96,
      action: 'Try one thing you’ve been avoiding because it’s uncomfortable.',
      why: 'Growth lives one step past comfortable. Take the step today.'
    }, {
      d: 97,
      action: 'Reflect on one learner who challenged you and what they taught you.',
      why: 'Your hardest learners are your best teachers. Thank them by learning.'
    }, {
      d: 98,
      action: 'Let a junior teacher run one skill while you support.',
      why: 'Trust given is confidence built. Hand over the reins for two minutes.'
    }, {
      d: 99,
      action: 'Name one value you want your teaching to stand for.',
      why: 'Technique fades; character is what they remember.'
    }, {
      d: 100,
      action: 'Look back at Day 1 and notice how far you’ve come.',
      why: 'A hundred 1% changes look like everything in hindsight. That’s the whole point.'
    }]
  }]
};

// Per-theme certificate taglines + the final 100-day line (from the certificates PDF).
(function () {
  const taglines = ['Building trust before technique.', 'Saying less, showing more.', 'Opening the lesson up for every learner.', 'Keeping every learner safe in the water.', 'Catching learners doing it right.', 'Sharpening the craft that gets them moving.', 'Shaping the space on purpose.', 'Turning parents into partners.', 'Resourcing the teacher behind the lessons.', 'Lifting the whole team, not just yourself.'];
  window.CHALLENGE.themes.forEach((t, i) => {
    t.tagline = taglines[i];
  });
  window.CHALLENGE.meta.finalTagline = 'Better isn’t a destination — it’s a direction you keep choosing.';
})();

// Flat helper: window.CHALLENGE_DAYS[dayNumber] -> { d, action, why, theme }
window.CHALLENGE_DAYS = function () {
  const flat = {};
  window.CHALLENGE.themes.forEach(t => t.days.forEach(day => {
    flat[day.d] = {
      ...day,
      themeN: t.n,
      themeName: t.name,
      themeColor: t.color,
      themeIcon: t.icon
    };
  }));
  return flat;
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/challenge/data/challenge-content.js", error: String((e && e.message) || e) }); }

// ui_kits/challenge/store.js
try { (() => {
/* =====================================================================
   ATSA · 1% Better Challenge — client-side store (demo persistence)
   A real build replaces this with server accounts + a database. Here we
   persist to localStorage so the prototype behaves like the real thing.
   Exposes window.ChallengeStore.

   Streak model is FORGIVING by design (brand rule: never shame a missed
   day). One missed day does not reset the streak — a free "freeze" covers
   a single gap; a longer break ends the streak gently and a Comeback
   badge is offered when the user returns.
   ===================================================================== */
(function () {
  const KEY = 'atsa_1pct_v1';
  const DAY_MS = 86400000;
  const todayStr = () => new Date().toISOString().slice(0, 10);
  const dateNum = s => Math.floor(new Date(s + 'T00:00:00').getTime() / DAY_MS);
  const DEFAULT = {
    user: null,
    // { name, email, school }
    startDate: null,
    // ISO date the challenge began
    done: {},
    // { [dayNumber]: ISOdate completed }
    reflections: {},
    // { [themeN]: { text, date } }
    badges: [],
    // [badgeId]
    lastCheckIn: null,
    // ISO date of most recent check-in
    freezesUsed: 0,
    settings: {
      reminders: 'daily',
      shareWithTeam: true
    }
  };
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return {
        ...DEFAULT
      };
      return {
        ...DEFAULT,
        ...JSON.parse(raw)
      };
    } catch (e) {
      return {
        ...DEFAULT
      };
    }
  }
  function save(s) {
    try {
      localStorage.setItem(KEY, JSON.stringify(s));
    } catch (e) {}
  }
  let state = load();
  const listeners = new Set();
  const emit = () => {
    save(state);
    listeners.forEach(fn => fn(state));
  };

  // ---- Badges catalogue -------------------------------------------------
  const BADGES = [{
    id: 'first-step',
    name: 'First Step',
    icon: 'check-circle',
    desc: 'Checked in for the very first time.'
  }, {
    id: 'first-reflection',
    name: 'Reflector',
    icon: 'book-open',
    desc: 'Wrote your first theme reflection.'
  }, {
    id: 'theme-1',
    name: 'Connection & Rapport',
    icon: 'heart',
    desc: 'Completed Theme 1.'
  }, {
    id: 'theme-2',
    name: 'Clear Communication',
    icon: 'book-open',
    desc: 'Completed Theme 2.'
  }, {
    id: 'theme-3',
    name: 'Inclusion & Neurodiversity',
    icon: 'users',
    desc: 'Completed Theme 3.'
  }, {
    id: 'theme-4',
    name: 'Safety & Awareness',
    icon: 'lifebuoy',
    desc: 'Completed Theme 4.'
  }, {
    id: 'theme-5',
    name: 'Feedback & Encouragement',
    icon: 'star',
    desc: 'Completed Theme 5.'
  }, {
    id: 'theme-6',
    name: 'Lesson Craft & Technique',
    icon: 'graduation-cap',
    desc: 'Completed Theme 6.'
  }, {
    id: 'theme-7',
    name: 'The Environment',
    icon: 'waves',
    desc: 'Completed Theme 7.'
  }, {
    id: 'theme-8',
    name: 'Parents & Families',
    icon: 'user',
    desc: 'Completed Theme 8.'
  }, {
    id: 'theme-9',
    name: 'Looking After Yourself',
    icon: 'droplet',
    desc: 'Completed Theme 9.'
  }, {
    id: 'theme-10',
    name: 'Leadership & Growth',
    icon: 'award',
    desc: 'Completed Theme 10.'
  }, {
    id: 'day-25',
    name: 'Quarter Way',
    icon: 'star',
    desc: 'Reached 25 days.'
  }, {
    id: 'day-50',
    name: 'Halfway Hero',
    icon: 'award',
    desc: 'Reached 50 days.'
  }, {
    id: 'day-75',
    name: 'Three Quarters',
    icon: 'star',
    desc: 'Reached 75 days.'
  }, {
    id: 'day-100',
    name: '1% Better',
    icon: 'award',
    desc: 'Completed all 100 days.'
  }, {
    id: 'comeback',
    name: 'Comeback',
    icon: 'heart',
    desc: 'Picked it up again after a break. The habit is the point.'
  }];
  const badgeById = id => BADGES.find(b => b.id === id);

  // ---- Derived progress -------------------------------------------------
  function completedCount() {
    return Object.keys(state.done).length;
  }
  function currentDay() {
    // The day the user is "up to" = lowest day number not yet done (1..100)
    for (let d = 1; d <= 100; d++) if (!state.done[d]) return d;
    return 100;
  }
  function themeProgress(themeN) {
    const start = (themeN - 1) * 10 + 1;
    let n = 0;
    for (let d = start; d < start + 10; d++) if (state.done[d]) n++;
    return n;
  }

  // Forgiving streak: count back over consecutive calendar days with a
  // check-in, tolerating a single one-day gap (a "freeze").
  function streak() {
    const dates = Object.values(state.done).map(dateNum).sort((a, b) => b - a);
    if (!dates.length) return 0;
    const uniq = [...new Set(dates)];
    const today = dateNum(todayStr());
    // streak is only "live" if last check-in was today or yesterday (grace)
    if (today - uniq[0] > 1) return 0;
    let count = 1;
    let gaps = 0;
    for (let i = 1; i < uniq.length; i++) {
      const diff = uniq[i - 1] - uniq[i];
      if (diff === 1) {
        count++;
      } else if (diff === 2 && gaps === 0) {
        gaps++;
        count++; /* freeze covers the gap */
      } else break;
    }
    return count;
  }

  // ---- Badge evaluation -------------------------------------------------
  function awardMaybe() {
    const add = id => {
      if (!state.badges.includes(id)) {
        state.badges.push(id);
        fresh.push(id);
      }
    };
    const fresh = [];
    if (completedCount() >= 1) add('first-step');
    if (Object.keys(state.reflections).length >= 1) add('first-reflection');
    for (let t = 1; t <= 10; t++) if (themeProgress(t) === 10) add('theme-' + t);
    [25, 50, 75, 100].forEach(m => {
      if (completedCount() >= m) add('day-' + m);
    });
    return fresh;
  }

  // ---- Public API -------------------------------------------------------
  const api = {
    BADGES,
    badgeById,
    get: () => state,
    isOnboarded: () => !!state.user,
    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
    signUp({
      name,
      email,
      school
    }) {
      state.user = {
        name,
        email,
        school
      };
      state.startDate = state.startDate || todayStr();
      emit();
    },
    updateSettings(patch) {
      state.settings = {
        ...state.settings,
        ...patch
      };
      emit();
    },
    // mark a specific day done (defaults to the current day)
    checkIn(dayNumber) {
      const d = dayNumber || currentDay();
      if (state.done[d]) return {
        day: d,
        fresh: []
      };
      // comeback detection: returning after a 3+ day gap
      if (state.lastCheckIn) {
        const gap = dateNum(todayStr()) - dateNum(state.lastCheckIn);
        if (gap >= 3) {
          if (!state.badges.includes('comeback')) state.badges.push('comeback');
        }
      }
      state.done[d] = todayStr();
      state.lastCheckIn = todayStr();
      const fresh = awardMaybe();
      emit();
      return {
        day: d,
        fresh
      };
    },
    undoCheckIn(dayNumber) {
      delete state.done[dayNumber];
      emit();
    },
    saveReflection(themeN, text) {
      state.reflections[themeN] = {
        text,
        date: todayStr()
      };
      awardMaybe();
      emit();
    },
    // demo helper: jump progress forward to seed a lively prototype
    seedDemo(uptoDay) {
      const base = new Date();
      for (let d = 1; d <= uptoDay; d++) {
        const dt = new Date(base.getTime() - (uptoDay - d) * DAY_MS);
        state.done[d] = dt.toISOString().slice(0, 10);
      }
      state.lastCheckIn = todayStr();
      state.startDate = new Date(base.getTime() - (uptoDay - 1) * DAY_MS).toISOString().slice(0, 10);
      awardMaybe();
      emit();
    },
    reset() {
      state = {
        ...DEFAULT,
        done: {},
        reflections: {},
        badges: []
      };
      emit();
    },
    // selectors
    completedCount,
    currentDay,
    themeProgress,
    streak,
    percent: () => Math.round(completedCount() / 100 * 100),
    isDone: d => !!state.done[d]
  };
  window.ChallengeStore = api;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/challenge/store.js", error: String((e && e.message) || e) }); }

// ui_kits/lms/Chrome.jsx
try { (() => {
// ATSA LMS — sidebar + topbar chrome. window.LmsSidebar / window.LmsTopbar
const NS_LMS_CHROME = window.ATSADesignSystem_6b2905;
function LmsSidebar({
  current,
  onNavigate
}) {
  const {
    Icon,
    Avatar
  } = NS_LMS_CHROME;
  const L = window.ATSA_LMS;
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 244,
      flexShrink: 0,
      background: 'var(--atsa-navy)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 16px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/atsa-logo-reversed.svg",
    alt: "ATSA",
    style: {
      height: 34
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, L.nav.map(n => {
    const active = current === n.id;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => onNavigate(n.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '11px 14px',
        borderRadius: 10,
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        width: '100%',
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        fontSize: 14.5,
        background: active ? 'rgba(255,255,255,0.12)' : 'transparent',
        color: active ? '#fff' : 'rgba(255,255,255,0.66)',
        transition: 'background .12s, color .12s'
      },
      onMouseEnter: e => {
        if (!active) {
          e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
          e.currentTarget.style.color = '#fff';
        }
      },
      onMouseLeave: e => {
        if (!active) {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = 'rgba(255,255,255,0.66)';
        }
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      size: 19
    }), n.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: 14,
      borderTop: '1px solid rgba(255,255,255,0.12)',
      display: 'flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: window.ATSA_LMS.student.name,
    tone: "teal"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 14,
      color: '#fff',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, window.ATSA_LMS.student.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'rgba(255,255,255,0.55)'
    }
  }, window.ATSA_LMS.student.role))));
}
function LmsTopbar({
  title,
  subtitle
}) {
  const {
    IconButton,
    Input
  } = NS_LMS_CHROME;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      padding: '16px 28px',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(8px)',
      position: 'sticky',
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--atsa-navy)',
      margin: 0,
      letterSpacing: '-0.01em'
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '2px 0 0',
      fontSize: 13.5,
      color: 'var(--atsa-slate)'
    }
  }, subtitle) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      width: 240
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Search\u2026"
  })), /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    label: "Notifications",
    variant: "subtle"
  }));
}
window.LmsSidebar = LmsSidebar;
window.LmsTopbar = LmsTopbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lms/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lms/Views.jsx
try { (() => {
// ATSA LMS — views. window.LmsDashboard / LmsCourses / LmsCourseProgress / LmsSchedule / LmsCertificates
const NS_LMS = window.ATSADesignSystem_6b2905;
function SectionTitle({
  children,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: '0 0 16px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 19,
      color: 'var(--atsa-navy)',
      margin: 0
    }
  }, children), action);
}
const TONE_BG = {
  navy: 'var(--atsa-navy)',
  ocean: 'var(--atsa-ocean)',
  teal: 'var(--atsa-teal)',
  aqua: 'var(--atsa-aqua)'
};
function CourseRow({
  c,
  onOpen
}) {
  const {
    Card,
    ProgressBar,
    Button,
    Icon
  } = NS_LMS;
  return /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 52,
      height: 52,
      borderRadius: 14,
      background: TONE_BG[c.accent],
      color: '#fff',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 26
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 16.5,
      color: 'var(--atsa-navy)'
    }
  }, c.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--atsa-slate)'
    }
  }, c.code)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--atsa-slate)',
      margin: '2px 0 10px'
    }
  }, "Up next \u2014 ", c.next), /*#__PURE__*/React.createElement(ProgressBar, {
    value: c.done,
    max: c.total,
    showValue: true,
    tone: c.accent === 'navy' ? 'ocean' : c.accent,
    valueFormat: (v, m) => `${v}/${m} modules`
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconRight: "arrow-right",
    onClick: () => onOpen(c.id)
  }, "Resume"));
}
function LmsDashboard({
  onOpenCourse,
  onNavigate
}) {
  const {
    Card,
    Stat,
    Icon,
    Alert,
    Button
  } = NS_LMS;
  const L = window.ATSA_LMS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    variant: "warning",
    title: "A certificate is expiring soon"
  }, "Your ", /*#__PURE__*/React.createElement("strong", null, "Working with Children Check"), " expires on 5 Feb 2026. Renew it to keep teaching on the deck."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, L.stats.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.label,
    padding: "md"
  }, /*#__PURE__*/React.createElement(Stat, {
    label: s.label,
    value: s.value,
    icon: s.icon,
    tone: s.tone
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, {
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      iconRight: "arrow-right",
      onClick: () => onNavigate('courses')
    }, "All PD")
  }, "Continue learning"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, L.enrolled.map(c => /*#__PURE__*/React.createElement(CourseRow, {
    key: c.id,
    c: c,
    onOpen: onOpenCourse
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, {
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      iconRight: "arrow-right",
      onClick: () => onNavigate('schedule')
    }, "Full schedule")
  }, "Upcoming sessions"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, L.schedule.map(s => /*#__PURE__*/React.createElement(ScheduleCard, {
    key: s.title,
    s: s
  })))));
}
function ScheduleCard({
  s
}) {
  const {
    Card,
    Icon
  } = NS_LMS;
  return /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      flexShrink: 0,
      background: TONE_BG[s.tone],
      color: '#fff',
      borderRadius: 12,
      padding: '8px 12px',
      minWidth: 58
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.08em',
      opacity: 0.85
    }
  }, s.day), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 24,
      lineHeight: 1
    }
  }, s.date), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: 0.85
    }
  }, s.month)), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 15.5,
      color: 'var(--atsa-navy)',
      lineHeight: 1.3
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 13,
      color: 'var(--atsa-slate)',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 14
  }), s.time), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 13,
      color: 'var(--atsa-slate)',
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 14
  }), s.place)));
}
function LmsCourses({
  onOpenCourse
}) {
  const L = window.ATSA_LMS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, L.enrolled.map(c => /*#__PURE__*/React.createElement(CourseRow, {
    key: c.id,
    c: c,
    onOpen: onOpenCourse
  })));
}
function LmsCourseProgress({
  courseId,
  onBack
}) {
  const {
    Card,
    Button,
    Icon,
    ProgressBar,
    Badge
  } = NS_LMS;
  const L = window.ATSA_LMS;
  const c = L.enrolled.find(x => x.id === courseId) || L.enrolled[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--atsa-ocean)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 14,
      marginBottom: 18,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 16
  }), " Back"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.7fr 1fr',
      gap: 28,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 56,
      height: 56,
      borderRadius: 14,
      background: TONE_BG[c.accent],
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 28
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 24,
      color: 'var(--atsa-navy)',
      margin: 0
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--atsa-slate)'
    }
  }, c.code, " \xB7 ", c.done, " of ", c.total, " modules complete"))), /*#__PURE__*/React.createElement(Card, {
    padding: "none"
  }, c.modules.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 18px',
      borderBottom: i < c.modules.length - 1 ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 28,
      height: 28,
      borderRadius: 999,
      flexShrink: 0,
      background: m.done ? 'var(--atsa-teal)' : '#fff',
      border: m.done ? 'none' : '2px solid var(--border-default)',
      color: '#fff'
    }
  }, m.done ? /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    strokeWidth: 3
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--atsa-slate)'
    }
  }, i + 1)), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 15,
      color: m.done ? 'var(--atsa-navy)' : 'var(--atsa-slate)'
    }
  }, m.t), m.done ? /*#__PURE__*/React.createElement(Badge, {
    tone: "teal"
  }, "Done") : i === c.done ? /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Start") : /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 16,
    style: {
      color: 'var(--atsa-slate)'
    }
  }))))), /*#__PURE__*/React.createElement(Card, {
    variant: "raised",
    padding: "lg",
    style: {
      position: 'sticky',
      top: 92
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--atsa-ocean)',
      margin: '0 0 14px'
    }
  }, "Your progress"), /*#__PURE__*/React.createElement(ProgressBar, {
    value: c.done,
    max: c.total,
    showValue: true,
    size: "lg",
    tone: "teal",
    valueFormat: (v, m) => `${Math.round(v / m * 100)}%`
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--atsa-slate)',
      margin: '14px 0 18px',
      lineHeight: 1.6
    }
  }, "Keep going \u2014 you\u2019re almost there. Up next is ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--atsa-navy)'
    }
  }, c.next), "."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    fullWidth: true,
    iconRight: "arrow-right"
  }, "Resume course"))));
}
function LmsSchedule() {
  const L = window.ATSA_LMS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 16
    }
  }, L.schedule.concat(L.schedule.slice(0, 1)).map((s, i) => /*#__PURE__*/React.createElement(ScheduleCard, {
    key: i,
    s: s
  })));
}
function LmsCertificates() {
  const {
    Card,
    Badge,
    Button,
    Icon
  } = NS_LMS;
  const L = window.ATSA_LMS;
  const tone = {
    valid: 'success',
    expiring: 'warning',
    expired: 'danger'
  };
  const labelFor = {
    valid: 'Valid',
    expiring: 'Expiring soon',
    expired: 'Expired'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "none"
  }, L.certificates.map((cert, i) => /*#__PURE__*/React.createElement("div", {
    key: cert.code,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '16px 20px',
      borderBottom: i < L.certificates.length - 1 ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 46,
      height: 46,
      borderRadius: 12,
      background: 'var(--atsa-aqua-20)',
      color: 'var(--atsa-ocean)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "award",
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 16,
      color: 'var(--atsa-navy)'
    }
  }, cert.title, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      fontSize: 13,
      color: 'var(--atsa-slate)'
    }
  }, "\xB7 ", cert.code)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--atsa-slate)',
      marginTop: 2
    }
  }, "Issued ", cert.issued, " \xB7 Expires ", cert.expires)), /*#__PURE__*/React.createElement(Badge, {
    tone: tone[cert.status],
    dot: true
  }, labelFor[cert.status]), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: "download"
  }, "PDF")))));
}
Object.assign(window, {
  LmsDashboard,
  LmsCourses,
  LmsCourseProgress,
  LmsSchedule,
  LmsCertificates
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lms/Views.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lms/data.js
try { (() => {
// ATSA PD portal demo data — a swim teacher's professional-development account. window.ATSA_LMS
window.ATSA_LMS = {
  student: {
    name: 'Mia Tran',
    email: 'mia.tran@example.com',
    role: 'Swim teacher · Delegate'
  },
  nav: [{
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'home'
  }, {
    id: 'courses',
    label: 'My PD',
    icon: 'book-open'
  }, {
    id: 'schedule',
    label: 'Schedule',
    icon: 'calendar'
  }, {
    id: 'certificates',
    label: 'Certificates',
    icon: 'award'
  }, {
    id: 'settings',
    label: 'Settings',
    icon: 'settings'
  }],
  stats: [{
    label: 'PD in progress',
    value: '2',
    icon: 'book-open',
    tone: 'ocean'
  }, {
    label: 'Completed',
    value: '5',
    icon: 'check-circle',
    tone: 'teal'
  }, {
    label: 'Certificates',
    value: '4',
    icon: 'award',
    tone: 'aqua'
  }, {
    label: 'PD hours logged',
    value: '38',
    icon: 'clock',
    tone: 'sand'
  }],
  enrolled: [{
    id: 'inclusive-practice',
    title: 'Inclusive Practice for Swim Teachers',
    code: 'PD · Full day',
    icon: 'heart',
    accent: 'navy',
    done: 6,
    total: 8,
    next: 'Module 7 · Adapting without singling out',
    modules: [{
      t: 'Why inclusion, why now',
      done: true
    }, {
      t: 'What every learner needs',
      done: true
    }, {
      t: 'Strengths-based language',
      done: true
    }, {
      t: 'Planning an inclusive lesson',
      done: true
    }, {
      t: 'Sensory & regulation basics',
      done: true
    }, {
      t: 'Communicating with families',
      done: true
    }, {
      t: 'Adapting without singling out',
      done: false
    }, {
      t: 'Putting it together',
      done: false
    }]
  }, {
    id: 'teaching-neurodivergent',
    title: 'Teaching Neurodivergent Learners',
    code: 'PD · Full day',
    icon: 'users',
    accent: 'teal',
    done: 3,
    total: 9,
    next: 'Module 4 · Reading regulation cues',
    modules: [{
      t: 'Neurodiversity, plainly',
      done: true
    }, {
      t: 'Autistic learners in the water',
      done: true
    }, {
      t: 'ADHD and attention',
      done: true
    }, {
      t: 'Reading regulation cues',
      done: false
    }, {
      t: 'Structure, routine & predictability',
      done: false
    }, {
      t: 'Working with support workers',
      done: false
    }, {
      t: 'Communication tools',
      done: false
    }, {
      t: 'Case studies',
      done: false
    }, {
      t: 'Your inclusive toolkit',
      done: false
    }]
  }],
  schedule: [{
    day: 'SAT',
    date: '14',
    month: 'Jun',
    title: 'Inclusive Practice — in person',
    time: '9:00am – 4:00pm',
    place: 'ATSA Training Room, Toowoomba',
    tone: 'navy'
  }, {
    day: 'TUE',
    date: '24',
    month: 'Jun',
    title: 'Neurodiversity Q&A — online',
    time: '6:00pm – 7:30pm',
    place: 'Online (live)',
    tone: 'ocean'
  }, {
    day: 'SAT',
    date: '12',
    month: 'Jul',
    title: 'Coaching Foundations — Day 1',
    time: '9:00am – 1:00pm',
    place: 'Host swim school, Brisbane',
    tone: 'teal'
  }],
  certificates: [{
    title: 'Inclusive Practice for Swim Teachers',
    code: 'ATSA PD',
    issued: '12 Mar 2026',
    expires: 'No expiry',
    status: 'valid'
  }, {
    title: 'Water Safety Education Essentials',
    code: 'ATSA PD',
    issued: '12 Mar 2026',
    expires: 'No expiry',
    status: 'valid'
  }, {
    title: 'Working with Children Check',
    code: 'WWCC',
    issued: '05 Feb 2023',
    expires: '05 Feb 2026',
    status: 'expiring'
  }, {
    title: 'Provide CPR (HLTAID009)',
    code: 'External',
    issued: '20 Nov 2024',
    expires: '20 Nov 2025',
    status: 'expired'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lms/data.js", error: String((e && e.message) || e) }); }

// ui_kits/marketing/CourseDetail.jsx
try { (() => {
// ATSA marketing — Course detail. Exposes window.CourseDetail.
const NS_CD = window.ATSADesignSystem_6b2905;
function CourseDetail({
  courseId,
  onNavigate,
  onOpenCourse,
  onEnrol
}) {
  const {
    Button,
    Card,
    Badge,
    Icon,
    Alert,
    CourseCard
  } = NS_CD;
  const D = window.ATSA_DATA;
  const c = D.courses.find(x => x.id === courseId) || D.courses[0];
  const related = D.courses.filter(x => x.catId === c.catId && x.id !== c.id).slice(0, 3);
  const fallback = D.courses.filter(x => x.id !== c.id).slice(0, 3);
  const more = related.length ? related : fallback;
  const dates = ['Sat 14 Jun', 'Sun 29 Jun', 'Sat 12 Jul'];
  const venues = ['ATSA Training Room, Toowoomba', 'Online (live)', 'Host swim school (on-site)'];
  const isEnquiry = c.price == null;
  const accentBg = {
    navy: 'var(--atsa-navy)',
    ocean: 'var(--atsa-ocean)',
    teal: 'var(--atsa-teal)',
    aqua: 'var(--atsa-aqua)'
  }[c.accent];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: accentBg,
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1440 200",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: 120,
      opacity: 0.12
    },
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3"
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: `M0 ${80 + i * 40} q 120 -36 240 0 t 240 0 t 240 0 t 240 0 t 240 0 t 240 0`,
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1200,
      margin: '0 auto',
      padding: '24px 28px 44px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13,
      color: 'rgba(255,255,255,0.8)',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('courses');
    },
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Professional development"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff'
    }
  }, c.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 12px',
      borderRadius: 999,
      background: 'rgba(255,255,255,0.15)',
      fontFamily: 'var(--font-heading)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.06em'
    }
  }, c.cat), c.accredited ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 12px',
      borderRadius: 999,
      background: 'rgba(255,255,255,0.92)',
      color: 'var(--atsa-navy)',
      fontFamily: 'var(--font-heading)',
      fontSize: 12,
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "award",
    size: 14
  }), " Certificate provided") : null), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 46,
      letterSpacing: '-0.02em',
      margin: '0 0 8px',
      maxWidth: 720
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'rgba(255,255,255,0.85)',
      maxWidth: 640,
      margin: 0,
      lineHeight: 1.55
    }
  }, c.blurb))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '44px 28px 64px',
      display: 'grid',
      gridTemplateColumns: '1.6fr 0.9fr',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 26,
      paddingBottom: 26,
      borderBottom: '1px solid var(--border-subtle)',
      marginBottom: 28
    }
  }, [['clock', 'Duration', c.duration], ['users', 'Who it’s for', c.audience || c.level], ['map-pin', 'Delivery', 'On-site or online']].map(([icon, k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      borderRadius: 10,
      background: 'var(--atsa-cloud)',
      color: 'var(--atsa-ocean)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--atsa-slate)',
      fontWeight: 600,
      letterSpacing: '0.04em',
      textTransform: 'uppercase'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--atsa-navy)'
    }
  }, v))))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 26,
      color: 'var(--atsa-navy)',
      margin: '0 0 16px',
      letterSpacing: '-0.01em'
    }
  }, "What you\u2019ll learn"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      marginBottom: 34
    }
  }, c.outcomes.map(o => /*#__PURE__*/React.createElement("div", {
    key: o,
    style: {
      display: 'flex',
      gap: 11,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 1,
      color: 'var(--atsa-teal)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15.5,
      color: 'var(--atsa-navy)',
      lineHeight: 1.5
    }
  }, o)))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 26,
      color: 'var(--atsa-navy)',
      margin: '0 0 14px',
      letterSpacing: '-0.01em'
    }
  }, "Who it\u2019s for"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--atsa-slate)',
      margin: '0 0 24px',
      maxWidth: 620
    }
  }, "Built for ", (c.audience || c.level || 'aquatic professionals').toLowerCase(), " \u2014 whether you\u2019re building your practice or developing your team. Practical, strengths-based, and ready to use on the pool deck."), /*#__PURE__*/React.createElement(Alert, {
    variant: "info",
    title: "Inclusive by design"
  }, "We bring neurodiversity-affirming, strengths-based practice into every session \u2014 and we\u2019re happy to tailor content to your team, your pool and your learners.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 88
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "raised",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 38,
      color: 'var(--atsa-navy)'
    }
  }, isEnquiry ? 'By enquiry' : `$${c.price}`), isEnquiry ? null : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--atsa-slate)'
    }
  }, "per participant")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--atsa-slate)',
      margin: '0 0 18px'
    }
  }, isEnquiry ? 'Tailored to your event or team' : 'Includes materials & certificate of completion'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--atsa-ocean)',
      marginBottom: 10
    }
  }, isEnquiry ? 'How it works' : 'Upcoming dates'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      marginBottom: 20
    }
  }, dates.map((d, i) => /*#__PURE__*/React.createElement("label", {
    key: d,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '11px 14px',
      borderRadius: 10,
      border: '1.5px solid ' + (i === 0 ? 'var(--atsa-ocean)' : 'var(--border-default)'),
      background: i === 0 ? 'var(--atsa-aqua-20)' : '#fff',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 18,
    style: {
      color: 'var(--atsa-ocean)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--atsa-navy)'
    }
  }, d), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--atsa-slate)'
    }
  }, venues[i], " \xB7 9:00am")), i === 0 ? /*#__PURE__*/React.createElement(Badge, {
    tone: "teal",
    dot: true
  }, "Filling fast") : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--atsa-slate)'
    }
  }, "8 spots")))), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    fullWidth: true,
    iconRight: "arrow-right",
    onClick: onEnrol
  }, isEnquiry ? 'Enquire now' : 'Book this workshop'), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "md",
    fullWidth: true,
    iconLeft: "phone",
    style: {
      marginTop: 8
    }
  }, "Ask a question"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      paddingTop: 18,
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, ['Certificate of completion', 'Practical, real-classroom strategies', 'Can be delivered at your pool'].map(f => /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      display: 'flex',
      gap: 9,
      alignItems: 'center',
      fontSize: 14,
      color: 'var(--atsa-navy)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    strokeWidth: 3,
    style: {
      color: 'var(--atsa-teal)'
    }
  }), f)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--atsa-cloud)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '52px 28px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 28,
      color: 'var(--atsa-navy)',
      margin: '0 0 24px',
      letterSpacing: '-0.01em'
    }
  }, "You might also like"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 22
    }
  }, more.map(rc => /*#__PURE__*/React.createElement(CourseCard, {
    key: rc.id,
    category: rc.cat,
    title: rc.title,
    description: rc.blurb,
    icon: rc.icon,
    accent: rc.accent,
    duration: rc.duration,
    level: rc.level,
    price: rc.price,
    accredited: rc.accredited,
    ctaLabel: "View workshop",
    onClick: () => onOpenCourse(rc.id)
  }))))));
}
window.CourseDetail = CourseDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/CourseDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Courses.jsx
try { (() => {
// ATSA marketing — Courses listing. Exposes window.Courses.
const NS_COURSES = window.ATSADesignSystem_6b2905;
function Courses({
  onOpenCourse
}) {
  const {
    CourseCard,
    Tabs,
    Input,
    Badge,
    Icon
  } = NS_COURSES;
  const D = window.ATSA_DATA;
  const [cat, setCat] = React.useState('all');
  const [q, setQ] = React.useState('');
  const tabs = [{
    id: 'all',
    label: 'All courses',
    count: D.courses.length
  }].concat(D.categories.map(c => ({
    id: c.catId,
    label: c.label,
    icon: c.icon
  })));
  const list = D.courses.filter(c => (cat === 'all' || c.catId === cat) && (q === '' || (c.title + c.blurb + c.cat).toLowerCase().includes(q.toLowerCase())));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--atsa-cloud)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '48px 28px 36px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--atsa-ocean)',
      margin: '0 0 10px'
    }
  }, "Professional development"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 42,
      letterSpacing: '-0.02em',
      color: 'var(--atsa-navy)',
      margin: '0 0 12px'
    }
  }, "Workshops & programs"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--atsa-slate)',
      maxWidth: 560,
      margin: 0,
      lineHeight: 1.6
    }
  }, "Practical professional development for swim teachers, coaches and program managers \u2014 with depth in inclusive practice, neurodiversity and water safety."), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 420,
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Search workshops\u2026",
    value: q,
    onChange: e => setQ(e.target.value)
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '28px 28px 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto',
      paddingBottom: 6,
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "pills",
    value: cat,
    onChange: setCat,
    items: tabs
  })), list.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '60px 0',
      color: 'var(--atsa-slate)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 32
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12
    }
  }, "No workshops match \u201C", q, "\u201D.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 22
    }
  }, list.map(c => /*#__PURE__*/React.createElement(CourseCard, {
    key: c.id,
    category: c.cat,
    title: c.title,
    description: c.blurb,
    icon: c.icon,
    accent: c.accent,
    duration: c.duration,
    level: c.level,
    price: c.price,
    accredited: c.accredited,
    ctaLabel: "View workshop",
    onClick: () => onOpenCourse(c.id)
  })))));
}
window.Courses = Courses;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Courses.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Home.jsx
try { (() => {
// ATSA marketing — Home screen. Exposes window.Home.
const NS_HOME = window.ATSADesignSystem_6b2905;
function WaveDivider({
  color = '#fff',
  flip = false
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1440 60",
    preserveAspectRatio: "none",
    style: {
      display: 'block',
      width: '100%',
      height: 48,
      transform: flip ? 'rotate(180deg)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 30 q 90 -28 180 0 t 180 0 t 180 0 t 180 0 t 180 0 t 180 0 t 180 0 t 180 0 V60 H0 Z",
    fill: color
  }));
}
function Home({
  onNavigate,
  onOpenCourse
}) {
  const {
    Button,
    CourseCard,
    Stat,
    Card,
    Icon,
    Badge
  } = NS_HOME;
  const D = window.ATSA_DATA;
  const popular = D.courses.filter(c => c.popular);
  const HERO_WAVE = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 600 600",
    style: {
      position: 'absolute',
      right: -40,
      bottom: -60,
      width: 520,
      opacity: 0.10
    },
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2"
  }, [0, 1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: `M-20 ${180 + i * 64} q 75 -40 150 0 t 150 0 t 150 0 t 150 0 t 150 0`,
    strokeLinecap: "round"
  })));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--atsa-navy)',
      color: '#fff',
      overflow: 'hidden'
    }
  }, HERO_WAVE, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1200,
      margin: '0 auto',
      padding: '76px 28px 92px',
      display: 'grid',
      gridTemplateColumns: '1.15fr 0.85fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '7px 14px',
      borderRadius: 999,
      background: 'rgba(255,255,255,0.1)',
      border: '1px solid rgba(255,255,255,0.18)',
      fontFamily: 'var(--font-heading)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--atsa-aqua)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "award",
    size: 15
  }), " Professional development & consulting"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 52,
      lineHeight: 1.07,
      letterSpacing: '-0.02em',
      margin: '20px 0 0',
      textWrap: 'balance'
    }
  }, "Raising the standard in aquatic education"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,0.8)',
      maxWidth: 500,
      margin: '20px 0 32px'
    }
  }, "Training and advisory for swim teachers, coaches and program managers \u2014 grounded in real experience on the pool deck, and inclusive by design."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => onNavigate('courses')
  }, "Browse workshops"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse-secondary",
    size: "lg",
    iconLeft: "phone"
  }, "Talk to us"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Card, {
    variant: "raised",
    padding: "lg",
    style: {
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--atsa-ocean)',
      margin: '0 0 16px'
    }
  }, "Why partner with ATSA"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 22
    }
  }, D.stats.map(s => /*#__PURE__*/React.createElement(Stat, {
    key: s.label,
    label: s.label,
    value: s.value
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: -1
    }
  }, /*#__PURE__*/React.createElement(WaveDivider, {
    color: "var(--surface-page, #fff)"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '8px 28px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, D.categories.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.id,
    interactive: true,
    padding: "md",
    onClick: () => onNavigate('courses'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 46,
      height: 46,
      borderRadius: 12,
      background: 'var(--atsa-aqua-20)',
      color: 'var(--atsa-ocean)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 24
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 16,
      color: 'var(--atsa-navy)'
    }
  }, c.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--atsa-slate)'
    }
  }, "View workshops")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '56px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 26,
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--atsa-ocean)',
      margin: '0 0 8px'
    }
  }, "Popular right now"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 34,
      letterSpacing: '-0.02em',
      color: 'var(--atsa-navy)',
      margin: 0
    }
  }, "Professional development")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: "arrow-right",
    onClick: () => onNavigate('courses')
  }, "View all workshops")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 22
    }
  }, popular.concat(D.courses.filter(c => !c.popular).slice(0, 1)).map(c => /*#__PURE__*/React.createElement(CourseCard, {
    key: c.id,
    category: c.cat,
    title: c.title,
    description: c.blurb,
    icon: c.icon,
    accent: c.accent,
    duration: c.duration,
    level: c.level,
    price: c.price,
    accredited: c.accredited,
    ctaLabel: "View workshop",
    onClick: () => onOpenCourse(c.id)
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--atsa-sand)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '60px 28px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--atsa-ocean)',
      margin: '0 0 12px'
    }
  }, "Inclusion at the core"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 32,
      letterSpacing: '-0.02em',
      color: 'var(--atsa-navy)',
      margin: '0 0 16px',
      lineHeight: 1.15
    }
  }, "Inclusive practice every learner can feel"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.65,
      color: '#5a5040',
      margin: '0 0 22px',
      maxWidth: 460
    }
  }, "We help teaching teams build practice around difference, not despite it \u2014 strengths\u2011based, neurodiversity\u2011affirming, and practical on the pool deck. Every learner belongs in the water."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: "arrow-right"
  }, "Our approach to inclusion")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [['heart', 'Neurodiversity‑affirming', 'Strengths‑based strategies for autistic and ADHD learners.'], ['users', 'Built with teachers', 'Real classroom strategies your team can use on Monday.'], ['award', 'Lived experience', 'Connor teaches from his own practice and recognised expertise.']].map(([icon, t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    padding: "md",
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 42,
      height: 42,
      borderRadius: 12,
      background: 'var(--atsa-teal-20)',
      color: '#0E7D6C',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(NS_HOME.Icon, {
    name: icon,
    size: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 17,
      color: 'var(--atsa-navy)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--atsa-slate)',
      lineHeight: 1.5
    }
  }, d))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '64px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 22
    }
  }, D.testimonials.map(t => /*#__PURE__*/React.createElement(Card, {
    key: t.name,
    padding: "lg",
    variant: "muted"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "star",
    size: 20,
    style: {
      color: 'var(--atsa-teal)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 500,
      fontSize: 21,
      lineHeight: 1.45,
      color: 'var(--atsa-navy)',
      margin: '14px 0 18px',
      textWrap: 'pretty'
    }
  }, "\u201C", t.quote, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(NS_HOME.Avatar, {
    name: t.name,
    tone: "ocean"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--atsa-navy)'
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--atsa-slate)'
    }
  }, t.role))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--atsa-ocean)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1000,
      margin: '0 auto',
      padding: '64px 28px',
      textAlign: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 36,
      letterSpacing: '-0.02em',
      margin: '0 0 14px'
    }
  }, "Bring ATSA to your team"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'rgba(255,255,255,0.85)',
      margin: '0 0 28px'
    }
  }, "Book a workshop, or talk to us about professional development and consulting for your swim school."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => onNavigate('courses')
  }, "Browse workshops"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse-secondary",
    size: "lg",
    iconLeft: "mail"
  }, "Partner with us")))));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/SiteChrome.jsx
try { (() => {
// ATSA marketing — shared header & footer. Exposes window.Header / window.Footer.

function Header({
  onNavigate,
  current
}) {
  const {
    Button
  } = window.ATSADesignSystem_6b2905;
  const D = window.ATSA_DATA;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '14px 28px',
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('home');
    },
    style: {
      display: 'flex',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/atsa-logo-primary.svg",
    alt: "ATSA",
    style: {
      height: 42
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4,
      marginLeft: 8
    }
  }, D.nav.map(item => {
    const key = item === 'Professional development' ? 'courses' : item.toLowerCase().replace(/\s/g, '');
    const active = current === key;
    return /*#__PURE__*/React.createElement("a", {
      key: item,
      href: "#",
      onClick: e => {
        e.preventDefault();
        if (item === 'Professional development') onNavigate('courses');
      },
      style: {
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        fontSize: 15,
        color: active ? 'var(--atsa-navy)' : 'var(--atsa-slate)',
        textDecoration: 'none',
        padding: '8px 14px',
        borderRadius: 999,
        transition: 'color .12s, background .12s'
      },
      onMouseEnter: e => {
        e.currentTarget.style.background = 'var(--atsa-cloud)';
        e.currentTarget.style.color = 'var(--atsa-navy)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = active ? 'var(--atsa-navy)' : 'var(--atsa-slate)';
      }
    }, item);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--atsa-navy)',
      textDecoration: 'none',
      padding: '8px 6px'
    }
  }, "Log in"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: "arrow-right",
    onClick: () => onNavigate('courses')
  }, "Book a workshop"))));
}
function Footer({
  onNavigate
}) {
  const D = window.ATSA_DATA;
  const linkStyle = {
    color: 'rgba(255,255,255,0.72)',
    textDecoration: 'none',
    fontSize: 14,
    lineHeight: 2
  };
  const col = (title, items) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--atsa-aqua)',
      margin: '0 0 10px'
    }
  }, title), items.map(i => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: linkStyle
  }, i))));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--atsa-navy)',
      color: '#fff',
      marginTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--atsa-navy-deep)',
      textAlign: 'center',
      padding: '13px 20px',
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 15,
      letterSpacing: '0.01em',
      color: 'rgba(255,255,255,0.9)'
    }
  }, "Raising the standard in aquatic education"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '48px 28px 28px',
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
      gap: 36
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/atsa-logo-reversed.svg",
    alt: "ATSA",
    style: {
      height: 52,
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 14.5,
      color: 'var(--atsa-aqua)',
      margin: '0 0 12px'
    }
  }, "Aquatic training & inclusive practice"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.72)',
      fontSize: 14,
      lineHeight: 1.6,
      maxWidth: 320,
      margin: 0
    }
  }, "Professional development and consulting for the aquatics industry \u2014 grounded in real experience on the pool deck, and inclusive by design.")), col('Professional development', ['Inclusive Practice', 'Teaching Neurodivergent Learners', 'Water Safety Education', 'Program Leadership']), col('ATSA', ['About ATSA', 'For swim schools', 'Consulting & advisory', 'Contact']), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--atsa-aqua)',
      margin: '0 0 10px'
    }
  }, "Get in touch"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...linkStyle
    }
  }, D.phone), /*#__PURE__*/React.createElement("div", {
    style: {
      ...linkStyle,
      fontSize: 13,
      wordBreak: 'break-word'
    }
  }, D.email), /*#__PURE__*/React.createElement("div", {
    style: {
      ...linkStyle
    }
  }, D.location))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '18px 28px',
      borderTop: '1px solid rgba(255,255,255,0.14)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 8,
      color: 'rgba(255,255,255,0.5)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Aquatic Training Solutions Australia"), /*#__PURE__*/React.createElement("span", null, D.web)));
}
window.Header = Header;
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/SiteChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/data.js
try { (() => {
// ATSA marketing demo data — B2B professional development + consulting for the aquatics industry.
window.ATSA_DATA = {
  brand: {
    name: 'Aquatic Training Solutions Australia',
    short: 'ATSA',
    primaryLine: 'Raising the standard in aquatic education',
    descriptor: 'Aquatic training & inclusive practice',
    phone: '0457 424 736',
    email: 'connor@aquatictrainingsolutionsaustralia.com.au',
    web: 'aquatictrainingsolutionsaustralia.com.au',
    location: 'Toowoomba, QLD'
  },
  nav: ['Professional development', 'For swim schools', 'About', 'Contact'],
  categories: [{
    id: 'inclusive',
    label: 'Inclusive practice',
    icon: 'heart'
  }, {
    id: 'neuro',
    label: 'Neurodiversity',
    icon: 'users'
  }, {
    id: 'safety',
    label: 'Water safety',
    icon: 'lifebuoy'
  }, {
    id: 'leadership',
    label: 'Program leadership',
    icon: 'award'
  }],
  // "Courses" = professional-development workshops & programs for the industry
  courses: [{
    id: 'inclusive-practice',
    cat: 'Inclusive practice',
    catId: 'inclusive',
    title: 'Inclusive Practice for Swim Teachers',
    icon: 'heart',
    accent: 'navy',
    price: 245,
    duration: 'Full day',
    level: 'Teachers & coaches',
    accredited: true,
    popular: true,
    audience: 'Swim teachers & coaches',
    blurb: 'Build the confidence and practical skills to teach every learner — and make inclusion the default in your lessons, not the exception.',
    outcomes: ['Plan lessons that work for every learner', 'Adapt teaching for different needs without singling anyone out', 'Use strengths-based, neurodiversity-affirming language', 'Set up a calm, predictable teaching environment']
  }, {
    id: 'teaching-neurodivergent',
    cat: 'Neurodiversity',
    catId: 'neuro',
    title: 'Teaching Neurodivergent Learners',
    icon: 'users',
    accent: 'teal',
    price: 245,
    duration: 'Full day',
    level: 'Teachers & coaches',
    accredited: true,
    popular: true,
    audience: 'Swim teachers & coaches',
    blurb: 'A practical, lived-experience workshop on teaching autistic and ADHD learners in the water — what actually works on the pool deck.',
    outcomes: ['Understand neurodivergent profiles (ASD, ADHD) in plain language', 'Read and respond to sensory and regulation cues', 'Adjust pace, language and structure for the learner', 'Partner well with families and support workers']
  }, {
    id: 'water-safety-education',
    cat: 'Water safety',
    catId: 'safety',
    title: 'Water Safety Education Essentials',
    icon: 'lifebuoy',
    accent: 'ocean',
    price: 180,
    duration: 'Half day',
    level: 'All roles',
    accredited: false,
    popular: false,
    audience: 'All aquatic staff',
    blurb: 'The water-safety knowledge every teacher and coach should carry into every lesson — clear, current and practical.',
    outcomes: ['Embed water-safety messaging into lessons', 'Recognise and manage in-lesson risk', 'Teach age-appropriate survival skills', 'Reinforce safe behaviours with families']
  }, {
    id: 'program-leadership',
    cat: 'Program leadership',
    catId: 'leadership',
    title: 'Program Leadership & Culture',
    icon: 'award',
    accent: 'navy',
    price: 390,
    duration: 'Full day',
    level: 'Program managers',
    accredited: false,
    popular: false,
    audience: 'Managers & coordinators',
    blurb: 'For coordinators and managers: build a teaching team and a culture where high standards and inclusion are simply how things are done.',
    outcomes: ['Set clear teaching standards across your team', 'Coach and develop your swim teachers', 'Build an inclusive, generative culture', 'Lead change without losing your people']
  }, {
    id: 'coaching-foundations',
    cat: 'Program leadership',
    catId: 'leadership',
    title: 'Coaching Foundations',
    icon: 'graduation-cap',
    accent: 'aqua',
    price: 280,
    duration: '2 half-days',
    level: 'Aspiring coaches',
    accredited: false,
    popular: false,
    audience: 'Teachers stepping up',
    blurb: 'A pathway program for teachers moving into squad and stroke-development coaching — structure, cues and pool craft.',
    outcomes: ['Structure a progression and a training set', 'Coach with clear, simple cues', 'Develop stroke technique safely', 'Take the next step in your coaching pathway']
  }, {
    id: 'inclusion-conference',
    cat: 'Neurodiversity',
    catId: 'neuro',
    title: 'Keynote & Conference Sessions',
    icon: 'book-open',
    accent: 'teal',
    price: null,
    accredited: false,
    popular: false,
    duration: '45–90 min',
    level: 'Conferences & events',
    audience: 'Industry audiences',
    blurb: 'Connor\u2019s signature talks on neurodiversity and inclusion in aquatics — “neurodiversity isn\u2019t a roadblock; it\u2019s the current that drives us forward.”',
    outcomes: ['Reframe neurodiversity as a strength', 'Hear real classroom stories and what worked', 'Leave with practical first steps', 'Inspire your team to lift the standard']
  }],
  stats: [{
    label: 'Teachers & coaches trained',
    value: '1,500+'
  }, {
    label: 'Partner swim schools',
    value: '40+'
  }, {
    label: 'Years in the industry',
    value: 'Since 2018'
  }, {
    label: 'Workshops delivered',
    value: '120+'
  }],
  testimonials: [{
    quote: 'Connor\u2019s workshop changed how our whole team teaches. It was practical, generous, and genuinely inclusive — our teachers came back energised, not lectured at.',
    name: 'Renee M.',
    role: 'Program Manager, partner swim school'
  }, {
    quote: 'The neurodiversity training was the best PD we\u2019ve done. Real stories, real strategies, and language we now use every day on the deck.',
    name: 'David T.',
    role: 'Swim School Coordinator, Toowoomba'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/data.js", error: String((e && e.message) || e) }); }

// ui_kits/mobile/Screens.jsx
try { (() => {
// ATSA mobile — screens + tab bar. window.MobileApp
const NS_M = window.ATSADesignSystem_6b2905;
const ACCENT = {
  navy: 'var(--atsa-navy)',
  ocean: 'var(--atsa-ocean)',
  teal: 'var(--atsa-teal)',
  aqua: 'var(--atsa-aqua)'
};

// shared bits ---------------------------------------------------
function ScreenScroll({
  children,
  pad = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      paddingTop: 54,
      paddingBottom: 96,
      background: 'var(--atsa-cloud)'
    }
  }, children);
}
function H1({
  children,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 20px 14px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 27,
      color: 'var(--atsa-navy)',
      margin: 0,
      letterSpacing: '-0.02em'
    }
  }, children), sub ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '3px 0 0',
      fontSize: 14.5,
      color: 'var(--atsa-slate)'
    }
  }, sub) : null);
}

// HOME ----------------------------------------------------------
function MobileHome({
  onOpen,
  goTab
}) {
  const {
    Button,
    Card,
    ProgressBar,
    Icon,
    Badge
  } = NS_M;
  const M = window.ATSA_M;
  const c = M.continue;
  return /*#__PURE__*/React.createElement(ScreenScroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 20px 4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--atsa-slate)'
    }
  }, "Good morning,"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 24,
      color: 'var(--atsa-navy)'
    }
  }, M.student.name)), /*#__PURE__*/React.createElement(NS_M.Avatar, {
    name: M.student.full,
    tone: "teal",
    size: "lg"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 20px 0'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "raised",
    padding: "none",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: ACCENT[c.accent],
      color: '#fff',
      padding: '16px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 44,
      height: 44,
      borderRadius: 12,
      background: 'rgba(255,255,255,0.15)',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: 0.8,
      fontWeight: 600,
      letterSpacing: '0.04em',
      textTransform: 'uppercase'
    }
  }, "Continue learning"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 18
    }
  }, c.title))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px'
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    value: c.done,
    max: c.total,
    showValue: true,
    tone: "teal",
    valueFormat: (v, m) => `${v}/${m} modules`
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--atsa-slate)',
      margin: '12px 0 14px'
    }
  }, "Up next \u2014 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--atsa-navy)'
    }
  }, c.next)), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    fullWidth: true,
    iconRight: "arrow-right",
    onClick: () => onOpen(c.id)
  }, "Resume course")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 6px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 17,
      color: 'var(--atsa-navy)',
      marginBottom: 10
    }
  }, "Your next session"), /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    style: {
      display: 'flex',
      gap: 13,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      background: 'var(--atsa-navy)',
      color: '#fff',
      borderRadius: 12,
      padding: '8px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      opacity: 0.85
    }
  }, "SAT"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 22,
      lineHeight: 1
    }
  }, "14")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--atsa-navy)'
    }
  }, M.next.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 12.5,
      color: 'var(--atsa-slate)',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 13
  }), M.next.time, " \xB7 ", M.next.place)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 17,
      color: 'var(--atsa-navy)'
    }
  }, "Browse PD"), /*#__PURE__*/React.createElement("button", {
    onClick: () => goTab('courses'),
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--atsa-ocean)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 14,
      cursor: 'pointer'
    }
  }, "See all")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, M.courses.slice(0, 2).map(c => /*#__PURE__*/React.createElement(CourseListItem, {
    key: c.id,
    c: c,
    onOpen: onOpen
  })))));
}
function CourseListItem({
  c,
  onOpen
}) {
  const {
    Card,
    Icon,
    Badge
  } = NS_M;
  return /*#__PURE__*/React.createElement(Card, {
    padding: "sm",
    interactive: true,
    onClick: () => onOpen(c.id),
    style: {
      display: 'flex',
      gap: 13,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 50,
      height: 50,
      borderRadius: 13,
      background: ACCENT[c.accent],
      color: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--atsa-ocean)'
    }
  }, c.cat), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 16,
      color: 'var(--atsa-navy)'
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      fontSize: 12.5,
      color: 'var(--atsa-slate)',
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 12
  }), " ", c.duration), /*#__PURE__*/React.createElement("span", null, "$", c.price))), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 20,
    style: {
      color: 'var(--atsa-navy-40)'
    }
  }));
}

// COURSES -------------------------------------------------------
function MobileCourses({
  onOpen
}) {
  const M = window.ATSA_M;
  return /*#__PURE__*/React.createElement(ScreenScroll, null, /*#__PURE__*/React.createElement(H1, {
    sub: "Professional development for swim teachers"
  }, "Workshops"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, M.courses.map(c => /*#__PURE__*/React.createElement(CourseListItem, {
    key: c.id,
    c: c,
    onOpen: onOpen
  }))));
}

// COURSE DETAIL -------------------------------------------------
function MobileCourseDetail({
  courseId,
  onBack,
  onEnrol
}) {
  const {
    Button,
    Icon,
    Badge,
    Card
  } = NS_M;
  const M = window.ATSA_M;
  const c = M.courses.find(x => x.id === courseId) || M.courses[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      background: 'var(--atsa-cloud)',
      paddingBottom: 110
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: ACCENT[c.accent],
      color: '#fff',
      padding: '60px 20px 26px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      position: 'absolute',
      top: 54,
      left: 16,
      width: 38,
      height: 38,
      borderRadius: 999,
      border: 'none',
      background: 'rgba(255,255,255,0.18)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 58,
      height: 58,
      borderRadius: 16,
      background: 'rgba(255,255,255,0.16)',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 30
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      opacity: 0.85
    }
  }, c.cat), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 28,
      margin: '4px 0 10px',
      letterSpacing: '-0.02em'
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'rgba(255,255,255,0.85)',
      margin: 0,
      lineHeight: 1.5
    }
  }, c.blurb)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px',
      display: 'flex',
      gap: 10
    }
  }, [['clock', c.duration], ['users', c.level], ['award', c.accredited ? 'Accredited' : 'Short course']].map(([i, v]) => /*#__PURE__*/React.createElement(Card, {
    key: v,
    padding: "sm",
    style: {
      flex: 1,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 18,
    style: {
      color: 'var(--atsa-ocean)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 12.5,
      color: 'var(--atsa-navy)',
      marginTop: 5
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 17,
      color: 'var(--atsa-navy)',
      margin: '6px 0 12px'
    }
  }, "What you\u2019ll learn"), ['Plan lessons that work for every learner', 'Use strengths-based, affirming language', 'Adapt teaching without singling anyone out', 'Build a calm, predictable environment'].map(o => /*#__PURE__*/React.createElement("div", {
    key: o,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      marginBottom: 11
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 19,
    style: {
      color: 'var(--atsa-teal)',
      flexShrink: 0,
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      color: 'var(--atsa-navy)',
      lineHeight: 1.45
    }
  }, o)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '12px 20px 30px',
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(10px)',
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--atsa-navy)',
      lineHeight: 1
    }
  }, "$", c.price), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--atsa-slate)'
    }
  }, "per participant")), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: "arrow-right",
    onClick: onEnrol,
    style: {
      flex: 1
    }
  }, "Book now")));
}

// SCHEDULE ------------------------------------------------------
function MobileSchedule() {
  const {
    Card,
    Icon
  } = NS_M;
  const M = window.ATSA_M;
  return /*#__PURE__*/React.createElement(ScreenScroll, null, /*#__PURE__*/React.createElement(H1, {
    sub: "Your upcoming sessions"
  }, "Schedule"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, M.schedule.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.title,
    padding: "md",
    style: {
      display: 'flex',
      gap: 13,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      background: ACCENT[s.tone],
      color: '#fff',
      borderRadius: 12,
      padding: '8px 12px',
      minWidth: 54
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      opacity: 0.85
    }
  }, s.day), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 22,
      lineHeight: 1
    }
  }, s.date), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      opacity: 0.85
    }
  }, s.month)), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 15.5,
      color: 'var(--atsa-navy)',
      lineHeight: 1.3
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 12.5,
      color: 'var(--atsa-slate)',
      marginTop: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 13
  }), s.time), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 12.5,
      color: 'var(--atsa-slate)',
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 13
  }), s.place))))));
}

// PROFILE -------------------------------------------------------
function MobileProfile() {
  const {
    Card,
    Icon,
    Badge,
    Button
  } = NS_M;
  const M = window.ATSA_M;
  const rows = [['award', 'Certificates', '4'], ['book-open', 'Completed PD', '5'], ['settings', 'Settings', null], ['info', 'Help & support', null]];
  return /*#__PURE__*/React.createElement(ScreenScroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '14px 20px 8px'
    }
  }, /*#__PURE__*/React.createElement(NS_M.Avatar, {
    name: M.student.full,
    tone: "teal",
    size: "xl",
    style: {
      margin: '0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--atsa-navy)',
      marginTop: 10
    }
  }, M.student.full), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--atsa-slate)'
    }
  }, "Swim teacher \xB7 Toowoomba")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 20px 0'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "none"
  }, rows.map(([icon, label, val], i) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 13,
      padding: '15px 16px',
      borderBottom: i < rows.length - 1 ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 36,
      height: 36,
      borderRadius: 10,
      background: 'var(--atsa-cloud)',
      color: 'var(--atsa-ocean)',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 19
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 15.5,
      color: 'var(--atsa-navy)'
    }
  }, label), val ? /*#__PURE__*/React.createElement(Badge, {
    tone: "ocean"
  }, val) : null, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18,
    style: {
      color: 'var(--atsa-navy-40)'
    }
  })))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    iconLeft: "log-out",
    style: {
      marginTop: 18
    }
  }, "Log out")));
}

// TAB BAR + APP -------------------------------------------------
function TabBar({
  tab,
  setTab
}) {
  const {
    Icon
  } = NS_M;
  const tabs = [['home', 'Home', 'home'], ['courses', 'Courses', 'book-open'], ['schedule', 'Schedule', 'calendar'], ['profile', 'Profile', 'user']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 40,
      background: 'rgba(255,255,255,0.94)',
      backdropFilter: 'blur(16px)',
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      padding: '8px 8px 26px'
    }
  }, tabs.map(([id, label, icon]) => {
    const active = tab === id;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => setTab(id),
      style: {
        flex: 1,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        padding: '6px 0',
        color: active ? 'var(--atsa-navy)' : 'var(--atsa-navy-40)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 23,
      strokeWidth: active ? 2.4 : 2
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        fontSize: 11
      }
    }, label));
  }));
}
function MobileEnrolToast({
  onClose
}) {
  const {
    Icon
  } = NS_M;
  React.useEffect(() => {
    const t = setTimeout(onClose, 2600);
    return () => clearTimeout(t);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      bottom: 100,
      zIndex: 80,
      background: 'var(--atsa-navy)',
      color: '#fff',
      borderRadius: 14,
      padding: '14px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      boxShadow: '0 12px 32px rgba(11,59,94,0.4)',
      animation: 'mtoast .3s cubic-bezier(0.16,1,0.3,1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 34,
      height: 34,
      borderRadius: 999,
      background: 'var(--atsa-teal)',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 19,
    strokeWidth: 3
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 15
    }
  }, "You\u2019re booked in"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'rgba(255,255,255,0.75)'
    }
  }, "Confirmation sent (demo).")));
}
function MobileApp() {
  const [tab, setTab] = React.useState('home');
  const [courseId, setCourseId] = React.useState(null);
  const [toast, setToast] = React.useState(false);
  const open = id => setCourseId(id);
  const goTab = t => {
    setCourseId(null);
    setTab(t);
  };
  let screen;
  if (courseId) screen = /*#__PURE__*/React.createElement(MobileCourseDetail, {
    courseId: courseId,
    onBack: () => setCourseId(null),
    onEnrol: () => {
      setCourseId(null);
      setToast(true);
    }
  });else if (tab === 'home') screen = /*#__PURE__*/React.createElement(MobileHome, {
    onOpen: open,
    goTab: goTab
  });else if (tab === 'courses') screen = /*#__PURE__*/React.createElement(MobileCourses, {
    onOpen: open
  });else if (tab === 'schedule') screen = /*#__PURE__*/React.createElement(MobileSchedule, null);else screen = /*#__PURE__*/React.createElement(MobileProfile, null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      overflowY: 'auto'
    }
  }, screen), !courseId && /*#__PURE__*/React.createElement(TabBar, {
    tab: tab,
    setTab: setTab
  }), toast && /*#__PURE__*/React.createElement(MobileEnrolToast, {
    onClose: () => setToast(false)
  }));
}
window.MobileApp = MobileApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/data.js
try { (() => {
// ATSA member app demo data — a swim teacher's PD on the go. window.ATSA_M
window.ATSA_M = {
  student: {
    name: 'Mia',
    full: 'Mia Tran'
  },
  continue: {
    id: 'inclusive-practice',
    title: 'Inclusive Practice',
    icon: 'heart',
    accent: 'navy',
    done: 6,
    total: 8,
    next: 'Adapting without singling out'
  },
  next: {
    day: 'Sat 14 Jun',
    time: '9:00am',
    title: 'Inclusive Practice — in person',
    place: 'ATSA Training Room, Toowoomba'
  },
  courses: [{
    id: 'inclusive-practice',
    cat: 'Inclusive practice',
    title: 'Inclusive Practice for Swim Teachers',
    icon: 'heart',
    accent: 'navy',
    price: 245,
    duration: 'Full day',
    level: 'Teachers & coaches',
    accredited: true,
    blurb: 'Teach every learner — inclusion as the default, not the exception.'
  }, {
    id: 'teaching-neurodivergent',
    cat: 'Neurodiversity',
    title: 'Teaching Neurodivergent Learners',
    icon: 'users',
    accent: 'teal',
    price: 245,
    duration: 'Full day',
    level: 'Teachers & coaches',
    accredited: true,
    blurb: 'A practical, lived-experience workshop on autistic and ADHD learners.'
  }, {
    id: 'water-safety-education',
    cat: 'Water safety',
    title: 'Water Safety Education Essentials',
    icon: 'lifebuoy',
    accent: 'ocean',
    price: 180,
    duration: 'Half day',
    level: 'All roles',
    accredited: false,
    blurb: 'The water-safety knowledge to carry into every lesson.'
  }, {
    id: 'program-leadership',
    cat: 'Leadership',
    title: 'Program Leadership & Culture',
    icon: 'award',
    accent: 'navy',
    price: 390,
    duration: 'Full day',
    level: 'Program managers',
    accredited: false,
    blurb: 'Build a team and culture where high standards are the norm.'
  }],
  schedule: [{
    day: 'SAT',
    date: '14',
    month: 'Jun',
    title: 'Inclusive Practice — in person',
    time: '9:00am – 4:00pm',
    place: 'ATSA Training Room, Toowoomba',
    tone: 'navy'
  }, {
    day: 'TUE',
    date: '24',
    month: 'Jun',
    title: 'Neurodiversity Q&A — online',
    time: '6:00pm – 7:30pm',
    place: 'Online (live)',
    tone: 'ocean'
  }, {
    day: 'SAT',
    date: '12',
    month: 'Jul',
    title: 'Coaching Foundations — Day 1',
    time: '9:00am – 1:00pm',
    place: 'Host swim school, Brisbane',
    tone: 'teal'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/data.js", error: String((e && e.message) || e) }); }

// ui_kits/mobile/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/ios-frame.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.CourseCard = __ds_scope.CourseCard;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
