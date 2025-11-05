const Services = () => {
    const services = [
        {
            icon: "🌍",
            title: "Global Logistics",
            description: "Efficient worldwide transportation and customs clearance for your goods."
        },
        {
            icon: "💼",
            title: "Business Consulting", 
            description: "Strategic advice for international market expansion and operations."
        },
        {
            icon: "💰",
            title: "Financial Services",
            description: "Cross-border payments, currency exchange, and international financing."
        },
        {
            icon: "👥",
            title: "HR Solutions",
            description: "International recruitment, payroll, and compliance services."
        },
        {
            icon: "🏠",
            title: "Relocation Services",
            description: "Comprehensive support for individuals and families moving abroad."
        },
        {
            icon: "🛡️",
            title: "Risk Management",
            description: "Assessment and mitigation of international business risks."
        }
    ];

    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 scroll-animate">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Premium Services</h2>
                    <div className="w-20 h-1 bg-blue-700 mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className={`bg-white rounded-xl shadow-md overflow-hidden p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl scroll-animate delay-${(index % 4) * 100 + 100}`}>
                            <div className="text-blue-700 mb-4 text-4xl">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;