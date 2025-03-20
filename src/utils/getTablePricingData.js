export const getTablePricingData = async () => {
    const { PrismaClient } = await import('@prisma/client')
    const prisma = new PrismaClient()

    const prices = await prisma.prices.findFirst()

    if (!prices) {
        console.error('No prices found in the database. Using default values.')
        return {
            SORTED_WASTE: {
                SIZE_10: { priceNoVAT: 250, priceWithVAT: 250 * 1.22 },
                SIZE_12: { priceNoVAT: 270, priceWithVAT: 270 * 1.22 },
                SIZE_15: { priceNoVAT: 300, priceWithVAT: 300 * 1.22 },
            },
            BRICKS_CERAMIC: {
                SIZE_10: { priceNoVAT: 350, priceWithVAT: 350 * 1.22 },
            },
            MIXED_WASTE: {
                TRANSPORT_FEE: { priceNoVAT: 180, priceWithVAT: 180 * 1.22 },
            },
            BULKY_WASTE: {
                SIZE_10: { priceNoVAT: 320, priceWithVAT: 320 * 1.22 },
                SIZE_12: { priceNoVAT: 360, priceWithVAT: 360 * 1.22 },
                SIZE_15: { priceNoVAT: 410, priceWithVAT: 410 * 1.22 },
                SIZE_20: { priceNoVAT: 510, priceWithVAT: 510 * 1.22 },
                SIZE_30: { priceNoVAT: 640, priceWithVAT: 640 * 1.22 },
            },
            GENERAL: {
                OUTSIDE_CITY_KM: { priceNoVAT: 1.45, priceWithVAT: 1.45 * 1.22 },
                CITY_HOUR: { priceNoVAT: 40, priceWithVAT: 40 * 1.22 },
                CONTAINER_RENT_SMALL: { priceNoVAT: 3.5, priceWithVAT: 3.5 * 1.22 },
                CONTAINER_RENT_MEDIUM: { priceNoVAT: 5, priceWithVAT: 5 * 1.22 },
                CONTAINER_RENT_LARGE: { priceNoVAT: 6, priceWithVAT: 6 * 1.22 },
            },
        }
    }

    const PRICES = {
        SORTED_WASTE: {
            SIZE_10: {
                priceNoVAT: prices.sortedWaste_size_10,
                priceWithVAT: prices.sortedWaste_size_10 * (1 + prices.vat_rate),
            },
            SIZE_12: {
                priceNoVAT: prices.sortedWaste_size_12,
                priceWithVAT: prices.sortedWaste_size_12 * (1 + prices.vat_rate),
            },
            SIZE_15: {
                priceNoVAT: prices.sortedWaste_size_15,
                priceWithVAT: prices.sortedWaste_size_15 * (1 + prices.vat_rate),
            },
        },
        BRICKS_CERAMIC: {
            SIZE_10: {
                priceNoVAT: prices.bricksCeramic_size_10,
                priceWithVAT: prices.bricksCeramic_size_10 * (1 + prices.vat_rate),
            },
        },
        MIXED_WASTE: {
            TRANSPORT_FEE: {
                priceNoVAT: prices.mixedWaste_transport_fee,
                priceWithVAT: prices.mixedWaste_transport_fee * (1 + prices.vat_rate),
            },
        },
        BULKY_WASTE: {
            SIZE_10: {
                priceNoVAT: prices.bulkyWaste_size_10,
                priceWithVAT: prices.bulkyWaste_size_10 * (1 + prices.vat_rate),
            },
            SIZE_12: {
                priceNoVAT: prices.bulkyWaste_size_12,
                priceWithVAT: prices.bulkyWaste_size_12 * (1 + prices.vat_rate),
            },
            SIZE_15: {
                priceNoVAT: prices.bulkyWaste_size_15,
                priceWithVAT: prices.bulkyWaste_size_15 * (1 + prices.vat_rate),
            },
            SIZE_20: {
                priceNoVAT: prices.bulkyWaste_size_20,
                priceWithVAT: prices.bulkyWaste_size_20 * (1 + prices.vat_rate),
            },
            SIZE_30: {
                priceNoVAT: prices.bulkyWaste_size_30,
                priceWithVAT: prices.bulkyWaste_size_30 * (1 + prices.vat_rate),
            },
        },
        GENERAL: {
            OUTSIDE_CITY_KM: {
                priceNoVAT: prices.general_outside_city_km,
                priceWithVAT: prices.general_outside_city_km * (1 + prices.vat_rate),
            },
            CITY_HOUR: {
                priceNoVAT: prices.general_city_hour,
                priceWithVAT: prices.general_city_hour * (1 + prices.vat_rate),
            },
            CONTAINER_RENT_SMALL: {
                priceNoVAT: prices.general_container_rent_small,
                priceWithVAT: prices.general_container_rent_small * (1 + prices.vat_rate),
            },
            CONTAINER_RENT_MEDIUM: {
                priceNoVAT: prices.general_container_rent_medium,
                priceWithVAT: prices.general_container_rent_medium * (1 + prices.vat_rate),
            },
            CONTAINER_RENT_LARGE: {
                priceNoVAT: prices.general_container_rent_large,
                priceWithVAT: prices.general_container_rent_large * (1 + prices.vat_rate),
            },
        },
    }

    await prisma.$disconnect()
    return PRICES
}
