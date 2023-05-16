import {connect} from 'react-redux'
import {
  followAC,
  setCurrentPage, setIsLoading,
  setTotalCount,
  setUsersAC,
  unfollowAC,
} from '../../redux/reducers/UsersReducer'
import React from 'react'
import axios from 'axios'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsLoading(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(({data}) => {
        this.props.setUsers(data.items)
        this.props.setTotalCountUsers(data.totalCount)
      })
      .finally(() => this.props.setIsLoading(false))
      .catch(() => this.props.setIsLoading(false))
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.setIsLoading(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(({data}) => this.props.setUsers(data.items))
      .finally(() => this.props.setIsLoading(false))
      .catch(() => this.props.setIsLoading(false))
  }

  render() {
    return <div style={{ position: 'relative' }}>
      {
        this.props.isLoading ? <Preloader /> : null
      }
      <Users
        totalCount={this.props.totalCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        onPageChanged={this.onPageChanged}
        isLoading={this.props.isLoading}
      />
    </div>
  }
}

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalCount: state.usersPage.totalCount,
  currentPage: state.usersPage.currentPage,
  isLoading: state.usersPage.isLoading,
})

const mapDispatchToProps = (dispatch) => ({
  follow: (userId) => dispatch(followAC(userId)),
  unfollow: (userId) => dispatch(unfollowAC(userId)),
  setUsers: (users) => dispatch(setUsersAC(users)),
  setCurrentPage: (currentPage) => dispatch(setCurrentPage(currentPage)),
  setTotalCountUsers: (totalCount) => dispatch(setTotalCount(totalCount)),
  setIsLoading: (value) => dispatch(setIsLoading(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)