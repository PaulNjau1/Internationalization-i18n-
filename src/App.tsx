// src/App.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import './i18n'; // Import the i18n configuration
import { useRTL } from './hooks/useRTL';
import './index.css'; // Ensure Tailwind CSS is imported

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  useRTL(); // Apply RTL/LTR logic

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 max-w-md mx-auto bg-white shadow-md rounded">
        <h1 className="text-2xl font-bold text-center mb-4">{t('welcome')}</h1>
        <p className="text-gray-700 mb-6 text-center">{t('description')}</p>

        <div className="flex justify-center space-x-4">
          <button
            onClick={() => changeLanguage('en')}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            English
          </button>
          <button
            onClick={() => changeLanguage('ar')}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            العربية
          </button>
        </div>

        <p className="mt-6 text-center text-gray-600">
          {t('change_language')}
        </p>
      </div>
    </div>
  );
};

export default App;
