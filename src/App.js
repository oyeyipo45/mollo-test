import logo from './logo.svg';
import './App.css';
import searchIcon from './attributes/magnifying-glass.png'

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <form className='input'>
          <button className='input_submit' type='submit'>
            <img src={searchIcon} />
          </button>
          <input type='input' placeholder='Enter a task' className='input__box' />
        </form>
      </header>
      <section className='picture'>DAMILOLA</section>
    </div>
  );
}

export default App;
