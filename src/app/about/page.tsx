import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { team } from "@/db/team";
import TeamCard from "./team-card";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import BackButtonNav from "@/components/nav/back-button-nav";

export default function AboutPage() {
  return (
    <>
      <BackButtonNav />
      <MaxWidthWrapper>
        <h1 className="py-5">About</h1>
        <section className="py-5">
          <h2 className="mb-3">Our App</h2>
          <p>
            Email Phishing Guard is here to help you become better at spotting
            fake phishing emails. Through quick, entertaining quiz questions,
            we’re ready to guide you through the ins and outs of email phishing.
            Our mission is to equip you with the expertise and abilities you
            need to confidently spot phishing emails and safeguard your personal
            information online
          </p>
        </section>
        <section className="py-5">
          <h2 className="mb-3">Email Phising</h2>
          <p>
            Phishing is a type of cyber-attack that aims to trick you into
            disclosing sensitive or confidential information, like your login
            credentials, financial data, or personal details. Scammers use fake
            emails that appear to be from trusted sources, such as banks,
            government agencies, or well-known companies, to deceive you. These
            deceptive emails are crafted to make you take specific actions, like
            clicking on harmful links or downloading infected attachments. So,
            it&apos;s important for you to stay vigilant and verify the
            authenticity of emails to protect your information and online
            security.
          </p>
        </section>
        <section className="py-5">
          <h2 className="mb-3">Our Team</h2>
          <div className="space-y-5">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </section>
        <section className="py-5">
          <form>
            <h2 className="mb-5 text-center text-4xl text-primary">
              Have Questions?
            </h2>
            <div className="mb-5">
              <Label htmlFor="email">Your Email</Label>
              <Input type="email" id="email" />
            </div>
            <div className="mb-5">
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
