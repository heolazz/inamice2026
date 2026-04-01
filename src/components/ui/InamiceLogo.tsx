import React from 'react';

const InamiceLogo = ({ theme = 'light', size = 'sm' }: { theme?: 'light' | 'dark' | 'white', size?: 'sm' | 'lg' | 'xl' }) => {
    const logoSrc = theme === 'white' ? '/logo/inamice_logo_putih.png' : '/logo/inamice_logo_warna.png';

    const containerClasses = {
        sm: 'h-14 md:h-16 w-auto',
        lg: 'h-24 md:h-32 w-auto',
        xl: 'w-full max-w-[320px] sm:max-w-[480px] md:max-w-[700px] lg:max-w-[850px] flex justify-center'
    };

    return (
        <div className={`relative select-none cursor-pointer shrink-0 ${containerClasses[size]}`}>
            <img
                src={logoSrc}
                alt="INAMICE 2026 Logo"
                className={`${size === 'xl' ? 'w-full h-auto' : 'w-auto h-full'} object-contain`}
            />
        </div>
    );
};

export default InamiceLogo;
