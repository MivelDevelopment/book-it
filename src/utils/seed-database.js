import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';
import { schedule } from './seed-data';

const seedDatabaseWithData = async () => {
  const scheduleRef = doc(db, 'schedule', 'jdp@gmail.com');
  await setDoc(scheduleRef, schedule);
};

// In order for someone not running this function twice by accident
// this export is commented out.

// export { seedDatabaseWithData };