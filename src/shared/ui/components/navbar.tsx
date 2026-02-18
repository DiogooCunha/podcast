import React from 'react'
import { Button } from '@/shared/ui/components/button'

function Navbar() {
    return (
        <div>
            <div className="bg-stone-900 mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center">
                        <div className="flex shrink-0 items-center gap-3">
                            <img
                                alt="Logo Aural"
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                className="h-8 w-auto"
                            />
                            <h1 className='font-bold text-3xl'>
                                Aural
                            </h1>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 gap-4 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <Button
                            variant='outline'
                            size='lg'
                            className='text-base rounded-full px-4 py-4 font-semibold cursor-pointer'
                        >
                            Sign up
                        </Button>
                        <Button
                            size='lg'
                            className='text-base rounded-full px-4 py-4 font-semibold hover:bg-amber-500 text-black cursor-pointer'
                        >
                            Log in
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Navbar }