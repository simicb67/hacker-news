import React, { useState, useEffect } from 'react' //that a hooks 
import SanitizedHTML from 'react-sanitized-html'   //convert to safe HTML, because imposible a infected script import
import './style.css' //import css styles

import { timeAgo } from '../../utils' //import function timeAge

const Comment = ({ id = '22255914' }) => { //variables with data
const[story, setStory] = useState({ score:  12 })
const[repliesVisible, setRepliesVisible] = useState(true) 

  useEffect(() => {
    console.log('Loaded')

    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then((res) => res.json())
      .then((story) => {
        console.log(story)
          setStory(story)
        })
    },[])

  return (
    <div className="Comment">
      <span className="author"><a href={`/user/ }`}>{story.by}</a>&nbsp;{timeAgo(story.time)}</span>

      <div className="content">
        <SanitizedHTML html={story.text} />
      </div>

      {story.kids && story.kids.length > 0 && (
        <div className="replies">
          <a onClick={() => { setRepliesVisible(!repliesVisible) }}>
            [{repliesVisible ? '-' : '+'}] {story.kids.length} replies
          </a>

          {repliesVisible && story.kids.map((id) => (
            <Comment id={id} />
           ))}
        </div>
      )}
    </div>
  )
}

export default Comment