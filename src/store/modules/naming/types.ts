export interface Naming {
    idx: number,
    name: string,
    description: string
}

export interface NamingState {
    namingList: Naming[];
}

export enum NamingMutation {
    SAVE = "SAVE",
}
