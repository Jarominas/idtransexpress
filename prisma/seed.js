import { PrismaClient, WasteType, SizeType } from '@prisma/client'

const prisma = new PrismaClient()

const VAT_RATE = 0.22

// Function to convert price strings to decimal numbers
function priceToDecimal(priceString) {
    return parseFloat(priceString.replace('€', '').replace(',', '.'))
}

async function main() {
    // Clear existing price data
    await prisma.price.deleteMany({})

    // SORTED_WASTE prices
    await prisma.price.createMany({
        data: [
            {
                vatRate: VAT_RATE,
                wasteType: WasteType.SORTED_WASTE,
                sizeType: SizeType.SIZE_10,
                amount: priceToDecimal('250€'),
            },
            {
                vatRate: VAT_RATE,
                wasteType: WasteType.SORTED_WASTE,
                sizeType: SizeType.SIZE_12,
                amount: priceToDecimal('270€'),
            },
            {
                vatRate: VAT_RATE,
                wasteType: WasteType.SORTED_WASTE,
                sizeType: SizeType.SIZE_15,
                amount: priceToDecimal('300€'),
            },
        ],
    })

    // BRICKS_CERAMIC prices
    await prisma.price.createMany({
        data: [
            {
                vatRate: VAT_RATE,
                wasteType: WasteType.BRICKS_CERAMIC,
                sizeType: SizeType.SIZE_10,
                amount: priceToDecimal('350€'),
            },
        ],
    })

    // MIXED_WASTE prices
    await prisma.price.createMany({
        data: [
            {
                vatRate: VAT_RATE,
                wasteType: WasteType.MIXED_WASTE,
                sizeType: SizeType.TRANSPORT_FEE,
                amount: priceToDecimal('180€'),
            },
        ],
    })

    // BULKY_WASTE prices
    await prisma.price.createMany({
        data: [
            {
                vatRate: VAT_RATE,
                wasteType: WasteType.BULKY_WASTE,
                sizeType: SizeType.SIZE_10,
                amount: priceToDecimal('320€'),
            },
            {
                vatRate: VAT_RATE,
                wasteType: WasteType.BULKY_WASTE,
                sizeType: SizeType.SIZE_12,
                amount: priceToDecimal('360€'),
            },
            {
                vatRate: VAT_RATE,
                wasteType: WasteType.BULKY_WASTE,
                sizeType: SizeType.SIZE_15,
                amount: priceToDecimal('410€'),
            },
            {
                vatRate: VAT_RATE,
                wasteType: WasteType.BULKY_WASTE,
                sizeType: SizeType.SIZE_20,
                amount: priceToDecimal('510€'),
            },
            {
                vatRate: VAT_RATE,
                wasteType: WasteType.BULKY_WASTE,
                sizeType: SizeType.SIZE_30,
                amount: priceToDecimal('640€'),
            },
        ],
    })

    // GENERAL prices
    await prisma.price.createMany({
        data: [
            {
                vatRate: VAT_RATE,
                wasteType: WasteType.GENERAL,
                sizeType: SizeType.OUTSIDE_CITY_KM,
                amount: priceToDecimal('1,45€'),
            },
            {
                vatRate: VAT_RATE,
                wasteType: WasteType.GENERAL,
                sizeType: SizeType.CITY_HOUR,
                amount: priceToDecimal('40€'),
            },
            {
                vatRate: VAT_RATE,
                wasteType: WasteType.GENERAL,
                sizeType: SizeType.CONTAINER_RENT_SMALL,
                amount: priceToDecimal('3,5€'),
            },
            {
                vatRate: VAT_RATE,
                wasteType: WasteType.GENERAL,
                sizeType: SizeType.CONTAINER_RENT_MEDIUM,
                amount: priceToDecimal('5€'),
            },
            {
                vatRate: VAT_RATE,
                wasteType: WasteType.GENERAL,
                sizeType: SizeType.CONTAINER_RENT_LARGE,
                amount: priceToDecimal('6€'),
            },
        ],
    })

    console.log('Seed data inserted successfully')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
