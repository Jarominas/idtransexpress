import React from 'react'

import HeroButton from './HeroButton'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

const Hero = async () => {
    const t = await getTranslations('hero')
    return (
        <div className='relative min-h-[600px] md:min-h-[50vh] lg:min-h-[70vh] py-32 md:py-24 px-4'>
            <Image
                src='/truck_img_1.png'
                alt='Truck'
                fill
                className='object-cover absolute inset-0'
            />
            <div className='absolute inset-0 bg-gray-800 opacity-40'></div>
            <div className='absolute top-20 left-10 z-20'>
                <p className='text-md font-bold text-gray-400 flex flex-col sm:flex-row items-start sm:items-center'>
                    <span>+372 56 66 45 56</span>
                    <span className='hidden sm:block mx-2 h-4 border-r border-gray-300'></span>
                    <span>info@idtransexpress.eu</span>
                </p>
            </div>

            {/* Updated container with flex utilities for centering */}
            <div className='relative z-10 min-h-[600px] flex flex-col justify-center items-center'>
                <div className='max-w-7xl w-full text-center'>
                    <h1 className='text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl'>
                        <span className='block'>{t('title_1')}</span>
                        <span className='block'>{t('title_2')}</span>
                        <span className='block'>{t('title_3')}</span>
                    </h1>
                    <p className='mt-3 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
                        {t('subtitle')}
                    </p>
                    <div className='mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8'>
                        <HeroButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
