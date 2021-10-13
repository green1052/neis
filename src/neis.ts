import {DefaultArgs} from "./types/args/defaultArgs.ts";
import {MealServiceDietInfoArgs} from "./types/args/mealServiceDietInfoArgs.ts";
import {InvalidCodeError} from "./error/invalidCodeError.ts";
import {BaseResponse} from "./types/response/baseReponse.ts";
import {MealServiceDietInfoReturn} from "./types/return/mealServiceDietInfoReturn.ts";
import {SchoolInfoArgs} from "./types/args/schoolInfoArgs.ts";
import {SchoolInfoInfo} from "./types/response/schoolInfoInfo.ts";
import {MealServiceDietInfo} from "./types/response/mealServiceDietInfo.ts";
import {SchoolInfoReturn} from "./types/return/schoolInfoReturn.ts";
import {AcaInsTiInfoArgs} from "./types/args/acaInsTiInfoArgs.ts";
import {AcaInsTiInfoInfo} from "./types/response/acaInsTiInfoInfo.ts";
import {AcaInsTiInfoReturn} from "./types/return/acaInsTiInfoReturn.ts";
import {SchoolScheduleArgs} from "./types/args/schoolScheduleArgs.ts";
import {SchoolScheduleReturn} from "./types/return/schoolScheduleReturn.ts";
import {SchoolScheduleInfo} from "./types/response/schoolScheduleInfo.ts";
import {HisTimetableArgs} from "./types/args/hisTimetableArgs.ts";
import {HisTimetableReturn} from "./types/return/hisTimetableReturn.ts";
import {HisTimetableInfo} from "./types/response/hisTimetableInfo.ts";
import {ClassInfoArgs} from "./types/args/classInfoArgs.ts";
import {ClassInfoReturn} from "./types/return/classInfoReturn.ts";
import {ClassInfoInfo} from "./types/response/classInfoInfo.ts";
import {ElsTimetableArgs} from "./types/args/elsTimetableArgs.ts";
import {ElsTimetableInfo} from "./types/response/elsTimetableInfo.ts";
import {ElsTimetableReturn} from "./types/return/elsTimetableReturn.ts";
import {MisTimetableInfo} from "./types/response/misTimetableInfo.ts";
import {MisTimetableArgs} from "./types/args/misTimetableArgs.ts";
import {MisTimetableReturn} from "./types/return/misTimetableReturn.ts";
import {SchoolMajorinfoArgs} from "./types/args/schoolMajorinfoArgs.ts";
import {SchoolMajorinfoInfo} from "./types/response/schoolMajorinfoInfo.ts";
import {SchoolMajorinfoReturn} from "./types/return/schoolMajorinfoReturn.ts";
import {SchulAflcoinfoArgs} from "./types/args/schulAflcoinfoArgs.ts";
import {SchulAflcoinfoReturn} from "./types/return/schulAflcoinfoReturn.ts";
import {SchulAflcoinfoInfo} from "./types/response/schulAflcoinfoInfo.ts";
import {SpsTimetableArgs} from "./types/args/spsTimetableArgs.ts";
import {SpsTimetableReturn} from "./types/return/spsTimetableReturn.ts";
import {SpsTimetableInfo} from "./types/response/spsTimetableInfo.ts";
import {TiClrminfoArgs} from "./types/args/tiClrminfoArgs.ts";
import {TiClrminfoInfo} from "./types/response/tiClrminfoInfo.ts";
import {TiClrminfoReturn} from "./types/return/tiClrminfoReturn.ts";

const baseUrl = "https://open.neis.go.kr/hub";

export class Neis {
    private readonly defaultArgs: DefaultArgs;

    constructor(defaultArgs: DefaultArgs) {
        if (defaultArgs.KEY === undefined) {
            defaultArgs.pIndex = 1;
            defaultArgs.pSize = 5;
        }

        defaultArgs.pIndex ??= 1;
        defaultArgs.pSize ??= 100;

        this.defaultArgs = defaultArgs;
    }

    /**
     * 학교에서 제공하는 현재년도 급식의 요리명, 원산지정보, 칼로리정보, 영양정보 등의 일자별 현황입니다.
     *
     * 요리명에 표시된 번호는 알레르기를 유발할수 있는 식재료입니다 (1.난류, 2.우유, 3.메밀, 4.땅콩, 5.대두, 6.밀, 7.고등어, 8.게, 9.새우, 10.돼지고기, 11.복숭아, 12.토마토, 13.아황산염, 14.호두, 15.닭고기, 16.쇠고기, 17.오징어, 18.조개류(굴,전복,홍합 등)
     * @param {MealServiceDietInfoArgs} args
     */
    public async getMealServiceDietInfo(args: MealServiceDietInfoArgs) {
        const response = await this.get("/mealServiceDietInfo", args);
        return new MealServiceDietInfoReturn(response[0].head[0].list_total_count, <MealServiceDietInfo[]>response[1].row);
    }

    /**
     * 학교 기본정보에 대한 학교명, 소재지, 주소, 전화번호, 홈페이지주소, 남녀공학여부, 주야구분, 개교기념일 등을 확인할 수 있는 현황입니다.
     *
     폐교 현황은 [학교알리미](http://www.schoolinfo.go.kr/ei/ss/pneiss_a07_s0.do) 사이트의 신설/폐교 학교정보에서 확인 하실수 있습니다
     *
     * Map에서 검색된 결과는 지도에 300개 까지만 마커로 표시 됩니다
     * @param {SchoolInfoArgs} args
     */
    public async getSchoolInfo(args: SchoolInfoArgs) {
        const response = await this.get("/schoolInfo", args);
        return new SchoolInfoReturn(response[0].head[0].list_total_count, <SchoolInfoInfo[]>response[1].row);
    }

    /**
     * 개설되어있는 학원 및 교습소의 학원명, 휴원일자, 등록상태, 정원, 분야, 계열 및 과정등을 확인할 수 있으며 수강료 공개여부에 따라 수강료 내용을 확인할 수 있습니다.
     * @param {AcaInsTiInfoArgs} args
     */
    public async getAcaInsTiInfo(args: AcaInsTiInfoArgs) {
        const response = await this.get("/schoolInfo", args);
        return new AcaInsTiInfoReturn(response[0].head[0].list_total_count, <AcaInsTiInfoInfo[]>response[1].row);
    }

    /**
     * 학년도, 학교별 주요 행사 정보에 대한 학사일자, 행사명, 행사내용, 학년별 행사여부 등의 현황입니다.
     * @param {SchoolScheduleArgs} args
     */
    public async getSchoolSchedule(args: SchoolScheduleArgs) {
        const response = await this.get("/SchoolSchedule", args);
        return new SchoolScheduleReturn(response[0].head[0].list_total_count, <SchoolScheduleInfo[]>response[1].row);
    }

    /**
     * 고등학교 학년도, 학교, 계열, 학과, 학기, 학년, 강의실, 교시별 시간표 수업내용을 확인할 수 있는 현황입니다.
     * @param {HisTimetableArgs} args
     */
    public async getHisTimetable(args: HisTimetableArgs) {
        const response = await this.get("/hisTimetable", args);
        return new HisTimetableReturn(response[0].head[0].list_total_count, <HisTimetableInfo[]>response[1].row);
    }

    /**
     * 학교명 등의 검색 조건을 선택하여 반정보를 검색할 수 있으며 반정보 데이터셋을 이용하여 초등학교, 중학교 시간표 조회시 반정보를 콤보박스로 만들어 조회 조건으로 사용 할 수 있습니다.
     * @param {ClassInfoArgs} args
     */
    public async getClassInfo(args: ClassInfoArgs) {
        const response = await this.get("/classInfo", args);
        return new ClassInfoReturn(response[0].head[0].list_total_count, <ClassInfoInfo[]>response[1].row);
    }

    /**
     * 초등학교 학년도, 학교, 학기, 학년, 반, 교시별 시간표 수업내용을 확인할 수 있는 현황입니다
     * @param {ElsTimetableArgs} args
     */
    public async getElsTimetable(args: ElsTimetableArgs) {
        const response = await this.get("/elsTimetable", args);
        return new ElsTimetableReturn(response[0].head[0].list_total_count, <ElsTimetableInfo[]>response[1].row);
    }

    /**
     * 중학교 학년도, 학교, 학기, 학년, 반, 교시별 시간표 수업내용을 확인할 수 있는 현황입니다.
     * @param {MisTimetableArgs} args
     */
    public async getMisTimetable(args: MisTimetableArgs) {
        const response = await this.get("/misTimetable", args);
        return new MisTimetableReturn(response[0].head[0].list_total_count, <MisTimetableInfo[]>response[1].row);
    }

    /**
     * 학교명 등의 검색 조건을 선택하여 학교학과정보를 검색 할 수 있으며 학교학과정보 데이터셋을 이용하여 고등학교, 특수학교 시간표 조회시 학교학과정보를 콤보박스로 만들어 조회 조건으로 사용할 수 있습니다.
     * @param {SchoolMajorinfoArgs} args
     */
    public async getSchoolMajorinfo(args: SchoolMajorinfoArgs) {
        const response = await this.get("/misTimetable", args);
        return new SchoolMajorinfoReturn(response[0].head[0].list_total_count, <SchoolMajorinfoInfo[]>response[1].row);
    }

    /**
     * 학교명 등의 검색 조건을 선택하여 학교계열정보를 검색할 수 있으며 학교계열정보 데이터셋을 이용하여 고등학교, 특수학교 시간표 조회시 학교계열정보를 콤보박스로 만들어 조회 조건으로 사용 할 수 있습니다.
     * @param {SchulAflcoinfoArgs} args
     */
    public async getSchulAflcoinfo(args: SchulAflcoinfoArgs) {
        const response = await this.get("/schulAflcoinfo", args);
        return new SchulAflcoinfoReturn(response[0].head[0].list_total_count, <SchulAflcoinfoInfo[]>response[1].row);
    }

    /**
     * 특수학교 학년도, 학교, 학기, 학년, 과정, 강의실, 교시별 시간표 수업내용을 확인할 수 있는 현황입니다.
     * @param {SpsTimetableArgs} args
     */
    public async getSpsTimetable(args: SpsTimetableArgs) {
        const response = await this.get("/spsTimetable", args);
        return new SpsTimetableReturn(response[0].head[0].list_total_count, <SpsTimetableInfo[]>response[1].row);
    }

    /**
     * 학교명 등의 검색 조건을 선택하여 시간표강의실 정보를 검색 할 수 있으며 시간표강의실정보 데이터셋을 이용해 고등학교 시간표 조회 조건으로 사용할 수 있습니다.
     * @param {TiClrminfoArgs} args
     */
    public async getTiClrminfo(args: TiClrminfoArgs) {
        const response = await this.get("/tiClrminfo", args);
        return new TiClrminfoReturn(response[0].head[0].list_total_count, <TiClrminfoInfo[]>response[1].row);
    }

    private paramsBuilder(params: Record<any, any>) {
        const defaultArgs: Record<any, any> = this.defaultArgs;

        return new URLSearchParams({
            ...defaultArgs,
            ...params,
            "Type": "json"
        }).toString();
    }

    private async get(url: string, params: Record<any, any>) {
        const response = await fetch(`${baseUrl + url}?${this.paramsBuilder(params)}`);

        const json: BaseResponse = await response.json();

        const key = Object.keys(json)[0];
        const inner = json[key];

        const {CODE, MESSAGE} = inner[0].head[1].RESULT;

        if (CODE !== "INFO-000") {
            throw new InvalidCodeError(MESSAGE);
        }

        return inner;
    }
}