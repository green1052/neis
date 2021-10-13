import {BaseReturn} from "./baseReturn.ts";
import {MealServiceDietInfo} from "../response/mealServiceDietInfo.ts";

export class MealServiceDietInfoReturn extends BaseReturn {
    public meals: MealServiceDietInfo[];

    constructor(listTotalCount: number, meals: MealServiceDietInfo[]) {
        super("mealServiceDietInfo", listTotalCount);
        this.meals = meals;
    }
}