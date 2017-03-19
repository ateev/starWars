import React from 'react';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import PlanetsContainer from './PlanetsContainer.js';
import { Provider } from 'react-redux';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('<PlanetsContainer />', () => {
    it('renders without crashing', () => {
        const component = shallow(
            <Provider store={mockStore}>
                <PlanetsContainer />
            </Provider>
        );
        expect(component).toMatchSnapshot();
    });
})
