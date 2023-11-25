import { Settings, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function SettingsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="py-8">
          <Settings className="stroke-primary" size={34} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
