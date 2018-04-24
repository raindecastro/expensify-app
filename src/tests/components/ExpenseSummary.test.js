import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';
import filters from '../fixtures/filters';

test('should show expense summary properly with expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});

test('should show expense summary properly without expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});