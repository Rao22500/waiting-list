export const metadata = {
  title: "FAQ - Global Trading Academy",
  description: "Frequently asked questions about Global Trading Academy's courses, subscription, and learning approach.",
};

import PageHeader from "@/components/page-header";
import Accordion from "@/components/accordion";
import Cta from "@/components/cta";

export default function Faq() {
  const faqs = [
    {
      title: "When will the academy launch?",
      text: "We're launching in Q2 2024 with exclusive early access pricing (50% off) for our founding members. Secure your spot now to lock in this special rate and get instant access to our pre-launch content library.",
      active: false,
    },
    {
      title: "What trading topics are covered?",
      text: "Master stocks, forex, crypto, and AI-driven trading through our comprehensive curriculum. Get hands-on experience with live trading sessions, real market analysis, and proven strategies that have generated consistent profits for our expert traders.",
      active: false,
    },
    {
      title: "How does the subscription model work?",
      text: "One simple subscription unlocks everything: 100+ hours of video courses ($2,997 value), weekly live trading sessions ($997/month value), AI trading tools ($497/month value), and our private community ($197/month value). Cancel anytime with our 30-day money-back guarantee.",
      active: false,
    },
    {
      title: "What experience level is required?",
      text: "Whether you're just starting or an experienced trader, our platform adapts to your level. Begin with fundamentals or jump straight into advanced strategies. Our AI system personalizes your learning path based on your goals and experience.",
      active: true,
    },
    {
      title: "What makes Global Trading Academy unique?",
      text: "Unlike traditional courses, we combine live trading experience, AI-powered analysis, and mentorship from traders with proven track records ($1M+ portfolios). Our students learn by doing, not just watching.",
      active: false,
    },
    {
      title: "How do the live sessions work?",
      text: "Join expert traders as they analyze markets and execute trades in real-time. Ask questions, get personalized feedback, and learn professional strategies. Can't attend live? Access recordings anytime in our library.",
      active: false,
    },
    {
      title: "What AI tools are included?",
      text: "Our proprietary AI analyzes 1000+ market signals to identify high-probability trades. Get real-time alerts, risk analysis, and portfolio optimization suggestions. Members report 35% average improvement in trade success rate.",
      active: false,
    },
    {
      title: "Is there a money-back guarantee?",
      text: "Absolutely! Try Global Trading Academy risk-free for 30 days. If you're not seeing improvement in your trading, get a full refund - no questions asked. We succeed only when you succeed.",
      active: false,
    },
  ];

  return (
    <>
      <section>
        <div className="pt-32 pb-12 md:pt-44 md:pb-20">
          <div className="px-4 sm:px-6">
            <PageHeader
              className="mb-12 md:mb-20"
              title="Transform Your Trading Journey"
              description="Get answers to your questions about our revolutionary trading education platform. Learn how we've helped 50,000+ traders achieve consistent profits."
            >
              Quick Answers
            </PageHeader>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-1">
                {faqs.map((faq, index) => (
                  <Accordion
                    key={index}
                    title={faq.title}
                    id={`faqs-${index}`}
                    active={faq.active}
                  >
                    {faq.text}
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}