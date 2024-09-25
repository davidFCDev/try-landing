"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ScrollToTopLink from "../../common/scrolltotoplink";
import "./navbar.css";

const NavBar = () => {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle((prev) => !prev);

  const handleLinkClick = (path: string) => {
    handleToggle();
    setTimeout(() => {
      router.push(path);
    }, 300);
  };

  return (
    <nav className="w-full px-6 md:px-20 py-5 flex justify-between items-center bg-white fixed shadow-sm z-50">
      <Link href="/" passHref>
        <span className="text-2xl md:text-[2rem] tracking-[3px] sm:tracking-[3px] flex items-baseline gap-4 cursor-pointer">
          <strong>
            <span className="text-red-600">T</span>RY
          </strong>{" "}
          FITNESS
        </span>
      </Link>

      <div className="hidden sm:flex gap-10 uppercase text-[15px] tracking-[6px] items-center">
        <ScrollToTopLink href="/">
          <span className="link underline-hover cursor-pointer">Inicio</span>
        </ScrollToTopLink>
        <a
          href="https://docs.google.com/spreadsheets/d/11BxSCEmBlY49k70ADOW8dRaj5bZn7mEOm-sTWc1IPVg/edit?usp=drivesdk"
          target="_blank"
          rel="noreferrer"
        >
          <span className="link underline-hover cursor-pointer">Horarios</span>
        </a>
        <Link href="/prices" passHref>
          <span className="link underline-hover cursor-pointer">Tarifas</span>
        </Link>
        <a
          href="https://wa.me/34666123456"
          target="_blank"
          rel="noreferrer"
          aria-label="Contactar por WhatsApp"
        >
          <span className="border border-black text-white bg-black hover:text-black hover:bg-white px-3 py-2 transition-all cursor-pointer">
            Contacto
          </span>
        </a>
      </div>

      {/* Menú móvil */}
      <aside className="sm:hidden">
        <div>
          <input
            id="checkbox"
            type="checkbox"
            checked={toggle}
            onChange={handleToggle}
          />
          <label className="toggle" htmlFor="checkbox">
            <div className="bar bar--top"></div>
            <div className="bar bar--middle"></div>
            <div className="bar bar--bottom"></div>
          </label>
        </div>

        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="px-10 py-10 bg-white  flex flex-col items-center absolute top-[4.65rem] right-0 min-w-full h-screen uppercase"
            >
              <ul className="list-none flex gap-5 justify-start h-full items-center flex-1 flex-col tracking-widest text-xs">
                <Link href="/" passHref>
                  <span
                    className="px-6 py-2 hover-underline cursor-pointer"
                    onClick={() => handleLinkClick("/")}
                  >
                    Inicio
                  </span>
                </Link>
                <hr className="border-neutral-300 border w-full" />
                <a
                  href="https://docs.google.com/spreadsheets/d/11BxSCEmBlY49k70ADOW8dRaj5bZn7mEOm-sTWc1IPVg/edit?usp=drivesdk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="px-6 py-2 hover-underline cursor-pointer">
                    Horarios
                  </span>
                </a>
                <hr className="border-neutral-300 border w-full" />
                <Link href="/prices" passHref>
                  <span
                    className="px-6 py-2 hover-underline cursor-pointer"
                    onClick={() => handleLinkClick("/prices")}
                  >
                    Tarifas
                  </span>
                </Link>
                <hr className="border-neutral-300 border w-full" />
                <a
                  href="https://www.instagram.com/tryfitness._/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2 hover-underline"
                >
                  Instagram
                </a>
                <hr className="border-neutral-300 border w-full" />
                <a
                  href="https://wa.me/34666123456"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Contactar por WhatsApp"
                >
                  <span className="px-6 py-2 hover-underline cursor-pointer">
                    Contacto
                  </span>
                </a>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </aside>
    </nav>
  );
};

export default NavBar;
