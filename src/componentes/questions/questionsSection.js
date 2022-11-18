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
                            <div className="faq-search-box">
                                <h3>Help You to Find</h3>
                                <div className="faq-search-box__inner">
                                    <form className="search-form" action="https://st.ourhtmldemo.com/new/finbank-demo/#">
                                        <input placeholder="Related Keyword..." type="text"/>
                                        <button type="submit">
                                            <i className="icon-search"></i>
                                        </button>
                                    </form>
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
                                        <h3>What is the minimum balance?</h3>
                                    </div>
                                    <div className="acc-content current">
                                        <p>Rationally encounter consequences that are extremely painful again
                                            there anyone who loves or pursues desire.</p>
                                    </div>
                                </li>
                                <li className="accordion block">
                                    <div className="acc-btn">
                                        <div className="icon-outer"><i className="icon-right-arrow"></i></div>
                                        <h3>What is the rate of interest?</h3>
                                    </div>
                                    <div className="acc-content">
                                        <p>Rationally encounter consequences that are extremely painful again
                                            there anyone who loves or pursues desire.</p>
                                    </div>
                                </li>
                                <li className="accordion block">
                                    <div className="acc-btn">
                                        <div className="icon-outer"><i className="icon-right-arrow"></i></div>
                                        <h3>When will I receive my account statement?</h3>
                                    </div>
                                    <div className="acc-content">
                                        <p>Rationally encounter consequences that are extremely painful again
                                            there anyone who loves or pursues desire.</p>
                                    </div>
                                </li>
                                <li className="accordion block">
                                    <div className="acc-btn">
                                        <div className="icon-outer"><i className="icon-right-arrow"></i></div>
                                        <h3>Can I use any branch across India?</h3>
                                    </div>
                                    <div className="acc-content">
                                        <p>Rationally encounter consequences that are extremely painful again
                                            there anyone who loves or pursues desire.</p>
                                    </div>
                                </li>
                                <li className="accordion block">
                                    <div className="acc-btn">
                                        <div className="icon-outer"><i className="icon-right-arrow"></i></div>
                                        <h3>How safe/secure is our net banking a/c?</h3>
                                    </div>
                                    <div className="acc-content">
                                        <p>Rationally encounter consequences that are extremely painful again
                                            there anyone who loves or pursues desire.</p>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-xl-12">
                        <div className="faq-style1-bottom-box text-center">
                            <p>Didn’t get, Click below button to more anwers or <a href="https://st.ourhtmldemo.com/new/finbank-demo/#">contact us.</a></p>
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