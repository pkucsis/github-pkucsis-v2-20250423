import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { motion } from 'framer-motion';

interface VisitorStats {
  totalVisitors: number;
  visitorsByCountry: {
    country: string;
    count: number;
  }[];
}

const BinaryText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="font-mono text-green-500">
      {text.split('').map((char, i) => (
        <span key={i} className="animate-pulse">
          {Math.random() > 0.5 ? '1' : '0'}
        </span>
      ))}
    </div>
  );
};

const Stats: React.FC = () => {
  const [stats, setStats] = useState<VisitorStats>({
    totalVisitors: 0,
    visitorsByCountry: []
  });

  useEffect(() => {
    // 这里将从Firebase获取实时数据
    // 临时使用模拟数据
    const mockStats: VisitorStats = {
      totalVisitors: 1234,
      visitorsByCountry: [
        { country: '中国', count: 800 },
        { country: '美国', count: 200 },
        { country: '英国', count: 100 },
        { country: '日本', count: 50 },
        { country: '其他', count: 84 }
      ]
    };
    setStats(mockStats);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">访问统计</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 3D地球模型 */}
          <div className="h-96 bg-gray-800 rounded-lg overflow-hidden">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <mesh>
                <sphereGeometry args={[2, 32, 32]} />
                <meshStandardMaterial color="#1a365d" />
              </mesh>
              <OrbitControls />
            </Canvas>
          </div>

          {/* 访问统计信息 */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <h2 className="text-2xl font-semibold mb-4">总访问量</h2>
              <div className="text-4xl font-bold text-blue-400">
                {stats.totalVisitors.toLocaleString()}
              </div>
              <div className="mt-4">
                <BinaryText text="Live Visitors" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <h2 className="text-2xl font-semibold mb-4">访问来源</h2>
              <div className="space-y-4">
                {stats.visitorsByCountry.map(({ country, count }) => (
                  <div key={country} className="flex items-center">
                    <div className="w-24 text-gray-400">{country}</div>
                    <div className="flex-1 h-4 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-blue-500"
                        initial={{ width: 0 }}
                        animate={{
                          width: `${(count / stats.totalVisitors) * 100}%`
                        }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                    <div className="w-16 text-right text-gray-400">
                      {count}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats; 