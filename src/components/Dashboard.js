import React, { useState } from 'react';
import Maps from './Maps';
import Simulation from './Simulation';
import Data from './Data';
import SamplePages from './SamplePages';
import Apps from './Apps';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard'); // Set default to dashboard

  // Handlers to set the active section
  const handleSectionClick = (section) => {
    setActiveSection(section); // Set active section to the clicked one
  };

  return (
    <div>
      {/* Header with gradient */}
      <header className="bg-gradient-to-r from-green-600  to-green-700 p-4 flex justify-between items-center shadow-lg">
        <div className="text-white text-2xl font-bold">FARM AI SIMULATOR</div>
      </header>

      {/* Navigation bar with gradient */}
      <nav className="bg-gradient-to-r from-green-500 via-green-400 to-green-600 p-2 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-12">
          <button
            onClick={() => handleSectionClick('dashboard')}
            className={`text-white flex items-center px-4 py-2 rounded shadow-md transition-colors duration-200 
            ${activeSection === 'dashboard' ? 'bg-gradient-to-r from-green-700 to-green-800 shadow-lg' : 'hover:bg-gradient-to-r from-green-600 to-green-700'} ${activeSection === 'dashboard' && 'font-bold'}`}
          >
            <i className="fas fa-home mr-2"></i>Dashboard
          </button>
          <button
            onClick={() => handleSectionClick('maps')}
            className={`text-white flex items-center px-4 py-2 rounded shadow-md transition-colors duration-200 
            ${activeSection === 'maps' ? 'bg-gradient-to-r from-green-700 to-green-800 shadow-lg' : 'hover:bg-gradient-to-r from-green-600 to-green-700'} ${activeSection === 'maps' && 'font-bold'}`}
          >
            <i className="fas fa-cube mr-2"></i>Maps
          </button>
          <button
            onClick={() => handleSectionClick('simulation')}
            className={`text-white flex items-center px-4 py-2 rounded shadow-md transition-colors duration-200 
            ${activeSection === 'simulation' ? 'bg-gradient-to-r from-green-700 to-green-800 shadow-lg' : 'hover:bg-gradient-to-r from-green-600 to-green-700'} ${activeSection === 'simulation' && 'font-bold'}`}
          >
            <i className="fas fa-file-alt mr-2"></i>Simulation
          </button>
          <button
            onClick={() => handleSectionClick('data')}
            className={`text-white flex items-center px-4 py-2 rounded shadow-md transition-colors duration-200 
            ${activeSection === 'data' ? 'bg-gradient-to-r from-green-700 to-green-800 shadow-lg' : 'hover:bg-gradient-to-r from-green-600 to-green-700'} ${activeSection === 'data' && 'font-bold'}`}
          >
            <i className="fas fa-chart-bar mr-2"></i>Data
          </button>
          <button
            onClick={() => handleSectionClick('samplePages')}
            className={`text-white flex items-center px-4 py-2 rounded shadow-md transition-colors duration-200 
            ${activeSection === 'samplePages' ? 'bg-gradient-to-r from-green-700 to-green-800 shadow-lg' : 'hover:bg-gradient-to-r from-green-600 to-green-700'} ${activeSection === 'samplePages' && 'font-bold'}`}
          >
            <i className="fas fa-copy mr-2"></i>Sample Pages
          </button>
          <button
            onClick={() => handleSectionClick('apps')}
            className={`text-white flex items-center px-4 py-2 rounded shadow-md transition-colors duration-200 
            ${activeSection === 'apps' ? 'bg-gradient-to-r from-green-700 to-green-800 shadow-lg' : 'hover:bg-gradient-to-r from-green-600 to-green-700'} ${activeSection === 'apps' && 'font-bold'}`}
          >
            <i className="fas fa-th mr-2"></i>Apps
          </button>
        </div>
      </nav>

      {/* Conditional rendering for each section */}
      <main className="p-4">
        {activeSection === 'dashboard' && (
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <i className="fas fa-home text-purple-600 text-2xl mr-2"></i>
              <h1 className="text-2xl font-bold">Dashboard</h1>
            </div>
          </div>
        )}
        {activeSection === 'maps' && <Maps />}
        {activeSection === 'simulation' && <Simulation />}
        {activeSection === 'data' && <Data />}
        {activeSection === 'samplePages' && <SamplePages />}
        {activeSection === 'apps' && <Apps />}
      </main>
    </div>
  );
};

export default Dashboard;
