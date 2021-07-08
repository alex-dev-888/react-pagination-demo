import React, { useContext, useEffect } from 'react'
import './FollowerList.css'
import Follower from './Follower'
import Loading from './Loading'
import { GlobalContext } from '../_helpers/'
import { followerActions } from '../_actions'

const url = 'https://api.github.com/users/vbuterin/followers?per_page=100'

export const FollowerList = () => {
  const { followerState, followerDispatch } = useContext(GlobalContext)
  const { followers, data, page, loading } = followerState.follower

  useEffect(() => {
    followerActions.getData(followerDispatch, followerState, url)
  }, [url])

  useEffect(() => {
    if (loading) return

    followerActions.setFollow(followerDispatch, followerState, '')
  }, [loading, page])

  const handlePage = (value, index) => {
    followerActions.handlePage(followerDispatch, followerState, value, index)
  }

  if (followerState.follower.loading) {
    return <Loading />
  }

  return (
    <main>
      <div className='section-title'>
        <h1>vitalik Buterin Followers</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {followers &&
            followers.map((follower) => {
              return <Follower key={follower.id} {...follower}></Follower>
            })}
        </div>
        <div className='btn-container'>
          <button
            className='prev-btn'
            onClick={() => handlePage('first', null)}
          >
            first
          </button>
          <button className='prev-btn' onClick={() => handlePage('dec', null)}>
            prev
          </button>
          {data &&
            data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : ''}`}
                  onClick={() => handlePage('select', index)}
                >
                  {index + 1}
                </button>
              )
            })}
          <button className='next-btn' onClick={() => handlePage('inc', null)}>
            next
          </button>
          <button className='next-btn' onClick={() => handlePage('last', null)}>
            last
          </button>
        </div>
      </section>
    </main>
  )
}
