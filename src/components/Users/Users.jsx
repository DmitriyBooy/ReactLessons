import s from './users.module.css'
import axios from 'axios'
import user_avatar from '../../assets/images/user.jpg'
import React from 'react'

class Users extends React.Component {
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
    let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
    let pages = []

    for(let i = 0; i < pagesCount; i++) {
      pages.push(i + 1)
    }

    return(
      <div>
        <div>
          {
            pages.map((p) => <span
              className={`${this.props.currentPage === p && s.select_page} ${s.page_number}`}
              onClick={() => this.onPageChanged(p)}
            >
              {p}
            </span>)
          }
        </div>
        {
          this.props.users.map((u) => {
            return (
              <div
                key={u.id}
                className={s.user_wrapper}
              >
              <span>
                <div>
                  <img
                    className={s.user_avatar}
                    src={u.photos.small !== null ? u.photos.small : user_avatar}
                    alt='user_avatar'
                  />
                </div>

                <div>
                  {
                    u.followed
                      ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                      : <button onClick={() => this.props.follow(u.id)}>Follow</button>
                  }

                </div>
              </span>

                <span>
                <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
                </span>
                <span>
                  <div>{'u.location.country'}</div>
                  <div>{'u.location.city'}</div>
                </span>
              </span>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Users
