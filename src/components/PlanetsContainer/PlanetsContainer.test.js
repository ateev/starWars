import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import PlanetsContainer from './PlanetsContainer.js';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();
const initialState = {};
const store = mockStore(initialState);

describe('<PlanetsContainer />', () => {
    it('renders without crashing', () => {
        const component = shallow(
            <Provider store={store}>
                <PlanetsContainer />
            </Provider>
        );
        expect(component).toMatchSnapshot();
    });
})
