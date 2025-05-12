import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sendContactFormEmail, EmailData } from "@/services/emailService";

// Form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { toast } = useToast();

  // Form setup
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  // Contact form submission
  const mutation = useMutation({
    mutationFn: (data: FormValues) => {
      const emailData: EmailData = {
        fullName: data.name,
        emailAddress: data.email,
        message: data.message,
        companyName: data.company
      };
      return sendContactFormEmail(emailData);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out! We'll get back to you shortly.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      console.error('Form submission failed:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: FormValues) {
    mutation.mutate(data);
  }

  // Contact info
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-accent-blue" />,
      title: "Phone Number",
      content: "+1 (740) 440-5428",
    },
    {
      icon: <Mail className="w-5 h-5 text-accent-blue" />,
      title: "Email Address",
      content: "hello@catalystapps.com",
    },
    {
      icon: <Clock className="w-5 h-5 text-accent-blue" />,
      title: "Business Hours",
      content: "Monday - Friday: 9AM - 6PM (EST)",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary-dark text-white font-sans antialiased min-h-screen flex flex-col"
    >
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-20 section-gradient-top">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-['Orbitron']">
                Get In <span className="text-accent-blue">Touch</span>
              </h2>
              <p className="text-lg mb-8 text-gray-400">
                Have a project in mind? Want to discuss your app idea? We're here to help transform your vision into reality.
                Reach out to our team using the contact form below or through our direct contact information.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-20 bg-primary-dark">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-400">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          {...form.register("name")}
                          className="bg-primary-light border-primary-light text-white focus:border-accent-blue"
                        />
                        {form.formState.errors.name && (
                          <p className="text-red-500 text-sm">{form.formState.errors.name.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-400">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          placeholder="john@example.com"
                          {...form.register("email")}
                          className="bg-primary-light border-primary-light text-white focus:border-accent-blue"
                        />
                        {form.formState.errors.email && (
                          <p className="text-red-500 text-sm">{form.formState.errors.email.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-gray-400">
                        Company (Optional)
                      </label>
                      <Input
                        id="company"
                        placeholder="Your Company Name"
                        {...form.register("company")}
                        className="bg-primary-light border-primary-light text-white focus:border-accent-blue"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-400">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Please describe your project or inquiry..."
                        rows={5}
                        {...form.register("message")}
                        className="bg-primary-light border-primary-light text-white focus:border-accent-blue resize-none"
                      />
                      {form.formState.errors.message && (
                        <p className="text-red-500 text-sm">{form.formState.errors.message.message}</p>
                      )}
                    </div>
                    <Button 
                      type="submit"
                      className="w-full bg-accent-blue hover:bg-accent-darkBlue text-white"
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending ? (
                        <div className="flex items-center space-x-2">
                          <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <Send className="h-4 w-4" />
                          <span>Send Message</span>
                        </div>
                      )}
                    </Button>
                  </form>
                </Form>
              </motion.div>
              
              {/* Contact Info */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                  <p className="mb-8 text-gray-400">
                    Feel free to reach out to us through your preferred method of communication.
                    We're here to answer your questions and discuss your project needs.
                  </p>
                </motion.div>
                
                <motion.div
                  className="space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {contactInfo.map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start"
                      variants={itemVariants}
                    >
                      <div className="p-3 rounded-lg bg-primary-light mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-1">{item.title}</h4>
                        <p className="text-gray-400">{item.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}