import {BaseReturn} from "./baseReturn.ts";
import {SpsTimetableInfo} from "../response/spsTimetableInfo.ts";

export class SpsTimetableReturn extends BaseReturn {
    public timetables: SpsTimetableInfo[];

    constructor(listTotalCount: number, schedules: SpsTimetableInfo[]) {
        super("spsTimetable", listTotalCount);
        this.timetables = schedules;
    }
}