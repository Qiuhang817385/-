import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
export default function Main (props) {
  return (
    <div>
      Main
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  )
}
