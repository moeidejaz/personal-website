const darkTheme = [
  "--body-bg-color: #181A1B",
  "--font-color: #FFFFFF",
  "--scroll-bar-track-color: #181A1B",
  "--scroll-bar-thumb-color: #ffffffa8",
  "--scroll-bar-thumb-hover-color: #ccc",
];

const lightTheme = [
  "--body-bg-color: #F9F9F9",
  "--font-color: #181A1B",
  "--scroll-bar-track-color: #F9F9F9",
  "--scroll-bar-thumb-color: #8e8e8e",
  "--scroll-bar-thumb-hover-color: #ccc",
];

export default function SwitchTheme(change) {
  const root = document.getElementsByTagName("html")[0];
  let theme;

  if (change) theme = darkTheme;
  else theme = lightTheme;

  root.style.cssText += theme.join(";");
}
