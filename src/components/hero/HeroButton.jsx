import { useTranslations } from 'next-intl'

const HeroButton = () => {
    const t = useTranslations('hero')
    return (
        <div className='rounded-md shadow'>
            <a
                href='#contact'
                className={`
                    w-full flex items-center justify-center
                    px-8 py-3 border border-transparent
                    text-base font-medium rounded-md
                    text-white bg-primary-500 hover:bg-primary-600
                    md:py-4 md:text-lg md:px-10
                `}
            >
                {t('button')}
            </a>
        </div>
    )
}

export default HeroButton
