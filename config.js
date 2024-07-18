const config = {
    apiToken: 'mi_token_secreto',
    apis: [{
        animals: 'https://us-central1-pets-api-f1d89.cloudfunctions.net/app/api/v1/animals',
        species: 'https://us-central1-pets-api-f1d89.cloudfunctions.net/app/api/v1/species',
        saved: 'https://us-central1-pets-api-f1d89.cloudfunctions.net/app/api/v1/saved',
        users: 'https://us-central1-pets-api-f1d89.cloudfunctions.net/app/api/v1/users'
    }]
}

export default config;