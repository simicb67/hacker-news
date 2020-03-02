import React from 'react'
import './style.css'

export default () => (
  <header>
    <div className="Header">
      <nav>
        <ul>
          <li><a href="/">HN</a></li>
          <li><a href="/">Top</a></li>
          <li><a href="/category/newstories">New</a></li>
          <li><a href="/category/beststories">Best</a></li>
          <li><a href="/category/askstories">Ask</a></li>
          <li><a href="/category/showstories">Show</a></li>
          <li><a href="/category/jobstories">Jobs</a></li>
        </ul>
      </nav>
    </div>
  </header>
)