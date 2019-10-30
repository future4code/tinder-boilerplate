import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { OptionButton, ProfilePicture, TitleWrapper, UserAge, UserName } from './styled'

const MainCard = styled.div`
   border: 1px solid black;
   padding: 5px;
   border-radius: 1%;
   width: 100%;
   background-color: white;
   box-shadow: 0 0 5px #0000000F;
`

export class SwipeScreen extends Component {

  render(){
    const { currentUser } = this.props

    return(
      <MainCard>
        <ProfilePicture src={currentUser.photo} />
        <TitleWrapper>
          <UserName>{currentUser.name}</UserName>
          <UserAge>{currentUser.age}</UserAge>
        </TitleWrapper>
        <OptionButton option="like">✓</OptionButton>
        <OptionButton option="dislike"></OptionButton>
      </MainCard>)
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser
})

export default connect(mapStateToProps)(SwipeScreen);
