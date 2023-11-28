import MaxWidthWrapper from "@/components/max-width-wrapper";
import Navbar from "@/components/navbar";
import TopicNav from "@/components/topic-nav";

export default function TopicThreePage() {
  return (
    <>
      <Navbar type="back" />
      <MaxWidthWrapper>
        TopicThreePage
        <TopicNav segmentPrev="identifying-email-phishing" />
      </MaxWidthWrapper>
    </>
  );
}
