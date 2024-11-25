import React from 'react'

export const Contact = () => {
  return (
    <div className='max-w-[1280px] mx-auto sm:py-20 p-5'>
        <div className='text-center'>
            <p className='text-4xl font-bold leading-tight primary-color'>Contact Me</p>
        </div>
        <div className='max-w-[800px] mx-auto'>
            <div className='mt-6 bg-gray-700 rounded-xl'>
                <div className='p-10'>
                    <form action="#" method='POST'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5'>
                            <div>
                                <div className='mt-2.5 relative'>
                                    <input type="text" placeholder='Your Name' className='bg-gray-700 w-full
                                     px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-400 rounded-md
                                      focus:outline-none focus:border-pink-600'/>
                                </div>
                            </div>
                            <div>
                                <div className='mt-2.5 relative'>
                                    <input type="text" placeholder='Your Email' className='bg-gray-700 w-full
                                     px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-400 rounded-md
                                      focus:outline-none focus:border-pink-600'/>
                                </div>
                            </div>
                            <div className='sm:col-span-2'>
                                <div className='mt-2.5 '>
                                    <textarea  placeholder='Your Message' className='bg-gray-700 w-full
                                     px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-400 rounded-md
                                      focus:outline-none focus:border-pink-600 ' rows="4">
                                    </textarea>
                                </div>
                            </div>
                            <div className='sm:col-span-2'>
                                <button type='submit' className='text-xl w-full p-4 font-semibold text-white bg-primary-color rounded-md'> 
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
