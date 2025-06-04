import { motion } from 'framer-motion';
import Image from 'next/image';

interface Language {
  title: string;
  description: string;
  beachTitle: string;
  beachDescription: string;
  poolsTitle: string;
  poolsDescription: string;
}

const languages: { [key: string]: Language } = {
  tr: {
    title: 'Plajlar & Havuzlar',
    description: 'Zor bir yıl mı geçirdiniz? Yeniden başlamaya mı ihtiyacınız var? Akdeniz\'in serinletici sularına atlamanın zamanı geldi! İnce kum, sığ deniz, sahil restoranı ve su aktiviteleri! Bütün aile çok sevinecek',
    beachTitle: 'Plaj',
    beachDescription: 'Kendinizi özel hissedin. Sahile sıfır mesafedeyiz. Denizin ve güneşin keyfini daha ayrıcalıklı yaşayın. Sahilde size özel sıralanan güneşlenme alanları ile denizin ferahlatıcı kokusunu içinize çekin.',
    poolsTitle: 'Havuzlar',
    poolsDescription: 'Famous Resort\'da farklı büyüklüklerde açık ve kapalı 4 yüzme havuzu bulunuyor. Yetişkin havuzlarının tamamı uluslararası standartlara uygun olarak 140 santimetre derinlikte. Çocuklar için ayrı bir havuz olması ile birlikte; çocukların ebeveynleri ile birlikte keyifli dakikalar geçirebileceği kaydıraklı havuzlar da yer alıyor. Kapalı havuzumuz ise kış aylarında ısıtmalı olarak hizmet veriyor.'
  },
  en: {
    title: 'Beaches & Pools',
    description: 'Had a tough year? Need a fresh start? It\'s time to dive into the refreshing waters of the Mediterranean! Fine sand, shallow sea, beach restaurant, and water activities! The whole family will love it',
    beachTitle: 'Beach',
    beachDescription: 'Feel special. We are right on the beach. Experience the sea and sun more exclusively. Breathe in the refreshing scent of the sea with private sunbathing areas lined up on the beach.',
    poolsTitle: 'Pools',
    poolsDescription: 'Famous Resort features 4 swimming pools of different sizes, both indoor and outdoor. All adult pools are 140 centimeters deep in accordance with international standards. Along with a separate pool for children, there are also pools with slides where children can enjoy pleasant moments with their parents. Our indoor pool is heated during winter months.'
  },
  de: {
    title: 'Strände & Pools',
    description: 'Hatten Sie ein schwieriges Jahr? Brauchen Sie einen Neuanfang? Es ist Zeit, in das erfrischende Wasser des Mittelmeers einzutauchen! Feiner Sand, flaches Meer, Strandrestaurant und Wasseraktivitäten! Die ganze Familie wird begeistert sein',
    beachTitle: 'Strand',
    beachDescription: 'Fühlen Sie sich besonders. Wir liegen direkt am Strand. Erleben Sie Meer und Sonne noch exklusiver. Atmen Sie den erfrischenden Meeresduft ein, mit privaten Sonnenbereichen am Strand.',
    poolsTitle: 'Pools',
    poolsDescription: 'Das Famous Resort verfügt über 4 Schwimmbäder unterschiedlicher Größe, sowohl im Innen- als auch im Außenbereich. Alle Erwachsenenpools sind gemäß internationalen Standards 140 Zentimeter tief. Neben einem separaten Kinderbecken gibt es auch Pools mit Rutschen, wo Kinder zusammen mit ihren Eltern angenehme Momente verbringen können. Unser Hallenbad wird in den Wintermonaten beheizt.'
  },
  ru: {
    title: 'Пляжи и Бассейны',
    description: 'Был тяжелый год? Нужно начать все сначала? Пора нырнуть в освежающие воды Средиземного моря! Мелкий песок, неглубокое море, пляжный ресторан и водные развлечения! Вся семья будет в восторге',
    beachTitle: 'Пляж',
    beachDescription: 'Почувствуйте себя особенным. Мы находимся прямо на берегу моря. Насладитесь морем и солнцем более эксклюзивно. Вдохните освежающий аромат моря в частных зонах для загара на пляже.',
    poolsTitle: 'Бассейны',
    poolsDescription: 'Famous Resort предлагает 4 бассейна разных размеров, как крытых, так и открытых. Все взрослые бассейны имеют глубину 140 сантиметров в соответствии с международными стандартами. Помимо отдельного бассейна для детей, есть также бассейны с горками, где дети могут приятно провести время вместе с родителями. Наш крытый бассейн в зимние месяцы отапливается.'
  }
};

const images = {
  beaches: [
    '/images/beach1.jpg',
    '/images/beach2.jpg',
    '/images/beach3.jpg',
    '/images/beach4.jpg',
    '/images/beach5.jpg',
    '/images/beach6.jpg'
  ],
  pools: [
    '/images/pool1.jpg',
    '/images/pool2.jpg'
  ]
};

export default function PoolsAndBeaches({ language = 'tr' }: { language?: string }) {
  const currentLanguage = languages[language] || languages.tr;

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-[#d3ab71] mb-6">{currentLanguage.title}</h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">{currentLanguage.description}</p>
        </motion.div>

        {/* Beach Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-[#d3ab71] mb-8">{currentLanguage.beachTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {images.beaches.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative h-64 rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={image}
                  alt={`Beach view ${index + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            ))}
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
            <p className="text-lg text-gray-700">{currentLanguage.beachDescription}</p>
          </div>
        </motion.section>

        {/* Pools Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-[#d3ab71] mb-8">{currentLanguage.poolsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {images.pools.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative h-80 rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={image}
                  alt={`Pool view ${index + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            ))}
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
            <p className="text-lg text-gray-700">{currentLanguage.poolsDescription}</p>
          </div>
        </motion.section>
      </div>
    </div>
  );
} 