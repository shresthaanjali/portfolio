import { SKILLS } from "../data.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Skills = () => {
    return (
        <section id="skills" className="py-16 md:py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                        Technical Skills
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-500 text-sm">
                        Tools and technologies I work with.
                    </p>
                </div>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView={1}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        768: { slidesPerView: 3, spaceBetween: 30 },
                        1024: { slidesPerView: 4, spaceBetween: 30 },
                    }}
                    className="pb-12"
                >
                    {SKILLS.map((skill) => (
                        <SwiperSlide key={skill.name}>
                            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col items-center justify-center h-56 sm:h-64">
                                <i
                                    className={`${skill.icon} text-5xl sm:text-6xl ${skill.color} mb-4`}
                                ></i>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                                    {skill.name}
                                </h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Skills;