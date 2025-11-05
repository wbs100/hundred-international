const Testimonials = () => {
    const testimonials = [
        {
            quote: "Hundred International transformed our international supply chain with their expertise. Their team is professional and responsive.",
            name: "John Smith",
            title: "CEO, TechGlobal Inc.",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
            quote: "Their financial services helped us navigate complex cross-border transactions with ease. Highly recommended!",
            name: "Maria Gonzalez",
            title: "CFO, EuroTrade Group",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
            quote: "The relocation service made our international move seamless. Every detail was handled professionally.",
            name: "David Chen",
            title: "Director, Asia-Pacific Ops",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
    ];

    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Trusted Worldwide</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">What our international partners say about our services</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                            <div className="text-blue-700 mb-4 opacity-10 text-3xl">
                                💬
                            </div>
                            <p className="text-gray-600 mb-6">"{testimonial.quote}"</p>
                            <div className="flex items-center">
                                <img 
                                    src={testimonial.avatar} 
                                    alt={testimonial.name} 
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;