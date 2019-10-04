import React from 'react'
import PropTypes from 'prop-types'
import styles from './Link.scss'

const Link = ({ children, active, onClick }) => {
  if (active) {
    return <span className={styles.filter}>{children}</span>
  }
  return (
    <a
      href=''
      className={styles.filter}
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
