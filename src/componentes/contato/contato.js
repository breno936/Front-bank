import Nav from '../../componentes/navBar/nav';
import Footer from '../../componentes/footer/footer';

function Contato() {
    return (
        <>
        <Nav/>
        <section className="main-contact-form-area">
        <div className="container">
            <div className="row">

                <div className="col-xl-6">
                    <div className="contact-info-box-style1">
                        <div className="box1"></div>
                        <div className="title">
                            <h2>Suporte</h2>
                            <p>Entre em contato conosco</p>
                        </div>

                       

                        <div className="bottom-box">
                   
                            <div className="footer-social-link-style1">
                                <ul className="clearfix">
                                    <li>
                                        <a>
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="col-xl-6">
                    <div className="contact-form">
                        <form id="contact-form" name="contact_form" className="default-form2" >

                            <div className="form-group">
                                <label>Nome</label>
                                <div className="input-box">
                                    <input type="text" name="form_name" id="formName" placeholder="xxxxxx" required="" aria-required="true"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <div className="input-box">
                                    <input type="email" name="form_email" id="formEmail" placeholder="" required="" aria-required="true"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Telefone</label>
                                <div className="input-box">
                                    <input type="text" name="form_phone" value="" id="formPhone" placeholder=""/>
                                </div>
                            </div>


                            <div className="form-group">
                                <label>Mensagem</label>
                                <div className="input-box">
                                    <textarea name="form_message" id="formMessage" placeholder="" required="" aria-required="true"></textarea>
                                </div>
                            </div>

                            <div className="button-box">
                                <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" value=""/>
                                <button className="btn-one" data-loading-text="Por favor espere...">
                                    <span className="txt">
                                        Enviar
                                    </span>
                                </button>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <Footer/>
    </>
    );
  }

  export default Contato;