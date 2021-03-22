import React from 'react'
import Box from '../../box-data/box'
import Pm from '../../../assets/pm25.svg'
export default function Pm10() {
    return (
        <div>
            <Box icon={Pm} title="Pm10" value="20"/>
        </div>
    )
}
