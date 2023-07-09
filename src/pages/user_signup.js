import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';
import {} from "../components/Styles";
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
  HeadDescription,
} from "../components/Styles";

const Signup = () => {
  const navigate = useNavigate();
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault()
   
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/login")
          // ...
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
      });

 
  }

  return (
    <div>
      <NavbarHead />
      <PageContainer>
        <ContentContainer>
          <HeadTitle style={{ marginTop: "130px" }}>User Signup</HeadTitle>
          

          <form style={{ marginTop: "50px", marginLeft: "550px" }}>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="text"
                placeholder="Enter your Email"
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
              onClick={onSubmit}  
              
            >
              Signup
            </Button>
            <HeadDescription style={{ marginLeft: "20px" }}>
              Already an User? <a href="/login">Login!</a>{" "}
            </HeadDescription>
          </form>
        </ContentContainer>
        <FooterBottom />
      </PageContainer>
    </div>
  );
};

export default Signup;
