import React from "react";
import CustomButton from "../custom-button/custom-button.component";

import FormInput from "../forminput/forminput.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./signin.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = event => {
      event.preventDefault();
      
      this.setState({email:'',password:''})
  }

  handleChange = event => {
      const{name,value} = event.target;

      this.setState({[name] : value});
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
         
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
          />
          <div className="buttons">
          <CustomButton type="submit" >Submit</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
