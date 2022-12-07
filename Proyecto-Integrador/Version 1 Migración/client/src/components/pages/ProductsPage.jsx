import React from 'react';
import QuestionAndAnswer from '../essential-components/QuestionAndAnswer';
import FilterProductsAndSearch from '../products-components/FilterProductsAndSearch';

function ProductsPage() {
    return (
        <>
            <FilterProductsAndSearch />
            <QuestionAndAnswer />
        </>
    );
}

export default ProductsPage;
