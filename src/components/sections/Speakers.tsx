import React from 'react';
import { SPEAKERS } from '../../constants';

const Speakers = () => {
    const keynote = SPEAKERS.find(s => s.type === "KEYNOTE SPEECH");
    const plenary1 = SPEAKERS.filter(s => s.type === "PLENARY SESSION 1");
    const plenary2 = SPEAKERS.filter(s => s.type === "PLENARY SESSION 2");

    return (
        <section id="main-event" className="bg-white pb-24 -mb-32">
            {/* City Hero Card Section */}
            <div className="relative w-full max-w-10xl mx-auto px-4 md:px-8 h-[600px] mb-16">
                {/* Background Skyline */}
                <div className="absolute inset-4 md:inset-x-8 rounded-3xl overflow-hidden z-0">
                    <img
                        src="/img/section-speaker.jpg"
                        className="w-full h-full object-cover opacity-90"
                        alt="Speakers Background"
                    />
                    {/* Fading gradient at the bottom so it blends into white */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
                </div>

                {/* Floating Quote Card */}
                <div className="relative z-10 w-full h-full flex items-center justify-center px-4 translate-y-12">
                    <div className="p-[5px] bg-gradient-to-r from-inamice-blue to-inamice-orange rounded-tr-[5rem] rounded-bl-[5rem] rounded-tl-sm rounded-br-sm shadow-2xl w-full max-w-4xl">
                        <div className="bg-white w-full rounded-tr-[calc(5rem-5px)] rounded-bl-[calc(5rem-5px)] rounded-tl-sm rounded-br-sm p-6 md:p-10 text-center">
                            <h3 className="text-2xl md:text-4xl font-extrabold text-inamice-blue-1 mb-6 leading-tight max-w-2xl mx-auto uppercase">
                                Main Event
                            </h3>
                            <p className="text-inamice-blue-1 font-semibold text-lg md:text-[20px] leading-relaxed max-w-3xl mx-auto text-center">
                                Consisting two plenary sessions with three subtopics in each plenary, the main event will discuss and answer the on-going concern regarding the MICE industry position within Jakarta’s Smart Economy framework from reliable speakers across the industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-container">

                {/* Section Header */}
                <div className="flex flex-col items-center mb-16 -mt-32">
                    <div className="flex items-center gap-1 mb-2">
                        <img src="/img/acc-blue.jpg" alt="ornament" className="w-6 h-6 object-contain mix-blend-multiply" />
                        <img src="/img/acc-orange.jpg" alt="ornament" className="w-4 h-4 object-contain mix-blend-multiply" />
                        <img src="/img/acc-blue.jpg" alt="ornament" className="w-6 h-6 object-contain mix-blend-multiply" />
                    </div>
                    <div className="bg-inamice-orange text-white px-4 py-2 w-full max-w-xs text-center shadow-lg">
                        <h2 className="text-2xl md:text-3xl font-black uppercase drop-shadow-md">SPEAKERS & TOPIC</h2>
                    </div>
                </div>

                {/* Keynote Speech */}
                <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto">
                    <h3 className="text-3xl font-extrabold text-inamice-blue-3 uppercase mb-2">KEYNOTE SPEECH</h3>
                    <p className="text-inamice-blue-3 text-md font-regular mb-12">“Positioning MICE as a Strategic Lever for Jakarta’s Urban Economy”</p>

                    <div className="flex flex-col items-center mb-12">
                        {/* Keynote Frame Wrapper */}
                        <div className="relative w-[280px] h-[360px] md:w-[350px] md:h-[450px] mb-8">
                            {/* The Gradient Frame */}
                            <div className="absolute inset-0 bg-gradient-to-r from-inamice-blue to-inamice-orange rounded-tr-[5rem] rounded-bl-[5rem] rounded-tl-none rounded-br-none" />
                            {/* The Inner "Gap" and Image Box */}
                            <div className="absolute inset-[6px] bg-white rounded-tr-[calc(5rem-6px)] rounded-bl-[calc(5rem-6px)] rounded-tl-none rounded-br-none overflow-hidden">
                                <img
                                    src={keynote?.image}
                                    alt={keynote?.name}
                                    className="w-full h-full object-cover rounded-tr-[calc(5rem-6px)] rounded-bl-[calc(5rem-6px)] rounded-tl-none rounded-br-none"
                                />
                            </div>
                        </div>
                        <h4 className="text-3xl font-black text-inamice-blue-3 mt-4">{keynote?.name}</h4>
                        <p className="text-inamice-blue-3 text-md font-medium mb-4 tracking-wide">{keynote?.role}</p>
                        <p className="text-inamice-blue-3 text-md text-justify max-w-xl px-4 leading-relaxed opacity-80 mb-6 font-medium">
                            The Keynote Speech will establish the strategic direction for the event, showcasing the Pemerintah
                            Provinsi DKI Jakarta's commitment to enhancing the urban economy through MICE sector development
                            as part of Smart Economy. It will emphasize the role of MICE in Jakarta's long-term development
                            strategy and the need for collaboration among government, industry, and ecosystem participants
                        </p>
                    </div>
                    {/* Blue Separator Line */}
                    <div className="w-full h-[4px] bg-inamice-blue/40 mt-8"></div>
                </div>

                {/* Plenary Session 1 */}
                <div className="flex flex-col items-center text-center mb-16">
                    <h3 className="text-3xl font-extrabold text-inamice-blue-3 uppercase mb-2">PLENARY SESSION 1</h3>
                    <p className="text-inamice-blue-3 text-lg font-extrabold mb-4">“Building Smart Economy Foundations: Digital Transformation, Policy <br />Alignment, and Sectoral Contribution”</p>
                    <p className="text-inamice-blue-3 text-md text-center max-w-3xl px-4 leading-relaxed opacity-80 mb-12">
                        Plenary Session 1 serves to unify the basic understanding of Digital Transformation and Smart Economy before
                        moving into the implementation stage. This session discusses how Digital Transformation, policy alignment, and data-driven measurement frameworks form the main foundation in building a Smart Economy in Jakarta.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-7xl mx-auto">
                        {plenary1.map((speaker, idx) => (
                            <div key={speaker.name} className="flex flex-col items-center flex-1 h-full">
                                {/* Subtopic Label Area - Fixed height for alignment */}
                                <div className="h-[60px] flex items-center justify-center w-full mb-2">
                                    <div className="bg-inamice-orange text-white px-8 py-2 text-center shadow-md">
                                        <h4 className="text-lg md:text-xl font-black uppercase drop-shadow-md tracking-widest whitespace-nowrap">SUBTOPIC {idx + 1}</h4>
                                    </div>
                                </div>
                                {/* Speaker Topic Area - Fixed height for alignment */}
                                <div className="px-2 text-center mb-6 h-[100px] flex items-center justify-center w-full">
                                    <p className="text-inamice-blue-3 text-[15px] md:text-[18px] font-black leading-snug max-w-[360px] mx-auto">"{speaker.topic}"</p>
                                </div>

                                <div className="flex flex-col items-center">
                                    {/* Plenary Card Wrapper */}
                                    <div className="relative w-[260px] h-[320px] md:w-[280px] md:h-[350px] mb-6">
                                        {/* The Gradient Frame */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-inamice-blue to-inamice-orange rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-none rounded-br-none" />
                                        {/* The Inner Image Box with intentional white gap */}
                                        <div className="absolute inset-[6px] bg-white rounded-tr-[calc(4rem-6px)] rounded-bl-[calc(4rem-6px)] rounded-tl-none rounded-br-none overflow-hidden flex items-center justify-center">
                                            <div className="flex flex-col items-center scale-90">
                                                <svg className="w-20 h-20 text-inamice-blue/20 mb-2" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2A5 5 0 1012 12a5 5 0 000-10zM5.006 20.448C6.183 17.5 9.1 16 12 16s5.817 1.5 6.994 4.448A10.957 10.957 0 0112 23c-2.485 0-4.783-.824-6.994-2.552z" clipRule="evenodd" /></svg>
                                                <span className="text-inamice-blue/30 font-black text-lg tracking-widest uppercase">TBA</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Orange Label Box */}
                                    <div className="w-[260px] md:w-[280px] bg-inamice-orange text-white py-3 px-2 mb-4 text-center">
                                        <h4 className="text-[14px] md:text-[16px] font-black uppercase tracking-wide whitespace-normal leading-tight">TO BE ANNOUNCED</h4>
                                    </div>
                                    {/* Spacer to align boxes */}
                                    <div className="h-4"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Blue Separator Line */}
                    <div className="w-full h-[4px] bg-inamice-blue/40 mt-16"></div>
                </div>

                {/* Plenary Session 2 */}
                <div className="flex flex-col items-center text-center">
                    <h3 className="text-3xl font-extrabold text-inamice-blue-3 uppercase mb-2">PLENARY SESSION 2</h3>
                    <p className="text-inamice-blue-3 text-lg font-extrabold mb-4">“Implementing Smart Economy Practices in the MICE Ecosystem”</p>
                    <p className="text-inamice-blue-3 text-md text-center max-w-3xl px-4 leading-relaxed opacity-80 mb-12">
                        Plenary Session 2 continues the alignment established in Plenary 1 by focusing on the
                        Implementation and Benchmarking stages to translate the concept of a Smart Economy
                        into real practices within the MICE ecosystem.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-7xl mx-auto">
                        {plenary2.map((speaker, idx) => (
                            <div key={idx} className="flex flex-col items-center flex-1 h-full">
                                {/* Subtopic Label Area - Fixed height for alignment */}
                                <div className="h-[60px] flex items-center justify-center w-full mb-2">
                                    <div className="bg-inamice-orange text-white px-8 py-2 text-center shadow-md">
                                        <h4 className="text-lg md:text-xl font-black uppercase drop-shadow-md tracking-widest whitespace-nowrap">SUBTOPIC {idx + 1}</h4>
                                    </div>
                                </div>
                                {/* Speaker Topic Area - Fixed height for alignment */}
                                <div className="px-2 text-center mb-6 h-[100px] flex items-center justify-center w-full">
                                    <p className="text-inamice-blue-3 text-[15px] md:text-[18px] font-black leading-snug max-w-[360px] mx-auto">"{speaker.topic}"</p>
                                </div>

                                <div className="flex flex-col items-center">
                                    {/* Plenary Card Wrapper */}
                                    <div className="relative w-[260px] h-[320px] md:w-[280px] md:h-[350px] mb-6">
                                        {/* The Gradient Frame */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-inamice-blue to-inamice-orange rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-none rounded-br-none" />
                                        {/* The Inner Image Box with Gap */}
                                        <div className="absolute inset-[6px] bg-white rounded-tr-[calc(4rem-6px)] rounded-bl-[calc(4rem-6px)] rounded-tl-none rounded-br-none overflow-hidden flex items-center justify-center">
                                            <div className="flex flex-col items-center scale-90">
                                                <svg className="w-20 h-20 text-inamice-blue/20 mb-2" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2A5 5 0 1012 12a5 5 0 000-10zM5.006 20.448C6.183 17.5 9.1 16 12 16s5.817 1.5 6.994 4.448A10.957 10.957 0 0112 23c-2.485 0-4.783-.824-6.994-2.552z" clipRule="evenodd" /></svg>
                                                <span className="text-inamice-blue/30 font-black text-lg tracking-widest uppercase">TBA</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Orange Label Box */}
                                    <div className="w-[260px] md:w-[280px] bg-inamice-orange text-white py-3 px-2 mb-4 text-center">
                                        <h4 className="text-[14px] md:text-[16px] font-black uppercase tracking-wide whitespace-normal leading-tight">TO BE ANNOUNCED</h4>
                                    </div>
                                    {/* Spacer to align boxes */}
                                    <div className="h-4"></div>
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
