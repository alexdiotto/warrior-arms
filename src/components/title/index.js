'use strict'

import React, { PropTypes } from 'react'

import styles from './title.css'

const Title = ({ children }) => (
  <h1 className={styles.testClass}>{children}</h1>
)

Title.propTypes = {
  children: PropTypes.node.isRequired
}

export default Title
