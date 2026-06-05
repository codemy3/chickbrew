'use client'

import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-cream">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-coffee-700 to-coffee-900 text-cream py-20">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-serif font-bold mb-4">
                The Story of chikbrew
              </h1>
              <p className="text-xl text-cream/90">
                From farm to cup, a journey of passion, quality, and sustainability
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 py-16">
          {/* Our Mission */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="heading-lg mb-6 text-coffee-900">Our Mission</h2>
            <p className="text-lg text-coffee-700 leading-relaxed mb-4">
              At chikbrew, we believe in bringing authentic, premium coffee directly
              from sustainable farms to your cup. We eliminate unnecessary intermediaries
              to ensure you get the freshest, highest-quality coffee while supporting
              farmers fairly.
            </p>
            <p className="text-lg text-coffee-700 leading-relaxed">
              Our commitment is simple: quality without compromise, sustainability at
              every step, and transparency in every transaction.
            </p>
          </motion.section>

          {/* Why We Started */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="heading-lg mb-6 text-coffee-900">Why We Started</h2>
            <p className="text-lg text-coffee-700 leading-relaxed mb-4">
              We noticed that most coffee drinkers never truly experience the origins
              of their beans. Commercial channels diluted quality, and farmers received
              just a fraction of what customers paid. This gap bothered us.
            </p>
            <p className="text-lg text-coffee-700 leading-relaxed">
              chikbrew was born to bridge this gap. We partner directly with coffee
              farms, carefully select the finest beans, and deliver them to you with
              stories of their origins and the farmers behind them.
            </p>
          </motion.section>

          {/* Our Values */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="heading-lg mb-8 text-coffee-900">Our Core Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Quality',
                  description: 'We never compromise on quality. Every bean is handpicked and tested.',
                },
                {
                  title: 'Sustainability',
                  description: 'We partner with eco-friendly farms that respect the environment.',
                },
                {
                  title: 'Fairness',
                  description: 'We pay farmers fair prices for their exceptional work.',
                },
                {
                  title: 'Transparency',
                  description: 'Know exactly where your coffee comes from and how it was grown.',
                },
              ].map((value, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-lg p-6 border-l-4 border-coffee-700"
                  whileHover={{ x: 10 }}
                >
                  <h3 className="text-xl font-bold text-coffee-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-coffee-700">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Stats */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-coffee-900 text-cream rounded-lg p-12 text-center grid md:grid-cols-3 gap-8"
          >
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-cream/80">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <p className="text-cream/80">Partner Farms</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-cream/80">Unique Varieties</p>
            </div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </>
  )
}
