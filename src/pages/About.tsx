import { Award, Target, Users, TrendingUp, Shield, Lightbulb, Heart } from 'lucide-react'
import { AnimatedText } from '@/components/ui/AnimatedText'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { PageHero } from '@/components/PageHero'
import { motion } from 'framer-motion'

/** Unique hero image - office desk (no people). Not used elsewhere. */
const ABOUT_HERO_IMAGE = 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1920'

export function About() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <PageHero
        backgroundImage={ABOUT_HERO_IMAGE}
        title={
          <AnimatedText
            as="h1"
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
            highlightWords={['ProfitWise']}
            start="top 90%"
            stagger={0.03}
          >
            About ProfitWise
          </AnimatedText>
        }
        subtitle={
          <AnimatedText
            as="p"
            className="mt-4 text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            mode="word"
            start="top 90%"
            delay={0.2}
          >
            We are more than just accountants. We are your strategic business partners dedicated to helping you achieve financial success and peace of mind.
          </AnimatedText>
        }
      />

      {/* Our Story Section */}
      <section className="py-24 sm:py-32 bg-background relative overflow-hidden">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <AnimatedText
                  as="h2"
                  className="text-3xl font-bold text-slate-900 mb-6"
                  highlightWords={['Story']}
                  start="top 85%"
                  stagger={0.025}
                >
                  Our Story
                </AnimatedText>
                <div className="w-20 h-1 bg-primary mb-6" />
                <AnimatedText
                  as="p"
                  className="text-lg text-slate-600 leading-relaxed mb-4"
                  mode="word"
                  start="top 85%"
                  delay={0.2}
                >
                  Founded with a vision to make professional accounting accessible to businesses of all sizes, ProfitWise Accountants has grown from a small practice to a trusted partner for hundreds of companies across the UK.
                </AnimatedText>
                <AnimatedText
                  as="p"
                  className="text-lg text-slate-600 leading-relaxed mb-4"
                  mode="word"
                  start="top 85%"
                  delay={0.3}
                >
                  Our journey began with a simple belief: every business deserves expert financial guidance without the complexity and jargon that often comes with it. Today, we combine decades of combined experience with cutting-edge technology to deliver accounting services that truly make a difference.
                </AnimatedText>
                <AnimatedText
                  as="p"
                  className="text-lg text-slate-600 leading-relaxed"
                  mode="word"
                  start="top 85%"
                  delay={0.4}
                >
                  We've helped startups secure funding, guided growing businesses through expansion, and supported established companies in optimizing their financial operations. Your success story is what drives us forward.
                </AnimatedText>
              </div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 50, damping: 20, delay: 0.3 }}
              >
                <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-primary/20">
                  <img
                    src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Professional accounting team working together"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* What Sets Us Apart */}
      <section id="what-sets-us-apart" className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <AnimatedText
                as="h2"
                className="text-3xl font-bold text-slate-900 mb-4"
                highlightWords={['Apart']}
                start="top 85%"
                stagger={0.025}
              >
                What Sets Us Apart
              </AnimatedText>
              <div className="w-24 h-1 bg-primary mx-auto mb-4" />
              <AnimatedText
                as="p"
                className="text-lg text-slate-600 max-w-2xl mx-auto"
                mode="word"
                start="top 85%"
                delay={0.2}
              >
                We don't just crunch numbers. We build relationships, understand your business, and provide insights that drive real growth.
              </AnimatedText>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Innovative Solutions',
                  description: 'We leverage the latest cloud accounting technology to give you real-time insights into your business performance, not just historical reports.',
                  image: 'https://images.pexels.com/photos/5905701/pexels-photo-5905701.jpeg?auto=compress&cs=tinysrgb&w=600',
                  icon: Lightbulb,
                },
                {
                  title: 'Dedicated Support',
                  description: 'Every client gets a dedicated account manager who knows your business inside out. No call centers, no waiting—just direct access to your team.',
                  image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
                  icon: Users,
                },
                {
                  title: 'Proactive Approach',
                  description: "We don't wait for problems to arise. Our team actively monitors your finances and alerts you to opportunities and risks before they impact your business.",
                  image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
                  icon: Target,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-black border border-slate-700/50 hover:border-slate-600/70 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group relative"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    type: 'spring',
                    stiffness: 50,
                    damping: 15,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -5, transition: { type: 'spring', stiffness: 300 } }}
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none" aria-hidden />
                  </div>
                  <div className="p-6 relative">
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 w-fit mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Our Values - Dark accent section */}
      <section className="relative py-24 sm:py-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-transparent pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <AnimatedText
                as="h2"
                className="text-3xl font-bold text-white mb-4"
                highlightWords={['Values']}
                start="top 85%"
                stagger={0.025}
              >
                Our Values
              </AnimatedText>
              <div className="w-24 h-1 bg-primary mx-auto mb-4" />
              <AnimatedText
                as="p"
                className="text-lg text-slate-300 max-w-2xl mx-auto"
                mode="word"
                start="top 85%"
                delay={0.2}
              >
                These principles guide everything we do and shape how we serve our clients.
              </AnimatedText>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Integrity First',
                  description: 'We operate with unwavering honesty and transparency. Every recommendation we make is in your best interest, backed by ethical practices and professional standards.',
                  icon: Shield,
                },
                {
                  title: 'Excellence Always',
                  description: "We're committed to delivering work of the highest quality. Our team continuously updates their knowledge to stay ahead of tax laws and accounting best practices.",
                  icon: Award,
                },
                {
                  title: 'Client-Centric',
                  description: 'Your success is our success. We listen, understand, and tailor our services to meet your specific needs and goals.',
                  icon: Heart,
                },
                {
                  title: 'Forward-Thinking',
                  description: 'We embrace innovation and technology. By looking ahead, we help future-proof your business against challenges and capitalise on new opportunities.',
                  icon: TrendingUp,
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="rounded-2xl p-8 border-2 border-slate-700 hover:border-primary/40 transition-all bg-slate-800/50"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    type: 'spring',
                    stiffness: 50,
                    damping: 15,
                    delay: index * 0.1,
                  }}
                  whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 300 } }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary rounded-lg p-3 shrink-0">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-foreground/5 dark:bg-black/10 pattern-dots" />
        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <AnimatedText
              as="h2"
              className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6"
              highlightWords={['Control']}
              start="top 85%"
              stagger={0.025}
            >
              Ready to Take Control?
            </AnimatedText>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
              Join the hundreds of businesses who trust ProfitWise Accountants to handle their accounting, tax, and payroll needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                to="/contact"
                className="bg-white text-primary hover:bg-slate-100 shadow-xl border-none text-lg h-14 px-10"
              >
                Book Your Free Consultation
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  )
}
