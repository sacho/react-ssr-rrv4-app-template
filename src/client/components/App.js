import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

class Menu extends Component {
  render () {
    return (
      <div>
        <ul>
          <li>
            <Link to={'/'}>Homepage</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
        </ul>
      </div>
    )
  }
}

class Homepage extends Component {
  render () {
    return (
      <div>
        <Helmet title='Welcome to Home page' />
        <h1>Homepage</h1>
      </div>
    )
  }
}

class About extends Component {
  render () {
    return (
      <div>
        <h1>About</h1>
      </div>
    )
  }
}

class Contact extends Component {
  render () {
    return (
      <div>
        <h1>Contact</h1>
      </div>
    )
  }
}

export default class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Helmet
          htmlAttributes={{ lang: 'en', amp: undefined }} // amp takes no value
          titleTemplate='%s | React App'
          titleAttributes={{ itemprop: 'name', lang: 'en' }}
          meta={[
            { name: 'description', content: 'Server side rendering example' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          ]}
        />
        <Menu />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
    )
  }
}