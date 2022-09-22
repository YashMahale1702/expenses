import './App.scss';
import { useState } from 'react';
import { Expenses } from './components/Expenses/Expenses';
import { expensesData } from './data/Data';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
    const [expenses, setExpenses] = useState(expensesData);
    // const [expenses, setExpenses] = useState([]);

    const addExpenseHandler = (newExpenseData) => {
        console.log(newExpenseData);

        setExpenses((oldExpense) => {
            return [newExpenseData, ...oldExpense];
        });
    };
    return (
        <div className='App'>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses}></Expenses>
        </div>
    );
}

export default App;
