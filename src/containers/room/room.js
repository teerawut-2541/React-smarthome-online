import React from 'react'
import './room.css'
import BoxSwitch from '../../components/box-switch/box-switch'
export default function Bedroom() {
    return (
        <div className="bedroom-content">
            <div className="bedroom-content-grid">
                <div className="bedroom-content-switch">
                    <BoxSwitch/>
                </div>
            </div>
        </div>
    )
}
