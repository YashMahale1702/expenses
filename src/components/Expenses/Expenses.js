import React, { useState } from 'react';
import { ExpenseItem } from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.scss';
import Card from '../UI/Card';

export const Expenses = (props) => {
    const [filterValue, setfilterValue] = useState('2020');

    const saveOptionHandler = (filterOptionPassed) => {
        // set the new filter value
        setfilterValue(filterOptionPassed);
    };

    const filteredExpense = props.items.filter((item) => {
        console.log(item.date.getFullYear().toString());
        return item.date.getFullYear().toString() === filterValue;
    });

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter
                    selectedYear={filterValue}
                    onSaveOption={saveOptionHandler}
                />
                {filteredExpense.length === 0 ? (
                    <h1 className='expenses-h1'>No expenses found</h1>
                ) : (
                    filteredExpense.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))
                )}
            </Card>
        </div>
    );
};
