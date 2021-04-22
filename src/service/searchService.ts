import BaseService from "@/service/baseService";

export enum ApiPath {
    SEARCH = 'naming',
    AUTOCOMPLETE = 'autocomplete'
}

export class SearchService extends BaseService {
    searchName(keyword: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.restfulGet(ApiPath.SEARCH, keyword)
                .then((response) => {
                    resolve(response.data);
                }).catch((error) => {
                console.error(error);
                reject();
            })
        });
    }

    searchAutoComplete(naming: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
                this.restfulGet(ApiPath.SEARCH, naming, ApiPath.AUTOCOMPLETE)
                    .then((response) => {
                        resolve(response.data?.namingList);
                    }).catch((error) => {
                    console.error(error);
                    reject();
                })
            }
        );

    }
}

export const searchService: SearchService = new SearchService();
