import {BaseReturn} from "./baseReturn.ts";
import {ElsTimetableInfo} from "../response/elsTimetableInfo.ts";

export class ElsTimetableReturn extends BaseReturn {
    public timetables: ElsTimetableInfo[];

    constructor(listTotalCount: number, timetables: ElsTimetableInfo[]) {
        super("elsTimetable", listTotalCount);
        this.timetables = timetables;
    }
}