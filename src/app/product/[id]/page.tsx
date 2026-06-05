'use client'

import Footer from '@/components/Footer'
import { useCart } from '@/context/useCart'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { products } from '@/lib/products'

interface ProductDetailPageProps {
  params: {
    id: string
  }
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded] = useState(false)
  const { addToCart } = useCart()

  const product = products.find((current) => current.id === params.id) ?? products[0]
  const priceLabel = product.priceLabel ?? `₹${product.price.toFixed(2)}`

  const productDetails = {
    weight: '250g',
    caffeine: product.category === 'Robusta' ? 'High' : 'Medium',
    roastDate: 'Fresh roasted weekly',
    farmName: 'chikbrew Coffee Collective',
    altitude: product.category === 'Arabica' ? '1500-1800m' : '900-1200m',
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image ?? '/hero/custom.png',
    }, quantity)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <>
      <main className="min-h-screen bg-cream">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-lg p-8 flex items-center justify-center h-96 lg:h-full"
            >
              <div className="text-8xl animate-float">☕</div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="mb-4 inline-block bg-gold text-coffee-900 px-4 py-2 rounded-full text-sm font-bold">
                {product.roastLevel} Roast
              </div>

              <h1 className="heading-lg mb-2 text-coffee-900">{product.name}</h1>
              <p className="text-coffee-600 text-lg mb-4">{product.origin}</p>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-coffee-900">
                  {priceLabel}
                </span>
                <span className="text-green-600 font-semibold">In Stock</span>
              </div>

              <p className="text-coffee-700 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Taste Notes */}
              <div className="mb-6">
                <h3 className="font-bold text-coffee-900 mb-3">Taste Profile</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tasteNotes.map((note, i) => (
                    <span
                      key={i}
                      className="bg-coffee-100 text-coffee-900 px-4 py-2 rounded-full text-sm font-semibold"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="font-bold text-coffee-900 mb-4">Product Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(productDetails).map(([key, value]) => (
                    <div key={key}>
                      <p className="text-sm text-coffee-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </p>
                      <p className="font-semibold text-coffee-900">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Brewing Tips */}
              <div className="bg-coffee-50 rounded-lg p-6 mb-8">
                <h3 className="font-bold text-coffee-900 mb-4">Brewing Tips</h3>
                <ul className="space-y-2">
                  {[
                    'Grind: Medium-fine',
                    'Water Temp: 195-205°F',
                    'Brew Time: 3-4 minutes',
                    'Best for: Pour over, AeroPress',
                  ].map((tip, i) => (
                    <li key={i} className="flex gap-3 text-coffee-700">
                      <span className="text-gold">✓</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Add to Cart */}
              <div className="flex gap-4">
                <div className="flex items-center border-2 border-coffee-200 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-coffee-50"
                  >
                    −
                  </button>
                  <span className="px-6 py-2 font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-coffee-50"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isAdded
                      ? 'bg-green-500 text-white'
                      : 'bg-coffee-700 text-cream hover:bg-coffee-800'
                  }`}
                >
                      {isAdded ? '✓ Added to Cart!' : 'Add to Cart'}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
