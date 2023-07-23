import '../App.css';
function Header(props) {
    return (
      <div className='flex shopping-card'>
        <div onClick={()=>props.handleShow(false)}><button style={{color:'black'}}>Fashion World Store</button></div>
        <div onClick={()=>props.handleShow(true)}><button style={{color:'black'}}>CART</button>
            <sup>{props.count}</sup>
        </div>
      </div>
    );
  }
  
  export default Header;
  