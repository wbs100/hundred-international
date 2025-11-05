const CustomHR = ({ 
    variant = 'default', 
    className = '', 
    showIcon = false, 
    icon = '✦',
    width = 'w-full'
}) => {
    const variants = {
        default: 'border-orange-500/30',
        solid: 'border-orange-500',
        gradient: 'bg-gradient-to-r from-black via-orange-500 to-black h-px border-0',
        dotted: 'border-orange-500/50 border-dotted border-t-2',
        dashed: 'border-orange-500/50 border-dashed border-t-2',
        thick: 'border-orange-500/40 border-t-4',
        glow: 'border-orange-500 shadow-lg shadow-orange-500/20',
        minimal: 'border-orange-300/20'
    };

    if (variant === 'gradient') {
        return (
            <div className={`flex items-center ${className}`}>
                <div className={`${width} ${variants[variant]} mx-auto`}></div>
                {showIcon && (
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black px-3">
                        <span className="text-orange-500 text-lg">{icon}</span>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className={`relative flex items-center ${className}`}>
            {showIcon ? (
                <>
                    <div className={`flex-1 border-t ${variants[variant]}`}></div>
                    <div className="px-4">
                        <span className="text-orange-500 text-lg font-bold">{icon}</span>
                    </div>
                    <div className={`flex-1 border-t ${variants[variant]}`}></div>
                </>
            ) : (
                <hr className={`${width} border-t ${variants[variant]} mx-auto`} />
            )}
        </div>
    );
};

export default CustomHR;
