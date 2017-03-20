import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import LogOut from './LogOut.js';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();
const initialState = {};
const store = mockStore(initialState);

describe('<LogOut />', () => {
    it('renders without crashing', () => {
        const component = shallow(
            <Provider store={store}>
                <LogOut />
            </Provider>
        );
        expect(component).toMatchSnapshot();
    });
})
