
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';

function App() {
  return (
    <>
      <Navbar title="Kojo"/>
      <Alert alert={alert}/>
      <Textform heading="head" />

    </>


  );
}

export default App;