import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: "Sales Intern",
      company: "ALKU",
      location: "Andover, MA",
      period: "June 2025 - December 2025",
      type: "current",
      description: [
        "Recruiting intern sourcing information about professionals currently seeking new career opportunities in engineering and technology fields.",
        "Gained valuable communication skills by engaging with PhD engineers with 20+ years of experience, helping to place them in highly competitive roles."
      ],
      technologies: ["Recruiting", "Communication", "Engineering Talent", "Networking"]
    },
    {
      title: "Maintenance Crew",
      company: "Passaconaway Country Club",
      location: "Litchfield, NH",
      period: "April 2024 - September 2024",
      type: "past",
      description: [
        "Collected golf balls daily from the driving range to ensure smooth flow of play and maintained all equipment.",
        "Cleaned and maintained every cart after use, worked the cash register, and provided customer assistance."
      ],
      technologies: ["Operations", "Customer Service", "Equipment Maintenance"]
    },
    {
      title: "Medical Records Technician",
      company: "Derry Medical Center",
      location: "Derry, NH",
      period: "May 2023 - August 2023",
      type: "past",
      description: [
        "Assisted in evaluation and selection of medical records, identifying those that were current and those requiring re-evaluation."
      ],
      technologies: ["Data Management", "Organization", "Attention to Detail"]
    },
    {
      title: "Landscaping Crew",
      company: "Trey's Amigos",
      location: "Windham, NH",
      period: "May 2021 - September 2022",
      type: "past",
      description: [
        "Performed mowing, trimming, edging, weeding, and mulching lawns. Installed underground piping systems."
      ],
      technologies: ["Physical Labor", "Piping Installation", "Teamwork"]
    }
  ]

  const education = [
    {
      degree: "B.S. Mechanical Engineering",
      school: "University of Colorado Boulder",
      location: "Boulder, CO",
      period: "Expected December 2027",
      honors: "3.6 GPA | ABET Accredited",
      minors: "Math & Aerospace Engineering"
    },
    {
      degree: "Mechanical Engineering",
      school: "University of Massachusetts Lowell",
      location: "Lowell, MA",
      period: "Completed May 2025",
      honors: "Dean's List | Honors College | 3.6 GPA",
      minors: "Math & Finance"
    }
  ]

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subheading mx-auto">
            A diverse range of experience demonstrating leadership, work ethic, and adaptability.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-primary-500 to-transparent" />
                )}

                <div className="flex gap-6">
                  <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                    exp.type === 'current'
                      ? 'bg-gradient-to-r from-primary-500 to-orange-500'
                      : 'bg-dark-800 border border-dark-700'
                  }`}>
                    <Briefcase size={20} className="text-white" />
                  </div>

                  <div className="flex-1 glass rounded-xl p-6 card-hover">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                        <p className="text-primary-400 font-medium">{exp.company}</p>
                      </div>
                      {exp.type === 'current' && (
                        <span className="px-3 py-1 text-xs font-medium bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                          Recent
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-dark-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-dark-300 text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-badge text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.school} className="space-y-2">
                    <p className="text-primary-400 font-medium">{edu.degree}</p>
                    <p className="text-dark-300">{edu.school}</p>
                    <div className="text-sm text-dark-400 space-y-1">
                      <p>{edu.location}</p>
                      <p>{edu.period}</p>
                      <p className="text-primary-400/80">{edu.honors}</p>
                      <p>Minors: {edu.minors}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full" />
                Clubs & Activities
              </h3>
              <div className="space-y-3">
                {[
                  { name: "Business Analytics Society", status: "Member" },
                  { name: "Engineers for a Sustainable World", status: "Member" },
                  { name: "Leaders in Action", status: "Member" },
                ].map((club) => (
                  <div
                    key={club.name}
                    className="p-3 rounded-lg bg-dark-800/50 border border-dark-700/50"
                  >
                    <p className="text-dark-300 font-medium text-sm">{club.name}</p>
                    <p className="text-xs text-dark-500 mt-1">{club.status}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
