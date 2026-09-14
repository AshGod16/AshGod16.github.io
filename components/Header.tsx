"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/writing", label: "Writing" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <Link href="/" className="site-name" aria-current={pathname === "/" ? "page" : undefined}>
        <Image src="/logo.svg" alt="" width={40} height={36} className="site-logo" />
        <span>Akash Godbole</span>
      </Link>
      <nav aria-label="Main navigation">
        {links.map(({ href, label }) => (
          <Link key={href} href={href} aria-current={pathname === href || pathname.startsWith(`${href}/`) ? "page" : undefined}>{label}</Link>
        ))}
      </nav>
    </header>
  );
}
