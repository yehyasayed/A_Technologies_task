export interface Ticket {
    id: number;
    ticketNumber: string;
    user: string;
    //userContact: string;
    ticketPrice: number;
    cinema: string;
    purchaseCount: string;
    peopleCount: number;
    ticketFile: { name: string; size: number; format: string; url: string };
}
