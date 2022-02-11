import "../convertCard.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import ResModal from "./modal";

// import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used




function ConvertCard(props){
    const [sourceCurrency,setSourceCurrency] = useState(0)
    const handleSourceChange = (e)=> {
        setSourceCurrency(e.target.value);
     };
    const [isOpen, setIsOpen] = useState(false);

    const ShowModalFunc = ()=> {
        setIsOpen(true);
      };
    
      const hideModal = () => {
        setIsOpen(false);
      };
    const ShowDecider = () =>{
        if (sourceCurrency!==0){
            ShowModalFunc()
        }else{
            alert("Please Enter Source")
        }
    }
    const onSubmit = (e) => {
        e.preventDefault();
      };
    return(
        <div className="cardBg col-md-3 d-flex flex-column align-items-center justify-content-start gap-5">
            <h2 className="fs-4 fw-bold text-dark">{props.title}</h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label for="exampleInputEmail1">{props.source}</label>
                  <input type="number" className="form-control" aria-describedby="Help" placeholder={"Enter " + props.source} onChange={handleSourceChange}/>
                  <small id="Help" className="form-text text-muted">Enter the currency you want to convert</small>
                </div>
                <button type="submit" className="btn btn-primary mt-4" onClick={ShowDecider}>Convert</button>
            </form>
            <ResModal isOpen={isOpen} hideModal={hideModal} source={props.source} target={props.target} sourceVal={sourceCurrency} />
        </div>
    )
}


export default ConvertCard