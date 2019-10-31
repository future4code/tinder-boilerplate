import React, {Component} from 'react'
import {connect} from 'react-redux'
import {AppBar} from '../../components/AppBar'
import Icon from '@mdi/react'
import { mdiAccountSwitch } from '@mdi/js';
import styled from 'styled-components'
import {updateCurrentPage} from '../../actions/route'

const MatchIcon = styled(Icon)`
	display: block;
	fill: #4AA397;
`

class MatchScreen extends Component {
	render() {
		return (
			<div>
				<AppBar
					leftAction={<MatchIcon
						path={mdiAccountSwitch}
						size={1}
						onClick={this.props.goToSwipeScreen}
					/>}
				/>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		goToSwipeScreen: () => dispatch(updateCurrentPage('SwipeScreen'))
	}
}

export default connect(null, mapDispatchToProps)(MatchScreen)