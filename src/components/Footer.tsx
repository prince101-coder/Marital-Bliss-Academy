import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Marital Bliss</h3>
                <p className="text-xs text-amber-400 tracking-widest uppercase">
                  Academy
                </p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Helping couples build stronger, more fulfilling relationships
              through professional counseling and evidence-based techniques.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Services", "About", "Testimonials", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-slate-400 hover:text-amber-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Couples Therapy",
                "Premarital Counseling",
                "Workshops",
                "Intensive Retreats",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Marital Bliss Academy. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-slate-500 hover:text-amber-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-amber-400 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}