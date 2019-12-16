import React, {useState} from 'react';
import CheckBox from './CheckBox';

import data from './data';

const CheckBoxList = () => {

    const [checkboxList, setCheckboxList] = useState(data);

    const checkChilden = (items, ckecked) => {
        items.map(child => child.checked = ckecked);
    }

    const handleChange = itemSelected => {
        const newList = [...checkboxList];

        newList.map(item => {
            if(item.id === itemSelected.id) {
                item.checked = !item.checked;
                if(item.children) {
                    checkChilden(item.children, item.checked);
                }
            }
            if(item.children) {
                item.children.map(child => {
                    if(child.id === itemSelected.id) {
                        child.checked = !child.checked;
                    }
                });
            }
        });
        setCheckboxList(newList);
    }

    const renderCheckBox = item => (
        <CheckBox
            key={item.id}
            item={item}
            handleChange={() => handleChange(item)}
        />
    );

    const renderCheckboxList = list => {
        return list.map(item => {
            const children = item.children;

            if(children) {
                return [
                    renderCheckBox(item),
                    children.map(child => (
                        renderCheckBox(child)
                    ))
                ]
            }
            else {
                return renderCheckBox(item)
            }
        });
    }

    return (
        <>
            <h1>CheckBoxList</h1>
            { renderCheckboxList(checkboxList)}
        </>
    );
}
 
export default CheckBoxList;