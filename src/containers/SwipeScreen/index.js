import React, { Component } from 'react'
import UserSwipeCard from '../../components/UserSwipeCard'
import { AppBar } from '../../components/AppBar'
import { ButtonsWrapper, ContentWrapper, MainCard, MatchIcon, OptionButton } from './styled'
import { connect } from 'react-redux'
import { mdiAccountMultipleCheck } from '@mdi/js'
import { swipeLeft, swipeRight } from '../../components/UserSwipeCard/styled'
import { updateCurrentPage } from '../../actions/route'
import { Loader } from '../../components/Loader'

export class SwipeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentAnimation: null,
    }
  }

  onChooseOption = (option) => () => {
    let currentAnimation = option === 'dislike' ? swipeRight : swipeLeft

    if (this.state.currentAnimation === null) {
      this.setState({ currentAnimation: currentAnimation })
    }

    setTimeout(() => {
      this.setState({ currentAnimation: null })
    }, 500)
  }

  render() {
    const { profileToSwipe, goToMatchScreen } = this.props
    const { currentAnimation } = this.state

    return (
      <MainCard>
        <AppBar
          rightAction={<MatchIcon
            size={1.5}
            path={mdiAccountMultipleCheck}
            onClick={goToMatchScreen}
          />}
        />
        <ContentWrapper>
          { currentAnimation !== null && (<Loader />) }
          <UserSwipeCard
            userToSwipe={profileToSwipe}
            animationDirection={currentAnimation}
          />
          <ButtonsWrapper>
            <OptionButton onClick={this.onChooseOption('dislike')} option="dislike">X</OptionButton>
            <OptionButton onClick={this.onChooseOption('like')} option="like">♥️</OptionButton>
          </ButtonsWrapper>
        </ContentWrapper>
      </MainCard>
    )
  }
}

const mapStateToProps = (state) => ({
  profileToSwipe: state.profiles.profileToSwipe,
})

const mapDispatchToProps = (dispatch) => {
  return {
    goToMatchScreen: () => dispatch(updateCurrentPage('MatchScreen')),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SwipeScreen)
