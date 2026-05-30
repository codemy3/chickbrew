import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/db'
import Product from '@/models/Product'
import type { Product as ProductType } from '@/lib/products'

export async function GET(request: NextRequest) {
  try {
    await dbConnect()

    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const roastLevel = searchParams.get('roastLevel')

    let query: any = {}

    if (category && category !== 'All') {
      query.category = category
    }

    if (roastLevel && roastLevel !== 'All') {
      query.roastLevel = roastLevel
    }

    const products = await Product.find(query)

    return NextResponse.json({
      success: true,
      data: products as any as ProductType[],
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch products',
      },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect()

    const body = await request.json()

    const product = new Product(body)
    await product.save()

    return NextResponse.json(
      {
        success: true,
        data: product as any as ProductType,
      },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create product',
      },
      { status: 500 }
    )
  }
}
