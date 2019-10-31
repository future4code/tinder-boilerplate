import React, {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {ContentWrapper, OptionButton} from './styled'
import UserSwipeCard from '../../components/UserSwipeCard'
import {updateCurrentPage} from '../../actions/route'
import {AppBar} from '../../components/AppBar'
import { mdiAccountMultipleCheck } from '@mdi/js';
import Icon from '@mdi/react'

const MainCard = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
`

const MatchIcon = styled(Icon)`
	display: block;
	fill: #753192;
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  flex-shrink: 0;
`

export class SwipeScreen extends Component {

	render() {
		const {userToSwipe, goToMatchScreen} = this.props

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
					<UserSwipeCard userToSwipe={userToSwipe}/>
					<ButtonsWrapper>
						<OptionButton option="dislike">X</OptionButton>
						<OptionButton option="like">♥️</OptionButton>
					</ButtonsWrapper>
				</ContentWrapper>
			</MainCard>
		)
	}
}

const mapStateToProps = (state) => ({
	userToSwipe: state.userToSwipe,
})

const mapDispatchToProps = (dispatch) => {
	return {
		goToMatchScreen: () => dispatch(updateCurrentPage('MatchScreen'))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SwipeScreen)
