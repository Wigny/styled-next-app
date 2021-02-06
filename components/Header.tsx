import { FC } from 'react';
import Image from "next/image";
import Link from "next/link";

export const Header: FC = () => {
  const menus = [
    { title: 'Next.js', link: '/nextjs' },
    { title: 'Tailwind', link: '/tailwind' },
    { title: 'Framer Motion', link: '/framermotion' },
  ]

  return (
    <header className="flex justify-center md:justify-between py-2 md:py-4 items-center">
      <Image src="/img/logo.svg" alt="Logo" width={150} height={33} />

      <nav className="hidden md:block space-x-8">
        {menus.map((m, i) =>
          <Link href={m.link} key={i}>
            <a className="tracking-wide hover:text-gray-300">{m.title}</a>
          </Link>
        )}
      </nav>
    </header>
  );
}
