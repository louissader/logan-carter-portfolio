import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, Linkedin, CheckCircle } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formStatus, setFormStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('sending')

    const formData = new FormData(e.target)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    }

    const subject = encodeURIComponent(`Portfolio Contact from ${data.name}`)
    const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`)
    window.location.href = `mailto:Logan.Carter1@me.com?subject=${subject}&body=${body}`

    setTimeout(() => {
      setFormStatus('sent')
      e.target.reset()
      setTimeout(() => setFormStatus('idle'), 3000)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Logan.Carter1@me.com",
      href: "mailto:Logan.Carter1@me.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(603) 339-6170",
      href: "tel:+16033396170"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Windham, NH / Boulder, CO",
      href: null
    }
  ]

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subheading mx-auto">
            I'm actively seeking engineering internship opportunities. Let's connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Contact Information</h3>
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center">
                    <item.icon className="text-primary-400" size={20} />
                  </div>
                  <div>
                    <p className="text-dark-500 text-sm">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-dark-200 hover:text-primary-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-dark-200">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Connect With Me</h3>
              <a
                href="https://www.linkedin.com/in/logan-carter-35h/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-4 glass rounded-xl hover:border-primary-500/50 transition-all"
              >
                <Linkedin className="text-dark-400 group-hover:text-primary-400 transition-colors" size={24} />
                <div>
                  <p className="text-dark-300 font-medium group-hover:text-white transition-colors">
                    LinkedIn
                  </p>
                  <p className="text-dark-500 text-sm">Logan Carter</p>
                </div>
              </a>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 font-medium">Seeking Internships</span>
              </div>
              <p className="text-dark-400 text-sm">
                Open to mechanical engineering internships, co-ops, and project collaborations.
                I typically respond within 24 hours.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Send Me a Message</h3>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-dark-300 text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-dark-900/50 border border-dark-700/50 rounded-lg
                             text-dark-200 placeholder-dark-500
                             focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50
                             transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-dark-300 text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-dark-900/50 border border-dark-700/50 rounded-lg
                             text-dark-200 placeholder-dark-500
                             focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50
                             transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-dark-300 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-dark-900/50 border border-dark-700/50 rounded-lg
                           text-dark-200 placeholder-dark-500
                           focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50
                           transition-colors"
                  placeholder="Internship Opportunity / Project Inquiry"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-dark-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-dark-900/50 border border-dark-700/50 rounded-lg
                           text-dark-200 placeholder-dark-500
                           focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50
                           transition-colors resize-none"
                  placeholder="Tell me about an internship or project opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'sending' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : formStatus === 'sent' ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
