import React from 'react'
import { SelectInput } from 'common-components'
import { filterPrices } from '../../utils/filterPrices';

const Filter = ({state, onFilter}) => {
    const removeDuplicates = (arr, value) =>{
        const unique =  arr.map(e => e[value])
            .map((e, i, final) => final.indexOf(e) === i && i)
            .filter((e) => arr[e]).map(e => arr[e]);
            return unique;
    }

    return (
        <div className="col-md-4"style={{position:'relative'}}>
                            <div style={{ width:'100%', position:'sticky', top:100, borderRadius:5, padding:20, paddingTop:0}}>
                               <SelectInput 
                                    title="Manufacturer"
                                    name="manufacturer"
                                    value={state.manufacturer}
                                    data={removeDuplicates(state.vehicles, 'manufacturer')}
                                    onFilter={(value, name) =>  onFilter(value,name )}
                                    item_value="manufacturer"
                                    item_type="manufacturer"
                               />
                                <SelectInput 
                                    title="Body Style"
                                    name="body"
                                    value={state.body}
                                    data={removeDuplicates(state.vehicles, 'body')}
                                    onFilter={(value, name) =>  onFilter(value,name )}
                                    item_value="body"
                                    item_type="body"
                               />
                               <div className="mt-4">
                                    <div className="label">Price Range</div>
                                    <SelectInput 
                                        title="From"
                                        name="from"
                                        value={state.from}
                                        data={filterPrices}
                                        onFilter={(value, name) =>  onFilter(value,name)}
                                    />
                                    <SelectInput 
                                        title="to"
                                        name="to"
                                        value={state.to}
                                        data={filterPrices.filter((item) => item >= state.from)}
                                        onFilter={(value, name) =>  onFilter(value,name)}
                                    />
                               </div>

                            </div>
                        </div>
    )
}

export default Filter
