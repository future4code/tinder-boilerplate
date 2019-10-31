import React, {Component} from 'react'
import {InfoWrapper, ProfilePicture, TitleWrapper, UserAge, UserCardWrapper, UserName} from './styled'

class UserSwipeCard extends Component {
	render() {
		const {userToSwipe} = this.props

		return <UserCardWrapper>
			<ProfilePicture src={userToSwipe.photo}/>
			<InfoWrapper>
				<TitleWrapper>
					<UserName>{userToSwipe.name}</UserName>
					<UserAge>{userToSwipe.age}</UserAge>
				</TitleWrapper>
			</InfoWrapper>
		</UserCardWrapper>
	}
}

export default UserSwipeCard