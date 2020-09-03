import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

function useContent(target) {
  const [content, setContent] = useState([]);

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    async function getContent() {
      try {
        const snapshots = await firebase.firestore().collection(target).get();
        const allContent = await snapshots.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));

        setContent(allContent);
      } catch (error) {
        console.log(error.message);
      }
    }

    getContent();
  }, []);

  // console.log(content)

  return { [target]: content };
}

export default useContent;
