import { motion } from 'framer-motion';
import Image from 'next/image';

interface Language {
  code: string;
  sectionTitles: {
    rooms: string;
    [key: string]: string;
  };
  buttons: {
    back: string;
    [key: string]: string;
  };
}

type LanguageCode = 'tr' | 'en' | 'ru' | 'de';

interface RoomFeature {
  icon: string;
  text: string;
}

interface RoomType {
  title: string;
  size: string;
  image: string;
  features: RoomFeature[];
}

const commonFeatures: { [key in LanguageCode]: RoomFeature[] } = {
  tr: [
    { icon: '🌡️', text: 'Split Klima' },
    { icon: '🪑', text: 'Laminat Zemin' },
    { icon: '🔒', text: 'Kasa' },
    { icon: '🧊', text: 'Mini Bar' },
    { icon: '💨', text: 'Saç Kurutma Makinesi' },
    { icon: '🚿', text: 'Duş Kabini' },
    { icon: '📺', text: 'LCD TV' },
    { icon: '📡', text: 'Uydu Yayını' },
    { icon: '📞', text: 'Direkt Telefon' },
    { icon: '🏖️', text: 'Balkon' },
  ],
  en: [
    { icon: '🌡️', text: 'Split Air Conditioning' },
    { icon: '🪑', text: 'Laminate Flooring' },
    { icon: '🔒', text: 'Safe' },
    { icon: '🧊', text: 'Mini Bar' },
    { icon: '💨', text: 'Hair Dryer' },
    { icon: '🚿', text: 'Shower Cabin' },
    { icon: '📺', text: 'LCD TV' },
    { icon: '📡', text: 'Satellite Broadcasting' },
    { icon: '📞', text: 'Direct Phone' },
    { icon: '🏖️', text: 'Balcony' },
  ],
  ru: [
    { icon: '🌡️', text: 'Сплит-кондиционер' },
    { icon: '🪑', text: 'Ламинат' },
    { icon: '🔒', text: 'Сейф' },
    { icon: '🧊', text: 'Мини-бар' },
    { icon: '💨', text: 'Фен' },
    { icon: '🚿', text: 'Душевая кабина' },
    { icon: '📺', text: 'ЖК-телевизор' },
    { icon: '📡', text: 'Спутниковое вещание' },
    { icon: '📞', text: 'Прямой телефон' },
    { icon: '🏖️', text: 'Балкон' },
  ],
  de: [
    { icon: '🌡️', text: 'Split-Klimaanlage' },
    { icon: '🪑', text: 'Laminatboden' },
    { icon: '🔒', text: 'Safe' },
    { icon: '🧊', text: 'Minibar' },
    { icon: '💨', text: 'Haartrockner' },
    { icon: '🚿', text: 'Duschkabine' },
    { icon: '📺', text: 'LCD-Fernseher' },
    { icon: '📡', text: 'Satellitenübertragung' },
    { icon: '📞', text: 'Direkttelefon' },
    { icon: '🏖️', text: 'Balkon' },
  ],
};

const roomTypes: { [key in LanguageCode]: RoomType[] } = {
  tr: [
    {
      title: 'Standart Oda',
      size: '29 m²',
      image: '/rooms/standard.jpg',
      features: commonFeatures.tr,
    },
    {
      title: 'Aile Odası',
      size: '45 m²',
      image: '/rooms/family.jpg',
      features: [
        { icon: '🛏️', text: '2 Yatak Odalı' },
        ...commonFeatures.tr,
      ],
    },
    {
      title: 'Engelli Odası',
      size: '29 m²',
      image: '/rooms/accessible.jpg',
      features: [
        { icon: '♿', text: 'Engelli Dostu' },
        ...commonFeatures.tr,
      ],
    },
  ],
  en: [
    {
      title: 'Standard Room',
      size: '29 m²',
      image: '/rooms/standard.jpg',
      features: commonFeatures.en,
    },
    {
      title: 'Family Room',
      size: '45 m²',
      image: '/rooms/family.jpg',
      features: [
        { icon: '🛏️', text: '2 Bedrooms' },
        ...commonFeatures.en,
      ],
    },
    {
      title: 'Accessible Room',
      size: '29 m²',
      image: '/rooms/accessible.jpg',
      features: [
        { icon: '♿', text: 'Wheelchair Accessible' },
        ...commonFeatures.en,
      ],
    },
  ],
  ru: [
    {
      title: 'Стандартный номер',
      size: '29 m²',
      image: '/rooms/standard.jpg',
      features: commonFeatures.ru,
    },
    {
      title: 'Семейный номер',
      size: '45 m²',
      image: '/rooms/family.jpg',
      features: [
        { icon: '🛏️', text: '2 спальни' },
        ...commonFeatures.ru,
      ],
    },
    {
      title: 'Номер для людей с ограниченными возможностями',
      size: '29 m²',
      image: '/rooms/accessible.jpg',
      features: [
        { icon: '♿', text: 'Доступно для инвалидных колясок' },
        ...commonFeatures.ru,
      ],
    },
  ],
  de: [
    {
      title: 'Standardzimmer',
      size: '29 m²',
      image: '/rooms/standard.jpg',
      features: commonFeatures.de,
    },
    {
      title: 'Familienzimmer',
      size: '45 m²',
      image: '/rooms/family.jpg',
      features: [
        { icon: '🛏️', text: '2 Schlafzimmer' },
        ...commonFeatures.de,
      ],
    },
    {
      title: 'Barrierefreies Zimmer',
      size: '29 m²',
      image: '/rooms/accessible.jpg',
      features: [
        { icon: '♿', text: 'Rollstuhlgerecht' },
        ...commonFeatures.de,
      ],
    },
  ],
};

interface Props {
  language: Language;
}

const RoomCard = ({ room }: { room: RoomType }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white bg-opacity-95 rounded-xl overflow-hidden shadow-lg group"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={room.image}
          alt={room.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold text-[#d3ab71]">{room.title}</h3>
          <span className="text-lg font-medium bg-[#d3ab71] text-white px-3 py-1 rounded-full">
            {room.size}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {room.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-2 text-gray-700"
            >
              <span className="text-xl">{feature.icon}</span>
              <span>{feature.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function RoomTypes({ language }: Props) {
  const currentRoomTypes = roomTypes[language.code as LanguageCode] || roomTypes.en;

  return (
    <div className="min-h-screen py-16 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center text-[#d3ab71] mb-12"
      >
        {language.sectionTitles.rooms}
      </motion.h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentRoomTypes.map((room, index) => (
          <RoomCard key={index} room={room} />
        ))}
      </div>
    </div>
  );
} 