import React from 'react'
import FilterLink from '../containers/FilterLink'
import { SHOW_ALL, SHOW_COMPELETED, SHOW_ACTIVE } from '../constants'

const Footer = () => (
  <div>
    Show:
    <FilterLink filter={SHOW_ALL}>
      <span>All</span>,
    </FilterLink>
    <FilterLink filter={SHOW_ACTIVE}>
      <span>Active</span>,
    </FilterLink>
    <FilterLink filter={SHOW_COMPELETED}>
      <span>Completed</span>,
    </FilterLink>
  </div>
)

export default Footer
