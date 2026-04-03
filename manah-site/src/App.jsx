import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  Users,
  TrendingUp,
  Megaphone,
  Palette,
  BarChart3,
  MessageCircle,
  CheckCircle2,
  Globe,
  Share2,
  BookOpen,
  Star,
} from "lucide-react";

const COLORS = {
  bg: "#FFFFFF",
  bgAlt: "#F5F5F7",
  card: "#FFFFFF",
  border: "#E5E7EB",
  neon: "#7B00FF",
  neonLight: "#C070FF",
  text: "#0A0A0A",
  textMuted: "#555555",
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const services = [
  {
    icon: Share2,
    title: "Gestão de Redes Sociais",
    desc: "Conteúdo estratégico para Instagram, LinkedIn e Facebook focado em captação de alunos.",
  },
  {
    icon: Megaphone,
    title: "Campanhas de Matrícula",
    desc: "Estratégias digitais para maximizar matrículas em cada período letivo.",
  },
  {
    icon: Palette,
    title: "Identidade Visual",
    desc: "Design profissional que transmite credibilidade e modernidade para sua instituição.",
  },
  {
    icon: BarChart3,
    title: "Tráfego Pago",
    desc: "Anúncios segmentados no Google e Meta para atingir pais e responsáveis na sua região.",
  },
  {
    icon: Globe,
    title: "Sites Institucionais",
    desc: "Presença digital profissional que gera confiança e converte visitantes em matrículas.",
  },
  {
    icon: BookOpen,
    title: "Marketing de Conteúdo",
    desc: "Artigos, e-books e materiais que posicionam sua escola como referência educacional.",
  },
];

const results = [
  { number: "120+", label: "Instituições Atendidas" },
  { number: "3x", label: "Média de Crescimento em Matrículas" },
  { number: "98%", label: "Taxa de Satisfação" },
  { number: "1 ano", label: "de Experiência no Setor" },
];

const testimonials = [
  {
    name: "Dra. Ana Carvalho",
    role: "Diretora — Colégio Horizonte",
    text: "A MANAH transformou nossa presença digital. Triplicamos as matrículas em dois anos com estratégias certeiras e muito profissionalismo.",
  },
  {
    name: "Prof. Ricardo Mendes",
    role: "Coordenador — Instituto Saber",
    text: "Finalmente uma agência que entende o mercado educacional. O retorno sobre o investimento foi visível já nos primeiros meses.",
  },
  {
    name: "Maria Lúcia Fonseca",
    role: "Gestora — Escola Primeiros Passos",
    text: "Profissionalismo, criatividade e resultados reais. A MANAH é a parceira que toda escola precisa.",
  },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 transition-all duration-300"
      style={{
            background: scrolled
            ? "rgba(255, 255, 255, 0.95)"
            : "rgba(255, 255, 255, 1)",
            backdropFilter: scrolled ? "blur(12px)" : "none",
            borderBottom: `1px solid ${COLORS.border}`,
            }}
    >
      <img src="/MANAH.png" alt="MANAH" className="h-24 w-auto" />
      <div className="hidden md:flex items-center gap-8">
        {["Serviços", "Resultados", "Depoimentos", "Contato"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium transition-colors duration-200"
            style={{ color: COLORS.textMuted }}
            onMouseEnter={(e) => (e.target.style.color = COLORS.neonLight)}
            onMouseLeave={(e) => (e.target.style.color = COLORS.textMuted)}
          >
            {item}
          </a>
        ))}
      </div>
      <a
        href="#contato"
        className="px-9 py-4 rounded-full text-sm font-semibold transition-all duration-200"
        style={{
          background: `linear-gradient(135deg, ${COLORS.neon}, ${COLORS.neonLight})`,
          color: "#fff",
          boxShadow: `0 0 20px ${COLORS.neon}60`,
        }}
      >
        Fale Conosco
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-16"
      style={{ background: COLORS.bg }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${COLORS.neon}, transparent)`,
        }}
      />

      {/* Gold accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: `linear-gradient(90deg, transparent, ${COLORS.neon}, transparent)`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8 tracking-widest uppercase"
          style={{
            border: `1px solid ${COLORS.neon}60`,
            color: COLORS.neon,
            background: `${COLORS.neon}10`,
          }}
        >
          <GraduationCap size={14} />
          Especialistas em Marketing Educacional
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6"
          style={{ color: COLORS.text }}
        >
          <span className="block mb-3">Marketing que</span>
          <span
            className="block mb-3"
            style={{
              backgroundImage: `linear-gradient(135deg, ${COLORS.neon}, ${COLORS.neonLight})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            transforma
          </span>
          <span className="block mb-3">sua escola em</span>
          <span
            className="block"
            style={{
              backgroundImage: `linear-gradient(135deg, ${COLORS.neon}, ${COLORS.neonLight})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
  referência
</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: COLORS.textMuted }}
        >
          Estratégias digitais especializadas para instituições de ensino que
          querem crescer com consistência, credibilidade e resultados reais.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all duration-200"
            style={{
              background: `linear-gradient(135deg, ${COLORS.neon}, ${COLORS.neonLight})`,
              color: "#fff",
              boxShadow: `0 0 30px ${COLORS.neon}50`,
            }}
          >
            Quero mais matrículas
            <ArrowRight size={16} />
          </a>
          <a
            href="#resultados"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all duration-200"
            style={{
              border: `1px solid ${COLORS.border}`,
              color: COLORS.textMuted,
              background: `${COLORS.card}`,
            }}
          >
            Ver resultados
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section
      id="serviços"
      className="py-24 px-6 md:px-16"
      style={{ background: COLORS.bgAlt }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: COLORS.neon }}
          >
            O que fazemos
          </p>
          <h2
            className="text-3xl md:text-5xl font-black mb-4"
            style={{ color: COLORS.text }}
          >
            Soluções para{" "}
            <span
              style={{
                backgroundImage: `linear-gradient(135deg, ${COLORS.neon}, ${COLORS.neonLight})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              instituições de ensino
            </span>
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: COLORS.textMuted }}
          >
            Cada estratégia é desenvolvida com profundo conhecimento do mercado
            educacional brasileiro.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="p-6 rounded-2xl transition-all duration-300 group"
              style={{
                background: COLORS.card,
                border: `1px solid ${COLORS.border}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${COLORS.neon}60`;
                e.currentTarget.style.boxShadow = `0 0 30px ${COLORS.neon}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = COLORS.border;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.neon}30, ${COLORS.neonLight}20)`,
                  border: `1px solid ${COLORS.neon}40`,
                }}
              >
                <service.icon size={22} color={COLORS.neonLight} />
              </div>
              <h3
                className="font-bold text-lg mb-2"
                style={{ color: COLORS.text }}
              >
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: COLORS.textMuted }}>
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Results() {
  return (
    <section
      id="resultados"
      className="py-24 px-6 md:px-16"
      style={{ background: COLORS.bg }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: COLORS.neon }}
          >
            Nossos números
          </p>
          <h2
            className="text-3xl md:text-5xl font-black"
            style={{ color: COLORS.text }}
          >
            Resultados que{" "}
            <span
              style={{
                backgroundImage: `linear-gradient(135deg, ${COLORS.neon}, ${COLORS.neonLight})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              falam por si
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {results.map((result, i) => (
            <motion.div
              key={result.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="text-center p-8 rounded-2xl"
              style={{
                background: COLORS.card,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <p
                className="text-4xl md:text-5xl font-black mb-2"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${COLORS.neon}, ${COLORS.neonLight})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {result.number}
              </p>
              <p className="text-sm" style={{ color: COLORS.textMuted }}>
                {result.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="py-24 px-6 md:px-16"
      style={{ background: COLORS.bgAlt }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: COLORS.neon }}
          >
            Depoimentos
          </p>
          <h2
            className="text-3xl md:text-5xl font-black"
            style={{ color: COLORS.text }}
          >
            O que nossos{" "}
            <span
              style={{
                backgroundImage: `linear-gradient(135deg, ${COLORS.neon}, ${COLORS.neonLight})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              clientes dizem
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="p-6 rounded-2xl flex flex-col gap-4"
              style={{
                background: COLORS.card,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    fill={COLORS.neon}
                    color={COLORS.neon}
                  />
                ))}
              </div>
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: COLORS.textMuted }}
              >
                "{t.text}"
              </p>
              <div
                className="pt-4"
                style={{ borderTop: `1px solid ${COLORS.border}` }}
              >
                <p className="font-bold text-sm" style={{ color: COLORS.text }}>
                  {t.name}
                </p>
                <p className="text-xs mt-1" style={{ color: COLORS.neon }}>
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section
      id="contato"
      className="py-24 px-6 md:px-16"
      style={{ background: COLORS.bg }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8 tracking-widest uppercase"
            style={{
              border: `1px solid ${COLORS.neon}60`,
              color: COLORS.neon,
              background: `${COLORS.neon}10`,
            }}
          >
            <Users size={14} />
            Vamos conversar
          </div>

          <h2
            className="text-3xl md:text-5xl font-black mb-6"
            style={{ color: COLORS.text }}
          >
            Pronto para levar sua escola ao{" "}
            <span
              style={{
                backgroundImage: `linear-gradient(135deg, ${COLORS.neon}, ${COLORS.neonLight})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              próximo nível?
            </span>
          </h2>

          <p
            className="text-lg mb-10 leading-relaxed"
            style={{ color: COLORS.textMuted }}
          >
            Entre em contato e descubra como uma estratégia digital especializada
            pode transformar os resultados da sua instituição.
          </p>

          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-base transition-all duration-200"
            style={{
              background: `linear-gradient(135deg, ${COLORS.neon}, ${COLORS.neonLight})`,
              color: "#fff",
              boxShadow: `0 0 40px ${COLORS.neon}50`,
            }}
          >
            Falar com um especialista
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="py-8 px-6 md:px-16"
      style={{
        background: COLORS.bgAlt,
        borderTop: `1px solid ${COLORS.border}`,
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <img src="/MANAH.png" alt="MANAH" className="h-24 w-auto" />
        <p className="text-sm" style={{ color: COLORS.textMuted }}>
          © {new Date().getFullYear()} MANAH Agência. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="transition-colors duration-200"
            style={{ color: COLORS.textMuted }}
            onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.neonLight)}
            onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.textMuted)}
          >
            <Share2 size={18} />
          </a>
          <a
            href="#"
            className="transition-colors duration-200"
            style={{ color: COLORS.textMuted }}
            onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.neonLight)}
            onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.textMuted)}
          >
            <Globe size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div style={{ background: COLORS.bg, minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <Services />
      <Results />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}