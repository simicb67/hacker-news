import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './style.css'

import { timeAgo } from '../../utils'

import Header from '../header' 
import Comment from '../comment'

export default () => {
  const [story, setStory] = useState({ score: 12 })
  const { storyId } = useParams()

  useEffect(() => {
    console.log('Loaded')

      fetch (`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
        .then((res) => res.json())
        .then((story) => {
          setStory(story)
        })
  },[])

  return (
    <div className="CommentsPage">
      <Header />

       <div className="CommentsPage-content">
         <div className="content-box">
           <a href={story.url} className="title">
             {story.title}
           </a>
           <span className="details">{story.score} points | by <a href={`/user/${story.by}`}>{story.by}</a>&nbsp;{timeAgo(story.time)}</span>
         </div>
                
         <div className="comment-box">
           <div className="comment-count">{story.kids && story.kids.length}&nbsp;comments</div>

           {story.kids && story.kids.map((id) => (
             <Comment id={id} />
           ))}
         </div>
       </div>
    </div>
  )
}