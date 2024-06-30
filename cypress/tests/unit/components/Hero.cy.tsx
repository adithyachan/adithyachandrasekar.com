import React from 'react'
import Hero from '@components/Hero'

describe('<Hero />', () => {
  it('renders', () => {
    cy.mount(<Hero scroll={null} />)
  })
})

export {}