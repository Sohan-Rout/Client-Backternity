                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            export const metadata = {
  title: 'Shipping & Delivery Policy | Backternity',
  description: 'Shipping and delivery information for Backternity digital products.',
};

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Shipping & Delivery Policy
          </h1>
          <p className="text-muted-foreground">
            Last updated: November 19, 2025
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Digital Products - Instant Delivery</h2>
            <p className="text-muted-foreground mb-4">
              Backternity offers exclusively digital products including backend modules, templates, and software components. All products are delivered electronically and instantly.
            </p>
            <p className="text-muted-foreground">
              <strong className="text-white">No physical shipping is required or available.</strong>
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">How You Receive Your Products</h2>
            <p className="text-muted-foreground mb-4">
              Once your payment is successfully processed:
            </p>
            <ol className="list-decimal list-inside text-muted-foreground space-y-3">
              <li>
                <strong className="text-white">Instant Access:</strong> You will immediately gain access to the product through your Backternity account dashboard
              </li>
              <li>
                <strong className="text-white">Email Confirmation:</strong> You will receive an email confirmation with:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Order receipt and invoice</li>
                  <li>Download links for your products</li>
                  <li>Installation and setup instructions</li>
                  <li>Documentation links</li>
                </ul>
              </li>
              <li>
                <strong className="text-white">Account Dashboard:</strong> All purchased products are available in your account for future downloads
              </li>
            </ol>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Delivery Timeframe</h2>
            <div className="space-y-4">
              <div>
                <p className="text-white font-semibold mb-2">Immediate Delivery:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Products are available instantly after successful payment</li>
                  <li>No waiting period or processing time required</li>
                  <li>24/7 availability - purchase and download anytime</li>
                </ul>
              </div>
              <div>
                <p className="text-white font-semibold mb-2">Email Delivery:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Confirmation emails are sent within 2-5 minutes</li>
                  <li>Check your spam/junk folder if you don't receive the email</li>
                  <li>Contact support if you don't receive access within 15 minutes</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Download Instructions</h2>
            <p className="text-muted-foreground mb-4">
              To download your products:
            </p>
            <ol className="list-decimal list-inside text-muted-foreground space-y-2">
              <li>Log in to your Backternity account at <a href="https://backternity.dev" className="text-emerald-400 hover:text-emerald-300">backternity.dev</a></li>
              <li>Navigate to your account dashboard</li>
              <li>Click on "My Products" or "Downloads"</li>
              <li>Select the product you want to download</li>
              <li>Click the download button to save the files to your computer</li>
            </ol>
            <p className="text-muted-foreground mt-4">
              <strong className="text-white">Note:</strong> Download links do not expire, and you can re-download products anytime from your account.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Access Duration</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong className="text-white">One-Time Purchases:</strong> Lifetime access to download and use the product</li>
              <li><strong className="text-white">Backternity Plus Subscription:</strong> Access to all products while subscription is active</li>
              <li><strong className="text-white">Updates:</strong> Free updates for 6 months from purchase date (or lifetime with active subscription)</li>
              <li><strong className="text-white">Re-downloads:</strong> Unlimited re-downloads from your account</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Delivery Issues</h2>
            <p className="text-muted-foreground mb-4">
              If you experience any issues receiving your products:
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-white font-semibold mb-2">Email Not Received:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Check your spam/junk/promotions folders</li>
                  <li>Add support@backternity.dev to your contacts</li>
                  <li>Verify you used the correct email address during purchase</li>
                  <li>Check your account dashboard - products are available there immediately</li>
                </ul>
              </div>
              <div>
                <p className="text-white font-semibold mb-2">Download Problems:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Ensure you have a stable internet connection</li>
                  <li>Try using a different browser</li>
                  <li>Disable any download managers or browser extensions</li>
                  <li>Clear your browser cache and try again</li>
                </ul>
              </div>
              <div>
                <p className="text-white font-semibold mb-2">Payment Processed but No Access:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Wait 15 minutes for the system to process</li>
                  <li>Contact support with your order ID and payment confirmation</li>
                  <li>We will manually grant access within 24 hours</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">System Requirements</h2>
            <p className="text-muted-foreground mb-4">
              Before purchasing, ensure your system meets the requirements:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Modern web browser (Chrome, Firefox, Safari, Edge)</li>
              <li>Stable internet connection for downloads</li>
              <li>Sufficient storage space for downloaded files</li>
              <li>Compatible development environment (Node.js, npm/pnpm for backend modules)</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Specific technical requirements are listed on each product page.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">International Availability</h2>
            <p className="text-muted-foreground">
              Our digital products are available for purchase worldwide:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>Instant delivery to all countries</li>
              <li>No customs, duties, or international shipping fees</li>
              <li>Payment accepted in multiple currencies through Stripe and Razorpay</li>
              <li>English documentation and support</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Support</h2>
            <p className="text-muted-foreground mb-4">
              If you need assistance with delivery or downloads:
            </p>
            <div className="text-muted-foreground space-y-2">
              <p><strong className="text-white">Email Support:</strong> <a href="mailto:support@backternity.dev" className="text-emerald-400 hover:text-emerald-300">support@backternity.dev</a></p>
              <p><strong className="text-white">Response Time:</strong> Within 24-48 hours (usually faster)</p>
              <p><strong className="text-white">Documentation:</strong> Available in your account dashboard</p>
              <p><strong className="text-white">Website:</strong> <a href="https://backternity.dev" className="text-emerald-400 hover:text-emerald-300">https://backternity.dev</a></p>
            </div>
          </section>

          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-6 mt-8">
            <p className="text-sm text-muted-foreground">
              <strong className="text-white">Important:</strong> Backternity sells only digital products. We do not ship physical items. All products are delivered electronically through your account dashboard and email.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
