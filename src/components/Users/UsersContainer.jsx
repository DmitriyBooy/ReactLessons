import Users from './Users'
import { connect } from 'react-redux'
import {
  followAC,
  setUsersAC,
  unfollowAC,
} from '../../redux/reducers/UsersReducer'

const mapStateToProps = (state) => ({ users: state.usersPage.users })

const mapDispatchToProps = (dispatch) => ({
  follow: (userId) => dispatch(followAC(userId)),
  unfollow: (userId) => dispatch(unfollowAC(userId)),
  setUsers: (users) => dispatch(setUsersAC(users)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)