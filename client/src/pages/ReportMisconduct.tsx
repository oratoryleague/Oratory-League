import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme';

const ReportMisconduct = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    incidentType: '',
    date: '',
    location: '',
    description: '',
    evidence: null as File | null
  });
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionBgClass = theme === 'dark' ? 'bg-dark' : 'bg-cream';
  const textClass = theme === 'dark' ? 'text-white' : 'text-dark';
  const cardBgClass = theme === 'dark' ? 'bg-darkAccent' : 'bg-white';
  const borderClass = theme === 'dark' ? 'border-white/10' : 'border-dark/10';
  const inputBgClass = theme === 'dark' ? 'bg-darkAccent' : 'bg-white';
  const inputBorderClass = theme === 'dark' ? 'border-white/20' : 'border-dark/20';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        evidence: e.target.files![0]
      }));
    }
  };

  return (
    <div className={`${sectionBgClass} min-h-screen pt-24 pb-20`}>
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-6xl font-header mb-4">
            Report <span className="text-gold">Misconduct</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${textClass}`}>
            Help us maintain a safe and respectful community
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          className={`${cardBgClass} rounded-xl shadow-lg p-8 border ${borderClass} mb-12`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <p className={`text-lg ${textClass} mb-4`}>
            We take all reports of misconduct seriously. This form allows you to report any violations of our Code of Conduct or other concerning behavior.
          </p>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Your report will be handled confidentially and reviewed by our moderation team.
          </p>
        </motion.div>

        {/* Report Form */}
        <motion.div
          className={`${cardBgClass} rounded-xl shadow-lg p-8 border ${borderClass}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${textClass}`}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  title="Your Name"
                  className={`w-full px-4 py-2 rounded-lg border ${inputBorderClass} ${inputBgClass} ${textClass}`}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${textClass}`}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  title="Email Address"
                  className={`w-full px-4 py-2 rounded-lg border ${inputBorderClass} ${inputBgClass} ${textClass}`}
                />
              </div>
            </div>

            {/* Incident Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${textClass}`}>
                  Type of Incident
                </label>
                <select
                  name="incidentType"
                  value={formData.incidentType}
                  onChange={handleChange}
                  required
                  title="Type of Incident"
                  className={`w-full px-4 py-2 rounded-lg border ${inputBorderClass} ${inputBgClass} ${textClass}`}
                >
                  <option value="">Select an option</option>
                  <option value="harassment">Harassment</option>
                  <option value="discrimination">Discrimination</option>
                  <option value="inappropriate">Inappropriate Behavior</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${textClass}`}>
                  Date of Incident
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  title="Date of Incident"
                  className={`w-full px-4 py-2 rounded-lg border ${inputBorderClass} ${inputBgClass} ${textClass}`}
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${textClass}`}>
                Where did this occur?
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                title="Location of Incident"
                className={`w-full px-4 py-2 rounded-lg border ${inputBorderClass} ${inputBgClass} ${textClass}`}
              />
            </div>

            {/* Description */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${textClass}`}>
                Description of the Incident
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={6}
                title="Description of the Incident"
                className={`w-full px-4 py-2 rounded-lg border ${inputBorderClass} ${inputBgClass} ${textClass}`}
              />
            </div>

            {/* Evidence Upload */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${textClass}`}>
                Upload Evidence (Optional)
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                title="Upload Evidence"
                className={`w-full px-4 py-2 rounded-lg border ${inputBorderClass} ${inputBgClass} ${textClass}`}
              />
              <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                You can upload screenshots, photos, or documents (max 5MB)
              </p>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-gold text-dark px-8 py-4 rounded-lg font-medium hover:bg-goldLight transition-colors"
              >
                Submit Report
              </button>
            </div>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className={`${cardBgClass} rounded-xl shadow-lg p-8 border ${borderClass} mt-12`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <h2 className={`text-2xl font-bold mb-4 ${textClass}`}>Need Immediate Assistance?</h2>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
            If you need immediate assistance or have urgent concerns, please contact our moderation team directly:
          </p>
          <div className="space-y-2">
            <p className={`${textClass}`}>
              <i className="fa-solid fa-envelope mr-2 text-gold"></i>
              Email: support@oratoryleague.com
            </p>
            <p className={`${textClass}`}>
              <i className="fa-solid fa-phone mr-2 text-gold"></i>
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReportMisconduct; 