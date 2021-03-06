var api_url = '';

switch (process.env.NODE_ENV) {
    case 'development':
        api_url = './api/v1';
        break;
    case 'production':
        api_url = './api/v1';
        break;
    default:
        break;
}

export const APP_CONFIG = {
    API_URL: api_url,
}