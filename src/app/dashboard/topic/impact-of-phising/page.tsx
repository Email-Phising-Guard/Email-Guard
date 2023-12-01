import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import Navbar from "@/components/navbar";
import TopicNav from "@/components/topic-nav";
import Image from "next/image";

const tips = [
  {
    header: "Don't click on links or downloads",
    content:
      "Avoid clicking on any links or downloading attachments in the suspicious email. These could lead to malware or phishing websites.",
  },
  {
    header: "Don't Provide Personal Information",
    content:
      "Never reply to the email with personal or sensitive information. Legitimate organizations will not ask for such details via email.",
  },
  {
    header: "Mark the Email as Spam or Phishing",
    content: `Use your email client's options to mark the email as spam or phishing. This helps improve the email provider's filters and prevents similar emails from reaching your inbox.`,
  },
  {
    header: "Verify the Legitimacy",
    content: `If the email claims to be from a known organization, independently verify the request by contacting the organization through official channels. Do not use contact details provided in the suspicious email.`,
  },
];

export default function TopicThreePage() {
  return (
    <>
      <Navbar type="back" />
      <MaxWidthWrapper>
        <h1 className="my-10">Responding to Email Phishing</h1>
        <Image
          src="/otherPics/picture1.png"
          alt="two people looking at a computer screen"
          width={393}
          height={240}
        />
        <div className="my-5 flex items-center justify-start">
          <h2>Tips</h2>
        </div>

        <span>
          If you suspect youve received a phishing email, its crucial to respond
          promptly and appropriately to minimize potential risks. Heres a
          step-by-step guide on how to respond to email phishing
        </span>

        {tips.map((tip, index) => (
          <Accordion type="single" collapsible key={index}>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger>{tip.header}</AccordionTrigger>
              <AccordionContent>{tip.content}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}

        <h2 className="mb-5 mt-14 text-3xl">Video</h2>
        <iframe
          width="430"
          height="315"
          src="https://www.youtube.com/embed/kWI7cRmQfpE?si=slyvjuecSp_oBpRf"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>

        <TopicNav segmentPrev="identifying-email-phishing" />
      </MaxWidthWrapper>
    </>
  );
}
