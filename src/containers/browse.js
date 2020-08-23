import React, { useState } from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import { FirebaseContext } from "../context/firebase";
import { FootContainer } from "./footer";
import { SelectProfileContainer } from "../containers/profiles";


export function BrowseContainer() {
  const [profile, setProfile] = useState({});

  const user = {
    displayName: "Seun Jay",
    photoURL: "1"
  };

  return profile.displayName ? (
    <>
      <p>Browse Container</p>
      <FootContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
