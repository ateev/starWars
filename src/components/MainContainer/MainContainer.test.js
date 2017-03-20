import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import MainContainer from './MainContainer.js';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();
const initialState = {};
const store = mockStore(initialState);

describe('<MainContainer />', () => {
    it('renders without crashing', () => {
        const component = shallow(
            <Provider store={store}>
                <MainContainer />
            </Provider>
        );
        expect(component).toMatchSnapshot();
    });
})
