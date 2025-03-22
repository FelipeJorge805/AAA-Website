import React from 'react';
import {
  MessageSquare,
  Phone,
  Share2,
  Globe,
} from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';
import { ContactForm } from '../components/ContactForm';

const services = [
  {
    title: 'Chatbot for Customer Service',
    description: 'Enhance customer satisfaction with instant, 24/7 support through our AI-powered chatbots.',
    Icon: MessageSquare,
  },
  {
    title: 'Virtual Receptionist Phone Caller',
    description: 'Seamless, human-like interactions to manage calls efficiently and professionally.',
    Icon: Phone,
  },
  {
    title: 'Social Media Interactions',
    description: 'Boost your online presence with timely posts and responsive messaging.',
    Icon: Share2,
  },
  {
    title: 'Website Development',
    description: 'Create user-friendly websites that drive engagement and conversions.',
    Icon: Globe,
  },
];

export function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-16 sm:py-24">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Transform Your Business</span>
                <span className="block text-blue-600">with AI Automation</span>
              </h1>
              <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                Streamline operations, enhance customer experience, and boost productivity with our cutting-edge AI solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get Started Today
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              Ready to transform your business? Let's discuss how we can help.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}