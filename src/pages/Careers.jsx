import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiDollarSign, FiClock, FiUsers, FiAward, FiCoffee } from 'react-icons/fi';
import HeroSection from '../components/layout/HeroSection';

// Job openings data
const jobOpenings = [
  {
    id: 1,
    title: "3D Animator",
    type: "Full-time",
    location: "Bangalore / Remote",
    department: "Animation",
    description: "Create stunning 3D animations for various projects including commercials, explainer videos, and product visualizations.",
    responsibilities: [
      "Develop high-quality 3D animations",
      "Collaborate with creative team",
      "Meet project deadlines",
      "Participate in creative brainstorming"
    ],
    requirements: [
      "3+ years experience in 3D animation",
      "Proficient in Blender/Maya/Cinema4D",
      "Strong portfolio demonstrating skills",
      "Knowledge of motion principles"
    ]
  },
  {
    id: 2,
    title: "Motion Graphics Designer",
    type: "Full-time",
    location: "Bangalore",
    department: "Design",
    description: "Create compelling motion graphics for digital campaigns, social media, and video content.",
    responsibilities: [
      "Design and animate motion graphics",
      "Work with After Effects and Premiere",
      "Collaborate with video team",
      "Maintain brand consistency"
    ],
    requirements: [
      "2+ years motion graphics experience",
      "Expert in After Effects",
      "Strong design fundamentals",
      "Understanding of typography"
    ]
  },
  {
    id: 3,
    title: "Digital Marketing Specialist",
    type: "Contract",
    location: "Remote",
    department: "Marketing",
    description: "Develop and implement digital marketing strategies to promote our services and client projects.",
    responsibilities: [
      "Manage social media channels",
      "Create content calendars",
      "Analyze campaign performance",
      "Optimize SEO strategies"
    ],
    requirements: [
      "Proven digital marketing experience",
      "Knowledge of SEO/SEM",
      "Analytical mindset",
      "Excellent communication skills"
    ]
  }
];

// Benefits data
const benefits = [
  {
    icon: <FiDollarSign className="text-3xl" />,
    title: "Competitive Salary",
    description: "We offer industry-standard compensation with regular reviews"
  },
  {
    icon: <FiClock className="text-3xl" />,
    title: "Flexible Hours",
    description: "Work when you're most productive with our flexible schedule options"
  },
  {
    icon: <FiUsers className="text-3xl" />,
    title: "Creative Team",
    description: "Collaborate with talented professionals in a supportive environment"
  },
  {
    icon: <FiAward className="text-3xl" />,
    title: "Growth Opportunities",
    description: "Regular training and opportunities for career advancement"
  },
  {
    icon: <FiBriefcase className="text-3xl" />,
    title: "Remote Options",
    description: "Work from our office or remotely - your choice"
  },
  {
    icon: <FiCoffee className="text-3xl" />,
    title: "Creative Culture",
    description: "Regular team events, creative sessions, and a stocked kitchen"
  }
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Careers = () => {
  const [selectedJob, setSelectedJob] = React.useState(null);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    resume: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Application submitted:', formData);
    alert('Application submitted successfully!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      message: '',
      resume: null
    });
  };

  return (
    <>
      <HeroSection 
        title="Join Our Team" 
        subtitle="Build your career with a creative team that values innovation and collaboration."
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Careers' }]}
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
      
      {/* Introduction Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Grow With InvertVisuals
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              We're always looking for talented individuals to join our team of creatives, 
              strategists, and innovators. If you're passionate about visual storytelling 
              and creating impactful work, we'd love to hear from you.
            </motion.p>
          </div>

          {/* Benefits Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-blue-600 mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Current Openings Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Openings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our available positions and find your perfect fit
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {jobOpenings.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`bg-white rounded-lg shadow-md overflow-hidden border-l-4 ${selectedJob?.id === job.id ? 'border-blue-600' : 'border-transparent'} transition-all duration-300`}
              >
                <div 
                  className="p-6 cursor-pointer" 
                  onClick={() => setSelectedJob(selectedJob?.id === job.id ? null : job)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                        <span>{job.type}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.department}</span>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800">
                      {selectedJob?.id === job.id ? 'Hide Details' : 'View Details'}
                    </button>
                  </div>

                  {selectedJob?.id === job.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <p className="text-gray-700 mb-4">{job.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">Responsibilities:</h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span className="text-gray-600">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">Requirements:</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span className="text-gray-600">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <button 
                        onClick={() => {
                          setFormData(prev => ({ ...prev, position: job.title }));
                          document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
                      >
                        Apply Now
                      </button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* No matching position */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <h3 className="text-xl font-medium text-gray-700 mb-4">
              Don't see a position that matches your skills?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always interested in meeting talented people. Send us your resume and 
              we'll contact you when a position becomes available.
            </p>
            <button 
              onClick={() => document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-md transition-colors"
            >
              Submit General Application
            </button>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
              <p className="text-xl mb-8">
                At InvertVisuals, we foster a creative, collaborative environment where 
                innovation thrives and every team member's voice is valued.
              </p>
              
              <div className="space-y-4">
                {[
                  "Creative freedom with professional guidance",
                  "Regular skill development workshops",
                  "Flat hierarchy with open communication",
                  "Work-life balance initiatives",
                  "Fun team events and outings"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <svg className="w-6 h-6 text-blue-300 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              ].map((img, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="rounded-lg overflow-hidden aspect-square"
                >
                  <img 
                    src={img} 
                    alt="Team culture" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 md:p-12 rounded-xl shadow-md"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Apply Now</h2>
            <p className="text-gray-600 mb-8">
              {formData.position 
                ? `Applying for: ${formData.position}`
                : "Submit your application and we'll get back to you soon."}
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Position*</label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us why you'd be a great fit..."
                ></textarea>
              </div>
              
              <div className="mb-8">
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">Resume/CV*</label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  required
                  accept=".pdf,.doc,.docx"
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                <p className="mt-1 text-xs text-gray-500">PDF, DOC, or DOCX (Max. 5MB)</p>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors"
              >
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Careers;