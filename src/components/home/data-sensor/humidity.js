import React from 'react'
import Box from '../../box-data/box'
import Humi from '../../../assets/humidity.svg'
function Humidity() {
    return (
        <div>
            <Box icon={Humi} title="Humidity" value="20"/>
        </div>
    )
}

export default Humidity
