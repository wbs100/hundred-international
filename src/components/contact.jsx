import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
                        <p className="text-xl text-gray-600">Ready to expand your business globally? Contact us today.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <span className="text-blue-700 text-xl mt-1 mr-3">✉️</span>
                                    <div>
                                        <h4 className="font-medium text-gray-700">Email</h4>
                                        <p className="text-gray-600">contact@hundredinternational.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-blue-700 text-xl mt-1 mr-3">📞</span>
                                    <div>
                                        <h4 className="font-medium text-gray-700">Phone</h4>
                                        <p className="text-gray-600">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-blue-700 text-xl mt-1 mr-3">📍</span>
                                    <div>
                                        <h4 className="font-medium text-gray-700">Headquarters</h4>
                                        <p className="text-gray-600">123 International Way, Suite 100<br />New York, NY 10001, USA</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-8">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Global Offices</h3>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">London</span>
                                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Hong Kong</span>
                                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Dubai</span>
                                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Singapore</span>
                                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Sydney</span>
                                </div>
                            </div>
                        </div>
                        
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-700 focus:ring-opacity-20 transition-all duration-300"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-700 focus:ring-opacity-20 transition-all duration-300"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-700 focus:ring-opacity-20 transition-all duration-300"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                                <textarea 
                                    id="message" 
                                    rows="5" 
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-700 focus:ring-opacity-20 transition-all duration-300"
                                    required
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-medium transition duration-300 w-full md:w-auto"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;