import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import axios from "axios";

import * as globalVars from "../shared/global";

const CLIENT_ID =
  "950169249132-6qhkle5p7811tpietsmtpg509i9ovruh.apps.googleusercontent.com";

class GoogleLoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: localStorage.getItem("videoapp_token") != "" ? true : false,
      userInfo: {
        name: "",
        emailId: "",
      },
    };
  }

  // Success Handler
  responseGoogleSuccess = (response) => {
    let userInfo = {
      name: response.profileObj.name,
      emailId: response.profileObj.email,
    };
    this.setState({ userInfo, isLoggedIn: true });
		const api = globalVars.apiUrl + "auth/googlesign";
    const auth = {
			email: userInfo.emailId,
			username: userInfo.name
		}
    axios.post(api, auth).then(res => {
      globalVars.showToastr("Login successfully", "info");
      localStorage.setItem("videoapp_token", res.data);
      this.props.handler();
		})
  };

  // Error Handler
  responseGoogleError = (response) => {
    globalVars.showToastr("Login failed", "error");
  };

  // Logout Session and Update State
  logout = (response) => {
    localStorage.setItem("videoapp_token", "");
    globalVars.showToastr("Logouted", "info");
    let userInfo = {
      name: "",
      emailId: "",
    };

    this.setState({ userInfo, isLoggedIn: false });
  };

  render() {
    return (
      <div className="row mt-5" style={{align: "center", justifyContent: "center"}}>
        <center>
          {this.state.isLoggedIn ? (
            <div>
              <GoogleLogout
                clientId={CLIENT_ID}
                buttonText={"Logout"}
                onLogoutSuccess={this.logout}
              ></GoogleLogout>
            </div>
          ) : (
            <GoogleLogin
              clientId={CLIENT_ID}
              buttonText="Sign In with Google"
              onSuccess={this.responseGoogleSuccess}
              onFailure={this.responseGoogleError}
              // isSignedIn={true}
              // cookiePolicy={"single_host_origin"}
            />
          )}
        </center>
      </div>
    );
  }
}
export default GoogleLoginComponent;