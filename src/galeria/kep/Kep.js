import "./Kep.css"
function Kep(props) {
    function katt(){
        
        props.onKatt(props.kep.cim);
    }
  return (
    <div className="kep">
      <div>
        <img src={props.kep.src}  onClick={katt}></img>
      </div>
      <div>
        <h3>{props.kep.cim}</h3>
      </div>
    </div>
  );
}

export default Kep;
