export const sortAppointmentsByTime = (arrayOfAppointmentObjects, arrayOfTimestamps) => (
    arrayOfTimestamps.map(id => arrayOfAppointmentObjects.find(item => item.id === id))
);