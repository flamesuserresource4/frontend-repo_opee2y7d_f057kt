import React, { useState } from 'react';
import { CheckCircle, UploadCloud } from 'lucide-react';

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  location: '',
  description: '',
  photo: null,
};

const ComplaintForm = ({ onSubmit }) => {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      setForm((f) => ({ ...f, photo: files && files[0] ? files[0] : null }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate ID generation and submission
    const complaintId = `PH-${Date.now().toString().slice(-8)}`;
    const payload = {
      id: complaintId,
      status: 'Pending',
      remarks: 'Received and queued for inspection',
      createdAt: new Date().toISOString(),
      ...form,
    };

    try {
      // Parent handler can persist or process further (backend-ready)
      onSubmit?.(payload);
      setSuccess({ id: complaintId, name: form.fullName });
      setForm(initialState);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="report" className="bg-[#F5F5F5] py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-semibold text-[#0D47A1]">Report a Pothole</h2>
        <p className="mt-2 text-gray-700">Provide the details below so our teams can act quickly.</p>

        {success && (
          <div className="mt-6 flex items-start gap-3 rounded-md border border-green-200 bg-green-50 p-4 text-green-800">
            <CheckCircle className="mt-0.5 h-5 w-5" />
            <div>
              <p className="font-medium">Complaint submitted successfully.</p>
              <p className="text-sm">Thank you, {success.name || 'Citizen'}. Your Complaint ID is <span className="font-semibold">{success.id}</span>. Keep it to track status.</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-6 rounded-lg bg-white p-6 shadow sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#0D47A1] focus:outline-none focus:ring-2 focus:ring-[#0D47A1]/20"
              placeholder="Jane Doe"
            />
          </div>

          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#0D47A1] focus:outline-none focus:ring-2 focus:ring-[#0D47A1]/20"
              placeholder="jane@example.com"
            />
          </div>

          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#0D47A1] focus:outline-none focus:ring-2 focus:ring-[#0D47A1]/20"
              placeholder="9876543210"
            />
          </div>

          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#0D47A1] focus:outline-none focus:ring-2 focus:ring-[#0D47A1]/20"
              placeholder="Street name, landmark, city"
            />
            <p className="mt-1 text-xs text-gray-500">Tip: You can paste a Google Maps link here.</p>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={4}
              required
              className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#0D47A1] focus:outline-none focus:ring-2 focus:ring-[#0D47A1]/20"
              placeholder="Describe the pothole size, depth, traffic impact, and any safety concerns"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Photo Upload</label>
            <label className="mt-2 flex cursor-pointer items-center justify-between gap-4 rounded-md border border-dashed border-gray-300 p-4 hover:border-[#0D47A1]">
              <div className="flex items-center gap-3">
                <UploadCloud className="h-5 w-5 text-gray-600" />
                <span className="text-sm text-gray-700">
                  {form.photo ? form.photo.name : 'Choose a clear photo of the pothole (optional)'}
                </span>
              </div>
              <input type="file" name="photo" accept="image/*" onChange={handleChange} className="hidden" />
            </label>
          </div>

          <div className="sm:col-span-2 flex items-center justify-end gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center rounded-md bg-[#0D47A1] px-6 py-3 font-medium text-white hover:bg-[#0c3e8e] focus:outline-none focus:ring-2 focus:ring-[#0D47A1]/30 disabled:opacity-60"
            >
              {submitting ? 'Submitting…' : 'Submit Complaint'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ComplaintForm;
