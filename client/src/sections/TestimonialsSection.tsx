import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    quote: "Catalyst Apps transformed our vague idea into a polished, user-friendly app that exceeded our expectations. Their technical expertise and strategic guidance were invaluable throughout the development process.",
    author: "Jane Doe",
    position: "CEO, HealthTech Innovations",
    initials: "JD"
  },
  {
    quote: "Working with Catalyst Apps was a game-changer for our business. They not only delivered a beautiful, functional app but also provided insights that helped us refine our business model and go-to-market strategy.",
    author: "Michael Smith",
    position: "Founder, RetailConnect",
    initials: "MS"
  },
  {
    quote: "The team at Catalyst Apps stands out for their attention to detail and commitment to quality. They delivered our complex enterprise application on time and within budget, with performance that surpassed our expectations.",
    author: "Sarah Rodriguez",
    position: "CTO, Enterprise Solutions Inc.",
    initials: "SR"
  }
];

export default function TestimonialsSection() {
  const { ref, controls } = useScrollAnimation();
  
  return (
    <section className="py-24 bg-primary-light relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-['Orbitron']">
            Client <span className="text-accent-blue">Success Stories</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Don't just take our word for it. Hear from organizations that have successfully launched their apps with our help.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-primary-dark p-8 rounded-lg relative card-hover"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.15) }}
            >
              <div className="text-accent-blue text-4xl absolute -top-5 left-6">
                <i className="fas fa-quote-left"></i>
              </div>
              <div className="pt-6">
                <p className="mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent-blue rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.initials}
                  </div>
                  <div className="ml-4">
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
