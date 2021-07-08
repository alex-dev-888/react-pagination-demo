import { globalConstants, followerConstants } from '../_constants'

export function followerReducer(state, action) {
  switch (action.type) {
    case globalConstants.SET_LOADING:
      return {
        ...state,
        follower: {
          ...state.follower,
          loading: true,
        },
      }

    case followerConstants.SET_DATA:
      return {
        ...state,
        follower: {
          ...state.follower,
          loading: false,
          data: action.payload.data,
        },
      }

    case followerConstants.SET_FOLLOWERS:
      return {
        ...state,
        follower: {
          ...state.follower,
          loading: false,
          followers: action.payload.followers,
        },
      }

    case followerConstants.HANDLE_PAGE:
      if (action.payload.value === 'inc') {
        let nextPage = state.follower.page + 1
        if (nextPage > state.follower.data.length - 1) {
          nextPage = 0
        }
        return {
          ...state,
          follower: {
            ...state.follower,
            loading: false,
            page: nextPage,
          },
        }
      }
      if (action.payload.value === 'dec') {
        let prevPage = state.follower.page - 1
        if (prevPage < 0) {
          prevPage = state.follower.data.length - 1
        }
        return {
          ...state,
          follower: {
            ...state.follower,
            loading: false,
            page: prevPage,
          },
        }
      }
      if (action.payload.value === 'last') {
        return {
          ...state,
          follower: {
            ...state.follower,
            loading: false,
            page: state.follower.data.length - 1,
          },
        }
      }
      if (action.payload.value === 'first') {
        return {
          ...state,
          follower: {
            ...state.follower,
            loading: false,
            page: 0,
          },
        }
      }
      if (action.payload.value === 'select') {
        return {
          ...state,
          follower: {
            ...state.follower,
            loading: false,
            page: action.payload.index,
          },
        }
      }
    default:
      return state
  }
}
