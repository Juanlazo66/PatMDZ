import { useEffect, useState } from "react";
import Logo1 from "../../public/PatMdzLogo1.png";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <header
      className={`${
        scrolling ? "border-b border-gray-900" : ""
      } fixed left-0 right-0 top-0 z-20 bg-white`}
      id="home"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center m-1">
            <img src={Logo1} alt="LOGO" className="w-[60px] sm:w-[90px]" />
            <h1 className="font-bold text-center text-[24px] sm:text-[29px] ml-1">
              PAT MZA
            </h1>
          </div>
          <div className="sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6 mr-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                  }
                ></path>
              </svg>
            </button>
          </div>
          <nav
            className={`${
              menuOpen ? "block" : "hidden"
            } sm:flex sm:items-center sm:w-auto`}
          >
            <ul className="flex flex-col sm:flex-row gap-4 sm:gap-7">
              <li>
                <a
                  href="#sobreNosotros"
                  className="font-bold text-center text-black hover:text-yellow-400 transition duration-300"
                >
                  SOBRE NOSOTROS
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="font-bold text-center text-black hover:text-yellow-400 transition duration-300"
                >
                  SERVICIOS
                </a>
              </li>
              <li>
                <a
                  href="#beneficios"
                  className="font-bold text-black hover:text-yellow-400 transition duration-300"
                >
                  BENEFICIOS
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="font-bold text-black hover:text-yellow-400 transition duration-300"
                >
                  CONTACTO
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
