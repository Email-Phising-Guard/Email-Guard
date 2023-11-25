"use client";

import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

export default function ThemeController() {
  const { theme, setTheme } = useTheme();
  const systemDark =
    theme === "system" &&
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const isDark = theme === "dark" || systemDark;
  const handleChangeTheme = () => {
    console.log(theme);
    setTheme(isDark ? "light" : "dark");
  };
  return (
    <div className="flex items-center space-x-2">
      <Switch onClick={handleChangeTheme} checked={isDark} />
      <Label>{isDark ? "Dark Mode" : "Light Mode"}</Label>
    </div>
  );
}
