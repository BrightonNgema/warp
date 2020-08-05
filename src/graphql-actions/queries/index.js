import { gql } from 'apollo-boost';

const ALL_VEHICLES = gql`
    query{
        allVehicles{
        id
        manufacturer
        model
        body
        wiki
        img
        price
        }
    }
`;

const A_VEHICLES = gql`
    query($id: ID){
        aVehicles(id:$id){
        id
        manufacturer
        model
        body
        wiki
        img
        price
        }
    }
`;


export {ALL_VEHICLES,A_VEHICLES }