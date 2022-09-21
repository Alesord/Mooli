export class Usuario {
    constructor(
        public userId: string,
        public email: string,
        public _token: string,
        public tokenExpDate: Date
    ) {}

    get token() {
        if (!this.tokenExpDate || this.tokenExpDate <= new Date()) {
            return null;
        }
        return this._token;
    }
}

export interface UsuarioPerfilData {
    nickname: string;
}