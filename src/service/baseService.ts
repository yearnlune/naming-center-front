import Axios from 'axios';


export default class BaseService {
    protected apiOriginPath: string

    constructor() {
        this.apiOriginPath = "/";
    }

    protected makeApiPath(path: string): string {
        return process.env.VUE_APP_DATA_API + this.apiOriginPath + path;
    }

    public restfulGet(path: string, payload: string): Promise<any> {
        return Axios.get(this.makeApiPath(path) + '/' + payload, {headers: {Authorization: window.localStorage.getItem('jwt')}});
    }

    public restfulPost(path: string, payload: any): Promise<any> {
        return Axios.post(this.makeApiPath(path), payload);
    }

}

