'use client';

import Footer from '@/components/Footer';
import { useCart } from '@/context/useCart';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';

type CustomerDetails = {
  name: string;
  phone: string;
  address: string;
  email: string;
};

const WHATSAPP_NUMBER = '6362194698';

export default function CheckoutPage() {
  const { items, getCartTotal } = useCart();
  const [customer, setCustomer] = useState<CustomerDetails>({
    name: '',
    phone: '',
    address: '',
    email: '',
  });

  const total = getCartTotal();

  const orderSummary = useMemo(
    () =>
      items.map((item) => ({
        label: `${item.name} x${item.quantity}`,
        total: item.price * item.quantity,
      })),
    [items]
  );

  const formatCurrency = (value: number) => `₹${value.toFixed(2)}`;

  const buildOrderMessage = () => {
    const itemSummary = items
      .map((item) => `${item.name} x${item.quantity} (${item.price === 0 ? 'Price on request' : formatCurrency(item.price * item.quantity)})`)
      .join(', ');

    return [
      'Hi, I want to order:',
      itemSummary,
      `Total: ${formatCurrency(total)}`,
      '',
      `Name: ${customer.name}`,
      `Phone: ${customer.phone}`,
      `Address: ${customer.address}`,
      `Email: ${customer.email}`,
    ].join('\n');
  };

  const handleWhatsAppCheckout = (event: React.FormEvent) => {
    event.preventDefault();

    const message = buildOrderMessage();
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleEmailOrder = () => {
    const subject = encodeURIComponent('Chick Brew Order Request');
    const body = encodeURIComponent(buildOrderMessage());
    window.location.href = `mailto:gowdapartha61@gmail.com?subject=${subject}&body=${body}`;
  };

  if (items.length === 0) {
    return (
      <>
        <main className="min-h-screen bg-[linear-gradient(180deg,#F9F6F1_0%,#F2E7D8_100%)] py-20">
          <div className="mx-auto max-w-2xl px-4 text-center">
            <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full bg-white shadow-[0_16px_50px_rgba(42,31,16,0.08)]">
              <MessageCircle className="text-[#8C5E3C]" size={32} />
            </div>
            <h1 className="text-4xl font-serif font-bold text-[#2A1F10]">Your cart is empty</h1>
            <p className="mt-4 text-[#6B5635]">
              Add a few coffees to your cart before starting checkout.
            </p>
            <Link href="/#products" className="btn-primary mt-8 inline-flex">
              Continue Shopping
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-[linear-gradient(180deg,#F9F6F1_0%,#F2E7D8_100%)]">
        <section className="bg-[radial-gradient(circle_at_top_left,_rgba(140,94,60,0.95),_rgba(42,31,16,0.98))] text-cream py-12">
          <div className="mx-auto max-w-7xl px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold">Checkout</h1>
            <p className="mt-3 max-w-2xl text-cream/80">
              Complete your order by sending it through WhatsApp or use email as a backup.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-[1.75rem] border border-[#E8DCC8] bg-white/90 p-8 shadow-[0_18px_50px_rgba(42,31,16,0.08)] backdrop-blur-sm"
            >
              <h2 className="text-2xl font-serif font-bold text-[#2A1F10] mb-6">
                Customer Details
              </h2>

              <form className="space-y-4" onSubmit={handleWhatsAppCheckout}>
                {[
                  { key: 'name', label: 'Name', type: 'text', placeholder: 'Your full name' },
                  { key: 'phone', label: 'Phone', type: 'tel', placeholder: '+1 555 123 4567' },
                  { key: 'address', label: 'Address', type: 'text', placeholder: 'Street, city, state' },
                  { key: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
                ].map((field) => (
                  <label key={field.key} className="block">
                    <span className="mb-2 block text-sm font-semibold text-[#2A1F10]">
                      {field.label}
                    </span>
                    <input
                      required
                      type={field.type}
                      value={customer[field.key as keyof CustomerDetails]}
                      onChange={(event) =>
                        setCustomer({ ...customer, [field.key]: event.target.value })
                      }
                      placeholder={field.placeholder}
                      className="w-full rounded-2xl border border-[#E8DCC8] bg-[#FAF6F1] px-4 py-3 text-[#2A1F10] outline-none transition focus:border-[#8C5E3C]"
                    />
                  </label>
                ))}

                <button
                  type="submit"
                  className="btn-primary flex w-full items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  Complete Order via WhatsApp
                </button>

                <button
                  type="button"
                  onClick={handleEmailOrder}
                  className="btn-secondary flex w-full items-center justify-center gap-2"
                >
                  <Mail size={18} />
                  Email Order
                </button>
              </form>
            </motion.section>

            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-[1.75rem] border border-[#E8DCC8] bg-[#2A1F10] p-8 text-cream shadow-[0_18px_50px_rgba(42,31,16,0.18)]"
            >
              <h2 className="text-2xl font-serif font-bold mb-6">Order Summary</h2>

              <div className="space-y-4">
                {orderSummary.map((item) => (
                  <div key={item.label} className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                    <div>
                      <p className="font-semibold">{item.label}</p>
                    </div>
                    <p className="font-semibold text-[#D4AF37]">{formatCurrency(item.total)}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-6 text-lg font-bold">
                <span>Total</span>
                <span className="text-[#D4AF37]">{formatCurrency(total)}</span>
              </div>

              <p className="mt-6 text-sm text-cream/75">
                WhatsApp message will include your selected coffees, total, and customer details.
              </p>
            </motion.aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}