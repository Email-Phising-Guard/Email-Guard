import { cn } from "@/lib/utils";

type HeaderProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function Header({ className, children }: HeaderProps) {
  return (
    <header className={cn("mx-auto max-w-md px-2 pt-5", className)}>
      {children}
    </header>
  );
}
