import './NotchedBtn.css'
function NotchedBtn({ text ,bgColor, fontSize, color,padding,bgImage  }) {
    return (
      <div className='first'>
      <div className='notched'>
        <div className='notchedSec'>
      
        <div     className="NotchedBtn"
      style={{
        backgroundColor: bgColor,
        fontSize: fontSize,
        color:color,
        backgroundImage:bgImage,

      }}> {text}  </div></div>
      </div></div>
    );
  }
  
  export default NotchedBtn;
