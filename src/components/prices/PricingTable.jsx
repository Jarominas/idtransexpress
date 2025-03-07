import React from 'react'
import { tablePricingHeaders } from './tableData'

const PricingTable = ({ tableData, language }) => {
    const headers = tablePricingHeaders[language]

    if (tableData.customFormat) {
        return (
            <div className='bg-white rounded-xl shadow-lg overflow-hidden mb-12 '>
                <div className='overflow-x-auto '>
                    <table className='w-full'>
                        <thead>
                            <tr className='bg-slate-800 text-white'>
                                <th className='py-4 px-6 text-left font-medium'>
                                    {headers.service}
                                </th>
                                <th className='py-4 px-6 text-left font-medium'>
                                    {headers.priceNoVAT}
                                </th>
                                <th className='py-4 px-6 text-left font-medium'>
                                    {headers.priceWithVAT}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.rows.map((row, index) => (
                                <tr
                                    key={index}
                                    className={`${
                                        index < tableData.rows.length - 1
                                            ? 'border-b border-slate-200'
                                            : ''
                                    } hover:bg-slate-50 transition-colors`}
                                >
                                    <td className='py-4 px-6'>
                                        <span className='font-medium'>{row.item}</span>
                                    </td>
                                    <td className='py-4 px-6 font-medium'>{row.priceNoVAT}</td>
                                    <td className='py-4 px-6 font-medium'>{row.priceWithVAT}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    // Default table format for waste/container dimensions
    return (
        <div className='bg-white rounded-xl shadow-lg overflow-hidden mb-12'>
            {tableData.subtitle && (
                <div className='bg-slate-100 px-6 py-3 text-center font-medium text-slate-700'>
                    {tableData.subtitle}
                </div>
            )}
            <div className='overflow-x-auto'>
                <table className='w-full'>
                    <thead>
                        <tr className='bg-slate-800 text-white'>
                            <th className='py-4 px-6 text-left font-medium'>{headers.size}</th>
                            <th className='py-4 px-6 text-left font-medium'>
                                {headers.priceNoVAT}
                            </th>
                            <th className='py-4 px-6 text-left font-medium'>
                                {headers.priceWithVAT}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.rows.map((row, index) => (
                            <tr
                                key={index}
                                className={`${
                                    index < tableData.rows.length - 1
                                        ? 'border-b border-slate-200'
                                        : ''
                                } hover:bg-slate-50 transition-colors`}
                            >
                                <td className='py-4 px-6'>
                                    {row.size && (
                                        <>
                                            <span className='font-medium'>
                                                {row.size.replace('³', '')}
                                            </span>
                                            <sup>3</sup>
                                        </>
                                    )}
                                    {row.notes && (
                                        <span className='text-slate-500 ml-2'>{row.notes}</span>
                                    )}
                                </td>
                                <td className='py-4 px-6 font-medium'>{row.priceNoVAT}</td>
                                <td className='py-4 px-6 font-medium'>{row.priceWithVAT}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PricingTable
