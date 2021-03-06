import React from 'react'
import styled from 'styled-components'
import {AiOutlineMail, AiFillLock} from 'react-icons/ai'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <ContentHold>
                <h1>Login</h1>
                <EmailHold>
                  <span>Email*</span>
                  <InputHold><AiOutlineMail size="35px" /><input placeholder='email'/></InputHold>
                  <span>Password*</span>
                  <InputHold><AiFillLock size="35px" /><input placeholder='password'/></InputHold>
                  <Link to="/product"><button>Login</button></Link>
                </EmailHold>
            </ContentHold>
        </Wrapper>
    </Container>
  )
}

export default Login;

const InputHold = styled.div`
display: flex;
align-items: center;
justify-content: center;
border: 4px solid #3E83FF;
width: 100%;
height: 95px;
border-radius: 45px;
margin-bottom: 50px;
/* padding: 10px 70px; */
`
const EmailHold = styled.div`
width: 85%;
display: flex;
flex-direction: column;
span{
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
}
input{
  height: 50px;
  /* border: 3px solid green; */
  width: 80%;
  font-size: 25px;
  outline: none;
  margin-left: 8px;
  /* border-radius: 38px; */
  border: none;
}
button{
  height: 95px;
  width: 100%;
  font-size: 20px;
  border-radius: 45px;
  /* border: 3px solid #3E83FF; */
  margin-top: 30px;
  background-color:#3E83FF;
  outline: none;
  border: none;
  font-weight: bold;
  font-size: 40px;
  color: white;
}

`
const ContentHold = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
/* justify-content: center; */
flex-direction: column;
h1{
    font-family: "Open-Sans";
    font-size: 50px;
    /* margin-top: 50px; */
}
`
const Wrapper = styled.div`
display: flex;
justify-content: center;
width: 50%;
height: 700px;
/* background-color: orange; */
`
const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 50%;
height: 100vh;
background-color: #fff;
`