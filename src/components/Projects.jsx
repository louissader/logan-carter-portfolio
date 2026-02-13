import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Linkedin, Cog, TreePine, Globe, Play } from 'lucide-react'

const YouTubeEmbed = ({ videoId }) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true)
          setHasLoaded(true)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasLoaded])

  return (
    <div ref={ref} className="relative w-full aspect-[9/16] max-w-[280px] mx-auto rounded-xl overflow-hidden bg-dark-800">
      {!isVisible ? (
        <div className="absolute inset-0 flex items-center justify-center bg-dark-800">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary-500/20 flex items-center justify-center mx-auto mb-3">
              <Play size={28} className="text-primary-400 ml-1" />
            </div>
            <p className="text-dark-400 text-sm">Scroll to play video</p>
          </div>
        </div>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
          title="GEEN 1400 Engineering Design Project"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      )}
    </div>
  )
}

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "GEEN 1400 - Engineering Design Project",
      description: "Multi-phase engineering design project at CU Boulder encompassing concept development, CAD modeling, fabrication, and testing of working prototypes with iterative design improvements.",
      icon: Cog,
      highlights: [
        "Full design lifecycle execution",
        "CAD modeling & prototyping",
        "Testing & validation process",
        "Design Expo final presentation"
      ],
      technologies: ["SolidWorks", "Prototyping", "3D Printing", "Team Collaboration", "Testing"],
      featured: true,
      color: "from-primary-500 to-amber-500",
      videoId: "sggqbIs09tU"
    },
    {
      title: "Trail Design & Construction",
      description: "Led a team of track athletes to plan, design, and construct a major trail renovation project through wooded terrain using structural engineering principles.",
      icon: TreePine,
      highlights: [
        "Project planning & leadership",
        "Technical structural designs",
        "Gravel path engineering",
        "Team coordination & execution"
      ],
      technologies: ["Project Management", "Structural Design", "Leadership", "Construction"],
      featured: true,
      color: "from-orange-500 to-red-500",
      videoId: null
    },
    {
      title: "Website Creation for Small Businesses",
      description: "Building modern websites for small companies that either lack an online presence or have outdated sites in need of a refresh, helping businesses establish their digital footprint.",
      icon: Globe,
      highlights: [
        "Client requirement gathering",
        "Modern responsive design",
        "Full-stack development",
        "Business impact delivery"
      ],
      technologies: ["Web Development", "Design", "Client Relations", "Problem Solving"],
      featured: false,
      color: "from-purple-500 to-pink-500",
      videoId: null
    }
  ]

  return (
    <section id="projects" className="py-24 relative bg-dark-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading mx-auto">
            Engineering projects showcasing design thinking, technical execution, and leadership.
          </p>
        </motion.div>

        {/* GEEN 1400 - Featured with video */}
        {(() => {
          const FeaturedIcon = projects[0].icon
          return (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="group relative mb-8"
        >
          <div className="glass rounded-2xl overflow-hidden card-hover">
            <div className={`relative p-6 bg-gradient-to-r ${projects[0].color} bg-opacity-10`}>
              <div className="absolute inset-0 bg-gradient-to-r opacity-10" style={{
                backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`
              }} />
              <div className="relative flex items-start justify-between">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${projects[0].color} flex items-center justify-center shadow-lg`}>
                  <FeaturedIcon className="text-white" size={28} />
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {projects[0].title}
                  </h3>
                  <p className="text-dark-400 text-sm mb-4 leading-relaxed">
                    {projects[0].description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {projects[0].highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 text-xs text-dark-300"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${projects[0].color}`} />
                        {highlight}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-dark-700/50">
                    {projects[0].technologies.map((tech) => (
                      <span key={tech} className="tech-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <YouTubeEmbed videoId={projects[0].videoId} />
              </div>
            </div>
          </div>

          <div className="absolute -top-2 -right-2">
            <span className={`px-3 py-1 text-xs font-medium bg-gradient-to-r ${projects[0].color} text-white rounded-full shadow-lg`}>
              Featured
            </span>
          </div>
        </motion.div>
          )
        })()}

        {/* Other projects */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
              className="group relative"
            >
              <div className="glass rounded-2xl overflow-hidden card-hover h-full flex flex-col">
                <div className={`relative p-6 bg-gradient-to-r ${project.color} bg-opacity-10`}>
                  <div className="absolute inset-0 bg-gradient-to-r opacity-10" style={{
                    backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`
                  }} />
                  <div className="relative flex items-start justify-between">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center shadow-lg`}>
                      <project.icon className="text-white" size={28} />
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-dark-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 flex-1">
                    {project.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 text-xs text-dark-300"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color}`} />
                        {highlight}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-dark-700/50">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {project.featured && (
                <div className="absolute -top-2 -right-2">
                  <span className={`px-3 py-1 text-xs font-medium bg-gradient-to-r ${project.color} text-white rounded-full shadow-lg`}>
                    Featured
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.linkedin.com/in/logan-carter-35h/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-secondary"
          >
            <Linkedin size={20} />
            View More on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
