import { mergeSort } from "./sort-from-lowest";

export const sortAppointmentIdsIncrementaly = arrayOfAppointmentObjects => (
    arrayOfAppointmentObjects.reduce((acc, curr) => mergeSort([...acc, curr.id]), [])
);