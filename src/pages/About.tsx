import { Award, Target, Users, TrendingUp, Shield, Lightbulb, Heart, CheckCircle2, Linkedin } from 'lucide-react'

export function About() {
  return (
    <div className="bg-transparent">
      {/* Hero Section */}
      <div className="bg-transparent py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">About <span className="text-primary">ProfitWise</span></h1>
          <div className="mt-4 w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We are more than just accountants. We are your strategic business partners dedicated to helping you achieve financial success and peace of mind.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 sm:py-24 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Our <span className="text-primary">Story</span>
                </h2>
                <div className="w-20 h-1 bg-primary mb-6"></div>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  Founded with a vision to make professional accounting accessible to businesses of all sizes, ProfitWise Accountants has grown from a small practice to a trusted partner for hundreds of companies across the UK.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  Our journey began with a simple belief: every business deserves expert financial guidance without the complexity and jargon that often comes with it. Today, we combine decades of combined experience with cutting-edge technology to deliver accounting services that truly make a difference.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We've helped startups secure funding, guided growing businesses through expansion, and supported established companies in optimizing their financial operations. Your success story is what drives us forward.
                </p>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-primary/20">
                  <img 
                    src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Professional accounting team working together" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Sets Us Apart */}
      <div id="what-sets-us-apart" className="py-16 sm:py-24 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                What Sets Us <span className="text-primary">Apart</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                We don't just crunch numbers. We build relationships, understand your business, and provide insights that drive real growth.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl overflow-hidden border-2 border-primary/20 hover:border-primary transition-all">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/5905701/pexels-photo-5905701.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Cloud accounting technology and data analytics" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="bg-primary/10 rounded-lg p-3 w-fit mb-4">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Innovative Solutions</h3>
                  <p className="text-slate-600">
                    We leverage the latest cloud accounting technology to give you real-time insights into your business performance, not just historical reports.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden border-2 border-primary/20 hover:border-primary transition-all">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Team collaboration and support" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="bg-primary/10 rounded-lg p-3 w-fit mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Dedicated Support</h3>
                  <p className="text-slate-600">
                    Every client gets a dedicated account manager who knows your business inside out. No call centers, no waiting—just direct access to your team.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden border-2 border-primary/20 hover:border-primary transition-all">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Team meeting with strategic planning" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="bg-primary/10 rounded-lg p-3 w-fit mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Proactive Approach</h3>
                  <p className="text-slate-600">
                    We don't wait for problems to arise. Our team actively monitors your finances and alerts you to opportunities and risks before they impact your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-16 sm:py-24 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Our <span className="text-primary">Values</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                These principles guide everything we do and shape how we serve our clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-8 border-2 border-primary/20 hover:border-primary transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-lg p-3 shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Integrity First</h3>
                    <p className="text-slate-600 leading-relaxed">
                      We operate with unwavering honesty and transparency. Every recommendation we make is in your best interest, backed by ethical practices and professional standards.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-primary/20 hover:border-primary transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-lg p-3 shrink-0">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Excellence Always</h3>
                    <p className="text-slate-600 leading-relaxed">
                      We're committed to delivering work of the highest quality. Our team continuously updates their knowledge to stay ahead of tax laws and accounting best practices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-primary/20 hover:border-primary transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-lg p-3 shrink-0">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Client-Centered</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Your success is our success. We take time to truly understand your unique business needs, challenges, and goals, then tailor our solutions accordingly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-primary/20 hover:border-primary transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-lg p-3 shrink-0">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Growth Mindset</h3>
                    <p className="text-slate-600 leading-relaxed">
                      We believe in continuous improvement—for ourselves and for your business. We're always learning, evolving, and finding better ways to serve you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="py-16 sm:py-24 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-primary/20">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Business growth and success" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white rounded-2xl p-12 border-2 border-primary/20">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Our <span className="text-primary">Mission</span>
                </h2>
                <div className="w-20 h-1 bg-primary mb-8"></div>
                <p className="text-xl text-slate-600 leading-relaxed mb-6">
                  To empower businesses with financial clarity, strategic insights, and peace of mind. We transform complex accounting into clear, actionable intelligence that drives informed decision-making and sustainable growth.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  We're not just here to file your taxes or balance your books. We're here to be your trusted financial partner, helping you navigate challenges, seize opportunities, and build a stronger, more profitable business.
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <Linkedin className="h-5 w-5 text-primary shrink-0" />
                  <a 
                    href="https://www.linkedin.com/company/profitwiseaccountants/?viewAsMember=true" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    Connect with us on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us - Quick Points */}
      <div className="py-16 sm:py-24 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Why Businesses Choose <span className="text-primary">ProfitWise</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            </div>

            <div className="space-y-4">
              {[
                "Qualified financial accountants, AFA - MIPA, with proven track records",
                "Cloud-based accounting for real-time financial visibility",
                "Proactive tax planning that saves you money",
                "Responsive support when you need it most",
                "Transparent pricing with no hidden fees",
                "Industry expertise across multiple sectors"
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-4 bg-white rounded-lg p-4 border-2 border-primary/20">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <p className="text-lg text-slate-900">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
