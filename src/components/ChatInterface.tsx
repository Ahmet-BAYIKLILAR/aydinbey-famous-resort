import React, { useState, useEffect, useRef } from 'react';
import { FaLanguage } from 'react-icons/fa';

interface Message {
    text: string;
    isUser: boolean;
}

interface ChatInterfaceProps {
    initialLanguage?: string;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ initialLanguage = 'tr' }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);
    const messagesEndRef = useRef<null | HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleLanguageChange = (lang: string) => {
        setSelectedLanguage(lang);
        // Dil değiştiğinde hoşgeldiniz mesajını seçilen dilde göster
        const welcomeMessage = {
            text: getWelcomeMessage(lang),
            isUser: false
        };
        setMessages([welcomeMessage]);
    };

    const getWelcomeMessage = (lang: string) => {
        const welcomeMessages = {
            tr: "Merhaba! 👋 Aydınbey Famous Resort'a hoş geldiniz. Size nasıl yardımcı olabilirim?",
            en: "Hello! 👋 Welcome to Aydınbey Famous Resort. How can I help you?",
            de: "Hallo! 👋 Willkommen im Aydınbey Famous Resort. Wie kann ich Ihnen helfen?",
            ru: "Привет! 👋 Добро пожаловать в Aydınbey Famous Resort. Как я могу вам помочь?"
        };
        return welcomeMessages[lang as keyof typeof welcomeMessages] || welcomeMessages.tr;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        const userMessage = {
            text: inputText,
            isUser: true
        };

        setMessages(prev => [...prev, userMessage]);
        setInputText('');

        try {
            const response = await fetch('http://localhost:5000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: inputText,
                    language: selectedLanguage // Seçilen dili API'ye gönder
                })
            });

            const data = await response.json();
            const botMessage = {
                text: data.response,
                isUser: false
            };

            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            console.error('Error:', error);
            const errorMessage = {
                text: "Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin.",
                isUser: false
            };
            setMessages(prev => [...prev, errorMessage]);
        }
    };

    return (
        <div className="flex flex-col h-screen max-w-2xl mx-auto p-4">
            {/* Dil Seçim Butonları */}
            <div className="flex justify-center space-x-4 mb-4">
                <button
                    onClick={() => handleLanguageChange('tr')}
                    className={`px-4 py-2 rounded-full flex items-center ${
                        selectedLanguage === 'tr' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                    }`}
                >
                    <FaLanguage className="mr-2" />
                    Türkçe
                </button>
                <button
                    onClick={() => handleLanguageChange('en')}
                    className={`px-4 py-2 rounded-full flex items-center ${
                        selectedLanguage === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                    }`}
                >
                    <FaLanguage className="mr-2" />
                    English
                </button>
                <button
                    onClick={() => handleLanguageChange('de')}
                    className={`px-4 py-2 rounded-full flex items-center ${
                        selectedLanguage === 'de' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                    }`}
                >
                    <FaLanguage className="mr-2" />
                    Deutsch
                </button>
                <button
                    onClick={() => handleLanguageChange('ru')}
                    className={`px-4 py-2 rounded-full flex items-center ${
                        selectedLanguage === 'ru' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                    }`}
                >
                    <FaLanguage className="mr-2" />
                    Русский
                </button>
            </div>

            {/* Mesaj Listesi */}
            <div className="flex-1 overflow-y-auto mb-4 space-y-4 p-4 bg-gray-50 rounded-lg">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-[70%] p-3 rounded-lg ${
                                message.isUser
                                    ? 'bg-blue-500 text-white rounded-br-none'
                                    : 'bg-white shadow-md rounded-bl-none'
                            }`}
                        >
                            <p className="whitespace-pre-wrap">{message.text}</p>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Mesaj Gönderme Formu */}
            <form onSubmit={handleSubmit} className="flex space-x-2">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder={
                        selectedLanguage === 'tr' ? "Mesajınızı yazın..." :
                        selectedLanguage === 'en' ? "Type your message..." :
                        selectedLanguage === 'de' ? "Nachricht eingeben..." :
                        "Введите сообщение..."
                    }
                    className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                    {selectedLanguage === 'tr' ? "Gönder" :
                     selectedLanguage === 'en' ? "Send" :
                     selectedLanguage === 'de' ? "Senden" :
                     "Отправить"}
                </button>
            </form>
        </div>
    );
};

export default ChatInterface; 