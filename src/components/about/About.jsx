import React from 'react'
import {
    TruckIcon,
    CurrencyEuroIcon,
    ClockIcon,
    SparklesIcon,
    CalendarIcon,
} from '@heroicons/react/24/outline'
import { getTranslations } from 'next-intl/server'

const About = async () => {
    const t = await getTranslations('about')
    return (
        <div id='about' className='py-12 bg-gray-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center'>
                    <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
                        {t('title')}
                    </h2>
                </div>

                {/* Main grid container for both sections */}
                <div className='mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2'>
                    {/* First column - Mida me teeme? */}
                    <div>
                        <h3 className='text-2xl font-bold text-gray-800 mb-6'>{t('subtitle_1')}</h3>
                        <div className='space-y-4'>
                            <div className='bg-white overflow-hidden shadow rounded-lg px-6 py-5 flex items-center'>
                                <TruckIcon className='h-8 w-8 text-primary-500' />
                                <h4 className='ml-4 text-lg font-medium text-gray-900'>
                                    {t('subtitle_1_text_1')}
                                </h4>
                            </div>

                            <div className='bg-white overflow-hidden shadow rounded-lg px-6 py-5 flex items-center'>
                                <TruckIcon className='h-8 w-8 text-primary-500' />
                                <h4 className='ml-4 text-lg font-medium text-gray-900'>
                                    {t('subtitle_1_text_2')}
                                </h4>
                            </div>
                        </div>
                    </div>

                    {/* Second column - Miks valida meid? */}
                    <div>
                        <h3 className='text-2xl font-bold text-gray-800 mb-6'>{t('subtitle_2')}</h3>
                        <div className='space-y-4'>
                            <div className='bg-white overflow-hidden shadow rounded-lg p-6'>
                                <div className='flex items-center'>
                                    <CalendarIcon className='h-6 w-6 text-green-500' />
                                    <span className='ml-3 text-lg font-medium'>
                                        {t('subtitle_2_text_1')}
                                    </span>
                                </div>
                            </div>

                            <div className='bg-white overflow-hidden shadow rounded-lg p-6'>
                                <div className='flex items-center'>
                                    <TruckIcon className='h-6 w-6 text-green-500' />
                                    <span className='ml-3 text-lg font-medium'>
                                        {t('subtitle_2_text_2')}
                                    </span>
                                </div>
                            </div>
                            <div className='bg-white overflow-hidden shadow rounded-lg p-6'>
                                <div className='flex items-center'>
                                    <ClockIcon className='h-6 w-6 text-green-500' />
                                    <span className='ml-3 text-lg font-medium'>
                                        {t('subtitle_2_text_3')}
                                    </span>
                                </div>
                            </div>

                            <div className='bg-white overflow-hidden shadow rounded-lg p-6'>
                                <div className='flex items-center'>
                                    <CurrencyEuroIcon className='h-6 w-6 text-green-500' />
                                    <span className='ml-3 text-lg font-medium'>
                                        {t('subtitle_2_text_4')}
                                    </span>
                                </div>
                            </div>

                            <div className='bg-white overflow-hidden shadow rounded-lg p-6'>
                                <div className='flex items-center'>
                                    <SparklesIcon className='h-6 w-6 text-green-500' />
                                    <span className='ml-3 text-lg font-medium'>
                                        {t('subtitle_2_text_5')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
