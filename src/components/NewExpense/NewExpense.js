import React from 'react';
import './NewExpense.scss';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
    const [isFormClosed, setIsFormClosed] = useState(true);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random(10, 100).toString()
        };

        props.onAddExpense(expenseData);
    };

    const addNewExpensehandler = () => {
        setIsFormClosed(false);
    };

    const cancelHandler = () => {
        setIsFormClosed(true);
    };

    return (
        <div className='new-expense'>
            {isFormClosed ? (
                <button onClick={addNewExpensehandler}>Add New Expense</button>
            ) : (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancelButtonClick={cancelHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;
