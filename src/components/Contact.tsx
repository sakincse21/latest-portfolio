import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message received successfully. I will response as soon as possible. Thank you <3.");
  }

  return (
    <section ref={sectionRef} className="py-20 px-6  bg-surface/50">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-heading">Let's Get Connected</h2>
          <p className="body-text max-w-2xl mx-auto">
            I'd love to hear about your thoughts
            and discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {/* Contact Form */}
          <div className={`lg:col-span-2 fade-in ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.2s' }}>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input 
                    placeholder="Your Name"
                    className="bg-surface border-0 focus-visible:ring-1 focus-visible:ring-hero-accent/20"
                  />
                </div>
                <div>
                  <Input 
                    type="email"
                    placeholder="Your Email"
                    className="bg-surface border-0 focus-visible:ring-1 focus-visible:ring-hero-accent/20"
                  />
                </div>
              </div>
              
              <Input 
                placeholder="Message Subject"
                className="bg-surface border-0 focus-visible:ring-1 focus-visible:ring-hero-accent/20"
              />
              
              <Textarea 
                placeholder="Tell me about your thoughts..."
                rows={6}
                className="bg-surface border-0 focus-visible:ring-1 focus-visible:ring-hero-accent/20 resize-none"
              />
              
              <Button 
                type="submit"
                className="bg-hero-accent text-surface px-8 py-3 hover:bg-hero-accent/90 transition-all duration-300 w-full md:w-auto"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;