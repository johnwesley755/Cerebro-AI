import React from 'react';

const StatsCard = ({ title, value, icon, color }) => {
  return (
    <div className={`bg-gradient-to-br ${color} rounded-lg p-6 text-white shadow-md`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-3xl font-bold">{value}</p>
        </div>
        <div className="text-white text-opacity-80">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;