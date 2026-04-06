import React from 'react';
import { RUNDOWN } from '../../constants';

const Rundown = () => {
    return (
        <section id="rundown" className="bg-white pb-16 md:pb-24">
            <div className="section-container max-w-5xl mx-auto">

                {/* Top Blue Separator Line */}
                <div className="w-full h-[2px] bg-[#7CA8E8] mb-10 md:mb-16 shadow-sm"></div>

                {/* Section Header */}
                <div className="flex flex-col items-center mb-10 md:mb-16">
                    <div className="flex items-center mb-2">
                        <img src="/img/acc-fusion.png" alt="ornament" className="w-20 md:w-28 h-auto object-contain" />
                    </div>
                    <div className="bg-inamice-orange text-white px-10 py-2 w-full max-w-sm text-center">
                        <h2 className="text-xl font-bold uppercase tracking-widest">RUNDOWN</h2>
                    </div>
                </div>

                {/* Desktop Table (hidden on mobile) */}
                <div className="hidden md:block w-full overflow-x-auto pb-4 max-w-full">
                    <table className="w-full min-w-[600px] text-left border-separate" style={{ borderSpacing: "4px 0" }}>
                        <thead>
                            <tr className="text-white text-center">
                                <th className="p-0 w-[20%]">
                                    <div className="w-full h-full p-4 font-bold text-sm tracking-wider bg-gradient-to-r from-inamice-blue to-[#E08250] border border-black">Time</div>
                                </th>
                                <th className="p-0 w-[20%]">
                                    <div className="w-full h-full p-4 font-bold text-sm tracking-wider bg-gradient-to-r from-inamice-blue to-[#E08250] border border-black">Duration</div>
                                </th>
                                <th className="p-0 w-[60%]">
                                    <div className="w-full h-full p-4 font-bold text-sm tracking-wider bg-gradient-to-r from-inamice-blue to-[#E08250] border border-black">Activities</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {/* Added top padding spacer for tbody */}
                            <tr><td colSpan={3} className="h-4"></td></tr>

                            {RUNDOWN.map((item, idx) => (
                                <tr key={idx} className="border-b border-black last:border-b-0 shadow-sm relative">
                                    <td className="p-4 text-center text-black border border-black text-sm whitespace-nowrap bg-white font-normal">
                                        {item.time}
                                    </td>
                                    <td className="p-4 text-center text-black border-y border-r border-black text-sm whitespace-nowrap bg-white font-normal">
                                        {item.duration}
                                    </td>
                                    <td className="p-4 text-black border-y border-r border-black text-sm bg-white font-normal">
                                        {item.activity}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Card Layout (visible on mobile only) */}
                <div className="md:hidden flex flex-col gap-3">
                    {RUNDOWN.map((item, idx) => (
                        <div key={idx} className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-[13px] font-bold text-white bg-gradient-to-r from-inamice-blue to-inamice-orange px-3 py-1 rounded-md whitespace-nowrap">
                                    {item.time}
                                </span>
                                <span className="text-[12px] font-semibold text-gray-500">
                                    {item.duration}
                                </span>
                            </div>
                            <p className="text-[13px] text-inamice-blue-3 font-semibold leading-snug">
                                {item.activity}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Rundown;
