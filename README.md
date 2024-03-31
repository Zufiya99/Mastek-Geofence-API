# Geofence API

The Geofence API is a service that allows users to check if they are inside a predefined geofence area. This API can be integrated into various applications, such as mobile apps or web apps, to provide location-based functionality.

## Features

- **Geofence Checking**: Users can send their current location coordinates to the API and receive a response indicating whether they are inside the predefined geofence area.

## Getting Started

To get started with the Geofence API, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine using the following command:
   ```
   git clone <repository_url>
   ```

2. **Install Dependencies**: Navigate to the project directory and install the dependencies using npm:
   ```
   npm install
   ```

3. **Define Geofence Coordinates**: Open the `app.js` file and define the coordinates of the geofence area in the `geofenceCoordinates` array.

4. **Run the Server**: Start the Express.js server by running the following command:
   ```
   node app.js
   ```

5. **Test the API**: Use tools like Postman or curl to send GET requests to the `/checkGeofence` endpoint with latitude and longitude parameters to test the API.

## API Documentation

### `GET /checkGeofence`

Check if a given location is inside the geofence area.

**Parameters:**
- `lat`: Latitude of the location (required).
- `lng`: Longitude of the location (required).

**Response:**
- `insideGeofence`: Boolean value indicating whether the location is inside the geofence area.

**Example Request:**
```
GET /checkGeofence?lat=<preferredLat>&lng=<preferredLog>
```

**Example Response:**
```json
{
  "insideGeofence": true
}
```

## Deployment

You can deploy the Geofence API to a hosting provider such as Heroku, AWS, or DigitalOcean to make it accessible over the internet.

## Contributing

Contributions to the Geofence API are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
