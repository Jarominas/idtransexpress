'use client'
import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Admin = () => {
    const { data: session, status } = useSession()
    const router = useRouter()

    const [prices, setPrices] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const [updating, setUpdating] = React.useState(false)
    const [message, setMessage] = React.useState('')
    const [error, setError] = React.useState('')

    React.useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/admin/login')
            return
        }
        const fetchPrices = async () => {
            try {
                const response = await fetch('/api/prices')
                if (!response.ok) throw new Error('Failed to fetch prices')
                const data = await response.json()
                setPrices(data)
            } catch (err) {
                setError('Error loading prices: ' + err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchPrices()
    }, [status, router])

    const handleChange = (e) => {
        const { name, value } = e.target
        setPrices((prev) => ({ ...prev, [name]: parseFloat(value) }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setUpdating(true)
        setMessage('')
        setError('')

        try {
            const response = await fetch('/api/prices', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(prices),
            })

            if (!response.ok) throw new Error('Failed to update prices')

            setMessage('Prices updated successfully!')
            // Refresh data
            const updatedPrices = await response.json()
            setPrices(updatedPrices)
        } catch (err) {
            setError('Error updating prices: ' + err.message)
        } finally {
            setUpdating(false)
        }
    }

    if (!session) {
        return null
    }

    if (loading) return <div className='text-center py-10'>Loading prices...</div>
    if (!prices) return <div className='text-center py-10'>No prices found.</div>

    return (
        <div className='container mx-auto px-4 py-8'>
            <h1 className='text-2xl font-bold mb-6'>Update Prices</h1>
            <form onSubmit={handleSubmit}>
                <div className='bg-white shadow-md rounded-lg overflow-hidden'>
                    <table className='min-w-full divide-y divide-gray-200'>
                        <thead className='bg-gray-50'>
                            <tr>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                    Description
                                </th>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                    Value
                                </th>
                            </tr>
                        </thead>
                        <tbody className='bg-white divide-y divide-gray-200'>
                            {/* Tax Rate */}
                            <tr className='bg-gray-100'>
                                <td className='px-6 py-4 whitespace-nowrap font-medium'>
                                    VAT Rate
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <input
                                        type='number'
                                        name='vat_rate'
                                        value={prices.vat_rate}
                                        onChange={handleChange}
                                        step='0.01'
                                        className='border border-gray-300 rounded px-3 py-1 w-32'
                                    />
                                </td>
                            </tr>

                            {/* Sorted Waste Section */}
                            <tr>
                                <td colSpan={2} className='px-6 py-3 bg-blue-50 font-semibold'>
                                    Soorteeritud ehituspraht (pinnas, betoon, asfalt)
                                </td>
                            </tr>
                            <tr>
                                <td className='px-6 py-4 whitespace-nowrap'>Size 10</td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <input
                                        type='number'
                                        name='sortedWaste_size_10'
                                        value={prices.sortedWaste_size_10}
                                        onChange={handleChange}
                                        step='0.01'
                                        className='border border-gray-300 rounded px-3 py-1 w-32'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className='px-6 py-4 whitespace-nowrap'>Size 12</td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <input
                                        type='number'
                                        name='sortedWaste_size_12'
                                        value={prices.sortedWaste_size_12}
                                        onChange={handleChange}
                                        step='0.01'
                                        className='border border-gray-300 rounded px-3 py-1 w-32'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className='px-6 py-4 whitespace-nowrap'>Size 15</td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <input
                                        type='number'
                                        name='sortedWaste_size_15'
                                        value={prices.sortedWaste_size_15}
                                        onChange={handleChange}
                                        step='0.01'
                                        className='border border-gray-300 rounded px-3 py-1 w-32'
                                    />
                                </td>
                            </tr>

                            {/* Bricks & Ceramic Section */}
                            <tr>
                                <td colSpan={2} className='px-6 py-3 bg-blue-50 font-semibold'>
                                    Tellisid, kivid, keraamika (kuni 10т)
                                </td>
                            </tr>
                            <tr>
                                <td className='px-6 py-4 whitespace-nowrap'>Size 10</td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <input
                                        type='number'
                                        name='bricksCeramic_size_10'
                                        value={prices.bricksCeramic_size_10}
                                        onChange={handleChange}
                                        step='0.01'
                                        className='border border-gray-300 rounded px-3 py-1 w-32'
                                    />
                                </td>
                            </tr>

                            {/* Mixed Waste Section */}
                            <tr>
                                <td colSpan={2} className='px-6 py-3 bg-blue-50 font-semibold'>
                                    Segaehituspraht
                                </td>
                            </tr>
                            <tr>
                                <td className='px-6 py-4 whitespace-nowrap'>Transport Fee</td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <input
                                        type='number'
                                        name='mixedWaste_transport_fee'
                                        value={prices.mixedWaste_transport_fee}
                                        onChange={handleChange}
                                        step='0.01'
                                        className='border border-gray-300 rounded px-3 py-1 w-32'
                                    />
                                </td>
                            </tr>

                            {/* Bulky Waste Section */}
                            <tr>
                                <td colSpan={2} className='px-6 py-3 bg-blue-50 font-semibold'>
                                    Suurjäätmed
                                </td>
                            </tr>
                            <tr>
                                <td className='px-6 py-4 whitespace-nowrap'>Size 10</td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <input
                                        type='number'
                                        name='bulkyWaste_size_10'
                                        value={prices.bulkyWaste_size_10}
                                        onChange={handleChange}
                                        step='0.01'
                                        className='border border-gray-300 rounded px-3 py-1 w-32'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className='px-6 py-4 whitespace-nowrap'>Size 12</td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <input
                                        type='number'
                                        name='bulkyWaste_size_12'
                                        value={prices.bulkyWaste_size_12}
                                        onChange={handleChange}
                                        step='0.01'
                                        className='border border-gray-300 rounded px-3 py-1 w-32'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className='px-6 py-4 whitespace-nowrap'>Size 15</td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <input
                                        type='number'
                                        name='bulkyWaste_size_15'
                                        value={prices.bulkyWaste_size_15}
                                        onChange={handleChange}
                                        step='0.01'
                                        className='border border-gray-300 rounded px-3 py-1 w-32'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className='px-6 py-4 whitespace-nowrap'>Size 20</td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <input
                                        type='number'
                                        name='bulkyWaste_size_20'
                                        value={prices.bulkyWaste_size_20}
                                        onChange={handleChange}
                                        step='0.01'
                                        className='border border-gray-300 rounded px-3 py-1 w-32'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className='px-6 py-4 whitespace-nowrap'>Size 30</td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <input
                                        type='number'
                                        name='bulkyWaste_size_30'
                                        value={prices.bulkyWaste_size_30}
                                        onChange={handleChange}
                                        step='0.01'
                                        className='border border-gray-300 rounded px-3 py-1 w-32'
                                    />
                                </td>
                            </tr>

                            {/* General Prices Section */}
                            <tr>
                                <td colSpan={2} className='px-6 py-3 bg-blue-50 font-semibold'>
                                    Üldhinnad
                                </td>
                            </tr>
                            <tr>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    Outside City (per km)
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <input
                                        type='number'
                                        name='general_outside_city_km'
                                        value={prices.general_outside_city_km}
                                        onChange={handleChange}
                                        step='0.01'
                                        className='border border-gray-300 rounded px-3 py-1 w-32'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className='px-6 py-4 whitespace-nowrap'>City (per hour)</td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <input
                                        type='number'
                                        name='general_city_hour'
                                        value={prices.general_city_hour}
                                        onChange={handleChange}
                                        step='0.01'
                                        className='border border-gray-300 rounded px-3 py-1 w-32'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    Container Rent (Small)
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <input
                                        type='number'
                                        name='general_container_rent_small'
                                        value={prices.general_container_rent_small}
                                        onChange={handleChange}
                                        step='0.01'
                                        className='border border-gray-300 rounded px-3 py-1 w-32'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    Container Rent (Medium)
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <input
                                        type='number'
                                        name='general_container_rent_medium'
                                        value={prices.general_container_rent_medium}
                                        onChange={handleChange}
                                        step='0.01'
                                        className='border border-gray-300 rounded px-3 py-1 w-32'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    Container Rent (Large)
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <input
                                        type='number'
                                        name='general_container_rent_large'
                                        value={prices.general_container_rent_large}
                                        onChange={handleChange}
                                        step='0.01'
                                        className='border border-gray-300 rounded px-3 py-1 w-32'
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {error && (
                    <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 mt-4'>
                        {error}
                    </div>
                )}

                {message && (
                    <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 mt-4'>
                        {message}
                    </div>
                )}

                <div className='mt-6 flex flex-col sm:flex-row gap-3 sm:justify-en'>
                    <button
                        type='submit'
                        disabled={updating}
                        className={`px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                            updating ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                    >
                        {updating ? 'Updating...' : 'Update Prices'}
                    </button>
                    <button
                        className='px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ml-2'
                        onClick={() => router.push('/')}
                    >
                        Back to WebPage
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Admin
