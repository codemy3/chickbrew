'use client'

import Footer from '@/components/Footer'
import { useState } from 'react'
import { motion } from 'framer-motion'

interface Product {
  _id: string
  name: string
  price: number
  category: string
  roastLevel: string
  stock: number
}

const MOCK_ADMIN_PRODUCTS: Product[] = [
  {
    _id: '1',
    name: 'Ethiopian Yirgacheffe',
    price: 14.99,
    category: 'Arabica',
    roastLevel: 'Light',
    stock: 45,
  },
  {
    _id: '2',
    name: 'Colombian Supremo',
    price: 12.99,
    category: 'Arabica',
    roastLevel: 'Medium',
    stock: 32,
  },
]

export default function AdminDashboard() {
  const [products, setProducts] = useState<Product[]>(MOCK_ADMIN_PRODUCTS)
  const [showAddForm, setShowAddForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: 'Arabica',
    roastLevel: 'Medium',
    stock: '',
  })

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault()
    const newProduct: Product = {
      _id: Math.random().toString(),
      name: formData.name,
      price: parseFloat(formData.price),
      category: formData.category,
      roastLevel: formData.roastLevel,
      stock: parseInt(formData.stock),
    }
    setProducts([...products, newProduct])
    setFormData({ name: '', price: '', category: 'Arabica', roastLevel: 'Medium', stock: '' })
    setShowAddForm(false)
  }

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter((p) => p._id !== id))
  }

  return (
    <>
      <main className="min-h-screen bg-cream">
        <section className="bg-gradient-to-r from-coffee-700 to-coffee-900 text-cream py-8">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-serif font-bold">Admin Dashboard</h1>
            <p className="text-cream/80">Manage products and orders</p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Stats */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {[
              { label: 'Total Products', value: products.length },
              { label: 'Total Stock', value: products.reduce((sum, p) => sum + p.stock, 0) },
              { label: 'Active Orders', value: 12 },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-coffee-600 mb-2">{stat.label}</p>
                <p className="text-4xl font-bold text-coffee-900">{stat.value}</p>
              </div>
            ))}
          </motion.div>

          {/* Products Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg p-8"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-coffee-900">Products</h2>
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="btn-primary"
              >
                {showAddForm ? 'Cancel' : '+ Add Product'}
              </button>
            </div>

            {/* Add Product Form */}
            {showAddForm && (
              <motion.form
                onSubmit={handleAddProduct}
                className="bg-coffee-50 rounded-lg p-6 mb-6 grid md:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <input
                  type="text"
                  placeholder="Product Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="border-2 border-coffee-200 rounded-lg px-4 py-2"
                />
                <input
                  type="number"
                  placeholder="Price"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  step="0.01"
                  required
                  className="border-2 border-coffee-200 rounded-lg px-4 py-2"
                />
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="border-2 border-coffee-200 rounded-lg px-4 py-2"
                >
                  <option value="Arabica">Arabica</option>
                  <option value="Robusta">Robusta</option>
                  <option value="Blend">Blend</option>
                </select>
                <select
                  value={formData.roastLevel}
                  onChange={(e) => setFormData({ ...formData, roastLevel: e.target.value })}
                  className="border-2 border-coffee-200 rounded-lg px-4 py-2"
                >
                  <option value="Light">Light</option>
                  <option value="Medium">Medium</option>
                  <option value="Dark">Dark</option>
                </select>
                <input
                  type="number"
                  placeholder="Stock"
                  value={formData.stock}
                  onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                  required
                  className="border-2 border-coffee-200 rounded-lg px-4 py-2"
                />
                <button type="submit" className="btn-primary">
                  Add Product
                </button>
              </motion.form>
            )}

            {/* Products Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-coffee-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-coffee-900 font-semibold">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-coffee-900 font-semibold">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-coffee-900 font-semibold">
                      Roast
                    </th>
                    <th className="px-6 py-3 text-left text-coffee-900 font-semibold">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-coffee-900 font-semibold">
                      Stock
                    </th>
                    <th className="px-6 py-3 text-left text-coffee-900 font-semibold">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-coffee-200">
                  {products.map((product) => (
                    <motion.tr
                      key={product._id}
                      className="hover:bg-coffee-50 transition"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <td className="px-6 py-4 text-coffee-900 font-medium">
                        {product.name}
                      </td>
                      <td className="px-6 py-4 text-coffee-700">{product.category}</td>
                      <td className="px-6 py-4 text-coffee-700">{product.roastLevel}</td>
                      <td className="px-6 py-4 text-coffee-900 font-semibold">
                        ₹{product.price}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            product.stock > 20
                              ? 'bg-green-100 text-green-700'
                              : product.stock > 5
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-red-100 text-red-700'
                          }`}
                        >
                          {product.stock}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleDeleteProduct(product._id)}
                          className="text-red-600 hover:text-red-800 font-semibold"
                        >
                          Delete
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
