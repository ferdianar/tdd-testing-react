import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';


describe("Counter Component Testing", () => {
	test("Renders the Learn React", () => {

		const FragmentElement = shallow(<App />)

		expect(FragmentElement.find("h1").text()).toContain("Learn React")
	})
})