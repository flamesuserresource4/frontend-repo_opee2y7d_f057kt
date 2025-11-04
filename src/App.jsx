import React, { useState } from 'react';
import HeroSection from './components/HeroSection.jsx';
import ComplaintForm from './components/ComplaintForm.jsx';
import ComplaintTracker from './components/ComplaintTracker.jsx';
import ContactSection from './components/ContactSection.jsx';
import { Shield } from 'lucide-react';

function App() {
  const [complaints, setComplaints] = useState([]);

  const handleComplaintSubmit = (payload) => {
    setComplaints((prev) => [payload, ...prev]);
  };

  const findComplaint = (query) => {
    const q = (query || '').trim().toLowerCase();
    if (!q) return null;
    return (
      complaints.find(
        (c) => c.id.toLowerCase() === q || (c.phone && c.phone.toLowerCase() === q)
      ) || null
    );
  };

  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      {/* Top Navigation */}
      <header className="sticky top-0 z-20 w-full border-b border-gray-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#0D47A1] text-white">
              <Shield className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold text-[#0D47A1]">City Roads Portal</span>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-gray-700 sm:flex">
            <a href="#report" className="hover:text-[#0D47A1]">Report</a>
            <a href="#track" className="hover:text-[#0D47A1]">Track</a>
            <a href="#contact" className="hover:text-[#0D47A1]">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <HeroSection />
        <ComplaintForm onSubmit={handleComplaintSubmit} />
        <ComplaintTracker findComplaint={findComplaint} />
        <ContactSection />
      </main>

      <footer className="border-t border-gray-200 bg-[#F5F5F5] py-8">
        <div className="mx-auto max-w-6xl px-6 text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()} City Roads & Infrastructure. All rights reserved. | Designed for accessibility and
            transparency.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
