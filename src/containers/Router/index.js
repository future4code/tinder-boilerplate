import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SwipeScreen from '../SwipeScreen'
import MatchScreen from '../MatchScreen'

const Router = (props) => {
  switch (props.currentPage) {
    case "SwipeScreen":
      return (<SwipeScreen />)
    case "MatchScreen":
      return (<MatchScreen />)
    case "ProfileScreen":
      return (<h1>ProfileScreen</h1>)
    default:
      return (<h1>Error: invalid page selected</h1>)
  }
}

Router.propTypes = {
  currentPage: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
  currentPage: state.routes.currentPage,
})

export default connect(mapStateToProps)(Router);
