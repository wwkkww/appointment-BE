export declare class Appointment {
    id: number;
    title: string;
    createdBy: string;
    eventDate: string;
    type: string;
    description: string;
    logInsert(): void;
    logUpdate(): void;
    logRemove(): void;
}
