import s from './users.module.css'
import axios from 'axios'
import user_avatar from '../../assets/images/user.jpg'
import React from 'react'

class Users extends React.Component {

  constructor(props) {
    super(props)

    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(({ data }) => this.props.setUsers(data.items))
  }

  render() {
    return(
      <div>
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
