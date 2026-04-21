'use client'

import { motion } from 'framer-motion'
import { FaUsers, FaStar } from 'react-icons/fa'
import { fadeInUp, staggerContainer, cardHoverSmall } from '@/utils/animations'
import siteConfig from '@/config/siteConfig'

export default function LeadershipSection() {
  const leadership = siteConfig.about.leadership || []

  if (leadership.length === 0) return null

  return (
    <section className="py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.h2
          className="section-title"
          {...fadeInUp}
        >
          Leadership
        </motion.h2>

        <motion.div
          className="space-y-4"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {leadership.map((role, index) => (
            <motion.div
              key={index}
              className="card p-6 flex items-start gap-4"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              <div className="text-2xl text-primary mt-1 shrink-0">
                <FaUsers />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{role.role}</h3>
                <p className="text-primary">{role.organization}</p>
                <p className="text-gray-500 text-sm mb-3">{role.duration}</p>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  {role.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <FaStar className="text-xs text-primary mt-1.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}