import { cn } from "@/lib/utils";
import BackButton from "./back-button";
import Header from "./header";
import HomeButton from "./home-button";
import SettingsDialog from "./settings-dialog";

type NavbarProps = {
  type: "home" | "back" | "settings";
};

export default function Navbar({ type }: NavbarProps) {
  return (
    <Header
      className={cn({
        "flex justify-between": type === "home" || type === "back",
        "flex justify-end": type === "settings",
      })}
    >
      {type === "home" && <HomeButton />}
      {type === "back" && <BackButton />}
      {(type === "home" || type === "back" || type === "settings") && (
        <SettingsDialog />
      )}
    </Header>
  );
}
