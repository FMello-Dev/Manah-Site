import { motion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  UtensilsCrossed,
  TrendingUp,
  Megaphone,
  Palette,
  BarChart3,
  MessageCircle,
  CheckCircle2,
  Globe,
  Share2,
  Share,
} from "lucide-react";

// ── Animações reutilizáveis ──────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

// ── Componentes ─────────────────────────────────────────────────

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#080808]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <img src="/MANAH---LOGO-PNG.png" alt="MANAH" className="h-24 w-auto" />
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#7B00FF] hover:bg-[#9B30FF] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#7B00FF]/30"
        >
          Fale conosco
          <ArrowRight size={14} />
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Glow de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#7B00FF]/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto pt-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 border border-[#7B00FF]/40 bg-[#7B00FF]/10 text-[#9B30FF] text-xs font-medium px-4 py-2 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#7B00FF] animate-pulse" />
          Agência especializada em escolas e buffets
        </motion.div>

        <motion.h1
           variants={fadeUp}
           initial="hidden"
           animate="visible"
           custom={1}
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6"
        >
          <span className="block mb-2">Marketing que</span>
          <span className="block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#7B00FF] to-[#C070FF]">
            transforma
          </span>
          <span className="block mb-2">o seu negócio em</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#7B00FF] to-[#C070FF]">
            referência
          </span>
          </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-[#888] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Ajudamos escolas e buffets a atrair mais clientes, construir autoridade
          e crescer de forma previsível com estratégias digitais que funcionam de
          verdade.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#7B00FF] hover:bg-[#9B30FF] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-[#7B00FF]/30 hover:-translate-y-0.5"
          >
            Quero crescer agora
            <ArrowRight size={18} />
          </a>
          <a
            href="#servicos"
            className="text-[#888] hover:text-white text-sm font-medium transition-colors duration-200"
          >
            Ver serviços →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Niches() {
  const niches = [
    {
      icon: GraduationCap,
      title: "Escolas",
      description:
        "Matrículas, reputação e engajamento. Posicionamos sua escola como a melhor escolha para pais e alunos na sua região.",
      items: ["Captação de matrículas", "Gestão de reputação online", "Conteúdo educacional"],
    },
    {
      icon: UtensilsCrossed,
      title: "Buffets",
      description:
        "Datas preenchidas, agenda lotada. Criamos estratégias para que o seu buffet seja o mais desejado da cidade.",
      items: ["Agenda sempre ocupada", "Conteúdo que encanta", "Anúncios segmentados"],
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Especialistas no seu segmento
          </h2>
          <p className="text-[#666] text-lg max-w-xl mx-auto">
            Não somos uma agência genérica. Conhecemos fundo os desafios de quem
            trabalha com educação e eventos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {niches.map((niche, i) => (
            <motion.div
              key={niche.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="group relative border border-white/8 bg-white/3 hover:border-[#7B00FF]/50 hover:bg-[#7B00FF]/5 rounded-2xl p-8 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#7B00FF]/20 flex items-center justify-center">
                  <niche.icon size={22} className="text-[#9B30FF]" />
                </div>
                <h3 className="text-2xl font-bold">{niche.title}</h3>
              </div>
              <p className="text-[#777] mb-6 leading-relaxed">{niche.description}</p>
              <ul className="space-y-2">
                {niche.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#999]">
                    <CheckCircle2 size={14} className="text-[#7B00FF]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: Megaphone,
      title: "Tráfego Pago",
      desc: "Anúncios no Meta e Google que trazem leads qualificados para o seu negócio.",
    },
    {
      icon: Share2,
      title: "Gestão de Redes",
      desc: "Conteúdo estratégico e consistente para Instagram, Facebook e TikTok.",
    },
    {
      icon: Palette,
      title: "Identidade Visual",
      desc: "Design que transmite profissionalismo e gera confiança imediata.",
    },
    {
      icon: BarChart3,
      title: "Relatórios e Métricas",
      desc: "Acompanhamento transparente dos resultados com clareza e objetividade.",
    },
    {
      icon: TrendingUp,
      title: "SEO Local",
      desc: "Apareça primeiro quando alguém buscar pelo seu serviço na sua cidade.",
    },
    {
      icon: MessageCircle,
      title: "Automação de CRM",
      desc: "Follow-up automático para não perder nenhum lead no caminho.",
    },
  ];

  return (
    <section id="servicos" className="py-24 px-6 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que fazemos</h2>
          <p className="text-[#666] text-lg max-w-xl mx-auto">
            Cada serviço é planejado para gerar resultados reais, não só curtidas.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.05}
              className="border border-white/8 bg-white/2 hover:border-[#7B00FF]/40 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg bg-[#7B00FF]/15 flex items-center justify-center mb-4">
                <service.icon size={18} className="text-[#9B30FF]" />
              </div>
              <h3 className="font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-[#666] text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  const reasons = [
    { number: "100%", label: "Foco no seu nicho", desc: "Só atendemos escolas e buffets" },
    { number: "30d", label: "Primeiros resultados", desc: "Estratégia ativa no primeiro mês" },
    { number: "0", label: "Achismos", desc: "Tudo baseado em dados reais" },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que a MANAH?</h2>
          <p className="text-[#666] text-lg max-w-xl mx-auto">
            Enquanto outras agências atendem qualquer cliente, nós escolhemos ser
            os melhores em dois segmentos específicos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="text-center p-8 border border-white/6 rounded-2xl bg-gradient-to-b from-[#7B00FF]/5 to-transparent"
            >
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#7B00FF] to-[#C070FF] mb-2">
                {r.number}
              </div>
              <div className="font-bold text-lg mb-1">{r.label}</div>
              <div className="text-[#666] text-sm">{r.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative border border-[#7B00FF]/30 bg-gradient-to-b from-[#7B00FF]/10 to-transparent rounded-3xl p-12 text-center overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-[#7B00FF] to-transparent" />

          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Pronto para ser referência?
          </h2>
          <p className="text-[#777] text-lg mb-8 max-w-lg mx-auto">
            Fale com a gente pelo WhatsApp. Sem enrolação, sem proposta genérica —
            só estratégia pensada para o seu negócio.
          </p>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#7B00FF] hover:bg-[#9B30FF] text-white font-bold px-10 py-4 rounded-full text-base transition-all duration-300 hover:shadow-2xl hover:shadow-[#7B00FF]/40 hover:-translate-y-0.5"
          >
            <MessageCircle size={18} />
            Falar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/6 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <img src="/MANAH---LOGO-PNG.png" alt="MANAH" className="h-14 w-auto opacity-80" />
        <p className="text-[#444] text-sm">
          © {new Date().getFullYear()} MANAH Marketing. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-[#555] hover:text-[#9B30FF] transition-colors">
            <Share2 size={18} />
          </a>
          <a href="#" className="text-[#555] hover:text-[#9B30FF] transition-colors">
            <Globe size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

// ── App ──────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <Navbar />
      <Hero />
      <Niches />
      <Services />
      <Why />
      <CTA />
      <Footer />
    </div>
  );
}