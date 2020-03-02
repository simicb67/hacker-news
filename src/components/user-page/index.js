import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SanitizedHTML from 'react-sanitized-html'
import './style.css'

import Header from '../header'

import { timeAgo } from '../../utils'

export default () => {
  const [user, setUser] = useState([])
  const { username } = useParams()


    useEffect(() => {
      console.log('Loaded')

      fetch(`https://hacker-news.firebaseio.com/v0/user/${username}.json`)
        .then((res) => res.json())
        .then((user) => {
          console.log(user)
          setUser(user)
        })
    },[])

  return (
    <div className="UserPage">
      <Header />

      <div className="UserPage-c">
        <div className="UserPage-content">
          <div className="User-id">User&nbsp;:&nbsp; {user.id}</div>
          <div className="User-created">Created:&nbsp;&nbsp;&nbsp;&nbsp;{timeAgo(user.created)}</div>
          <div className="User-karma">Karma:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.karma}</div>
          <div className="User-about">
            <SanitizedHTML html={user.about} />
          </div>
        </div>
      </div>
    </div> 
  )
}
