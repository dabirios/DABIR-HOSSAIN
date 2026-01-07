
import React from 'react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "B.Sc. in Hospitality and Hotel Administration",
      institution: "Ambuja Neotia University (SHCA Dept)",
      detail: "Completed 5 Semesters",
      year: "Current",
      icon: "fa-graduation-cap"
    },
    {
      degree: "Swiss Diploma",
      institution: "HTMI Switzerland",
      detail: "International Hospitality Management Excellence",
      year: "Concurrent",
      icon: "fa-certificate"
    },
    {
      degree: "Higher Secondary Education",
      institution: "Tufanganj Mahavidyalaya",
      detail: "Cooch Behar, West Bengal",
      year: "Completed",
      icon: "fa-school"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif font-bold text-slate-900 sm:text-4xl">Education Journey</h2>
        <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {education.map((item, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <i className={`fas ${item.icon} text-blue-600 text-xl`}></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{item.degree}</h3>
            <p className="text-blue-600 font-medium mb-4">{item.institution}</p>
            <p className="text-slate-500 mb-4">{item.detail}</p>
            <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full uppercase tracking-wider">
              {item.year}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
