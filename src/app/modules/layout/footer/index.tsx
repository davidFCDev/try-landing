"use client";

import Link from "next/link";
import Image from "next/image"; // Asumimos que usarás next/image para la imagen del logo.
import { FaWhatsapp, FaInstagram } from "react-icons/fa"; // Importamos los iconos de react-icons

const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 w-full py-10 flex flex-col gap-24 font-light tracking-wide">

      <div className="flex flex-col sm:flex-row justify-evenly items-center sm:items-start gap-10 sm:gap-0">

        <div>
          <Image
            src="/images/try-logo.png"
            alt="Logo"
            width={150}
            height={150}
          />
        </div>

        <div className="text-center sm:text-left flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-semibold uppercase">
              Ubicación
            </h3>
            <a
              className="text-xs sm:text-base hover:underline"
              href="https://goo.gl/maps/d1PUZHKSqzoqhWrd8"
              target="_blank"
              rel="noreferrer"
            >
              Arenal Box: <span>Rúa do Areal, 140, 36201 Vigo, Pontevedra</span>
            </a>
            <a
              className="text-xs sm:text-base hover:underline"
              href="https://goo.gl/maps/nfzy9RUETPPxd8Zx7"
              target="_blank"
              rel="noreferrer"
            >
              Zenter: <span>Estrada Fragosiño, 30, 36214 Vigo, Pontevedra</span>
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-semibold uppercase">
              Horarios
            </h3>
            <p className="text-xs sm:text-base">
              Arenal Box: <span>L/V: 6:00/23:00</span>
            </p>
            <p className="text-xs sm:text-base">
              Zenter: <span>L/V: 6:00/23:00</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <a
            href="https://wa.me/34666123456"
            target="_blank"
            rel="noreferrer"
            aria-label="Contactar por WhatsApp"
            className="text-gray-100 hover:text-green-500"
          >
            <FaWhatsapp size={50} />
          </a>
          <a
            href="https://www.instagram.com/tryfitness._/"
            target="_blank"
            rel="noreferrer"
            aria-label="Perfil de Instagram"
            className="text-gray-100 hover:text-pink-500"
          >
            <FaInstagram size={50} />
          </a>
        </div>
      </div>

      {/* Sección ya existente */}
      <div className="flex flex-col items-center">
        <Link href="/legal#legal">
          <p className="text-xs sm:text-base hover:underline">
            Aviso legal y Política de privacidad
          </p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
