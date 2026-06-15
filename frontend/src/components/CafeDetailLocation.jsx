import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const CafeDetailLocation = () => {
    return (
        <div className='cafe-detail-location'>
            <div className="cafe-location-left">
                <p className='text-revealing-location'>Location</p>
            </div>
            <div className="cafe-location-right">
                <MapContainer
    center={[18.5204, 73.8567]}
    zoom={13}
    style={{ height: "100vh", width: "100%" }}
>
                    <TileLayer
                        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[18.5204, 73.8567]}>
                        <Popup>Cafe Name</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div >
    )
}

export default CafeDetailLocation