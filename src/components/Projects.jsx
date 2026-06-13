import App from "../App.jsx";
import {PROJECTS} from "../data.js";

const Projects = () => {
    return (
        <section id="projects" className="py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-accent-500 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-500 text-sm">A selection of my recent work.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {PROJECTS.map((project) => (
                        <article key={project.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                            <div className="p-6 flex-grow">
                                <div className="flex gap-2 mb-3 flex-wrap">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-xs font-bold text-primary-600 bg-primary-50 px-2 py-1 rounded">{t}</span>
                                    ))}
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                <p className="text-gray-600 text-sm">{project.desc}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;