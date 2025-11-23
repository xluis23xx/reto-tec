export interface RestPlans {
    list: Plan[];
}

export interface Plan {
    name:        string;
    price:       number;
    description: string[];
    age:         number;
}
