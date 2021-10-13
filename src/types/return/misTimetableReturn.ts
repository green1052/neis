import {BaseReturn} from "./baseReturn.ts";
import {MisTimetableInfo} from "../response/misTimetableInfo.ts";

export class MisTimetableReturn extends BaseReturn {
    public timetables: MisTimetableInfo[];

    constructor(listTotalCount: number, timetables: MisTimetableInfo[]) {
        super("misTimetable", listTotalCount);
        this.timetables = timetables;
    }
}