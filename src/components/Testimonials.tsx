import { Card, CardContent } from "../components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael & Jennifer",
    years: "Married 8 years",
    quote:
      "We were on the brink of divorce. The counselors at Marital Bliss Academy helped us rediscover why we fell in love. We're now stronger than ever.",
    rating: 5,
  },
  {
    name: "David & Sarah",
    years: "Married 3 years",
    quote:
      "Premarital counseling was the best decision we made. We learned how to communicate effectively before problems arose. Highly recommend!",
    rating: 5,
  },
  {
    name: "Robert & Maria",
    years: "Married 15 years",
    quote:
      "After years of feeling disconnected, we finally feel like partners again. The intensive retreat changed everything for us.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-amber-600 font-medium tracking-widest uppercase text-sm mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
            Real Stories from Real Couples
          </h2>
          <p className="text-slate-600 text-lg">
            Hear from couples who have transformed their relationships through
            our programs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-stone-50 border-0 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl"
            >
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-600 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="border-t border-slate-200 pt-4">
                  <p className="font-semibold text-slate-800">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-500">{testimonial.years}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-16 bg-amber-50 rounded-2xl p-8 lg:p-12">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-amber-600 mb-2">98%</p>
              <p className="text-slate-600">Client Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-amber-600 mb-2">500+</p>
              <p className="text-slate-600">Couples Served</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-amber-600 mb-2">15+</p>
              <p className="text-slate-600">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}