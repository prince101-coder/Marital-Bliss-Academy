import { Card, CardContent } from "../components/ui/card";
import { Check, Heart, Users, Star } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "We approach every session with empathy, understanding, and genuine care for your relationship.",
  },
  {
    icon: Users,
    title: "Evidence-Based Methods",
    description: "Our techniques are backed by research and proven effective for thousands of couples.",
  },
  {
    icon: Star,
    title: "Lasting Results",
    description: "We focus on sustainable change that transforms relationships for the long term.",
  },
];

const benefits = [
  "Improved communication and understanding",
  "Conflict resolution skills",
  "Deeper emotional intimacy",
  "Renewed trust and connection",
  "Better parenting partnership",
  "Individual growth within marriage",
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-amber-600 font-medium tracking-widest uppercase text-sm mb-4">
                About Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                Guiding Couples Toward Healthier, Happier Relationships
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                At Marital Bliss Academy, we believe every relationship has the
                potential for profound love and connection. Our team of
                experienced counselors combines expertise with genuine warmth to
                create a safe space for growth and healing.
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-emerald-600" />
                  </div>
                  <p className="text-slate-600 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Values Cards */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl"
              >
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}