import { Button } from "../components/ui/button";
import { Heart, Shield, Clock } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="pt-20 min-h-screen flex items-center bg-stone-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
              <Heart className="w-4 h-4" fill="currentColor" />
              <span>Rebuild. Reconnect. Rediscover.</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
              Transform Your{" "}
              <span className="text-amber-500">Marriage</span> Into Lasting
              Bliss
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Professional counseling services designed to help couples navigate
              challenges, improve communication, and build stronger, more
              fulfilling relationships.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 rounded-full text-base font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Your Journey
              </Button>
              <Button
                variant="outline"
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-100 px-8 py-6 rounded-full text-base font-medium transition-all duration-200"
              >
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-800">500+</p>
                  <p className="text-sm text-slate-500">Couples Helped</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-800">15+</p>
                  <p className="text-sm text-slate-500">Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="bg-amber-100 rounded-3xl p-8 lg:p-12">
              <div className="bg-white rounded-2xl shadow-xl p-6 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-rose-500" fill="currentColor" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">
                      Dr. Sarah & James Mitchell
                    </h3>
                    <p className="text-slate-500">Lead Counselors</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <p className="text-slate-600 text-sm">
                      Licensed Marriage & Family Therapists
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <p className="text-slate-600 text-sm">
                      Gottman Method Certified
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <p className="text-slate-600 text-sm">
                      EFT Trained Therapists
                    </p>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4">
                  <p className="text-slate-600 text-sm italic">
                    "Every relationship has the potential for deep connection
                    and lasting love. We're here to help you find it."
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-rose-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-200 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}