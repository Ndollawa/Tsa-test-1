
export interface LeadInterface {
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    created_at?:string | Date;
    updated_at?:string | Date;
}
