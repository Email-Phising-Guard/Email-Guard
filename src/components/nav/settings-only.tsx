import Header from "../header";
import SettingsDialog from "../settings-dialog";

export default function SettingsOnlyNav() {
  return (
    <Header className="flex justify-end">
      <SettingsDialog />
    </Header>
  );
}
