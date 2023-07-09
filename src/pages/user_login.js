import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import { HeadDescription } from "../components/Styles";
import NavbarHead from "../components/NavbarHead";
import FooterBottom from "../components/FooterBottom";
import {
  HeadTitle,
  PageContainer,
  ContentContainer,
  FormGroup,
  Input,
  Label,
  Button,
} from "../components/Styles";

const Login = () => {
  const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/")
            console.log(user);
            alert("user login successfull Welcome to our page");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
  

  return (
    <div>
      <NavbarHead />
      <PageContainer>
        <ContentContainer>
          <HeadTitle style={{ marginTop: "130px" }}>User Login</HeadTitle>
          

          <form style={{ marginTop: "50px", marginLeft: "550px" }}>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="text"
                placeholder="Enter your username"
                id="name"
                name="name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Enter your password"
                id="pw"
                name="pw"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormGroup>

            <Button
              style={{ marginLeft: "110px", marginTop: "50px" }}
              type="submit"
              onClick={onLogin}
            >
              Login
            </Button>
            <HeadDescription style={{ marginLeft: "30px" }}>
              New User? <a href="/signup">Signup!</a>{" "}
            </HeadDescription>
          </form>
        </ContentContainer>
        <FooterBottom />
      </PageContainer>
    </div>
  );
};

export default Login;
