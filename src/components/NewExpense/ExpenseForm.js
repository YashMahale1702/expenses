import React, { useState } from 'react';
import './ExpenseForm.scss';

const ExpenseForm = (props) => {
    const [enteredTitle, setenteredTitle] = useState('');
    const [enteredAmount, setenteredAmount] = useState('');
    const [enteredDate, setenteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setenteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setenteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setenteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if (enteredAmount && enteredDate && enteredTitle) {
            const expenseData = {
                title: enteredTitle,
                amount: Number(enteredAmount),
                date: new Date(enteredDate)
            };

            // handler of NewExpense
            props.onSaveExpenseData(expenseData);

            // clear input
            setenteredAmount('');
            setenteredDate('');
            setenteredTitle('');
        } else {
            alert('Fill all the fields');
        }
    };

    const cancelHandler = () => {
        props.onCancelButtonClick();
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor=''>Title</label>
                    <input
                        type='text'
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor=''>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor=''>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max='2022-12-31'
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={cancelHandler}>
                    Cancel
                </button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
