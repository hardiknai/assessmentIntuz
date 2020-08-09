import { connect } from 'react-redux';
import ProductList from '../components/ProductList';
import { getProducts } from '../redux/actions/productAction';

const mapStateToProps = ({products}) => {
    return {
        products: products
    }
}

export default connect(mapStateToProps,{ getProducts})(ProductList);
