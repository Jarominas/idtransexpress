import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
    try {
        const prices = await prisma.prices.findFirst()
        return NextResponse.json(prices)
    } catch (error) {
        console.error('Failed to fetch prices:', error)
        return NextResponse.json({ error: 'Failed to fetch prices' }, { status: 500 })
    }
}

export async function PUT(request) {
    try {
        const data = await request.json()
        const id = data.id

        delete data.id

        const updatedPrices = await prisma.prices.update({
            where: { id },
            data,
        })

        return NextResponse.json(updatedPrices)
    } catch (error) {
        console.error('Failed to update prices:', error)
        return NextResponse.json({ error: 'Failed to update prices' }, { status: 500 })
    }
}
