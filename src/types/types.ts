
export interface IPeriodItem {
    id: number;
    year: number;
    text: string;
}

export interface IPeriodData {
    firstPeriod: IPeriodItem[];
    secondPeriod: IPeriodItem[];
    thirdPeriod: IPeriodItem[];
    fourthdPeriod: IPeriodItem[];
    fifthPeriod: IPeriodItem[];
    sixthPeriod: IPeriodItem[];
}
