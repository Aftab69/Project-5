import React, { useState } from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

function App() {
  const[result, setResult] = useState("");
  function handleClick(e){
    setResult(result.concat(e.target.value));
  }
  function Clear(){
    setResult("");
  }
  function Del(){
    setResult(result.slice(0,result.length-1));
  }
  function Calculate(){
    try{
    setResult(eval(result).toString());
    } catch(err){
      setResult("Error");
    }
  }
  return (
  <>  
  <div className="background_size d-flex justify-content-center align-items-center main_size">
    <div className="bg-dark p-1 rounded box_shadow media_query1">
        <div className="main_container">
          <form className="txt">
            <input  type="text" value={result} className="input_heightwidth"></input>
          </form>
          <div className="d-flex">
          <div className=" bg_color p-2 container_size">
            <div className="button_design">
              <button value="1" onClick={handleClick} className="btn btn-primary button_size">1</button>
              <button value="2" onClick={handleClick} className="btn btn-primary button_size">2</button>
              <button value="3" onClick={handleClick} className="btn btn-primary button_size">3</button>
              <button value="4" onClick={handleClick} className="btn btn-primary button_size">4</button>
              <button value="5" onClick={handleClick} className="btn btn-primary button_size">5</button>
              <button value="6" onClick={handleClick} className="btn btn-primary button_size">6</button>
              <button value="7" onClick={handleClick} className="btn btn-primary button_size">7</button>
              <button value="8" onClick={handleClick} className="btn btn-primary button_size">8</button>
              <button value="9" onClick={handleClick} className="btn btn-primary button_size">9</button>
              <button value="del" onClick={Del} className="btn btn-primary button_size font_sizes">Del</button>
              <button value="0" onClick={handleClick} className="btn btn-primary button_size">0</button>
              <button value="clear" onClick={Clear} className="btn btn-primary button_size font_sizes">Clear</button>
            </div>       
          </div>
          <div className="d-flex flex-wrap justify-content-center align-items-center marks_design bg-warning p-2">
            <button value="+" onClick={handleClick} className="btn btn-primary button_size">+</button>
            <button value="-" onClick={handleClick} className="btn btn-primary button_size">-</button>
            <button value="*" onClick={handleClick} className="btn btn-primary button_size">*</button>
            <button value="/" onClick={handleClick} className="btn btn-primary button_size">/</button>
            <button onClick={Calculate} className="btn btn-primary button_size">=</button>
          </div>
          </div>
        </div>
    </div>
  </div>
  </>
  );
}

export default App;
