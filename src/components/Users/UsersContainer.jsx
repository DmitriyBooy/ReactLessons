import Users from './Users'
import { connect } from 'react-redux'
import {
  followAC,
  setCurrentPage,
  setTotalCount,
  setUsersAC,
  unfollowAC,
} from '../../redux/reducers/UsersReducer'

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalCount: state.usersPage.totalCount,
  currentPage: state.usersPage.currentPage,
})

const mapDispatchToProps = (dispatch) => ({
  follow: (userId) => dispatch(followAC(userId)),
  unfollow: (userId) => dispatch(unfollowAC(userId)),
  setUsers: (users) => dispatch(setUsersAC(users)),
  setCurrentPage: (currentPage) => dispatch(setCurrentPage(currentPage)),
  setTotalCountUsers: (totalCount) => dispatch(setTotalCount(totalCount)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)