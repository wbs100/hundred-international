import chamathka from "../assets/images/team/chamathka.jpg";
import mayura from "../assets/images/team/mayura.png";

const Testimonials = () => {
    const teamMembers = [
        {
            name: "Mayura Athukorala",
            title: "Our CEO",
            quote: "Great people make great companies. Here we are projecting our creativity for all the time.",
            avatar: mayura
        },
        {
            name: "Chamathka Prasad",
            title: "Our CTO", 
            quote: "Imagination creates reality, but we beautify your reality.",
            avatar: chamathka
        }
    ];

    const stats = [
        {
            icon: "🎯",
            number: "50+",
            label: "Projects Completed"
        },
        {
            icon: "😊",
            number: "100+", 
            label: "Happy Clients"
        },
        {
            icon: "🎓",
            number: "200+",
            label: "Students Trained"
        },
        {
            icon: "⭐",
            number: "5+",
            label: "Years Experience"
        }
    ];

    return (
        <section id="about" className="py-20 bg-black text-white">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 scroll-animate">
                    <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4 font-title">
                        What We Do & Who We Are
                    </h2>
                    <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
                </div>

                {/* Team Members */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 max-w-4xl mx-auto scroll-animate delay-100">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex items-start space-x-6">
                            <div className="flex-shrink-0">
                                <img 
                                    src={member.avatar}
                                    alt={member.name}
                                    className="w-20 h-20 rounded-full border-2 border-orange-500/30"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="text-gray-300 mb-4 font-paragraph leading-relaxed">
                                    {member.quote}
                                </p>
                                <h3 className="text-orange-400 font-bold text-lg font-title">{member.name}</h3>
                                <p className="text-gray-400 text-sm font-paragraph">{member.title}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Our Focus Section */}
                <div className="text-center mb-16 scroll-animate delay-200">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-title">
                        OUR FOCUS
                    </h3>
                    <div className="max-w-3xl mx-auto space-y-4">
                        <p className="text-gray-300 font-paragraph">
                            AT THE CORE,
                        </p>
                        <p className="text-orange-400 text-xl font-bold font-title">
                            WE MAKE COMPANIES FOR YOUR INNOVATIVE IDEAS.
                        </p>
                        <p className="text-gray-300 font-paragraph">
                            BUT THE POINT IS
                        </p>
                        <p className="text-orange-400 text-xl font-bold font-title">
                            WE SELL HERE OUR CREATIVITY
                        </p>
                        <p className="text-gray-300 font-paragraph">
                            TO ENTER THE BUSINESS WORLD.
                        </p>
                    </div>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto scroll-animate delay-300">
                    {stats.map((stat, index) => (
                        <div 
                            key={index} 
                            className="bg-gradient-to-br from-orange-900/20 to-black/50 p-6 rounded-2xl border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 text-center"
                        >
                            <div className="text-3xl mb-3">{stat.icon}</div>
                            <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-2 font-title">
                                {stat.number}
                            </div>
                            <div className="text-gray-300 text-sm font-paragraph">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;