"use client"
import Link from 'next/link'
import useStore from '../store'

const Dashboard = () => {
    const setValue = useStore(state => state.setValue)
    return (
        <div className="min-h-screen  bg-gray-200  flex flex-wrap items-center  justify-center  ">

            <div className="flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-center items center  container   ">
                <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-white z-30">
                    <h1 className="text-gray-500 font-semibold text-xl ">Basic</h1>
                    <div className="text-center py-4 px-7">
                        <h1 className="text-gray-700 text-4xl font-black">$199.00</h1>
                        <p className="text-gray-500  mt-2">Monthely</p>

                    </div>
                    <div className="h-px bg-gray-200"></div>
                    <div className="text-center mt-3">
                        <p className="text-sm text-gray-400">
                            Includes Features like Chatbots, Video Calling, Data 500gb Cloud Data Storage
                        </p>
                    </div>
                    <div className='flex justify-center'>
                        <Link href="/payment-form" className="btn btn-primary mt-4 text-white font-semibold bg-gray-700 hover:shadow-xl duration-200 hover:bg-gray-800" onClick={() => setValue(199)}>Buy Now</Link>
                    </div>
                </div>
                <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-purple-500 transform scale-1 sm:scale-1 md:scale-105 lg:scale-105 xl:scale-105 z-40  shadow-none sm:shadow-none md:shadow-xl lg:shadow-xl xl:shadow-xl">
                    <h1 className="text-purple-200 font-semibold text-xl ">Pro</h1>
                    <div className="text-center py-4 px-7">
                        <h1 className="text-white text-4xl font-black">$399.00</h1>
                        <p className="text-white text-opacity-50 mt-2">Monthely</p>

                    </div>
                    <div className="h-px bg-purple-400"></div>
                    <div className="text-center mt-3">
                        <p className="text-sm text-white text-opacity-80">
                            Includes Features like Chatbots, Video Calling, Data 1000gb Cloud Data Storage, 2FA Authentication
                        </p>
                    </div>
                    <div className='flex justify-center'>
                        <Link href="/payment-form" className="btn btn-primary mt-4 text-white font-semibold bg-gray-700 hover:shadow-xl duration-200 hover:bg-gray-800" onClick={() => setValue(399)}>Buy Now</Link>
                    </div>

                </div>
                <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-white z-30">
                    <h1 className="text-gray-500 font-semibold text-xl ">Enterprise</h1>
                    <div className="text-center py-4 px-7">
                        <h1 className="text-gray-700 text-4xl font-black">$899.00</h1>
                        <p className="text-gray-500  mt-2">Monthely</p>

                    </div>
                    <div className="h-px bg-gray-200"></div>
                    <div className="text-center mt-3">
                        <p className="text-sm text-gray-400">
                            Includes Features like Chatbots, Video Calling, Data 1000gb Cloud Data Storage, 2FA Authentication, and team member accounts for free
                        </p>
                    </div>
                    <div className='flex justify-center'>
                        <Link href="/payment-form" className="btn btn-primary mt-4 text-white font-semibold bg-gray-700 hover:shadow-xl duration-200 hover:bg-gray-800" onClick={() => setValue(899)}>Buy Now</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard