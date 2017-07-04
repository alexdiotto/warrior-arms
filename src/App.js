'use strict'

import React, { Component } from 'react'

import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      title: '...',
      Component: 'div'
    }
  }

  getTitle () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('My app with async / await!\n love it!')
      }, 2000)
    })
  }

  async componentDidMount () {
    const title = await import('components/title')

    this.setState({
      title: await this.getTitle(),
      Component: title.default
    })
  }

  render () {
    return (
      <div>
        <this.state.Component>{this.state.title}</this.state.Component>
      </div>
    )
  }
}

export default App
