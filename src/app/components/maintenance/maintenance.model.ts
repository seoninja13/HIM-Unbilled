
export interface IFacilityName {
    intUnit: number;
    txtUnitName: string;
}

export interface IResponsibleParty {
    id: number;
    description: string;
}

export interface IBillAlertDetail {
    id: number;
    alert: string;
    alertDesc: string;
    respPartyID: number;
    created: Date;
    modBy: string;
    modified?: Date;
    respParty: string;
}

export interface IMaintenancePageModel {
    facilityNames: IFacilityName[];
    responsibleParties: IResponsibleParty[];
    billAlertDetails: IBillAlertDetail[];
}

export class MaintenancePageModel implements IMaintenancePageModel {
    constructor(
        public facilityNames: [] = [],
        public responsibleParties: [] = [],
        public billAlertDetails: [] = []
    ) { }
}
