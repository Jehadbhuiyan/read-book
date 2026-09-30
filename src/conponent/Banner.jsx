
import React from 'react';
import Image from 'next/image';
import banner from '@/assets/hero_img.jpg';

const Banner = () => {
    return (
        <section className="py-16 px-4">
            <div className="container mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 items-center overflow-hidden rounded-[35px] bg-gradient-to-r from-slate-200 via-slate-100 to-slate-300 shadow-xl">

                    {/* Left Side */}
                    <div className="p-8 md:p-12 lg:p-16">

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-800">
                            Books to freshen up
                            <br />
                            <span className="text-primary">
                                your bookshelf
                            </span>
                        </h2>

                        <button className="btn btn-success mt-7 rounded-xl px-7 shadow-md hover:scale-105 transition-transform">
                            View The List
                        </button>

                    </div>

                    {/* Right Side */}
                    <div className="relative flex justify-center items-center p-8 md:p-10">

                        {/* Image Background Shape */}
                        <div className="absolute h-60 w-60 md:h-72 md:w-72 rounded-full bg-white/50"></div>

                        <Image
                            src={banner}
                            alt="Banner Image"
                            width={300}
                            height={300}
                            className="relative z-10 w-[220px] md:w-[280px] rounded-2xl object-cover shadow-2xl rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500"
                        />

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Banner;

