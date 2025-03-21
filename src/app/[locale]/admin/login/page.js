'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { EyeIcon, EyeSlashIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [rememberMe, setRememberMe] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        try {
            const result = await signIn('credentials', {
                redirect: false,
                username,
                password,
            })
            console.log('result', result)
            if (result?.error) {
                setError('Invalid username or password')
            } else {
                router.push('/admin')
            }
        } catch (error) {
            setError('Authentication failed')
        }
    }

    return (
        <div className='flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 p-4'>
            <div className='w-full max-w-md overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl transition-all duration-300 hover:shadow-2xl'>
                <div className='bg-primary-600 p-6 text-center'>
                    <div className='mx-auto mb-4 h-20 w-60 flex items-center justify-center bg-gray-800 rounded-2xl'>
                        <Image src={'/large_logo.png'} alt='logo' width={200} height={40} />
                    </div>
                    <h1 className='text-2xl font-bold text-white'>Admin Portal</h1>
                </div>

                <div className='p-8'>
                    {error && (
                        <div className='mb-6 rounded-lg bg-red-50 p-4 text-sm text-red-700 dark:bg-red-900/30 dark:text-red-400 animate-appear'>
                            <div className='flex items-center'>
                                <svg
                                    className='mr-2 h-5 w-5'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                                {error}
                            </div>
                        </div>
                    )}

                    <form className='space-y-6' onSubmit={handleSubmit}>
                        <div className='space-y-2'>
                            <label
                                htmlFor='username'
                                className='text-sm font-medium text-gray-700 dark:text-gray-300'
                            >
                                Username
                            </label>
                            <div className='group relative'>
                                <input
                                    id='username'
                                    name='username'
                                    type='text'
                                    required
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className='w-full rounded-lg border border-gray-300 px-4 py-3 outline-none ring-primary-500 transition-all focus:border-primary-500 focus:ring-2 focus:ring-opacity-30 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                                    placeholder='Enter your username'
                                />
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <label
                                htmlFor='password'
                                className='text-sm font-medium text-gray-700 dark:text-gray-300'
                            >
                                Password
                            </label>
                            <div className='group relative'>
                                <input
                                    id='password'
                                    name='password'
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='w-full rounded-lg border border-gray-300 px-4 py-3 outline-none ring-primary-500 transition-all focus:border-primary-500 focus:ring-2 focus:ring-opacity-30 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                                    placeholder='Enter your password'
                                />
                                <button
                                    type='button'
                                    className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showPassword ? (
                                        <EyeSlashIcon className='h-5 w-5' />
                                    ) : (
                                        <EyeIcon className='h-5 w-5' />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <input
                                    id='remember-me'
                                    name='remember-me'
                                    type='checkbox'
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className='h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700'
                                />
                                <label
                                    htmlFor='remember-me'
                                    className='ml-2 block text-sm text-gray-700 dark:text-gray-300'
                                >
                                    Remember me
                                </label>
                            </div>
                        </div>

                        <div>
                            <button
                                type='submit'
                                disabled={isLoading}
                                className='w-full rounded-lg bg-primary-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-70'
                            >
                                {isLoading ? (
                                    <div className='flex items-center justify-center'>
                                        <ArrowPathIcon className='mr-2 h-4 w-4 animate-spin' />
                                        Signing in...
                                    </div>
                                ) : (
                                    'Sign in'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
