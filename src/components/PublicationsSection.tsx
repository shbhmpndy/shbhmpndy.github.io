'use client'

import { motion } from 'framer-motion'
import { FaBook, FaFile, FaCertificate } from 'react-icons/fa'
import { fadeInUp, staggerContainer, cardHoverSmall } from '@/utils/animations'
import siteConfig from '@/config/siteConfig'

export default function PublicationsSection() {
  const publications = siteConfig.about.publications || []

  if (publications.length === 0) return null

  return (
    <section className="py-20">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.h2
          className="section-title"
          {...fadeInUp}
        >
          Publications & Patents
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto space-y-4"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              className="card p-6 flex items-start gap-4"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              <div className="text-2xl text-primary mt-1 shrink-0">
                {pub.venue.includes('Patent') ? <FaCertificate /> : pub.venue.includes('arXiv') ? <FaFile /> : <FaBook />}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{pub.title}</h3>
                <p className="text-primary text-sm mb-1">{pub.venue}</p>
                <p className="text-gray-500 text-sm">{pub.citation}</p>
                {pub.link && (
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm mt-2 inline-block">
                    View →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}