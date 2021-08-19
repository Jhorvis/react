import Main from './Components/main';
import Title from './Components/title';
import Cardview from './Components/cardview';
import Products from '../../APIs/Products/products';

const Template = props => {

    return (
    <Main>
        <Title
            name="Productos"
        />
        <Cardview/>
        <Products />
    </Main>
    
    );
}
export default Template;