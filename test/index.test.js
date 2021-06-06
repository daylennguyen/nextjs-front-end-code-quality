/* global describe, it */
import { shallow } from 'enzyme'
import React from 'react'
import expect from 'expect.js'

import App from '../pages/index.js'

describe('With Enzyme', () => {
  it('Renders with 2 divs"', () => {
    const app = shallow(<App />)

    expect(app.find('div').length).to.equal(2)
  })
})
