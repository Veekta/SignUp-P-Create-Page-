import React from 'react'
import styled from 'styled-components'
import {AiFillHome} from 'react-icons/ai'
import {MdStarRate} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import {HiViewGridAdd} from 'react-icons/hi'

const createProduct = () => {
  return (
    <Container>
      <Wrapper>
        <Logodiv>
          <img src="/img/logo.png"/>
          <span>Roman Empire</span>
          <Username>Romanus Obialasor</Username>
        </Logodiv>
        <Sidewidget>
          <Icons>
            <button><Inner><AiFillHome size="30px"/></Inner>Overview</button>
            <button><Inner><HiViewGridAdd size="30px"/></Inner>Add Product</button>
          </Icons>
          <LogOut>
          <button><Inner><CgProfile size="30px"/></Inner>Logout</button>
          </LogOut>
        </Sidewidget>
      </Wrapper>
      <Wrapper2>
        <h3>CREATE A PRODUCT</h3>
        <Content>
          <InputHold>
          <Spanhold><span>Product Name</span><MdStarRate color="red" size="20px"/></Spanhold>
          <input/>
          <Spanhold><span>Quanity</span><MdStarRate color="red" size="20px"/></Spanhold>
          <input/>
          <Spanhold><span>Amount Per One</span><MdStarRate color="red" size="20px"/></Spanhold>
          <input/>
          </InputHold>
          <CreateBtn>
            <button>Create</button>
          </CreateBtn>
        </Content>
      </Wrapper2>
    </Container>
  )
}

export default createProduct;

const CreateBtn = styled.div`
width: 90%;
display: flex;
justify-content: center;
align-items:center;
height: 30%;

/* background-color: red; */
/* margin-bottom: 50px; */
button{
  height: 90px;
  width: 250px;
  border-radius: 15px;
  font-size: 35px;
  font-weight: 600;
  outline: none;
  border: none;
  background-color: #231E71;
  color: white;
}
`
const Spanhold = styled.div`
width: 250px;
/* background-color: red; */
display: flex;
justify-content: space-between;
align-items: center;
margin: 30px 0px;
`

const InputHold = styled.div`
display: flex;
flex-direction: column;
width: 90%;
height: 70%;
justify-content: flex-start;
/* background-color: orange; */
margin-top: 50px;
span{
  font-size: 30px;
  font-weight: 600;
}
input{
  height: 120px;
  outline: none;
  border: none;
  border-radius: 15px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
`
const Content = styled.div`
width:  50%;
height: 60%;
/* background-color: orange; */
border-radius: 10px;
display: flex;
flex-direction: column;
align-items:center;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
justify-content: flex-start;
`
const LogOut = styled.div`
height: 200px;
width: 95%;
button{
  width: 100%;
  height: 85px;
  font-size: 25px;
  background-color: #231E71;
  outline: none;
  border: none;
  font-weight: 500;
  color: white;
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  :hover{
    background-color: #484489;
  }
}
`

const Inner = styled.div`
width: 15%;
display: flex;
align-items:center;
`
const Icons = styled.div`
height: 200px;
width: 95%;
/* background-color: hotpink; */
display: flex;
flex-direction: column;
justify-content: space-between;
/* align-items:center; */
button{
  width: 100%;
  height: 85px;
  font-size: 25px;
  background-color: #231E71;
  outline: none;
  border: none;
  font-weight: 500;
  color: white;
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  :hover{
    background-color: #484489;
  }
}
`
const Sidewidget = styled.div`
height: 70%;
width: 90%;
/* background-color: green; */
display: flex;
flex-direction: column;
justify-content: space-between;
align-items:center;
`
const Username = styled.div`
  color: white;
  font-size: 22px;
`
const Logodiv =styled.div`
width: 100%;
height: 25%;
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
/* background-color:orange; */
span{
  font-size: 33px;
  font-weight: 500;
  color: #fff
}
img{
  width: 150px
}
`
const Wrapper =styled.div`
width: 17%;
height: 100%;
background-color: #231E71;
display: flex;
flex-direction: column;
align-items:center;
justify-content: space-between
`
const Wrapper2 =styled.div`
width: 83%;
height: 100%;
background-color: white;
display: flex;
align-items:center;
justify-content: center;
flex-direction: column;
h3{
  font-size: 40px;
}
`
const Container =styled.div`
display: flex;
width: 100%;
height: 100vh;
/* background-color: orange; */
`