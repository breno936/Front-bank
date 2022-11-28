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
                            <h2>Get Support for<br/> any Queries or Complaints</h2>
                            <p>Committed to helping you meet all your banking needs.</p>
                        </div>

                        <ul className="contact-info-1">
                            <li>
                                <div className="icon">
                                    <span className="icon-map"></span>
                                </div>
                                <div className="text">
                                    <p>Corporate Office</p>
                                    <h3>141, First Floor, 12 St RootsTerrace,<br/>
                                        Los Angeles USA 90010.</h3>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <span className="icon-clock"></span>
                                </div>
                                <div className="text">
                                    <p>Office Hours</p>
                                    <h3>Mon - Fri: 9.00am to 5.00pm</h3>
                                    <span>[2nd Sat Holiday]</span>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <span className="icon-phone"></span>
                                </div>
                                <div className="text">
                                    <p>Front Desk</p>
                                    <h3><a href="tel:123456789">+61 3 8376 6284</a></h3>
                                    <h3><a href="mailto:yourmail@email.com">supportyou@finbank.com</a></h3>
                                </div>
                            </li>
                        </ul>

                        <div className="bottom-box">
                            <div className="btn-box">
                                <a href="https://st.ourhtmldemo.com/new/finbank-demo/contact.html#"><i className="fas fa-arrow-down"></i> Customer Care</a>
                            </div>
                            <div className="footer-social-link-style1">
                                <ul className="clearfix">
                                    <li>
                                        <a href="https://st.ourhtmldemo.com/new/finbank-demo/contact.html#">
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://st.ourhtmldemo.com/new/finbank-demo/contact.html#">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://st.ourhtmldemo.com/new/finbank-demo/contact.html#">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://st.ourhtmldemo.com/new/finbank-demo/contact.html#">
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
                        <form id="contact-form" name="contact_form" className="default-form2" action="https://st.ourhtmldemo.com/new/finbank-demo/assets/inc/sendmail.php" method="post" novalidate="novalidate">

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
                                <button className="btn-one" type="submit" data-loading-text="Por favor espere...">
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