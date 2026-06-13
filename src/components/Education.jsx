import {EDUCATION} from "../data.js";

const Education = () => {
    return (
        <section id="education" className="py-16 md:py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Education</h2>
                    <div className="w-20 h-1 bg-accent-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {EDUCATION.map((edu) => (
                        <div key={edu.id} className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-start gap-6 hover:shadow-md transition">
                            <div className={`p-4 rounded-xl shrink-0 ${edu.color.split(' ')[1]} ${edu.color.split(' ')[0]}`}>
                                <i className={`fas ${edu.icon} text-2xl`}></i>
                            </div>
                            <div>
                                <span className="text-sm text-gray-500 font-semibold block mb-1">{edu.year}</span>
                                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
                                <p className="text-gray-600 font-medium text-sm">{edu.school}</p>
                                {edu.note && <p className="text-xs text-gray-500 mt-2">{edu.note}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;