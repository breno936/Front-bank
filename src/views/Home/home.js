import Slider from '../../componentes/slider/slider';
import Services from '../../componentes/services/services';
import Questions from '../../componentes/questions/questionsSection';
import Nav from '../../componentes/navBar/nav';
import Footer from '../../componentes/footer/footer';

function Home(){
    return(
        <>
        <Nav/>
        <Slider/>
        <Services/>
        <Questions/>
        <Footer/>
        </>
    );
}

export default Home;