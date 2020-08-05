import React from 'react'


const SelectInput = ({title,value, data, name, onFilter,item_value,item_type}) => {

    const toCurrency = (price) => {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1, ')
    }

    

    const onHandler = (s) => {
        const {name, value} = s.target;
        onFilter(name, value)
    }

    return (
        <div className="mt-2">
            <div className="label">{title}</div>
                <select name={name} value={value} onChange={onHandler}>
                {!(name === "to" || name === "from") && <option selected value="">Any</option>}
                    {data.map((item, index) =>(  
                        <option key={index} value={item_value ? item[item_value] : item }>
                            {item_type ? item[item_type] : toCurrency(item) }
                        </option>
                    ))}
                </select>
        </div>
    )
}

export default SelectInput;
