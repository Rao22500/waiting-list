import PageHeader from '@/components/page-header';
import SubscribeForm from '@/components/subscribe-form';
import PageContainer from '@/components/common/PageContainer';

export const metadata = {
  title: 'Global Trading Academy - Master Trading Worldwide',
  description: 'Transform your trading with expert-led education in stocks, forex, and crypto. Get unlimited access to live sessions, AI tools, and professional mentorship.',
};

export default function Home() {
  return (
    <section>
      <PageContainer>
        <PageHeader
          className='mb-12'
          title='Turn Market Knowledge Into Trading Success'
          description='Join 50,000+ traders worldwide who are mastering stocks, forex, and crypto with our expert mentors. Get unlimited access to live trading sessions, AI-powered tools, and a supportive global community.'
        >
          Limited Time Offer <span className='text-gray-300 mx-1'>·</span> 50% Off Launch Price
        </PageHeader>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-4 rounded-lg bg-white/10">
              <h3 className="text-xl font-semibold mb-2">Learn By Trading</h3>
              <p className="text-gray-600 dark:text-gray-400">Master proven strategies with real-time market analysis and live trading sessions</p>
            </div>
            <div className="p-4 rounded-lg bg-white/10">
              <h3 className="text-xl font-semibold mb-2">Expert Mentorship</h3>
              <p className="text-gray-600 dark:text-gray-400">Get personalized guidance from traders with $1M+ portfolios and 10+ years experience</p>
            </div>
            <div className="p-4 rounded-lg bg-white/10">
              <h3 className="text-xl font-semibold mb-2">AI Trading Edge</h3>
              <p className="text-gray-600 dark:text-gray-400">Spot profitable trades faster with our AI that analyzes 1000+ market signals</p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold">Your All-Access Trading Success Package</h2>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>✓ 100+ Hours of Video Courses ($2,997 Value)</li>
              <li>✓ Weekly Live Trading Sessions ($997/month Value)</li>
              <li>✓ AI Trading Assistant & Analytics ($497/month Value)</li>
              <li>✓ Private Trading Community ($197/month Value)</li>
              <li>✓ Daily Market Analysis & Alerts ($297/month Value)</li>
            </ul>
          </div>

          <div className="mb-8">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">Don't miss out:</span> Only 100 spots available at our special launch price. Join successful traders from 50+ countries who are already profiting from our expert system.
            </p>
          </div>
        </div>

        <SubscribeForm />
      </PageContainer>
    </section>
  );
}