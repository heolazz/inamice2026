import React from 'react';

const InamiceLogo = ({ theme = 'light', size = 'sm' }: { theme?: 'light' | 'dark' | 'white', size?: 'sm' | 'lg' | 'xl' }) => {
    const primaryTextColor = theme === 'light' ? 'text-inamice-blue' : 'text-white';
    const skylineBgColor = theme === 'light' ? 'bg-inamice-blue' : 'bg-white';
    const miceTextColor = theme === 'white' ? 'text-white' : 'text-inamice-orange';

    // Dimension tokens mapped by size for precise responsive scaling
    const sizes = {
        sm: {
            the9th: 'text-[0.6rem] md:text-[0.7rem]',
            skylineH: 'h-[0.6rem] md:h-[0.75rem]',
            inaMice: 'text-[2.2rem] md:text-[2.6rem]',
            year: 'text-[0.5rem] md:text-[0.55rem]',
            bottom: 'text-[0.35rem] md:text-[0.4rem]',
            gap: 'mr-0.5 md:mr-1',
            bottomMt: 'mt-[1px]',
            mbTopRow: 'mb-[-1px] md:mb-[-2px]'
        },
        lg: {
            the9th: 'text-[1.2rem] md:text-[1.5rem]',
            skylineH: 'h-[1.1rem] md:h-[1.4rem]',
            inaMice: 'text-[4.5rem] md:text-[5.5rem]',
            year: 'text-[0.95rem] md:text-[1.2rem]',
            bottom: 'text-[0.8rem] md:text-[1rem]',
            gap: 'mr-1 md:mr-2',
            bottomMt: 'mt-1 md:mt-1.5',
            mbTopRow: 'mb-[-1px] md:mb-[-2px]'
        },
        xl: {
            the9th: 'text-[1.6rem] md:text-[2.3rem]',
            skylineH: 'h-[1.6rem] md:h-[2.1rem]',
            inaMice: 'text-[6rem] md:text-[8rem]',
            year: 'text-[1.25rem] md:text-[1.67rem]',
            bottom: 'text-[1.05rem] md:text-[1.43rem]',
            gap: 'mr-1 md:mr-3',
            bottomMt: 'mt-2 md:mt-3',
            mbTopRow: 'mb-[-2px] md:mb-[-4px]'
        }
    };

    const s = sizes[size];

    return (
        <div className="flex flex-col select-none cursor-pointer w-fit shrink-0">
            {/* Top Row: The 9th + Skyline */}
            <div className={`flex items-end justify-between w-full ${s.mbTopRow}`}>
                <span className={`${s.the9th} font-bold ${primaryTextColor} leading-none tracking-tight pr-1.5 md:pr-2`}>The 9th</span>

                {/* SVG Mask allows us to natively tint the wikimedia skyline PNG accurately via background colors */}
                <div
                    className={`flex-grow ${s.skylineH} ${skylineBgColor}`}
                    style={{
                        WebkitMaskImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Jakarta_Skyline_Silhouette.svg/2560px-Jakarta_Skyline_Silhouette.svg.png')",
                        WebkitMaskSize: "100% 100%",
                        WebkitMaskPosition: "bottom right",
                        WebkitMaskRepeat: "no-repeat",
                        maskImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Jakarta_Skyline_Silhouette.svg/2560px-Jakarta_Skyline_Silhouette.svg.png')",
                        maskSize: "100% 100%",
                        maskPosition: "bottom right",
                        maskRepeat: "no-repeat"
                    }}
                />
            </div>

            {/* Middle Row: INAMICE 2026 */}
            <div className="flex items-stretch justify-between w-full">
                <div className="flex leading-[0.8] tracking-[0.02em]">
                    <span className={`${s.inaMice} font-black ${primaryTextColor}`}>INA</span>
                    <span className={`${s.inaMice} font-black ${miceTextColor} ${s.gap}`}>MICE</span>
                </div>

                {/* Rotated 2026 */}
                <div className="flex flex-col justify-center">
                    <span
                        className={`${s.year} font-bold ${primaryTextColor} tracking-widest leading-none pt-1 shrink-0`}
                        style={{ writingMode: 'vertical-rl' }}
                    >
                        2026
                    </span>
                </div>
            </div>

            {/* Bottom Row */}
            <div className={`flex justify-between items-center w-full ${s.bottomMt}`}>
                {['Indonesia', 'MICE', 'Conference', 'And', 'Exhibition'].map((word, i) => (
                    <span key={i} className={`${s.bottom} font-extrabold ${primaryTextColor} leading-none`}>
                        {word}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default InamiceLogo;
