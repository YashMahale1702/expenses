import './App.scss';
import { Expenses } from './components/Expenses/Expenses';
import { expenses } from './data/Data';

function App() {
    return (
        <div className='App'>
            <Expenses items={expenses}></Expenses>
        </div>
    );
}

export default App;
