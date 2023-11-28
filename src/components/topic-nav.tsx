import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function TopicNav() {
  return (
    <footer className="mb-6 mt-12">
      <div className="flex items-center justify-between">
        <p className="ml-[24px] text-[#B3B3B3]">Previous</p>
        <p className="mr-[24px] text-[#B3B3B3]">Next</p>
      </div>
      <div className="flex items-center justify-between font-bold">
        <div className="flex flex-1 flex-col">
          <Link
            href="/dashboard/topic/types-of-phising-attacks"
            className="flex items-center justify-start"
          >
            <ChevronLeft size={32} />
            <span>Email Phishing</span>
          </Link>
        </div>
        <div className="flex flex-1 flex-col text-right">
          <Link
            href="/dashboard/topic/impact-of-phising"
            className="flex items-center justify-start"
          >
            <span>Responding to Email Phishing</span>
            <ChevronRight size={32} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
