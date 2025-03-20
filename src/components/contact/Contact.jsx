import React from 'react'
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { useTranslations } from 'next-intl'

const Contact = () => {
    const t = useTranslations('contact')
    return (
        <div id='contact' className='py-16 px-4 bg-white'>
            <div className='max-w-6xl mx-auto'>
                <h2 className='text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12'>
                    {t('title')}
                </h2>

                <div className='grid md:grid-cols-2 gap-12'>
                    <div className='bg-slate-50 rounded-xl shadow-lg p-8'>
                        <form className='space-y-6'>
                            <div>
                                <label
                                    htmlFor='name'
                                    className='block text-sm font-medium text-slate-700 mb-1'
                                >
                                    {t('name')}
                                </label>
                                <input
                                    type='text'
                                    id='name'
                                    className='w-full px-4 py-3 rounded-lg border bg-white border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all'
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor='email'
                                    className='block text-sm font-medium text-slate-700 mb-1'
                                >
                                    {t('email')}
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    className='w-full px-4 py-3 rounded-lg border bg-white border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all'
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor='message'
                                    className='block text-sm font-medium text-slate-700 mb-1'
                                >
                                    {t('message')}
                                </label>
                                <textarea
                                    id='message'
                                    rows={5}
                                    className='w-full px-4 py-3 rounded-lg border bg-white border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all'
                                ></textarea>
                            </div>

                            <button
                                type='submit'
                                className='w-full bg-primary-500 hover:bgprimaryr-600 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md'
                            >
                                {t('send')}
                            </button>
                        </form>
                    </div>

                    <div className='flex justify-center flex-col mb-8  p-6 rounded-lg'>
                        <h3 className='text-2xl font-bold text-slate-800 mb-4'>
                            I.D. Transexpress OÜ
                        </h3>
                        <div className='space-y-3 text-slate-600'>
                            <div className='flex items-start'>
                                <MapPinIcon className='h-5 w-5 text-primary-500 mr-3 mt-1 flex-shrink-0' />
                                <p>Paekaare tn 30-2 Tallinn Harjumaa 13613</p>
                            </div>
                            <div className='flex items-center'>
                                <PhoneIcon className='h-5 w-5 text-primary-500 mr-3 flex-shrink-0' />
                                <p>+372 56 66 45 56</p>
                            </div>
                            <div className='flex items-center'>
                                <EnvelopeIcon className='h-5 w-5 text-primary-500 mr-3 flex-shrink-0' />
                                <p>info@idtransexpress.eu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
