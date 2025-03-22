import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';

export function Contact() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
              Get in touch
            </h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                Have questions about our services? We're here to help. Send us a
                message and we'll respond as soon as possible.
              </p>
            </div>
            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>contact@aiagency.com</p>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>123 AI Street</p>
                  <p>Tech City, TC 12345</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
              Send us a message
            </h2>
            <div className="mt-9">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}