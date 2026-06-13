const SOCIALS = [
    {
        icon: "github",
        link: "https://github.com/shresthaanjali",
    },
    {
        icon: "linkedin-in",
        link: "https://www.linkedin.com/in/anjalishrestha/",
    },
];

const Contact = () => {
    return (
        <section id="contact" className="py-16 md:py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="bg-gray-50 rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12">
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                    <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                        Open to freelance and full-time opportunities. Let's build something great together
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 text-left max-w-2xl mx-auto">
                        <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                            <div className="bg-primary-100 text-primary-600 p-3 rounded-full">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Email</p>
                                <a href="mailto:anjalishrestha172@gmail.com" className="text-gray-900 font-bold hover:text-primary-600 transition">anjalishrestha172@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                            <div className="bg-primary-100 text-primary-600 p-3 rounded-full">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Location</p>
                                <p className="text-gray-900 font-bold">Kathmandu, Nepal</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center gap-4">
                        {SOCIALS.map((social) => (
                            <a
                                key={social.icon}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-primary-600 hover:text-white transition transform hover:-translate-y-1"
                            >
                                <i className={`fab fa-${social.icon} text-xl`}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;