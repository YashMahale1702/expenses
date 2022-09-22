import React, { useState } from 'react';
import { ExpenseItem } from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import './Expenses.scss';
import Card from '../UI/Card';

export const Expenses = (props) => {
    const [filterValue, setfilterValue] = useState('2021');

    const saveOptionHandler = (filterOptionPassed) => {
        // set the new filter value
        setfilterValue(filterOptionPassed);
    };

    const filteredExpense = props.items.filter((item) => {
        return item.date.getFullYear().toString() === filterValue;
    });

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter
                    selectedYear={filterValue}
                    onSaveOption={saveOptionHandler}
                />
                <ExpensesChart expenses={filteredExpense} />
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
