import { StatusList } from "./statusList";

export interface Scheduler {
    id: number;
    eventDate: Date;
    effectiveDate: Date;
    status: StatusList;
    notes: string;
}
