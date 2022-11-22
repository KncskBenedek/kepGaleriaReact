import Kep from './kep/Kep.js';
import "./Galeria.css";
function Galeria(props) {
    function onKattKep(adat) {
        console.log(adat);
    }

    return(
       <div>
       {
        props.kepek.map((kep, index)=>{
            return(
            <Kep kep={kep} key={index} onKatt={onKattKep}/>
            )
        })
       }
            
       </div>
    )
}
export default Galeria;