export interface List {
    name: string;
    listContent: string[]
}

export interface ListFull {
    nameId: string;
    list: List;

}

export interface ListAuth {
    key: string,
    listFull: ListFull[]
}

export interface Lista {
    listName: string;
    listContent: string[]
}
