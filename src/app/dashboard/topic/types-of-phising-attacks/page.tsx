import MaxWidthWrapper from "@/components/max-width-wrapper";
import Navbar from "@/components/navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PieChart } from "lucide-react";

export default function TopicOnePage() {
  return (
    <>
      <Navbar type="back" />
      <MaxWidthWrapper>
        <h1 className="py-5">Email Phising</h1>
        <section className="py-5">
          <h2 className="mb-3">What is it?</h2>
          <p>
            Email phishing is a deceitful tactic involving fake emails that
            trick people into sharing personal information or taking harmful
            actions. Stay cautious and verify unexpected emails to avoid falling
            for these scams.
          </p>
        </section>
        <section className="py-5">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <PieChart className="mr-2 h-6 w-6" /> Phishing Stats
              </AccordionTrigger>
              <AccordionContent className="text-md">
                <ul>
                  <li>
                    {" "}
                    - Phishing is the leading cause for data breaches,
                    accounting for a whooping{" "}
                    <span className="text-semibold">90%</span> of them.
                  </li>
                  <li>
                    - 97% of people around the world are unable to identify a
                    sophisticated phishing email.
                  </li>
                  <li>- 92% of malware is delivered via email </li>
                  <li>
                    - 95% of attacks on business networks are the result of
                    successful spear phishing
                  </li>
                  <li>
                    - Average cost of phishing attack to a midsized company is
                    $1.6 million
                  </li>
                  <li>
                    - 30% of phishing messages are opened by the user, 12% of
                    those users click on the malicious attachment or link.{" "}
                  </li>
                  <li> - Spam is 45% of all emails sent.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
        {/* Type of phishing */}
        <section className="py-5">
          <h2 className="mb-3">Types of Phishing Attacks</h2>
          <p>
            Here are some types of phishing attacks that you should be aware of.
          </p>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Voice Phishing</AccordionTrigger>
              <AccordionContent>
                This is a social engineering tactic that uses phone calls to
                deceive individuals into disclosing sensitive information. It
                involves a criminal pretending to represent a trusted
                institution, company, or government agency
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Pharming</AccordionTrigger>
              <AccordionContent>
                This type of cybercrime redirects website visitors to fraudulent
                sites without their knowledge, usually by exploiting DNS servers
                or modifying a user’s host file, with the intent to harvest
                personal data like passwords and credit card numbers.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Social Engineering</AccordionTrigger>
              <AccordionContent>
                This is a manipulation technique that exploits human error to
                gain private information, access, or valuables. It is a form of
                cybercrime that uses influence, persuasion, and observation to
                deceive and manipulate people into revealing personal
                information about themselves.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Website Spoofing</AccordionTrigger>
              <AccordionContent>
                This occurs when a scammer mimics the website of a trusted
                company with the goal of stealing from its visitors. This starts
                with registering a domain name that is nearly identical to the
                intended landing page.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Spear Phishing</AccordionTrigger>
              <AccordionContent>
                This is a targeted email attack purporting to be from a trusted
                sender. In spear phishing attacks, attackers often use
                information gleaned from research to put the recipient at ease.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="mt-8">
            <p>
              Each of these attacks has unique characteristics but they all aim
              to exploit human trust and manipulate individuals into revealing
              sensitive information. It’s important to be aware of these tactics
              to protect yourself online.{" "}
            </p>
          </div>
        </section>
        <section className="py-5">
          <h2 className="mb-3">Example</h2>
          <p>
            Email phishing is a deceitful tactic involving fake emails that
            trick people into sharing personal information or taking harmful
            actions. Stay cautious and verify unexpected emails to avoid falling
            for these scams.
          </p>
        </section>
      </MaxWidthWrapper>
    </>
  );
}
