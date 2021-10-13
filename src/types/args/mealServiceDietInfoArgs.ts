/**
 * @param {string} ATPT_OFCDC_SC_CODE 시도교육청코드
 * @param {string} SD_SCHUL_CODE 표준학교코드
 * @param {string} MMEAL_SC_CODE 식사코드
 * @param {string} MLSV_YMD 급식일자
 * @param {string} MLSV_FROM_YMD 급식시작일자
 * @param {string} MLSV_TO_YMD 급식종료일자
 */
export interface MealServiceDietInfoArgs {
    ATPT_OFCDC_SC_CODE: string;
    SD_SCHUL_CODE: string;
    MMEAL_SC_CODE?: string;
    MLSV_YMD?: string;
    MLSV_FROM_YMD?: string;
    MLSV_TO_YMD?: string;
}