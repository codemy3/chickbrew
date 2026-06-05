'use client';

import Footer from '@/components/Footer';

const sections = [
  {
    title: 'Information We Collect',
    body: 'We may collect the details you share with us directly, such as your name, email address, phone number, shipping information, and order notes. We also collect basic technical data like browser type, device type, and usage activity to help improve the website.',
  },
  {
    title: 'How We Use Information',
    body: 'We use your information to process orders, respond to inquiries, improve our website, send order updates, and provide customer support. If you contact us, we may keep a record of that communication for service and quality purposes.',
  },
  {
    title: 'Cookies and Analytics',
    body: 'Our website may use cookies or similar tools to remember preferences, understand traffic, and improve the user experience. You can usually control cookies through your browser settings, but some features may not work as intended if cookies are disabled.',
  },
  {
    title: 'Sharing Information',
    body: 'We do not sell your personal information. We may share information only with trusted service providers that help us operate the website, fulfill orders, or comply with legal obligations.',
  },
  {
    title: 'Data Security',
    body: 'We use reasonable administrative and technical safeguards to protect your information. However, no online system is completely secure, so we cannot guarantee absolute security.',
  },
  {
    title: 'Your Choices',
    body: 'You can contact us to update your information or ask questions about how your data is used. If you no longer want to receive messages from us, you can ask us to stop using your contact details for non-essential communications.',
  },
  {
    title: 'Changes To This Policy',
    body: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.',
  },
];

export default function PrivacyPage() {
  return (
    <>
      <main className="min-h-screen bg-[#F9F6F1]">
        <section className="bg-[radial-gradient(circle_at_top_left,_rgba(140,94,60,0.95),_rgba(42,31,16,0.98))] text-[#FDFBF7] py-20">
          <div className="mx-auto max-w-4xl px-6">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-[#D4AF37]">Legal</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold">Privacy Policy</h1>
            <p className="mt-4 max-w-2xl text-[#FDFBF7]/80 leading-relaxed">
              This policy explains how chikbrew collects, uses, and protects your information when you visit our website or place an order.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16">
          <div className="space-y-8 rounded-[1.75rem] border border-[#E8DCC8] bg-white p-8 md:p-10 shadow-[0_18px_50px_rgba(42,31,16,0.06)]">
            {sections.map((section) => (
              <article key={section.title} className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#2A1F10]">{section.title}</h2>
                <p className="text-base leading-7 text-[#6B5635]">{section.body}</p>
              </article>
            ))}

            <article className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-[#2A1F10]">Contact Us</h2>
              <p className="text-base leading-7 text-[#6B5635]">
                If you have questions about this Privacy Policy, contact us at chikbrew through the details listed on our website.
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}