'use client';

import { motion, Variants } from 'framer-motion';
import { ExternalLink, Briefcase, Code2, Layers, Cpu, Server, Database, Mail, Download, ArrowRight } from 'lucide-react';
import ContactForm from './components/ContactForm';

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } }
};

const STAGGER: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function HomePage() {
  return (
    <div className="container-custom pb-20">
      
      {/* 🚀 HERO SECTION */}
      <motion.section 
        initial="hidden" 
        animate="show" 
        variants={STAGGER}
        id="about" 
        className="min-h-[90vh] flex flex-col justify-center pt-[clamp(3rem,8vh,6rem)] relative"
      >
        <motion.div 
          variants={FADE_UP} 
          className="flex items-center gap-3 px-4 py-2 bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30 rounded-full font-semibold mb-6 w-max max-w-full"
        >
          <div className="w-2 h-2 shrink-0 rounded-full bg-accent-cyan shadow-[0_0_10px_var(--color-accent-cyan)] animate-pulse" />
          Available for new opportunities
        </motion.div>

        <motion.h1 
          variants={FADE_UP} 
          className="mb-2 leading-tight"
        >
          Nguyễn Quốc Việt
        </motion.h1>
        
        <motion.h2 
          variants={FADE_UP} 
          className="text-[clamp(1.2rem,3.5vw,2.5rem)] text-[var(--text-main)] mb-6 font-semibold flex items-center gap-3 flex-wrap"
        >
          <Code2 size={28} className="text-accent-purple shrink-0"/> 
          Full-stack Web Developer
        </motion.h2>

        <motion.p 
          variants={FADE_UP} 
          className="text-[clamp(1rem,2vw,1.2rem)] max-w-[700px] mb-[clamp(2rem,4vh,3rem)] text-[var(--text-muted)]"
        >
          I build high-performance, scalable web applications with a focus on robust backend architecture. Specialized in{' '}
          <span className="text-[#ff2d20] font-semibold">Laravel</span> and interactive{' '}
          <span className="text-[#41b883] font-semibold">Vue.js/React</span> interfaces. Bridging the gap between design and deep logic.
        </motion.p>
        
        {/* CTA Buttons - Streamlined UX */}
        <motion.div 
          variants={FADE_UP} 
          className="flex gap-4 flex-wrap items-center"
        >
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(157, 78, 221, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            href="#projects" 
            className="btn btn-primary rounded-xl"
          >
            View My Work <ArrowRight size={18} />
          </motion.a>

          <motion.a 
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
            whileTap={{ scale: 0.95 }}
            href="/Nguyen_Quoc_Viet_CV.pdf" 
            download="Nguyen_Quoc_Viet_CV.pdf"
            className="btn rounded-xl bg-white/5 border border-white/10"
          >
            <Download size={18} /> Download CV
          </motion.a>
          
          <div className="flex items-center gap-2 ml-2">
            <motion.a 
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://github.com/nqv1710" 
              target="_blank" rel="noreferrer" 
              className="p-3 rounded-full bg-white/5 border border-white/10 text-[var(--text-muted)] hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"/><path d="M12 18a1 1 0 0 0-1 1v3"/></svg>
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://linkedin.com/in/nqv171002" 
              target="_blank" rel="noreferrer" 
              className="p-3 rounded-full bg-white/5 border border-white/10 text-[var(--text-muted)] hover:text-accent-cyan transition-colors"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </motion.a>
          </div>
        </motion.div>
        
        {/* Decorative ambient gradient */}
        <div 
          aria-hidden="true"
          className="absolute right-0 top-[15%] w-[min(500px,60vw)] h-[min(500px,60vw)] bg-[radial-gradient(circle,rgba(157,78,221,0.12)_0%,transparent_70%)] -z-10 pointer-events-none translate-x-[30%]"
        />
        <div 
          aria-hidden="true"
          className="absolute left-0 bottom-[10%] w-[min(400px,50vw)] h-[min(400px,50vw)] bg-[radial-gradient(circle,rgba(76,201,240,0.07)_0%,transparent_70%)] -z-10 pointer-events-none -translate-x-[40%]"
        />
      </motion.section>

      {/* 🛠 SKILLS SECTION */}
      <motion.section 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, margin: "-80px" }}
        variants={STAGGER}
        id="skills" 
        className="pt-[clamp(3rem,6vh,5rem)] mb-[clamp(4rem,8vh,8rem)]"
      >
        <motion.div 
          variants={FADE_UP} 
          className="flex items-center gap-4 mb-[clamp(2rem,4vh,3rem)] flex-wrap"
        >
          <Layers size={36} className="text-accent-cyan shrink-0" />
          <h2 className="section-heading text-[var(--text-main)]">
            Technical <span className="text-accent-cyan">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid-custom grid-cols-3-custom">
          {[
            { title: 'Frontend Engineering', icon: <Cpu size={24} className="text-accent-cyan" />, skills: ['Vue.js', 'ReactJS', 'JavaScript', 'HTML5/CSS3', 'Tailwind', 'Bootstrap'] },
            { title: 'Backend Systems', icon: <Server size={24} className="text-accent-purple" />, skills: ['PHP (Laravel)', 'RESTful APIs', 'Node.js', 'MVC Pattern', 'Auth (JWT/Roles)'] },
            { title: 'Data & DevOps', icon: <Database size={24} className="text-accent-blue" />, skills: ['PostgreSQL', 'MySQL', 'Redis', 'Docker / K8s', 'Git', 'Linux / Nginx'] }
          ].map((category) => (
            <motion.div 
              key={category.title}
              variants={FADE_UP}
              whileHover={{ y: -8, borderColor: 'var(--color-accent-cyan)', boxShadow: '0 10px 40px rgba(76, 201, 240, 0.1)' }}
              className="glass-card rounded-[20px] border border-white/10"
            >
              <div className="mb-5 p-3 bg-white/5 rounded-xl w-max">
                {category.icon}
              </div>
              <h3 className="mb-5 text-[clamp(1.1rem,2vw,1.4rem)]">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-full text-sm text-[var(--text-muted)]">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 💼 EXPERIENCE SECTION */}
      <motion.section 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, margin: "-80px" }}
        variants={STAGGER}
        id="experience" 
        className="pt-[clamp(2rem,4vh,3rem)] mb-[clamp(4rem,8vh,8rem)]"
      >
        <motion.div 
          variants={FADE_UP} 
          className="flex items-center gap-4 mb-[clamp(2rem,4vh,4rem)] flex-wrap"
        >
          <Briefcase size={36} className="text-accent-purple shrink-0" />
          <h2 className="section-heading text-[var(--text-main)]">
            Work <span className="text-accent-purple">Experience</span>
          </h2>
        </motion.div>
        
        <div className="flex flex-col gap-6 relative">
          {/* Vertical Timeline Line */}
          <div className="timeline-line" />

          {[
            { 
              date: 'Apr 2025 – Present', 
              role: 'Full-stack Web Developer', 
              company: 'Esuhai Co., Ltd', 
              bullet1: 'Developed and maintained internal web systems and high-availability backend services using Laravel.', 
              bullet2: 'Architected admin and internal UI modules using component-based Vue.js framework.', 
              bullet3: 'Engineered complex PostgreSQL databases and drastically improved query response times.' 
            },
            { 
              date: 'Jul 2022 – Dec 2024', 
              role: 'Full-stack Developer | System Administrator', 
              company: 'Ringnet Services Trading JSC', 
              bullet1: 'Built proprietary management systems for enterprise clients using Laravel (MVC, Eloquent).', 
              bullet2: 'Designed secure RESTful APIs implementing robust role-based access authorization.', 
              bullet3: 'Deployed and maintained containerized web applications on Linux servers utilizing Nginx & Apache.' 
            }
          ].map((job, index) => (
            <motion.div 
              variants={FADE_UP}
              key={index} 
              className="timeline-item"
            >
              {/* Timeline Node */}
              <div className="timeline-node">
                <div className="w-[54px] h-[54px] rounded-full bg-accent-purple/10 border-2 border-accent-purple flex items-center justify-center shrink-0">
                  <div className="w-3 h-3 rounded-full bg-accent-purple shadow-[0_0_15px_var(--color-accent-purple)]" />
                </div>
              </div>

              {/* Job Card */}
              <motion.div 
                whileHover={{ borderColor: 'var(--color-accent-purple)', backgroundColor: 'rgba(255,255,255,0.06)' }}
                className="glass-card flex-1 rounded-[20px] border border-white/5 min-w-0"
              >
                <div className="flex justify-between flex-wrap gap-2 mb-2 items-start">
                  <h3 className="text-[clamp(1.1rem,2.5vw,1.6rem)] font-extrabold min-w-0">{job.role}</h3>
                  <span className="px-3.5 py-1.5 bg-accent-purple/10 text-accent-purple rounded-full font-semibold text-sm shrink-0">
                    {job.date}
                  </span>
                </div>
                <h4 className="text-accent-cyan mb-5 text-[clamp(1rem,1.8vw,1.15rem)] font-semibold">{job.company}</h4>
                
                <ul className="pl-5 text-[var(--text-muted)] flex flex-col gap-3 text-[clamp(0.9rem,1.5vw,1.05rem)] leading-relaxed list-disc">
                  <li>{job.bullet1}</li>
                  <li>{job.bullet2}</li>
                  <li>{job.bullet3}</li>
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 🏆 PROJECTS SECTION */}
      <motion.section 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, margin: "-80px" }}
        variants={STAGGER}
        id="projects" 
        className="py-[clamp(2rem,4vh,3rem)]"
      >
        <motion.div 
          variants={FADE_UP} 
          className="flex items-center gap-4 mb-[clamp(2rem,4vh,4rem)] flex-wrap"
        >
          <Code2 size={36} className="text-accent-blue shrink-0" />
          <h2 className="section-heading text-[var(--text-main)]">
            Featured <span className="text-accent-blue">Projects</span>
          </h2>
        </motion.div>

        <div className="grid-custom grid-cols-2-custom">
          {[
            { 
              type: 'Freelance', 
              name: 'Advanced LMS Platform', 
              desc: 'Developed administration modules, implemented role-based access control, reporting, and progress tracking for a complex Learning Management System ecosystem.', 
              tags: ['Laravel', 'ReactJS', 'SQL Server', 'REST API'],
              img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop'
            },
            { 
              type: 'Enterprise', 
              name: 'Internal Ops Systems', 
              desc: 'Built backend supporting HR & massive business operations. Improved system reliability and speed remarkably through heavy refactoring and PostgreSQL scaling.', 
              tags: ['Laravel', 'Vue.js', 'PostgreSQL', 'Redis'],
              img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
            },
            { 
              type: 'Freelance', 
              name: 'Enterprise ERP System', 
              desc: 'Participated in developing core ERP modules including Sales, Inventory, Procurement, and Finance. Handled complex business logic handling thousands of transactions.', 
              tags: ['Laravel', 'MySQL', 'REST API'],
              img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
            }
          ].map((project) => (
            <motion.div 
              key={project.name}
              variants={FADE_UP}
              whileHover={{ y: -8, borderColor: 'var(--color-accent-blue)' }}
              className="glass-card rounded-[20px] border border-white/5 relative overflow-hidden flex flex-col p-0 group cursor-pointer"
            >
              {/* Project Image */}
              <div className="w-full h-48 overflow-hidden relative border-b border-white/5">
                <div className="absolute inset-0 bg-accent-blue/20 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay" />
                {/* Fallback mockup image using Unsplash */}
                <img 
                  src={project.img} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-1 relative">
                {/* Accent Background Overlay */}
                <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[radial-gradient(circle,rgba(67,97,238,0.18)_0%,transparent_70%)] translate-x-[30%] -translate-y-[30%] pointer-events-none" />

                <div className="inline-flex px-4 py-1.5 bg-white/10 text-[var(--text-main)] rounded-full text-sm font-semibold mb-4 w-max">
                  {project.type}
                </div>
                
                <h3 className="text-[clamp(1.2rem,2.5vw,1.7rem)] text-[var(--text-main)] mb-3 font-extrabold">{project.name}</h3>
                
                <p className="mb-6 text-[var(--text-muted)] text-[clamp(0.9rem,1.5vw,1.05rem)] leading-relaxed flex-1">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-accent-blue text-sm px-2.5 py-1 border border-accent-blue/30 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 text-[var(--text-muted)] group-hover:text-white transition-colors font-medium">
                  <span>View Details</span> <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 🚀 CONTACT SECTION */}
      <motion.section 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, margin: "-80px" }}
        variants={STAGGER}
        id="contact" 
        className="py-[clamp(4rem,8vh,8rem)] text-center"
      >
        <motion.div variants={FADE_UP}>
          <div className="inline-block p-4 bg-accent-purple/10 rounded-full mb-6">
            <Mail size={36} className="text-accent-purple" />
          </div>
          <h2 className="section-heading text-[var(--text-main)] mb-4">Get In Touch</h2>
          <p className="text-[clamp(1rem,2vw,1.15rem)] text-[var(--text-muted)] max-w-[580px] mx-auto mb-10 leading-relaxed">
            I am currently open to new opportunities. Whether you have a question, a project proposal, or just want to say hi, I will try my best to get back to you!
          </p>
          
          <ContactForm />

          <motion.div variants={FADE_UP} className="mt-10 flex flex-col items-center gap-3">
            <span className="text-[var(--text-muted)] text-[0.95rem]">Prefer sending an email directly?</span>
            <a 
              href="mailto:nqv171002@gmail.com" 
              className="text-accent-cyan font-semibold decoration-dashed decoration-1 underline-offset-4 hover:text-white hover:underline transition-all"
            >
              nqv171002@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="mt-[clamp(2rem,4vh,5rem)] py-10 border-t border-white/5 text-center text-[var(--text-muted)]">
        <p>Built dynamically with Next.js, Framer Motion, and Tailwind CSS.</p>
        <p className="mt-2">© 2026 Nguyễn Quốc Việt.</p>
      </footer>

    </div>
  );
}