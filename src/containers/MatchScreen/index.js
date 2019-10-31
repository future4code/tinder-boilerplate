import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppBar } from '../../components/AppBar'
import { mdiAccountSwitch } from '@mdi/js'
import { updateCurrentPage } from '../../actions/route'
import { Avatar, List, ListItem, ListText, MatchIcon } from './styled'

class MatchScreen extends Component {
  render() {
    const { goToSwipeScreen, matches } = this.props

    return (
      <div>
        <AppBar
          leftAction={<MatchIcon
            path={mdiAccountSwitch}
            size={1}
            onClick={goToSwipeScreen}
          />}
        />
        <List>
          {matches.map((match) => (
            <ListItem key={match.name}>
              <Avatar src={match.photo}/>
              <ListText>{match.name}</ListText>
            </ListItem>
          ))}
        </List>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  matches: state.profiles.matches,
})

const mapDispatchToProps = dispatch => ({
  goToSwipeScreen: () => dispatch(updateCurrentPage('SwipeScreen')),
})

export default connect(mapStateToProps, mapDispatchToProps)(MatchScreen)
