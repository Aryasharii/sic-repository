# ESP32 Sensor Data Transmission to Local Server

This project utilizes ESP32 with DHT11 sensor to capture temperature and humidity data, which is then sent to a local server via HTTP POST using REST API. A Python script on the server side handles incoming data and provides responses.

## Components

- **ESP32 Setup**: Captures DHT11 data and sends it to the server.
- **Server-side (Python)**: Receives data from ESP32 and processes it.
- **Physical Setup**:
  <img src="https://github.com/Aryasharii/sic-repository/blob/pertemuan4/hasil/hasil.jpg" width="400" alt="ESP32 Setup">

## Serial Monitor Output

<img src="https://github.com/Aryasharii/sic-repository/blob/pertemuan4/hasil/hasil%20serial%20monitor.png" width="400" alt="Serial Monitor Output">

## Usage

1. **ESP32 Setup**: Ensure correct connections and upload `.ino` file.
2. **Server Setup**: Run `.py` file on local server.
3. **Verification**: Check server response for transmitted data.

