import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  type: 'notice' | 'event' | 'news';
  videoUrl?: string;
}

const Announcements: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  useEffect(() => {
    // 这里将从后端获取数据
    // 临时使用模拟数据
    const mockAnnouncements: Announcement[] = [
      {
        id: '1',
        title: '重要通知',
        content: '通知内容...',
        date: '2024-04-23',
        type: 'notice',
        videoUrl: '/videos/announcement1.mp4'
      },
      // 添加更多通知...
    ];
    setAnnouncements(mockAnnouncements);
  }, []);

  const types = ['notice', 'event', 'news'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">通知公告</h1>

        {/* 类型筛选 */}
        <div className="flex space-x-4 mb-8">
          <button
            className={`px-4 py-2 rounded ${
              selectedType === null
                ? 'bg-blue-500'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
            onClick={() => setSelectedType(null)}
          >
            全部
          </button>
          {types.map(type => (
            <button
              key={type}
              className={`px-4 py-2 rounded ${
                selectedType === type
                  ? 'bg-blue-500'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
              onClick={() => setSelectedType(type)}
            >
              {type === 'notice' ? '通知' : type === 'event' ? '活动' : '新闻'}
            </button>
          ))}
        </div>

        {/* 公告列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {announcements
            .filter(a => selectedType === null || a.type === selectedType)
            .map(announcement => (
              <motion.div
                key={announcement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-800 rounded-lg overflow-hidden"
              >
                {announcement.videoUrl && (
                  <div className="relative h-48">
                    <video
                      src={announcement.videoUrl}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-400">
                      {announcement.date}
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-500">
                      {announcement.type === 'notice'
                        ? '通知'
                        : announcement.type === 'event'
                        ? '活动'
                        : '新闻'}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">
                    {announcement.title}
                  </h2>
                  <p className="text-gray-300">{announcement.content}</p>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Announcements; 