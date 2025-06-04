import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { IoRestaurant, IoTime, IoInformation } from 'react-icons/io5';
import { FaWineGlass, FaLeaf, FaFish } from 'react-icons/fa';

interface Language {
  code: string;
  sectionTitles: {
    alaCarte: string;
    generalInfo: string;
    [key: string]: string;
  };
  generalAlaCarteInfo: string;
}

interface MenuItem {
  name: string;
  description: string;
  allergens?: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

interface Restaurant {
  id: string;
  name: string;
  description: string;
  hours: string;
  icon: JSX.Element;
  image: string;
  location: string;
  contact: string;
  pricing: {
    adult: string;
    child: string;
  };
  reservationNote: string;
  menu: {
    sections: MenuSection[];
  };
}

const languages: { [key: string]: Language } = {
  tr: {
    code: 'tr',
    sectionTitles: {
      alaCarte: 'A La Carte Restoranlar',
      generalInfo: 'Genel Bilgi'
    },
    generalAlaCarteInfo: 'Rezervasyonlar 1 gün önceden 10.00 - 12.00 belirtilen saatlerde Misafir İlişkileri tarafından yapılmaktadır. Kapasiteler sınırlı olup, 7 gün ve üzeri konaklayan misafirlerin rezervasyon yaptırmak kaydı ile A La Carte\'dan 1 kez faydalanma hakları vardır.'
  },
  en: {
    code: 'en',
    sectionTitles: {
      alaCarte: 'A La Carte Restaurants',
      generalInfo: 'General Information'
    },
    generalAlaCarteInfo: 'Reservations are made by Guest Relations between 10:00 - 12:00 one day in advance. Capacity is limited, and guests staying 7 days or more are entitled to use the A La Carte restaurant once, subject to reservation.'
  },
  ru: {
    code: 'ru',
    sectionTitles: {
      alaCarte: 'Рестораны A La Carte',
      generalInfo: 'Общая информация'
    },
    generalAlaCarteInfo: 'Бронирование осуществляется отделом по работе с гостями с 10:00 до 12:00 за день до посещения. Количество мест ограничено. Гости, проживающие 7 дней и более, имеют право на одно посещение ресторана A La Carte при условии предварительного бронирования.'
  },
  de: {
    code: 'de',
    sectionTitles: {
      alaCarte: 'A La Carte Restaurants',
      generalInfo: 'Allgemeine Informationen'
    },
    generalAlaCarteInfo: 'Reservierungen werden von der Guest Relations Abteilung einen Tag im Voraus zwischen 10:00 - 12:00 Uhr vorgenommen. Die Kapazitäten sind begrenzt, und Gäste mit einem Aufenthalt von 7 Tagen oder mehr haben das Recht, das A La Carte Restaurant einmal zu nutzen, vorbehaltlich einer Reservierung.'
  }
};

const restaurants: { [key: string]: Restaurant[] } = {
  tr: [
    {
      id: 'roka',
      name: 'Roka A La Carte',
      description: "Akdeniz'in kıyısında balık yemek bir başka! Denizden gelen taze lezzetler balık restoranımızda sizi bekliyor.",
      hours: '19:00-21:00',
      icon: <FaFish className="w-6 h-6" />,
      image: '/restaurants/alacarte/roka.jpg',
      location: 'Fish Restaurant',
      contact: 'Guest Relations',
      pricing: {
        adult: '20 EUR',
        child: '15 EUR'
      },
      reservationNote: 'Değerli misafirimiz bu Alakartı kullanabilmeniz için misafir ilişkileri departmanından rezervasyon yapmanız gerekmektedir.',
      menu: {
        sections: [
          {
            title: 'MASAYA ÖZEL EGE MEZELERİ',
            items: [
              {
                name: 'DOMATES & EZİNE PEYNİR TABAĞI',
                description: 'Taze kekik ve zeytinyağı',
                allergens: 'Allergen (3)'
              },
              {
                name: 'ÇAĞLA & SEMİZOTLU SÜZME YOĞURT',
                description: 'Süzme yoğurt, semizotu, çağla, sarımsak',
                allergens: 'Allergen (3)'
              },
              {
                name: 'FISTIKLI İÇ BAKLA FAVASI',
                description: 'Bakla, havuç, sarımsak, soğan, tereyağı, zeytinyağı, dereotu, Antep fıstık',
                allergens: 'Allergen (1-3-12)'
              },
              {
                name: 'AVOKADOLU DENİZ BÖRÜLCESİ',
                description: 'Deniz börülcesi, sarımsak, Avokado, zeytinyağı',
                allergens: 'Allergen (-)'
              },
              {
                name: 'FESLEĞENLİ LEVREK MARİN',
                description: 'Fesleğen, Levrek parçacıkları, elma sirkesi, mayonez, soğan, karabiber',
                allergens: 'Allergen (3-4-5-9)'
              },
              {
                name: 'KÖZLENMİŞ KAPYA BİBERLİ GİRİT EZME',
                description: 'Ezine peynir, közlenmiş ala biber, lor peyniri, sarımsak, maydanoz, antep fısıtığı, ceviz, galeta unu, zeytinyağı, kırmızı toz biber, kekik',
                allergens: 'Allergen (1-3-8)'
              },
              {
                name: 'ZEYTİNYAĞLI TAZE FASULYE KAVURMASI',
                description: 'Taze fasulye, kapya biber, havuç, sarmısaklı yoğurt, kızarmış tereyağı',
                allergens: 'Allergen (3-8)'
              }
            ]
          },
          {
            title: 'ARASICAKLAR',
            items: [
              {
                name: 'TAZE BAHARATLI TEREYAĞINDA KARİDES',
                description: 'Karides, tereyağı, sarımsak, pul biber, taze kekik',
                allergens: 'Allergen (3-6)'
              },
              {
                name: 'KALAMAR TAVA & KARİDES CİPS',
                description: 'Kalamar, karidesli cips, limon, tartar sos, sweet chilli',
                allergens: 'Allergen (3-4-6-8)'
              }
            ]
          },
          {
            title: 'SALATA',
            items: [
              {
                name: 'MEVSİM SALATA',
                description: 'Kıvırcık marul, havuç, kırmızı lahana, turp rendesi, domates, salatalık, mısır, zeytinyağlı limon sos eşliğinde',
                allergens: 'Allergen (-)'
              }
            ]
          },
          {
            title: 'ANA YEMEKLER',
            items: [
              {
                name: 'IZGARA DENİZ LEVREĞİ',
                description: 'Deniz levreği, fırın misket patates, kırmızı soğan, turp, roka, domates, limon dilimleri eşliğinde',
                allergens: 'Allergen (5)'
              },
              {
                name: 'ÇUPRA IZGARA',
                description: 'Çupra balığı, fırın misket patates, kırmızı soğan, turp, roka, limon',
                allergens: 'Allergen (5)'
              },
              {
                name: 'FIRINDA BALIK BUĞULAMA',
                description: 'Fileto balık, domates, soğan, kapari çiçeği, sarımsak, limon, zeytinyağı',
                allergens: 'Allergen (5)'
              },
              {
                name: 'SOMON ŞİŞ IZGARA',
                description: 'Somon filetosu, firin misket patates, kırmızı soğan, turp, roka, domates, limon dilimi',
                allergens: 'Allergen (5)'
              }
            ]
          },
          {
            title: 'TATLILAR',
            items: [
              {
                name: 'SÜTLÜ İNCİR TATLISI',
                description: 'Dondurma eşliğinde',
                allergens: 'Allergen (3)'
              },
              {
                name: 'KIZARMIŞ KESTANELİ SICAK HELVA',
                description: 'Tahin helvası, limon rendesi, limon suyu, süt, kestane, vanilyalı dondurma',
                allergens: 'Allergen (1-3)'
              }
            ]
          },
          {
            title: 'ÇOCUK MENÜ',
            items: [
              {
                name: 'BUGS BUNNY SHOW',
                description: 'Izgara köfte, parmak patates',
                allergens: 'Allergen (4)'
              },
              {
                name: 'SÜNGER BOB',
                description: 'Bolonez soslu Spagetti veya Tereyağlı Spagetti',
                allergens: 'Allergen (3-8)'
              }
            ]
          }
        ]
      }
    },
    {
      id: 'sultan',
      name: 'Sultan A La Carte',
      description: 'Türk mutfağının ve ızgaranın tadına varabilmeniz için türk restaurantımız sizi bekliyor.',
      hours: '19:00-21:00',
      icon: <IoRestaurant className="w-6 h-6" />,
      image: '/restaurants/alacarte/sultan.jpg',
      location: 'Turkish Restaurant',
      contact: 'Guest Relations',
      pricing: {
        adult: '20 EUR',
        child: '15 EUR'
      },
      reservationNote: 'Değerli misafirimiz bu Alakartı kullanabilmeniz için misafir ilişkileri departmanından rezervasyon yapmanız gerekmektedir.',
      menu: {
        sections: [
          {
            title: 'FIRINDAN ÇIKAN TADIMLIK İKRAMLIKLAR',
            items: [
              {
                name: 'KONYA USÜLÜ ETLİ EKMEK',
                description: 'Limon, maydanoz, domates, Balon ekmeği, tereyağı',
                allergens: 'Allergen (3-8)'
              }
            ]
          },
          {
            title: 'MEZELER',
            items: [
              {
                name: 'GELENEKSEL MEZE TABAĞI',
                description: 'Kuru cacık, zeytinyağlı taze fasulye, ezine peyniri, kavun, babagannuş, soğan dolması, yoğurtlu çıtır patates, atom, acılı ezme',
                allergens: 'Allergen (3)'
              }
            ]
          },
          {
            title: 'YÖRESEL ARASICAKLAR',
            items: [
              {
                name: 'ÜÇLÜ KOMBİNE',
                description: 'Karamelize soğanlı Arnavut ciğeri, kaşarlı mantar, konkase soslu paçanga topları',
                allergens: 'Allergen (3)'
              }
            ]
          },
          {
            title: 'SALATALAR',
            items: [
              {
                name: 'GAVUR DAĞI SALATASI',
                description: 'Ceviz, salatalık, domates, soğan, limon, maydanoz yaprakları',
                allergens: 'Allergen (1)'
              }
            ]
          },
          {
            title: 'IZGARA ÇEŞİTLERİ',
            items: [
              {
                name: 'ACILI ADANA KEBAP',
                description: 'Bademli Osmanlı pilavı, közlenmiş domates, biber, piyaz soğan',
                allergens: 'Allergen (1)'
              },
              {
                name: 'ALİ NAZİK KEBAP',
                description: 'Yoğurtlu Köz Patlıcan, Izgara Domates, Biber, Tereyağı ile',
                allergens: 'Allergen (3)'
              },
              {
                name: 'ÇÖP ŞİŞ IZGARA',
                description: 'Bademli Osmanlı pilavı, közlenmiş domates, biber, piyaz soğan',
                allergens: 'Allergen (1)'
              },
              {
                name: 'IZGARA TAVUK KANAT',
                description: 'Bademli Osmanlı pilavı, közlenmiş domates, biber, piyaz soğan',
                allergens: 'Allergen (1)'
              },
              {
                name: 'FISTIKLI SULTAN KEBABI',
                description: 'Bademli Osmanlı pilavı, patlıcan, biberli süzme yoğurt, domates sos ve tereyağı',
                allergens: 'Allergen (1-3)'
              }
            ]
          },
          {
            title: 'TATLILAR',
            items: [
              {
                name: 'HAVUÇ DİLİMİ BAKLAVA',
                description: 'Vanilyalı dondurma eşliğinde',
                allergens: 'Allergen (1-3-8)'
              },
              {
                name: 'FIRIN SÜTLAÇ',
                description: 'Geleneksel fırın sütlaç',
                allergens: 'Allergen (3)'
              }
            ]
          },
          {
            title: 'ÇOCUK MENÜ',
            items: [
              {
                name: 'BUGS BUNNY SHOW',
                description: 'Izgara köfte, parmak patates',
                allergens: 'Allergen (4)'
              },
              {
                name: 'SÜNGER BOB',
                description: 'Bolonez soslu Spagetti veya Tereyağlı Spagetti',
                allergens: 'Allergen (3-8)'
              }
            ]
          }
        ]
      }
    },
    {
      id: 'olivia',
      name: 'Olivia A La Carte',
      description: 'Tadı damakta bırakan italyan lezzetlerini bir de burada denemelisiniz.',
      hours: '19:00-21:00',
      icon: <FaWineGlass className="w-6 h-6" />,
      image: '/restaurants/alacarte/olivia.jpg',
      location: 'Italian Restaurant',
      contact: 'Guest Relations',
      pricing: {
        adult: '20 EUR',
        child: '15 EUR'
      },
      reservationNote: 'Değerli misafirimiz bu Alakartı kullanabilmeniz için misafir ilişkileri departmanından rezervasyon yapmanız gerekmektedir.',
      menu: {
        sections: [
          {
            title: 'MASAYA SUNUM',
            items: [
              {
                name: 'KARIŞIK ZEYTİN & DOMATES',
                description: 'Taze baharatlı zeytinyağlı, balsamikli kiraz domates, karışık zeytin',
                allergens: 'Allergen (-)'
              },
              {
                name: 'SOMON FÜME BRUSCHETTA',
                description: 'Somon füme ve havyarlı bruschetta, Kızarmış ekmek, labne peynir, soğan',
                allergens: 'Allergen (3-5-8)'
              }
            ]
          },
          {
            title: 'PEYNİR TABAĞI',
            items: [
              {
                name: 'GURME PEYNİR SEÇKİSİ',
                description: 'Mevsim meyvesi, ceviz, peynir çeşitleri, grissini, kuru kayısı, kuru incir',
                allergens: 'Allergen (3-8)'
              }
            ]
          },
          {
            title: 'BAŞLANGIÇLAR',
            items: [
              {
                name: 'ROBERTS PİERRA',
                description: 'Ilik steak, roka, permesan trüf yağı eşliğinde',
                allergens: 'Allergen (3)'
              },
              {
                name: 'QUATTRO FORMAGGİ PİZZA',
                description: 'Misket peynir, kiraz domates, labne peyniri, krema, taze kekik',
                allergens: 'Allergen (3)'
              }
            ]
          },
          {
            title: 'SALATALAR',
            items: [
              {
                name: 'INSALATA MİSTA',
                description: 'Çıtır bahçe marulları, domates, havuç, yeşil elma, peynir',
                allergens: 'Allergen (3)'
              },
              {
                name: 'CESAR SALATA',
                description: 'Aysberg marul, cesar sos, sarmısaklı kıtır ekmek dilimleri ve ızgara tavuk parçası eşliğinde',
                allergens: 'Allergen (4-8-11)'
              }
            ]
          },
          {
            title: 'ARASICAK & MAKARNA',
            items: [
              {
                name: 'LAZANYA',
                description: 'Bolenez sos, mozarella peyniri, permesan peyniri, pesto sos',
                allergens: 'Allergen (3-4-8)'
              },
              {
                name: 'PENNE AL ARABİATA',
                description: 'Domates sos, kiraz domates, permesan peyniri, zeytinyağı',
                allergens: 'Allergen (3-4-8)'
              },
              {
                name: 'PEYNİRLİ TORTELİNİ',
                description: 'Krema, pesto sos, sarımsak, permesan',
                allergens: 'Allergen (3-4-8)'
              }
            ]
          },
          {
            title: 'ANA YEMEK',
            items: [
              {
                name: 'TAGLIATA DI MANZO',
                description: 'Dana bonfile parçaları, risotto, roka, güner içi fıstık, ılık pesto sos eşliğinde',
                allergens: 'Allergen (3-8)'
              },
              {
                name: 'SOMON BALIĞI',
                description: 'Izgara somon, kumpir patates, baby sebze, brokoli ve tereyağında safran sos eşliğinde',
                allergens: 'Allergen (3-5)'
              },
              {
                name: 'POLLO PİCATTO MILANESE',
                description: 'Tavuk göğsü, kapari çiçeği, limon, tatlandırılmış maskolin, kuru domates, taglatelli makarna eşliğinde',
                allergens: 'Allergen (3-4-8)'
              },
              {
                name: 'POLPETTE FIRIN KÖFTE',
                description: 'Dana misket köfte, soğan, biber, kalamar zeytin, domates sos, limon',
                allergens: 'Allergen (4-8)'
              }
            ]
          },
          {
            title: 'TATLILAR',
            items: [
              {
                name: 'TRAMISU',
                description: 'Kahve aromasıyla tatlandırılmış kedi dili keki ve kakao tozu',
                allergens: 'Allergen (3-8)'
              },
              {
                name: 'NAPOLYON',
                description: 'Üç kat kızartılmış çıtır milföy, krema, çilek, pudra şekeri',
                allergens: 'Allergen (3-8)'
              }
            ]
          },
          {
            title: 'ÇOCUK MENÜ',
            items: [
              {
                name: 'BUGS BUNNY SHOW',
                description: 'Izgara köfte, parmak patates',
                allergens: 'Allergen (4)'
              },
              {
                name: 'SÜNGER BOB',
                description: 'Bolonez soslu Spagetti veya Tereyağlı Spagetti',
                allergens: 'Allergen (8)'
              }
            ]
          }
        ]
      }
    }
  ],
  en: [
    {
      id: 'roka',
      name: 'Roka A La Carte',
      description: "Experience seafood dining at its finest by the Mediterranean! Fresh flavors from the sea await you at our fish restaurant.",
      hours: '19:00-21:00',
      icon: <FaFish className="w-6 h-6" />,
      image: '/restaurants/alacarte/roka.jpg',
      location: 'Fish Restaurant',
      contact: 'Guest Relations',
      pricing: {
        adult: '20 EUR',
        child: '15 EUR'
      },
      reservationNote: 'Dear guest, to use this A La Carte restaurant, you need to make a reservation through the guest relations department.',
      menu: {
        sections: [
          {
            title: 'SPECIAL AEGEAN APPETIZERS FOR THE TABLE',
            items: [
              {
                name: 'TOMATO & EZINE CHEESE PLATE',
                description: 'Fresh thyme and olive oil',
                allergens: 'Allergen (3)'
              },
              {
                name: 'GREEN ALMOND & PURSLANE WITH STRAINED YOGURT',
                description: 'Strained yogurt, purslane, green almonds, garlic',
                allergens: 'Allergen (3)'
              },
              {
                name: 'BROAD BEAN FAVA WITH PISTACHIOS',
                description: 'Broad beans, carrots, garlic, onions, butter, olive oil, dill, pistachios',
                allergens: 'Allergen (1-3-12)'
              },
              {
                name: 'SEA BEANS WITH AVOCADO',
                description: 'Sea beans, garlic, avocado, olive oil',
                allergens: 'Allergen (-)'
              },
              {
                name: 'MARINATED SEA BASS WITH BASIL',
                description: 'Basil, sea bass pieces, apple cider vinegar, mayonnaise, onion, black pepper',
                allergens: 'Allergen (3-4-5-9)'
              },
              {
                name: 'CRETAN SPREAD WITH ROASTED RED PEPPERS',
                description: 'Ezine cheese, roasted red peppers, cottage cheese, garlic, parsley, pistachios, walnuts, breadcrumbs, olive oil, red pepper powder, thyme',
                allergens: 'Allergen (1-3-8)'
              },
              {
                name: 'SAUTÉED GREEN BEANS IN OLIVE OIL',
                description: 'Green beans, red peppers, carrots, garlic yogurt, browned butter',
                allergens: 'Allergen (3-8)'
              }
            ]
          },
          {
            title: 'HOT STARTERS',
            items: [
              {
                name: 'SHRIMP IN FRESH HERB BUTTER',
                description: 'Shrimp, butter, garlic, chili flakes, fresh thyme',
                allergens: 'Allergen (3-6)'
              },
              {
                name: 'FRIED CALAMARI & SHRIMP CHIPS',
                description: 'Calamari, shrimp chips, lemon, tartar sauce, sweet chili',
                allergens: 'Allergen (3-4-6-8)'
              }
            ]
          },
          {
            title: 'SALAD',
            items: [
              {
                name: 'SEASONAL SALAD',
                description: 'Iceberg lettuce, carrots, red cabbage, grated radish, tomatoes, cucumber, corn, olive oil lemon dressing',
                allergens: 'Allergen (-)'
              }
            ]
          },
          {
            title: 'MAIN COURSES',
            items: [
              {
                name: 'GRILLED SEA BASS',
                description: 'Sea bass, roasted baby potatoes, red onion, radish, arugula, tomatoes, lemon wedges',
                allergens: 'Allergen (5)'
              },
              {
                name: 'GRILLED SEA BREAM',
                description: 'Sea bream, roasted baby potatoes, red onion, radish, arugula, lemon',
                allergens: 'Allergen (5)'
              },
              {
                name: 'STEAMED FISH IN THE OVEN',
                description: 'Fish fillet, tomatoes, onions, capers, garlic, lemon, olive oil',
                allergens: 'Allergen (5)'
              },
              {
                name: 'GRILLED SALMON SKEWER',
                description: 'Salmon fillet, roasted baby potatoes, red onion, radish, arugula, tomatoes, lemon wedge',
                allergens: 'Allergen (5)'
              }
            ]
          },
          {
            title: 'DESSERTS',
            items: [
              {
                name: 'MILK FIG DESSERT',
                description: 'Served with ice cream',
                allergens: 'Allergen (3)'
              },
              {
                name: 'HOT HALVA WITH ROASTED CHESTNUTS',
                description: 'Tahini halva, lemon zest, lemon juice, milk, chestnuts, vanilla ice cream',
                allergens: 'Allergen (1-3)'
              }
            ]
          },
          {
            title: 'KIDS MENU',
            items: [
              {
                name: 'BUGS BUNNY SHOW',
                description: 'Grilled meatballs, french fries',
                allergens: 'Allergen (4)'
              },
              {
                name: 'SPONGEBOB',
                description: 'Spaghetti with Bolognese sauce or Buttered Spaghetti',
                allergens: 'Allergen (3-8)'
              }
            ]
          }
        ]
      }
    },
    {
      id: 'sultan',
      name: 'Sultan A La Carte',
      description: 'Our Turkish restaurant awaits you to taste the finest Turkish cuisine and grills.',
      hours: '19:00-21:00',
      icon: <IoRestaurant className="w-6 h-6" />,
      image: '/restaurants/alacarte/sultan.jpg',
      location: 'Turkish Restaurant',
      contact: 'Guest Relations',
      pricing: {
        adult: '20 EUR',
        child: '15 EUR'
      },
      reservationNote: 'Dear guest, to use this A La Carte restaurant, you need to make a reservation through the guest relations department.',
      menu: {
        sections: [
          {
            title: 'FRESH FROM THE OVEN TASTING TREATS',
            items: [
              {
                name: 'KONYA STYLE MEAT BREAD',
                description: 'Lemon, parsley, tomatoes, balloon bread, butter',
                allergens: 'Allergen (3-8)'
              }
            ]
          },
          {
            title: 'APPETIZERS',
            items: [
              {
                name: 'TRADITIONAL MEZE PLATTER',
                description: 'Dry cacık, green beans in olive oil, ezine cheese, melon, baba ganoush, stuffed onions, crispy potatoes with yogurt, atom, spicy ezme',
                allergens: 'Allergen (3)'
              }
            ]
          },
          {
            title: 'LOCAL HOT STARTERS',
            items: [
              {
                name: 'TRIPLE COMBINATION',
                description: 'Albanian liver with caramelized onions, cheese-stuffed mushrooms, paçanga rolls with concasse sauce',
                allergens: 'Allergen (3)'
              }
            ]
          },
          {
            title: 'SALADS',
            items: [
              {
                name: 'GAVURDAGI SALAD',
                description: 'Walnuts, cucumber, tomatoes, onions, lemon, parsley leaves',
                allergens: 'Allergen (1)'
              }
            ]
          },
          {
            title: 'GRILLS',
            items: [
              {
                name: 'SPICY ADANA KEBAB',
                description: 'Ottoman pilaf with almonds, grilled tomatoes, peppers, onion piyaz',
                allergens: 'Allergen (1)'
              },
              {
                name: 'ALI NAZIK KEBAB',
                description: 'Smoked eggplant with yogurt, grilled tomatoes, peppers, butter',
                allergens: 'Allergen (3)'
              },
              {
                name: 'GRILLED ÇÖP ŞİŞ',
                description: 'Ottoman pilaf with almonds, grilled tomatoes, peppers, onion piyaz',
                allergens: 'Allergen (1)'
              },
              {
                name: 'GRILLED CHICKEN WINGS',
                description: 'Ottoman pilaf with almonds, grilled tomatoes, peppers, onion piyaz',
                allergens: 'Allergen (1)'
              },
              {
                name: 'SULTAN KEBAB WITH PISTACHIOS',
                description: 'Ottoman pilaf with almonds, eggplant, peppered strained yogurt, tomato sauce and butter',
                allergens: 'Allergen (1-3)'
              }
            ]
          },
          {
            title: 'DESSERTS',
            items: [
              {
                name: 'CARROT SLICE BAKLAVA',
                description: 'Served with vanilla ice cream',
                allergens: 'Allergen (1-3-8)'
              },
              {
                name: 'BAKED RICE PUDDING',
                description: 'Traditional baked rice pudding',
                allergens: 'Allergen (3)'
              }
            ]
          },
          {
            title: 'KIDS MENU',
            items: [
              {
                name: 'BUGS BUNNY SHOW',
                description: 'Grilled meatballs, french fries',
                allergens: 'Allergen (4)'
              },
              {
                name: 'SPONGEBOB',
                description: 'Spaghetti with Bolognese sauce or Buttered Spaghetti',
                allergens: 'Allergen (3-8)'
              }
            ]
          }
        ]
      }
    },
    {
      id: 'olivia',
      name: 'Olivia A La Carte',
      description: 'You must try the unforgettable Italian flavors here.',
      hours: '19:00-21:00',
      icon: <FaWineGlass className="w-6 h-6" />,
      image: '/restaurants/alacarte/olivia.jpg',
      location: 'Italian Restaurant',
      contact: 'Guest Relations',
      pricing: {
        adult: '20 EUR',
        child: '15 EUR'
      },
      reservationNote: 'Dear guest, to use this A La Carte restaurant, you need to make a reservation through the guest relations department.',
      menu: {
        sections: [
          {
            title: 'TABLE SERVICE',
            items: [
              {
                name: 'MIXED OLIVES & TOMATEN',
                description: 'Fresh herb olive oil, balsamic cherry tomatoes, mixed olives',
                allergens: 'Allergen (-)'
              },
              {
                name: 'SMOKED SALMON BRUSCHETTA',
                description: 'Smoked salmon and caviar bruschetta, toasted bread, cream cheese, onions',
                allergens: 'Allergen (3-5-8)'
              }
            ]
          },
          {
            title: 'CHEESE PLATTER',
            items: [
              {
                name: 'GOURMET CHEESE SELECTION',
                description: 'Seasonal fruit, walnuts, cheese varieties, grissini, dried apricots, dried figs',
                allergens: 'Allergen (3-8)'
              }
            ]
          },
          {
            title: 'STARTERS',
            items: [
              {
                name: 'ROBERTS PIERRA',
                description: 'Warm steak, arugula, parmesan with truffle oil',
                allergens: 'Allergen (3)'
              },
              {
                name: 'QUATTRO FORMAGGI PIZZA',
                description: 'Mozzarella cheese, cherry tomatoes, cream cheese, cream, fresh thyme',
                allergens: 'Allergen (3)'
              }
            ]
          },
          {
            title: 'SALADS',
            items: [
              {
                name: 'INSALATA MISTA',
                description: 'Crispy garden lettuce, tomatoes, carrots, green apple, cheese',
                allergens: 'Allergen (3)'
              },
              {
                name: 'CAESAR SALAT',
                description: 'Iceberg lettuce, caesar dressing, garlic croutons and grilled chicken pieces',
                allergens: 'Allergen (4-8-11)'
              }
            ]
          },
          {
            title: 'HOT STARTERS & PASTA',
            items: [
              {
                name: 'LASAGNA',
                description: 'Bolognese sauce, mozzarella cheese, parmesan cheese, pesto sauce',
                allergens: 'Allergen (3-4-8)'
              },
              {
                name: 'PENNE ALL ARRABBIATA',
                description: 'Tomato sauce, cherry tomatoes, parmesan cheese, olive oil',
                allergens: 'Allergen (3-4-8)'
              },
              {
                name: 'CHEESE TORTELLINI',
                description: 'Cream, pesto sauce, garlic, parmesan',
                allergens: 'Allergen (3-4-8)'
              }
            ]
          },
          {
            title: 'MAIN COURSES',
            items: [
              {
                name: 'TAGLIATA DI MANZO',
                description: 'Beef tenderloin pieces, risotto, arugula, pine nuts, served with warm pesto sauce',
                allergens: 'Allergen (3-8)'
              },
              {
                name: 'SALMON',
                description: 'Grilled salmon, baked potato, baby vegetables, broccoli and saffron sauce in butter',
                allergens: 'Allergen (3-5)'
              },
              {
                name: 'POLLO PICATTO MILANESE',
                description: 'Chicken breast, capers, lemon, seasoned mesclun, sun-dried tomatoes, served with tagliatelle pasta',
                allergens: 'Allergen (3-4-8)'
              },
              {
                name: 'BAKED MEATBALLS',
                description: 'Beef meatballs, onions, peppers, kalamata olives, tomato sauce, lemon',
                allergens: 'Allergen (4-8)'
              }
            ]
          },
          {
            title: 'DESSERTS',
            items: [
              {
                name: 'TIRAMISU',
                description: 'Lady fingers flavored with coffee and cocoa powder',
                allergens: 'Allergen (3-8)'
              },
              {
                name: 'NAPOLEON',
                description: 'Three layers of crispy puff pastry, cream, strawberries, powdered sugar',
                allergens: 'Allergen (3-8)'
              }
            ]
          },
          {
            title: 'KIDS MENU',
            items: [
              {
                name: 'BUGS BUNNY SHOW',
                description: 'Grilled meatballs, french fries',
                allergens: 'Allergen (4)'
              },
              {
                name: 'SPONGEBOB',
                description: 'Spaghetti with Bolognese sauce or Buttered Spaghetti',
                allergens: 'Allergen (8)'
              }
            ]
          }
        ]
      }
    }
  ],
  ru: [
    {
      id: 'roka',
      name: 'Рока A La Carte',
      description: "Морепродукты на берегу Средиземного моря - это нечто особенное! Свежие дары моря ждут вас в нашем рыбном ресторане.",
      hours: '19:00-21:00',
      icon: <FaFish className="w-6 h-6" />,
      image: '/restaurants/alacarte/roka.jpg',
      location: 'Рыбный Ресторан',
      contact: 'Отдел по работе с гостями',
      pricing: {
        adult: '20 EUR',
        child: '15 EUR'
      },
      reservationNote: 'Уважаемый гость, для посещения этого ресторана A La Carte необходимо сделать резервацию через отдел по работе с гостями.',
      menu: {
        sections: [
          {
            title: 'СПЕЦИАЛЬНЫЕ ЗАКУСКИ ЭГЕЙСКОГО МОРЯ',
            items: [
              {
                name: 'ТАРЕЛКА С ПОМИДОРАМИ И СЫРОМ ЭЗИНЕ',
                description: 'Свежий тимьян и оливковое масло',
                allergens: 'Allergen (3)'
              },
              {
                name: 'ЗЕЛЕНЫЙ МИНДАЛЬ И ПОРТУЛАК С ПРОЦЕЖЕННЫМ ЙОГУРТОМ',
                description: 'Процеженный йогурт, портулак, зеленый миндаль, чеснок',
                allergens: 'Allergen (3)'
              },
              {
                name: 'ФАВА ИЗ БОБОВ С ФИСТАШКАМИ',
                description: 'Бобы, морковь, чеснок, лук, сливочное масло, оливковое масло, укроп, фисташки',
                allergens: 'Allergen (1-3-12)'
              },
              {
                name: 'МОРСКАЯ ФАСОЛЬ С АВОКАДО',
                description: 'Морская фасоль, чеснок, авокадо, оливковое масло',
                allergens: 'Allergen (-)'
              },
              {
                name: 'МАРИНОВАННЫЙ СИБАС С БАЗИЛИКОМ',
                description: 'Базилик, кусочки сибаса, яблочный уксус, майонез, лук, черный перец',
                allergens: 'Allergen (3-4-5-9)'
              },
              {
                name: 'КРИТСКАЯ НАМАЗКА С ЖАРЕНЫМ КРАСНЫМ ПЕРЦЕМ',
                description: 'Сыр эзине, жареный красный перец, творог, чеснок, петрушка, фисташки, грецкие орехи, панировочные сухари, оливковое масло, красный перец, тимьян',
                allergens: 'Allergen (1-3-8)'
              },
              {
                name: 'ОБЖАРЕННАЯ ЗЕЛЕНАЯ ФАСОЛЬ В ОЛИВКОВОМ МАСЛЕ',
                description: 'Зеленая фасоль, красный перец, морковь, чесночный йогурт, топленое масло',
                allergens: 'Allergen (3-8)'
              }
            ]
          },
          {
            title: 'ГОРЯЧИЕ ЗАКУСКИ',
            items: [
              {
                name: 'КРЕВЕТКИ В СЛИВОЧНОМ МАСЛЕ СО СВЕЖИМИ ТРАВАМИ',
                description: 'Креветки, сливочное масло, чеснок, хлопья чили, свежий тимьян',
                allergens: 'Allergen (3-6)'
              },
              {
                name: 'ЖАРЕНЫЕ КАЛЬМАРЫ И ЧИПСЫ ИЗ КРЕВЕТОК',
                description: 'Кальмары, креветочные чипсы, лимон, соус тартар, сладкий чили',
                allergens: 'Allergen (3-4-6-8)'
              }
            ]
          },
          {
            title: 'САЛАТ',
            items: [
              {
                name: 'СЕЗОННЫЙ САЛАТ',
                description: 'Салат айсберг, морковь, красная капуста, тертая редька, помидоры, огурцы, кукуруза, заправка из оливкового масла и лимона',
                allergens: 'Allergen (-)'
              }
            ]
          },
          {
            title: 'ОСНОВНЫЕ БЛЮДА',
            items: [
              {
                name: 'СИБАС НА ГРИЛЕ',
                description: 'Сибас, запеченный молодой картофель, красный лук, редис, руккола, помидоры, дольки лимона',
                allergens: 'Allergen (5)'
              },
              {
                name: 'ДОРАДА НА ГРИЛЕ',
                description: 'Дорада, запеченный молодой картофель, красный лук, редис, руккола, лимон',
                allergens: 'Allergen (5)'
              },
              {
                name: 'РЫБА НА ПАРУ В ДУХОВКЕ',
                description: 'Филе рыбы, помидоры, лук, каперсы, чеснок, лимон, оливковое масло',
                allergens: 'Allergen (5)'
              },
              {
                name: 'ШАШЛЫК ИЗ ЛОСОСЯ НА ГРИЛЕ',
                description: 'Филе лосося, запеченный молодой картофель, красный лук, редис, руккола, помидоры, долька лимона',
                allergens: 'Allergen (5)'
              }
            ]
          },
          {
            title: 'ДЕСЕРТЫ',
            items: [
              {
                name: 'МОЛОЧНЫЙ ИНЖИРНЫЙ ДЕСЕРТ',
                description: 'Подается с мороженым',
                allergens: 'Allergen (3)'
              },
              {
                name: 'ГОРЯЧАЯ ХАЛВА С ЖАРЕНЫМИ КАШТАНАМИ',
                description: 'Тахинная халва, цедра лимона, лимонный сок, молоко, каштаны, ванильное мороженое',
                allergens: 'Allergen (1-3)'
              }
            ]
          },
          {
            title: 'ДЕТСКОЕ МЕНЮ',
            items: [
              {
                name: 'ШОУ БАГЗ БАННИ',
                description: 'Котлеты на гриле, картофель фри',
                allergens: 'Allergen (4)'
              },
              {
                name: 'ГУБКА БОБ',
                description: 'Спагетти с соусом болоньезе или спагетти с маслом',
                allergens: 'Allergen (3-8)'
              }
            ]
          }
        ]
      }
    },
    {
      id: 'sultan',
      name: 'Султан A La Carte',
      description: 'Наш турецкий ресторан ждет вас, чтобы попробовать лучшие блюда турецкой кухни и гриля.',
      hours: '19:00-21:00',
      icon: <IoRestaurant className="w-6 h-6" />,
      image: '/restaurants/alacarte/sultan.jpg',
      location: 'Турецкий Ресторан',
      contact: 'Отдел по работе с гостями',
      pricing: {
        adult: '20 EUR',
        child: '15 EUR'
      },
      reservationNote: 'Уважаемый гость, для посещения этого ресторана A La Carte необходимо сделать резервацию через отдел по работе с гостями.',
      menu: {
        sections: [
          {
            title: 'СВЕЖИЕ ЗАКУСКИ ИЗ ПЕЧИ',
            items: [
              {
                name: 'МЯСНОЙ ХЛЕБ ПО-КОНЬИНСКИ',
                description: 'Лимон, петрушка, помидоры, воздушный хлеб, масло',
                allergens: 'Allergen (3-8)'
              }
            ]
          },
          {
            title: 'ЗАКУСКИ',
            items: [
              {
                name: 'ТРАДИЦИОННАЯ ТАРЕЛКА МЕЗЕ',
                description: 'Сухой джаджик, зеленая фасоль в оливковом масле, сыр эзине, дыня, баба гануш, фаршированный лук, хрустящий картофель с йогуртом, атом, острая эзме',
                allergens: 'Allergen (3)'
              }
            ]
          },
          {
            title: 'МЕСТНЫЕ ГОРЯЧИЕ ЗАКУСКИ',
            items: [
              {
                name: 'ТРОЙНАЯ КОМБИНАЦИЯ',
                description: 'Албанская печень с карамелизированным луком, грибы с сыром, пачанга с соусом конкассе',
                allergens: 'Allergen (3)'
              }
            ]
          },
          {
            title: 'САЛАТЫ',
            items: [
              {
                name: 'САЛАТ ГЯВУРДАГЫ',
                description: 'Грецкие орехи, огурцы, помидоры, лук, лимон, листья петрушки',
                allergens: 'Allergen (1)'
              }
            ]
          },
          {
            title: 'БЛЮДА НА ГРИЛЕ',
            items: [
              {
                name: 'ОСТРЫЙ КЕБАБ АДАНА',
                description: 'Османский плов с миндалем, помидоры на гриле, перец, луковый пияз',
                allergens: 'Allergen (1)'
              },
              {
                name: 'КЕБАБ АЛИ НАЗИК',
                description: 'Копченый баклажан с йогуртом, помидоры на гриле, перец, масло',
                allergens: 'Allergen (3)'
              },
              {
                name: 'ЧОП ШИШ НА ГРИЛЕ',
                description: 'Османский плов с миндалем, помидоры на гриле, перец, луковый пияз',
                allergens: 'Allergen (1)'
              },
              {
                name: 'КУРИНЫЕ КРЫЛЫШКИ НА ГРИЛЕ',
                description: 'Османский плов с миндалем, помидоры на гриле, перец, луковый пияз',
                allergens: 'Allergen (1)'
              },
              {
                name: 'СУЛТАН КЕБАБ С ФИСТАШКАМИ',
                description: 'Османский плов с миндалем, баклажан, йогурт с перцем, томатный соус и масло',
                allergens: 'Allergen (1-3)'
              }
            ]
          },
          {
            title: 'ДЕСЕРТЫ',
            items: [
              {
                name: 'МОРКОВНАЯ ПАХЛАВА',
                description: 'Подается с ванильным мороженым',
                allergens: 'Allergen (1-3-8)'
              },
              {
                name: 'ЗАПЕЧЕННЫЙ РИСОВЫЙ ПУДИНГ',
                description: 'Традиционный запеченный рисовый пудинг',
                allergens: 'Allergen (3)'
              }
            ]
          },
          {
            title: 'ДЕТСКОЕ МЕНЮ',
            items: [
              {
                name: 'ШОУ БАГЗ БАННИ',
                description: 'Котлеты на гриле, картофель фри',
                allergens: 'Allergen (4)'
              },
              {
                name: 'ГУБКА БОБ',
                description: 'Спагетти с соусом болоньезе или спагетти с маслом',
                allergens: 'Allergen (3-8)'
              }
            ]
          }
        ]
      }
    },
    {
      id: 'olivia',
      name: 'Оливия A La Carte',
      description: 'Вы должны попробовать незабываемые итальянские блюда именно здесь.',
      hours: '19:00-21:00',
      icon: <FaWineGlass className="w-6 h-6" />,
      image: '/restaurants/alacarte/olivia.jpg',
      location: 'Итальянский Ресторан',
      contact: 'Отдел по работе с гостями',
      pricing: {
        adult: '20 EUR',
        child: '15 EUR'
      },
      reservationNote: 'Уважаемый гость, для посещения этого ресторана A La Carte необходимо сделать резервацию через отдел по работе с гостями.',
      menu: {
        sections: [
          {
            title: 'ПОДАЧА К СТОЛУ',
            items: [
              {
                name: 'АССОРТИ ОЛИВОК И ПОМИДОРОВ',
                description: 'Оливковое масло со свежими травами, помидоры черри с бальзамиком, ассорти оливок',
                allergens: 'Allergen (-)'
              },
              {
                name: 'БРУСКЕТТА С КОПЧЕНЫМ ЛОСОСЕМ',
                description: 'Брускетта с копченым лососем и икрой, обжаренный хлеб, сливочный сыр, лук',
                allergens: 'Allergen (3-5-8)'
              }
            ]
          },
          {
            title: 'СЫРНАЯ ТАРЕЛКА',
            items: [
              {
                name: 'ГУРМЕ ПОДБОРКА СЫРОВ',
                description: 'Сезонные фрукты, грецкие орехи, ассорти сыров, гриссини, курага, инжир',
                allergens: 'Allergen (3-8)'
              }
            ]
          },
          {
            title: 'ЗАКУСКИ',
            items: [
              {
                name: 'РОБЕРТС ПЬЕРРА',
                description: 'Теплый стейк, руккола, пармезан с трюфельным маслом',
                allergens: 'Allergen (3)'
              },
              {
                name: 'ПИЦЦА КВАТРО ФОРМАДЖИ',
                description: 'Сыр моцарелла, помидоры черри, сливочный сыр, сливки, свежий тимьян',
                allergens: 'Allergen (3)'
              }
            ]
          },
          {
            title: 'САЛАТЫ',
            items: [
              {
                name: 'ИНСАЛАТА МИСТА',
                description: 'Хрустящий садовый салат, помидоры, морковь, зеленое яблоко, сыр',
                allergens: 'Allergen (3)'
              },
              {
                name: 'САЛАТ ЦЕЗАРЬ',
                description: 'Салат айсберг, соус цезарь, чесночные гренки и кусочки курицы на гриле',
                allergens: 'Allergen (4-8-11)'
              }
            ]
          },
          {
            title: 'ГОРЯЧИЕ ЗАКУСКИ И ПАСТА',
            items: [
              {
                name: 'ЛАЗАНЬЯ',
                description: 'Соус болоньезе, сыр моцарелла, сыр пармезан, соус песто',
                allergens: 'Allergen (3-4-8)'
              },
              {
                name: 'ПЕННЕ АРРАБИАТА',
                description: 'Томатный соус, помидоры черри, сыр пармезан, оливковое масло',
                allergens: 'Allergen (3-4-8)'
              },
              {
                name: 'ТОРТЕЛЛИНИ С СЫРОМ',
                description: 'Сливки, соус песто, чеснок, пармезан',
                allergens: 'Allergen (3-4-8)'
              }
            ]
          },
          {
            title: 'ОСНОВНЫЕ БЛЮДА',
            items: [
              {
                name: 'ТАЛЬЯТА ДИ МАНЗО',
                description: 'Кусочки говяжьей вырезки, ризотто, руккола, кедровые орехи, подается с теплым соусом песто',
                allergens: 'Allergen (3-8)'
              },
              {
                name: 'ЛОСОСЬ',
                description: 'Лосось на гриле, запеченный картофель, молодые овощи, брокколи и шафрановый соус на сливочном масле',
                allergens: 'Allergen (3-5)'
              },
              {
                name: 'ПОЛЛО ПИКАТТО МИЛАНЕЗЕ',
                description: 'Куриная грудка, каперсы, лимон, приправленный мескулин, вяленые помидоры, подается с пастой тальятелле',
                allergens: 'Allergen (3-4-8)'
              },
              {
                name: 'ЗАПЕЧЕННЫЕ ТЕФТЕЛИ',
                description: 'Говяжьи тефтели, лук, перец, оливки каламата, томатный соус, лимон',
                allergens: 'Allergen (4-8)'
              }
            ]
          },
          {
            title: 'ДЕСЕРТЫ',
            items: [
              {
                name: 'ТИРАМИСУ',
                description: 'Печенье савоярди с кофейным вкусом и какао-порошком',
                allergens: 'Allergen (3-8)'
              },
              {
                name: 'НАПОЛЕОН',
                description: 'Три слоя хрустящего слоеного теста, крем, клубника, сахарная пудра',
                allergens: 'Allergen (3-8)'
              }
            ]
          },
          {
            title: 'ДЕТСКОЕ МЕНЮ',
            items: [
              {
                name: 'ШОУ БАГЗ БАННИ',
                description: 'Котлеты на гриле, картофель фри',
                allergens: 'Allergen (4)'
              },
              {
                name: 'ГУБКА БОБ',
                description: 'Спагетти с соусом болоньезе или спагетти с маслом',
                allergens: 'Allergen (8)'
              }
            ]
          }
        ]
      }
    }
  ],
  de: [
    {
      id: 'roka',
      name: 'Roka A La Carte',
      description: "Meeresfrüchte am Mittelmeer sind etwas Besonderes! Frische Meeresfrüchte erwarten Sie in unserem Fischrestaurant.",
      hours: '19:00-21:00',
      icon: <FaFish className="w-6 h-6" />,
      image: '/restaurants/alacarte/roka.jpg',
      location: 'Fischrestaurant',
      contact: 'Guest Relations',
      pricing: {
        adult: '20 EUR',
        child: '15 EUR'
      },
      reservationNote: 'Sehr geehrter Gast, für die Nutzung dieses A La Carte Restaurants müssen Sie eine Reservierung über die Guest Relations Abteilung vornehmen.',
      menu: {
        sections: [
          {
            title: 'SPEZIELLE ÄGÄISCHE VORSPEISEN FÜR DEN TISCH',
            items: [
              {
                name: 'TOMATEN & EZINE KÄSE PLATTE',
                description: 'Frischer Thymian und Olivenöl',
                allergens: 'Allergen (3)'
              },
              {
                name: 'GRÜNE MANDELN & PORTULAK MIT STRAINED JOGHURT',
                description: 'Strained Joghurt, Portulak, grüne Mandeln, Knoblauch',
                allergens: 'Allergen (3)'
              },
              {
                name: 'SAUBOHNEN FAVA MIT PISTAZIEN',
                description: 'Saubohnen, Karotten, Knoblauch, Zwiebeln, Butter, Olivenöl, Dill, Pistazien',
                allergens: 'Allergen (1-3-12)'
              },
              {
                name: 'MEERESBOHNEN MIT AVOCADO',
                description: 'Meeresbohnen, Knoblauch, Avocado, Olivenöl',
                allergens: 'Allergen (-)'
              },
              {
                name: 'MARINIERTER WOLFSBARSCH MIT BASILIKUM',
                description: 'Basilikum, Wolfsbarschstücke, Apfelessig, Mayonnaise, Zwiebel, schwarzer Pfeffer',
                allergens: 'Allergen (3-4-5-9)'
              },
              {
                name: 'KRETISCHER AUFSTRICH MIT GERÖSTETER PAPRIKA',
                description: 'Ezine Käse, geröstete Paprika, Hüttenkäse, Knoblauch, Petersilie, Pistazien, Walnüsse, Paniermehl, Olivenöl, rotes Paprikapulver, Thymian',
                allergens: 'Allergen (1-3-8)'
              },
              {
                name: 'SAUTIERTE GRÜNE BOHNEN IN OLIVENÖL',
                description: 'Grüne Bohnen, rote Paprika, Karotten, Knoblauchjoghurt, braune Butter',
                allergens: 'Allergen (3-8)'
              }
            ]
          },
          {
            title: 'WARME VORSPEISEN',
            items: [
              {
                name: 'GARNELEN IN FRISCHER KRÄUTERBUTTER',
                description: 'Garnelen, Butter, Knoblauch, Chiliflocken, frischer Thymian',
                allergens: 'Allergen (3-6)'
              },
              {
                name: 'GEBRATENER TINTENFISCH & GARNELENCHIPS',
                description: 'Tintenfisch, Garnelenchips, Zitrone, Tartarsauce, süße Chilisauce',
                allergens: 'Allergen (3-4-6-8)'
              }
            ]
          },
          {
            title: 'SALAT',
            items: [
              {
                name: 'SAISONSALAT',
                description: 'Eisbergsalat, Karotten, Rotkohl, geriebener Rettich, Tomaten, Gurken, Mais, Olivenöl-Zitronendressing',
                allergens: 'Allergen (-)'
              }
            ]
          },
          {
            title: 'HAUPTGERICHTE',
            items: [
              {
                name: 'GEGRILLTER WOLFSBARSCH',
                description: 'Wolfsbarsch, geröstete Babykartoffeln, rote Zwiebeln, Rettich, Rucola, Tomaten, Zitronenspalten',
                allergens: 'Allergen (5)'
              },
              {
                name: 'GEGRILLTE DORADE',
                description: 'Dorade, geröstete Babykartoffeln, rote Zwiebeln, Rettich, Rucola, Zitrone',
                allergens: 'Allergen (5)'
              },
              {
                name: 'GEDÄMPFTER FISCH IM OFEN',
                description: 'Fischfilet, Tomaten, Zwiebeln, Kapern, Knoblauch, Zitrone, Olivenöl',
                allergens: 'Allergen (5)'
              },
              {
                name: 'GEGRILLTER LACHSSPIESS',
                description: 'Lachsfilet, geröstete Babykartoffeln, rote Zwiebeln, Rettich, Rucola, Tomaten, Zitronenspalte',
                allergens: 'Allergen (5)'
              }
            ]
          },
          {
            title: 'DESSERTS',
            items: [
              {
                name: 'MILCH-FEIGEN-DESSERT',
                description: 'Serviert mit Eis',
                allergens: 'Allergen (3)'
              },
              {
                name: 'HEISSE HALVA MIT GERÖSTETEN KASTANIEN',
                description: 'Tahini-Halva, Zitronenschale, Zitronensaft, Milch, Kastanien, Vanilleeis',
                allergens: 'Allergen (1-3)'
              }
            ]
          },
          {
            title: 'KINDERMENÜ',
            items: [
              {
                name: 'BUGS BUNNY SHOW',
                description: 'Gegrillte Frikadellen, Pommes frites',
                allergens: 'Allergen (4)'
              },
              {
                name: 'SPONGEBOB',
                description: 'Spaghetti mit Bolognese-Sauce oder Butterspaghetti',
                allergens: 'Allergen (3-8)'
              }
            ]
          }
        ]
      }
    },
    {
      id: 'sultan',
      name: 'Sultan A La Carte',
      description: 'Unser türkisches Restaurant erwartet Sie, um die feinste türkische Küche und Grillgerichte zu probieren.',
      hours: '19:00-21:00',
      icon: <IoRestaurant className="w-6 h-6" />,
      image: '/restaurants/alacarte/sultan.jpg',
      location: 'Türkisches Restaurant',
      contact: 'Guest Relations',
      pricing: {
        adult: '20 EUR',
        child: '15 EUR'
      },
      reservationNote: 'Sehr geehrter Gast, für die Nutzung dieses A La Carte Restaurants müssen Sie eine Reservierung über die Guest Relations Abteilung vornehmen.',
      menu: {
        sections: [
          {
            title: 'FRISCHE KOSTPROBEN AUS DEM OFEN',
            items: [
              {
                name: 'KONYA STYLE FLEISCHBROT',
                description: 'Zitrone, Petersilie, Tomaten, Ballonbrot, Butter',
                allergens: 'Allergen (3-8)'
              }
            ]
          },
          {
            title: 'VORSPEISEN',
            items: [
              {
                name: 'TRADITIONELLE MEZE-PLATTE',
                description: 'Trockener Cacık, grüne Bohnen in Olivenöl, Ezine-Käse, Melone, Baba Ganoush, gefüllte Zwiebeln, knusprige Kartoffeln mit Joghurt, Atom, scharfe Ezme',
                allergens: 'Allergen (3)'
              }
            ]
          },
          {
            title: 'LOKALE WARME VORSPEISEN',
            items: [
              {
                name: 'DREIFACH-KOMBINATION',
                description: 'Albanische Leber mit karamellisierten Zwiebeln, Käse-gefüllte Champignons, Paçanga-Rollen mit Concasse-Sauce',
                allergens: 'Allergen (3)'
              }
            ]
          },
          {
            title: 'SALATE',
            items: [
              {
                name: 'GAVURDAGI SALAT',
                description: 'Walnüsse, Gurken, Tomaten, Zwiebeln, Zitrone, Petersilienblätter',
                allergens: 'Allergen (1)'
              }
            ]
          },
          {
            title: 'GRILLGERICHTE',
            items: [
              {
                name: 'SCHARFER ADANA KEBAB',
                description: 'Osmanischer Pilaw mit Mandeln, gegrillte Tomaten, Paprika, Zwiebel-Piyaz',
                allergens: 'Allergen (1)'
              },
              {
                name: 'ALI NAZIK KEBAB',
                description: 'Geräucherte Aubergine mit Joghurt, gegrillte Tomaten, Paprika, Butter',
                allergens: 'Allergen (3)'
              },
              {
                name: 'GEGRILLTER ÇÖP ŞİŞ',
                description: 'Osmanischer Pilaw mit Mandeln, gegrillte Tomaten, Paprika, Zwiebel-Piyaz',
                allergens: 'Allergen (1)'
              },
              {
                name: 'GEGRILLTE HÄHNCHENFLÜGEL',
                description: 'Osmanischer Pilaw mit Mandeln, gegrillte Tomaten, Paprika, Zwiebel-Piyaz',
                allergens: 'Allergen (1)'
              },
              {
                name: 'SULTAN KEBAB MIT PISTAZIEN',
                description: 'Osmanischer Pilaw mit Mandeln, Aubergine, gepfefferter Strained Joghurt, Tomatensauce und Butter',
                allergens: 'Allergen (1-3)'
              }
            ]
          },
          {
            title: 'DESSERTS',
            items: [
              {
                name: 'KAROTTEN-BAKLAVA',
                description: 'Serviert mit Vanilleeis',
                allergens: 'Allergen (1-3-8)'
              },
              {
                name: 'GEBACKENER MILCHREIS',
                description: 'Traditioneller gebackener Milchreis',
                allergens: 'Allergen (3)'
              }
            ]
          },
          {
            title: 'KINDERMENÜ',
            items: [
              {
                name: 'BUGS BUNNY SHOW',
                description: 'Gegrillte Frikadellen, Pommes frites',
                allergens: 'Allergen (4)'
              },
              {
                name: 'SPONGEBOB',
                description: 'Spaghetti mit Bolognese-Sauce oder Butterspaghetti',
                allergens: 'Allergen (3-8)'
              }
            ]
          }
        ]
      }
    },
    {
      id: 'olivia',
      name: 'Olivia A La Carte',
      description: 'Sie müssen die unvergesslichen italienischen Aromen hier probieren.',
      hours: '19:00-21:00',
      icon: <FaWineGlass className="w-6 h-6" />,
      image: '/restaurants/alacarte/olivia.jpg',
      location: 'Italienisches Restaurant',
      contact: 'Guest Relations',
      pricing: {
        adult: '20 EUR',
        child: '15 EUR'
      },
      reservationNote: 'Sehr geehrter Gast, für die Nutzung dieses A La Carte Restaurants müssen Sie eine Reservierung über die Guest Relations Abteilung vornehmen.',
      menu: {
        sections: [
          {
            title: 'TISCHSERVICE',
            items: [
              {
                name: 'GEMISCHTE OLIVEN & TOMATEN',
                description: 'Frisches Kräuteröl, Balsamico-Kirschtomaten, gemischte Oliven',
                allergens: 'Allergen (-)'
              },
              {
                name: 'RÄUCHERLACHS BRUSCHETTA',
                description: 'Räucherlachs und Kaviar Bruschetta, geröstetes Brot, Frischkäse, Zwiebeln',
                allergens: 'Allergen (3-5-8)'
              }
            ]
          },
          {
            title: 'KÄSEPLATTE',
            items: [
              {
                name: 'GOURMET KÄSEAUSWAHL',
                description: 'Saisonale Früchte, Walnüsse, Käsesorten, Grissini, getrocknete Aprikosen, getrocknete Feigen',
                allergens: 'Allergen (3-8)'
              }
            ]
          },
          {
            title: 'VORSPEISEN',
            items: [
              {
                name: 'ROBERTS PIERRA',
                description: 'Warmes Steak, Rucola, Parmesan mit Trüffelöl',
                allergens: 'Allergen (3)'
              },
              {
                name: 'QUATTRO FORMAGGI PIZZA',
                description: 'Mozzarella, Kirschtomaten, Frischkäse, Sahne, frischer Thymian',
                allergens: 'Allergen (3)'
              }
            ]
          },
          {
            title: 'SALATE',
            items: [
              {
                name: 'INSALATA MISTA',
                description: 'Knackiger Gartensalat, Tomaten, Karotten, grüner Apfel, Käse',
                allergens: 'Allergen (3)'
              },
              {
                name: 'CAESAR SALAT',
                description: 'Eisbergsalat, Caesar-Dressing, Knoblauch-Croutons und gegrillte Hähnchenstücke',
                allergens: 'Allergen (4-8-11)'
              }
            ]
          },
          {
            title: 'WARME VORSPEISEN & PASTA',
            items: [
              {
                name: 'LASAGNE',
                description: 'Bolognese-Sauce, Mozzarella, Parmesan, Pesto-Sauce',
                allergens: 'Allergen (3-4-8)'
              },
              {
                name: 'PENNE ALL ARRABBIATA',
                description: 'Tomatensauce, Kirschtomaten, Parmesan, Olivenöl',
                allergens: 'Allergen (3-4-8)'
              },
              {
                name: 'KÄSE TORTELLINI',
                description: 'Sahne, Pesto-Sauce, Knoblauch, Parmesan',
                allergens: 'Allergen (3-4-8)'
              }
            ]
          },
          {
            title: 'HAUPTGERICHTE',
            items: [
              {
                name: 'TAGLIATA DI MANZO',
                description: 'Rinderfiletstücke, Risotto, Rucola, Pinienkerne, serviert mit warmer Pesto-Sauce',
                allergens: 'Allergen (3-8)'
              },
              {
                name: 'LACHS',
                description: 'Gegrillter Lachs, Ofenkartoffel, Babygemüse, Brokkoli und Safransauce in Butter',
                allergens: 'Allergen (3-5)'
              },
              {
                name: 'POLLO PICATTO MILANESE',
                description: 'Hähnchenbrust, Kapern, Zitrone, gewürzter Mesclun, getrocknete Tomaten, serviert mit Tagliatelle',
                allergens: 'Allergen (3-4-8)'
              },
              {
                name: 'OFENFRIKADELLEN',
                description: 'Rinderfrikadellen, Zwiebeln, Paprika, Kalamata-Oliven, Tomatensauce, Zitrone',
                allergens: 'Allergen (4-8)'
              }
            ]
          },
          {
            title: 'DESSERTS',
            items: [
              {
                name: 'TIRAMISU',
                description: 'Löffelbiskuits mit Kaffeegeschmack und Kakaopulver',
                allergens: 'Allergen (3-8)'
              },
              {
                name: 'NAPOLEON',
                description: 'Drei Schichten knuspriger Blätterteig, Creme, Erdbeeren, Puderzucker',
                allergens: 'Allergen (3-8)'
              }
            ]
          },
          {
            title: 'KINDERMENÜ',
            items: [
              {
                name: 'BUGS BUNNY SHOW',
                description: 'Gegrillte Frikadellen, Pommes frites',
                allergens: 'Allergen (4)'
              },
              {
                name: 'SPONGEBOB',
                description: 'Spaghetti mit Bolognese-Sauce oder Butterspaghetti',
                allergens: 'Allergen (8)'
              }
            ]
          }
        ]
      }
    }
  ]
};

const RestaurantCard = ({ restaurant, onSelect }: { restaurant: Restaurant; onSelect: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
      onClick={onSelect}
    >
      <div className="relative h-64">
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 p-6 text-white">
          <div className="flex items-center space-x-2 mb-2">
            {restaurant.icon}
            <h3 className="text-2xl font-semibold">{restaurant.name}</h3>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <IoTime className="w-4 h-4" />
            <span>{restaurant.hours}</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 text-lg">{restaurant.description}</p>
      </div>
    </motion.div>
  );
};

const MenuSection = ({ section }: { section: MenuSection }) => {
  return (
    <div className="mb-8">
      <h4 className="text-lg font-semibold text-[#d3ab71] mb-4">{section.title}</h4>
      <div className="space-y-4">
        {section.items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 bg-white rounded-lg shadow-sm"
          >
            <div className="flex justify-between items-start mb-2">
              <h5 className="font-medium text-gray-800">{item.name}</h5>
              {item.allergens && (
                <span className="text-xs text-gray-500">{item.allergens}</span>
              )}
            </div>
            <p className="text-sm text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const GeneralInfoCard = ({ language }: { language: Language }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-12"
    >
      <div className="flex items-center space-x-3 mb-4">
        <IoInformation className="w-6 h-6 text-[#d3ab71]" />
        <h3 className="text-xl font-semibold text-[#d3ab71]">
          {language.sectionTitles.generalInfo}
        </h3>
      </div>
      <p className="text-gray-700 leading-relaxed">
        {language.generalAlaCarteInfo}
      </p>
    </motion.div>
  );
};

interface AlaCarteProps {
  language: {
    code: string;
    buttons: {
      back: string;
    };
    generalAlaCarteInfo: string;
  };
  selectedSubSection: string | null;
  setSelectedSubSection: (section: string | null) => void;
}

const ALaCarte = ({ language, selectedSubSection, setSelectedSubSection }: AlaCarteProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      {!selectedSubSection ? (
        <>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/90 backdrop-blur-sm rounded-xl p-6 mb-8"
          >
            <p className="text-lg text-gray-700">{language.generalAlaCarteInfo}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {restaurants[language.code].map((restaurant) => (
              <RestaurantCard 
                key={restaurant.id} 
                restaurant={restaurant} 
                onSelect={() => setSelectedSubSection(restaurant.id)} 
              />
            ))}
          </div>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/90 backdrop-blur-sm rounded-xl p-8"
        >
          <div className="max-w-4xl mx-auto">
            <motion.button
              onClick={() => setSelectedSubSection(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mb-6 px-4 py-2 text-[#d3ab71] hover:text-[#b28b4f] transition-colors flex items-center"
            >
              <span className="mr-2">←</span>
              <span>{language.buttons.back}</span>
            </motion.button>

            {restaurants[language.code].map((restaurant) => {
              if (restaurant.id === selectedSubSection) {
                return (
                  <div key={restaurant.id}>
                    <h2 className="text-3xl font-bold text-[#d3ab71] mb-6">
                      {restaurant.name}
                    </h2>

                    <p className="text-xl text-gray-700 mb-8">
                      {restaurant.description}
                    </p>

                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold text-[#b28b4f] mb-4">
                        {language.code === 'tr' ? 'Menü' : language.code === 'en' ? 'Menu' : language.code === 'ru' ? 'Меню' : 'Menü'}
                      </h3>
                      {restaurant.menu.sections.map((section, index) => (
                        <MenuSection key={index} section={section} />
                      ))}
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ALaCarte; 