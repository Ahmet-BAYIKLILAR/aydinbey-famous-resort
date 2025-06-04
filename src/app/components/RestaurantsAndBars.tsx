import { motion } from 'framer-motion';
import Image from 'next/image';
import { IoRestaurant, IoTime, IoWine, IoCafe, IoFastFood } from 'react-icons/io5';
import { FaCocktail, FaCoffee, FaIceCream, FaPizzaSlice } from 'react-icons/fa';
import { MdRestaurantMenu, MdLocalBar } from 'react-icons/md';

interface Venue {
  id: string;
  name: string;
  location: string;
  serviceType: string;
  hours: string;
  description: string;
  image?: string;
  icon: JSX.Element;
  category: 'dining' | 'bars' | 'snacks';
}

interface Language {
  code: string;
  titles: {
    restaurants: string;
    bars: string;
    snacks: string;
    mainRestaurant: string;
    serviceType: string;
    hours: string;
  };
}

const languages: { [key: string]: Language } = {
  tr: {
    code: 'tr',
    titles: {
      restaurants: 'RESTORANLAR',
      bars: 'BARLAR',
      snacks: 'ATISTIRMALIKLAR',
      mainRestaurant: 'Ana Restaurant',
      serviceType: 'Servis Tipi',
      hours: 'Çalışma Saatleri'
    }
  },
  en: {
    code: 'en',
    titles: {
      restaurants: 'RESTAURANTS',
      bars: 'BARS',
      snacks: 'SNACKS',
      mainRestaurant: 'Main Restaurant',
      serviceType: 'Service Type',
      hours: 'Working Hours'
    }
  },
  ru: {
    code: 'ru',
    titles: {
      restaurants: 'РЕСТОРАНЫ',
      bars: 'БАРЫ',
      snacks: 'ЗАКУСКИ',
      mainRestaurant: 'Главный Ресторан',
      serviceType: 'Тип обслуживания',
      hours: 'Часы работы'
    }
  },
  de: {
    code: 'de',
    titles: {
      restaurants: 'RESTAURANTS',
      bars: 'BARS',
      snacks: 'SNACKS',
      mainRestaurant: 'Hauptrestaurant',
      serviceType: 'Servicetyp',
      hours: 'Öffnungszeiten'
    }
  }
};

const venues: { [key: string]: Venue[] } = {
  tr: [
    // Restoranlar
    {
      id: 'main-breakfast',
      name: 'Kahvaltı',
      location: 'Ana Restaurant',
      serviceType: 'Açık Büfe',
      hours: '07:00 - 10:00',
      description: 'Zengin açık büfe kahvaltı',
      image: '/restaurants/alacarte/main-restaurant.jpg',
      icon: <MdRestaurantMenu className="w-6 h-6" />,
      category: 'dining'
    },
    {
      id: 'main-late-breakfast',
      name: 'Geç Kahvaltı',
      location: 'Ana Restaurant',
      serviceType: 'Açık Büfe',
      hours: '10:00 - 10:30',
      description: 'Geç kahvaltı servisi',
      image: '/restaurants/alacarte/main-restaurant.jpg',
      icon: <MdRestaurantMenu className="w-6 h-6" />,
      category: 'dining'
    },
    {
      id: 'main-lunch',
      name: 'Öğlen Yemeği',
      location: 'Ana Restaurant',
      serviceType: 'Açık Büfe',
      hours: '12:30 - 14:00',
      description: 'Zengin öğle yemeği büfesi',
      image: '/restaurants/alacarte/main-restaurant.jpg',
      icon: <MdRestaurantMenu className="w-6 h-6" />,
      category: 'dining'
    },
    {
      id: 'main-dinner',
      name: 'Akşam Yemeği',
      location: 'Ana Restaurant',
      serviceType: 'Açık Büfe',
      hours: '18:30 - 21:00',
      description: 'Zengin akşam yemeği büfesi',
      image: '/restaurants/alacarte/main-restaurant.jpg',
      icon: <MdRestaurantMenu className="w-6 h-6" />,
      category: 'dining'
    },
    {
      id: 'night-buffet',
      name: 'Gece Büfesi',
      location: 'Ana Restaurant',
      serviceType: 'Açık Büfe',
      hours: '23:00 - 01:00',
      description: 'Gece atıştırmalıkları',
      image: '/restaurants/alacarte/main-restaurant.jpg',
      icon: <MdRestaurantMenu className="w-6 h-6" />,
      category: 'dining'
    },
    // Barlar
    {
      id: 'upper-lobby',
      name: 'Üst Lobby Keyif Bar',
      location: 'Üst Lobby',
      serviceType: 'Self Servis',
      hours: '09:00 - 00:00',
      description: 'Çay, Bitki Çayları ve Kahve Çeşitleri',
      icon: <IoCafe className="w-6 h-6" />,
      category: 'bars'
    },
    {
      id: 'queens-bar',
      name: 'Alt Lobby Queens Bar',
      location: 'Alt Lobby',
      serviceType: 'Self Servis',
      hours: '24h',
      description: 'Tüm yerli ve yabancı Alkollü ve Alkolsüz içecekler',
      image: '/restaurants/alacarte/queens-bar.jpg',
      icon: <FaCocktail className="w-6 h-6" />,
      category: 'bars'
    },
    {
      id: 'pool-bar',
      name: 'Chia Pool Bar',
      location: 'Havuz Başı',
      serviceType: 'Self Servis',
      hours: '10:00 - 00:00',
      description: 'Tüm yerli ve yabancı Alkollü ve Alkolsüz içecekler',
      image: '/restaurants/alacarte/pool-bar.jpg',
      icon: <IoWine className="w-6 h-6" />,
      category: 'bars'
    },
    {
      id: 'snack-bar',
      name: 'Snack Bar',
      location: 'Havuz Başı',
      serviceType: 'Masaya Servis',
      hours: '12:00 - 16:00',
      description: 'Tüm yerli ve yabancı Alkollü ve Alkolsüz içecekler',
      icon: <MdLocalBar className="w-6 h-6" />,
      category: 'bars'
    },
    // Atıştırmalıklar
    {
      id: 'snack-restaurant',
      name: 'Snack Restoran',
      location: 'Olivia Restaurant',
      serviceType: 'Mini Açık Büfe',
      hours: '12:00 - 16:00',
      description: 'Hafif atıştırmalıklar ve aperatifler',
      image: '/restaurants/alacarte/olivia.jpg',
      icon: <IoFastFood className="w-6 h-6" />,
      category: 'snacks'
    },
    {
      id: 'pizza-burger',
      name: 'Pizza-Hamburger-Makarna',
      location: 'Sultan Restaurant',
      serviceType: 'Masaya Servis',
      hours: '12:00 - 16:00',
      description: 'Fast food lezzetleri',
      image: '/restaurants/alacarte/sultan.jpg',
      icon: <FaPizzaSlice className="w-6 h-6" />,
      category: 'snacks'
    },
    {
      id: 'gozleme',
      name: 'Gözleme',
      location: 'Gözleme Büfesi',
      serviceType: 'Self Servis',
      hours: '11:00 - 16:00',
      description: 'Geleneksel Türk gözlemeleri',
      image: '/restaurants/alacarte/gozleme.jpg',
      icon: <IoRestaurant className="w-6 h-6" />,
      category: 'snacks'
    },
    {
      id: 'patisserie',
      name: 'Pastane',
      location: 'Patisserie',
      serviceType: 'Self Servis',
      hours: '11:00 - 17:00',
      description: 'Tatlılar ve pastalar',
      image: '/restaurants/alacarte/sultan.jpg',
      icon: <FaCoffee className="w-6 h-6" />,
      category: 'snacks'
    },
    {
      id: 'ice-cream',
      name: 'Dondurma',
      location: 'Olivia Restaurant',
      serviceType: 'Self Servis',
      hours: '12:00 - 16:00',
      description: 'Çeşitli dondurma çeşitleri',
      image: '/restaurants/alacarte/olivia.jpg',
      icon: <FaIceCream className="w-6 h-6" />,
      category: 'snacks'
    }
  ],
  en: [
    // Restoranlar
    {
      id: 'main-breakfast',
      name: 'Kahvaltı',
      location: 'Ana Restaurant',
      serviceType: 'Açık Büfe',
      hours: '07:00 - 10:00',
      description: 'Zengin açık büfe kahvaltı',
      image: '/restaurants/alacarte/main-restaurant.jpg',
      icon: <MdRestaurantMenu className="w-6 h-6" />,
      category: 'dining'
    },
    {
      id: 'main-late-breakfast',
      name: 'Geç Kahvaltı',
      location: 'Ana Restaurant',
      serviceType: 'Açık Büfe',
      hours: '10:00 - 10:30',
      description: 'Geç kahvaltı servisi',
      image: '/restaurants/alacarte/main-restaurant.jpg',
      icon: <MdRestaurantMenu className="w-6 h-6" />,
      category: 'dining'
    },
    {
      id: 'main-lunch',
      name: 'Öğlen Yemeği',
      location: 'Ana Restaurant',
      serviceType: 'Açık Büfe',
      hours: '12:30 - 14:00',
      description: 'Zengin öğle yemeği büfesi',
      image: '/restaurants/alacarte/main-restaurant.jpg',
      icon: <MdRestaurantMenu className="w-6 h-6" />,
      category: 'dining'
    },
    {
      id: 'main-dinner',
      name: 'Akşam Yemeği',
      location: 'Ana Restaurant',
      serviceType: 'Açık Büfe',
      hours: '18:30 - 21:00',
      description: 'Zengin akşam yemeği büfesi',
      image: '/restaurants/alacarte/main-restaurant.jpg',
      icon: <MdRestaurantMenu className="w-6 h-6" />,
      category: 'dining'
    },
    {
      id: 'night-buffet',
      name: 'Gece Büfesi',
      location: 'Ana Restaurant',
      serviceType: 'Açık Büfe',
      hours: '23:00 - 01:00',
      description: 'Gece atıştırmalıkları',
      image: '/restaurants/alacarte/main-restaurant.jpg',
      icon: <MdRestaurantMenu className="w-6 h-6" />,
      category: 'dining'
    },
    // Barlar
    {
      id: 'upper-lobby',
      name: 'Upper Lobby Keyif Lounge',
      location: 'Upper Lobby',
      serviceType: 'Self Service',
      hours: '09:00 - 00:00',
      description: 'Tea, Herbal Teas and Coffee Varieties',
      icon: <IoCafe className="w-6 h-6" />,
      category: 'bars'
    },
    {
      id: 'queens-bar',
      name: 'Lower Lobby Queens Bar',
      location: 'Lower Lobby',
      serviceType: 'Self Service',
      hours: '24h',
      description: 'All domestic and imported Alcoholic and Non-Alcoholic beverages',
      image: '/restaurants/alacarte/queens-bar.jpg',
      icon: <FaCocktail className="w-6 h-6" />,
      category: 'bars'
    },
    {
      id: 'pool-bar',
      name: 'Chia Pool Bar',
      location: 'Havuz Başı',
      serviceType: 'Self Servis',
      hours: '10:00 - 00:00',
      description: 'Tüm yerli ve yabancı Alkollü ve Alkolsüz içecekler',
      image: '/restaurants/alacarte/pool-bar.jpg',
      icon: <IoWine className="w-6 h-6" />,
      category: 'bars'
    },
    {
      id: 'snack-bar',
      name: 'Snack Bar',
      location: 'Havuz Başı',
      serviceType: 'Masaya Servis',
      hours: '12:00 - 16:00',
      description: 'Tüm yerli ve yabancı Alkollü ve Alkolsüz içecekler',
      icon: <MdLocalBar className="w-6 h-6" />,
      category: 'bars'
    },
    // Atıştırmalıklar
    {
      id: 'snack-restaurant',
      name: 'Snack Restaurant',
      location: 'Olivia Restaurant',
      serviceType: 'Mini Open Buffet',
      hours: '12:00 - 16:00',
      description: 'Light snacks and appetizers',
      image: '/restaurants/alacarte/olivia.jpg',
      icon: <IoFastFood className="w-6 h-6" />,
      category: 'snacks'
    },
    {
      id: 'pizza-burger',
      name: 'Pizza-Hamburger-Pasta',
      location: 'Sultan Restaurant',
      serviceType: 'Table Service',
      hours: '12:00 - 16:00',
      description: 'Fast food delights',
      image: '/restaurants/alacarte/sultan.jpg',
      icon: <FaPizzaSlice className="w-6 h-6" />,
      category: 'snacks'
    },
    {
      id: 'gozleme',
      name: 'Gözleme',
      location: 'Gözleme Buffet',
      serviceType: 'Self Service',
      hours: '11:00 - 16:00',
      description: 'Traditional Turkish gözleme',
      image: '/restaurants/alacarte/gozleme.jpg',
      icon: <IoRestaurant className="w-6 h-6" />,
      category: 'snacks'
    },
    {
      id: 'patisserie',
      name: 'Patisserie',
      location: 'Patisserie',
      serviceType: 'Self Service',
      hours: '11:00 - 17:00',
      description: 'Desserts and pastries',
      image: '/restaurants/alacarte/sultan.jpg',
      icon: <FaCoffee className="w-6 h-6" />,
      category: 'snacks'
    },
    {
      id: 'ice-cream',
      name: 'Ice Cream',
      location: 'Olivia Restaurant',
      serviceType: 'Self Service',
      hours: '12:00 - 16:00',
      description: 'Various ice cream flavors',
      image: '/restaurants/alacarte/olivia.jpg',
      icon: <FaIceCream className="w-6 h-6" />,
      category: 'snacks'
    }
  ],
  de: [
    // Restoranlar
    {
      id: 'main-breakfast',
      name: 'Kahvaltı',
      location: 'Ana Restaurant',
      serviceType: 'Açık Büfe',
      hours: '07:00 - 10:00',
      description: 'Zengin açık büfe kahvaltı',
      image: '/restaurants/alacarte/main-restaurant.jpg',
      icon: <MdRestaurantMenu className="w-6 h-6" />,
      category: 'dining'
    },
    {
      id: 'main-late-breakfast',
      name: 'Geç Kahvaltı',
      location: 'Ana Restaurant',
      serviceType: 'Açık Büfe',
      hours: '10:00 - 10:30',
      description: 'Geç kahvaltı servisi',
      image: '/restaurants/alacarte/main-restaurant.jpg',
      icon: <MdRestaurantMenu className="w-6 h-6" />,
      category: 'dining'
    },
    {
      id: 'main-lunch',
      name: 'Öğlen Yemeği',
      location: 'Ana Restaurant',
      serviceType: 'Açık Büfe',
      hours: '12:30 - 14:00',
      description: 'Zengin öğle yemeği büfesi',
      image: '/restaurants/alacarte/main-restaurant.jpg',
      icon: <MdRestaurantMenu className="w-6 h-6" />,
      category: 'dining'
    },
    {
      id: 'main-dinner',
      name: 'Akşam Yemeği',
      location: 'Ana Restaurant',
      serviceType: 'Açık Büfe',
      hours: '18:30 - 21:00',
      description: 'Zengin akşam yemeği büfesi',
      image: '/restaurants/alacarte/main-restaurant.jpg',
      icon: <MdRestaurantMenu className="w-6 h-6" />,
      category: 'dining'
    },
    {
      id: 'night-buffet',
      name: 'Gece Büfesi',
      location: 'Ana Restaurant',
      serviceType: 'Açık Büfe',
      hours: '23:00 - 01:00',
      description: 'Gece atıştırmalıkları',
      image: '/restaurants/alacarte/main-restaurant.jpg',
      icon: <MdRestaurantMenu className="w-6 h-6" />,
      category: 'dining'
    },
    // Barlar
    {
      id: 'upper-lobby',
      name: 'Obere Lobby Keyif Lounge',
      location: 'Obere Lobby',
      serviceType: 'Selbstbedienung',
      hours: '09:00 - 00:00',
      description: 'Tee, Kräutertees und Kaffeespezialitäten',
      icon: <IoCafe className="w-6 h-6" />,
      category: 'bars'
    },
    {
      id: 'queens-bar',
      name: 'Untere Lobby Queens Bar',
      location: 'Untere Lobby',
      serviceType: 'Selbstbedienung',
      hours: '24h',
      description: 'Alle einheimischen und importierten alkoholischen und alkoholfreien Getränke',
      image: '/restaurants/alacarte/queens-bar.jpg',
      icon: <FaCocktail className="w-6 h-6" />,
      category: 'bars'
    },
    {
      id: 'pool-bar',
      name: 'Chia Pool Bar',
      location: 'Havuz Başı',
      serviceType: 'Self Servis',
      hours: '10:00 - 00:00',
      description: 'Tüm yerli ve yabancı Alkollü ve Alkolsüz içecekler',
      image: '/restaurants/alacarte/pool-bar.jpg',
      icon: <IoWine className="w-6 h-6" />,
      category: 'bars'
    },
    {
      id: 'snack-bar',
      name: 'Snack Bar',
      location: 'Havuz Başı',
      serviceType: 'Masaya Servis',
      hours: '12:00 - 16:00',
      description: 'Tüm yerli ve yabancı Alkollü ve Alkolsüz içecekler',
      icon: <MdLocalBar className="w-6 h-6" />,
      category: 'bars'
    },
    // Atıştırmalıklar
    {
      id: 'snack-restaurant',
      name: 'Snack Restaurant',
      location: 'Olivia Restaurant',
      serviceType: 'Mini Open Buffet',
      hours: '12:00 - 16:00',
      description: 'Leichte Snacks und Aperitifs',
      image: '/restaurants/alacarte/olivia.jpg',
      icon: <IoFastFood className="w-6 h-6" />,
      category: 'snacks'
    },
    {
      id: 'pizza-burger',
      name: 'Pizza-Hamburger-Pasta',
      location: 'Sultan Restaurant',
      serviceType: 'Table Service',
      hours: '12:00 - 16:00',
      description: 'Fast-Food-Spezialitäten',
      image: '/restaurants/alacarte/sultan.jpg',
      icon: <FaPizzaSlice className="w-6 h-6" />,
      category: 'snacks'
    },
    {
      id: 'gozleme',
      name: 'Gözleme',
      location: 'Gözleme Buffet',
      serviceType: 'Self Service',
      hours: '11:00 - 16:00',
      description: 'Traditionelle türkische Gözleme',
      image: '/restaurants/alacarte/gozleme.jpg',
      icon: <IoRestaurant className="w-6 h-6" />,
      category: 'snacks'
    },
    {
      id: 'patisserie',
      name: 'Konditorei',
      location: 'Patisserie',
      serviceType: 'Self Service',
      hours: '11:00 - 17:00',
      description: 'Desserts und Gebäck',
      image: '/restaurants/alacarte/sultan.jpg',
      icon: <FaCoffee className="w-6 h-6" />,
      category: 'snacks'
    },
    {
      id: 'ice-cream',
      name: 'Eiscreme',
      location: 'Olivia Restaurant',
      serviceType: 'Self Service',
      hours: '12:00 - 16:00',
      description: 'Verschiedene Eissorten',
      image: '/restaurants/alacarte/olivia.jpg',
      icon: <FaIceCream className="w-6 h-6" />,
      category: 'snacks'
    }
  ],
  ru: [
    // Restoranlar
    {
      id: 'main-breakfast',
      name: 'Kahvaltı',
      location: 'Ana Restaurant',
      serviceType: 'Açık Büfe',
      hours: '07:00 - 10:00',
      description: 'Zengin açık büfe kahvaltı',
      image: '/restaurants/alacarte/main-restaurant.jpg',
      icon: <MdRestaurantMenu className="w-6 h-6" />,
      category: 'dining'
    },
    {
      id: 'main-late-breakfast',
      name: 'Geç Kahvaltı',
      location: 'Ana Restaurant',
      serviceType: 'Açık Büfe',
      hours: '10:00 - 10:30',
      description: 'Geç kahvaltı servisi',
      image: '/restaurants/alacarte/main-restaurant.jpg',
      icon: <MdRestaurantMenu className="w-6 h-6" />,
      category: 'dining'
    },
    {
      id: 'main-lunch',
      name: 'Öğlen Yemeği',
      location: 'Ana Restaurant',
      serviceType: 'Açık Büfe',
      hours: '12:30 - 14:00',
      description: 'Zengin öğle yemeği büfesi',
      image: '/restaurants/alacarte/main-restaurant.jpg',
      icon: <MdRestaurantMenu className="w-6 h-6" />,
      category: 'dining'
    },
    {
      id: 'main-dinner',
      name: 'Akşam Yemeği',
      location: 'Ana Restaurant',
      serviceType: 'Açık Büfe',
      hours: '18:30 - 21:00',
      description: 'Zengin akşam yemeği büfesi',
      image: '/restaurants/alacarte/main-restaurant.jpg',
      icon: <MdRestaurantMenu className="w-6 h-6" />,
      category: 'dining'
    },
    {
      id: 'night-buffet',
      name: 'Gece Büfesi',
      location: 'Ana Restaurant',
      serviceType: 'Açık Büfe',
      hours: '23:00 - 01:00',
      description: 'Gece atıştırmalıkları',
      image: '/restaurants/alacarte/main-restaurant.jpg',
      icon: <MdRestaurantMenu className="w-6 h-6" />,
      category: 'dining'
    },
    // Barlar
    {
      id: 'upper-lobby',
      name: 'Лаундж-бар Keyif в верхнем лобби',
      location: 'Верхнее лобби',
      serviceType: 'Самообслуживание',
      hours: '09:00 - 00:00',
      description: 'Чай, травяные чаи и разные виды кофе',
      icon: <IoCafe className="w-6 h-6" />,
      category: 'bars'
    },
    {
      id: 'queens-bar',
      name: 'Queens Bar в нижнем лобби',
      location: 'Нижнее лобби',
      serviceType: 'Самообслуживание',
      hours: '24h',
      description: 'Все местные и импортные алкогольные и безалкогольные напитки',
      image: '/restaurants/alacarte/queens-bar.jpg',
      icon: <FaCocktail className="w-6 h-6" />,
      category: 'bars'
    },
    {
      id: 'pool-bar',
      name: 'Chia Pool Bar',
      location: 'Havuz Başı',
      serviceType: 'Self Servis',
      hours: '10:00 - 00:00',
      description: 'Tüm yerli ve yabancı Alkollü ve Alkolsüz içecekler',
      image: '/restaurants/alacarte/pool-bar.jpg',
      icon: <IoWine className="w-6 h-6" />,
      category: 'bars'
    },
    {
      id: 'snack-bar',
      name: 'Snack Bar',
      location: 'Havuz Başı',
      serviceType: 'Masaya Servis',
      hours: '12:00 - 16:00',
      description: 'Tüm yerli ve yabancı Alkollü ve Alkolsüz içecekler',
      icon: <MdLocalBar className="w-6 h-6" />,
      category: 'bars'
    },
    // Atıştırmalıklar
    {
      id: 'snack-restaurant',
      name: 'Snack Restaurant',
      location: 'Olivia Restaurant',
      serviceType: 'Mini Open Buffet',
      hours: '12:00 - 16:00',
      description: 'Легкие закуски и аперитивы',
      image: '/restaurants/alacarte/olivia.jpg',
      icon: <IoFastFood className="w-6 h-6" />,
      category: 'snacks'
    },
    {
      id: 'pizza-burger',
      name: 'Pizza-Hamburger-Pasta',
      location: 'Sultan Restaurant',
      serviceType: 'Table Service',
      hours: '12:00 - 16:00',
      description: 'Блюда фастфуда',
      image: '/restaurants/alacarte/sultan.jpg',
      icon: <FaPizzaSlice className="w-6 h-6" />,
      category: 'snacks'
    },
    {
      id: 'gozleme',
      name: 'Gözleme',
      location: 'Gözleme Buffet',
      serviceType: 'Self Service',
      hours: '11:00 - 16:00',
      description: 'Традиционные турецкие гёзleme',
      image: '/restaurants/alacarte/gozleme.jpg',
      icon: <IoRestaurant className="w-6 h-6" />,
      category: 'snacks'
    },
    {
      id: 'patisserie',
      name: 'Кондитерская',
      location: 'Patisserie',
      serviceType: 'Self Service',
      hours: '11:00 - 17:00',
      description: 'Десерты и выпечка',
      image: '/restaurants/alacarte/sultan.jpg',
      icon: <FaCoffee className="w-6 h-6" />,
      category: 'snacks'
    },
    {
      id: 'ice-cream',
      name: 'Мороженое',
      location: 'Olivia Restaurant',
      serviceType: 'Self Service',
      hours: '12:00 - 16:00',
      description: 'Различные виды мороженого',
      image: '/restaurants/alacarte/olivia.jpg',
      icon: <FaIceCream className="w-6 h-6" />,
      category: 'snacks'
    }
  ]
};

// Diğer diller için venues objesini kopyala ve çevir
venues.en = venues.tr.map(venue => ({
  ...venue,
  name: translateToEnglish(venue.name),
  description: translateToEnglish(venue.description),
  location: translateToEnglish(venue.location),
  serviceType: translateToEnglish(venue.serviceType)
}));

venues.ru = venues.tr.map(venue => ({
  ...venue,
  name: translateToRussian(venue.name),
  description: translateToRussian(venue.description),
  location: translateToRussian(venue.location),
  serviceType: translateToRussian(venue.serviceType)
}));

venues.de = venues.tr.map(venue => ({
  ...venue,
  name: translateToGerman(venue.name),
  description: translateToGerman(venue.description),
  location: translateToGerman(venue.location),
  serviceType: translateToGerman(venue.serviceType)
}));

const VenueCard = ({ venue }: { venue: Venue }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      {venue.image && (
        <div className="relative h-48">
          <Image
            src={venue.image}
            alt={venue.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          {venue.icon}
          <h3 className="text-xl font-semibold text-gray-800">{venue.name}</h3>
        </div>
        <div className="space-y-2 text-gray-600">
          <p className="flex items-center">
            <IoRestaurant className="w-5 h-5 mr-2" />
            {venue.location}
          </p>
          <p className="flex items-center">
            <MdRestaurantMenu className="w-5 h-5 mr-2" />
            {venue.serviceType}
          </p>
          <p className="flex items-center">
            <IoTime className="w-5 h-5 mr-2" />
            {venue.hours}
          </p>
          <p className="mt-4 text-gray-700">{venue.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function RestaurantsAndBars({ language = 'tr' }: { language?: string }) {
  const currentLanguage = languages[language] || languages.tr;
  const currentVenues = venues[language] || venues.tr;

  const diningVenues = currentVenues.filter(venue => venue.category === 'dining');
  const barVenues = currentVenues.filter(venue => venue.category === 'bars');
  const snackVenues = currentVenues.filter(venue => venue.category === 'snacks');

  return (
    <div className="min-h-screen py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Restoranlar */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#d3ab71] mb-8 text-center">
            {currentLanguage.titles.restaurants}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diningVenues.map(venue => (
              <VenueCard key={venue.id} venue={venue} />
            ))}
          </div>
        </motion.section>

        {/* Barlar */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#d3ab71] mb-8 text-center">
            {currentLanguage.titles.bars}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {barVenues.map(venue => (
              <VenueCard key={venue.id} venue={venue} />
            ))}
          </div>
        </motion.section>

        {/* Atıştırmalıklar */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#d3ab71] mb-8 text-center">
            {currentLanguage.titles.snacks}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {snackVenues.map(venue => (
              <VenueCard key={venue.id} venue={venue} />
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

// Çeviri fonksiyonları
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
    'Tüm yerli ve yabancı Alkollü ve Alkolsüz içecekler': 'All domestic and imported Alcoholic and Non-Alcoholic beverages',
    'Hafif atıştırmalıklar ve aperatifler': 'Light snacks and appetizers',
    'Fast food lezzetleri': 'Fast food delights',
    'Geleneksel Türk gözlemeleri': 'Traditional Turkish gözleme',
    'Tatlılar ve pastalar': 'Desserts and pastries',
    'Çeşitli dondurma çeşitleri': 'Various ice cream flavors',
    'Zengin açık büfe kahvaltı': 'Rich open buffet breakfast',
    'Geç kahvaltı servisi': 'Late breakfast service',
    'Zengin öğle yemeği büfesi': 'Rich lunch buffet',
    'Zengin akşam yemeği büfesi': 'Rich dinner buffet',
    'Gece atıştırmalıkları': 'Night snacks'
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
    'Tüm yerli ve yabancı Alkollü ve Alkolsüz içecekler': 'Все местные и импортные алкогольные и безалкогольные напитки',
    'Hafif atıştırmalıklar ve aperatifler': 'Легкие закуски и аперитивы',
    'Fast food lezzetleri': 'Блюда фастфуда',
    'Geleneksel Türk gözlemeleri': 'Традиционные турецкие гёзлеме',
    'Tatlılar ve pastalar': 'Десерты и выпечка',
    'Çeşitli dondurma çeşitleri': 'Различные виды мороженого',
    'Zengin açık büfe kahvaltı': 'Богатый завтрак-буфет',
    'Geç kahvaltı servisi': 'Поздний завтрак',
    'Zengin öğle yemeği büfesi': 'Богатый обеденный буфет',
    'Zengin akşam yemeği büfesi': 'Богатый ужин-буфет',
    'Gece atıştırmalıkları': 'Ночные закуски'
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
    'Tüm yerli ve yabancı Alkollü ve Alkolsüz içecekler': 'Alle einheimischen und importierten alkoholischen und alkoholfreien Getränke',
    'Hafif atıştırmalıklar ve aperatifler': 'Leichte Snacks und Aperitifs',
    'Fast food lezzetleri': 'Fast-Food-Spezialitäten',
    'Geleneksel Türk gözlemeleri': 'Traditionelle türkische Gözleme',
    'Tatlılar ve pastalar': 'Desserts und Gebäck',
    'Çeşitli dondurma çeşitleri': 'Verschiedene Eissorten',
    'Zengin açık büfe kahvaltı': 'Reichhaltiges Frühstücksbuffet',
    'Geç kahvaltı servisi': 'Später Frühstücksservice',
    'Zengin öğle yemeği büfesi': 'Reichhaltiges Mittagsbuffet',
    'Zengin akşam yemeği büfesi': 'Reichhaltiges Abendbuffet',
    'Gece atıştırmalıkları': 'Nachtsnacks'
  };
  return translations[text] || text;
} 