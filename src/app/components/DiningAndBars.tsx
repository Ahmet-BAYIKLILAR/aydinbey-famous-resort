import { motion } from 'framer-motion';
import { IoRestaurant, IoTime, IoWine } from 'react-icons/io5';
import { MdRestaurantMenu, MdLocalBar } from 'react-icons/md';

interface Venue {
  name: string;
  location: string;
  serviceType: string;
  hours: string;
  description?: string;
  category: 'restaurant' | 'bar';
}

interface Language {
  code: string;
  titles: {
    restaurants: string;
    bars: string;
    location: string;
    serviceType: string;
    hours: string;
  };
  venues: Venue[];
}

const languages: { [key: string]: Language } = {
  tr: {
    code: 'tr',
    titles: {
      restaurants: 'RESTORANLAR',
      bars: 'BARLAR',
      location: 'Konum',
      serviceType: 'Servis Tipi',
      hours: 'Çalışma Saatleri'
    },
    venues: [
      // Restoranlar
      {
        name: 'Kahvaltı',
        location: 'Ana Restaurant',
        serviceType: 'Açık Büfe',
        hours: '07:00 - 10:00',
        category: 'restaurant'
      },
      {
        name: 'Geç Kahvaltı',
        location: 'Ana Restaurant',
        serviceType: 'Açık Büfe',
        hours: '10:00 - 10:30',
        category: 'restaurant'
      },
      {
        name: 'Öğlen Yemeği',
        location: 'Ana Restaurant',
        serviceType: 'Açık Büfe',
        hours: '12:30 - 14:00',
        category: 'restaurant'
      },
      {
        name: 'Akşam Yemeği',
        location: 'Ana Restaurant',
        serviceType: 'Açık Büfe',
        hours: '18:30 - 21:00',
        category: 'restaurant'
      },
      {
        name: 'Gece Büfesi',
        location: 'Ana Restaurant',
        serviceType: 'Açık Büfe',
        hours: '23:00 - 01:00',
        category: 'restaurant'
      },
      {
        name: 'Snack Restoran',
        location: 'Olivia Restaurant',
        serviceType: 'Mini Açık Büfe',
        hours: '12:00 - 16:00',
        category: 'restaurant'
      },
      {
        name: 'Pizza-Hamburger-Makarna',
        location: 'Sultan Restaurant',
        serviceType: 'Masaya Servis',
        hours: '12:00 - 16:00',
        category: 'restaurant'
      },
      {
        name: 'Gözleme',
        location: 'Gözleme Büfesi',
        serviceType: 'Self Servis',
        hours: '11:00 - 16:00',
        category: 'restaurant'
      },
      {
        name: 'Pastane',
        location: 'Patisserie',
        serviceType: 'Self Servis',
        hours: '11:00 - 17:00',
        category: 'restaurant'
      },
      {
        name: 'Dondurma',
        location: 'Olivia Restaurant',
        serviceType: 'Self Servis',
        hours: '12:00 - 16:00',
        category: 'restaurant'
      },
      // Barlar
      {
        name: 'Üst Lobby Keyif Bar',
        location: 'Üst Lobby',
        serviceType: 'Self Servis',
        hours: '09:00 - 00:00',
        description: 'Çay, Bitki Çayları ve Kahve Çeşitleri',
        category: 'bar'
      },
      {
        name: 'Alt Lobby Queens Bar',
        location: 'Alt Lobby',
        serviceType: 'Self Servis',
        hours: '24h',
        description: 'Tüm yerli ve yabancı Alkollü ve Alkolsüz içecekler',
        category: 'bar'
      },
      {
        name: 'Chia Pool Bar',
        location: 'Havuz Başı',
        serviceType: 'Self Servis',
        hours: '10:00 - 00:00',
        description: 'Tüm yerli ve yabancı Alkollü ve Alkolsüz içecekler',
        category: 'bar'
      },
      {
        name: 'Snack Bar',
        location: 'Havuz Başı',
        serviceType: 'Masaya Servis',
        hours: '12:00 - 16:00',
        description: 'Tüm yerli ve yabancı Alkollü ve Alkolsüz içecekler',
        category: 'bar'
      }
    ]
  },
  en: {
    code: 'en',
    titles: {
      restaurants: 'RESTAURANTS',
      bars: 'BARS',
      location: 'Location',
      serviceType: 'Service Type',
      hours: 'Working Hours'
    },
    venues: [] // Will be populated with translations
  },
  ru: {
    code: 'ru',
    titles: {
      restaurants: 'РЕСТОРАНЫ',
      bars: 'БАРЫ',
      location: 'Расположение',
      serviceType: 'Тип обслуживания',
      hours: 'Часы работы'
    },
    venues: [] // Will be populated with translations
  },
  de: {
    code: 'de',
    titles: {
      restaurants: 'RESTAURANTS',
      bars: 'BARS',
      location: 'Standort',
      serviceType: 'Servicetyp',
      hours: 'Öffnungszeiten'
    },
    venues: [] // Will be populated with translations
  }
};

// Populate translations
languages.en.venues = languages.tr.venues.map(venue => ({
  ...venue,
  name: translateToEnglish(venue.name),
  location: translateToEnglish(venue.location),
  serviceType: translateToEnglish(venue.serviceType),
  description: venue.description ? translateToEnglish(venue.description) : undefined
}));

languages.ru.venues = languages.tr.venues.map(venue => ({
  ...venue,
  name: translateToRussian(venue.name),
  location: translateToRussian(venue.location),
  serviceType: translateToRussian(venue.serviceType),
  description: venue.description ? translateToRussian(venue.description) : undefined
}));

languages.de.venues = languages.tr.venues.map(venue => ({
  ...venue,
  name: translateToGerman(venue.name),
  location: translateToGerman(venue.location),
  serviceType: translateToGerman(venue.serviceType),
  description: venue.description ? translateToGerman(venue.description) : undefined
}));

const VenueTable = ({ venues, titles }: { venues: Venue[]; titles: Language['titles'] }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-xl shadow-lg">
        <thead>
          <tr className="bg-[#d3ab71] text-white">
            <th className="px-6 py-4 text-left">{titles.location}</th>
            <th className="px-6 py-4 text-left">{titles.serviceType}</th>
            <th className="px-6 py-4 text-left">{titles.hours}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {venues.map((venue, index) => (
            <motion.tr
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="hover:bg-gray-50"
            >
              <td className="px-6 py-4">
                <div className="font-semibold text-gray-900">{venue.name}</div>
                <div className="text-sm text-gray-600">{venue.location}</div>
                {venue.description && (
                  <div className="text-sm text-gray-500 mt-1">{venue.description}</div>
                )}
              </td>
              <td className="px-6 py-4 text-gray-800">{venue.serviceType}</td>
              <td className="px-6 py-4 text-gray-800">{venue.hours}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function DiningAndBars({ language = 'tr' }: { language?: string }) {
  const currentLanguage = languages[language] || languages.tr;
  const restaurants = currentLanguage.venues.filter(venue => venue.category === 'restaurant');
  const bars = currentLanguage.venues.filter(venue => venue.category === 'bar');

  return (
    <div className="min-h-screen py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Restoranlar */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex items-center justify-center space-x-3 mb-8">
            <IoRestaurant className="w-8 h-8 text-[#d3ab71]" />
            <h2 className="text-3xl font-bold text-[#d3ab71] text-center">
              {currentLanguage.titles.restaurants}
            </h2>
          </div>
          <VenueTable venues={restaurants} titles={currentLanguage.titles} />
        </motion.section>

        {/* Barlar */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex items-center justify-center space-x-3 mb-8">
            <IoWine className="w-8 h-8 text-[#d3ab71]" />
            <h2 className="text-3xl font-bold text-[#d3ab71] text-center">
              {currentLanguage.titles.bars}
            </h2>
          </div>
          <VenueTable venues={bars} titles={currentLanguage.titles} />
        </motion.section>
      </div>
    </div>
  );
}

// Translation functions (same as before)
function translateToEnglish(text: string): string {
  const translations: { [key: string]: string } = {
    'Ana Restaurant': 'Main Restaurant',
    'Açık Büfe': 'Open Buffet',
    'Mini Açık Büfe': 'Mini Open Buffet',
    'Masaya Servis': 'Table Service',
    'Self Servis': 'Self Service',
    'Kahvaltı': 'Breakfast',
    'Geç Kahvaltı': 'Late Breakfast',
    'Öğlen Yemeği': 'Lunch',
    'Akşam Yemeği': 'Dinner',
    'Gece Büfesi': 'Night Buffet',
    'Snack Restoran': 'Snack Restaurant',
    'Pizza-Hamburger-Makarna': 'Pizza-Hamburger-Pasta',
    'Gözleme Büfesi': 'Gözleme Buffet',
    'Pastane': 'Patisserie',
    'Dondurma': 'Ice Cream',
    'Üst Lobby': 'Upper Lobby',
    'Alt Lobby': 'Lower Lobby',
    'Havuz Başı': 'Poolside',
    'Çay, Bitki Çayları ve Kahve Çeşitleri': 'Tea, Herbal Teas and Coffee Varieties',
    'Tüm yerli ve yabancı Alkollü ve Alkolsüz içecekler': 'All domestic and imported Alcoholic and Non-Alcoholic beverages'
  };
  return translations[text] || text;
}

function translateToRussian(text: string): string {
  const translations: { [key: string]: string } = {
    'Ana Restaurant': 'Главный Ресторан',
    'Açık Büfe': 'Шведский стол',
    'Mini Açık Büfe': 'Мини-шведский стол',
    'Masaya Servis': 'Обслуживание за столиком',
    'Self Servis': 'Самообслуживание',
    'Kahvaltı': 'Завтрак',
    'Geç Kahvaltı': 'Поздний завтрак',
    'Öğlen Yemeği': 'Обед',
    'Akşam Yemeği': 'Ужин',
    'Gece Büfesi': 'Ночной буфет',
    'Snack Restoran': 'Снэк-ресторан',
    'Pizza-Hamburger-Makarna': 'Пицца-Гамбургер-Паста',
    'Gözleme Büfesi': 'Гёзлеме-буфет',
    'Pastane': 'Кондитерская',
    'Dondurma': 'Мороженое',
    'Üst Lobby': 'Верхнее лобби',
    'Alt Lobby': 'Нижнее лобби',
    'Havuz Başı': 'У бассейна',
    'Çay, Bitki Çayları ve Kahve Çeşitleri': 'Чай, травяные чаи и разные виды кофе',
    'Tüm yerli ve yabancı Alkollü ve Alkolsüz içecekler': 'Все местные и импортные алкогольные и безалкогольные напитки'
  };
  return translations[text] || text;
}

function translateToGerman(text: string): string {
  const translations: { [key: string]: string } = {
    'Ana Restaurant': 'Hauptrestaurant',
    'Açık Büfe': 'Buffet',
    'Mini Açık Büfe': 'Mini-Buffet',
    'Masaya Servis': 'Tischservice',
    'Self Servis': 'Selbstbedienung',
    'Kahvaltı': 'Frühstück',
    'Geç Kahvaltı': 'Spätes Frühstück',
    'Öğlen Yemeği': 'Mittagessen',
    'Akşam Yemeği': 'Abendessen',
    'Gece Büfesi': 'Nachtbuffet',
    'Snack Restoran': 'Snack-Restaurant',
    'Pizza-Hamburger-Makarna': 'Pizza-Hamburger-Pasta',
    'Gözleme Büfesi': 'Gözleme-Buffet',
    'Pastane': 'Konditorei',
    'Dondurma': 'Eiscreme',
    'Üst Lobby': 'Obere Lobby',
    'Alt Lobby': 'Untere Lobby',
    'Havuz Başı': 'Am Pool',
    'Çay, Bitki Çayları ve Kahve Çeşitleri': 'Tee, Kräutertees und Kaffeespezialitäten',
    'Tüm yerli ve yabancı Alkollü ve Alkolsüz içecekler': 'Alle einheimischen und importierten alkoholischen und alkoholfreien Getränke'
  };
  return translations[text] || text;
} 