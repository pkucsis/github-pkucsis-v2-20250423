import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

interface Publication {
  id: string;
  title: string;
  authors: string;
  year: number;
  venue: string;
  pdfUrl: string;
  videoUrl?: string;
}

const Publications: React.FC = () => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  useEffect(() => {
    // 这里将从dblp获取数据
    // 临时使用模拟数据
    const mockPublications: Publication[] = [
      {
        id: '1',
        title: '论文标题1',
        authors: 'Zhang Daqing et al.',
        year: 2023,
        venue: 'IEEE Transactions',
        pdfUrl: '/papers/paper1.pdf',
        videoUrl: '/videos/paper1.mp4'
      },
      // 添加更多论文...
    ];
    setPublications(mockPublications);
  }, []);

  const years = [...new Set(publications.map(p => p.year))].sort((a, b) => b - a);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">学术成果</h1>
        
        {/* 年份筛选 */}
        <div className="flex space-x-4 mb-8">
          <button
            className={`px-4 py-2 rounded ${
              selectedYear === null
                ? 'bg-blue-500'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
            onClick={() => setSelectedYear(null)}
          >
            全部
          </button>
          {years.map(year => (
            <button
              key={year}
              className={`px-4 py-2 rounded ${
                selectedYear === year
                  ? 'bg-blue-500'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </button>
          ))}
        </div>

        {/* 论文列表 */}
        <div className="space-y-8">
          {publications
            .filter(p => selectedYear === null || p.year === selectedYear)
            .map(publication => (
              <motion.div
                key={publication.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-800 rounded-lg p-6 flex flex-col md:flex-row gap-6"
              >
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-2">
                    {publication.title}
                  </h2>
                  <p className="text-gray-300 mb-2">{publication.authors}</p>
                  <p className="text-gray-400">
                    {publication.venue}, {publication.year}
                  </p>
                </div>
                
                <div className="flex flex-col gap-4">
                  <a
                    href={publication.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-center"
                  >
                    下载PDF
                  </a>
                  
                  {publication.videoUrl && (
                    <div className="w-full md:w-64 h-36 bg-gray-700 rounded overflow-hidden">
                      <video
                        src={publication.videoUrl}
                        controls
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Publications; 