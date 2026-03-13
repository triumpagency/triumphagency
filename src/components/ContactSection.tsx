import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          
          <p className="text-accent font-display text-sm tracking-[0.2em] uppercase mb-3">Contact</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Let's Work Together
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 space-y-6">
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <p className="font-display font-semibold text-sm text-foreground">Email</p>
                <p className="text-muted-foreground text-sm">thetriumpagency@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <p className="font-display font-semibold text-sm text-foreground">Location</p>
                <p className="text-muted-foreground text-sm">Available Worldwide</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-4">
            
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition" />
            
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition" />
            
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition resize-none" />
            
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-accent text-accent-foreground font-display font-semibold text-sm hover:opacity-90 transition-opacity">
              
              Send Message <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>);

};

export default ContactSection;