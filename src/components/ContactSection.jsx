import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactCard = ({ icon: Icon, title, children }) => (
  <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
    <div className="rounded-md bg-[#0D47A1]/10 p-2 text-[#0D47A1]">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <p className="font-medium text-gray-900">{title}</p>
      <div className="mt-1 text-gray-700">{children}</div>
    </div>
  </div>
);

const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#F5F5F5] py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-semibold text-[#0D47A1]">Contact Us</h2>
        <p className="mt-2 text-gray-700">Reach out to our road maintenance helpdesk for support and queries.</p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <ContactCard icon={MapPin} title="Office Address">
            Public Works Department, City Hall, Sector 12, Downtown
          </ContactCard>
          <ContactCard icon={Phone} title="Phone">
            +1 (555) 123-4567 (Mon–Fri, 9am–6pm)
          </ContactCard>
          <ContactCard icon={Mail} title="Support Email">
            support@cityroads.gov
          </ContactCard>
        </div>

        <div className="mt-8 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="aspect-[16/9] w-full">
            <iframe
              title="City Map"
              className="h-full w-full"
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.20%2C28.61%2C77.30%2C28.70&layer=mapnik"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
