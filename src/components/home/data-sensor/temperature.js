import React from 'react'
import Box from '../../box-data/box'
import Temp from '../../../assets/temp.svg'
export default function temperature() {
    return (
        <div>
            <Box icon={Temp} title="temperature" value="20"/>
        </div>
    )
}
