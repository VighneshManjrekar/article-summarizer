import logo from '../assets/Logo.svg';
import {Link} from 'react-scroll'


const Navbar = () => {
    return ( 
    <>
    <div className="w-full bg-white">
       <nav className="border-gray-200 px-2 sm:px-4 py-2.5 mx-auto">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a className="flex items-center">
                    <img src={logo} className="mr-5 h-6 sm:h-9" alt="Logo" />
                    <span className="self-center text-xl md:text-3xl text-black font-semibold font-clash whitespace-nowrap">Summation</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:border-gray-700">
                    <li>
                    <Link to="home" spy={true} smooth={true}>
                    <a className="block py-2 pr-4 pl-3 text-white text-xl font-clash bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white md:text-black" aria-current="page">Home</a>
                    </Link>
                    </li>
                    <li>
                    <Link to="tldr" spy={true} smooth={true}>
                    <a className="block py-2 pr-4 pl-3 text-white text-xl font-clash bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white md:text-black" aria-current="page">TL:DR</a>
                    </Link>
                    </li>
                    <li>
                    <Link to="about" spy={true} smooth={true}>
                    <a className="block py-2 pr-4 pl-3 text-white text-xl font-clash bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white md:text-black" aria-current="page">About</a>
                    </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div> 
    </>
    );
}
 
export default Navbar;