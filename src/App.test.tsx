import React from 'react';

// import App Components
import App from './App';

// import mount ( Full DOM Rendering ) | shallow ( Scoped Rendering )
import { mount, shallow } from 'enzyme';

// import Counter Components
import Counter from "./template/Counter"

describe("Counter Component Testing", () => {
       let WrapperComponents: any;

       beforeEach(() => {
              WrapperComponents = mount(<App />);
       });

       test("Render Counter Component Title", () => {
              expect(WrapperComponents.find("h1").text()).toContain("Counter")
       })

       test("Render a button with text increment", () => {
              expect(WrapperComponents.find("#primary-button").text()).toBe("Primary Button")
       })

       test("Must render initial value of state", () => {
              expect(WrapperComponents.find("#counter-values").text()).toBe("22")
       })

       test("Render current value +1 when Increment Button is clicked", () => {
              WrapperComponents.find("#primary-button").simulate("click")
              expect(WrapperComponents.find("#counter-values").text()).toBe("23")
       })

       test("Render current value -1 when Decrement Button is clicked", () => {
              WrapperComponents.find("#secondary-button").simulate("click")
              expect(WrapperComponents.find("#counter-values").text()).toBe("21")
       })
})