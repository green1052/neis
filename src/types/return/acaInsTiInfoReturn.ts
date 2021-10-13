import {BaseReturn} from "./baseReturn.ts";
import {AcaInsTiInfoInfo} from "../response/acaInsTiInfoInfo.ts";

export class AcaInsTiInfoReturn extends BaseReturn {
    public acaInsTis: AcaInsTiInfoInfo[];

    constructor(listTotalCount: number, schools: AcaInsTiInfoInfo[]) {
        super("acaInsTiInfo", listTotalCount);
        this.acaInsTis = schools;
    }
}