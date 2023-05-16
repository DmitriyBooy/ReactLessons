import { connect } from 'react-redux'
import {
  followAC,
  setCurrentPage,
  setTotalCount,
  setUsersAC,
  unfollowAC,
} from '../../redux/reducers/UsersReducer'
import React from 'react'
import axios from 'axios'
import Users from './Users'

class UsersContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(({ data }) => {
        this.props.setUsers(data.items)
        this.props.setTotalCountUsers(data.totalCount)
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(({ data }) => this.props.setUsers(data.items))
  }

  render() {
    return <Users
      totalCount={this.props.totalCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      users={this.props.users}
      onPageChanged={this.onPageChanged}
    />
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)