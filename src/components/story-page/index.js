import React, { useState, useEffect } from 'react' //react hook
import { useParams } from 'react-router-dom' //declare react router
import './style.css'

import Header from '../header' 
import Story from '../story'

const per_page = 25 //const is defined variables

export default () => { 
  const { categoryName } = useParams()

  const [stories, setStories] = useState([])
  const [page, setPage] = useState(0)

  const pagedStories = stories.slice(page * per_page, (page + 1) * per_page)
  const isFirstPage = page === 0
  const isLastPage = page === Math.ceil(stories.length / per_page) - 1
  const numberPage = Math.ceil(stories.length / per_page)

  const goNextPage = () => {
    if (!isLastPage) setPage(page + 1)
  }

  const goPrevPage = () => {
    if (!isFirstPage) setPage(page - 1)
  }

  useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/${categoryName || 'topstories'}.json`)
      .then((t) => t.json())
      .then((items) => {
        setStories(items)
      })
  },[])

  return (
    <div className="StoryPage">
      <Header />

      <div className="Slider">
        <button disabled={isFirstPage} onClick={goPrevPage}>Prev</button>
          {` ${page + 1} / ${numberPage} `} 
        <button disabled={isLastPage} onClick={goNextPage}>Next</button>
      </div>

      <div className="StoryPage-content">
        {pagedStories.map((t) => (
          <Story id={t} key={t} />
        ))}
      </div>
    </div>
  )
}