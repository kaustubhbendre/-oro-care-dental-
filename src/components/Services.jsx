// src/components/Services.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  { icon: '🦷', title: 'Teeth Cleaning', desc: 'Professional scaling and polishing to keep your teeth healthy and bright.', color: '#e8f4fd' },
  { icon: '✨', title: 'Teeth Whitening', desc: 'Advanced whitening treatments for a dazzling, confident smile.', color: '#fff8e8' },
  { icon: '🔬', title: 'Root Canal', desc: 'Painless root canal treatment with the latest endodontic techniques.', color: '#f0fdf4' },
  { icon: '👑', title: 'Veneers & Crowns', desc: 'Custom porcelain veneers and crowns for a perfect, natural-looking smile.', color: '#fdf4ff' },
  { icon: '🧩', title: 'Dental Implants', desc: 'Permanent, natural-looking tooth replacements that last a lifetime.', color: '#fff0f0' },
  { icon: '🎯', title: 'Cosmetic Dentistry', desc: 'Smile makeovers, bonding, and reshaping for aesthetic perfection.', color: '#f0f8ff' },
  { icon: '🦴', title: 'Dentures & Bridges', desc: 'Comfortable, well-fitting dentures and bridges to restore your smile.', color: '#fff8f0' },
  { icon: '🛡️', title: 'Mouth Guards', desc: 'Custom-fitted guards for sports protection and teeth grinding.', color: '#f5f0ff' },
  { icon: '📷', title: 'X-Ray & Diagnosis', desc: 'Digital X-rays and comprehensive diagnosis for accurate treatment planning.', color: '#f0fff8' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  })
};

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header" ref={ref}>
          <motion.span
            className="section-tag"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            What We Offer
          </motion.span>
          <motion.h2
            className="heading-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Comprehensive Dental Services
          </motion.h2>
          <motion.p
            className="section-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From routine checkups to advanced cosmetic procedures — we have everything 
            to make your smile shine.
          </motion.p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="service-card"
              style={{ '--card-bg': service.color }}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(10,74,110,0.15)' }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <a href="#appointment" className="service-link">
                Book Now →
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .services-section {
          padding: 100px 0;
          background: var(--white);
          position: relative;
        }
        .services-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--teal), transparent);
        }
        .section-header {
          text-align: center;
          margin-bottom: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .section-desc {
          color: var(--text-mid);
          font-size: 1.05rem;
          max-width: 520px;
          line-height: 1.7;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .service-card {
          background: var(--card-bg, var(--cream));
          border: 1px solid rgba(10,74,110,0.06);
          border-radius: var(--radius-lg);
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .service-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--ocean), var(--teal));
          transform: scaleX(0);
          transition: transform 0.3s ease;
          transform-origin: left;
        }
        .service-card:hover::after {
          transform: scaleX(1);
        }
        .service-icon {
          font-size: 2.4rem;
          line-height: 1;
        }
        .service-title {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--ocean-dark);
        }
        .service-desc {
          font-size: 0.88rem;
          color: var(--text-mid);
          line-height: 1.6;
          flex: 1;
        }
        .service-link {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--ocean);
          transition: var(--transition);
          align-self: flex-start;
        }
        .service-link:hover {
          color: var(--teal);
          gap: 8px;
        }
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
