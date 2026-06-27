import config from '../config.json';

export class ConfigReader {

    static get baseUrl(): string {
        return config.baseUrl;
    }

    static get username(): string {
        return config.username;
    }

    static get password(): string {
        return config.password;
    }

    static get timeout(): number {
        return config.timeout;
    }

}