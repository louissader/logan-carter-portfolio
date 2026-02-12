import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "CAD & Design",
      skills: [
        { name: "SolidWorks", level: 95 },
        { name: "Pro-E / Creo", level: 75 },
        { name: "Mechanical Design", level: 90 },
        { name: "3D Printing", level: 85 },
      ]
    },
    {
      title: "Analysis & Simulation",
      skills: [
        { name: "MATLAB", level: 90 },
        { name: "Ansys Workbench (FEA)", level: 80 },
        { name: "Data Analysis", level: 85 },
        { name: "Excel", level: 90 },
      ]
    },
    {
      title: "Engineering Fundamentals",
      skills: [
        { name: "Thermodynamics", level: 85 },
        { name: "Materials Science", level: 85 },
        { name: "Manufacturing Processes", level: 80 },
        { name: "Calculus / Diff Eq", level: 90 },
      ]
    },
    {
      title: "Manufacturing & Quality",
      skills: [
        { name: "5S Lean", level: 85 },
        { name: "Gemba Walk", level: 80 },
        { name: "Prototyping", level: 90 },
        { name: "Testing & Validation", level: 85 },
      ]
    },
    {
      title: "Professional Skills",
      skills: [
        { name: "Leadership", level: 90 },
        { name: "Communication", level: 95 },
        { name: "Problem Solving", level: 95 },
        { name: "Time Management", level: 90 },
      ]
    },
    {
      title: "Additional Tools",
      skills: [
        { name: "Web Development", level: 70 },
        { name: "Project Planning", level: 85 },
        { name: "Technical Writing", level: 80 },
        { name: "Troubleshooting", level: 90 },
      ]
    },
  ]

  return (
    <section id="skills" className="py-24 relative bg-dark-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subheading mx-auto">
            A comprehensive toolkit built through hands-on coursework, projects, and professional experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="p-6 glass rounded-xl"
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full" />
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-dark-300">{skill.name}</span>
                      <span className="text-dark-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: "easeOut"
                        }}
                        className="h-full bg-gradient-to-r from-primary-500 to-orange-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-lg font-semibold text-white mb-6 text-center">
            Relevant Coursework
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Materials Science",
              "Computer Aided Design",
              "Manufacturing Laboratory",
              "Thermodynamics",
              "Calculus I-III",
              "Differential Equations",
              "Engineering Projects",
              "Physics I & II",
              "Statics & Dynamics",
              "Linear Algebra"
            ].map((course, index) => (
              <motion.span
                key={course}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                className="tech-badge"
              >
                {course}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
