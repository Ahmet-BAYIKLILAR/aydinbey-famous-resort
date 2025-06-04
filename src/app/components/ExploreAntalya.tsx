import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface Language {
  code: string;
  sectionTitles: {
    exploreAntalya: string;
    [key: string]: string;
  };
}

interface Location {
  id: string;
  title: string;
  content: string;
  distance: string;
  image: string;
}

interface LocationGroup {
  title: string;
  locations: Location[];
}

const locationData: { [key: string]: LocationGroup[] } = {
  tr: [
    {
      title: "Belek ve Boğazkent'e Yakın Tarihi ve Doğal Yerler",
      locations: [
        {
          id: "aspendos",
          title: "Aspendos Antik Tiyatrosu",
          content: "M.S. 2. yüzyılda inşa edilen, günümüze kadar oldukça iyi korunmuş bir Roma tiyatrosudur. Akustiğiyle ünlüdür ve hâlâ konserler gibi etkinlikler için kullanılmaktadır.",
          distance: "Belek'e yaklaşık 20 km, Boğazkent'e yaklaşık 15 km",
          image: "/locations/aspendos.jpg"
        },
        {
          id: "perge",
          title: "Perge Antik Kenti",
          content: "Helenistik ve Roma dönemlerine ait antik şehirde tiyatro, stadyum, agorası ve sütunlu caddeleriyle tarih meraklılarını büyüler.",
          distance: "Belek'e yaklaşık 30 km, Boğazkent'e 35 km",
          image: "/locations/perge.jpg"
        },
        {
          id: "kursunlu",
          title: "Kurşunlu Şelalesi",
          content: "Doğal güzelliği, yemyeşil çevresi ve huzurlu atmosferiyle şelale, piknik ve fotoğraf çekimi için idealdir. Mini gölleri ve yürüyüş parkurlarıyla da ünlüdür.",
          distance: "Belek'e yaklaşık 25 km, Boğazkent'e 30 km",
          image: "/locations/kursunlu.jpg"
        },
        {
          id: "manavgat",
          title: "Manavgat Şelalesi",
          content: "Genişliği ve güçlü su akışıyla büyüleyici bir doğa harikasıdır. Çevresindeki kafelerde oturup şelale manzarasının tadını çıkarabilirsiniz.",
          distance: "Belek'e yaklaşık 40 km, Boğazkent'e 45 km",
          image: "/locations/manavgat.jpg"
        },
        {
          id: "side",
          title: "Side Antik Kenti ve Apollon Tapınağı",
          content: "Apollon Tapınağı, antik tiyatro ve liman kalıntılarıyla zengin bir tarihi mirasa sahiptir. Gün batımında tapınak muhteşem bir manzara sunar.",
          distance: "Belek'e yaklaşık 45 km, Boğazkent'e 50 km",
          image: "/locations/side.jpg"
        }
      ]
    },
    {
      title: "Antalya'nın Genelinde Görülmesi Gereken Yerler",
      locations: [
        {
          id: "kaleici",
          title: "Kaleiçi (Eski Şehir)",
          content: "Osmanlı ve Selçuklu dönemlerinden kalma tarihi evler, dar sokaklar ve tarihi limanıyla büyüleyici bir atmosfere sahiptir. Tarihi saat kulesi, Hadrian Kapısı ve yat limanı bölgenin önemli noktalarıdır.",
          distance: "Belek'e yaklaşık 40 km, Boğazkent'e 45 km",
          image: "/locations/kaleici.jpg"
        },
        {
          id: "duden",
          title: "Düden Şelalesi",
          content: "Yukarı Düden, yemyeşil doğası ve piknik alanlarıyla öne çıkarken, Aşağı Düden Şelalesi ise denize dökülen suyun görkemli manzarasını sunar.",
          distance: "Belek'e yaklaşık 35 km, Boğazkent'e 40 km",
          image: "/locations/duden.jpg"
        },
        {
          id: "olympos",
          title: "Olympos ve Çıralı",
          content: "Antik Likya dönemine ait kalıntılar ve Yanartaş olarak bilinen doğal gaz alevleriyle ünlüdür. Ayrıca Çıralı plajı, caretta carettaların üreme alanıdır.",
          distance: "Belek'e yaklaşık 80 km, Boğazkent'e 85 km",
          image: "/locations/olympos.jpg"
        },
        {
          id: "termessos",
          title: "Termessos Antik Kenti",
          content: "Akdeniz'e hâkim dağların tepesinde kurulmuş, doğal güzellik ve tarihi bir arada sunan bir antik şehirdir. Kartalların yuvası olarak da bilinir.",
          distance: "Belek'e yaklaşık 60 km, Boğazkent'e 65 km",
          image: "/locations/termessos.jpg"
        },
        {
          id: "karain",
          title: "Karain Mağarası",
          content: "Türkiye'nin en büyük doğal mağaralarından biri olan Karain, tarih öncesi dönemlerden kalma izler taşır. Arkeolojik buluntular müzede sergilenmektedir.",
          distance: "Belek'e yaklaşık 50 km, Boğazkent'e 55 km",
          image: "/locations/karain.jpg"
        }
      ]
    }
  ],
  en: [
    {
      title: "Historical and Natural Places Near Belek and Bogazkent",
      locations: [
        {
          id: "aspendos",
          title: "Aspendos Ancient Theater",
          content: "Built in the 2nd century AD, it is a well-preserved Roman theater famous for its acoustics and still used for events such as concerts.",
          distance: "Approximately 20 km to Belek, 15 km to Bogazkent",
          image: "/locations/aspendos.jpg"
        },
        {
          id: "perge",
          title: "Ancient City of Perge",
          content: "The ancient city from Hellenistic and Roman periods fascinates history enthusiasts with its theater, stadium, agora, and colonnaded streets.",
          distance: "Approximately 30 km to Belek, 35 km to Bogazkent",
          image: "/locations/perge.jpg"
        },
        {
          id: "kursunlu",
          title: "Kursunlu Waterfall",
          content: "With its natural beauty, lush surroundings, and peaceful atmosphere, the waterfall is ideal for picnics and photography. It's also famous for its mini lakes and walking trails.",
          distance: "Approximately 25 km to Belek, 30 km to Bogazkent",
          image: "/locations/kursunlu.jpg"
        },
        {
          id: "manavgat",
          title: "Manavgat Waterfall",
          content: "A mesmerizing natural wonder with its width and powerful water flow. You can enjoy the waterfall view from surrounding cafes.",
          distance: "Approximately 40 km to Belek, 45 km to Bogazkent",
          image: "/locations/manavgat.jpg"
        },
        {
          id: "side",
          title: "Side Ancient City and Temple of Apollo",
          content: "Rich in historical heritage with the Temple of Apollo, ancient theater, and harbor ruins. The temple offers a spectacular view at sunset.",
          distance: "Approximately 45 km to Belek, 50 km to Bogazkent",
          image: "/locations/side.jpg"
        }
      ]
    },
    {
      title: "Must-See Places in Antalya",
      locations: [
        {
          id: "kaleici",
          title: "Kaleici (Old Town)",
          content: "Features a fascinating atmosphere with historical houses from Ottoman and Seljuk periods, narrow streets, and historical harbor. The historical clock tower, Hadrian's Gate, and marina are important landmarks.",
          distance: "Approximately 40 km to Belek, 45 km to Bogazkent",
          image: "/locations/kaleici.jpg"
        },
        {
          id: "duden",
          title: "Duden Waterfalls",
          content: "Upper Duden stands out with its green nature and picnic areas, while Lower Duden Waterfall offers a magnificent view of water falling into the sea.",
          distance: "Approximately 35 km to Belek, 40 km to Bogazkent",
          image: "/locations/duden.jpg"
        },
        {
          id: "olympos",
          title: "Olympos and Cirali",
          content: "Famous for ancient Lycian ruins and natural gas flames known as Chimaera. Cirali beach is also a breeding ground for loggerhead sea turtles.",
          distance: "Approximately 80 km to Belek, 85 km to Bogazkent",
          image: "/locations/olympos.jpg"
        },
        {
          id: "termessos",
          title: "Ancient City of Termessos",
          content: "An ancient city built on mountaintops overlooking the Mediterranean, combining natural beauty and history. Also known as the nest of eagles.",
          distance: "Approximately 60 km to Belek, 65 km to Bogazkent",
          image: "/locations/termessos.jpg"
        },
        {
          id: "karain",
          title: "Karain Cave",
          content: "One of Turkey's largest natural caves, bearing traces from prehistoric times. Archaeological findings are exhibited in the museum.",
          distance: "Approximately 50 km to Belek, 55 km to Bogazkent",
          image: "/locations/karain.jpg"
        }
      ]
    }
  ],
  ru: [
    {
      title: "Исторические и природные места рядом с Белеком и Богазкентом",
      locations: [
        {
          id: "aspendos",
          title: "Античный театр Аспендос",
          content: "Построенный во II веке нашей эры, это хорошо сохранившийся римский театр, известный своей акустикой и до сих пор используемый для проведения концертов.",
          distance: "Примерно 20 км до Белека, 15 км до Богазкента",
          image: "/locations/aspendos.jpg"
        },
        {
          id: "perge",
          title: "Древний город Перге",
          content: "Древний город эллинистического и римского периодов очаровывает любителей истории своим театром, стадионом, агорой и улицами с колоннами.",
          distance: "Примерно 30 км до Белека, 35 км до Богазкента",
          image: "/locations/perge.jpg"
        },
        {
          id: "kursunlu",
          title: "Водопад Курсунлу",
          content: "Благодаря своей природной красоте, зеленому окружению и спокойной атмосфере, водопад идеально подходит для пикников и фотосессий. Также известен своими мини-озерами и пешеходными тропами.",
          distance: "Примерно 25 км до Белека, 30 км до Богазкента",
          image: "/locations/kursunlu.jpg"
        },
        {
          id: "manavgat",
          title: "Водопад Манавгат",
          content: "Захватывающее чудо природы с его шириной и мощным потоком воды. Вы можете наслаждаться видом водопада из окрестных кафе.",
          distance: "Примерно 40 км до Белека, 45 км до Богазкента",
          image: "/locations/manavgat.jpg"
        },
        {
          id: "side",
          title: "Древний город Сиде и храм Аполлона",
          content: "Богатое историческое наследие с храмом Аполлона, древним театром и руинами гавани. Храм предлагает впечатляющий вид на закат.",
          distance: "Примерно 45 км до Белека, 50 км до Богазкента",
          image: "/locations/side.jpg"
        }
      ]
    },
    {
      title: "Достопримечательности Анталии",
      locations: [
        {
          id: "kaleici",
          title: "Калеичи (Старый город)",
          content: "Отличается очаровательной атмосферой с историческими домами османского и сельджукского периодов, узкими улочками и историческим портом. Историческая часовая башня, ворота Адриана и яхтенная гавань являются важными достопримечательностями.",
          distance: "Примерно 40 км до Белека, 45 км до Богазкента",
          image: "/locations/kaleici.jpg"
        },
        {
          id: "duden",
          title: "Водопады Дюден",
          content: "Верхний Дюден выделяется своей зеленой природой и зонами для пикника, а Нижний водопад Дюден предлагает великолепный вид падающей в море воды.",
          distance: "Примерно 35 км до Белека, 40 км до Богазкента",
          image: "/locations/duden.jpg"
        },
        {
          id: "olympos",
          title: "Олимпос и Чиралы",
          content: "Известен древними ликийскими руинами и природными газовыми огнями, известными как Химера. Пляж Чиралы также является местом размножения морских черепах.",
          distance: "Примерно 80 км до Белека, 85 км до Богазкента",
          image: "/locations/olympos.jpg"
        },
        {
          id: "termessos",
          title: "Древний город Термессос",
          content: "Древний город, построенный на вершинах гор с видом на Средиземное море, сочетающий природную красоту и историю. Также известен как гнездо орлов.",
          distance: "Примерно 60 км до Белека, 65 км до Богазкента",
          image: "/locations/termessos.jpg"
        },
        {
          id: "karain",
          title: "Пещера Караин",
          content: "Одна из крупнейших природных пещер Турции, хранящая следы доисторических времен. Археологические находки выставлены в музее.",
          distance: "Примерно 50 км до Белека, 55 км до Богазкента",
          image: "/locations/karain.jpg"
        }
      ]
    }
  ],
  de: [
    {
      title: "Historische und natürliche Orte in der Nähe von Belek und Bogazkent",
      locations: [
        {
          id: "aspendos",
          title: "Antikes Theater von Aspendos",
          content: "Das im 2. Jahrhundert n. Chr. erbaute, gut erhaltene römische Theater ist für seine Akustik berühmt und wird noch heute für Veranstaltungen wie Konzerte genutzt.",
          distance: "Etwa 20 km nach Belek, 15 km nach Bogazkent",
          image: "/locations/aspendos.jpg"
        },
        {
          id: "perge",
          title: "Antike Stadt Perge",
          content: "Die antike Stadt aus hellenistischer und römischer Zeit fasziniert Geschichtsinteressierte mit ihrem Theater, Stadion, der Agora und den Säulenstraßen.",
          distance: "Etwa 30 km nach Belek, 35 km nach Bogazkent",
          image: "/locations/perge.jpg"
        },
        {
          id: "kursunlu",
          title: "Kursunlu Wasserfall",
          content: "Mit seiner natürlichen Schönheit, üppigen Umgebung und friedlichen Atmosphäre ist der Wasserfall ideal für Picknicks und Fotografie. Er ist auch für seine kleinen Seen und Wanderwege bekannt.",
          distance: "Etwa 25 km nach Belek, 30 km nach Bogazkent",
          image: "/locations/kursunlu.jpg"
        },
        {
          id: "manavgat",
          title: "Manavgat Wasserfall",
          content: "Ein beeindruckendes Naturwunder mit seiner Breite und kraftvollem Wasserfluss. Sie können die Aussicht auf den Wasserfall von den umliegenden Cafés genießen.",
          distance: "Etwa 40 km nach Belek, 45 km nach Bogazkent",
          image: "/locations/manavgat.jpg"
        },
        {
          id: "side",
          title: "Antike Stadt Side und Apollon-Tempel",
          content: "Reich an historischem Erbe mit dem Apollon-Tempel, antiken Theater und Hafenruinen. Der Tempel bietet einen spektakulären Blick bei Sonnenuntergang.",
          distance: "Etwa 45 km nach Belek, 50 km nach Bogazkent",
          image: "/locations/side.jpg"
        }
      ]
    },
    {
      title: "Sehenswürdigkeiten in Antalya",
      locations: [
        {
          id: "kaleici",
          title: "Kaleici (Altstadt)",
          content: "Bietet eine faszinierende Atmosphäre mit historischen Häusern aus osmanischer und seldschukischer Zeit, engen Gassen und historischem Hafen. Der historische Uhrturm, das Hadrianstor und der Yachthafen sind wichtige Wahrzeichen.",
          distance: "Etwa 40 km nach Belek, 45 km nach Bogazkent",
          image: "/locations/kaleici.jpg"
        },
        {
          id: "duden",
          title: "Düden Wasserfälle",
          content: "Der obere Düden besticht durch seine grüne Natur und Picknickplätze, während der untere Düden Wasserfall einen herrlichen Blick auf das ins Meer fallende Wasser bietet.",
          distance: "Etwa 35 km nach Belek, 40 km nach Bogazkent",
          image: "/locations/duden.jpg"
        },
        {
          id: "olympos",
          title: "Olympos und Cirali",
          content: "Berühmt für antike lykische Ruinen und natürliche Gasflammen, bekannt als Chimaira. Der Strand von Cirali ist auch ein Brutgebiet für Meeresschildkröten.",
          distance: "Etwa 80 km nach Belek, 85 km nach Bogazkent",
          image: "/locations/olympos.jpg"
        },
        {
          id: "termessos",
          title: "Antike Stadt Termessos",
          content: "Eine antike Stadt, die auf Berggipfeln mit Blick auf das Mittelmeer erbaut wurde und natürliche Schönheit mit Geschichte verbindet. Auch bekannt als Adlernest.",
          distance: "Etwa 60 km nach Belek, 65 km nach Bogazkent",
          image: "/locations/termessos.jpg"
        },
        {
          id: "karain",
          title: "Karain Höhle",
          content: "Eine der größten natürlichen Höhlen der Türkei mit Spuren aus prähistorischer Zeit. Archäologische Funde werden im Museum ausgestellt.",
          distance: "Etwa 50 km nach Belek, 55 km nach Bogazkent",
          image: "/locations/karain.jpg"
        }
      ]
    }
  ]
};

const LocationCard = ({ location }: { location: Location }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden cursor-pointer mb-4"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(!isHovered)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={location.image}
        alt={location.title}
        fill
        className="object-cover rounded-lg"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
        unoptimized
      />
      <motion.div
        className={`absolute inset-0 bg-black/60 p-6 flex flex-col justify-between transition-opacity duration-300
          ${isHovered ? 'opacity-100' : 'opacity-0 md:opacity-0 sm:opacity-100'}`}
        initial={false}
      >
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{location.title}</h3>
          <p className="text-white/90 text-sm md:text-base mb-4">{location.content}</p>
        </div>
        <div className="text-white/80 text-sm">{location.distance}</div>
      </motion.div>
    </motion.div>
  );
};

export default function ExploreAntalya({ language }: { language: Language }) {
  const currentLocations = locationData[language.code] || locationData.en;

  return (
    <div className="min-h-screen py-16 px-4 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-[#d3ab71] mb-6">
          {language.sectionTitles.exploreAntalya}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Antalya'nın eşsiz güzelliklerini keşfetmek artık çok kolay!
        </p>
      </motion.div>

      {currentLocations.map((group, groupIndex) => (
        <div key={groupIndex} className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: groupIndex * 0.2 }}
            className="text-3xl font-semibold text-gray-800 mb-8"
          >
            {group.title}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {group.locations.map((location, index) => (
              <LocationCard
                key={location.id}
                location={location}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 