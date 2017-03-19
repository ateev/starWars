import React from 'react';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import LogOut from './LogOut.js';
import { Provider } from 'react-redux';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('<LogOut />', () => {
    it('renders without crashing', () => {
        const component = shallow(
            <Provider store={mockStore}>
                <LogOut />
            </Provider>
        );
        expect(component).toMatchSnapshot();
    });
})
