import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-primary text-white p-4">
        <h1 className="text-2xl font-bold">我的应用</h1>
      </header>
      <main className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-secondary mb-4">欢迎使用</h2>
          <p className="text-gray-600">
            这是一个使用Tailwind CSS的React应用示例。
          </p>
        </div>
      </main>
    </div>
  );
}

export default App; 