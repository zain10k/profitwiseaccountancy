import { partners } from '@/pages/Partners'

export function PartnersStrip() {
  return (
    <div className="bg-background py-12 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-slate-500 mb-8 uppercase tracking-wider">Partners</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-32 h-16 transition-all duration-300 hover:scale-110 ${partner.className || ''}`}
              title={partner.name}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                className="max-h-full max-w-full object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

