export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          E-commerce Intelligence
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Predict Which Products Will Get Returned
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Analyze product listings, reviews, and descriptions to surface high-risk SKUs before returns eat your margins. Get actionable fixes in seconds.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Predicting — $13/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-2xl font-bold text-[#58a6ff]">38%</p>
            <p className="text-sm text-[#8b949e] mt-1">Avg return rate reduction</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#58a6ff]">2 min</p>
            <p className="text-sm text-[#8b949e] mt-1">To analyze a product</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#58a6ff]">10k+</p>
            <p className="text-sm text-[#8b949e] mt-1">SKUs analyzed monthly</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="border border-[#30363d] rounded-2xl p-8 bg-[#161b22] text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$13</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              'Unlimited product analyses',
              'Return risk score per SKU',
              'AI-generated listing improvements',
              'CSV & Shopify import',
              'Priority email support'
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does the return prediction work?</h3>
            <p className="text-sm text-[#8b949e]">We analyze your product title, description, images, and customer reviews using ML models trained on millions of e-commerce transactions to score each SKU's return likelihood.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Which platforms do you support?</h3>
            <p className="text-sm text-[#8b949e]">You can upload a CSV from any platform, or connect directly via Shopify. WooCommerce and Amazon integrations are on the roadmap.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription?</h3>
            <p className="text-sm text-[#8b949e]">Yes, cancel anytime from your billing portal. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Return Rate Predictor. All rights reserved.
      </footer>
    </main>
  )
}
