'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const imageMap = {
  'Su Polosu': 'su-polosu',
  'Havuz Oyunları': 'havuz-oyunlari',
  'Aquapark': 'aquapark',
  'Açık ve Kapalı Havuzlar': 'acik-ve-kapali-havuzlar',
  'Aerobik': 'aerobik',
  'Jimnastik': 'jimnastik',
  'Dart': 'dart',
  'Boccia': 'boccia',
  'Animasyon Şovları': 'animasyon-sovlari'
} as const;

const activities = [
  'Su Polosu', 'Havuz Oyunları', 'Aquapark',
  'Açık ve Kapalı Havuzlar', 'Aerobik', 'Jimnastik',
  'Dart', 'Boccia', 'Animasyon Şovları'
] as const;

const dailyShows = [
  { day: 'Pazartesi', show: 'Four Rooms Dans Şov', time: '21:30' },
  { day: 'Salı', show: 'Canlı Müzik', time: '21:30' },
  { day: 'Çarşamba', show: 'Colombia Dans Şov', time: '21:30' },
  { day: 'Perşembe', show: 'Canlı Müzik', time: '21:30' },
  { day: 'Cuma', show: 'Karaoke Gecesi', time: '21:30' },
  { day: 'Cumartesi', show: 'Canlı Müzik', time: '21:30' },
  { day: 'Pazar', show: 'Elemental', time: '21:30', venue: 'CHYA Arena' }
];

const hourlySchedule = [
  { time: '10:00', activity: 'Açılış Sabah Turu' },
  { time: '10:15', activity: 'Sabah Sporu' },
  { time: '10:30', activity: 'Boccia Oyunu' },
  { time: '11:00', activity: 'Dart Oyunu' },
  { time: '11:30', activity: 'Su Jimnastiği' },
  { time: '12:30', activity: 'Yemek Molası' },
  { time: '15:00', activity: 'Su Topu' },
  { time: '15:30', activity: 'Su Voleybolu' },
  { time: '16:00', activity: 'Dart Oyunu' },
  { time: '16:30', activity: 'Sağlıklı Yaşam Aktivitesi' },
  { time: '17:00', activity: 'Duraklama' }
];

const TurkishActivities = () => {
  return (
    <div className="w-full min-h-screen bg-white/95 backdrop-blur-sm p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto space-y-16"
      >
        {/* Hero Section */}
        <div className="text-center relative">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-[#d3ab71] mb-6"
          >
            Etkinliklerimiz
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
          >
            Enerjinizi eğlenceye çevirmeye var mısınız? Famous Resort'te birçok farklı spor aktivitesiyle iyi hissedebilir ve genç kalabilirsiniz. Hareketli etkinliklerle her gününüze yeni bir macera ekleyebilirsiniz. Yerinizde durmayın ve eğlenceye katılın, her aklınıza geldiğinde yüzünüzü gülümsetecek mutlu anılar yakalayın
          </motion.p>
          <div className="mt-8">
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg mx-auto max-w-4xl">
              <Image
                src="/activities/animation1.jpg"
                alt="Etkinliklerimiz"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-[#d3ab71] mb-8 text-center">
            Etkinlik Zamanı!
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md overflow-hidden group"
              >
                <div className="relative h-48">
                  <Image
                    src={`/activities/${imageMap[activity]}.jpg`}
                    alt={activity}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-semibold text-[#d3ab71] text-center">
                    {activity}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mini Club Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-[#d3ab71] mb-6">
            Mini Club
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <p className="text-lg text-gray-700 leading-relaxed">
                Minikleri eğlenceli oyunlarla buluşturan Mini Club 10:00-12:00 ve 14:00-17:00 saatleri arasında açık. 4-12 yaşlarındaki çocukları bir araya getiren bu kulüp eğlenceli ve öğretici oyunların adresi. Farklı dilleri konuşabilen eğitmenler eşliğinde Türkçe, İngilizce, Almanca ve Rusça oyunlarla çocuğunuz hem iyi vakit geçirecek hem de yeni şeyler öğrenecek! Saat 20:30'da başlayan Mini Disco etkinliğiyle minikler amfi tiyatroda doyasıya eğlenecek.
              </p>
            </div>
            <div className="md:w-1/2 relative h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/activities/mini-club.jpg"
                alt="Mini Club"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Schedules Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Daily Schedule */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-[#d3ab71] mb-6">
              Günlük Program
            </h2>
            <div className="space-y-4">
              {dailyShows.map((show, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-gray-50 rounded-lg"
                >
                  <span className="font-semibold text-gray-800">
                    {show.day}
                  </span>
                  <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-4">
                    <span className="text-[#d3ab71]">
                      {show.show}
                    </span>
                    <span className="text-gray-600">{show.time}</span>
                    {show.venue && <span className="text-gray-500">{show.venue}</span>}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hourly Schedule */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-[#d3ab71] mb-6">
              Saatlik Program
            </h2>
            <div className="space-y-4">
              {hourlySchedule.map((schedule, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                >
                  <span className="font-semibold text-gray-800">
                    {schedule.time}
                  </span>
                  <span className="text-[#d3ab71]">
                    {schedule.activity}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TurkishActivities; 