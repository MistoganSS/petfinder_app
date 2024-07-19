const config = {
    apiToken: 'mi_token_secreto',
    apis: [{
        animals: 'https://us-central1-pets-api-f1d89.cloudfunctions.net/app/api/v1/animals',
        species: 'https://us-central1-pets-api-f1d89.cloudfunctions.net/app/api/v1/species',
        saved: 'https://us-central1-pets-api-f1d89.cloudfunctions.net/app/api/v1/saved',
        users: 'https://us-central1-pets-api-f1d89.cloudfunctions.net/app/api/v1/users'
    }],
    DEFAULT_PET_IMAGE_URL: 'https://i.postimg.cc/rp19W82w/default.jpg',
    GEOLOCALIZATION_SERVICE_URL: 'https://www.google.com/maps/search',
    SOCIAL_SHARE_URL: 'https://www.facebook.com/sharer/sharer.php?u=HOSTNAME',
}

export default config;