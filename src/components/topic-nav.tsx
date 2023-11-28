import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function TopicNav({
  segmentPrev = "",
  segmentNext = "",
}: {
  segmentPrev?: string;
  segmentNext?: string;
}) {
  return (
    <footer className="mb-6 mt-12">
      <div className="flex items-center justify-between">
        {segmentPrev !== "" && (
          <p className="ml-[24px] text-[#B3B3B3]">Previous</p>
        )}
        {segmentNext !== "" && (
          <p className="ml-auto mr-[24px] text-[#B3B3B3]">Next</p>
        )}
      </div>
      <div className="flex items-center justify-between font-bold">
        <div className="flex flex-1 flex-col">
          {segmentPrev !== "" && (
            <Link
              href={`/dashboard/topic/${segmentPrev}`}
              className="flex items-center justify-start"
            >
              <ChevronLeft size={32} />
              <span>Email Phishing</span>
            </Link>
          )}
        </div>
        <div className="flex flex-1 flex-col text-right">
          {segmentNext !== "" && (
            <Link
              href={`/dashboard/topic/${segmentNext}`}
              className="flex items-center justify-start"
            >
              <span>Responding to Email Phishing</span>
              <ChevronRight size={32} />
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}
