import { useState } from 'react';
import { Star, Upload } from 'lucide-react';

export default function TestimonialForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    company: 'Private Client',
    project: '',
    rating: 0,
    testimonial: '',
    image: null
  });
  
  const [hoverRating, setHoverRating] = useState(0);
  const [status, setStatus] = useState('idle');
  const [imagePreview, setImagePreview] = useState('');

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === 'image') {
      const file = files[0];
      setFormData(prev => ({
        ...prev,
        image: file
      }));
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.rating === 0) {
      alert('Please select a rating');
      return;
    }
    
    setStatus('submitting');

    try {
      // First upload the image if there is one
      let imageUrl = '';
      if (formData.image) {
        const formDataImage = new FormData();
        formDataImage.append('image', formData.image);
        // You'll need to implement your own image upload endpoint
        // const uploadResponse = await fetch('/api/upload', {
        //   method: 'POST',
        //   body: formDataImage
        // });
        // const { url } = await uploadResponse.json();
        // imageUrl = url;
        // For now, we'll use a placeholder
        imageUrl = 'https://images.unsplash.com/photo-1634231647709-06609f7dd3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU2MjAzNTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
      }

      const response = await fetch('https://formspree.io/f/xyzdeqjp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          role: formData.role,
          company: formData.company,
          project: formData.project,
          rating: formData.rating,
          text: formData.testimonial,
          image: imageUrl,
          subject: 'New Testimonial Submission',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          role: '',
          company: 'Private Client',
          project: '',
          rating: 0,
          testimonial: '',
          image: null
        });
        setImagePreview('');
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Share Your Experience</h3>
      
      {status === 'success' ? (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
          <strong className="font-bold">Thank you!</strong>
          <span className="block sm:inline"> Your testimonial has been submitted for review.</span>
        </div>
      ) : status === 'error' ? (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> Something went wrong. Please try again later.</span>
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#896267] focus:ring-2 focus:ring-[#896267]/20 outline-none transition-colors duration-200 text-gray-900"
              placeholder="John Doe"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#896267] focus:ring-2 focus:ring-[#896267]/20 outline-none transition-colors duration-200 text-gray-900"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Your Role</label>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#896267] focus:ring-2 focus:ring-[#896267]/20 outline-none transition-colors duration-200 text-gray-900"
              placeholder="e.g., Homeowner, Business Owner"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#896267] focus:ring-2 focus:ring-[#896267]/20 outline-none transition-colors duration-200 text-gray-900"
              placeholder="Company name (optional)"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="project" className="block text-sm font-medium text-gray-700">Project Name</label>
          <input
            type="text"
            id="project"
            name="project"
            value={formData.project}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#896267] focus:ring-2 focus:ring-[#896267]/20 outline-none transition-colors duration-200 text-gray-900"
            placeholder="e.g., Custom Home Build, Office Renovation"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Your Rating</label>
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className="focus:outline-none"
                onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
              >
                <Star 
                  className={`w-8 h-8 ${(hoverRating || formData.rating) >= star 
                    ? 'fill-yellow-400 text-yellow-400' 
                    : 'text-gray-300'}`} 
                />
              </button>
            ))}
            <span className="ml-2 text-gray-600">
              {formData.rating > 0 ? `${formData.rating} star${formData.rating > 1 ? 's' : ''}` : 'Rate us'}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700">
            Your Testimonial
          </label>
          <textarea
            id="testimonial"
            name="testimonial"
            rows={5}
            value={formData.testimonial}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 text-gray-900 rounded-lg border border-gray-300 focus:border-[#896267] focus:ring-2 focus:ring-[#896267]/20 outline-none transition-colors duration-200 resize-vertical"
            placeholder="Share your experience with STONEWISE Construction..."
            minLength="10"
          />
          <p className="text-sm text-gray-500">Minimum 10 characters</p>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Upload Photo (Optional)
          </label>
          <div className="mt-1 flex items-center">
            <label className="relative cursor-pointer bg-white rounded-md font-medium text-[#896267] hover:text-[#563D40] focus-within:outline-none">
              <span className="flex items-center">
                <Upload className="w-5 h-5 mr-2" />
                {formData.image ? 'Change photo' : 'Upload photo'}
              </span>
              <input
                id="image"
                name="image"
                type="file"
                className="sr-only"
                onChange={handleInputChange}
                accept="image/*"
              />
            </label>
            {formData.image && (
              <span className="ml-2 text-sm text-gray-500">
                {formData.image.name}
              </span>
            )}
          </div>
          {imagePreview && (
            <div className="mt-2">
              <img 
                src={imagePreview} 
                alt="Preview" 
                className="h-24 w-24 rounded-full object-cover"
              />
            </div>
          )}
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className={`w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white ${
              status === 'submitting' 
                ? 'bg-gray-400' 
                : 'bg-[#896267] hover:bg-[#563D40]'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#896267] transition-colors`}
          >
            {status === 'submitting' ? 'Submitting...' : 'Submit Testimonial'}
          </button>
        </div>
      </form>
    </div>
  );
}
