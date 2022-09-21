import React from 'react';
import './NewExpense.scss';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random(10, 100).toString()
        };

        props.onAddExpense(expenseData);


    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;