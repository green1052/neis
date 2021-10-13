import {BaseReturn} from "./baseReturn.ts";
import {SchulAflcoinfoInfo} from "../response/schulAflcoinfoInfo.ts";

export class SchulAflcoinfoReturn extends BaseReturn {
    public schulAflcoinfo: SchulAflcoinfoInfo[];

    constructor(listTotalCount: number, schulAflcoinfo: SchulAflcoinfoInfo[]) {
        super("schulAflcoinfo", listTotalCount);
        this.schulAflcoinfo = schulAflcoinfo;
    }
}