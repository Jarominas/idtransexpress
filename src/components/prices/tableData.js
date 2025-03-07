// Price constants (without VAT)
const PRICES = {
    SORTED_WASTE: {
        SIZE_10: '250€',
        SIZE_12: '270€',
        SIZE_15: '300€',
    },
    BRICKS_CERAMIC: {
        SIZE_10: '350€',
    },
    MIXED_WASTE: {
        TRANSPORT_FEE: '180€',
    },
    BULKY_WASTE: {
        SIZE_10: '320€',
        SIZE_12: '360€',
        SIZE_15: '410€',
        SIZE_20: '510€',
        SIZE_30: '640€',
    },
    GENERAL: {
        OUTSIDE_CITY_KM: '1,45€',
        CITY_HOUR: '40€',
        CONTAINER_RENT_SMALL: '3,5€',
        CONTAINER_RENT_MEDIUM: '5€',
        CONTAINER_RENT_LARGE: '6€',
    },
}

const VAT_RATE = 0.22

const addVAT = (price) => {
    if (!price) return ''

    if (price.includes('+')) {
        const [numPart, textPart] = price.split('+')
        const priceValue = parseFloat(numPart.replace('€', '').replace(',', '.'))
        const priceWithVAT = (priceValue * (1 + VAT_RATE)).toFixed(1)
        return `${priceWithVAT.replace('.', ',')}€ +${textPart}`
    }

    const priceValue = parseFloat(price.replace('€', '').replace(',', '.'))
    const priceWithVAT = (priceValue * (1 + VAT_RATE)).toFixed(1)
    return `${priceWithVAT.replace('.', ',')}€`
}

export const tablePricingHeaders = {
    et: {
        size: 'Maht',
        service: 'Teenus',
        priceNoVAT: 'KM-ta',
        priceWithVAT: 'KM-ga',
    },
    ru: {
        size: 'Объем',
        service: 'Услуга',
        priceNoVAT: 'Без НДС',
        priceWithVAT: 'С НДС',
    },
}

export const tablePricingData = {
    et: [
        {
            id: 'sorted-waste',
            title: 'Sorteeritud ehituspraht: pinnas, betoon, asfalt.',
            rows: [
                {
                    size: '10m³',
                    notes: '(kuni 13,0 t)',
                    priceNoVAT: PRICES.SORTED_WASTE.SIZE_10,
                    priceWithVAT: addVAT(PRICES.SORTED_WASTE.SIZE_10),
                },
                {
                    size: '12m³',
                    notes: '(kuni 13,0 t)',
                    priceNoVAT: PRICES.SORTED_WASTE.SIZE_12,
                    priceWithVAT: addVAT(PRICES.SORTED_WASTE.SIZE_12),
                },
                {
                    size: '15m³',
                    notes: '(kuni 13,0 t)',
                    priceNoVAT: PRICES.SORTED_WASTE.SIZE_15,
                    priceWithVAT: addVAT(PRICES.SORTED_WASTE.SIZE_15),
                },
            ],
        },
        {
            id: 'bricks-ceramic',
            title: 'Tellisid, kivid, keraamika',
            rows: [
                {
                    size: '10m³',
                    notes: '(kuni 10 t)',
                    priceNoVAT: PRICES.BRICKS_CERAMIC.SIZE_10,
                    priceWithVAT: addVAT(PRICES.BRICKS_CERAMIC.SIZE_10),
                },
                { size: '12m³', notes: '', priceNoVAT: '', priceWithVAT: '' },
                { size: '15m³', notes: '', priceNoVAT: '', priceWithVAT: '' },
            ],
        },
        {
            id: 'mineral-waste',
            title: 'Mineraalsed jäätmed: rasked segajäätmed (betoon, tellised, mört, keraamika ja jne.)',
            subtitle: 'Transport + uteliseerimine',
            rows: [],
        },
        {
            id: 'mixed-waste',
            title: 'Segaehituspraht',
            rows: [
                {
                    size: '10m³',
                    notes: '',
                    priceNoVAT: `${PRICES.MIXED_WASTE.TRANSPORT_FEE} + arve utiliseeritut prügi eest`,
                    priceWithVAT: addVAT(
                        `${PRICES.MIXED_WASTE.TRANSPORT_FEE} + arve utiliseeritut prügi eest`
                    ),
                },
                {
                    size: '12m³',
                    notes: '',
                    priceNoVAT: `${PRICES.MIXED_WASTE.TRANSPORT_FEE} + arve utiliseeritut prügi eest`,
                    priceWithVAT: addVAT(
                        `${PRICES.MIXED_WASTE.TRANSPORT_FEE} + arve utiliseeritut prügi eest`
                    ),
                },
                {
                    size: '15m³',
                    notes: '',
                    priceNoVAT: `${PRICES.MIXED_WASTE.TRANSPORT_FEE} + arve utiliseeritut prügi eest`,
                    priceWithVAT: addVAT(
                        `${PRICES.MIXED_WASTE.TRANSPORT_FEE} + arve utiliseeritut prügi eest`
                    ),
                },
                {
                    size: '20m³',
                    notes: '',
                    priceNoVAT: `${PRICES.MIXED_WASTE.TRANSPORT_FEE} + arve utiliseeritut prügi eest`,
                    priceWithVAT: addVAT(
                        `${PRICES.MIXED_WASTE.TRANSPORT_FEE} + arve utiliseeritut prügi eest`
                    ),
                },
                {
                    size: '30m³',
                    notes: '',
                    priceNoVAT: `${PRICES.MIXED_WASTE.TRANSPORT_FEE} + arve utiliseeritut prügi eest`,
                    priceWithVAT: addVAT(
                        `${PRICES.MIXED_WASTE.TRANSPORT_FEE} + arve utiliseeritut prügi eest`
                    ),
                },
            ],
        },
        {
            id: 'bulky-waste',
            title: 'Suurjäätmed',
            rows: [
                {
                    size: '10m³',
                    notes: '(kuni 1,5 t)',
                    priceNoVAT: PRICES.BULKY_WASTE.SIZE_10,
                    priceWithVAT: addVAT(PRICES.BULKY_WASTE.SIZE_10),
                },
                {
                    size: '12m³',
                    notes: '(kuni 1,8 t)',
                    priceNoVAT: PRICES.BULKY_WASTE.SIZE_12,
                    priceWithVAT: addVAT(PRICES.BULKY_WASTE.SIZE_12),
                },
                {
                    size: '15m³',
                    notes: '(kuni 2,2 t)',
                    priceNoVAT: PRICES.BULKY_WASTE.SIZE_15,
                    priceWithVAT: addVAT(PRICES.BULKY_WASTE.SIZE_15),
                },
                {
                    size: '20m³',
                    notes: '(kuni 3,0 t)',
                    priceNoVAT: PRICES.BULKY_WASTE.SIZE_20,
                    priceWithVAT: addVAT(PRICES.BULKY_WASTE.SIZE_20),
                },
                {
                    size: '30m³',
                    notes: '(kuni 4,0 t)',
                    priceNoVAT: PRICES.BULKY_WASTE.SIZE_30,
                    priceWithVAT: addVAT(PRICES.BULKY_WASTE.SIZE_30),
                },
            ],
        },
        {
            id: 'general-prices',
            title: 'Üldhinnad',
            customFormat: true,
            rows: [
                {
                    item: 'Linnas väljas 1 km',
                    priceNoVAT: PRICES.GENERAL.OUTSIDE_CITY_KM,
                    priceWithVAT: addVAT(PRICES.GENERAL.OUTSIDE_CITY_KM),
                },
                {
                    item: 'Linnas 1 tund',
                    priceNoVAT: PRICES.GENERAL.CITY_HOUR,
                    priceWithVAT: addVAT(PRICES.GENERAL.CITY_HOUR),
                },
                {
                    item: 'Konteineri rent 1 päev (10m³, 12m³, 15m³)',
                    priceNoVAT: PRICES.GENERAL.CONTAINER_RENT_SMALL,
                    priceWithVAT: addVAT(PRICES.GENERAL.CONTAINER_RENT_SMALL),
                },
                {
                    item: 'Konteineri rent 1 päev (20m³)',
                    priceNoVAT: PRICES.GENERAL.CONTAINER_RENT_MEDIUM,
                    priceWithVAT: addVAT(PRICES.GENERAL.CONTAINER_RENT_MEDIUM),
                },
                {
                    item: 'Konteineri rent 1 päev (30m³)',
                    priceNoVAT: PRICES.GENERAL.CONTAINER_RENT_LARGE,
                    priceWithVAT: addVAT(PRICES.GENERAL.CONTAINER_RENT_LARGE),
                },
            ],
        },
    ],
    ru: [
        {
            id: 'sorted-waste',
            title: 'Сортированный строительный мусор: грунт, бетон, асфальт.',
            rows: [
                {
                    size: '10m³',
                    notes: '(до 13,0 т)',
                    priceNoVAT: PRICES.SORTED_WASTE.SIZE_10,
                    priceWithVAT: addVAT(PRICES.SORTED_WASTE.SIZE_10),
                },
                {
                    size: '12m³',
                    notes: '(до 13,0 т)',
                    priceNoVAT: PRICES.SORTED_WASTE.SIZE_12,
                    priceWithVAT: addVAT(PRICES.SORTED_WASTE.SIZE_12),
                },
                {
                    size: '15m³',
                    notes: '(до 13,0 т)',
                    priceNoVAT: PRICES.SORTED_WASTE.SIZE_15,
                    priceWithVAT: addVAT(PRICES.SORTED_WASTE.SIZE_15),
                },
            ],
        },
        {
            id: 'bricks-ceramic',
            title: 'Кирпичи, камни, керамика',
            rows: [
                {
                    size: '10m³',
                    notes: '(до 10 т)',
                    priceNoVAT: PRICES.BRICKS_CERAMIC.SIZE_10,
                    priceWithVAT: addVAT(PRICES.BRICKS_CERAMIC.SIZE_10),
                },
                { size: '12m³', notes: '', priceNoVAT: '', priceWithVAT: '' },
                { size: '15m³', notes: '', priceNoVAT: '', priceWithVAT: '' },
            ],
        },
        {
            id: 'mineral-waste',
            title: 'Минеральные отходы: тяжелые смешанные отходы (бетон, кирпич, строительный раствор, керамика и т.д.)',
            subtitle: 'Транспорт + утилизация',
            rows: [],
        },
        {
            id: 'mixed-waste',
            title: 'Смешанный строительный мусор',
            rows: [
                {
                    size: '10m³',
                    notes: '',
                    priceNoVAT: `${PRICES.MIXED_WASTE.TRANSPORT_FEE} + счет за утилизированный мусор`,
                    priceWithVAT: addVAT(
                        `${PRICES.MIXED_WASTE.TRANSPORT_FEE} + счет за утилизированный мусор`
                    ),
                },
                {
                    size: '12m³',
                    notes: '',
                    priceNoVAT: `${PRICES.MIXED_WASTE.TRANSPORT_FEE} + счет за утилизированный мусор`,
                    priceWithVAT: addVAT(
                        `${PRICES.MIXED_WASTE.TRANSPORT_FEE} + счет за утилизированный мусор`
                    ),
                },
                {
                    size: '15m³',
                    notes: '',
                    priceNoVAT: `${PRICES.MIXED_WASTE.TRANSPORT_FEE} + счет за утилизированный мусор`,
                    priceWithVAT: addVAT(
                        `${PRICES.MIXED_WASTE.TRANSPORT_FEE} + счет за утилизированный мусор`
                    ),
                },
                {
                    size: '20m³',
                    notes: '',
                    priceNoVAT: `${PRICES.MIXED_WASTE.TRANSPORT_FEE} + счет за утилизированный мусор`,
                    priceWithVAT: addVAT(
                        `${PRICES.MIXED_WASTE.TRANSPORT_FEE} + счет за утилизированный мусор`
                    ),
                },
                {
                    size: '30m³',
                    notes: '',
                    priceNoVAT: `${PRICES.MIXED_WASTE.TRANSPORT_FEE} + счет за утилизированный мусор`,
                    priceWithVAT: addVAT(
                        `${PRICES.MIXED_WASTE.TRANSPORT_FEE} + счет за утилизированный мусор`
                    ),
                },
            ],
        },
        {
            id: 'bulky-waste',
            title: 'Крупногабаритный мусор',
            rows: [
                {
                    size: '10m³',
                    notes: '(до 1,5 т)',
                    priceNoVAT: PRICES.BULKY_WASTE.SIZE_10,
                    priceWithVAT: addVAT(PRICES.BULKY_WASTE.SIZE_10),
                },
                {
                    size: '12m³',
                    notes: '(до 1,8 т)',
                    priceNoVAT: PRICES.BULKY_WASTE.SIZE_12,
                    priceWithVAT: addVAT(PRICES.BULKY_WASTE.SIZE_12),
                },
                {
                    size: '15m³',
                    notes: '(до 2,2 т)',
                    priceNoVAT: PRICES.BULKY_WASTE.SIZE_15,
                    priceWithVAT: addVAT(PRICES.BULKY_WASTE.SIZE_15),
                },
                {
                    size: '20m³',
                    notes: '(до 3,0 т)',
                    priceNoVAT: PRICES.BULKY_WASTE.SIZE_20,
                    priceWithVAT: addVAT(PRICES.BULKY_WASTE.SIZE_20),
                },
                {
                    size: '30m³',
                    notes: '(до 4,0 т)',
                    priceNoVAT: PRICES.BULKY_WASTE.SIZE_30,
                    priceWithVAT: addVAT(PRICES.BULKY_WASTE.SIZE_30),
                },
            ],
        },
        {
            id: 'general-prices',
            title: 'Общие цены',
            customFormat: true,
            rows: [
                {
                    item: 'За пределами города 1 км',
                    priceNoVAT: PRICES.GENERAL.OUTSIDE_CITY_KM,
                    priceWithVAT: addVAT(PRICES.GENERAL.OUTSIDE_CITY_KM),
                },
                {
                    item: 'В городе 1 час',
                    priceNoVAT: PRICES.GENERAL.CITY_HOUR,
                    priceWithVAT: addVAT(PRICES.GENERAL.CITY_HOUR),
                },
                {
                    item: 'Аренда контейнера 1 день (10m³, 12m³, 15m³)',
                    priceNoVAT: PRICES.GENERAL.CONTAINER_RENT_SMALL,
                    priceWithVAT: addVAT(PRICES.GENERAL.CONTAINER_RENT_SMALL),
                },
                {
                    item: 'Аренда контейнера 1 день (20m³)',
                    priceNoVAT: PRICES.GENERAL.CONTAINER_RENT_MEDIUM,
                    priceWithVAT: addVAT(PRICES.GENERAL.CONTAINER_RENT_MEDIUM),
                },
                {
                    item: 'Аренда контейнера 1 день (30m³)',
                    priceNoVAT: PRICES.GENERAL.CONTAINER_RENT_LARGE,
                    priceWithVAT: addVAT(PRICES.GENERAL.CONTAINER_RENT_LARGE),
                },
            ],
        },
    ],
}
