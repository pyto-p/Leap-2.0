"use client";

import { ChangeEvent, FormEvent, useState } from 'react';

const JobPostForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    company: '',
    location: '',
    jobType: '',
    workplaceType: '',
    skills: '',
    requirements: '',
    salary: '',
    benefits: '',
    additionalInfo: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="bg-primary text-white text-center py-4 rounded-t-md">
        <h1 className="text-2xl font-bold bg-primary">Post a Job</h1>
      </div>
      <form className="bg-white p-8 rounded-md shadow-md" onSubmit={handleSubmit}>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Job Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Job Title</label>
              <input
                type="text"
                name="jobTitle"
                placeholder="Enter desired job title"
                value={formData.jobTitle}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Company</label>
              <input
                type="text"
                name="company"
                placeholder="Enter the name of the company"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Company Location</label>
            <input
              type="text"
              name="location"
              placeholder="Enter company's location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Job Type</label>
              <select
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select Job Type</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Gig">Gig</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Workplace Type</label>
              <select
                name="workplaceType"
                value={formData.workplaceType}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select Workplace Type</option>
                <option value="Remote">Remote</option>
                <option value="On-Site">On-Site</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-primary">Specification</h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Skills</label>
            <textarea
              name="skills"
              value={formData.skills}
              placeholder="Specify the skills"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              rows={3}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Requirements</label>
            <textarea
              name="requirements"
              value={formData.requirements}
              placeholder="Specify the requirements"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              rows={3}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Salary</label>
            <input
              type="number"
              name="salary"
              placeholder="Specify possible salary"
              value={formData.salary}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Benefits</label>
            <textarea
              name="benefits"
              value={formData.benefits}
              placeholder="Specify the benefits from the company"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              rows={3}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Additional Information</label>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              placeholder="Enter any additional information"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              rows={3}
            ></textarea>
          </div>
        </div>

        <div className="text-right">
          <button type="submit" className="bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary">Post</button>
        </div>
      </form>
    </div>
  );
};

export default JobPostForm;
