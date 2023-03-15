    import React from 'react'

    const InputItem = (
                        {
                            label,
                            value,
                            type,
                            name,
                            onChange
                            
                        }
                    ) => {
    return (
        
        <div className='input-item'>
            <div>
            <label>{label}</label>
            </div>
            <input 
                type        = {type} 
                value       = {value} 
                name        = {name}
                onChange    = {onChange}
            />        
        </div>
    )
    }

    export default InputItem