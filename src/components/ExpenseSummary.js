import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import getTotalExpense from '../selectors/expenses-total';

export const ExpenseSummary = (props) => (
    <div>
            <p>
                Viewing {props.expenses.length} {props.expenses === 1 ? 'expense' : 'expenses'} totalling {numeral(getTotalExpense(props.expenses) / 100).format('$0,0.00')}
            </p>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
    };
};

export default connect(mapStateToProps)(ExpenseSummary);
