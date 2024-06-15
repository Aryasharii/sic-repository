#include <DHT.h>
#include <WiFi.h>
#include <HTTPClient.h>
#define DEBUG_ESP_HTTP_CLIENT

const char* ssid = "Redmi 9T";
const char* password = "Arya123aa";
const char* serverName = "http://192.168.238.221:5000/api/sensor";

DHT dht(15, DHT11);

void setup() {
  Serial.begin(9600);
  dht.begin();
  
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  
  Serial.println("Connected to WiFi");
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;

    float temp = dht.readTemperature();
    float humidity = dht.readHumidity();

    if (isnan(temp) || isnan(humidity)) {
      Serial.println("Failed to read from DHT sensor!");
      return;
    }

    String outputTemp = "Temp: " + String(temp) + " C";
    String outputHumidity = "Humidity: " + String(humidity) + " %";
    Serial.println(outputTemp);
    Serial.println(outputHumidity);

    String postData = "{\"temperature\":" + String(temp) + ", \"humidity\":" + String(humidity) + "}";

    http.begin(serverName);
    http.addHeader("Content-Type", "application/json");

    int httpResponseCode = http.POST(postData);

    if (httpResponseCode > 0) {
      String response = http.getString();
      Serial.println(httpResponseCode);
      Serial.println(response);
    } else {
      Serial.print("Error on sending POST: ");
      Serial.println(httpResponseCode);
    }

    http.end();
  } else {
    Serial.println("Error in WiFi connection");
  }

  delay(2000); 
}
