const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE ='SET-CURRENT-PAGE'
const SET_TOTAL_COUNT ='SET-TOTAL-COUNT'
const SET_IS_LOADING = 'SET-IS-LOADING'

const initialState = {
  users: [],
  pageSize: 5,
  totalCount: 0,
  currentPage: 1,
  isLoading: true,
}

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return  {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: true,
            }
          }
          return u
        })
      }
    case UNFOLLOW:
      return  {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: false,
            }
          }
          return u
        })
      }
    case SET_USERS:
      return { ...state, users: action.users }
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case SET_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount }
    case SET_IS_LOADING:
      return { ...state, isLoading: action.value }
    default:
      return state
  }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (pageNumber) => ({ type: SET_CURRENT_PAGE, currentPage: pageNumber })
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount })
export const setIsLoading = (value) => ({ type: SET_IS_LOADING, value })

export default UsersReducer