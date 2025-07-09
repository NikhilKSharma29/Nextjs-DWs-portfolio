import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
   
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'First name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitStatus({ type: 'error', message: 'Please fix the errors in the form' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', lastName: '', email: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: result.message || 'Something went wrong' });
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="min-h-screen bg-white text-black px-6 py-16 md:px-20">
      
      <h1 className="text-[10vw] md:text-[8vw] font-extrabold leading-none mb-10">
        Contact me
      </h1>

     
      {submitStatus.message && (
        <div className={`mb-6 p-4 rounded-md ${
          submitStatus.type === 'success' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {submitStatus.message}
        </div>
      )}

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>sharmanikhil2188@gmail.com</p>
          <p>+91 9729729729</p>
          <p>
           Indore, INDIA
          </p>
        </div>

        {/* Rightside Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <label className="block text-sm font-semibold">Name</label>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <input
                type="text"
                placeholder="First Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-white border-b border-black w-full focus:outline-none py-2"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div className="w-full">
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-white border-b border-black w-full focus:outline-none py-2"
              />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
            </div>
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white border-b border-black w-full focus:outline-none py-2"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <textarea
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-white border-b border-black w-full focus:outline-none py-2 h-24 resize-none"
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>

          <div className="border-t border-black pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-black text-white py-3 px-6 rounded-md transition-colors flex justify-center items-center ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-800'
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact