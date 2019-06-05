
export const reduceBillsByStatus = (
    bills: Array<{count: number, status: string}>,
): {unapproved: number | undefined, approved: number | undefined} => {
    return bills.reduce((accumulator, currentValue) => {
        if (currentValue.status === 'Samþykkt sem lög frá Alþingi') {
            accumulator.approved = currentValue.count;
        } else {
            accumulator.unapproved = accumulator.unapproved + currentValue.count;
        }
        return accumulator;
    }, {unapproved: 0, approved: 0});
};

export const billsPerformance = (value: {unapproved: number| undefined, approved: number| undefined}): number => {
    return Math.round(((value.approved || 0) / ((value.unapproved || 0) + (value.approved || 0))) * 100) || 0;
};

export const mapBillStatusToKey = (
    bill: {count: number, status: string},
): {count: number, key: string, label: string} => {
    const map: {[key: string]: string} = {
        'Bíður 1. umræðu': 'iteration-one',
        'Bíður 2. umræðu': 'iteration-two',
        'Í nefnd eftir 1. umræðu': 'committee-one',
        'Í nefnd eftir 2. umræðu': 'committee-two',
        'Samþykkt sem lög frá Alþingi': 'approved',
    };
    return {
        count: bill.count,
        key: String(map[bill.status] || 'unapproved'),
        label: bill.status,
    };
};
