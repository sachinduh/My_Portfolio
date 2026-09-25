import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "2026",
            title: "UI/UX Designer",
            company: "Pixel Perfect Event",
            type: "Project / Competition",
            description: "Designed and developed the SafeGuard smart emergency response application for the Pixel Perfect event, conducting user research, wireframing, high-fidelity UI design, and interactive prototyping."
        },
        {
            year: "2026",
            title: "UI/UX Designer & Web Developer",
            company: "MS Club UWU (Campus)",
            type: "Campus Project",
            description: "Designed a user-friendly landing page for MS Club UWU to promote Microsoft technologies, featuring event listings, learning resources, and member testimonials."
        },
        {
            year: "2026",
            title: "UI/UX Designer",
            company: "Company Work Application",
            type: "Mobile App Design",
            description: "Designed and prototyped the Expenses App mobile application, focusing on financial tracking, intuitive expense categorisation, interactive data visualization charts, and user-centered mobile interface design."
        }
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length - 1 && (
                                        <div className="absolute left-0 top-3 w-px h-full bg-softGray"></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className="no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-primary">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;