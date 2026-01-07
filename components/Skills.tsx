
import React from 'react';

const Skills: React.FC = () => {
  const hobs = [
    { name: "HR Management", icon: "fa-users" },
    { name: "General Management", icon: "fa-tie" },
    { name: "Front Office", icon: "fa-concierge-bell" },
    { name: "F&B Service", icon: "fa-utensils" },
    { name: "Air Host Training", icon: "fa-plane" },
    { name: "Video Editing", icon: "fa-video" },
    { name: "Badminton", icon: "fa-shuttlecock" },
    { name: "Cricket", icon: "fa-baseball-bat-ball" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif font-bold text-slate-900 sm:text-4xl">Skills & Passions</h2>
        <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {hobs.map((hob, idx) => (
          <div key={idx} className="group p-6 text-center border border-slate-100 rounded-2xl hover:bg-blue-600 hover:text-white transition-all cursor-default">
            <div className="mb-4 inline-block p-4 rounded-full bg-slate-50 text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <i className={`fas ${hob.icon} text-2xl`}></i>
            </div>
            <p className="font-semibold">{hob.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
