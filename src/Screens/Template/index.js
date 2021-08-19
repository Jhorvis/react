import Main from './Components/main';
import Title from './Components/title';
import Cardview from './Components/cardview';

const Template = props => {

    return (
    <Main>
        <Title
            name="Productos"
        />
        <Cardview/>
    </Main>
    
    );
}
export default Template;