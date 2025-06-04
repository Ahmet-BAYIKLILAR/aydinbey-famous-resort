# Eleythra Otel Dijital Asistanı

Bu proje, Aydınbey Famous Resort için geliştirilmiş bir dijital asistan chatbot sistemidir. Sistem, otel misafirlerinin sorularını yanıtlamak için tasarlanmış olup, Next.js ve Flask kullanılarak geliştirilmiştir.

## Özellikler

- Otel hakkında sık sorulan soruları yanıtlama
- Doğal dil işleme ile kullanıcı sorularını anlama
- Gerçek zamanlı sohbet arayüzü
- Kategorize edilmiş otel bilgileri
- Modern ve kullanıcı dostu arayüz

## Kurulum

### Backend (Flask API)

1. Python bağımlılıklarını yükleyin:
```bash
pip install -r requirements.txt
```

2. Flask API'yi başlatın:
```bash
cd src/services/api
python app.py
```

API http://localhost:5000 adresinde çalışmaya başlayacaktır.

### Frontend (Next.js)

1. Node.js bağımlılıklarını yükleyin:
```bash
npm install
```

2. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

Uygulama http://localhost:3000 adresinde çalışmaya başlayacaktır.

## Kullanım

1. Web uygulamasını açın (http://localhost:3000)
2. Sağ alt köşedeki "Eleythra Dijital Asistanınız" butonuna tıklayın
3. Chatbot penceresinde sorunuzu yazın ve gönderin
4. Sistem sorunuzu analiz edip en uygun yanıtı verecektir

## Veri Yapısı

Chatbot yanıtları `src/services/database/hotel_data.json` dosyasında saklanmaktadır. Veriler aşağıdaki kategorilere ayrılmıştır:

- Odalar
- Restoranlar
- Aktiviteler
- SPA
- Genel Bilgiler

## Geliştirme

### Yeni Soru-Cevap Ekleme

1. `hotel_data.json` dosyasını açın
2. İlgili kategori altına yeni soru ve cevapları ekleyin
3. Sistemi yeniden başlatın

### Chatbot Davranışını Özelleştirme

Chatbot'un davranışını özelleştirmek için `src/services/chatbot/chatbot.py` dosyasını düzenleyebilirsiniz:

- Benzerlik eşik değerlerini ayarlama
- Yeni özellikler ekleme
- Yanıt formatını değiştirme

## Lisans

Bu proje özel kullanım için geliştirilmiştir ve tüm hakları saklıdır. 