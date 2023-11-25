import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const relativePath = "/dashboard/topic";
const TopicLinks = [
  {
    href: `${relativePath}/types-of-phising-attacks`,
    label: "Types of Phishing Attacks",
  },
  {
    href: `${relativePath}/detection-prevention-strategies`,
    label: "Detection and Prevention Strategies",
  },
  { href: `${relativePath}/impact-of-phising`, label: "Impact of Phishing" },
];

export default function ExploreTopicPage() {
  return (
    <MaxWidthWrapper>
      <h1 className="mt-20 text-center">Choose a Topic</h1>
      <div className="mx-auto mt-32 flex w-full max-w-xs flex-col gap-5">
        {TopicLinks.map(({ href, label }) => (
          <Link key={href} href={href}>
            <Button className="h-auto w-full justify-center py-10 text-xl font-light">
              <span className="break-words">{label}</span>
            </Button>
          </Link>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
