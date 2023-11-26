import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "~/configs/firebase.config";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

const useAuthUser = () => {
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      const userRef = doc(db, `users/${user.uid}`);
      getDoc(userRef).then(snapshot => {
        if (!snapshot.exists()) {
          setDoc(snapshot.ref, {
            displayName: user.displayName,
            photoURL: user.photoURL,
            timestamp: serverTimestamp(),
            email: user.email
          });
        }
      });
    }
  }, [user]);
  return user;
};

export default useAuthUser;