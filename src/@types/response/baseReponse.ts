import {MealServiceDietInfo} from "./mealServiceDietInfo.ts";
import {SchoolInfoInfo} from "./schoolInfoInfo.ts";
import {AcaInsTiInfoInfo} from "./acaInsTiInfoInfo.ts";
import {SchoolScheduleInfo} from "./schoolScheduleInfo.ts";
import {HisTimetableInfo} from "./hisTimetableInfo.ts";
import {ClassInfoInfo} from "./classInfoInfo.ts";
import {ElsTimetableInfo} from "./elsTimetableInfo.ts";
import {MisTimetableInfo} from "./misTimetableInfo.ts";
import {SchoolMajorinfoInfo} from "./schoolMajorinfoInfo.ts";
import {SchulAflcoinfoInfo} from "./schulAflcoinfoInfo.ts";
import {SpsTimetableArgs} from "../args/spsTimetableArgs.ts";
import {TiClrminfoInfo} from "./tiClrminfoInfo.ts";

export interface BaseResponse {
    [key: string]: [
        {
            head: [
                { list_total_count: number },
                {
                    RESULT: {
                        CODE: "ERROR-300" |
                            "ERROR-290" |
                            "ERROR-310" |
                            "ERROR-333" |
                            "ERROR-336" |
                            "ERROR-337" |
                            "ERROR-500" |
                            "ERROR-600" |
                            "ERROR-601" |
                            "INFO-000" |
                            "INFO-300" |
                            "INFO-200",
                        MESSAGE: "필수 값이 누락되어 있습니다. 요청인자를 참고 하십시오." |
                            "인증키가 유효하지 않습니다. 인증키가 없는 경우, 홈페이지에서 인증키를 신청하십시오." |
                            "해당하는 서비스를 찾을 수 없습니다. 요청인자 중 SERVICE를 확인하십시오." |
                            "요청위치 값의 타입이 유효하지 않습니다.요청위치 값은 정수를 입력하세요." |
                            "데이터요청은 한번에 최대 1,000건을 넘을 수 없습니다." |
                            "일별 트래픽 제한을 넘은 호출입니다. 오늘은 더이상 호출할 수 없습니다." |
                            "서버 오류입니다. 지속적으로 발생시 홈페이지로 문의(Q&A) 바랍니다." |
                            "데이터베이스 연결 오류입니다. 지속적으로 발생시 홈페이지로 문의(Q&A) 바랍니다." |
                            "SQL 문장 오류 입니다. 지속적으로 발생시 홈페이지로 문의(Q&A) 바랍니다." |
                            "정상 처리되었습니다." |
                            "관리자에 의해 인증키 사용이 제한되었습니다." |
                            "해당하는 데이터가 없습니다."
                    }
                }
            ]
        },
        {
            row: MealServiceDietInfo[] |
                SchoolInfoInfo[] |
                AcaInsTiInfoInfo[] |
                SchoolScheduleInfo[] |
                HisTimetableInfo[] |
                ClassInfoInfo[] |
                ElsTimetableInfo[] |
                MisTimetableInfo[] |
                SchoolMajorinfoInfo[] |
                SchulAflcoinfoInfo[] |
                SpsTimetableArgs[] |
                TiClrminfoInfo[]
        }
    ];
}