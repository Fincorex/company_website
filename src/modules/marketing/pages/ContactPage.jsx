import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import Input from '@shared/components/ui/Input';
import TextArea from '@shared/components/ui/TextArea';
import Button from '@shared/components/ui/Button';
import Alert from '@shared/components/ui/Alert';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({
        type: 'success',
        message: 'Thank you for reaching out! Our team will contact you shortly.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: 'solar:letter-bold-duotone',
      title: 'Email Us',
      detail: 'hello@fincorex.com',
      subDetail: 'Response within 24 hours',
      color: 'text-primary-500 bg-primary-50'
    },
    {
      icon: 'solar:map-point-bold-duotone',
      title: 'Visit Us',
      detail: '123 Financial District',
      subDetail: 'Lagos, Nigeria',
      color: 'text-emerald-500 bg-emerald-50'
    },
    {
      icon: 'solar:phone-calling-bold-duotone',
      title: 'Call Us',
      detail: '+234 800 FINCOREX',
      subDetail: 'Mon-Fri, 9am - 5pm',
      color: 'text-amber-500 bg-amber-50'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 font-sans">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary-50 text-primary-600 text-xs font-bold uppercase tracking-wider mb-4">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Let's build the future of <span className="text-primary-500">finance together.</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Have questions about our core banking solutions or ready to start your digital transformation? 
              Our experts are here to help.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid gap-6"
            >
              {contactInfo.map((info, index) => (
                <div key={index} className="flex gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:shadow-md group">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${info.color} transition-transform group-hover:scale-110`}>
                    <Icon icon={info.icon} width="28" height="28" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{info.title}</h3>
                    <p className="text-lg font-bold text-slate-900 mb-0.5">{info.detail}</p>
                    <p className="text-sm text-slate-500">{info.subDetail}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Social Proof / Trust Element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-8 rounded-3xl bg-primary-500 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3">Join 50+ Institutions</h3>
                <p className="text-primary-100 text-sm leading-relaxed mb-6">
                  Experience why top-tier microfinance institutions trust Fincorex for their digital core.
                </p>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-primary-500 bg-primary-400 flex items-center justify-center text-xs font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-primary-500 bg-white text-primary-500 flex items-center justify-center text-xs font-bold">
                    +46
                  </div>
                </div>
              </div>
              {/* Abstract Background Shapes */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-slate-200/50 border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                {status.message && (
                  <Alert 
                    type={status.type} 
                    message={status.message} 
                    onClose={() => setStatus({ type: '', message: '' })} 
                  />
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    label="Email Address"
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Input
                  label="Subject"
                  id="subject"
                  placeholder="How can we help you?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

                <TextArea
                  label="Message"
                  id="message"
                  placeholder="Tell us about your project or inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                />

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full sm:w-auto px-10 py-4 text-base"
                    isLoading={isSubmitting}
                  >
                    Send Message
                  </Button>
                  <p className="mt-4 text-xs text-slate-400 text-center sm:text-left">
                    By submitting this form, you agree to our <a href="#" className="text-primary-500 hover:underline">Privacy Policy</a>.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
