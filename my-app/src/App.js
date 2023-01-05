import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm';
import Content from './components/Content';
import SearchBar from './components/SearchBar';


function App() {
  return (
    <div className={css.App}>
      <Content/>
    </div>
  );
}

export default App;