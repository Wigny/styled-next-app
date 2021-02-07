import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { FC } from 'react';

const FramermotionPage: FC = () => (
  <div className="flex flex-col items-center">
    <motion.img src="/img/framermotion.svg" layoutId="framermotion-logo" />

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
      <Link href="/">
        <a className="bg-gray-900 hover:bg-gray700 transition text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl">
          Voltar para a Home
        </a>
      </Link>
    </motion.div>
  </div>
);

export default FramermotionPage;
