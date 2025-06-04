import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface Language {
  code: string;
  sectionTitles: {
    spa: string;
    [key: string]: string;
  };
  buttons: {
    back: string;
    [key: string]: string;
  };
  spa?: {
    description: string;
    sectionTitles: {
      freeServices: string;
      paidServices: string;
      gallery: string;
      feelBetter: string;
    };
    services: {
      sauna: string;
      hamam: string;
      indoorPool: string;
      fitnessCenter: string;
      bodyTreatment: string;
      skinCare: string;
      hairdresser: string;
      massage: string;
      peeling: string;
      therapies: string;
    };
  };
}

interface Service {
  title: string;
  type: 'free' | 'paid';
  icon: string;
}

type LanguageCode = 'tr' | 'en' | 'ru' | 'de';

const services: { [key in LanguageCode]: Service[] } = {
  tr: [
    { title: 'Sauna', type: 'free', icon: '🌡️' },
    { title: 'Hamam', type: 'free', icon: '💨' },
    { title: 'Kapalı Havuz', type: 'free', icon: '🏊‍♂️' },
    { title: 'Fitness Center', type: 'free', icon: '💪' },
    { title: 'Vücut Bakımı', type: 'paid', icon: '✨' },
    { title: 'Cilt Bakımı', type: 'paid', icon: '🧴' },
    { title: 'Kuaför', type: 'paid', icon: '💇‍♀️' },
    { title: 'Masaj', type: 'paid', icon: '💆‍♀️' },
    { title: 'Kese', type: 'paid', icon: '🧴' },
    { title: 'Terapiler', type: 'paid', icon: '🧘‍♀️' },
  ],
  en: [
    { title: 'Sauna', type: 'free', icon: '🌡️' },
    { title: 'Turkish Bath', type: 'free', icon: '💨' },
    { title: 'Indoor Pool', type: 'free', icon: '🏊‍♂️' },
    { title: 'Fitness Center', type: 'free', icon: '💪' },
    { title: 'Body Care', type: 'paid', icon: '✨' },
    { title: 'Skin Care', type: 'paid', icon: '🧴' },
    { title: 'Hairdresser', type: 'paid', icon: '💇‍♀️' },
    { title: 'Massage', type: 'paid', icon: '💆‍♀️' },
    { title: 'Peeling', type: 'paid', icon: '🧴' },
    { title: 'Therapies', type: 'paid', icon: '🧘‍♀️' },
  ],
  ru: [
    { title: 'Сауна', type: 'free', icon: '🌡️' },
    { title: 'Хамам', type: 'free', icon: '💨' },
    { title: 'Крытый бассейн', type: 'free', icon: '🏊‍♂️' },
    { title: 'Фитнес-центр', type: 'free', icon: '💪' },
    { title: 'Уход за телом', type: 'paid', icon: '✨' },
    { title: 'Уход за кожей', type: 'paid', icon: '🧴' },
    { title: 'Парикмахер', type: 'paid', icon: '💇‍♀️' },
    { title: 'Массаж', type: 'paid', icon: '💆‍♀️' },
    { title: 'Пилинг', type: 'paid', icon: '🧴' },
    { title: 'Терапии', type: 'paid', icon: '🧘‍♀️' },
  ],
  de: [
    { title: 'Sauna', type: 'free', icon: '🌡️' },
    { title: 'Hamam', type: 'free', icon: '💨' },
    { title: 'Hallenbad', type: 'free', icon: '🏊‍♂️' },
    { title: 'Fitnesscenter', type: 'free', icon: '💪' },
    { title: 'Körperpflege', type: 'paid', icon: '✨' },
    { title: 'Hautpflege', type: 'paid', icon: '🧴' },
    { title: 'Friseur', type: 'paid', icon: '💇‍♀️' },
    { title: 'Massage', type: 'paid', icon: '💆‍♀️' },
    { title: 'Peeling', type: 'paid', icon: '🧴' },
    { title: 'Therapien', type: 'paid', icon: '🧘‍♀️' },
  ],
};

const descriptions: { [key in LanguageCode]: string } = {
  tr: 'Büyüleyici doğanın ortasında şifa veren hizmetlerimizle kendinizi iyi hissedin. Famous Resort yorgunluğunuzu atmanız için muhteşem ortamlar ve profesyonel hizmetler sunuyor.',
  en: 'Feel good with our healing services in the midst of enchanting nature. Famous Resort offers magnificent environments and professional services to relieve your fatigue.',
  ru: 'Почувствуйте себя хорошо благодаря нашим оздоровительным услугам среди очаровательной природы. Famous Resort предлагает великолепную атмосферу и профессиональные услуги, чтобы снять вашу усталость.',
  de: 'Fühlen Sie sich gut mit unseren heilenden Dienstleistungen inmitten der bezaubernden Natur. Famous Resort bietet großartige Umgebungen und professionelle Dienstleistungen, um Ihre Müdigkeit zu lindern.'
};

const sectionTitles: { [key in LanguageCode]: {
  freeServices: string;
  paidServices: string;
  gallery: string;
  feelBetter: string;
}} = {
  tr: {
    freeServices: 'Ücretsiz Hizmetler',
    paidServices: 'Ücretli Hizmetler',
    gallery: 'Spa & Wellness Galeri',
    feelBetter: 'Şimdi Daha İyisiniz!'
  },
  en: {
    freeServices: 'Free Services',
    paidServices: 'Paid Services',
    gallery: 'Spa & Wellness Gallery',
    feelBetter: 'Feel Better Now!'
  },
  ru: {
    freeServices: 'Бесплатные услуги',
    paidServices: 'Платные услуги',
    gallery: 'Спа & Велнес Галерея',
    feelBetter: 'Почувствуйте себя лучше!'
  },
  de: {
    freeServices: 'Kostenlose Dienste',
    paidServices: 'Kostenpflichtige Dienste',
    gallery: 'Spa & Wellness Galerie',
    feelBetter: 'Fühlen Sie sich besser!'
  }
};

const images = [
  '/spa/1.jpg',
  '/spa/2.jpg',
  '/spa/3.jpg',
  '/spa/4.jpg',
  '/spa/5.jpg',
  '/spa/6.jpg',
  '/spa/7.jpg',
  '/spa/8.jpg',
  '/spa/9.jpg'
];

interface Props {
  language: Language;
}

export default function Spa({ language }: Props) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const currentServices = services[language.code as LanguageCode] || services.en;
  const currentDescription = descriptions[language.code as LanguageCode] || descriptions.en;
  const currentSectionTitles = sectionTitles[language.code as LanguageCode] || sectionTitles.en;

  return (
    <div className="min-h-screen bg-white bg-opacity-95">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="relative z-10 text-center text-white p-8 pt-20"
        >
          <h1 className="text-5xl font-bold mb-6">{language.sectionTitles.spa}</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            {currentDescription}
          </p>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-[#d3ab71] mb-12">
            {currentSectionTitles.feelBetter}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Free Services */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="bg-[#d3ab71] bg-opacity-10 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold mb-6 text-[#d3ab71]">
                {currentSectionTitles.freeServices}
              </h3>
              <div className="grid gap-4">
                {currentServices.filter(s => s.type === 'free').map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 text-lg"
                  >
                    <span className="text-2xl">{service.icon}</span>
                    <span>{service.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Paid Services */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="bg-[#d3ab71] bg-opacity-10 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold mb-6 text-[#d3ab71]">
                {currentSectionTitles.paidServices}
              </h3>
              <div className="grid gap-4">
                {currentServices.filter(s => s.type === 'paid').map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 text-lg"
                  >
                    <span className="text-2xl">{service.icon}</span>
                    <span>{service.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold text-center text-[#d3ab71] mb-12">
            {currentSectionTitles.gallery}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-square cursor-pointer overflow-hidden rounded-xl group"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt={`Spa Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative w-full max-w-4xl aspect-video"
          >
            <Image
              src={selectedImage}
              alt="Selected Spa Image"
              fill
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
} 