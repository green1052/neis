import {BaseReturn} from "./baseReturn.ts";
import {SchoolMajorinfoInfo} from "../response/schoolMajorinfoInfo.ts";

export class SchoolMajorinfoReturn extends BaseReturn {
    public majors: SchoolMajorinfoInfo[];

    constructor(listTotalCount: number, majors: SchoolMajorinfoInfo[]) {
        super("schoolMajorinfo", listTotalCount);
        this.majors = majors;
    }
}