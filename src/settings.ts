/**
 * This is the name of the platform that users will use to register the plugin in the Homebridge config.json
 */
export const PLATFORM_NAME = 'Panasonic AC Platform ECO';

/**
 * This must match the name of your plugin as defined the package.json
 */
export const PLUGIN_NAME = 'homebridge-panasonic-ac-platform-eco';

export const COMFORT_CLOUD_USER_AGENT = 'G-RAC';
export const APP_VERSION = '1.14.0';

// 360 sec = 6 min
export const LOGIN_RETRY_DELAY = 360 * 1000;

// Used to renew the token periodically. Only a safety measure, since we are handling
// network errors dynamically and re-issuing a login upon a 401 Unauthorized error.
// 604,800 sec = 7 days
export const LOGIN_TOKEN_REFRESH_INTERVAL = 604800 * 1000;

// 60 sec = 1 min
export const DEVICE_STATUS_REFRESH_INTERVAL = 60 * 1000;