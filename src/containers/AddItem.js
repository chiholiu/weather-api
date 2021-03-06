import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';

const AddItem = ({ dispatch }) => {
    let input;

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()

                if (!input.value.trim()) {
                    return;
                }

                dispatch(addItem(input.value))
                input.value = "";
                console.log(input.value);
                }}> 
                <input type="text" ref={node => (input = node)}/>
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default connect()(AddItem);