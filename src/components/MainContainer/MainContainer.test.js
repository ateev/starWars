import React from 'react';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import MainContainer from './MainContainer.js';
import { Provider } from 'react-redux';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('<MainContainer />', () => {
    it('renders without crashing', () => {
        const component = shallow(
            <Provider store={mockStore}>
                <MainContainer />
            </Provider>
        );
        expect(component).toMatchSnapshot();
    });
})
