import React,{useState} from 'react'
import './switch.css'
import Lamp from '../../assets/lamp.svg'
function Switch() {
    const [checkSwitch, setCheckSwitch] = useState(false)
    const handleChange =()=>{
        setCheckSwitch(checkSwitch?false:true)
        console.log(checkSwitch)
    }

    return (
            <div className="box-switch-on-off" style={{background:`${checkSwitch?'cornflowerblue':'#fff'}`}} onClick={handleChange}>
                <div className="box-switch-icon">
                    <img src={Lamp} alt="Lamp" className="switch-icon"/>
                </div>
            </div>
    )
}

export default Switch
