import React from 'react';
import { shallow, mount } from 'enzyme';
import Login from './Login.js';

describe('<Login />', () => {
    it('renders without crashing', () => {
        const component = shallow(
            <Login />
        );
        expect(component).toMatchSnapshot();
    });
    it('should call callblack on form submit', () => {
        const submitCallback = jest.fn();
        const component = mount(
            <Login submitCallback={submitCallback} />
        );
        component.find('[type="submit"]').get(0).click();
        expect(submitCallback).toHaveBeenCalled();
    });
})
