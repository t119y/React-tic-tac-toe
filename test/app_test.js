import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

import Component from '../src/components/App/App';

describe('App Test', function(){
    it('Render App component', function(){
       var App = ReactTestUtils.renderIntoDocument(<Component />);
       expect(ReactDOM.findDOMNode(App)).toBeDefined();
    })
})

