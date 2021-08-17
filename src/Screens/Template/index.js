import Main from './Components/main';
import Title from './Components/title';
import Cardview from './Components/cardview';
import Products from '../../APIs/Products/products';



// BIEN SOLO FALTARIA NOMBRE APROPIADO ...
// PRODUCTs
const Template = props => {

 // AQUI DEBERIAMOS TENER METODOS IMPORTANTES COMO LLAMADOS A LA API

    return (
    <Main>
        <Title
            name="Productos"
        />
        <Cardview/>
        
        <Products
            index={4}
        />
        {// product deberia ser un componente en la carpeta componentes no en api //
        }
    </Main>
    
    );
}
// EXPORT PRODUCTs
export default Template;