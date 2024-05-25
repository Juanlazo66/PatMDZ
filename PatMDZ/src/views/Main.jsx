import Seccion1 from "../../public/seccion1.png";
import Seccion2 from "../../public/seccion2.png";
import Seccion3 from "../../public/seccion3.png";
import beneficio1 from "../../public/beneficio1.svg";
import beneficio2 from "../../public/beneficio2.svg";
import beneficio3 from "../../public/beneficio3.svg";
import Slider from "../component/slider/Slider.jsx";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoLinkedin } from "react-icons/io5";

const MainContent = () => {
  return (
    <main className="relative mt-20">
      <section
        className="bg-cover bg-center h-screen flex flex-col justify-center items-end"
        style={{
          backgroundImage: `url(${Seccion1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "85vh",
        }}
      >
        <div className="text-white max-w-3xl text-center sm:mr-[50px]">
          <h1 className="font-bold text-xl sm:text-5xl mb-4">
            Aseguramos que su instalación eléctrica{" "}
            <span className="text-yellow-500">
              cumpla con los más altos estándares de seguridad
            </span>
          </h1>
          <h4 className="font-semibold text-sm sm:text-lg leading-relaxed">
            Garantice la protección de personas y equipos con nuestro servicio
            de{" "}
            <span className="text-yellow-500">
              verificación de instalaciones eléctricas
            </span>
          </h4>
          <div className="mt-6">
            <a
              href="https://wa.me/2613274466"
              className="font-semibold py-2 px-4 focus:outline-none focus:shadow-outline bg-white rounded-lg shadow-md text-xl text-gray-900 hover:text-yellow-500 hover:bg-yellow-50 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              ¡Solicite una inspección ahora!
            </a>
          </div>
        </div>
      </section>

      <section id="sobreNosotros" className="py-12 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <header className="lg:w-1/2 lg:pr-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 text-yellow-500 text-center">
                Sobre Nosotros
              </h2>
              <p className="text-lg leading-relaxed text-center text-gray-900  font-medium">
                Somos una empresa formada por profesionales y técnicos con más
                de 10 años de experiencia en realización de instalaciones
                eléctricas según la reglamentación vigente de la Asociación
                Electrotécnica Argentina (AEA). Desde el año 2015, nos hemos
                especializado en la realización de auditorías y verificaciones
                prácticas de instalaciones eléctricas existentes, conforme a la
                nueva normativa exigida por la Superintendencia de Riesgos del
                Trabajo 900/15. Contamos con equipos de última generación y de
                marcas reconocidas a nivel mundial para la realización de
                nuestras tareas.
              </p>
            </header>
            <div className="lg:w-1/2 lg:pl-8 flex justify-center items-center">
              <figure className="w-full max-w-xl">
                <img
                  src={Seccion3}
                  alt="Sobre Nosotros"
                  className="w-full block mx-auto rounded-lg bg-gray-200"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-12 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <div className="lg:w-1/2 lg:pl-8 flex justify-center items-center">
              <figure className="w-full max-w-lg">
                <img
                  src={Seccion2}
                  alt="Servicios"
                  className="w-full block mx-auto rounded-lg bg-gray-200"
                />
              </figure>
            </div>
            <header className="lg:w-1/2 lg:pr-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 text-yellow-500 text-center">
                Servicios
              </h2>
              <p className="text-lg leading-relaxed text-center text-gray-900 mb-8 font-medium">
                Nuestro servicio de verificación de instalaciones eléctricas
                permite diagnosticar cualquier falencia de la misma y de esa
                manera evitar incidentes de descarga eléctricas hacia personas.
                Contamos con todos nuestros equipos calibrados por laboratorios
                certificados por INTI.
              </p>
            </header>
          </div>
        </div>
      </section>

      <section id="beneficios" className="py-12 bg-gray-200">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 text-yellow-500 text-center">
              Beneficios de trabajar con nosotros
            </h2>
          </div>
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                <img
                  src={beneficio1}
                  alt="Icono-1"
                  className="mx-auto mb-4 w-auto h-auto max-w-full max-h-32"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mb-2 text-center">
                  Protección a Personas y Equipos
                </h3>
                <p className="text-gray-800 text-center">
                  Seguridad eléctrica, previene accidentes fatales.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                <img
                  src={beneficio2}
                  alt="Icono-2"
                  className="mx-auto mb-4 w-auto h-auto max-w-full max-h-32"
                  loading="lazy"
                />
                <h3 className="text-xl text-center font-semibold mb-2">
                  Evita daños a equipos sensibles
                </h3>
                <p className="text-gray-800 text-center">
                  Evita pérdidas millonarias con la correcta puesta a tierra.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                <img
                  src={beneficio3}
                  alt="Icono-3"
                  className="mx-auto mb-4 w-auto h-auto max-w-full max-h-32"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mb-2 text-center">
                  Entorno de trabajo seguro
                </h3>
                <p className="text-gray-800 text-center">
                  PAT Mendoza garantiza ambiente laboral seguro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-12 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 text-yellow-500 text-center">
              Contactanos
            </h2>
            <div className="flex flex-col items-center justify-center">
              <p className="text-xl text-gray-900 mb-8 font-medium">
                ¡Estamos aquí para ayudarte! Contáctanos a través de:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href="mailto:info@patmza.com"
                  className="flex items-center justify-center px-6 py-3 bg-white rounded-lg shadow-md text-xl font-medium text-gray-900 hover:text-yellow-500 hover:bg-yellow-50 transition duration-300"
                >
                  <BiLogoGmail className="mr-2" />
                  info@patmza.com
                </a>
                <a
                  href="https://wa.me/2613274466"
                  className="flex items-center justify-center px-6 py-3 bg-white rounded-lg shadow-md text-xl font-medium text-gray-900 hover:text-yellow-500 hover:bg-yellow-50 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="mr-2" />
                  whatsapp
                </a>
                <a
                  href="https://www.linkedin.com/in/marcelo-lazo-4614ba2a/"
                  className="flex items-center justify-center px-6 py-3 bg-white rounded-lg shadow-md text-xl font-medium text-gray-900 hover:text-yellow-500 hover:bg-yellow-50 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoLinkedin className="mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="nuestrosClientes" className="py-12 bg-gray-200">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 text-yellow-500 text-center">
            Empresas que Confían en Nosotros
          </h2>
          <Slider />
        </div>
      </section>
    </main>
  );
};

export default MainContent;
