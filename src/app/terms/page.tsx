'use client';

import Footer from '@/components/Footer';

const sections = [
  {
    title: 'Acceptance Of Terms',
    body: 'By accessing or using this website, you agree to these Terms and Conditions. If you do not agree, please do not use the site.',
  },
  {
    title: 'Products And Orders',
    body: 'Product descriptions, availability, and pricing may change at any time. We reserve the right to refuse or cancel any order if we believe there is an error, misuse, or fraud risk.',
  },
  {
    title: 'Payments',
    body: 'If payment options are offered, you agree to provide accurate billing details and authorize the applicable charges. You are responsible for any fees charged by your payment provider.',
  },
  {
    title: 'Shipping And Delivery',
    body: 'Delivery timelines are estimates and may vary based on location, weather, or carrier delays. Risk of loss may pass to you once the order is handed over to the shipping provider.',
  },
  {
    title: 'Returns And Refunds',
    body: 'Any returns or refunds are subject to our posted return policy or, if none is posted, will be handled on a case-by-case basis at our discretion.',
  },
  {
    title: 'Acceptable Use',
    body: 'You agree not to misuse the website, interfere with its operation, attempt unauthorized access, or use the site in a way that violates any law or infringes the rights of others.',
  },
  {
    title: 'Intellectual Property',
    body: 'All website content, including text, graphics, logos, and images, is owned by chikbrew or licensed for our use and may not be copied or reused without permission.',
  },
  {
    title: 'Limitation Of Liability',
    body: 'To the fullest extent permitted by law, chikbrew is not liable for indirect, incidental, special, or consequential damages arising from your use of the website or products.',
  },
  {
    title: 'Changes To Terms',
    body: 'We may update these Terms at any time. Continued use of the website after changes are posted means you accept the updated Terms.',
  },
];

export default function TermsPage() {
  return (
    <>
      <main className="min-h-screen bg-[#F9F6F1]">
        <section className="bg-[radial-gradient(circle_at_top_left,_rgba(140,94,60,0.95),_rgba(42,31,16,0.98))] text-[#FDFBF7] py-20">
          <div className="mx-auto max-w-4xl px-6">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-[#D4AF37]">Legal</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold">Terms & Conditions</h1>
            <p className="mt-4 max-w-2xl text-[#FDFBF7]/80 leading-relaxed">
              These terms explain the rules for using chikbrew’s website, placing orders, and interacting with our content and services.
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
              <h2 className="text-2xl font-serif font-bold text-[#2A1F10]">Contact</h2>
              <p className="text-base leading-7 text-[#6B5635]">
                For questions about these Terms, please reach out through the contact information listed on our website.
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}