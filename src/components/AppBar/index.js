import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

export const AppBarWrapper = styled.div`
	height: 50px;
	border-bottom: 1px solid lightgray;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	padding: 0 10px;
	flex-shrink: 0;
`

const Logo = styled.img`
	height: 100%;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
`

export const AppBar = (props) => {
	return <AppBarWrapper>
		<div>
			{props.leftAction}
		</div>
		<Logo src={require('../../img/logo.png')}/>
		<div>
			{props.rightAction}
		</div>
	</AppBarWrapper>
}

AppBar.propTypes = {
  leftAction: PropTypes.any,
  rightAction: PropTypes.any
}