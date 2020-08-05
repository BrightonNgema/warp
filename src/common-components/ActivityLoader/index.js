import React from 'react'
import  Loader from 'react-loader-spinner';
const ActivityLoader = () => {
    return (
        <div style={{height:'100vh',flexDirection:'row', display:'flex', backgroundColor:'#1E1E1E'}}>
            <div style={{margin:'auto'}}>
                <Loader
                    type="Puff"
                    color="red"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                />
            </div>
        </div>
    )
}

export default ActivityLoader;
