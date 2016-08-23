/*
import { renderComponent, expect } from "../../../test_helper";
import Footer from "../../../../app/components/shared_components/footer";


describe('Footer', ()  => {

	it('shows the correct text', () =>{

		const component = renderComponent(Footer);

		expect(component).to.contain('© Copyright 2016 Deepak Prakash. All rights reserved');

	}); 

	

});

*/

'use strict';

let assert = require('assert');

let React = require('react');
let ReactTestUtils = require('react-addons-test-utils');

describe('Testing my div', function() {

  it('should render div component with class equals to veryFirstDiv', function() {
  	let VeryFirstDiv = require("./../../../app/components/shared_components/footer");
  	let myDiv = ReactTestUtils.renderIntoDocument(
      <VeryFirstDiv />
    );
    
    assert.equal(myDiv.type, 'div');
    assert.equal(myDiv.props.className, 'footer');
  });
});
