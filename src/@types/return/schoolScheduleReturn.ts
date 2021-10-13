import {BaseReturn} from "./baseReturn.ts";
import {SchoolScheduleInfo} from "../response/schoolScheduleInfo.ts";

export class SchoolScheduleReturn extends BaseReturn {
    public schedules: SchoolScheduleInfo[];

    constructor(listTotalCount: number, schedules: SchoolScheduleInfo[]) {
        super("SchoolSchedule", listTotalCount);
        this.schedules = schedules;
    }
}