import { ConnectButton } from '@rainbow-me/rainbowkit';
import { BugIcon, ShieldCheckIcon, CoinsIcon } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <BugIcon className="w-8 h-8 text-blue-500" />
            <h1 className="text-3xl font-bold">Buguza</h1>
          </div>
          <ConnectButton />
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">Decentralized Bug Bounties</h2>
          <p className="text-xl text-gray-300 mb-8">Secure smart contracts through crowdsourced audits with automatic onchain payouts</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Submit Project
          </button>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 p-6 rounded-xl">
            <ShieldCheckIcon className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Secure Auditing</h3>
            <p className="text-gray-400">Professional security researchers verify and report vulnerabilities in your smart contracts</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <CoinsIcon className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Automatic Payouts</h3>
            <p className="text-gray-400">Smart contract-based bounty distribution ensures immediate rewards for valid findings</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <BugIcon className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Bug Tracking</h3>
            <p className="text-gray-400">Comprehensive dashboard to track and manage reported vulnerabilities</p>
          </div>
        </div>

        {/* Active Bounties */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Active Bounties</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">Example Protocol {i}</h3>
                    <p className="text-gray-400">Smart Contract Audit</p>
                  </div>
                  <div className="bg-blue-600 px-4 py-1 rounded-full text-sm">
                    10 ETH
                  </div>
                </div>
                <p className="text-gray-300 mb-4">Looking for critical vulnerabilities in our new DeFi protocol smart contracts.</p>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>Submissions: 5</span>
                  <span>Expires in 20 days</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-400">
          <p>Built on Base with ❤️</p>
        </footer>
      </div>
    </main>
  );
}