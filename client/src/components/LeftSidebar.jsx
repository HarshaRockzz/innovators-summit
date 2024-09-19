import React from 'react';

const LeftSidebar = () => {
  return (
    <div className="w-full md:w-1/3 space-y-6">
      <div id="news" className="p-6 bg-white shadow-lg rounded-lg">
        <h2 className="font-bold text-xl text-indigo-600">Latest News</h2>
        <ul className="mt-4 space-y-2">
          <li className="text-gray-600">🔹 Registration is now open! Don't miss out on this opportunity.</li>
          <li className="text-gray-600">🔹 Prominent industry leaders will be speaking at the event. Mark your calendar!</li>
        </ul>
      </div>
      
      <div id="organizing-committee" className="p-6 bg-white shadow-lg rounded-lg">
        <h2 className="font-bold text-xl text-indigo-600">Organizing Committee</h2>
        <p className="mt-4 text-gray-600">Faculty Coordinators</p>
        <ul className="mt-4 space-y-2">
          <li className="text-gray-600">🔹 Dr. Abhishek Hazra</li>
        </ul>
        <p className="mt-4 text-gray-600">Organizing Team</p>
        <ul className="mt-4 space-y-2">
          <li className="text-gray-600">🔹 E-Cell, IIIT SriCity</li>
        </ul>
      </div>
      
      <div id="archive" className="p-6 bg-white shadow-lg rounded-lg">
        <h2 className="font-bold text-xl text-indigo-600">Event Archive</h2>
        <p className="mt-4 text-gray-600">
          Explore previous events, materials, and recorded sessions in our comprehensive archive.
        </p>
      </div>
    </div>
  );
}

export default LeftSidebar;
