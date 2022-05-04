import { db } from "./firebase-config";
import { doc, onSnapshot } from "firebase/firestore";

export const listenToScheduleChanges = onSnapshot(doc(db, 'schedule', 'jdp@gmail.com'), (doc) => {
    console.log("Current data: ", doc.data());
});