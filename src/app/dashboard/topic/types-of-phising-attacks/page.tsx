import MaxWidthWrapper from "@/components/max-width-wrapper";
import Navbar from "@/components/navbar";

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
      </MaxWidthWrapper>
    </>
  );
}
