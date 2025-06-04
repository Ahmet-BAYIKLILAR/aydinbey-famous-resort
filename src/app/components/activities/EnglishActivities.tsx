'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const imageMap = {
  'Water Polo': 'su-polosu',
  'Pool Games': 'havuz-oyunlari',
  'Aquapark': 'aquapark',
  'Indoor & Outdoor Pools': 'acik-ve-kapali-havuzlar',
  'Aerobics': 'aerobik',
  'Gymnastics': 'jimnastik',
  'Darts': 'dart',
  'Boccia': 'boccia',
  'Animation Shows': 'animasyon-sovlari'
} as const;

const activities = [
  'Water Polo', 'Pool Games', 'Aquapark',
  'Indoor & Outdoor Pools', 'Aerobics', 'Gymnastics',
  'Darts', 'Boccia', 'Animation Shows'
] as const;

const dailyShows = [
  { day: 'Monday', show: 'Four Rooms Dance Show', time: '21:30' },
  { day: 'Tuesday', show: 'Live Music', time: '21:30' },
  { day: 'Wednesday', show: 'Colombia Dance Show', time: '21:30' },
  { day: 'Thursday', show: 'Live Music', time: '21:30' },
  { day: 'Friday', show: 'Karaoke Night', time: '21:30' },
  { day: 'Saturday', show: 'Live Music', time: '21:30' },
  { day: 'Sunday', show: 'Elemental', time: '21:30', venue: 'CHYA Arena' }
];

const hourlySchedule = [
  { time: '10:00', activity: 'Morning Opening Tour' },
  { time: '10:15', activity: 'Morning Gym' },
  { time: '10:30', activity: 'Boccia Game' },
  { time: '11:00', activity: 'Darts Game' },
  { time: '11:30', activity: 'Aqua Gym' },
  { time: '12:30', activity: 'Lunch Break' },
  { time: '15:00', activity: 'Water Polo' },
  { time: '15:30', activity: 'Water Volleyball' },
  { time: '16:00', activity: 'Darts Game' },
  { time: '16:30', activity: 'Wellness Activity' },
  { time: '17:00', activity: 'Break' }
];

const EnglishActivities = () => {
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
            Our Activities
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
          >
            Ready to turn your energy into fun? At Famous Resort, you can feel good and stay young with many different sports activities. You can add a new adventure to each day with dynamic activities. Don't stand still and join the fun, capture happy memories that will make you smile whenever you think about them
          </motion.p>
          <div className="mt-8">
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg mx-auto max-w-4xl">
              <Image
                src="/activities/animation1.jpg"
                alt="Our Activities"
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
            Activity Time!
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
                Mini Club, which brings children together with fun games, is open between 10:00-12:00 and 14:00-17:00. This club brings together children aged 4-12 and is the address of fun and educational games. With instructors who can speak different languages, your child will both have a good time and learn new things with games in Turkish, English, German and Russian! With the Mini Disco event starting at 20:30, the little ones will have a great time in the amphitheater.
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
              Daily Schedule
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
              Hourly Schedule
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

export default EnglishActivities; 