import BaseService from "@/service/baseService";

let INSTANCE: SearchService;

export enum ApiPath {
    SEARCH = 'naming',
    AUTOCOMPLETE = 'autocomplete'
}

export class SearchService extends BaseService {
    constructor() {
        super();
    }
}

export default function searchService(): SearchService {
    if (!INSTANCE) {
        INSTANCE = new SearchService();
    }
    return INSTANCE;
}
