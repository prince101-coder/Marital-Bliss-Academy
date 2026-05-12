import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Users, Heart, MessageCircle, Calendar } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Couples Therapy",
    description:
      "One-on-one sessions designed to address specific challenges and strengthen your bond through proven therapeutic techniques.",
    color: "bg-rose-100",
    iconColor: "text-rose-500",
  },
  {
    icon: Heart,
    title: "Premarital Counseling",
    description:
      "Prepare for a strong foundation before marriage. Learn essential communication skills and conflict resolution strategies.",
    color: "bg-amber-100",
    iconColor: "text-amber-500",
  },
  {
    icon: MessageCircle,
    title: "Communication Workshops",
    description:
      "Group sessions focusing on improving dialogue, active listening, and expressing needs effectively in relationships.",
    color: "bg-emerald-100",
    iconColor: "text-emerald-500",
  },
  {
    icon: Calendar,
    title: "Intensive Retreats",
    description:
      "Multi-day immersive experiences for couples seeking deep transformation and reconnection in a supportive environment.",
    color: "bg-sky-100",
    iconColor: "text-sky-500",
  },
];

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <p className="text-amber-600 font-medium tracking-widest uppercase text-sm mb-4">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 sm:mb-6 leading-tight">
            Comprehensive Support for Every Stage of Your Relationship
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From newlyweds to long-term partners, we offer tailored programs to
            help you build and maintain a thriving marriage.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 xl:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group h-full bg-stone-50 border-0 shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden"
            >
              <CardHeader className="p-6 sm:p-7 pb-3 sm:pb-4">
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${service.iconColor}`} />
                </div>
                <CardTitle className="text-lg sm:text-xl font-semibold text-slate-800 leading-snug">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 sm:px-7 pb-6 sm:pb-7">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
                  {service.description}
                </p>
                <button
                  onClick={scrollToContact}
                  className="text-amber-600 font-medium text-sm hover:text-amber-700 transition-colors inline-flex items-center gap-2"
                >
                  Learn More
                  <span className="group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-14 lg:mt-16">
          <Button
            onClick={scrollToContact}
            className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white px-7 sm:px-8 py-4 sm:py-6 rounded-full text-base font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
