import React, { useState } from 'react';
import { Search, FileText, Clock, CheckCircle2 } from 'lucide-react';

const Badge = ({ status }) => {
  const variants = {
    Pending: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    'In Progress': 'bg-blue-50 text-blue-800 border-blue-200',
    Resolved: 'bg-green-50 text-green-800 border-green-200',
  };
  const iconMap = {
    Pending: <Clock className="h-4 w-4" />,
    'In Progress': <FileText className="h-4 w-4" />,
    Resolved: <CheckCircle2 className="h-4 w-4" />,
  };
  return (
    <span className={`inline-flex items-center gap-1.5 rounded border px-2.5 py-1 text-xs font-medium ${variants[status] || variants.Pending}`}>
      {iconMap[status] || iconMap.Pending}
      {status}
    </span>
  );
};

const ComplaintTracker = ({ findComplaint }) => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const r = findComplaint?.(query);
    setResult(r || null);
    setSearched(true);
  };

  return (
    <section id="track" className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-semibold text-[#0D47A1]">Track Your Complaint</h2>
        <p className="mt-2 text-gray-700">Enter your Complaint ID or mobile number to view the latest status.</p>

        <form onSubmit={handleSearch} className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
          <div className="relative w-full sm:w-[420px]">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
              className="w-full rounded-md border border-gray-300 py-3 pl-9 pr-3 focus:border-[#0D47A1] focus:outline-none focus:ring-2 focus:ring-[#0D47A1]/20"
              placeholder="e.g., PH-12345678 or 9876543210"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center rounded-md bg-[#0D47A1] px-6 py-3 font-medium text-white hover:bg-[#0c3e8e] focus:outline-none focus:ring-2 focus:ring-[#0D47A1]/30"
          >
            Search
          </button>
        </form>

        {searched && (
          <div className="mt-8">
            {result ? (
              <div className="rounded-lg border border-gray-200 bg-[#F5F5F5] p-6">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-sm text-gray-600">Complaint ID</p>
                    <p className="text-lg font-semibold text-gray-900">{result.id}</p>
                  </div>
                  <Badge status={result.status} />
                </div>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm text-gray-600">Reported By</p>
                    <p className="font-medium">{result.fullName}</p>
                    <p className="text-sm text-gray-600">Contact</p>
                    <p className="font-medium">{result.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="font-medium break-words">{result.location}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-600">Remarks</p>
                  <p className="font-medium">{result.remarks}</p>
                </div>
              </div>
            ) : (
              <div className="rounded-md border border-red-200 bg-red-50 p-4 text-red-800">
                No matching complaint found. Please verify your details and try again.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ComplaintTracker;
