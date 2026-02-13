import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { PenTool, Cpu, BookOpen, Wrench, Users, Settings } from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "CAD & Design",
      icon: PenTool,
      skills: ["SolidWorks", "Pro-E / Creo", "Mechanical Design", "3D Printing"]
    },
    {
      title: "Analysis & Simulation",
      icon: Cpu,
      skills: ["MATLAB", "Ansys Workbench (FEA)", "Data Analysis", "Excel"]
    },
    {
      title: "Engineering Fundamentals",
      icon: BookOpen,
      skills: ["Thermodynamics", "Materials Science", "Manufacturing Processes", "Calculus / Diff Eq"]
    },
    {
      title: "Manufacturing & Quality",
      icon: Wrench,
      skills: ["5S Lean", "Gemba Walk", "Prototyping", "Testing & Validation"]
    },
    {
      title: "Professional Skills",
      icon: Users,
      skills: ["Leadership", "Communication", "Problem Solving", "Time Management"]
    },
    {
      title: "Additional Tools",
      icon: Settings,
      skills: ["Web Development", "Project Planning", "Technical Writing", "Troubleshooting"]
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
                <category.icon size={18} className="text-primary-400" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="tech-badge text-xs">
                    {skill}
                  </span>
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
