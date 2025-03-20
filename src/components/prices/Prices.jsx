import React from 'react'
import { getTranslations, getLocale } from 'next-intl/server'
import PricingTable from './PricingTable'
import { tablePricingData } from './tableData'

const Prices = async () => {
    const locale = await getLocale()
    const t = await getTranslations('prices')

    const tables = tablePricingData[locale]

    return (
        <div id='prices' className='py-12 bg-gray-100'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center'>
                    <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
                        {t('title')}
                    </h2>
                </div>
                <div className='py-16'>
                    <div className='max-w-7xl mx-auto'>
                        {tables.map((table) => (
                            <div key={table.id}>
                                <header className='text-center mb-6'>
                                    <h3 className='text-2xl md:text-2xl font-bold text-slate-800 mb-3'>
                                        {table.title}
                                    </h3>
                                </header>
                                <PricingTable tableData={table} language={locale} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prices
