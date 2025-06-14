import './NewProduct.css';
import ProductForm from './ProductForm';

function NewProduct(props){
    function saveProduct(product){
        console.log("I am inside New Product");
        console.log(product);
        props.onPrintProduct(product);
    }

    return(
        <div className='new-product'>
            <ProductForm onSaveProduct={saveProduct}/>
        </div>
    )
}

export default NewProduct;