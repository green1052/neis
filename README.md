# neis

[deno](https://deno.land/) 용 neis api

## 설치

```ts
import {Neis} from "https://deno.land/x/neis/mod.ts";
```

## 사용법

~~혀경영이 다닌~~ 초등학교 급식 구하기

```ts
import neis from "https://deno.land/x/neis/mod.ts";

// 빈칸이면 기본 값 사용
const neis = new Neis({});
const school = await neis.getSchoolInfo({
    SCHUL_NM: "지수초등학교"
});

const {ATPT_OFCDC_SC_CODE, SD_SCHUL_CODE} = school.schools[0];

const meal = await neis.getMealServiceDietInfo({
    ATPT_OFCDC_SC_CODE: ATPT_OFCDC_SC_CODE,
    SD_SCHUL_CODE: SD_SCHUL_CODE,
});

console.log(meal.meals);
```

## 참고

[나이스](https://open.neis.go.kr/portal/data/dataset/searchDatasetPage.do#)

모든 신청인자들은 나이스에 명시된 이름 그대로 명명되어 있습니다.
