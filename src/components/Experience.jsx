import {WORK_HISTORY} from "../data.js";

const Experience = () => {
    return (
        <section id="experience" className="py-16 md:py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Experience & Journey</h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-500 text-sm">3 years of professional growth in web development.</p>
                </div>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
                    {WORK_HISTORY.map((job, index) => (
                        <div key={job.id} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
                            <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-white ${job.color} shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-white`}>
                                <i className={`fas ${job.icon}`}></i>
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 sm:p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
                                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                                    <span className="font-bold text-gray-900 text-lg">{job.role}</span>
                                    <time className="text-sm text-primary-600 font-semibold mt-1 sm:mt-0">{job.date}</time>
                                </div>
                                <p className="font-semibold text-gray-500 mb-3 text-sm">{job.company}</p>
                                <ul className="text-gray-600 text-sm list-disc list-inside space-y-2">
                                    {job.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;