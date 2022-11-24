import faq from '../Finbank __ Responsive HTML 5 Template_files/faq-style1__image.jpg';

function Questions(){
    return(
       <section className="faq-style1-area">
            <div className="container">

                <div className="row">
                    <div className="col-xl-12">
                        <div className="faq-style1-title">
                            <div className="sec-title">
                                <h2>Pilares</h2>
                                <div className="sub-title">
                                    <p>Saiba mais sobre nossos valores</p>
                                </div>
                            </div>
                  

                        </div>
                    </div>
                </div>

                <div className="row">

                    <div className="col-xl-6">
                        <div className="faq-style1__image">
                            <div className="inner">
                                <img src={faq} alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="faq-style1__content">
                            <ul className="accordion-box">

                                <li className="accordion block active-block">
                                    <div className="acc-btn active">
                                        <div className="icon-outer"><i className="icon-right-arrow"></i></div>
                                        <h3>Segurança</h3>
                                    </div>
                                    <div className="acc-content current">
                                        <p>Temos o melhor time trabalhando dia e noite para garantir a segurança dos seus Dados</p>
                                    </div>
                                </li>
                                <li className="accordion block">
                                    <div className="acc-btn">
                                        <div className="icon-outer"><i className="icon-right-arrow"></i></div>
                                        <h3>Inovação</h3>
                                    </div>
                                    <div className="acc-content">
                                        <p>Estamos sempre nos esforçando para dar a melhor experiência possível para nosso clientes</p>
                                    </div>
                                </li>
                                <li className="accordion block">
                                    <div className="acc-btn">
                                        <div className="icon-outer"><i className="icon-right-arrow"></i></div>
                                        <h3>Versatilidade</h3>
                                    </div>
                                    <div className="acc-content">
                                        <p>Aqui disponibilizamos nossos serviços para você através do nosso app e site.</p>
                                    </div>
                                </li>
                           

                            </ul>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-xl-12">
                        <div className="faq-style1-bottom-box text-center">
                         
                            <div className="btns-box">
                                <a className="btn-one" href="https://st.ourhtmldemo.com/new/finbank-demo/#">
                                    <span className="txt">Grab Your Deals</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
       
    );
}

export default Questions;