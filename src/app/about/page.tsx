import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { team } from "@/db/team";
import TeamCard from "./team-card";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Navbar from "@/components/navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AboutPage() {
  return (
    <>
      <Navbar type="back" />
      <MaxWidthWrapper>
        <h1 className="py-5 text-primary">About Email Guard</h1>
        <section className="py-5">
          <h4 className="text-lg">
            Our mission is to equip you with the expertise and abilities you
            need to confidently spot phishing emails and safeguard your personal
            information online.
          </h4>
        </section>
        <section className="py-5">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-2xl font-semibold">
                Our App
              </AccordionTrigger>
              <AccordionContent className="text-xl">
                Email Guard is here to help you become better at spotting fake
                phishing emails. Through quick, entertaining quiz questions,
                we’re ready to guide you through the ins and outs of email
                phishing.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
        <section className="py-5">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-2xl font-semibold">
                Email Phishing Summary
              </AccordionTrigger>
              <AccordionContent className="text-xl">
                Phishing is a cyber-attack where scammers trick you into sharing
                sensitive information, like login details or personal data,
                through fake emails. These emails seem to come from trusted
                sources and often ask you to click harmful links or download
                infected files. To protect your online security, it’s crucial to
                verify email authenticity.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
        <section className="py-5">
          <h2 className="mb-10 mt-10 text-4xl text-primary">Our Team</h2>
          <div className="space-y-5">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </section>
        <section className="py-5">
          <form>
            <h2 className="mb-10 mt-10 text-4xl text-primary">
              Have Questions?
            </h2>
            <div className="mb-5 space-y-3">
              <Label htmlFor="email">Your Email</Label>
              <Input type="email" id="email" />
            </div>
            <div className="mb-5 space-y-3">
              <Label htmlFor="message">Your message</Label>
              <Textarea id="message" />
            </div>
            <div className="mb-5">
              <Button type="submit" className="w-full py-10 text-3xl">
                Submit
              </Button>
            </div>
          </form>
        </section>
      </MaxWidthWrapper>
    </>
  );
}
