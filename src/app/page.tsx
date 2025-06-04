'use client'

import { useState, useEffect, useMemo, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import RoomTypes from './components/RoomTypes'
import Spa from './components/Spa'
import ExploreAntalya from './components/ExploreAntalya'
import HotelInfo from './components/HotelInfo'
import ALaCarte from './components/ALaCarte'
import RestaurantsAndBars from './components/RestaurantsAndBars'
import Activities from './components/Activities'
import PoolsAndBeaches from './components/PoolsAndBeaches'

interface Language {
  code: string;
  name: string;
  title: string;
  flag: string;
  welcome: string;
  reviewTitle: string;
  sectionTitles: {
    entertainment: string;
    alaCarte: string;
    poolsAndBeaches: string;
    rooms: string;
    restaurants: string;
    spa: string;
    hotelInfo: string;
    exploreAntalya: string;
    [key: string]: string;
  };
  buttons: {
    back: string;
    tripadvisor: string;
    google: string;
    holidaycheck: string;
    [key: string]: string;
  };
  generalAlaCarteInfo: string;
}

const languages: Language[] = [
  {
    code: 'tr',
    name: 'Türkçe',
    title: 'Dilinizi Seçiniz',
    flag: 'TR',
    welcome: 'Aydınbey Famous Resort Ailesine Hoşgeldiniz',
    reviewTitle: 'Güzel Yorumlarınız ile Bizi Değerlendirin',
    sectionTitles: {
      entertainment: 'Animasyon ve Aktiviteler',
      alaCarte: 'A La Carte Restoran ve Menüler',
      poolsAndBeaches: 'Plajlar & Havuzlar',
      rooms: 'Odalar ve Oda Bilgileri',
      restaurants: 'Restoranlar ve Barlar',
      spa: 'Spa ve Wellness',
      hotelInfo: 'Otel Bilgileri',
      exploreAntalya: 'Antalya\'yı Keşfedin'
    },
    buttons: {
      back: 'Geri',
      tripadvisor: 'Tripadvisor\'da Değerlendir',
      google: 'Google\'da Değerlendir',
      holidaycheck: '',
    },
    generalAlaCarteInfo: '',
  },
  {
    code: 'en',
    name: 'English',
    title: 'Select Your Language',
    flag: 'EN',
    welcome: 'Welcome to Aydınbey Famous Resort Family',
    reviewTitle: 'Rate Us with Your Beautiful Reviews',
    sectionTitles: {
      entertainment: 'Animation & Activities',
      alaCarte: 'A La Carte Restaurant & Menus',
      poolsAndBeaches: 'Beaches & Pools',
      rooms: 'Rooms & Information',
      restaurants: 'Restaurants & Bars',
      spa: 'Spa & Wellness',
      hotelInfo: 'Hotel Information',
      exploreAntalya: 'Explore Antalya'
    },
    buttons: {
      back: 'Back',
      tripadvisor: 'Review on Tripadvisor',
      google: 'Review on Google',
      holidaycheck: '',
    },
    generalAlaCarteInfo: '',
  },
  {
    code: 'ru',
    name: 'Русский',
    title: 'Выберите ваш язык',
    flag: 'RU',
    welcome: 'Добро пожаловать в семью Aydınbey Famous Resort',
    reviewTitle: 'Оцените нас своими прекрасными отзывами',
    sectionTitles: {
      entertainment: 'Анимация и Мероприятия',
      alaCarte: 'Ресторан A La Carte и меню',
      poolsAndBeaches: 'Пляжи и Бассейны',
      rooms: 'Номера и информация',
      restaurants: 'Рестораны и бары',
      spa: 'Спа и велнес',
      hotelInfo: 'Информация об отеле',
      exploreAntalya: 'Исследуйте Анталию'
    },
    buttons: {
      back: 'Назад',
      tripadvisor: 'Оставить отзыв на Tripadvisor',
      google: 'Оставить отзыв на Google',
      holidaycheck: '',
    },
    generalAlaCarteInfo: '',
  },
  {
    code: 'de',
    name: 'Deutsch',
    title: 'Wählen Sie Ihre Sprache',
    flag: 'DE',
    welcome: 'Willkommen in der Aydınbey Famous Resort Familie',
    reviewTitle: 'Bewerten Sie uns mit Ihren schönen Bewertungen',
    sectionTitles: {
      entertainment: 'Animation & Aktivitäten',
      alaCarte: 'A La Carte Restaurant & Menüs',
      poolsAndBeaches: 'Strände & Pools',
      rooms: 'Zimmer & Zimmerinformationen',
      restaurants: 'Restaurants & Bars',
      spa: 'Spa & Wellness',
      hotelInfo: 'Hotelinformationen',
      exploreAntalya: 'Entdecken Sie Antalya'
    },
    buttons: {
      back: 'Zurück',
      tripadvisor: 'Bewerten Sie auf Tripadvisor',
      google: 'Bewerten Sie auf Google',
      holidaycheck: 'Bewerten Sie auf HolidayCheck',
    },
    generalAlaCarteInfo: '',
  }
];

const reviewLinks: {
  [key in 'tr' | 'en' | 'de' | 'ru']: Array<{
    name: string;
    url: string;
  }>;
} = {
  tr: [
    { name: 'TripAdvisor', url: 'https://www.tripadvisor.com.tr/UserReviewEdit-g4833191-d581388-AydInbey_Famous_Resort-Bogazkent_Serik_District_Turkish_Mediterranean_Coast.html' },
    { name: 'Google', url: 'https://www.google.com/travel/hotels/entity/CgoIsN-Lm9f8lrI4EAE/reviews' }
  ],
  en: [
    { name: 'TripAdvisor', url: 'https://www.tripadvisor.com/UserReviewEdit-g4833191-d581388-AydInbey_Famous_Resort-Bogazkent_Serik_District_Turkish_Mediterranean_Coast.html' },
    { name: 'Google', url: 'https://www.google.com/travel/hotels/entity/CgoIsN-Lm9f8lrI4EAE/reviews' }
  ],
  ru: [
    { name: 'TripAdvisor', url: 'https://www.tripadvisor.ru/UserReviewEdit-g4833191-d581388-AydInbey_Famous_Resort-Bogazkent_Serik_District_Turkish_Mediterranean_Coast.html' },
    { name: 'Google', url: 'https://www.google.com/travel/hotels/entity/CgoIsN-Lm9f8lrI4EAE/reviews' }
  ],
  de: [
    { name: 'TripAdvisor', url: 'https://www.tripadvisor.de/UserReviewEdit-g4833191-d581388-AydInbey_Famous_Resort-Bogazkent_Serik_District_Turkish_Mediterranean_Coast.html' },
    { name: 'HolidayCheck', url: 'https://www.holidaycheck.de/wcf/hotelreview/rate/a9214049-1257-3497-8b24-6527d5468d7e' },
    { name: 'Google', url: 'https://www.google.com/travel/hotels/entity/CgoIsN-Lm9f8lrI4EAE/reviews' }
  ]
};

const BackgroundSlideshow = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const totalImages = 5

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % totalImages)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="slideshow fixed inset-0 -z-10">
      {[...Array(totalImages)].map((_, index) => (
        <div
          key={index}
          className={`slideshow-image absolute inset-0 transition-opacity duration-1000 ${currentImage === index ? 'opacity-30' : 'opacity-0'}`}
          style={{
            backgroundImage: `url(/hotel/${index + 1}.jpeg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      ))}
    </div>
  )
}

const WelcomePage = ({ language, onComplete }: { language: typeof languages[0], onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 4000)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-white z-50"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Image
            src="/logo.png"
            alt="Aydınbey Famous Resort Logo"
            width={300}
            height={300}
            className="mx-auto"
            style={{ objectFit: 'contain' }}
          />
        </motion.div>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl font-bold"
          style={{ color: '#d3ab71' }}
        >
          {language.welcome}
        </motion.h1>
      </div>
    </motion.div>
  )
}

const MainContent = ({ language, showReviewOptions, setShowReviewOptions }: { 
  language: typeof languages[0], 
  showReviewOptions: boolean, 
  setShowReviewOptions: (show: boolean) => void 
}) => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [selectedSubSection, setSelectedSubSection] = useState<string | null>(null);

  const handleBackClick = () => {
    if (selectedSection === 'alaCarte' && selectedSubSection) {
      setSelectedSubSection(null);
    } else {
      setSelectedSection(null);
      setSelectedSubSection(null);
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Video Background */}
      <div className="fixed inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/otel.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      {!selectedSection && (
        <>
          {/* Header */}
          <div className="relative z-20">
            <div className="w-full bg-white shadow-md">
              <div className="container mx-auto px-4 py-1">
                <div className="flex justify-center items-center">
                  <Image
                    src="/logo2.png"
                    alt="Aydınbey Famous Resort"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Review Butonu - En üstte kalacak */}
          <div className="container mx-auto px-4 mt-12 mb-8 relative z-10">
            <div className="flex flex-col gap-4 items-center">
              {/* Değerlendirme Butonu */}
              <motion.button
                onClick={() => setShowReviewOptions(!showReviewOptions)}
                animate={{
                  scale: [1, 1.02, 1],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full max-w-2xl px-8 py-4 bg-gradient-to-r from-[#d3ab71] to-[#b28b4f] text-white text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 transition-all duration-300"
              >
                <span>✨</span>
                <span>{language.reviewTitle}</span>
                <span>✨</span>
              </motion.button>

              {/* Değerlendirme Seçenekleri */}
              <AnimatePresence>
                {showReviewOptions && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-full max-w-2xl bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden"
                  >
                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-[#d3ab71] mb-6 text-center">
                        {language.reviewTitle}
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {reviewLinks[language.code as keyof typeof reviewLinks].map((link, index) => (
                          <motion.a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-4 bg-gradient-to-r from-[#d3ab71] to-[#b28b4f] text-white text-lg font-medium rounded-xl shadow-md hover:shadow-lg flex items-center justify-center space-x-2 transition-all duration-300"
                          >
                            <span>{language.buttons[link.name.toLowerCase()]}</span>
                          </motion.a>
                        ))}
                      </div>
                      <motion.button
                        onClick={() => setShowReviewOptions(false)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 px-4 py-2 text-[#d3ab71] hover:text-[#b28b4f] transition-colors mx-auto block"
                      >
                        {language.buttons.back}
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Feature Buttons Grid - 2 columns with 4 buttons each */}
          <div className="container mx-auto px-4 py-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              {/* Sol Sütun - İlk 4 buton */}
              <div className="space-y-4">
                {Object.entries(language.sectionTitles).slice(0, 4).map(([buttonKey, title], index) => (
                  <motion.button
                    key={buttonKey}
                    variants={{
                      hover: { scale: 1.05 },
                      tap: { scale: 0.95 }
                    }}
                    whileHover="hover"
                    whileTap="tap"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedSection(buttonKey as string)}
                    className="relative w-full px-6 py-5 rounded-xl text-center text-lg font-semibold shadow-lg transition-all duration-300 overflow-hidden group"
                  >
                    {/* Button Background */}
                    <div className="absolute inset-0 bg-white/90 backdrop-blur-sm transition-all duration-300 group-hover:bg-white" />
                    
                    {/* Button Content */}
                    <span className="relative z-10 text-[#d3ab71] group-hover:text-[#b28b4f] transition-colors duration-300">
                      {title}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Sağ Sütun - Son 4 buton */}
              <div className="space-y-4">
                {Object.entries(language.sectionTitles).slice(4).map(([buttonKey, title], index) => (
                  <motion.button
                    key={buttonKey}
                    variants={{
                      hover: { scale: 1.05 },
                      tap: { scale: 0.95 }
                    }}
                    whileHover="hover"
                    whileTap="tap"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (index + 4) * 0.1 }}
                    onClick={() => setSelectedSection(buttonKey as string)}
                    className="relative w-full px-6 py-5 rounded-xl text-center text-lg font-semibold shadow-lg transition-all duration-300 overflow-hidden group"
                  >
                    {/* Button Background */}
                    <div className="absolute inset-0 bg-white/90 backdrop-blur-sm transition-all duration-300 group-hover:bg-white" />
                    
                    {/* Button Content */}
                    <span className="relative z-10 text-[#d3ab71] group-hover:text-[#b28b4f] transition-colors duration-300">
                      {title}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {selectedSection && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen w-full relative"
        >
          {/* Video Background with reduced opacity */}
          <div className="fixed inset-0 w-full h-full overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            >
              <source src="/otel.mp4" type="video/mp4" />
            </video>
            {/* Light overlay for better content visibility */}
            <div className="absolute inset-0 bg-white/80" />
          </div>

          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            onClick={handleBackClick}
            className="fixed top-4 left-4 z-50 px-4 py-2 bg-white text-[#d3ab71] rounded-xl shadow-lg hover:bg-[#d3ab71] hover:text-white transition-colors flex items-center space-x-2"
          >
            <span>←</span>
            <span>{language.buttons.back}</span>
          </motion.button>

          {/* Content container with proper z-index */}
          <div className="relative z-10">
            {selectedSection && (
              <>
                {selectedSection === 'entertainment' && <Activities language={language.code} />}
                {selectedSection === 'poolsAndBeaches' && <PoolsAndBeaches language={language.code} />}
                {selectedSection === 'alaCarte' && (
                  <ALaCarte 
                    language={language} 
                    selectedSubSection={selectedSubSection}
                    setSelectedSubSection={setSelectedSubSection}
                  />
                )}
                {selectedSection === 'rooms' && <RoomTypes language={language} />}
                {selectedSection === 'restaurants' && <RestaurantsAndBars language={language.code} />}
                {selectedSection === 'spa' && <Spa language={language} />}
                {selectedSection === 'hotelInfo' && <HotelInfo language={language} />}
                {selectedSection === 'exploreAntalya' && <ExploreAntalya language={language} />}
              </>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState('')
  const [showWelcome, setShowWelcome] = useState(false)
  const [showMain, setShowMain] = useState(false)
  const [showReviewOptions, setShowReviewOptions] = useState(false)
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)

  const handleVideoError = () => {
    console.error('Video loading failed')
    setVideoError(true)
  }

  useEffect(() => {
    if (!showWelcome && !showMain) {
      const interval = setInterval(() => {
        setCurrentTitleIndex((prev) => (prev + 1) % languages.length)
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [showWelcome, showMain])

  const handleLanguageSelect = (langCode: string) => {
    setSelectedLanguage(langCode)
    setShowWelcome(true)
    setTimeout(() => {
      setShowWelcome(false)
      setShowMain(true)
    }, 3000)
  }

  const currentLang = languages.find(lang => lang.code === selectedLanguage) || languages[0]

  return (
      <AnimatePresence>
        {!showWelcome && !showMain && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex flex-col items-center justify-center p-4 relative"
          >
            {/* Video Background */}
            <div className="fixed inset-0 w-full h-full overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/otel.mp4" type="video/mp4" />
              </video>
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center relative z-10 mb-16"
            >
              <motion.div className="flex flex-col items-center space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-7xl font-bold text-white mb-2 tracking-wider"
                  style={{
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    fontFamily: 'Playfair Display, serif'
                  }}
                >
                  Aydınbey
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-0.5 w-32 bg-gradient-to-r from-transparent via-[#d3ab71] to-transparent my-2"
                />
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-6xl font-semibold"
                  style={{
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    fontFamily: 'Playfair Display, serif',
                    color: '#d3ab71'
                  }}
                >
                  Famous Resort
                </motion.h2>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative z-10 w-full max-w-md"
            >
              <div className="bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.h3
                    key={currentTitleIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-2xl font-medium text-[#d3ab71] text-center mb-8"
                  >
                    {languages[currentTitleIndex].title}
                  </motion.h3>
                </AnimatePresence>
                <div className="grid grid-cols-2 gap-4">
                  {languages.map((lang) => (
                    <motion.button
                      key={lang.code}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleLanguageSelect(lang.code)}
                      className="px-6 py-4 rounded-xl flex items-center gap-4 bg-gradient-to-r from-[#d3ab71] to-[#b28b4f] text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <span className="text-2xl flex-shrink-0">{lang.flag}</span>
                      <span className="text-lg">{lang.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {showWelcome && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            {/* Video Background */}
            <div className="fixed inset-0 w-full h-full overflow-hidden">
              {!videoError && (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  onLoadedData={() => setIsVideoLoaded(true)}
                  onError={handleVideoError}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
                >
                  <source src="/otel.mp4" type="video/mp4" />
                </video>
              )}
              {(!isVideoLoaded || videoError) && (
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'url(/otel2.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              )}
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50" />
            </div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1.1, 1],
                opacity: [0, 1, 1]
              }}
              transition={{ 
                duration: 1.5,
                times: [0, 0.7, 1]
              }}
              className="relative z-10 text-center p-12 bg-black bg-opacity-20 backdrop-blur-sm rounded-2xl"
            >
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-5xl font-bold text-white mb-4 drop-shadow-lg whitespace-pre-line"
                style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                }}
              >
                {currentLang.welcome}
              </motion.h1>
            </motion.div>
          </motion.div>
        )}

        {showMain && (
          <MainContent 
            language={currentLang}
            showReviewOptions={showReviewOptions}
            setShowReviewOptions={setShowReviewOptions}
          />
        )}
      </AnimatePresence>
  );
} 