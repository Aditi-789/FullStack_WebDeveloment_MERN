import { useState } from 'react';
import './ProductForm.css'

function ProductForm(props){
    const [newTitle,setTitle] = useState('');
    const [newDate,setDate] = useState('');

    function titleChangeHandler(event){
        setTitle(event.target.value);
        console.log(event.target.value);
    }

    function dateChangeHandler(event){
        setDate(event.target.value);
        console.log(event.target.value);
    }

    function submitChangeHandler(event){
        event.preventDefault();

        const ProductData={
            title:newTitle,
            date:newDate
        };

        // console.log(ProductData);
        props.onSaveProduct(ProductData);

        setTitle('');
        setDate('');
    }

    return(<form onSubmit={submitChangeHandler}>
        <div className='new-product_title'>
            <label>Title</label>
            <input type='text' value={newTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className='new-product_date'>
            <label>Date</label>
            <input type='date' value={newDate} min='2025-01-01' max='2025-12-12' onChange={dateChangeHandler}></input>
        </div>
        <div className='new-product_button'>
            <button type='submit'>Add Product</button>
        </div>
    </form>
    )
}

export default ProductForm;