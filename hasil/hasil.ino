#include <WiFi.h>
#include <HTTPClient.h>
#include <DHT.h>

// Constants
#define DHTPIN 13
#define DHTTYPE DHT11   
#define WIFI_SSID "Madrasah Dalam UPer"
#define WIFI_PASS "Dalambanget17"
#define SERVER_IP "192.168.100.5"
#define SERVER_PORT 80
#define API_ENDPOINT "/api/data"

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  dht.begin();
  WiFi.begin(WIFI_SSID, WIFI_PASS);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");
}

void loop() {
  delay(2000);
  float hum = dht.readHumidity();
  float temp = dht.readTemperature();
  
  if (isnan(hum) || isnan(temp)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }
  
  // Send data to server
  HTTPClient http;
  http.begin("http://" + String(SERVER_IP) + ":" + String(SERVER_PORT) + API_ENDPOINT);
  http.addHeader("Content-Type", "application/json");

  String postData = "{\"temperature\": " + String(temp) + ", \"humidity\": " + String(hum) + "}";
  int httpResponseCode = http.POST(postData);

  if (httpResponseCode > 0) {
    String response = http.getString();
    Serial.println("HTTP Response code: " + String(httpResponseCode));
    Serial.println(response);
  } else {
    Serial.println("Error sending data to server!");
    Serial.println(httpResponseCode);
  }

  http.end();
  delay(10000);
