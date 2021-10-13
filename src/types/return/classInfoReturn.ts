import {BaseReturn} from "./baseReturn.ts";
import {ClassInfoInfo} from "../response/classInfoInfo.ts";

export class ClassInfoReturn extends BaseReturn {
    public infos: ClassInfoInfo[];

    constructor(listTotalCount: number, infos: ClassInfoInfo[]) {
        super("classInfo", listTotalCount);
        this.infos = infos;
    }
}