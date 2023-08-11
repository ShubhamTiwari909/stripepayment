import React from 'react'

const Dashboard = () => {
    return (
        <div data-theme="synthwave">
            <section className="py-12 bg-gray-50 sm:pt-16">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="text-center">
                        <p
                            className="max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
                            AI-Powered Customer Service Chatbot
                        </p>
                        <h1 className="max-w-2xl mx-auto px-6 text-lg text-gray-600 font-inter">
                            Our AI-powered customer service chatbot is an innovative tool that can assist customers 24/7 with their
                            inquiries, providing fast and accurate responses.
                        </h1>
                        
                    </div>
                </div>
                <div className="bg-white">
                    <div className="relative mx-auto mt-4 md:mt-8">
                        <div className="lg:max-w-4xl lg:mx-auto">
                            <img className="px-4 md:mpx-8" src="https://images.unsplash.com/photo-1628277613967-6abca504d0ac" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Dashboard