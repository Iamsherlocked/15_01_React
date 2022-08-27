import React from 'react';

function ProductList({productList}) {
    return (
        <ul>
            {
                productList.length > 0
                ?
                productList.map((product, key)=><li key={key}>{product}</li>)
                    :
                    <li>Спсиок пуст</li>
            }

        </ul>
    );
}

export default ProductList;