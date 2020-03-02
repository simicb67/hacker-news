import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.css'

import UserPage from './components/user-page'
import StoryPage from './components/story-page'
import CommentPage from './components/comment-page'


export default () => (
  <Router>
    <Switch>
      <Route path="/category/:categoryName"> //for Header
        <StoryPage />
      </Route>

      <Route path="/user/:username">
        <UserPage />
      </Route>

      <Route path="/item/:storyId">
        <CommentPage />
      </Route>

      <Route exact path="/">
        <StoryPage />
      </Route>

      <Route path="*">
        <h2>404 Page not found</h2>
      </Route>
    </Switch>
  </Router>
)