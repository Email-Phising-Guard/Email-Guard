import BackButton from "../back-button";
import Header from "../header";
import SettingsDialog from "../settings-dialog";

export default function BackButtonNav() {
  return (
    <Header className="flex justify-between">
      <BackButton />
      <SettingsDialog />
    </Header>
  );
}
