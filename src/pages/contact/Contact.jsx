import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Calendar, Clock } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    date: "",
    time: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [showCalendar, setShowCalendar] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", 
    "15:00", "16:00", "17:00", "18:00", "19:00"
  ];

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (form.phone && !/^\+?[0-9\-()\s]{7,}$/.test(form.phone))
      e.phone = "Enter a valid phone";
    if (!form.message.trim()) e.message = "Please write a short message";
    if (!form.date) e.date = "Please select a preferred date";
    if (!form.time) e.time = "Please select a preferred time";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setTimeout(() => setSubmitted(true), 400);
  };

  const handleDateChange = (selectedDate) => {
    setForm({ ...form, date: selectedDate });
    setShowCalendar(false);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const inputC =
    "w-full rounded-xl border border-gray-200 focus:border-[#0f3b66] focus:ring-2 focus:ring-[#1e5a94] outline-none px-4 py-3 bg-white/80 placeholder:text-gray-400";

  const CalendarComponent = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const lastDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
    const startDate = new Date(firstDayOfMonth);
    startDate.setDate(startDate.getDate() - firstDayOfMonth.getDay());
    
    const days = [];
    const currentDate = new Date(startDate);
    
    for (let i = 0; i < 42; i++) {
      days.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    const isToday = (date) => {
      const today = new Date();
      return date.toDateString() === today.toDateString();
    };

    const isPastDate = (date) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date < today;
    };

    const isCurrentMonth = (date) => date.getMonth() === currentMonth.getMonth();

    const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    const prevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));

    return (
      <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg p-4 z-50 w-80 sm:w-96 max-w-[90vw]">
        <div className="flex items-center justify-between mb-4">
          <button type="button" onClick={prevMonth} className="p-1 hover:bg-gray-100 rounded">←</button>
          <h3 className="font-semibold">
            {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </h3>
          <button type="button" onClick={nextMonth} className="p-1 hover:bg-gray-100 rounded">→</button>
        </div>
        
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center text-xs sm:text-sm font-medium text-gray-500 py-1 sm:py-2">{day}</div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-1">
          {days.map((date, index) => (
            <button
              key={index}
              type="button"
              onClick={() => !isPastDate(date) && handleDateChange(date.toISOString().split('T')[0])}
              disabled={isPastDate(date)}
              className={`
                p-1 sm:p-2 text-xs sm:text-sm rounded hover:bg-[#0f3b66]/10 transition-colors
                ${isToday(date) ? 'bg-[#1e5a94]/20 text-[#0f3b66] font-semibold' : ''}
                ${!isCurrentMonth(date) ? 'text-gray-300' : 'text-gray-700'}
                ${isPastDate(date) ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-[#0f3b66]/10'}
                ${form.date === date.toISOString().split('T')[0] ? 'bg-[#0f3b66] text-white' : ''}
              `}
            >
              {date.getDate()}
            </button>
          ))}
        </div>
      </div>
    );
  };

  React.useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-gray-50 mt-1">
      <div
        className="relative h-[60vh] sm:h-[70vh] md:h-[85vh] flex items-center justify-start bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('/banner/banner5.png')",
        }}
      >
        <div className="absolute inset-0 z-10"></div>
        <div className="relative text-white z-20 text-left px-4 sm:px-8 md:px-16 lg:px-24 max-w-7xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-10 drop-shadow-xl font-serif">
            Contact <span className="text-blue-300">Us</span>
          </h1>
           <div className="h-1 w-20 bg-blue-300 mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 max-w-2xl">
            We're here to provide compassionate support and professional guidance during your time of need. Reach out to our caring team 24/7.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-stretch">
          {/* Image Section */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl order-2 lg:order-1">
            <img
              src="/con1.jpg"
              alt="Service welcome"
              className="h-full w-full object-cover min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] inset-0"
            />
            <div className="absolute bottom-0 p-4 sm:p-6 md:p-8 lg:p-10 text-white">
              <p className="text-xs sm:text-sm uppercase tracking-widest text-white/80">Get in touch</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                Compassionate & Dignified Services
              </h2>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white/90 max-w-xl">
                Reach out to us for funeral support or dead body freezer rentals. Our trained team ensures dignity and care.
              </p>

              <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
                <a
                  href="tel:+911234567890"
                  className="inline-flex items-center gap-1 sm:gap-2 rounded-full bg-[#1e5a94]/30 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm hover:bg-[#1e5a94]/60 transition"
                >
                  <Phone size={14} className="sm:w-4 sm:h-4" /> +91-1234567890
                </a>
                <a
                  href="mailto:info@funeralservices.com"
                  className="inline-flex items-center gap-1 sm:gap-2 rounded-full bg-[#1e5a94]/30 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm hover:bg-[#1e5a94]/60 transition"
                >
                  <Mail size={14} className="sm:w-4 sm:h-4" /> info@funeralservices.com
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10">
              <div className="mb-4 sm:mb-6">
                <p className="text-sm font-medium text-[#0f3b66]">Contact Us</p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0f3b66] to-[#1e5a94] bg-clip-text text-transparent font-serif">
                  Let's Assist You
                </h1>
                <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-500">
                  Fill the form and our support team will reach you promptly.
                </p>
              </div>

              {submitted ? (
                <div className="rounded-2xl border border-green-200 bg-green-50 p-4 sm:p-6">
                  <p className="text-green-700 font-medium text-sm sm:text-base">
                    Thank you! Your message has been sent.
                  </p>
                  <p className="text-green-700/80 text-xs sm:text-sm mt-1">
                    Our team will get back to you soon.
                  </p>
                </div>
              ) : (
                <div className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className={`${inputC} text-sm sm:text-base`}
                        placeholder="Your Name"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        aria-invalid={!!errors.name}
                        aria-describedby="name-error"
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-xs text-red-600">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className={`${inputC} text-sm sm:text-base`}
                        placeholder="+91 XXXXXXXXXX"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        aria-invalid={!!errors.phone}
                        aria-describedby="phone-error"
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-1 text-xs text-red-600">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className={`${inputC} text-sm sm:text-base`}
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      aria-invalid={!!errors.email}
                      aria-describedby="email-error"
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="relative">
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          className={`${inputC} cursor-pointer text-sm sm:text-base`}
                          placeholder="Select date"
                          value={form.date ? formatDate(form.date) : ""}
                          onClick={() => setShowCalendar(!showCalendar)}
                          readOnly
                          aria-invalid={!!errors.date}
                          aria-describedby="date-error"
                        />
                        <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                        {showCalendar && <CalendarComponent />}
                      </div>
                      {errors.date && (
                        <p id="date-error" className="mt-1 text-xs text-red-600">{errors.date}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Preferred Time
                      </label>
                      <div className="relative">
                        <select
                          className={`${inputC} appearance-none cursor-pointer text-sm sm:text-base`}
                          value={form.time}
                          onChange={(e) =>
                            setForm({ ...form, time: e.target.value })
                          }
                          aria-invalid={!!errors.time}
                          aria-describedby="time-error"
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                        <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      {errors.time && (
                        <p id="time-error" className="mt-1 text-xs text-red-600">{errors.time}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      className={`${inputC} min-h-[100px] sm:min-h-[120px] resize-y text-sm sm:text-base`}
                      placeholder="Describe your requirement: funeral support, freezer box rental, or any questions…"
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      aria-invalid={!!errors.message}
                      aria-describedby="message-error"
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-xs text-red-600">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-[#0f3b66] text-white font-semibold shadow-lg hover:bg-[#1e5a94] active:scale-[.99] transition text-sm sm:text-base"
                  >
                    <Send size={16} className="sm:w-5 sm:h-5" /> Send Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900  mb-3 sm:mb-4 md:mb-5 font-serif">Find<span className="text-[#0f3b66]"> Our Facility</span></h2>
        <p className="mb-6 sm:mb-8 md:mb-10 text-center text-gray-500 text-sm sm:text-base">
          Visit our facility for professional funeral support and dead body freezer services.
        </p>
      </div>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20">
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448465.9328569838!2d77.4460194!3d28.5805681!2m3!1f0i1024!2i768!4f13.1!3m3!1m2!1s0x390cef14967d291b%3A0x48c2cba247c405ea!2sJK%20Digital%20Photo%20Studio%20Noida!5e0!3m2!1sen!2sin!4v1756294586165!5m2!1sen!2sin"
            width="100%"
            height="300"
            className="sm:h-[350px] md:h-[400px] lg:h-[450px]"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}