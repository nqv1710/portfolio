'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Briefcase, Code2, Layers, Cpu, Server, Database, Mail } from 'lucide-react';
import ContactForm from './components/ContactForm';

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function HomePage() {
  return (
    <div className="container-custom" style={{ paddingBottom: '5rem', overflow: 'hidden' }}>
      
      {/* 🚀 HERO SECTION */}
      <motion.section 
        initial="hidden" 
        animate="show" 
        variants={STAGGER}
        id="about" 
        style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '5vh', position: 'relative' }}
      >
        <motion.div variants={FADE_UP} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.5rem 1rem', background: 'rgba(76, 201, 240, 0.1)', color: 'var(--accent-cyan)', border: '1px solid rgba(76, 201, 240, 0.3)', borderRadius: '30px', fontWeight: 600, marginBottom: '2rem', width: 'max-content' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)', boxShadow: '0 0 10px var(--accent-cyan)' }} className="animate-pulse" />
          Available for new opportunities
        </motion.div>

        <motion.h1 variants={FADE_UP} style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)', marginBottom: '0.5rem', lineHeight: '1.1' }}>
          Nguyễn Quốc Việt
        </motion.h1>
        
        <motion.h2 variants={FADE_UP} style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--text-main)', marginBottom: '1.5rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Code2 size={32} color="var(--accent-purple)"/> 
          Full-stack Web Developer
        </motion.h2>

        <motion.p variants={FADE_UP} style={{ fontSize: '1.25rem', maxWidth: '750px', marginBottom: '3rem', color: 'var(--text-muted)' }}>
          I build high-performance, scalable web applications with a focus on robust backend architecture. Specialized in <span style={{ color: '#ff2d20', fontWeight: 600 }}>Laravel</span> and interactive <span style={{ color: '#41b883', fontWeight: 600 }}>Vue.js/React</span> interfaces. Bridging the gap between design and deep logic.
        </motion.p>
        
        <motion.div variants={FADE_UP} style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(157, 78, 221, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            href="#experience" 
            className="btn btn-primary"
            style={{ borderRadius: '12px' }}
          >
            <Briefcase size={20} /> View Experience
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/nqv1710" 
            target="_blank" rel="noreferrer" 
            className="btn" 
            style={{ borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"/><path d="M12 18a1 1 0 0 0-1 1v3"/></svg> GitHub
          </motion.a>

          <motion.a 
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
            whileTap={{ scale: 0.95 }}
            href="https://linkedin.com/in/nqv171002" 
            target="_blank" rel="noreferrer" 
            className="btn" 
            style={{ borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg> LinkedIn
          </motion.a>
        </motion.div>
        
        {/* Decorative ambient gradient */}
        <div style={{ position: 'absolute', right: '-10%', top: '20%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(157, 78, 221, 0.15) 0%, transparent 70%)', zIndex: -1, pointerEvents: 'none' }} />
      </motion.section>

      {/* 🛠 SKILLS SECTION */}
      <motion.section 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, margin: "-100px" }}
        variants={STAGGER}
        id="skills" 
        style={{ paddingTop: '5rem', marginBottom: '8rem' }}
      >
        <motion.div variants={FADE_UP} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
          <Layers size={40} color="var(--accent-cyan)" />
          <h2 style={{ fontSize: '3rem', color: 'var(--text-main)' }}>Technical <span style={{ color: 'var(--accent-cyan)' }}>Arsenal</span></h2>
        </motion.div>

        <div className="grid-custom grid-cols-3-custom">
          {[
            { title: 'Frontend Engineering', icon: <Cpu color="var(--accent-cyan)" />, skills: ['Vue.js', 'ReactJS', 'JavaScript', 'HTML5/CSS3', 'Tailwind', 'Bootstrap'] },
            { title: 'Backend Systems', icon: <Server color="var(--accent-purple)" />, skills: ['PHP (Laravel)', 'RESTful APIs', 'Node.js', 'MVC Pattern', 'Auth (JWT/Roles)'] },
            { title: 'Data & DevOps', icon: <Database color="var(--accent-blue)" />, skills: ['PostgreSQL', 'MySQL', 'Redis', 'Docker / K8s', 'Git', 'Linux / Nginx'] }
          ].map((category, i) => (
            <motion.div 
              key={category.title}
              variants={FADE_UP}
              whileHover={{ y: -10, borderColor: 'var(--accent-cyan)', boxShadow: '0 10px 40px rgba(76, 201, 240, 0.1)' }}
              className="glass-card" 
              style={{ padding: '2.5rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '14px', width: 'max-content' }}>
                {category.icon}
              </div>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.4rem' }}>{category.title}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {category.skills.map(skill => (
                  <span key={skill} style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '30px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
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
        viewport={{ once: true, margin: "-100px" }}
        variants={STAGGER}
        id="experience" 
        style={{ paddingTop: '3rem', marginBottom: '8rem' }}
      >
        <motion.div variants={FADE_UP} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}>
          <Briefcase size={40} color="var(--accent-purple)" />
          <h2 style={{ fontSize: '3rem', color: 'var(--text-main)' }}>Work <span style={{ color: 'var(--accent-purple)' }}>Experience</span></h2>
        </motion.div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative' }}>
          {/* Vertical Timeline Line */}
          <div style={{ position: 'absolute', left: '26px', top: '20px', bottom: '20px', width: '2px', background: 'linear-gradient(to bottom, var(--accent-purple), transparent)', opacity: 0.5, zIndex: 0 }} />

          {[
            { date: 'Apr 2025 – Present', role: 'Full-stack Web Developer', company: 'Esuhai Co., Ltd', bullet1: 'Developed and maintained internal web systems and high-availability backend services using Laravel.', bullet2: 'Architected admin and internal UI modules using component-based Vue.js framework.', bullet3: 'Engineered complex PostgreSQL databases and drastically improved query response times.' },
            { date: 'Jul 2022 – Dec 2024', role: 'Full-stack Developer | System Administrator', company: 'Ringnet Services Trading JSC', bullet1: 'Built proprietary management systems for enterprise clients using Laravel (MVC, Eloquent).', bullet2: 'Designed secure RESTful APIs implementing robust role-based access authorization.', bullet3: 'Deployed and maintained containerized web applications on Linux servers utilizing Nginx & Apache.' }
          ].map((job, index) => (
            <motion.div 
              variants={FADE_UP}
              key={index} 
              style={{ display: 'flex', gap: '2rem', zIndex: 1 }}
            >
              {/* Timeline Node */}
              <div style={{ marginTop: '5px' }}>
                <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: 'rgba(157, 78, 221, 0.1)', border: '2px solid var(--accent-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-purple)', boxShadow: '0 0 15px var(--accent-purple)' }} />
                </div>
              </div>

              {/* Job Card */}
              <motion.div 
                whileHover={{ x: 10, borderColor: 'var(--accent-purple)', background: 'rgba(255,255,255,0.06)' }}
                className="glass-card" 
                style={{ flex: 1, padding: '2.5rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '0.5rem', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 800 }}>{job.role}</h3>
                  <span style={{ padding: '0.4rem 1rem', background: 'rgba(157, 78, 221, 0.1)', color: 'var(--accent-purple)', borderRadius: '20px', fontWeight: 600, fontSize: '0.9rem' }}>
                    {job.date}
                  </span>
                </div>
                <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: 600 }}>{job.company}</h4>
                
                <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
                  <li style={{ listStyleType: 'disc' }}>{job.bullet1}</li>
                  <li style={{ listStyleType: 'disc' }}>{job.bullet2}</li>
                  <li style={{ listStyleType: 'disc' }}>{job.bullet3}</li>
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
        viewport={{ once: true, margin: "-100px" }}
        variants={STAGGER}
        id="projects" 
        style={{ paddingTop: '3rem', paddingBottom: '3rem' }}
      >
        <motion.div variants={FADE_UP} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}>
          <Code2 size={40} color="var(--accent-blue)" />
          <h2 style={{ fontSize: '3rem', color: 'var(--text-main)' }}>Featured <span style={{ color: 'var(--accent-blue)' }}>Projects</span></h2>
        </motion.div>

         <div className="grid-custom grid-cols-2-custom">
            {[
              { type: 'Freelance', name: 'Advanced LMS Platform', desc: 'Developed administration modules, implemented role-based access control, reporting, and progress tracking for a complex Learning Management System ecosystem.', tags: ['Laravel', 'ReactJS', 'SQL Server', 'REST API'] },
              { type: 'Enterprise', name: 'Internal Ops Systems (ESUHAI)', desc: 'Built backend supporting HR & massive business operations. Improved system reliability and speed remarkably through heavy refactoring and PostgreSQL scaling.', tags: ['Laravel', 'Vue.js', 'PostgreSQL', 'Redis', 'Docker / K8s'] },
              { type: 'Freelance', name: 'Enterprise ERP System', desc: 'Participated in developing core ERP modules including Sales, Inventory, Procurement, and Finance. Handled complex business logic handling thousands of transactions.', tags: ['Laravel', 'MySQL', 'REST API'] }
            ].map((project, idx) => (
              <motion.div 
                key={project.name}
                variants={FADE_UP}
                whileHover={{ y: -10, borderColor: 'var(--accent-blue)' }}
                className="glass-card"
                style={{ padding: '2.5rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}
              >
                {/* Accent Background Overlay */}
                <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(67, 97, 238, 0.2) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />

                <div style={{ display: 'inline-flex', padding: '0.4rem 1rem', background: 'rgba(255,255,255,0.08)', color: 'var(--text-main)', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.2rem' }}>
                  {project.type}
                </div>
                
                <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '1rem', fontWeight: 800 }}>{project.name}</h3>
                
                <p style={{ marginBottom: '2rem', color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                  {project.desc}
                </p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{ color: 'var(--accent-blue)', fontSize: '0.9rem', padding: '0.2rem 0.6rem', border: '1px solid rgba(67, 97, 238, 0.3)', borderRadius: '6px' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', cursor: 'pointer', transition: 'color 0.3s' }} className="hover:text-white">
                  <span>View Details</span> <ExternalLink size={16} />
                </div>
              </motion.div>
            ))}
         </div>
      </motion.section>

      {/* 🚀 CONTACT SECTION */}
      <motion.section 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, margin: "-100px" }}
        variants={STAGGER}
        id="contact" 
        style={{ paddingTop: '8rem', paddingBottom: '3rem', textAlign: 'center' }}
      >
        <motion.div variants={FADE_UP}>
          <div style={{ display: 'inline-block', padding: '1rem', background: 'rgba(157, 78, 221, 0.1)', borderRadius: '50%', marginBottom: '1.5rem' }}>
            <Mail size={40} color="var(--accent-purple)" />
          </div>
          <h2 style={{ fontSize: '3rem', color: 'var(--text-main)', marginBottom: '1rem' }}>Get In Touch</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: '1.6' }}>
            I am currently open to new opportunities. Whether you have a question, a project proposal, or just want to say hi, I will try my best to get back to you!
          </p>
          
          <ContactForm />

          <motion.div variants={FADE_UP} style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: 'var(--text-muted)' }}>Prefer sending an email directly?</span>
            <a 
              href="mailto:nqv171002@gmail.com" 
              className="hover:text-white"
              style={{ color: 'var(--accent-cyan)', fontWeight: 600, textDecoration: 'none', borderBottom: '1px dashed var(--accent-cyan)', paddingBottom: '2px', transition: 'all 0.3s' }}
            >
              nqv171002@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer style={{ marginTop: '5rem', padding: '3rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', color: 'var(--text-muted)' }}>
        <p>Built dynamically with Next.js, Framer Motion, and Tailwind CSS.</p>
        <p style={{ marginTop: '0.5rem' }}>© 2026 Nguyễn Quốc Việt.</p>
      </footer>

    </div>
  );
}