import React from "react";
import "./toolbox.css";
  
const Toolbox = ({ setLineColor, setLineWidth, 
setLineOpacity,handleClear,handleToggle,toggle }) => {

  return (
    <div className="toolbox">
      <label className="label">Brush Color </label>
      <input className="input"
        type="color"
        onChange={(e) => {
          setLineColor(e.target.value);
        }} 
      />
      <label className="label" >Brush Width </label>
      <input className="input"
        type="range"
        min="5"
        max="100"
        onChange={(e) => {
          setLineWidth(e.target.value);
        }}
      />
      <label className="label">Brush Opacity</label>
      <input className="input"
        type="range"
        min="1"
        max="100"
        onChange={(e) => {
          setLineOpacity(e.target.value / 100);
        }}
      />
    
    <button className="drawbtn" onClick={handleToggle}>{toggle?<i class="fa fa-pen fa-2x"></i>:<i class="fa fa-eraser fa-2x"></i>}</button>
    <button className="clear" onClick={handleClear}>clear</button>
    
  
    </div>
  );
};
  
export default Toolbox;