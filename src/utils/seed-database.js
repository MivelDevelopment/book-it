import { doc, setDoc } from 'firebase/firestore';
import { db } from './firebase-config';
import { schedule } from './seed-data';

const seedDatabaseWithData = async () => {
  const scheduleRef = doc(db, 'schedule', 'jdp@gmail.com');
  await setDoc(scheduleRef, schedule);
};


// export { seedDatabaseWithData };