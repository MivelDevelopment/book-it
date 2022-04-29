export const flattenAppointments = data => {
    if (Array.isArray(data)) {
        return data;
    } else if (typeof data !== 'object') {
        return;
    } else {
        for(let key in data) {
            let item = flattenAppointments(data[key]);
            if (item) return item;
        }
    }
};