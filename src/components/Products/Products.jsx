import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';

const products = [
    {   id: 1, name: 'Shoes', description: 'Running shoes.', price: '129€', image: "https://images.dsw.com/is/image/DSWShoes/460643_002_ss_01?$colpg$" },
    {   id: 2, name: 'Macbook', description: 'Apple Macbook', price: '600€', image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp13touch-space-select-202005_GEO_EMEA_LANG_DE?wid=892&hei=820&&qlt=80&.v=1587460009821" }
];

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>    
                    </Grid>
                ))}
            </Grid>
        </main>
    );

}

export default Products;
