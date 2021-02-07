import React, { Component, FC } from 'react';
import { Layout } from '../components/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface CardProps {
  href: string;
  imgSrc: string;
  layoutId: string;
}

const Card: FC<CardProps> = ({ href, imgSrc, layoutId }) => (
  <Link href={href}>
    <div className="relative h-20 md:h-40 bg-gray-200 hover:bg-gray-50 transition rounded-xl cursor-pointer">
      <motion.img src={imgSrc} layoutId={layoutId} className="w-full h-full" />
    </div>
  </Link>
)

export default class Home extends Component {
  render() {
    return (
      <Layout>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl mt-10 md:mt-24 leading-none font-extrabold tracking-tight text-gray-900">
          Construa sites modernos com agilidade sem precisar sair do HTML.
        </h1>

        <div className="mt-10 md:mt-24 grid w-full grid-cols-1 md:grid-cols-3 grid-rows-3 mdgrid-rows-1 gap-4">
          <Card href={'/nextjs'} imgSrc={'/img/nextjs.svg'} layoutId={'nextjs-logo'} />
          <Card href={'/tailwind'} imgSrc={'/img/tailwind.svg'} layoutId={'tailwind-logo'} />
          <Card href={'/framermotion'} imgSrc={'/img/framermotion.svg'} layoutId={'framermotion-logo'} />
        </div>
      </Layout>
    );
  }
}
