const darkTheme = [
 "--body-bg-color: #181A1B",
 "--font-color: #FFFFFF"
];

const lightTheme = [
  "--body-bg-color: #F9F9F9",
  "--font-color: #181A1B"
];

export default function SwitchTheme(change) {
  const root = document.getElementsByTagName("html")[0];
  let theme;

  if (change) theme = darkTheme;
  else theme = lightTheme;

  root.style.cssText += theme.join(";");
}
