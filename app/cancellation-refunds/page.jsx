export const metadata = {
  title: 'Cancellation & Refunds Policy | Backternity',
  description: 'Cancellation and refunds policy for Backternity products and services.',
};

export default function CancellationRefundsPage() {
  return (
    <main className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cancellation & Refunds Policy
          </h1>
          <p className="text-muted-foreground">
            Last updated: November 19, 2025
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Refund Policy</h2>
            <p className="text-muted-foreground mb-4">
              At Backternity, we strive to provide high-quality backend modules and templates. Due to the nature of digital products, all sales are final once you have downloaded or accessed the product.
            </p>
            <p className="text-muted-foreground">
              However, we offer refunds in the following exceptional cases:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>The product is significantly different from what was described</li>
              <li>The product has critical bugs that prevent basic functionality (reported within 7 days of purchase)</li>
              <li>You were charged multiple times for the same purchase due to a technical error</li>
              <li>The product download failed and our support team cannot resolve the issue</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Refund Request Process</h2>
            <p className="text-muted-foreground mb-4">
              To request a refund, please follow these steps:
            </p>
            <ol className="list-decimal list-inside text-muted-foreground space-y-2">
              <li>Contact our support team at <a href="mailto:support@backternity.dev" className="text-emerald-400 hover:text-emerald-300">support@backternity.dev</a></li>
              <li>Provide your order ID and purchase email</li>
              <li>Clearly explain the reason for your refund request</li>
              <li>Include screenshots or error logs if reporting technical issues</li>
            </ol>
            <p className="text-muted-foreground mt-4">
              Refund requests must be submitted within <strong className="text-white">7 days</strong> of purchase.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">3. Cancellation Policy</h2>
            <p className="text-muted-foreground mb-4">
              <strong className="text-white">One-Time Purchases:</strong> You may cancel your purchase before downloading or accessing the product. Once you have accessed the product, cancellations are not available due to the digital nature of our products.
            </p>
            <p className="text-muted-foreground">
              <strong className="text-white">Backternity Plus Subscriptions:</strong> You may cancel your subscription at any time. Upon cancellation:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>You will retain access to all products until the end of your current billing period</li>
              <li>No further charges will be made after the current period ends</li>
              <li>You will not receive a refund for the remaining time in your current billing period</li>
              <li>You can manage your subscription from your account dashboard</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Refund Processing Time</h2>
            <p className="text-muted-foreground">
              Once your refund request is approved:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>Refunds will be processed within 5-7 business days</li>
              <li>The refund will be credited to the original payment method</li>
              <li>Depending on your bank or payment provider, it may take an additional 3-5 business days for the amount to reflect in your account</li>
              <li>You will receive a confirmation email once the refund is processed</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Non-Refundable Items</h2>
            <p className="text-muted-foreground mb-4">
              The following are not eligible for refunds:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Products that have been fully downloaded and accessed</li>
              <li>Custom development or consulting services that have been completed</li>
              <li>Discounted or promotional items (unless defective)</li>
              <li>Subscription renewals (you must cancel before the renewal date)</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">6. Technical Support</h2>
            <p className="text-muted-foreground">
              Before requesting a refund, we encourage you to contact our support team. Many issues can be resolved quickly through:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>Email support at <a href="mailto:support@backternity.dev" className="text-emerald-400 hover:text-emerald-300">support@backternity.dev</a></li>
              <li>Documentation and setup guides included with each product</li>
              <li>Community support forums</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">7. Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              For refund requests or questions about this policy, please contact us:
            </p>
            <div className="text-muted-foreground space-y-2">
              <p><strong className="text-white">Email:</strong> <a href="mailto:support@backternity.dev" className="text-emerald-400 hover:text-emerald-300">support@backternity.dev</a></p>
              <p><strong className="text-white">Website:</strong> <a href="https://backternity.dev" className="text-emerald-400 hover:text-emerald-300">https://backternity.dev</a></p>
            </div>
          </section>

          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-6 mt-8">
            <p className="text-sm text-muted-foreground">
              We reserve the right to modify this policy at any time. Changes will be posted on this page with an updated revision date. Your continued use of our services after changes constitutes acceptance of the updated policy.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
