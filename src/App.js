import './App.scss';
import { Expenses } from './components/Expenses/Expenses';
import { expenses } from './data/Data';
import NewExpense from './components/NewExpense/NewExpense';


function App() {

    const addExpenseHandler = (expenseData) => {
        console.log('From app.js, expense data');
    };
    return (
        <div className='App'>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses}></Expenses>
        </div>
    );
}

export default App;
