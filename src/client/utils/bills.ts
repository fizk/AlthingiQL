
export const reduceBillsByStatus = (bills: {count: number, status: string}[]): {unapproved?: number, approved?: number} => {
    return bills.reduce((accumulator, currentValue) => {
        if (currentValue.status === "Samþykkt sem lög frá Alþingi") {
            accumulator.approved = currentValue.count;
        } else {
            accumulator.unapproved = accumulator.unapproved + currentValue.count;
        }
        return accumulator;
    }, {unapproved: 0, approved: 0});
};

export const billsPerformance = (value: {unapproved?: number, approved?: number}): number => {
    return Math.round((value.approved / (value.unapproved + value.approved)) * 100) || 0;
};


export const mapBillStatusToKey = (bill: {count: number, status: string}): {count: number, key: string, label: string} => {
    const map = {
        "Bíður 1. umræðu": 'iteration-one',
        "Bíður 2. umræðu": 'iteration-two',
        "Í nefnd eftir 1. umræðu": 'committee-one',
        "Í nefnd eftir 2. umræðu": 'committee-two',
        "Samþykkt sem lög frá Alþingi": 'approved',
        undefined: 'unapproved'
    };
    return {
        count: bill.count,
        key: String(map[bill.status]),
        label: bill.status
    }
};
