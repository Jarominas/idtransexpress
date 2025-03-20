import { getTablePricingData } from '@/utils/getTablePricingData'

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

export const tablePricingData = async () => {
    const PRICES = await getTablePricingData()

    return {
        et: [
            {
                id: 'sorted-waste',
                title: 'Sorteeritud ehituspraht: pinnas, betoon, asfalt.',
                rows: [
                    {
                        size: '10m³',
                        notes: '(kuni 13,0 t)',
                        priceNoVAT: PRICES.SORTED_WASTE.SIZE_10.priceNoVAT,
                        priceWithVAT: PRICES.SORTED_WASTE.SIZE_10.priceWithVAT,
                    },
                    {
                        size: '12m³',
                        notes: '(kuni 13,0 t)',
                        priceNoVAT: PRICES.SORTED_WASTE.SIZE_12.priceNoVAT,
                        priceWithVAT: PRICES.SORTED_WASTE.SIZE_12.priceWithVAT,
                    },
                    {
                        size: '15m³',
                        notes: '(kuni 13,0 t)',
                        priceNoVAT: PRICES.SORTED_WASTE.SIZE_15.priceNoVAT,
                        priceWithVAT: PRICES.SORTED_WASTE.SIZE_15.priceWithVAT,
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
                        priceNoVAT: PRICES.BRICKS_CERAMIC.SIZE_10.priceNoVAT,
                        priceWithVAT: PRICES.BRICKS_CERAMIC.SIZE_10.priceWithVAT,
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
                        priceNoVAT: `${PRICES.MIXED_WASTE.TRANSPORT_FEE.priceNoVAT} + arve utiliseeritut prügi eest`,
                        priceWithVAT: `${PRICES.MIXED_WASTE.TRANSPORT_FEE.priceWithVAT} + arve utiliseeritut prügi eest`,
                    },
                    {
                        size: '12m³',
                        notes: '',
                        priceNoVAT: `${PRICES.MIXED_WASTE.TRANSPORT_FEE.priceNoVAT} + arve utiliseeritut prügi eest`,
                        priceWithVAT: `${PRICES.MIXED_WASTE.TRANSPORT_FEE.priceWithVAT} + arve utiliseeritut prügi eest`,
                    },
                    {
                        size: '15m³',
                        notes: '',
                        priceNoVAT: `${PRICES.MIXED_WASTE.TRANSPORT_FEE.priceNoVAT} + arve utiliseeritut prügi eest`,
                        priceWithVAT: `${PRICES.MIXED_WASTE.TRANSPORT_FEE.priceWithVAT} + arve utiliseeritut prügi eest`,
                    },
                    {
                        size: '20m³',
                        notes: '',
                        priceNoVAT: `${PRICES.MIXED_WASTE.TRANSPORT_FEE.priceNoVAT} + arve utiliseeritut prügi eest`,
                        priceWithVAT: `${PRICES.MIXED_WASTE.TRANSPORT_FEE.priceWithVAT} + arve utiliseeritut prügi eest`,
                    },
                    {
                        size: '30m³',
                        notes: '',
                        priceNoVAT: `${PRICES.MIXED_WASTE.TRANSPORT_FEE.priceNoVAT} + arve utiliseeritut prügi eest`,
                        priceWithVAT: `${PRICES.MIXED_WASTE.TRANSPORT_FEE.priceWithVAT} + arve utiliseeritut prügi eest`,
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
                        priceNoVAT: PRICES.BULKY_WASTE.SIZE_10.priceNoVAT,
                        priceWithVAT: PRICES.BULKY_WASTE.SIZE_10.priceWithVAT,
                    },
                    {
                        size: '12m³',
                        notes: '(kuni 1,8 t)',
                        priceNoVAT: PRICES.BULKY_WASTE.SIZE_12.priceNoVAT,
                        priceWithVAT: PRICES.BULKY_WASTE.SIZE_12.priceWithVAT,
                    },
                    {
                        size: '15m³',
                        notes: '(kuni 2,2 t)',
                        priceNoVAT: PRICES.BULKY_WASTE.SIZE_15.priceNoVAT,
                        priceWithVAT: PRICES.BULKY_WASTE.SIZE_15.priceWithVAT,
                    },
                    {
                        size: '20m³',
                        notes: '(kuni 3,0 t)',
                        priceNoVAT: PRICES.BULKY_WASTE.SIZE_20.priceNoVAT,
                        priceWithVAT: PRICES.BULKY_WASTE.SIZE_20.priceWithVAT,
                    },
                    {
                        size: '30m³',
                        notes: '(kuni 4,0 t)',
                        priceNoVAT: PRICES.BULKY_WASTE.SIZE_30.priceNoVAT,
                        priceWithVAT: PRICES.BULKY_WASTE.SIZE_30.priceWithVAT,
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
                        priceNoVAT: PRICES.GENERAL.OUTSIDE_CITY_KM.priceNoVAT,
                        priceWithVAT: PRICES.GENERAL.OUTSIDE_CITY_KM.priceWithVAT,
                    },
                    {
                        item: 'Linnas 1 tund',
                        priceNoVAT: PRICES.GENERAL.CITY_HOUR.priceNoVAT,
                        priceWithVAT: PRICES.GENERAL.CITY_HOUR.priceWithVAT,
                    },
                    {
                        item: 'Konteineri rent 1 päev (10m³, 12m³, 15m³)',
                        priceNoVAT: PRICES.GENERAL.CONTAINER_RENT_SMALL.priceNoVAT,
                        priceWithVAT: PRICES.GENERAL.CONTAINER_RENT_SMALL.priceWithVAT,
                    },
                    {
                        item: 'Konteineri rent 1 päev (20m³)',
                        priceNoVAT: PRICES.GENERAL.CONTAINER_RENT_MEDIUM.priceNoVAT,
                        priceWithVAT: PRICES.GENERAL.CONTAINER_RENT_MEDIUM.priceWithVAT,
                    },
                    {
                        item: 'Konteineri rent 1 päev (30m³)',
                        priceNoVAT: PRICES.GENERAL.CONTAINER_RENT_LARGE.priceNoVAT,
                        priceWithVAT: PRICES.GENERAL.CONTAINER_RENT_LARGE.priceWithVAT,
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
                        priceNoVAT: PRICES.SORTED_WASTE.SIZE_10.priceNoVAT,
                        priceWithVAT: PRICES.SORTED_WASTE.SIZE_10.priceWithVAT,
                    },
                    {
                        size: '12m³',
                        notes: '(до 13,0 т)',
                        priceNoVAT: PRICES.SORTED_WASTE.SIZE_12.priceNoVAT,
                        priceWithVAT: PRICES.SORTED_WASTE.SIZE_12.priceWithVAT,
                    },
                    {
                        size: '15m³',
                        notes: '(до 13,0 т)',
                        priceNoVAT: PRICES.SORTED_WASTE.SIZE_15.priceNoVAT,
                        priceWithVAT: PRICES.SORTED_WASTE.SIZE_15.priceWithVAT,
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
                        priceNoVAT: PRICES.BRICKS_CERAMIC.SIZE_10.priceNoVAT,
                        priceWithVAT: PRICES.BRICKS_CERAMIC.SIZE_10.priceWithVAT,
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
                        priceNoVAT: `${PRICES.MIXED_WASTE.TRANSPORT_FEE.priceNoVAT} + счет за утилизированный мусор`,
                        priceWithVAT: `${PRICES.MIXED_WASTE.TRANSPORT_FEE.priceWithVAT} + счет за утилизированный мусор`,
                    },
                    {
                        size: '12m³',
                        notes: '',
                        priceNoVAT: `${PRICES.MIXED_WASTE.TRANSPORT_FEE.priceNoVAT} + счет за утилизированный мусор`,
                        priceWithVAT: `${PRICES.MIXED_WASTE.TRANSPORT_FEE.priceWithVAT} + счет за утилизированный мусор`,
                    },
                    {
                        size: '15m³',
                        notes: '',
                        priceNoVAT: `${PRICES.MIXED_WASTE.TRANSPORT_FEE.priceNoVAT} + счет за утилизированный мусор`,
                        priceWithVAT: `${PRICES.MIXED_WASTE.TRANSPORT_FEE.priceWithVAT} + счет за утилизированный мусор`,
                    },
                    {
                        size: '20m³',
                        notes: '',
                        priceNoVAT: `${PRICES.MIXED_WASTE.TRANSPORT_FEE.priceNoVAT} + счет за утилизированный мусор`,
                        priceWithVAT: `${PRICES.MIXED_WASTE.TRANSPORT_FEE.priceWithVAT} + счет за утилизированный мусор`,
                    },
                    {
                        size: '30m³',
                        notes: '',
                        priceNoVAT: `${PRICES.MIXED_WASTE.TRANSPORT_FEE.priceNoVAT} + счет за утилизированный мусор`,
                        priceWithVAT: `${PRICES.MIXED_WASTE.TRANSPORT_FEE.priceWithVAT} + счет за утилизированный мусор`,
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
                        priceNoVAT: PRICES.BULKY_WASTE.SIZE_10.priceNoVAT,
                        priceWithVAT: PRICES.BULKY_WASTE.SIZE_10.priceWithVAT,
                    },
                    {
                        size: '12m³',
                        notes: '(до 1,8 т)',
                        priceNoVAT: PRICES.BULKY_WASTE.SIZE_12.priceNoVAT,
                        priceWithVAT: PRICES.BULKY_WASTE.SIZE_12.priceWithVAT,
                    },
                    {
                        size: '15m³',
                        notes: '(до 2,2 т)',
                        priceNoVAT: PRICES.BULKY_WASTE.SIZE_15.priceNoVAT,
                        priceWithVAT: PRICES.BULKY_WASTE.SIZE_15.priceWithVAT,
                    },
                    {
                        size: '20m³',
                        notes: '(до 3,0 т)',
                        priceNoVAT: PRICES.BULKY_WASTE.SIZE_20.priceNoVAT,
                        priceWithVAT: PRICES.BULKY_WASTE.SIZE_20.priceWithVAT,
                    },
                    {
                        size: '30m³',
                        notes: '(до 4,0 т)',
                        priceNoVAT: PRICES.BULKY_WASTE.SIZE_30.priceNoVAT,
                        priceWithVAT: PRICES.BULKY_WASTE.SIZE_30.priceWithVAT,
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
                        priceNoVAT: PRICES.GENERAL.OUTSIDE_CITY_KM.priceNoVAT,
                        priceWithVAT: PRICES.GENERAL.OUTSIDE_CITY_KM.priceWithVAT,
                    },
                    {
                        item: 'В городе 1 час',
                        priceNoVAT: PRICES.GENERAL.CITY_HOUR.priceNoVAT,
                        priceWithVAT: PRICES.GENERAL.CITY_HOUR.priceWithVAT,
                    },
                    {
                        item: 'Аренда контейнера 1 день (10m³, 12m³, 15m³)',
                        priceNoVAT: PRICES.GENERAL.CONTAINER_RENT_SMALL.priceNoVAT,
                        priceWithVAT: PRICES.GENERAL.CONTAINER_RENT_SMALL.priceWithVAT,
                    },
                    {
                        item: 'Аренда контейнера 1 день (20m³)',
                        priceNoVAT: PRICES.GENERAL.CONTAINER_RENT_MEDIUM.priceNoVAT,
                        priceWithVAT: PRICES.GENERAL.CONTAINER_RENT_MEDIUM.priceWithVAT,
                    },
                    {
                        item: 'Аренда контейнера 1 день (30m³)',
                        priceNoVAT: PRICES.GENERAL.CONTAINER_RENT_LARGE.priceNoVAT,
                        priceWithVAT: PRICES.GENERAL.CONTAINER_RENT_LARGE.priceWithVAT,
                    },
                ],
            },
        ],
    }
}
