import React, { useState, useContext, useEffect } from "react";
import { Header, Loading, Card } from "../components";
import * as ROUTES from "../constants/routes";
import { FirebaseContext } from "../context/firebase";
import { FootContainer } from "./footer";
import { SelectProfileContainer } from "../containers/profiles";
import logo from "../images/misc/logo.svg";
import profilePhoto from "../images/users/2.png";

const initObj = {
  displayName: "Jay",
  photoURL: "1",
};

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState(initObj);
  const [category, setCategory] = useState("series");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [slideRows, setSlideRows] = useState([]);

  const { firebase } = useContext(FirebaseContext);

  const user = {
    displayName: "Seun Jay",
    photoURL: "1",
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [user]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  console.log(slideRows);

  const users = "users";

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.Link
              active={category === "series" ? "true" : "false"}
              onClick={() => setCategory("series")}
            >
              Series
            </Header.Link>

            <Header.Link
              active={category === "films" ? "true" : "false"}
              onClick={() => setCategory("films")}
            >
              Films
            </Header.Link>
          </Header.Group>

          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

            <Header.Profile>
              <Header.Picture src={require(`../images/${users}/2.png`)} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={require(`../images/${users}/2.png`)} />
                  <Header.Link>{user.displayName}</Header.Link>
                </Header.Group>
                <Header.Group>
                  <Header.Link onClick={() => firebase.auth().signOut()}>
                    Sign out
                  </Header.Link>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.length > 0 ?
                slideItem.data.map((item) => (
                  <Card.Item key={item.docId} item={item}>
                    <Card.Image
                    src={require(`../images/${category}/${item.genre}/${item.slug}/small.jpg`)}
                  />
                    <Card.Meta>
                      <Card.SubTitle>{item.title}</Card.SubTitle>
                      <Card.Text>{item.description}</Card.Text>
                    </Card.Meta>
                  </Card.Item>
                )): <h1>No data</h1>}
            </Card.Entities>
          </Card>
        ))}
      </Card.Group>
      <FootContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
