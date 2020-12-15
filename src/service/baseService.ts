import Axios from 'axios';


export default class BaseService {
    protected apiOriginPath: string

    constructor() {
        this.apiOriginPath = "/";
    }

    protected makeApiPath(path: string): string {
        return process.env.VUE_APP_DATA_API + this.apiOriginPath + path;
    }

    public restfulGet(prefixPath: string, payload: string, postfixPath?: string): Promise<any> {
        let path = this.makeApiPath(prefixPath) + '/' + payload;
        if (postfixPath) {
            path = path.concat('/', postfixPath);
        }
        console.log(path)
        return Axios.get(path, {headers: {Authorization: window.localStorage.getItem('jwt')}});
    }

    public restfulPost(path: string, payload: any): Promise<any> {
        return Axios.post(this.makeApiPath(path), payload);
    }

}

