import React from 'react'
import Box from '../../box-data/box'
import Pm from '../../../assets/pm25.svg'
export default function Pm25() {
    return (
        <div>
            <Box icon={Pm} title="Pm25" value="20"/>
        </div>
    )
}
