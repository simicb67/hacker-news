import React, { useState, useEffect } from 'react'
import './style.css'

import { timeAgo } from '../../utils'

const url = 'https://hacker-news.firebaseio.com/v0/item/22226419.json'

export default ({ id = '22226419' }) => {
  const [story, setStory] = useState(null)

  useEffect(() => {
    console.log('Loaded')

    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then((res) => res.json())
      .then((story) => {
        console.log(story)
        setStory(story)
      })
  },[])

  if (story == null) return null //just for better load a page

  const com = story.descendants

  return (
    <div className="Story">
      <div className="Story-score">{story.score}</div>
      <div>
        <a className="Story-title" href={story.url} target="_blank">
          {story.title}
        </a>
        <div className="Story-links">
          by&nbsp;
          <a href={`/user/${story.by}`}>{story.by}</a>&nbsp; 
          <span>{timeAgo(story.time)}&nbsp;</span>|&nbsp;
          <a href={`/item/${story.id}`}>{`${com} ${com === 0 ? 'comment' : 'comments'}`}</a>
        </div>
      </div>
    </div>
  )
}