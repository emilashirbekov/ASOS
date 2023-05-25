import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import { notify, notifyAlert, notifyError } from "../../components/Toastify";

import "./Auth.css";
const Auth = () => {
  const [state, setState] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastNAme] = useState("");

  const navigate = useNavigate();

  const { REGISTER, LOGIN } = useAuth();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let user = {
      email: data.get("email"),
      password: data.get("password"),
      displayName: data.get("displayName"),
      photoURL: data.get("photoURL"),
    };
    if (state) {
      REGISTER(user);
    } else {
      LOGIN(user);
      navigate("/");
    }
  };
  const register = () => {
    return (
      <div className="main">
        <h3 className="SignIn__title">OR SIGN UP WITH...</h3>
        <div className="SignIn__groupLink">
          <button className="SignIngroupLinkitems">
            <img
              className="SignIngroupLinkitems__picture"
              src="https://avatars.mds.yandex.net/i?id=3fca48dba611fb1cd25dc37e7210aff52c1dd107-9041934-images-thumbs&n=13"
              alt=""
            />
            GOOGLE
          </button>
          <button className="SignIngroupLinkitems">
            <img
              className="SignIngroupLinkitems__picture"
              src="https://avatars.mds.yandex.net/i?id=67ea052b8831a9af052899acf96c9363ea459ef9-7761916-images-thumbs&n=13"
              alt=""
            />
            FACEBOOK
          </button>
          <button className="SignIngroupLinkitems">
            <img
              className="SignIngroupLinkitems__picture"
              src="https://avatars.mds.yandex.net/i?id=9d213d6455c9d3580f39df661ef7365375d53bd4-9245471-images-thumbs&n=13"
              alt=""
            />
            APPLE
          </button>
        </div>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            if (!email || !password || !firstName || !lastName) {
              notifyAlert("Fill the filds");
            } else {
              handleSubmit(e);
            }
          }}
        >
          <div className="Register">
            <h4 className="Register__title">EMAIL ADDRESS :</h4>
            <div className="Register__block">
              <input
                type="email"
                placeholder="expamle : *@mail.en"
                className="Register__input"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="Register__span">
                We'll send your order confirmation here
              </span>
            </div>

            <h4 className="Register__title">DISPLAY NAME :</h4>
            <input
              type="text"
              placeholder="Jong"
              name="displayName"
              id="displayName"
              className="Register__input"
              onChange={(e) => setFirstName(e.target.value)}
            />

            <h4 className="Register__title">PHOTO URL :</h4>
            <input
              type="text"
              placeholder="https"
              className="Register__input"
              name="photoURL"
              id="photoURL"
              onChange={(e) => setLastNAme(e.target.value)}
            />
            <div className="Register__block">
              <h4 className="Register__title">PASSWORD:</h4>
              <input
                type="password"
                placeholder="expamle : 0123456789"
                className="Register__input"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="Register__span">
                Must be 10 or more characters
              </span>
            </div>
            <button
              id="Register__button"
              style={
                password && email && lastName && firstName
                  ? {
                      color: "#fff",
                      backgroundColor: "#000",
                      fontSize: "2rem",
                    }
                  : null
              }
            >
              JOIN ASOS
            </button>
          </div>
        </form>
        {/* конец формы */}
      </div>
    );
  };
  const signIn = () => {
    return (
      <div className="main">
        <div className="SignIn">
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              if (!email || !password) {
                notifyAlert("Fill the filds");
              } else {
                handleSubmit(e);
              }
            }}
          >
            <h4 className="Register__title">EMAIL ADRESS :</h4>
            <input
              type="email"
              placeholder="expamle : *@mail.en"
              className="Register__input"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <h4 className="Register__title">PASSWORD :</h4>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="expamle : 0123456789"
              className="Register__input"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              id="SignIn__button"
              style={
                email && password
                  ? {
                      color: "white",
                      backgroundColor: "black",
                      fontSize: "20px",
                    }
                  : null
              }
            >
              SIGN IN
            </button>
            <div style={{ textAlign: "center" }}>
              <span className="SignIn__span">Forgot password?</span>
              <h3 className="SignIn__title">OR SIGN IN WITH...</h3>
            </div>
          </form>
        </div>
        <div className="SignIn__groupLink">
          <button className="SignIngroupLinkitems">
            <img
              className="SignIngroupLinkitems__picture"
              src="https://avatars.mds.yandex.net/i?id=3fca48dba611fb1cd25dc37e7210aff52c1dd107-9041934-images-thumbs&n=13"
              alt=""
            />
            GOOGLE
          </button>
          <button className="SignIngroupLinkitems">
            <img
              className="SignIngroupLinkitems__picture"
              src="https://avatars.mds.yandex.net/i?id=67ea052b8831a9af052899acf96c9363ea459ef9-7761916-images-thumbs&n=13"
              alt=""
            />
            FACEBOOK
          </button>
          <button className="SignIngroupLinkitems">
            <img
              className="SignIngroupLinkitems__picture"
              src="https://avatars.mds.yandex.net/i?id=9d213d6455c9d3580f39df661ef7365375d53bd4-9245471-images-thumbs&n=13"
              alt=""
            />
            APPLE
          </button>
        </div>
      </div>
    );
  };
  return (
    <div className="MainContent" style={{}}>
      <h1 style={{ fontSize: "50px", color: "black", marginBottom: "15px" }}>
        asos
      </h1>
      <div className="MainContent__Contain">
        <div className="MainContentContainbuttons">
          <button
            id="Join"
            className="MainContentContainbuttons__child "
            onClick={() => {
              setState(true);
              setEmail("");
              setFirstName("");
              setPassword();
              setLastNAme("");
            }}
          >
            JOIN
          </button>
          <button
            id="SignIn"
            className="MainContentContainbuttons__child"
            onClick={() => {
              setState(false);
              setEmail("");
              setPassword("");
            }}
          >
            SIGN IN
          </button>
        </div>
        {state ? register() : signIn()}
      </div>
    </div>
  );
};

export default Auth;
