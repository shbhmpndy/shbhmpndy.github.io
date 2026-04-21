'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations'
import siteConfig from '@/config/siteConfig'
import Link from 'next/link'

export default function NewsSection() {
  const news = siteConfig.news?.items || []

  if (!siteConfig.news?.include || news.length === 0) return null

  return (
    <section className="py-16">
      <div className="container max-w-3xl mx-auto px-4">
        <motion.div className="text-center mb-10" {...fadeInUp}>
          <h2 className="text-3xl font-bold">News</h2>
        </motion.div>

        <motion.div
          className="space-y-0 divide-y divide-gray-200 dark:divide-gray-700"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {news.slice(0, 5).map((item, index) => (
            <motion.div
              key={index}
              className="py-4 flex items-start gap-4"
              variants={fadeInUp}
            >
              <span className="text-sm text-primary font-medium w-20 shrink-0">{item.date}</span>
              <p className="text-gray-700 dark:text-gray-300">{item.title}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-8">
          <Link href="/news" className="text-primary font-medium hover:underline">
            View All News →
          </Link>
        </div>
      </div>
    </section>
  )
}