import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const CheckBox = ({item, handleChange}) => {

    const renderCheckbox = item => (
        <>
            <label>{item.label}</label>
            <Checkbox
                checked={item.checked}
                onChange={handleChange}
                value={item.value}
                color="primary"
            />
        </>
    );
 
    return renderCheckbox(item)
    
}
 
export default CheckBox;