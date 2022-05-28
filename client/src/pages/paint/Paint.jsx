import { useEffect, useRef, useState,useCallback } from "react";
import "./paint.css";
import Topbar from "../../components/topBar/Topbar";
import Toolbox from "../../components/toolbox/Toolbox";

function App() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lineWidth, setLineWidth] = useState(5);
  const [lineColor, setLineColor] = useState("black");
  const [lineOpacity, setLineOpacity] = useState(0.1);
  const [toggle,setToggle]=useState(false);
 // const canvas = canvasRef.current;
  //const ctx = canvas.getContext("2d");
  // Initialization when the component
  // mounts for the first time
  useEffect(() => {
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.globalAlpha = lineOpacity;
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctxRef.current = ctx;
    
  }, [lineColor, lineOpacity, lineWidth]);
  
  // Function for starting the drawing
  const startDrawing = (e) => {
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(
      e.nativeEvent.offsetX, 
      e.nativeEvent.offsetY
    );
    setIsDrawing(true);
   
    //ctxRef.globalCompositeOperation = 'source-over'
  };
  
  // Function for ending the drawing
  const endDrawing = () => {
    ctxRef.current.closePath();
    setIsDrawing(false);
  };
  
  const draw = (e) => {
    if (!isDrawing) {
      return;
    }
    ctxRef.current.lineTo(
      e.nativeEvent.offsetX, 
      e.nativeEvent.offsetY
    );
      
    ctxRef.current.stroke();
  };

  
//clear
const handleClear = useCallback(() => {
  if (!ctxRef || !ctxRef.current || !canvasRef || !canvasRef.current) {
    return;
  }
  ctxRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
}, []);



//

//erase
const handleErase = () => ctxRef.current.globalCompositeOperation = 'destination-out'
//
//toggle
const togglePen=()=>{
  ctxRef.current.globalCompositeOperation = 'source-over';
}

const handleToggle=()=>{
  setToggle(!toggle);
  if(toggle){
    ctxRef.current.globalCompositeOperation = 'source-over';
  }
  else{
   ctxRef.current.globalCompositeOperation = 'destination-out'
  }
}
  
  return (
    <div className="wrapper">
       <Topbar />
      <div className="draw-area">
        <Toolbox
          setLineColor={setLineColor}
          setLineWidth={setLineWidth}
          setLineOpacity={setLineOpacity}
          handleClear={handleClear}
          handleToggle={handleToggle}
          toggle={toggle}
        />
        <canvas
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          onMouseMove={draw}
          ref={canvasRef}
          className="canvas"
          width={`1280px`}
          height={`720px`}
        />
      </div>
    </div>
  );
}
  
export default App;

//width={`1280px`}
//height={`720px`}