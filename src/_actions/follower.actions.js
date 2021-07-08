import { followerConstants, globalConstants } from '../_constants'

import { paginate } from '../_helpers/'

import data_mock from '../data'
import axios from 'axios'

export const followerActions = {
  getData,
  handlePage,
  setFollow,
}

async function getData(dispatch, state, url) {
  // await setTimeout(() => {
  dispatch({ type: globalConstants.SET_LOADING })

  // const data_response = data_mock

  const response = await axios(url).catch((err) => console.log(err))
  if (response) {
    const data_response = response.data

    if (data_response.length > 0) {
      dispatch({
        type: followerConstants.SET_DATA,
        payload: {
          data: paginate(data_response),
        },
      })
    } else {
      console.log('Cant get data from this url', url)
    }
  } else {
    console.log('Cant get data from this url', url)
  }
  //   clearTimeout()
  // }, 250)
}

async function setFollow(dispatch, state) {
  if (state.follower.data.length > 0) {
    dispatch({
      type: followerConstants.SET_FOLLOWERS,
      payload: {
        followers: state.follower.data[state.follower.page],
      },
    })
  }
}

function handlePage(dispatch, state, value, index) {
  dispatch({
    type: followerConstants.HANDLE_PAGE,
    payload: {
      value: value,
      index: index,
    },
  })
}
