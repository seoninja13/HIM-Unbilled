export interface IEffectiveDateCollection {
    effDate?: string;
}

export interface ICompanyCollection {
    intCompanyID: number;
    txtCompanyName: string;
}

export interface IDivisionCollection {
    intDivisionID: number;
    txtDivisionName: string;
}

export interface IHscCollection {
    intPasCoId: number;
    txtSscName: string;
}

export interface IFacilityCollection {
    id: number;
    intPasCoId: number;
    intHscCoId?: number;
    intCompanyID?: number;
    intDivisionID?: number;
    intUnit: number;
    intCoId: number;
    txtUnitName: string;
}

export interface IFacilityGridDataCollection {
    intUnit: number;
    intUnit_ttl: number;
    txtUnitName: string;
    txtUnitName_ttl: string;
    billingBal: number;
    billingBal_ttl: number;
    balanceSum: number;
    balanceSum_ttl: number;
    grandBal: number;
    grandBal_ttl: number;
    dt49EffDate: string;
    dt49EffDate_ttl: string;
    mnyAGRPD?: number;
    mnyAGRPD_ttl: number;
    total_Post_Final_Bill_Unbilled_AR_Days: number;
    total_Post_Final_Bill_Unbilled_AR_Days_ttl: number;
    nfD_Unbilled_AR_Days: number;
    nfD_Unbilled_AR_Days_ttl: number;
    fD_Unbilled_AR_Days: number;
    fD_Unbilled_AR_Days_ttl: number;
    grand_Total_Unbilled_AR_Days: number;
    grand_Total_Unbilled_AR_Days_ttl: number;
    avgUnbilledARDays: number;
    avgUnbilledARDays_ttl: number;
    dtAGRPDEffDate: string;
    dtAGRPDEffDate_ttl: string;
    intAccess: number;
    intAccess_ttl: number;
}

export interface IHomePageModel {
    effectiveDateCollection?: IEffectiveDateCollection;
    companyCollection: ICompanyCollection[];
    divisionCollection: IDivisionCollection[];
    hscCollection: IHscCollection[];
    facilityCollection: IFacilityCollection[];
    facilityGridDataCollection: IFacilityGridDataCollection[];
}

export class HomePageModel implements IHomePageModel {
    constructor(
        // public effectiveDateCollection: {
        //     effDate: string = ''
        // },
        // public effectiveDateCollection: {
        //     effDate: string
        // },
        // public effectiveDateCollection: {
        //     effDate: '7/21/2021'
        // },
        // public effectiveDateCollection?: {
        //     public effDate: Date = new Date(),
        // },
        public effectiveDateCollection?: {},
        public companyCollection: [] = [],
        public divisionCollection: [] = [],
        public hscCollection: [] = [],
        public facilityCollection: [] = [],
        public facilityGridDataCollection: [] = []
    ) { }
}
