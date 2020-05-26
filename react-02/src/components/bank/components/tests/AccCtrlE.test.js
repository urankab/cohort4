import React from 'react';
import { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { fireEvent, render, screen } from '@testing-library/react'
import AccCtrl from '../AccCtrl'
import { AccountController } from '../../business/functions'

var Enzyme = require('enzyme');
Enzyme.configure({ adapter: new Adapter() })

describe('AccCtrl Component test', () => {

   it('Snapshot?', () => {
      let wrapper = shallow(<AccCtrl />)
      expect(wrapper).toMatchSnapshot()
   })

   it('Renders the dropdown list and the header', () => {
      const header = 'Edit an Account'

      let wrapper = shallow(<AccCtrl
      />)

      expect(wrapper.find('#dropdown'))
      expect(wrapper.find('h2')).toHaveLength(1)
      expect(wrapper.contains(header)).toBe(true)
   })

   it('Test adding and renaming an account validation', () => {
      const acctCtrl = new AccountController()
      const accounts = acctCtrl.accounts

      acctCtrl.addAccount({ accountName: 'Kitty', balance: 100 })
      acctCtrl.addAccount({ accountName: 'Doggy', balance: 10 })

      const mockRenameClickCallBack = jest.fn()
      const mockUserMsgCallBack = jest.fn()

      let wrapper = shallow(<AccCtrl
         userEditMsg={mockUserMsgCallBack}
      />)

      render(<AccCtrl
         accounts={accounts}
         rename={mockRenameClickCallBack}
      />)

      const a1 = 'Kitty - $100'
      wrapper.find('#renameBtn').simulate('click')
      expect(mockUserMsgCallBack.mock.calls.length).toBe(1)
      expect(mockRenameClickCallBack.mock.calls.length).toBe(0)
      expect(mockUserMsgCallBack.mock.calls[0][0]).toBe('Please enter a new name')
   })

   it('Test adding and renaming an account', () => {
      const acctCtrl = new AccountController()
      const accounts = acctCtrl.accounts

      acctCtrl.addAccount({ accountName: 'Kitty', balance: 100 })
      acctCtrl.addAccount({ accountName: 'Doggy', balance: 10 })

      const mockRenameClickCallBack = jest.fn()
      const mockUserMsgCallBack = jest.fn()

      let wrapper = shallow(<AccCtrl
         userEditMsg={mockUserMsgCallBack}
         rename={mockRenameClickCallBack}
      />)

      render(<AccCtrl
         accounts={accounts}
         rename={mockRenameClickCallBack}
      />)

      updateValue('renameField', 'Cats')
      wrapper.find('#renameBtn').simulate('click')
      expect(mockUserMsgCallBack.mock.calls.length).toBe(1)
      expect(mockRenameClickCallBack.mock.calls.length).toBe(1)
      expect(mockUserMsgCallBack.mock.calls[0][0]).toBe('Renamed Kitty')
      // wrapper.find('#dropdown').simulate('change', { target: { value: 'Doggy' } })
      // // expect(wrapper.find('#dropdown').props().value).toBe('Doggy')
   })

   it('Test renaming a different selection', () => {
      const acctCtrl = new AccountController()
      const accounts = acctCtrl.accounts

      acctCtrl.addAccount({ accountName: 'Kitty', balance: 100 })
      acctCtrl.addAccount({ accountName: 'Doggy', balance: 10 })

      const mockRenameClickCallBack = jest.fn()
      const mockUserMsgCallBack = jest.fn()

      let wrapper = mount(<AccCtrl
         userEditMsg={mockUserMsgCallBack}
         rename={mockRenameClickCallBack}
         accounts={accounts}
      />)

      render(<AccCtrl
         accounts={accounts}
         rename={mockRenameClickCallBack}
      />)

      updateValue('renameField', 'Wolves')

      document.getElementById('dropdown').selectedIndex = '1'
      let e = document.getElementById('dropdown')
      let value = e.options[e.selectedIndex].value
      expect(value).toBe('Doggy')

      wrapper.find('#renameBtn').simulate('click')

      expect(mockRenameClickCallBack.mock.calls.length).toBe(1)
      expect(mockUserMsgCallBack.mock.calls.length).toBe(1)
      expect(mockUserMsgCallBack.mock.calls[0][0]).toBe('Renamed Doggy')
   })

   it('Test deleting an account validation', () => {
      const acctCtrl = new AccountController()
      const accounts = acctCtrl.accounts

      acctCtrl.addAccount({ accountName: 'Kitty', balance: 100 })
      acctCtrl.addAccount({ accountName: 'Doggy', balance: 10 })

      const mockDeleteClickCallBack = jest.fn()
      const mockUserMsgCallBack = jest.fn()

      let wrapper = shallow(<AccCtrl
         userEditMsg={mockUserMsgCallBack}
         delete={mockDeleteClickCallBack}
      />)

      render(<AccCtrl
         accounts={accounts}
         delete={mockDeleteClickCallBack}
      />)

      wrapper.find('#deleteBtn').simulate('click')
      expect(mockUserMsgCallBack.mock.calls.length).toBe(1)
      expect(mockDeleteClickCallBack.mock.calls.length).toBe(1)
      expect(mockUserMsgCallBack.mock.calls[0][0]).toBe('Deleted Kitty')
   })
})

function getValue(name) {
   return document.querySelector(`[id=${name}]`).value
}

function getTextContent(name) {
   return document.getElementById(`${name}`).textContent;
}

function updateValue(name, value) {
   document.querySelector(`[id=${name}]`).value = value;
}