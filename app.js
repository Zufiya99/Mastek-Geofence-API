const express = require('express');
const app = express();

// Geofence coordinates
const geofenceCoordinates = [
    { lat: 19.18867993720706, lng: 72.8250620556384 }, //Need to replace these coordinates with Mastek location
];

// Radius of geofence
const geofenceRadius = 1000; // 1 kilometers

// Function to check if a given point is inside the geofence
function isInsideGeofence(lat, lng) {
    for (const coord of geofenceCoordinates) {
        const distance = calculateDistance(lat, lng, coord.lat, coord.lng);
        if (distance <= geofenceRadius) {
            return true;
        }
    }
    return false;
}

// Function to calculate the distance between two points using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in kilometers
    return d * 1000; // Convert distance to meters
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

// Route to handle checking if a point is inside the geofence
app.get('/checkGeofence', (req, res) => {
    const { lat, lng } = req.query;
    if (!lat || !lng) {
        return res.status(400).json({ error: 'Latitude and longitude are required.' });
    }

    const userLat = parseFloat(lat);
    const userLng = parseFloat(lng);

    // Check if the user is inside the geofence
    const insideGeofence = isInsideGeofence(userLat, userLng);
    res.json({ insideGeofence });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

