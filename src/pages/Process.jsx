import React, { useState, useEffect } from "react";
import ITSolutionsSection from "./Why";
import {
  Heart,
  Shield,
  Clock,
  Phone,
  Star,
  CheckCircle,
  Snowflake,
  Users,
  Award,
  ArrowRight,
  Calendar,
  MapPin,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function FuneralHomePage() {
  const [isVisible, setIsVisible] = useState({});
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id^="section-"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);



  const services = [
      {
      icon: <Users className="w-12 h-12" />,
      title: "Ambulance",
      description:
        "Fast and reliable ambulance support to assist families in critical moments",
      color: "bg-[#0f3b66]",
      link: "/ambulance-service",
    },
 
    {
      icon: <Snowflake className="w-12 h-12" />,
      title: "Dead Body Freezer Box",
      description:
        "Advanced preservation technology ensuring dignified care with temperature-controlled units available for rent.",
      color: "bg-[#0f3b66]",
      link: "/freezer-box-service",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Funeral Services",
      description:
        "Comprehensive funeral arrangements tailored to honor your loved one's memory with compassion and respect.",
      color: "bg-[#0f3b66]",
      link: "/funeral-service",
    },
  
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Family Member",
      content:
        "During our most difficult time, their compassionate service and professionalism brought us comfort. The freezer box service was excellent.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Client",
      content:
        "Exceptional service with utmost respect and dignity. They handled everything with care and helped us through the entire process.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "Customer",
      content:
        "Highly professional and understanding staff. The facilities are top-notch and the service is available 24/7. Truly grateful.",
      rating: 5,
    },
  ];

  return (
    // Changed from overflow-x-hidden to overflow-x-auto to allow horizontal scrolling if needed
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/banner/banner1.png')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="mb-6 sm:mb-8 inline-block">
            <div className="bg-white/10 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 text-white text-xs sm:text-sm font-medium animate-pulse">
              Available 24/7 for immediate assistance
            </div>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 lg:mb-10 leading-tight">
            Honoring Lives with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
              Dignity & Care
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 max-w-3xl mx-auto px-4">
            Professional funeral services and advanced preservation solutions
            available 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link to="/contact">
              <button className="bg-white hover:bg-gray-100 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 w-full sm:w-auto">
                <Phone className="w-5 h-5" />
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section
          id="section-about"
          className={`py-16 sm:py-20 md:py-24 lg:py-32 transition-all duration-1000 ${
            isVisible["section-about"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center relative overflow-hidden">
            {/* Content */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="inline-block">
                <div className="bg-blue-100 text-[#0f3b66] rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold shadow-sm">
                  About Us
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                NCR Funeral Services & Dead Body{" "}
                <span className="text-[#0f3b66]">Freezer Box on Rent</span>
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                <p>
                  We provide 24×7 funeral support services and dead body freezer
                  box rentals across Delhi, Noida, Ghaziabad, Gurgaon, and
                  Faridabad. Our freezer boxes maintain safe temperature control
                  to preserve the body for long durations. With quick delivery,
                  trained staff, and hygienic equipment, we ensure complete
                  dignity, care, and peace of mind for families during difficult
                  times.
                </p>
                <p>
                  Whether you need a freezer box at home, hospital, or any
                  location in NCR, we guarantee fast response, transparent
                  pricing, and reliable service, helping families focus on last
                  rites and rituals with complete peace of mind.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 pt-4 sm:pt-6">
                {[
                  { title: "5+ Years", subtitle: "Experience" },
                  { title: "Licensed &", subtitle: "Certified" },
                  { title: "200+", subtitle: "Families Served" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="group relative bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-blue-50 rounded-full -mr-8 -mt-8 sm:-mr-10 sm:-mt-10 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0f3b66]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-[#0f3b66] mb-1 group-hover:text-blue-700 transition-colors">
                        {stat.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 font-medium">
                        {stat.subtitle}
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0f3b66] to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative aspect-square rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="/about2.jpg"
                  alt="Funeral Services"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f3b66]/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-blue-100 rounded-full blur-2xl opacity-50 -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 sm:w-32 sm:h-32 bg-[#0f3b66]/10 rounded-full blur-2xl opacity-50 -z-10"></div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="section-services"
          className={`py-16 sm:py-20 md:py-24 lg:py-32 transition-all duration-1000 ${
            isVisible["section-services"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block">
              <div className="bg-blue-100 text-[#0f3b66] rounded-full px-4 py-1 text-sm font-semibold mb-4 sm:mb-6">
                Our Services
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 font-serif">
              Comprehensive <span className="bg-clip-text text-[#0f3b66]">Services</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Comprehensive funeral and preservation services designed to meet
              your needs with dignity and respect
            </p>
          </div>

          <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden relative w-full max-w-md"
              >
                <div
                  className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 group-hover:scale-150 transition-transform duration-500`}
                ></div>
                <div
                  className={`text-white mb-4 sm:mb-6 p-3 rounded-xl bg-gradient-to-br ${service.color} inline-block transform group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
                <Link to={service.link} className="mt-4 sm:mt-6 flex items-center text-[#0f3b66] font-medium group-hover:text-blue-700 transition-colors">
                  Learn more{" "}
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Why Choose Us Section */}
      <ITSolutionsSection />

      {/* CTA Section */}
      <section
        id="section-cta"
        className={`py-12 px-4 sm:px-6 lg:px-8 relative transition-all duration-1000 ${
          isVisible["section-cta"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        } overflow-hidden`}
      >
        <div className="absolute inset-0 bg-[url('/c1.jpg')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-7xl mx-auto flex justify-end">
          <div className="bg-white/40 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-white/20 max-w-xl lg:max-w-2xl w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="text-center lg:text-left">
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-[#0f3b66]" />
                  <span className="bg-white/20 backdrop-blur-sm text-[#0f3b66] rounded-full px-3 py-1 text-xs sm:text-sm font-semibold">
                    Available 24/7
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0f3b66] mb-1">
                  We're Here For You
                </h2>
                <p className="text-blue-800 text-sm sm:text-base">
                  Compassionate support when you need it most
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <a href="tel:+918888888888">
                  <button className="bg-transparent border-2 border-white/50 text-white px-5 py-2 sm:py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto">
                    <Phone className="w-4 h-4" />
                    Call Us
                  </button>
                </a>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/20 flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-white text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 99999999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@funeralservices.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>123 Memorial Ave</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="section-testimonials"
        className={`py-16 sm:py-20 md:py-24 lg:py-32 transition-all duration-1000 ${
          isVisible["section-testimonials"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12 sm:mb-16">
            <div className="inline-block">
              <div className="bg-blue-100 text-[#0f3b66] rounded-full px-4 py-1 text-sm font-semibold mb-4 sm:mb-6">
                Testimonials
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 font-serif">
              What Families{" "}
              <span className="bg-clip-text text-[#0f3b66]">Say About Us</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Read testimonials from families we've had the privilege to serve
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center justify-center">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <div className="w-full h-full bg-[#0f3b66] flex items-center justify-center text-white text-2xl sm:text-3xl lg:text-4xl font-bold">
                    {testimonials[activeTestimonial].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-xl">
                <div className="flex gap-1 mb-4 sm:mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                      />
                    )
                  )}
                </div>
                <p className="text-gray-600 mb-4 sm:mb-6 italic leading-relaxed text-sm sm:text-base lg:text-lg">
                  "{testimonials[activeTestimonial].content}"
                </p>
                <div className="border-t pt-3 sm:pt-4">
                  <p className="font-bold text-gray-900 text-base sm:text-lg">
                    {testimonials[activeTestimonial].name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {testimonials[activeTestimonial].role}
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-4 sm:mt-6 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${
                      index === activeTestimonial
                        ? "bg-[#0f3b66]"
                        : "bg-gray-300"
                    }`}
                    onClick={() => setActiveTestimonial(index)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}