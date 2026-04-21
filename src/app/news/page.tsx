'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations'
import siteConfig from '@/config/siteConfig'

export default function News() {
  const news = siteConfig.news?.items || []

  return (
    <div className="container max-w-7xl mx-auto py-12 px-4">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        {...fadeInUp}
      >
        News & Updates
      </motion.h1>

      <motion.div
        className="max-w-3xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {news.map((item, index) => (
          <motion.div
            key={index}
            className="border-l-2 border-primary/50 pl-6 pb-6 relative"
            variants={fadeInUp}
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full" />
            <span className="text-sm text-primary font-semibold">{item.date}</span>
            <p className="text-lg mt-1">{item.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}