import {BaseReturn} from "./baseReturn.ts";
import {SchoolInfoInfo} from "../response/schoolInfoInfo.ts";

export class SchoolInfoReturn extends BaseReturn {
    public schools: SchoolInfoInfo[];

    constructor(listTotalCount: number, schools: SchoolInfoInfo[]) {
        super("schoolInfo", listTotalCount);
        this.schools = schools;
    }
}