import { motion } from 'framer-motion';
import { useState } from 'react';
import { IoMdInformationCircle } from 'react-icons/io';
import { FaPhone, FaWifi, FaClock, FaGlassMartini, FaSwimmingPool, FaKey, FaCreditCard } from 'react-icons/fa';

interface Language {
  code: string;
  sectionTitles: {
    hotelInfo: string;
    [key: string]: string;
  };
}

interface InfoSection {
  id: string;
  title: string;
  content: string[];
  icon: JSX.Element;
}

const hotelData: { [key: string]: {
  welcome: string[];
  sections: InfoSection[];
  phones: { title: string; number: string; }[];
}} = {
  tr: {
    welcome: [
      "AYDINBEY GROUP HOTELS",
      "Sayın Konuğumuz,",
      "Aydınbey Famous Resort Hotel'e Hoş geldiniz!",
      "Sizleri otelimizde ağırlamaktan büyük mutluluk duymaktayız. Tatilinizin gönlünüzce geçmesini dileriz.",
      "Bu süre boyunca Aydınbey Famous ailesi olarak size en iyi hizmeti vermek için maksimum gayret sarf edeceğiz."
    ],
    sections: [
      {
        id: "check-in",
        title: "Giriş/Çıkış ve Genel Bilgiler",
        icon: <FaClock className="w-6 h-6" />,
        content: [
          "Odaların (check in) giriş saati 14.00, (check out) çıkış saati 12.00'dir.",
          "Kahvaltıda alkollü içki servis edilmez.",
          "Her şey Dahil konseptinde içki ve içecekler sadece bardakta servis edilir.",
          "Güvenliğiniz için Sahil ve Pool barlarda cam bardak kullanılmamaktadır.",
          "T.C. yasalarına göre 18 yaşından küçüklere alkollü içki verilmez, servis edilmez."
        ]
      },
      {
        id: "room-services",
        title: "Oda Hizmetleri",
        icon: <FaKey className="w-6 h-6" />,
        content: [
          "Mini bar ücretsiz olup günde bir defa soft içeceklerle doldurulmaktadır.",
          "Split klima sistemi çalışırken lütfen balkon kapınızı kapalı tutunuz.",
          "Odalardaki nevresim ve havlular, su tasarrufu için talep edilmediği sürece 2 günde 1 değiştirilmektedir.",
          "Lütfen değerli eşyalarınızı odanızdaki ücretsiz kasanızda saklayınız.",
          "Havlu kartı ve oda kartının kaybedilmesi halinde, hesabınıza 10 Euro ilave edilecektir."
        ]
      },
      {
        id: "pool-beach",
        title: "Havuz ve Plaj",
        icon: <FaSwimmingPool className="w-6 h-6" />,
        content: [
          "Plaj ve havuzlarda kullanabileceğiniz havlularınızı, Spa alanındaki havlu standımızdan (08.30 - 12.00) temin edebilirsiniz.",
          "Dış alanda sunulan hizmetlerimiz hava şartlarına göre değişiklik gösterebilir."
        ]
      },
      {
        id: "paid-services",
        title: "Ücretli Hizmetler",
        icon: <FaCreditCard className="w-6 h-6" />,
        content: [
          "Odalara yiyecek ve içecek servisi ücretlidir.",
          "Taze sıkılmış meyve suları ücretlidir.",
          "Kuaför, masaj, kese, cilt ve vücut bakımı gibi talep edilen hizmetler ücretlidir.",
          "Telefon ücretlidir.",
          "Doktor ve sağlık hizmetleri ücretlidir.",
          "Çamaşırhane servisimiz ücretlidir."
        ]
      },
      {
        id: "internet",
        title: "İnternet Erişimi",
        icon: <FaWifi className="w-6 h-6" />,
        content: [
          "Lobby genel alanlar ve odalarda ücretsiz Wireless internet bağlantısı bulunmaktadır.",
          "Wireless'e bağlanmak için Kullanıcı Kodu: Oda Numaranız + Doğum yılı girmelisiniz."
        ]
      }
    ],
    phones: [
      { title: "Misafir İlişkileri", number: "505" },
      { title: "Doktor", number: "333" },
      { title: "Resepsiyon", number: "501-502-503" },
      { title: "Dış hat", number: "0" },
      { title: "Santral", number: "9" }
    ]
  },
  en: {
    welcome: [
      "AYDINBEY GROUP HOTELS",
      "Dear Guest,",
      "Welcome to Aydınbey Famous Resort Hotel!",
      "We are delighted to host you at our hotel. We wish you a pleasant holiday.",
      "As the Aydınbey Famous family, we will make every effort to provide you with the best service during your stay."
    ],
    sections: [
      {
        id: "check-in",
        title: "Check-in/Check-out and General Information",
        icon: <FaClock className="w-6 h-6" />,
        content: [
          "Room check-in time is 14:00, check-out time is 12:00.",
          "Alcoholic beverages are not served at breakfast.",
          "In the All-Inclusive concept, drinks and beverages are served only in glasses.",
          "For your safety, glass containers are not used at Beach and Pool bars.",
          "According to Turkish law, alcoholic beverages are not served to guests under 18."
        ]
      },
      {
        id: "room-services",
        title: "Room Services",
        icon: <FaKey className="w-6 h-6" />,
        content: [
          "Mini bar is free and refilled once daily with soft drinks.",
          "Please keep your balcony door closed while the split air conditioning system is running.",
          "Bed linens and towels are changed every 2 days unless requested, for water conservation.",
          "Please keep your valuables in your free room safe.",
          "If you lose your towel card or room card, 10 Euro will be added to your account."
        ]
      },
      {
        id: "pool-beach",
        title: "Pool and Beach",
        icon: <FaSwimmingPool className="w-6 h-6" />,
        content: [
          "You can obtain your beach and pool towels from our towel stand in the Spa area (08:30 - 12:00).",
          "Our outdoor services may vary depending on weather conditions."
        ]
      },
      {
        id: "paid-services",
        title: "Paid Services",
        icon: <FaCreditCard className="w-6 h-6" />,
        content: [
          "Room service for food and beverages is charged extra.",
          "Fresh squeezed fruit juices are charged extra.",
          "Services such as hairdresser, massage, peeling, skin and body care are charged extra.",
          "Telephone calls are charged extra.",
          "Doctor and health services are charged extra.",
          "Laundry service is charged extra."
        ]
      },
      {
        id: "internet",
        title: "Internet Access",
        icon: <FaWifi className="w-6 h-6" />,
        content: [
          "Free Wireless internet connection is available in the lobby, public areas, and rooms.",
          "To connect to Wireless, enter User Code: Your Room Number + Birth Year."
        ]
      }
    ],
    phones: [
      { title: "Guest Relations", number: "505" },
      { title: "Doctor", number: "333" },
      { title: "Reception", number: "501-502-503" },
      { title: "External Line", number: "0" },
      { title: "Operator", number: "9" }
    ]
  },
  ru: {
    welcome: [
      "ОТЕЛИ ГРУППЫ AYDINBEY",
      "Уважаемый гость,",
      "Добро пожаловать в Aydınbey Famous Resort Hotel!",
      "Мы рады приветствовать вас в нашем отеле. Желаем вам приятного отдыха.",
      "Как семья Aydınbey Famous, мы приложим все усилия, чтобы предоставить вам лучший сервис во время вашего пребывания."
    ],
    sections: [
      {
        id: "check-in",
        title: "Заезд/Выезд и Общая Информация",
        icon: <FaClock className="w-6 h-6" />,
        content: [
          "Время заезда в номера (check in) - 14:00, время выезда (check out) - 12:00.",
          "Алкогольные напитки не подаются на завтрак.",
          "В концепции Все включено напитки подаются только в стаканах.",
          "Для вашей безопасности в пляжных и бассейных барах не используется стеклянная посуда.",
          "Согласно законам Турции, алкогольные напитки не подаются гостям младше 18 лет."
        ]
      },
      {
        id: "room-services",
        title: "Обслуживание Номеров",
        icon: <FaKey className="w-6 h-6" />,
        content: [
          "Мини-бар бесплатный и пополняется безалкогольными напитками один раз в день.",
          "Пожалуйста, держите дверь балкона закрытой при работающем кондиционере.",
          "Постельное белье и полотенца меняются каждые 2 дня, если не требуется иное.",
          "Пожалуйста, храните ценные вещи в бесплатном сейфе вашего номера.",
          "В случае утери карты на полотенце или ключ-карты, с вашего счета будет списано 10 евро."
        ]
      },
      {
        id: "pool-beach",
        title: "Бассейн и Пляж",
        icon: <FaSwimmingPool className="w-6 h-6" />,
        content: [
          "Вы можете получить пляжные и бассейные полотенца на стойке полотенец в спа-зоне (08:30 - 12:00).",
          "Наши услуги на открытом воздухе могут варьироваться в зависимости от погодных условий."
        ]
      },
      {
        id: "paid-services",
        title: "Платные Услуги",
        icon: <FaCreditCard className="w-6 h-6" />,
        content: [
          "Обслуживание в номерах (еда и напитки) платное.",
          "Свежевыжатые соки платные.",
          "Услуги парикмахера, массажа, пилинга, ухода за кожей и телом платные.",
          "Телефонные звонки платные.",
          "Услуги врача и медицинские услуги платные.",
          "Услуги прачечной платные."
        ]
      },
      {
        id: "internet",
        title: "Доступ в Интернет",
        icon: <FaWifi className="w-6 h-6" />,
        content: [
          "Бесплатный Wi-Fi доступен в лобби, общественных зонах и номерах.",
          "Для подключения к Wi-Fi введите код пользователя: Номер вашей комнаты + Год рождения."
        ]
      }
    ],
    phones: [
      { title: "Отдел по работе с гостями", number: "505" },
      { title: "Врач", number: "333" },
      { title: "Ресепшн", number: "501-502-503" },
      { title: "Внешняя линия", number: "0" },
      { title: "Оператор", number: "9" }
    ]
  },
  de: {
    welcome: [
      "AYDINBEY GROUP HOTELS",
      "Sehr geehrter Gast,",
      "Willkommen im Aydınbey Famous Resort Hotel!",
      "Wir freuen uns, Sie in unserem Hotel begrüßen zu dürfen. Wir wünschen Ihnen einen angenehmen Aufenthalt.",
      "Als Aydınbey Famous Familie werden wir uns bestmöglich bemühen, Ihnen während Ihres Aufenthalts den besten Service zu bieten."
    ],
    sections: [
      {
        id: "check-in",
        title: "Check-in/Check-out und Allgemeine Informationen",
        icon: <FaClock className="w-6 h-6" />,
        content: [
          "Die Check-in-Zeit ist 14:00 Uhr, die Check-out-Zeit ist 12:00 Uhr.",
          "Beim Frühstück werden keine alkoholischen Getränke serviert.",
          "Im All-Inclusive-Konzept werden Getränke nur in Gläsern serviert.",
          "Zu Ihrer Sicherheit werden in den Strand- und Poolbars keine Glasgefäße verwendet.",
          "Gemäß türkischem Gesetz werden an Gäste unter 18 Jahren keine alkoholischen Getränke ausgeschenkt."
        ]
      },
      {
        id: "room-services",
        title: "Zimmerservice",
        icon: <FaKey className="w-6 h-6" />,
        content: [
          "Die Minibar ist kostenlos und wird einmal täglich mit alkoholfreien Getränken aufgefüllt.",
          "Bitte halten Sie Ihre Balkontür geschlossen, während die Split-Klimaanlage läuft.",
          "Bettwäsche und Handtücher werden alle 2 Tage gewechselt, wenn nicht anders gewünscht.",
          "Bitte bewahren Sie Ihre Wertsachen im kostenlosen Zimmersafe auf.",
          "Bei Verlust der Handtuchkarte oder Zimmerkarte werden 10 Euro Ihrem Konto belastet."
        ]
      },
      {
        id: "pool-beach",
        title: "Pool und Strand",
        icon: <FaSwimmingPool className="w-6 h-6" />,
        content: [
          "Sie können Ihre Strand- und Poolhandtücher am Handtuchstand im Spa-Bereich (08:30 - 12:00 Uhr) erhalten.",
          "Unsere Außendienstleistungen können je nach Wetterbedingungen variieren."
        ]
      },
      {
        id: "paid-services",
        title: "Kostenpflichtige Dienstleistungen",
        icon: <FaCreditCard className="w-6 h-6" />,
        content: [
          "Zimmerservice für Speisen und Getränke ist kostenpflichtig.",
          "Frisch gepresste Fruchtsäfte sind kostenpflichtig.",
          "Dienstleistungen wie Friseur, Massage, Peeling, Haut- und Körperpflege sind kostenpflichtig.",
          "Telefongespräche sind kostenpflichtig.",
          "Arzt- und Gesundheitsdienste sind kostenpflichtig.",
          "Wäschereiservice ist kostenpflichtig."
        ]
      },
      {
        id: "internet",
        title: "Internetzugang",
        icon: <FaWifi className="w-6 h-6" />,
        content: [
          "Kostenlose WLAN-Verbindung ist in der Lobby, in öffentlichen Bereichen und in den Zimmern verfügbar.",
          "Für die WLAN-Verbindung geben Sie den Benutzercode ein: Ihre Zimmernummer + Geburtsjahr."
        ]
      }
    ],
    phones: [
      { title: "Gästebetreuung", number: "505" },
      { title: "Arzt", number: "333" },
      { title: "Rezeption", number: "501-502-503" },
      { title: "Außenleitung", number: "0" },
      { title: "Zentrale", number: "9" }
    ]
  }
};

const InfoCard = ({ section }: { section: InfoSection }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="p-6 cursor-pointer flex items-center justify-between"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-4">
          <div className="text-[#d3ab71]">
            {section.icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-800">{section.title}</h3>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#d3ab71]"
        >
          <IoMdInformationCircle className="w-6 h-6" />
        </motion.div>
      </div>
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-6 pt-0 space-y-3">
          {section.content.map((item, index) => (
            <p key={index} className="text-gray-600">
              • {item}
            </p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function HotelInfo({ language }: { language: Language }) {
  const currentData = hotelData[language.code] || hotelData.en;

  return (
    <div className="min-h-screen py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-[#d3ab71] mb-8">
            {language.sectionTitles.hotelInfo}
          </h1>
          {currentData.welcome.map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`text-gray-800 ${index === 0 ? 'text-2xl font-bold mb-4' : 'text-lg mb-2'}`}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>

        <div className="space-y-4">
          {currentData.sections.map((section) => (
            <InfoCard key={section.id} section={section} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-2xl font-semibold text-[#d3ab71] mb-6 flex items-center">
            <FaPhone className="w-5 h-5 mr-3" />
            Önemli Telefonlar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentData.phones.map((phone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <span className="text-gray-700">{phone.title}</span>
                <span className="text-[#d3ab71] font-semibold">{phone.number}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 