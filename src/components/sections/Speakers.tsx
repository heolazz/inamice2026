import React from 'react';
import { SPEAKERS } from '../../constants';

const Speakers = () => {
    const keynote = SPEAKERS.find(s => s.type === "KEYNOTE SPEECH");
    const plenary1 = SPEAKERS.filter(s => s.type === "PLENARY SESSION 1");
    const plenary2 = SPEAKERS.filter(s => s.type === "PLENARY SESSION 2");

    return (
        <section id="main-event" className="bg-white pb-16 md:pb-24 -mb-32">
            {/* City Hero Card Section */}
            <div className="relative w-full max-w-10xl mx-auto px-4 md:px-8 h-[420px] sm:h-[500px] md:h-[600px] mb-8 md:mb-16">
                {/* Background Skyline */}
                <div className="absolute inset-2 sm:inset-4 md:inset-x-8 rounded-2xl md:rounded-3xl overflow-hidden z-0">
                    <img
                        src="/img/section-speaker.jpg"
                        className="w-full h-full object-cover opacity-90"
                        alt="Speakers Background"
                    />
                    {/* Fading gradient at the bottom so it blends into white */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
                </div>

                {/* Floating Quote Card */}
                <div className="relative z-10 w-full h-full flex items-center justify-center px-2 sm:px-4 translate-y-6 md:translate-y-12">
                    <div className="p-[4px] md:p-[5px] bg-gradient-to-r from-inamice-blue to-inamice-orange rounded-tr-[3rem] rounded-bl-[3rem] md:rounded-tr-[5rem] md:rounded-bl-[5rem] rounded-tl-sm rounded-br-sm shadow-2xl w-full max-w-4xl">
                        <div className="bg-white w-full rounded-tr-[calc(3rem-4px)] rounded-bl-[calc(3rem-4px)] md:rounded-tr-[calc(5rem-5px)] md:rounded-bl-[calc(5rem-5px)] rounded-tl-sm rounded-br-sm p-5 sm:p-6 md:p-10 text-center">
                            <h3 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-inamice-blue-1 mb-3 md:mb-6 leading-tight max-w-2xl mx-auto uppercase">
                                Main Event
                            </h3>
                            <p className="text-inamice-blue-1 font-semibold text-[14px] sm:text-base md:text-[20px] leading-relaxed max-w-3xl mx-auto text-center">
                                Consisting two plenary sessions with three subtopics in each plenary, the main event will discuss and answer the on-going concern regarding the MICE industry position within Jakarta&rsquo;s Smart Economy framework from reliable speakers across the industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-container">

                {/* Section Header */}
                <div className="flex flex-col items-center mb-10 md:mb-16 -mt-16 md:-mt-32">
                    <div className="flex items-center mb-2">
                        <img src="/img/acc-fusion.png" alt="ornament" className="w-20 md:w-28 h-auto object-contain" />
                    </div>
                    <div className="bg-inamice-orange text-white px-4 py-2 w-full max-w-xs text-center shadow-lg">
                        <h2 className="text-xl md:text-2xl font-bold uppercase drop-shadow-md">SPEAKERS & TOPIC</h2>
                    </div>
                </div>

                {/* Keynote Speech */}
                <div className="flex flex-col items-center text-center mb-12 md:mb-16 max-w-4xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-inamice-blue-3 uppercase mb-2">KEYNOTE SPEECH</h3>
                    <p className="text-inamice-blue-3 text-sm md:text-md font-regular mb-8 md:mb-12 px-4">&ldquo;Positioning MICE as a Strategic Lever for Jakarta&rsquo;s Urban Economy&rdquo;</p>

                    <div className="flex flex-col items-center mb-8 md:mb-12">
                        {/* Keynote Frame Wrapper */}
                        <div className="relative w-[220px] h-[280px] sm:w-[260px] sm:h-[340px] md:w-[350px] md:h-[450px] mb-6 md:mb-8">
                            {/* The Gradient Frame */}
                            <div className="absolute inset-0 bg-gradient-to-r from-inamice-blue to-inamice-orange rounded-tr-[3.5rem] rounded-bl-[3.5rem] md:rounded-tr-[5rem] md:rounded-bl-[5rem] rounded-tl-none rounded-br-none" />
                            {/* The Inner "Gap" and Image Box */}
                            <div className="absolute inset-[5px] md:inset-[6px] bg-white rounded-tr-[calc(3.5rem-5px)] rounded-bl-[calc(3.5rem-5px)] md:rounded-tr-[calc(5rem-6px)] md:rounded-bl-[calc(5rem-6px)] rounded-tl-none rounded-br-none overflow-hidden">
                                <img
                                    src={keynote?.image}
                                    alt={keynote?.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <h4 className="text-2xl md:text-3xl font-extrabold text-inamice-blue-3 mt-2 md:mt-4">{keynote?.name}</h4>
                        <p className="text-inamice-blue-3 text-sm md:text-md font-medium mb-3 md:mb-4 tracking-wide">{keynote?.role}</p>
                        <p className="text-inamice-blue-3 text-sm md:text-md text-justify max-w-xl px-4 leading-relaxed opacity-80 mb-4 md:mb-6 font-medium">
                            The Keynote Speech will establish the strategic direction for the event, showcasing the Pemerintah
                            Provinsi DKI Jakarta&rsquo;s commitment to enhancing the urban economy through MICE sector development
                            as part of Smart Economy. It will emphasize the role of MICE in Jakarta&rsquo;s long-term development
                            strategy and the need for collaboration among government, industry, and ecosystem participants
                        </p>
                    </div>
                    {/* Blue Separator Line */}
                    <div className="w-full h-[3px] md:h-[4px] bg-inamice-blue/40 mt-4 md:mt-8"></div>
                </div>

                {/* Plenary Session 1 */}
                <div className="flex flex-col items-center text-center mb-12 md:mb-16">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-inamice-blue-3 uppercase mb-2">PLENARY SESSION 1</h3>
                    <p className="text-inamice-blue-3 text-sm sm:text-base md:text-lg font-extrabold mb-3 md:mb-4 px-4">&ldquo;Building Smart Economy Foundations in the MICE Industry: <br className="hidden md:block" />Digital Transformation, Industry Perspective, and Sectoral Contribution&rdquo;</p>
                    <p className="text-inamice-blue-3 text-sm md:text-md text-center max-w-3xl px-4 leading-relaxed opacity-80 mb-8 md:mb-12">
                        Plenary Session 1 serves to unify the basic understanding of Digital Transformation and Smart Economy before
                        moving into the implementation stage. This session discusses how Digital Transformation, industry perspective, and sectoral contribution form the main foundation in building a Smart Economy in the MICE Industry.
                    </p>

                    {/* Desktop: 4-column grid for Plenary 1 */}
                    <div className="hidden md:grid lg:grid-cols-4 md:grid-cols-2 gap-6 xl:gap-8 w-full max-w-[1400px] mx-auto px-4">
                        {plenary1.map((speaker, idx) => (
                            <div key={speaker.name} className="flex flex-col items-center flex-1 h-full">
                                <div className="h-[60px] flex items-center justify-center w-full mb-2">
                                    <div className="bg-inamice-orange text-white px-4 xl:px-8 py-2 text-center shadow-md">
                                        <h4 className="text-lg xl:text-xl font-bold uppercase drop-shadow-md tracking-widest whitespace-nowrap">SUBTOPIC {idx + 1}</h4>
                                    </div>
                                </div>
                                <div className="px-2 text-center mb-6 h-[100px] flex items-center justify-center w-full">
                                    <p className="text-inamice-blue-3 text-[15px] xl:text-[18px] font-bold leading-snug max-w-[360px] mx-auto">&quot;{speaker.topic}&quot;</p>
                                </div>
                                <div className="flex flex-col items-center w-full max-w-[280px]">
                                    <div className="relative w-full aspect-[4/5] mb-6">
                                        <div className="absolute inset-0 bg-gradient-to-r from-inamice-blue to-inamice-orange rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-none rounded-br-none" />
                                        <div className="absolute inset-[6px] bg-white rounded-tr-[calc(4rem-6px)] rounded-bl-[calc(4rem-6px)] rounded-tl-none rounded-br-none overflow-hidden flex items-center justify-center">
                                            {speaker.image && speaker.image !== "/img/speakers/tba.png" ? (
                                                <img src={speaker.image} alt={speaker.name} className={`w-full h-full object-cover ${(speaker as any).imageClassName || ""}`} />
                                            ) : (
                                                <div className="flex flex-col items-center scale-90">
                                                    <svg className="w-20 h-20 text-inamice-blue/20 mb-2" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2A5 5 0 1012 12a5 5 0 000-10zM5.006 20.448C6.183 17.5 9.1 16 12 16s5.817 1.5 6.994 4.448A10.957 10.957 0 0112 23c-2.485 0-4.783-.824-6.994-2.552z" clipRule="evenodd" /></svg>
                                                    <span className="text-inamice-blue/30 font-bold text-lg tracking-widest uppercase">TBA</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="w-full bg-inamice-orange text-white py-3 px-2 text-center h-[60px] md:h-[76px] xl:h-[84px] flex flex-col justify-center">
                                        <h4 className="text-[13px] md:text-[15px] xl:text-[16px] font-bold uppercase tracking-wide whitespace-normal leading-tight drop-shadow-md">{speaker.name}</h4>
                                    </div>
                                    {speaker.role && speaker.role !== "TBA" && (
                                        <div className="w-full mt-4 px-2 text-center mb-4">
                                            <p className="text-inamice-blue-3 font-semibold text-[13px] md:text-[14px] leading-snug">{speaker.role}</p>
                                        </div>
                                    )}
                                    <div className="h-4"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile: Compact horizontal cards */}
                    <div className="md:hidden flex flex-col gap-4 w-full">
                        {plenary1.map((speaker, idx) => (
                            <div key={speaker.name} className="p-[3px] bg-gradient-to-r from-inamice-blue to-inamice-orange rounded-tr-[2rem] rounded-bl-[2rem] rounded-tl-sm rounded-br-sm shadow-md">
                                <div className="bg-white rounded-tr-[calc(2rem-3px)] rounded-bl-[calc(2rem-3px)] rounded-tl-none rounded-br-none p-4 flex gap-4 items-center">
                                    {/* Left: Compact Photo */}
                                    <div className="relative w-[90px] h-[110px] flex-shrink-0">
                                        <div className="absolute inset-0 bg-gradient-to-b from-inamice-blue to-inamice-orange rounded-tr-[1.2rem] rounded-bl-[1.2rem] rounded-tl-none rounded-br-none" />
                                        <div className="absolute inset-[3px] bg-white rounded-tr-[calc(1.2rem-3px)] rounded-bl-[calc(1.2rem-3px)] rounded-tl-none rounded-br-none overflow-hidden flex items-center justify-center">
                                            {speaker.image && speaker.image !== "/img/speakers/tba.png" ? (
                                                <img src={speaker.image} alt={speaker.name} className={`w-full h-full object-cover ${(speaker as any).imageClassName || ""}`} />
                                            ) : (
                                                <div className="flex flex-col items-center">
                                                    <svg className="w-10 h-10 text-inamice-blue/20 mb-1" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2A5 5 0 1012 12a5 5 0 000-10zM5.006 20.448C6.183 17.5 9.1 16 12 16s5.817 1.5 6.994 4.448A10.957 10.957 0 0112 23c-2.485 0-4.783-.824-6.994-2.552z" clipRule="evenodd" /></svg>
                                                    <span className="text-inamice-blue/30 font-bold text-[10px] tracking-wider uppercase">TBA</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {/* Right: Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className="bg-inamice-orange text-white px-3 py-1 mb-2 w-fit shadow-sm">
                                            <span className="text-[11px] font-bold uppercase tracking-widest">SUBTOPIC {idx + 1}</span>
                                        </div>
                                        <p className="text-inamice-blue-3 text-[13px] font-bold leading-snug mb-2 line-clamp-3">
                                            &quot;{speaker.topic}&quot;
                                        </p>
                                        <p className="text-inamice-orange text-[11px] font-bold uppercase tracking-wide leading-tight">{speaker.name}</p>
                                        {speaker.role && speaker.role !== "TBA" && <p className="text-inamice-blue-3/80 text-[10px] mt-0.5">{speaker.role}</p>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Blue Separator Line */}
                    <div className="w-full h-[3px] md:h-[4px] bg-inamice-blue/40 mt-10 md:mt-16"></div>
                </div>

                {/* Plenary Session 2 */}
                <div className="flex flex-col items-center text-center">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-inamice-blue-3 uppercase mb-2">PLENARY SESSION 2</h3>
                    <p className="text-inamice-blue-3 text-sm sm:text-base md:text-lg font-extrabold mb-3 md:mb-4 px-4">&ldquo;Implementing Smart Economy Practices in the MICE Ecosystem&rdquo;</p>
                    <p className="text-inamice-blue-3 text-sm md:text-md text-center max-w-3xl px-4 leading-relaxed opacity-80 mb-8 md:mb-12">
                        Plenary Session 2 continues the alignment established in Plenary 1 by focusing on the
                        Implementation and Benchmarking stages to translate the concept of a Smart Economy
                        into real practices within the MICE ecosystem.
                    </p>

                    {/* Desktop: 3-column grid for Plenary 2 */}
                    <div className="hidden md:grid md:grid-cols-3 gap-8 xl:gap-16 w-full max-w-7xl mx-auto px-4">
                        {plenary2.map((speaker, idx) => (
                            <div key={idx} className="flex flex-col items-center flex-1 h-full">
                                <div className="h-[60px] flex items-center justify-center w-full mb-2">
                                    <div className="bg-inamice-orange text-white px-4 xl:px-8 py-2 text-center shadow-md">
                                        <h4 className="text-lg xl:text-xl font-bold uppercase drop-shadow-md tracking-widest whitespace-nowrap">SUBTOPIC {idx + 1}</h4>
                                    </div>
                                </div>
                                <div className="px-2 text-center mb-6 h-[100px] flex items-center justify-center w-full">
                                    <p className="text-inamice-blue-3 text-[15px] xl:text-[18px] font-bold leading-snug max-w-[360px] mx-auto">&quot;{speaker.topic}&quot;</p>
                                </div>
                                <div className="flex flex-col items-center w-full max-w-[280px]">
                                    <div className="relative w-full aspect-[4/5] mb-6">
                                        <div className="absolute inset-0 bg-gradient-to-r from-inamice-blue to-inamice-orange rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-none rounded-br-none" />
                                        <div className="absolute inset-[6px] bg-white rounded-tr-[calc(4rem-6px)] rounded-bl-[calc(4rem-6px)] rounded-tl-none rounded-br-none overflow-hidden flex items-center justify-center">
                                            {speaker.image && speaker.image !== "/img/speakers/tba.png" ? (
                                                <img src={speaker.image} alt={speaker.name} className={`w-full h-full object-cover ${(speaker as any).imageClassName || ""}`} />
                                            ) : (
                                                <div className="flex flex-col items-center scale-90">
                                                    <svg className="w-20 h-20 text-inamice-blue/20 mb-2" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2A5 5 0 1012 12a5 5 0 000-10zM5.006 20.448C6.183 17.5 9.1 16 12 16s5.817 1.5 6.994 4.448A10.957 10.957 0 0112 23c-2.485 0-4.783-.824-6.994-2.552z" clipRule="evenodd" /></svg>
                                                    <span className="text-inamice-blue/30 font-bold text-lg tracking-widest uppercase">TBA</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="w-full bg-inamice-orange text-white py-3 px-2 text-center h-[60px] md:h-[76px] xl:h-[84px] flex flex-col justify-center">
                                        <h4 className="text-[13px] md:text-[15px] xl:text-[16px] font-bold uppercase tracking-wide whitespace-normal leading-tight drop-shadow-md">{speaker.name}</h4>
                                    </div>
                                    {speaker.role && speaker.role !== "TBA" && (
                                        <div className="w-full mt-4 px-2 text-center mb-4">
                                            <p className="text-inamice-blue-3 font-semibold text-[13px] md:text-[14px] leading-snug">{speaker.role}</p>
                                        </div>
                                    )}
                                    <div className="h-4"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile: Compact horizontal cards */}
                    <div className="md:hidden flex flex-col gap-4 w-full">
                        {plenary2.map((speaker, idx) => (
                            <div key={idx} className="p-[3px] bg-gradient-to-r from-inamice-blue to-inamice-orange rounded-tr-[2rem] rounded-bl-[2rem] rounded-tl-sm rounded-br-sm shadow-md">
                                <div className="bg-white rounded-tr-[calc(2rem-3px)] rounded-bl-[calc(2rem-3px)] rounded-tl-none rounded-br-none p-4 flex gap-4 items-center">
                                    {/* Left: Compact Photo */}
                                    <div className="relative w-[90px] h-[110px] flex-shrink-0">
                                        <div className="absolute inset-0 bg-gradient-to-b from-inamice-blue to-inamice-orange rounded-tr-[1.2rem] rounded-bl-[1.2rem] rounded-tl-none rounded-br-none" />
                                        <div className="absolute inset-[3px] bg-white rounded-tr-[calc(1.2rem-3px)] rounded-bl-[calc(1.2rem-3px)] rounded-tl-none rounded-br-none overflow-hidden flex items-center justify-center">
                                            {speaker.image && speaker.image !== "/img/speakers/tba.png" ? (
                                                <img src={speaker.image} alt={speaker.name} className={`w-full h-full object-cover ${(speaker as any).imageClassName || ""}`} />
                                            ) : (
                                                <div className="flex flex-col items-center">
                                                    <svg className="w-10 h-10 text-inamice-blue/20 mb-1" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2A5 5 0 1012 12a5 5 0 000-10zM5.006 20.448C6.183 17.5 9.1 16 12 16s5.817 1.5 6.994 4.448A10.957 10.957 0 0112 23c-2.485 0-4.783-.824-6.994-2.552z" clipRule="evenodd" /></svg>
                                                    <span className="text-inamice-blue/30 font-bold text-[10px] tracking-wider uppercase">TBA</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {/* Right: Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className="bg-inamice-orange text-white px-3 py-1 mb-2 w-fit shadow-sm">
                                            <span className="text-[11px] font-bold uppercase tracking-widest">SUBTOPIC {idx + 1}</span>
                                        </div>
                                        <p className="text-inamice-blue-3 text-[13px] font-bold leading-snug mb-2 line-clamp-3">
                                            &quot;{speaker.topic}&quot;
                                        </p>
                                        <p className="text-inamice-orange text-[11px] font-bold uppercase tracking-wide leading-tight">{speaker.name}</p>
                                        {speaker.role && speaker.role !== "TBA" && <p className="text-inamice-blue-3/80 text-[10px] mt-0.5">{speaker.role}</p>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Speakers;
