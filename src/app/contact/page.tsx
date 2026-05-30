'use client'

import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      <main className="min-h-screen bg-cream">
        <section className="bg-gradient-to-r from-coffee-700 to-coffee-900 text-cream py-20">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-serif font-bold mb-4">Get in Touch</h1>
              <p className="text-xl text-cream/90">
                We'd love to hear from you. Reach out anytime!
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-lg mb-8 text-coffee-900">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="text-4xl">📍</div>
                  <div>
                    <h3 className="font-bold text-coffee-900 mb-1">Address</h3>
                    <p className="text-coffee-700">
                      123 Coffee Lane
                      <br />
                      Portland, Oregon 97210
                      <br />
                      USA
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-4xl">📞</div>
                  <div>
                    <h3 className="font-bold text-coffee-900 mb-1">Phone</h3>
                    <p className="text-coffee-700">
                      <a href="tel:6362194698" className="hover:text-coffee-900">
                        6362194698
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-4xl">✉️</div>
                  <div>
                    <h3 className="font-bold text-coffee-900 mb-1">Email</h3>
                    <p className="text-coffee-700">
                      <a
                        href="mailto:gowdapartha61@gmail.com"
                        className="hover:text-coffee-900"
                      >
                        gowdapartha61@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-4xl">⏰</div>
                  <div>
                    <h3 className="font-bold text-coffee-900 mb-1">Business Hours</h3>
                    <p className="text-coffee-700">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <h2 className="heading-md mb-6 text-coffee-900">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-coffee-900 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full border-2 border-coffee-200 rounded-lg px-4 py-2 focus:border-coffee-700 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-coffee-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full border-2 border-coffee-200 rounded-lg px-4 py-2 focus:border-coffee-700 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-coffee-900 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full border-2 border-coffee-200 rounded-lg px-4 py-2 focus:border-coffee-700 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-coffee-900 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full border-2 border-coffee-200 rounded-lg px-4 py-2 focus:border-coffee-700 outline-none transition resize-none"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
