'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const imageMap = {
  'Wasserball': 'su-polosu',
  'Poolspiele': 'havuz-oyunlari',
  'Aquapark': 'aquapark',
  'Innen- & Außenpools': 'acik-ve-kapali-havuzlar',
  'Aerobic': 'aerobik',
  'Gymnastik': 'jimnastik',
  'Darts': 'dart',
  'Boccia': 'boccia',
  'Animationsshows': 'animasyon-sovlari'
} as const;

const activities = [
  'Wasserball', 'Poolspiele', 'Aquapark',
  'Innen- & Außenpools', 'Aerobic', 'Gymnastik',
  'Darts', 'Boccia', 'Animationsshows'
] as const;

const dailyShows = [
  { day: 'Montag', show: 'Four Rooms Tanzshow', time: '21:30' },
  { day: 'Dienstag', show: 'Live-Musik', time: '21:30' },
  { day: 'Mittwoch', show: 'Colombia Tanzshow', time: '21:30' },
  { day: 'Donnerstag', show: 'Live-Musik', time: '21:30' },
  { day: 'Freitag', show: 'Karaoke-Abend', time: '21:30' },
  { day: 'Samstag', show: 'Live-Musik', time: '21:30' },
  { day: 'Sonntag', show: 'Elemental', time: '21:30', venue: 'CHYA Arena' }
];

const hourlySchedule = [
  { time: '10:00', activity: 'Morgendliche Eröffnungstour' },
  { time: '10:15', activity: 'Morgengymnastik' },
  { time: '10:30', activity: 'Boccia-Spiel' },
  { time: '11:00', activity: 'Dart-Spiel' },
  { time: '11:30', activity: 'Wassergymnastik' },
  { time: '12:30', activity: 'Mittagspause' },
  { time: '15:00', activity: 'Wasserball' },
  { time: '15:30', activity: 'Wasservolleyball' },
  { time: '16:00', activity: 'Dart-Spiel' },
  { time: '16:30', activity: 'Wellness-Aktivität' },
  { time: '17:00', activity: 'Pause' }
];

const GermanActivities = () => {
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
            Unsere Aktivitäten
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
          >
            Sind Sie bereit, Ihre Energie in Spaß zu verwandeln? Im Famous Resort können Sie sich mit vielen verschiedenen Sportaktivitäten gut fühlen und jung bleiben. Mit dynamischen Aktivitäten können Sie jeden Tag ein neues Abenteuer erleben. Bleiben Sie nicht stehen und machen Sie mit, sammeln Sie glückliche Erinnerungen, die Sie zum Lächeln bringen, wann immer Sie daran denken
          </motion.p>
          <div className="mt-8">
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg mx-auto max-w-4xl">
              <Image
                src="/activities/animation1.jpg"
                alt="Unsere Aktivitäten"
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
            Zeit für Aktivitäten!
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
                Der Mini Club, der Kinder mit lustigen Spielen zusammenbringt, ist von 10:00-12:00 und 14:00-17:00 Uhr geöffnet. Dieser Club bringt Kinder im Alter von 4-12 Jahren zusammen und ist die Adresse für Spaß und lehrreiche Spiele. Mit Betreuern, die verschiedene Sprachen sprechen können, wird Ihr Kind mit Spielen auf Türkisch, Englisch, Deutsch und Russisch sowohl eine gute Zeit haben als auch Neues lernen! Bei der Mini Disco, die um 20:30 Uhr beginnt, werden die Kleinen im Amphitheater viel Spaß haben.
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
              Tagesprogramm
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
              Stundenprogramm
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
                  <span className="font-semibold text-gray-800">{schedule.time}</span>
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

export default GermanActivities; 