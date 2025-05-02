import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import {
GraduationCap,
  Gift,
  School,
  CheckSquare,
  Code,
  BookOpen,
} from 'lucide-react';
import AnimatedWaveLine from './AnimatedUnderLine';

const benefits = [
  {
    title: 'Taught by Professionals',
    description:
      'Our cohorts are led by industry experts and educators who know what it takes to succeed.',
    icon: <GraduationCap className="w-10 h-10"/>,
  },
  {
    title: 'Bounties',
    description:
      'Earn exciting rewards—from cash to MacBooks—designed to motivate and reward consistent effort.',
    icon: <Gift className="w-10 h-10"/>,
  },
  {
    title: 'Coding Hostels',
    description:
      'Experience collaborative late-night bug-fixing sessions with fellow learners.',
    icon: <School className="w-10 h-10"/>,
  },
  {
    title: 'Peer Code Reviews',
    description:
      'Get structured feedback on every assignment through our internal tool Masterji.',
    icon: <CheckSquare className="w-10 h-10"/>,
  },
  {
    title: 'Leet Lab',
    description:
      'Our in-house LeetCode-style platform helps you strengthen your programming fundamentals.',
    icon: <Code className="w-10 h-10"/>,
  },
  {
    title: 'Revision Classes',
    description:
      'Join multiple peer-led revision sessions to solidify your understanding of each topic.',
    icon: <BookOpen className="w-10 h-10"/>,
  },
];



const BenefitsOfCohorts = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center pb-16 text-center">
          <div className="relative w-fit mb-4">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Key Benefits of Cohorts
            </motion.h2>
            <AnimatedWaveLine />
          </div>
          <motion.p
            className="section-desc"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Cohorts are the best way to learn—structured, time-bound, and community-powered.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => {
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="flex flex-col justify-between h-full px-4 py-3">
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className="text-primary">
                        {item?.icon}
                      </div>
                    <h3 className="text-lg font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfCohorts;
