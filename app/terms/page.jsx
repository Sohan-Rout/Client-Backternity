export const metadata = {
  title: 'Terms and Conditions | Backternity',
  description: 'Terms and conditions for using Backternity products and services.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms and Conditions
          </h1>
          <p className="text-muted-foreground">
            Last updated: November 19, 2025
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using Backternity ("we," "us," or "our") services at backternity.dev, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">2. License Grant</h2>
            <p className="text-muted-foreground mb-4">
              Upon purchase, we grant you a non-exclusive, non-transferable license to use our backend modules and templates:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong className="text-white">Personal/Commercial Use:</strong> You may use the products in personal and commercial projects</li>
              <li><strong className="text-white">Modifications:</strong> You may modify the code to suit your needs</li>
              <li><strong className="text-white">Multiple Projects:</strong> You may use the products in unlimited end projects</li>
              <li><strong className="text-white">Client Projects:</strong> You may use the products for client work</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">3. License Restrictions</h2>
            <p className="text-muted-foreground mb-4">
              You are <strong className="text-white">NOT</strong> permitted to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Resell, redistribute, or sublicense the products in their original or modified form</li>
              <li>Share your account credentials with others</li>
              <li>Create derivative products for sale or distribution</li>
              <li>Use the products to create competing products or services</li>
              <li>Remove or alter any copyright, trademark, or proprietary notices</li>
              <li>Claim the products or any part thereof as your own original work</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Intellectual Property</h2>
            <p className="text-muted-foreground">
              All products, including but not limited to code, documentation, designs, and content, are the intellectual property of Backternity and are protected by copyright laws. Your license does not grant you ownership of the products, only the right to use them according to these terms.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">5. User Accounts</h2>
            <p className="text-muted-foreground mb-4">
              To access certain features, you must create an account:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>You must provide accurate and complete information</li>
              <li>You are responsible for maintaining the security of your account</li>
              <li>You are responsible for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use</li>
              <li>We reserve the right to suspend or terminate accounts that violate these terms</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">6. Payment and Pricing</h2>
            <p className="text-muted-foreground mb-4">
              All prices are listed in Indian Rupees (INR) unless otherwise stated:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Prices may change without notice, but existing purchases are honored at the price paid</li>
              <li>Payment is processed securely through Stripe and Razorpay</li>
              <li>Subscriptions automatically renew unless canceled</li>
              <li>All fees are non-refundable except as stated in our Refund Policy</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">7. Updates and Support</h2>
            <p className="text-muted-foreground mb-4">
              <strong className="text-white">Product Updates:</strong>
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>We may release updates to fix bugs or add features</li>
              <li>Updates are provided at our discretion</li>
              <li>You will receive updates for 6 months from purchase date (or longer with active subscription)</li>
            </ul>
            <p className="text-muted-foreground mt-4 mb-4">
              <strong className="text-white">Technical Support:</strong>
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Email support is provided for setup and technical issues</li>
              <li>Support does not include custom development or consulting</li>
              <li>We aim to respond within 48 hours during business days</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">8. Disclaimer of Warranties</h2>
            <p className="text-muted-foreground">
              Our products are provided "as is" without warranties of any kind, either express or implied. We do not guarantee that:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>The products will meet your specific requirements</li>
              <li>The products will be error-free or uninterrupted</li>
              <li>Defects will be corrected</li>
              <li>The products are compatible with all environments or systems</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">9. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              To the maximum extent permitted by law, Backternity shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>Your use or inability to use our products</li>
              <li>Any unauthorized access to or use of our servers</li>
              <li>Any bugs, viruses, or other harmful code</li>
              <li>Any content obtained from the products</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">10. Prohibited Uses</h2>
            <p className="text-muted-foreground mb-4">
              You may not use our products for:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Any unlawful purpose or in violation of applicable laws</li>
              <li>Sending spam or unsolicited communications</li>
              <li>Attempting to gain unauthorized access to systems or networks</li>
              <li>Interfering with or disrupting our services</li>
              <li>Collecting personal information without consent</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">11. Termination</h2>
            <p className="text-muted-foreground">
              We reserve the right to terminate or suspend your access to our services immediately, without prior notice, for any reason, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>Violation of these Terms and Conditions</li>
              <li>Fraudulent or illegal activity</li>
              <li>Abusive behavior toward our team or other users</li>
              <li>Chargebacks or payment disputes</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">12. Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in India.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">13. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these terms at any time. When we do, we will update the "Last updated" date at the top of this page. Your continued use of our services after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">14. Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              If you have questions about these Terms and Conditions, please contact us:
            </p>
            <div className="text-muted-foreground space-y-2">
              <p><strong className="text-white">Email:</strong> <a href="mailto:support@backternity.dev" className="text-emerald-400 hover:text-emerald-300">support@backternity.dev</a></p>
              <p><strong className="text-white">Website:</strong> <a href="https://backternity.dev" className="text-emerald-400 hover:text-emerald-300">https://backternity.dev</a></p>
            </div>
          </section>

          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-6 mt-8">
            <p className="text-sm text-muted-foreground">
              By using Backternity services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
