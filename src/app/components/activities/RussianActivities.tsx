'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const imageMap = {
  'Водное Поло': 'su-polosu',
  'Игры в Бассейне': 'havuz-oyunlari',
  'Аквапарк': 'aquapark',
  'Крытые и Открытые Бассейны': 'acik-ve-kapali-havuzlar',
  'Аэробика': 'aerobik',
  'Гимнастика': 'jimnastik',
  'Дартс': 'dart',
  'Бочча': 'boccia',
  'Анимационные Шоу': 'animasyon-sovlari'
} as const;

const activities = [
  'Водное Поло', 'Игры в Бассейне', 'Аквапарк',
  'Крытые и Открытые Бассейны', 'Аэробика', 'Гимнастика',
  'Дартс', 'Бочча', 'Анимационные Шоу'
] as const;

const dailyShows = [
  { day: 'Понедельник', show: 'Танцевальное Шоу Four Rooms', time: '21:30' },
  { day: 'Вторник', show: 'Живая Музыка', time: '21:30' },
  { day: 'Среда', show: 'Танцевальное Шоу Colombia', time: '21:30' },
  { day: 'Четверг', show: 'Живая Музыка', time: '21:30' },
  { day: 'Пятница', show: 'Караоке Вечер', time: '21:30' },
  { day: 'Суббота', show: 'Живая Музыка', time: '21:30' },
  { day: 'Воскресенье', show: 'Elemental', time: '21:30', venue: 'CHYA Arena' }
];

const hourlySchedule = [
  { time: '10:00', activity: 'Утренний Обзорный Тур' },
  { time: '10:15', activity: 'Утренняя Гимнастика' },
  { time: '10:30', activity: 'Игра в Бочча' },
  { time: '11:00', activity: 'Игра в Дартс' },
  { time: '11:30', activity: 'Аквааэробика' },
  { time: '12:30', activity: 'Обеденный Перерыв' },
  { time: '15:00', activity: 'Водное Поло' },
  { time: '15:30', activity: 'Водный Волейбол' },
  { time: '16:00', activity: 'Игра в Дартс' },
  { time: '16:30', activity: 'Оздоровительное Мероприятие' },
  { time: '17:00', activity: 'Перерыв' }
];

const RussianActivities = () => {
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
            Наши Мероприятия
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
          >
            Готовы превратить свою энергию в веселье? В Famous Resort вы можете чувствовать себя хорошо и оставаться молодыми благодаря различным спортивным мероприятиям. С динамичными мероприятиями вы можете добавить новое приключение каждый день. Не стойте на месте и присоединяйтесь к веселью, создавайте счастливые воспоминания, которые заставят вас улыбнуться, когда бы вы о них ни подумали
          </motion.p>
          <div className="mt-8">
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg mx-auto max-w-4xl">
              <Image
                src="/activities/animation1.jpg"
                alt="Наши Мероприятия"
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
            Время Активного Отдыха!
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
            Мини Клуб
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <p className="text-lg text-gray-700 leading-relaxed">
                Мини Клуб, который объединяет детей веселыми играми, открыт с 10:00-12:00 и 14:00-17:00. Этот клуб объединяет детей в возрасте от 4 до 12 лет и является местом веселых и познавательных игр. С инструкторами, говорящими на разных языках, ваш ребенок будет хорошо проводить время и узнавать новое с играми на турецком, английском, немецком и русском языках! На Мини Диско, которое начинается в 20:30, малыши будут веселиться в амфитеатре.
              </p>
            </div>
            <div className="md:w-1/2 relative h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/activities/mini-club.jpg"
                alt="Мини Клуб"
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
              Ежедневная Программа
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
              Почасовая Программа
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

export default RussianActivities; 