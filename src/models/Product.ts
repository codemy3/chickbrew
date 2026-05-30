import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['Arabica', 'Robusta', 'Blend'],
      required: true,
    },
    roastLevel: {
      type: String,
      enum: ['Light', 'Medium', 'Dark'],
      required: true,
    },
    origin: {
      type: String,
      required: true,
    },
    tasteNotes: [String],
    caffeine: {
      type: Number,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)
