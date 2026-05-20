import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+254739018278",
  },
  {
    icon: Mail,
    label: "Email",
    value: "maritalblissacademy@yahoo.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mtwapa Off Kilifi Mombasa Kenya",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Fri: 9am - 7pm",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <p className="text-amber-600 font-medium tracking-widest uppercase text-sm mb-4">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 sm:mb-6 leading-tight">
            Begin Your Journey to Relationship Wellness
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Take the first step toward a stronger marriage. Schedule a
            consultation or ask us any questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 xl:gap-12 items-start">
          {/* Contact Form */}
          <Card className="lg:col-span-3 bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
            <CardHeader className="px-5 pt-6 pb-3 sm:px-8 sm:pt-8 sm:pb-4">
              <CardTitle className="text-xl sm:text-2xl font-semibold text-slate-800 leading-snug">
                Request a Consultation
              </CardTitle>
            </CardHeader>
            <CardContent className="px-5 pb-6 sm:px-8 sm:pb-8">
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-5 sm:gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-700">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John & Jane Smith"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-stone-50 border-slate-200 focus:border-amber-500 focus:ring-amber-500 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-stone-50 border-slate-200 focus:border-amber-500 focus:ring-amber-500 rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 sm:gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-slate-700">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+254739018278"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="bg-stone-50 border-slate-200 focus:border-amber-500 focus:ring-amber-500 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-700">Service Interest</Label>
                    <Select
                      onValueChange={(value) =>
                        setFormData({ ...formData, service: value })
                      }
                    >
                      <SelectTrigger className="bg-stone-50 border-slate-200 focus:border-amber-500 focus:ring-amber-500 rounded-xl">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="couples">Couples Therapy</SelectItem>
                        <SelectItem value="premarital">
                          Premarital Counseling
                        </SelectItem>
                        <SelectItem value="workshops">
                          Communication Workshops
                        </SelectItem>
                        <SelectItem value="retreats">Intensive Retreats</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-700">
                    How can we help?
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your situation and what you're hoping to achieve..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="bg-stone-50 border-slate-200 focus:border-amber-500 focus:ring-amber-500 rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 sm:py-6 rounded-full text-base font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-5 sm:space-y-6">
            <Card className="bg-amber-500 border-0 shadow-lg rounded-2xl text-white overflow-hidden">
              <CardContent className="p-5 sm:p-8">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5 leading-snug">
                  Ready to Get Started?
                </h3>
                <p className="text-amber-100 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
                  We offer a free 15-minute phone consultation to discuss your
                  needs and match you with the right counselor.
                </p>
                <Button className="w-full bg-white text-amber-600 hover:bg-amber-50 px-4 py-4 sm:py-6 rounded-full text-sm sm:text-base font-medium whitespace-normal text-center leading-snug">
                  Call Now: +254739018278
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm rounded-2xl overflow-hidden">
              <CardContent className="p-5 sm:p-6 space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start sm:items-center gap-4">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-amber-600" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-slate-500">{item.label}</p>
                      <p className="font-medium text-slate-800 break-words">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
