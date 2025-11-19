export const metadata = {
  title: 'Privacy Policy | Backternity',
  description: 'Privacy policy explaining how Backternity collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            Last updated: November 19, 2025
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p className="text-muted-foreground">
              Backternity ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://backternity.dev" className="text-emerald-400 hover:text-emerald-300">backternity.dev</a> and use our services.
            </p>
            <p className="text-muted-foreground mt-4">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Personal Information</h3>
                <p className="text-muted-foreground mb-2">
                  We collect information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Register for an account</li>
                  <li>Make a purchase</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us for support</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                <p className="text-muted-foreground mt-2">
                  This information may include: name, email address, billing information, payment details, and any other information you choose to provide.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Automatically Collected Information</h3>
                <p className="text-muted-foreground mb-2">
                  We automatically collect certain information when you visit our website:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>IP address and browser type</li>
                  <li>Operating system and device information</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring/exit pages and URLs</li>
                  <li>Date and time stamps</li>
                  <li>Clickstream data</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Cookies and Tracking Technologies</h3>
                <p className="text-muted-foreground">
                  We use cookies, web beacons, and similar tracking technologies to collect information and improve your experience. You can control cookie preferences through your browser settings.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Process and fulfill your orders and transactions</li>
              <li>Manage your account and provide customer support</li>
              <li>Send you order confirmations, receipts, and updates</li>
              <li>Communicate with you about products, services, and promotions</li>
              <li>Improve our website, products, and services</li>
              <li>Analyze usage patterns and optimize user experience</li>
              <li>Prevent fraudulent transactions and protect against security threats</li>
              <li>Comply with legal obligations and enforce our terms</li>
              <li>Send administrative information and important notices</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">4. How We Share Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We may share your information in the following circumstances:
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Third-Party Service Providers</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li><strong className="text-white">Payment Processors:</strong> Stripe and Razorpay for secure payment processing</li>
                  <li><strong className="text-white">Authentication:</strong> Clerk for user authentication and account management</li>
                  <li><strong className="text-white">Analytics:</strong> Google Analytics for website analytics</li>
                  <li><strong className="text-white">Email Services:</strong> For sending transactional and marketing emails</li>
                  <li><strong className="text-white">Hosting:</strong> Cloud hosting providers for website and data storage</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Business Transfers</h3>
                <p className="text-muted-foreground">
                  If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Legal Requirements</h3>
                <p className="text-muted-foreground">
                  We may disclose your information if required by law or in response to valid requests by public authorities.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Protection of Rights</h3>
                <p className="text-muted-foreground">
                  We may disclose information to protect our rights, property, or safety, and that of our users or others.
                </p>
              </div>
            </div>

            <p className="text-muted-foreground mt-4">
              <strong className="text-white">We do not sell your personal information to third parties.</strong>
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
            <p className="text-muted-foreground mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>SSL/TLS encryption for data transmission</li>
              <li>Secure data storage with encryption at rest</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication</li>
              <li>PCI DSS compliant payment processing</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">6. Data Retention</h2>
            <p className="text-muted-foreground">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law. When information is no longer needed, we will securely delete or anonymize it.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">7. Your Privacy Rights</h2>
            <p className="text-muted-foreground mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong className="text-white">Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong className="text-white">Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong className="text-white">Deletion:</strong> Request deletion of your personal information</li>
              <li><strong className="text-white">Restriction:</strong> Request restriction of processing of your information</li>
              <li><strong className="text-white">Portability:</strong> Request transfer of your information to another service</li>
              <li><strong className="text-white">Objection:</strong> Object to processing of your information</li>
              <li><strong className="text-white">Withdraw Consent:</strong> Withdraw consent for marketing communications</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              To exercise these rights, please contact us at <a href="mailto:privacy@backternity.dev" className="text-emerald-400 hover:text-emerald-300">privacy@backternity.dev</a>
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">8. Marketing Communications</h2>
            <p className="text-muted-foreground mb-4">
              We may send you marketing emails about our products, services, and promotions. You can opt out at any time by:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Clicking the "unsubscribe" link in any marketing email</li>
              <li>Updating your email preferences in your account settings</li>
              <li>Contacting us at <a href="mailto:support@backternity.dev" className="text-emerald-400 hover:text-emerald-300">support@backternity.dev</a></li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Note: You cannot opt out of transactional emails (order confirmations, account notifications, etc.).
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">9. Third-Party Links</h2>
            <p className="text-muted-foreground">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies before providing any information.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">10. Children's Privacy</h2>
            <p className="text-muted-foreground">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">11. International Data Transfers</h2>
            <p className="text-muted-foreground">
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We ensure appropriate safeguards are in place to protect your information.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground">
              We may update this privacy policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">13. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="text-muted-foreground space-y-2">
              <p><strong className="text-white">Email:</strong> <a href="mailto:privacy@backternity.dev" className="text-emerald-400 hover:text-emerald-300">privacy@backternity.dev</a></p>
              <p><strong className="text-white">Support:</strong> <a href="mailto:support@backternity.dev" className="text-emerald-400 hover:text-emerald-300">support@backternity.dev</a></p>
              <p><strong className="text-white">Website:</strong> <a href="https://backternity.dev" className="text-emerald-400 hover:text-emerald-300">https://backternity.dev</a></p>
            </div>
          </section>

          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-6 mt-8">
            <p className="text-sm text-muted-foreground">
              By using Backternity services, you acknowledge that you have read and understood this Privacy Policy and agree to the collection and use of your information as described herein.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
