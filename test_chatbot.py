import requests
import json

def test_chatbot(message):
    url = "http://localhost:5000/chat"
    headers = {"Content-Type": "application/json"}
    data = {"message": message}
    
    try:
        response = requests.post(url, headers=headers, json=data)
        print(f"\nSoru: {message}")
        print("\nCevap:", json.dumps(response.json(), indent=2, ensure_ascii=False))
    except Exception as e:
        print(f"Hata: {e}")

# Test soruları
test_questions = [
    "otel odaları hakkında bilgi verir misiniz?",
    "restoranlarda ne yemekler var?",
    "havuz ve plaj hakkında bilgi alabilir miyim?",
    "çocuklar için aktiviteler neler?",
    "otele giriş çıkış saatleri nedir?"
]

if __name__ == "__main__":
    print("Chatbot Test Başlıyor...\n")
    for question in test_questions:
        test_chatbot(question)
        print("\n" + "-"*50) 