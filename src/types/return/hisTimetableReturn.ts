import {BaseReturn} from "./baseReturn.ts";
import {HisTimetableInfo} from "../response/hisTimetableInfo.ts";

export class HisTimetableReturn extends BaseReturn {
    public timetables: HisTimetableInfo[];

    constructor(listTotalCount: number, timetables: HisTimetableInfo[]) {
        super("hisTimetable", listTotalCount);
        this.timetables = timetables;
    }
}