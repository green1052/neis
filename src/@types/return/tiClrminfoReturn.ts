import {BaseReturn} from "./baseReturn.ts";
import {TiClrminfoInfo} from "../response/tiClrminfoInfo.ts";

export class TiClrminfoReturn extends BaseReturn {
    public timetables: TiClrminfoInfo[];

    constructor(listTotalCount: number, schedules: TiClrminfoInfo[]) {
        super("tiClrminfo", listTotalCount);
        this.timetables = schedules;
    }
}