import s from './users.module.css'
import user_avatar from '../../assets/images/user.jpg'

const Users = ({ totalCount, pageSize, currentPage, users, onPageChanged, isLoading }) => {
  let pagesCount = Math.ceil(totalCount / pageSize)
  let pages = []

  for(let i = 0; i < pagesCount; i++) {
    pages.push(i + 1)
  }

  return(
    <div>
      <div>
        {
          pages
            .filter((p) => (currentPage - 4 < p && currentPage + 4 > p) || p === 1 || p === pages.length)
            .map((p, i, arr) => {
              if (i === 1 && p !== 2) {
                return '...'
              }

              if (i ===  arr.length - 2 && p !== pages.length - 1) {
                return '...'
              }

              return <span
                className={`${currentPage === p && s.select_page} ${s.page_number}`}
                onClick={() => onPageChanged(p)}
                key={p}
              >
              {p}
            </span>
            })
        }
      </div>
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

export default Users
