import React, { Component } from 'react'
import { withApollo } from 'react-apollo';
import { queries } from 'graphql-actions';
import VehicleList from './VehicleList';
import { ActivityLoader,Navigation } from 'common-components';
import Filter from './Filter';



class Home extends Component {
    state = {
        vehicles : [],
        filteredVehicles:[],
        loading:true,
        manufacturer:'',
        body:'',
        from:0,
        to:10000000
    }
    componentWillMount() {
        this.fetchVehicles() 
    }

    fetchVehicles = async (event) => {
        try {
            const res = await this.props.client.query({
                query: queries.ALL_VEHICLES,
            })
           
            return this.setState({
                vehicles:res.data.allVehicles,
                filteredVehicles:res.data.allVehicles,
                loading:false
            })
        } catch (error) {
            // return alert("Please check your internet connection")
        }
    }
    handleChange = (name, value) => {
        this.setState({[name]:value}, () => {
            this.filterVehicles()
        })
    }

    filterVehicles = () => {
        const  {body,manufacturer, from , to} = this.state
        const vehicles = this.state.vehicles.filter((i) => {
            return i.body.includes(body) 
            && i.manufacturer.includes(manufacturer)
            && (i.price > from && i.price < to)
        })
        this.setState({filteredVehicles:vehicles})
    }

    render() {
        if(this.state.loading) return <ActivityLoader />
        return (
            <div style={{backgroundColor:'#f5f5f5', minHeight:'100vh'}}>
                <Navigation />
                <div className="container" style={{paddingTop:100}}>
                    <div className="row">
                        <Filter 
                            state={this.state}
                            onFilter={this.handleChange}
                        />
                        <div className="col-md-8">
                            {this.state.filteredVehicles.length < 1 && (
                                <div style={{flexDirection:'column', display:'flex', minHeight:'80vh'}}>
                                    <div style={{color:'red',margin:'auto'}}><h1>No Vehicles Found...</h1></div>
                                </div>
                            )}
                            <VehicleList data={this.state.filteredVehicles}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default withApollo(Home)