
import React from 'react';

const Experience: React.FC = () => {
  const departments = [
    "Human Resource Management",
    "Food & Beverage Service",
    "Front Office Operations",
    "Housekeeping Management",
    "Food Production",
    "Industrial Training (Goa DoubleTree by Hilton)"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <div>
          <h2 className="text-3xl font-serif font-bold text-slate-900 sm:text-4xl mb-6">Industrial Expertise</h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Hands-on training at the prestigious 5-star <strong>DoubleTree by Hilton, Goa</strong>, rotating through every core pillar of high-end hospitality operations.
          </p>
          <div className="space-y-4">
            {departments.map((dept, idx) => (
              <div key={idx} className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-check"></i>
                </div>
                <span className="text-slate-700 font-medium">{dept}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 lg:mt-0 grid grid-cols-2 gap-4">
          <img className="rounded-2xl shadow-lg w-full h-64 object-cover" src="https://picsum.photos/id/192/400/600" alt="Hospitality" />
          <img className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" src="https://picsum.photos/id/249/400/600" alt="Service" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
