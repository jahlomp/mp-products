import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Loader from './Loader'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const enzymeWrapper = shallow(<Loader />)

  return {
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Loader', () => {
    it('should render self and child elements', () => {
      const { enzymeWrapper } = setup()

      expect(enzymeWrapper.find('div').hasClass('mp-loader-wrapper')).toBe(true)
      expect(enzymeWrapper.find('div').hasClass('mp-loader')).toBe(true)
    })
  })
})
