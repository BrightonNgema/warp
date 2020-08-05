import React from 'react'
import VehicleCard from './VehicleCard';

const VehicleList = ({data}) => {
    return data.map((item) => {
            return (
                <VehicleCard key={item.id} item={item}/>
            )
    })
}

export default VehicleList
