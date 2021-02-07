import { FC } from 'react';
import Image from "next/image";
import Link from "next/link";

interface MenuProps {
  link: string;
  title: string;
}

const Menu: FC<MenuProps> = ({ link, title }) => (
  <Link href={link}>
    <a className="tracking-wide hover:text-gray-300">{title}</a>
  </Link>
)

export const Header: FC = () => {
  return (
    <header className="flex justify-center md:justify-between py-2 md:py-4 items-center">
      <Image src="/img/logo.svg" alt="Logo" width={150} height={33} />

      <nav className="hidden md:block space-x-8">
        <Menu title={'Next.js'} link={'/nextjs'} />
        <Menu title={'Tailwind'} link={'/tailwind'} />
        <Menu title={'Framer Motion'} link={'/framermotion'} />
      </nav>
    </header>
  );
}
