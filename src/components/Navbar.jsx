import {useState} from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed w-full top-0 z-50 glass-nav border-b border-gray-100 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#" className="font-heading font-bold text-xl md:text-2xl text-primary-600">
                            Anjali<span className="text-accent-500">Shrestha</span>.
                        </a>
                    </div>

                    <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
                        {['About', 'Experience', 'Education', 'Skills', 'Projects'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-primary-600 font-medium transition text-sm lg:text-base">
                                {item}
                            </a>
                        ))}
                        <a href="#contact" className="bg-primary-600 text-white px-4 lg:px-5 py-2 lg:py-2.5 rounded-full font-medium hover:bg-primary-700 transition shadow-md text-sm lg:text-base">
                            Contact
                        </a>
                    </nav>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-primary-600 focus:outline-none p-2">
                            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
                    <div className="px-4 pt-2 pb-4 space-y-1 text-center">
                        {['About', 'Experience', 'Education', 'Skills', 'Projects', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="block py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;