"use client"

import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function OurJourneyPage() {
    const journeySteps = [
        {
            year: "1990",
            title: "The Beginning",
            description: "Neil Bakery began its journey in 1990 as a small bakery in Egoda Uyana, Sri Lanka, founded with a passion for freshly baked bread and quality pastries. With fewer than five team members, we focused on serving our local community with care, consistency, and homemade taste. What started as a small business quickly became a trusted neighborhood bakery, built on strong relationships and a commitment to quality that set us apart from the very beginning.",
            image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072"
        },
        {
            year: "2005",
            title: "Growing with You",
            description: "As our customers grew, so did Neil Bakery. Founded by Mr. Neil, the business expanded its product range to include delicious cakes, refreshing drinks, and a wider variety of baked goods. With growing demand, we proudly opened three main outlets in Koralawella and Moratuwa, Sri Lanka, reaching more families and celebrations every day. Guided by our brand promise “Crafting happiness in every bite” we continue to grow alongside our customers, turning everyday moments into sweet memories.",
            image: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=2070"
        },
        {
            year: "2025",
            title: "Today & Beyond",
            description: "Today, Neil Bakery is powered by a dedicated team of 30+ employees, producing over 1,000 bakery items daily while maintaining the quality our customers love. With 35+ years of experience, we are proud of the trust we’ve earned and the positive customer feedback that drives us forward. As we look to the future, our focus remains on innovation, consistency, and delivering exceptional bakery products that bring happiness today and for generations to come.",
            image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2070"
        }
    ]

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-[#fbfbfc]">
                {/* Hero Header - Same as Products Page */}
                <div className="relative h-[40vh] min-h-[400px] overflow-hidden pt-20">
                    {/* Background Image with Overlay */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/neli_banner.png')" }}
                    >
                        <div className="absolute inset-0 bg-black/50" />
                    </div>

                    {/* Content Container */}
                    <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto w-full text-center space-y-6">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                <span>🍞</span>
                                <span>Fresh Daily Since 1990</span>
                            </div>

                            {/* Title Section */}
                            <div className="space-y-2">
                                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-none">
                                    Our Journey
                                </h1>
                                <p className="text-lg sm:text-xl text-white/90 font-light max-w-2xl mx-auto">
                                    35 years of baking excellence and serving our community
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Journey Content - Alternating Layout */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
                    <div className="space-y-24 sm:space-y-32">
                        {journeySteps.map((step, index) => (
                            <div
                                key={index}
                                className={`flex flex-col ${index % 2 === 0
                                        ? 'lg:flex-row'
                                        : 'lg:flex-row-reverse'
                                    } gap-8 sm:gap-12 lg:gap-16 items-center`}
                            >
                                {/* Image */}
                                <div className="w-full lg:w-1/2">
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            fill
                                            className="object-cover transition-transform duration-700 hover:scale-105"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                        {/* Year Badge
                                        <div className="absolute top-6 left-6 bg-[#e98d1a] text-white px-6 py-3 rounded-full font-bold text-2xl shadow-lg">
                                            {step.year}
                                        </div> */}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="w-full lg:w-1/2 space-y-6">
                                    <div className="space-y-4">
                                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
                                            {step.title}
                                        </h2>
                                        <div className="h-1 w-20 bg-[#e98d1a] rounded-full"></div>
                                    </div>
                                    <p className="text-lg sm:text-xl text-gray-600 leading-relaxed text-[justify]">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-12 mb-20 sm:mt-8 md:mt-3 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-linear-to-r from-gray-50 to-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center border border-gray-100 shadow-lg">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                                Visit Us Today
                            </h3>

                            <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-xl mx-auto leading-relaxed">
                                Experience the quality and taste that has kept us going for over three decades.
                            </p>

                            <Link
                                href="/#contact"
                                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#e98d1a] text-white font-semibold rounded-full hover:shadow-xl active:shadow-xl transition-all duration-300 hover:scale-105 active:scale-105 text-sm sm:text-base"
                            >
                                <span>Get in Touch</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
