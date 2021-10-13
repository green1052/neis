export class BaseReturn {
    public name: string;
    public listTotalCount: number;

    constructor(name: string, listTotalCount: number) {
        this.name = name;
        this.listTotalCount = listTotalCount;
    }
}