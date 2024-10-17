import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <div>
            <section className="my-10">
                <div className="grid max-w-screen-xl py-8 mx-auto lg:gap-12 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                            Explore the World, One Country at a Time.
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            Discover the history, culture. and beauty of every
                            nation. Sort, search, and filter through countries
                            to find the details you need
                        </p>
                        <Link
                            to={"/country"}
                            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                        >
                            Get started
                            <svg
                                className="w-5 h-5 ml-2 -mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                            </svg>
                        </Link>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <a href="https://earth.google.com/" target="_blank">
                            <img
                                src="/images/heroSection.png"
                                alt="World Tour"
                                style={{ userSelect: "none" }}
                                className="hover:scale-105 transform transition-transform duration-300 ease-in-out cursor-pointer rounded-full"
                            />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
