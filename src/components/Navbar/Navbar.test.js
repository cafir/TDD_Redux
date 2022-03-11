import React from 'react'
import Enzyme from 'enzyme'
import Navbar from './Navbar'

const setUp = (props={}) => {
    const component = Enzyme.shallow(<Navbar/>)
    return component
}

describe("Navbar Testing", () => {

    let component;
    beforeEach(() => {
        component = setUp()
    })

    test('it should render list', () => {
        const list = component.find('li')
        expect(list.length).toBe(3)
    })

    test('it should render a logo', () => {
        const logo = component.find('.navbar__logo')
        expect(logo.length).toBe(1)
    })
    
})
