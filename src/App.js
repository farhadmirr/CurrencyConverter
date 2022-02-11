import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ConvertCard from "./components/convertCard.js"

function App() {
  return (
    <div className="farhad">
        <div className='cardsParent container d-flex flex-md-row flex-column justify-content-evenly flex-wrap'>
          <ConvertCard title='Indian Rupee to USD' target='USD' source='Rupee'/>
          <ConvertCard title='Indian Rupee to Euro' target='EURO' source='Rupee'/>
          <ConvertCard title='Indian Rupee to SGD' target='SGD' source='Rupee'/>
          <ConvertCard title='Indian Rupee to AUD' target='AUD' source='Rupee'/>
          <ConvertCard title='Indian Rupee to GBP' target='GBP' source='Rupee'/>


        </div>
    </div>
  );
}

export default App;
