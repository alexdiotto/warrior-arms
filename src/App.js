'use strict'

import React from 'react'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Hello World!</h1>
        <p>my name is Leandro... or Leandrinoo</p>
        <ul>
          <li> Item </li>
          <li> Item </li>
        </ul>
        <h2>The tests and more tests</h2>
        <p>Try make a application with React</p>
        <h2>Fine!</h2>
        <p>Thank you!</p>
        <ElementFolder />
      </div>
    )
  }
}

var ElementFolder = React.createClass({
  render: function () {
    return (
      <small>MIT Licence 2016</small>
    )
  }
})

export default App