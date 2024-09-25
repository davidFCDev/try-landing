"use client";

import { useRouter } from "next/navigation";
import { ReactNode, MouseEvent } from "react";

interface ScrollToTopLinkProps {
  children: ReactNode;
  href: string;
  className?: string;
}

const ScrollToTopLink = ({ children, href, className }: ScrollToTopLinkProps) => {
  const router = useRouter();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (window.location.pathname === href) {
      scrollToTop();
    } else {
      router.push(href);
    }
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

export default ScrollToTopLink;
