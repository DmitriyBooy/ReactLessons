import s from './users.module.css'

const Users = ({ users, follow, unfollow, setUsers }) => {
  if (!users.length) {
    setUsers([
      {
        id: 1,
        firstName: 'Dima',
        status: 'status-1',
        followed: false,
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdiEq8XepBWO6-XwAMgqpjxb3-Fj4kOyPCM9QHcus42amsYzleaSIAoHMEj6jo44tqpl4&usqp=CAU',
        location: {
          city: 'Moscow',
          country: 'Russia'
        }
      },
      {
        id: 2,
        firstName: 'Lesha',
        status: 'status-2',
        followed: false,
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdiEq8XepBWO6-XwAMgqpjxb3-Fj4kOyPCM9QHcus42amsYzleaSIAoHMEj6jo44tqpl4&usqp=CAU',
        location: {
          city: 'Anapa',
          country: 'Russia'
        }
      },
      {
        id: 3,
        firstName: 'Oleg',
        status: 'status-3',
        followed: true,
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdiEq8XepBWO6-XwAMgqpjxb3-Fj4kOyPCM9QHcus42amsYzleaSIAoHMEj6jo44tqpl4&usqp=CAU',
        location: {
          city: 'Sochi',
          country: 'Russia'
        }
      },
    ])
  }

  return(
    <div>
      {
        users.map((u) => {
          return (
            <div
              key={u.id}
              className={s.user_wrapper}
            >
              <span>
                <div>
                  <img
                    className={s.user_avatar}
                    src={u.avatarUrl}
                    alt='user_avatar'
                  />
                </div>

                <div>
                  {
                    u.followed
                      ? <button onClick={() => unfollow(u.id)}>Unfollow</button>
                      : <button onClick={() => follow(u.id)}>Follow</button>
                  }

                </div>
              </span>

              <span>
                <span>
                  <div>{u.firstName}</div>
                  <div>{u.status}</div>
                </span>
                <span>
                  <div>{u.location.country}</div>
                  <div>{u.location.city}</div>
                </span>
              </span>
            </div>
          )
        })
      }
    </div>
  )
}

export default Users
