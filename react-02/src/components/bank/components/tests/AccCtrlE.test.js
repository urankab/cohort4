import React from 'react';
import { shallow } from 'enzyme'
import AccCtrl from '../AccCtrl'
import { AccountController } from '../../business/functions'

describe('AccCtrl Component test', () => {
   let wrapper;
   // let startState = {

   // }

   // beforeEach(() => {
   //    wrapper = shallow(<AccCtrl />)
   // })

   it('Renames an account', () => {
      wrapper = shallow(<AccCtrl />)
   })

})