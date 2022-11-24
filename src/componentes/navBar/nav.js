import logo1 from '../Finbank __ Responsive HTML 5 Template_files/logo-1.png'
import {Link} from 'react-router-dom'
function nav() {
  return (
    <>
    <header className="main-header main-header-style1">

    {/*Start Main Header Style1 Top*/}
    <div className="main-header-style1-top">
        <div className="auto-container">
            <div className="outer-box">
                {/*Start Main Header Style1 Top Left*/}
                <div className="main-header-style1-top__left">
                    <div className="looking-banking-box ">
                        <div className="inner-title">
                            <span className="icon-binoculars"></span>
                            <p>Looking</p>
                        </div>
                        <div className="select-box clearfix">
                            <select className="wide" style={{display:"none"}}>
                                <option data-display="Personal Banking">
                                    Personal Banking
                                </option>
                                <option value="1">Business Banking</option>
                                <option value="2">Personal Banking 01</option>
                                <option value="3">Personal Banking 02</option>
                                <option value="4">Personal Banking 03</option>
                            </select><div className="nice-select wide" tabIndex="0"><span className="current">Personal Banking</span><ul className="list"><li data-value="Personal Banking" data-display="Personal Banking" className="option selected">
                                    Personal Banking
                                </li><li data-value="1" className="option">Business Banking</li><li data-value="2" className="option">Personal Banking 01</li><li data-value="3" className="option">Personal Banking 02</li><li data-value="4" className="option">Personal Banking 03</li></ul></div>
                        </div>
                    </div>
                    <div className="nearest-branch">
                        <span className="icon-map"></span>
                        <a href="https://st.ourhtmldemo.com/new/finbank-demo/#">Find Nearest Branch</a>
                    </div>
                </div>
                {/*End Main Header Style1 Top Left*/}

                {/*Start Main Header Style1 Top Right*/}
                <div className="main-header-style1-top__right">
                    <div className="header-menu-style1">
                        <ul>
                            <li><a href="https://st.ourhtmldemo.com/new/finbank-demo/#">Careers</a></li>
                            <li><a href="https://st.ourhtmldemo.com/new/finbank-demo/#">Faq’s</a></li>
                            <li><a href="https://st.ourhtmldemo.com/new/finbank-demo/#">Offers</a></li>
                            <li><a href="https://st.ourhtmldemo.com/new/finbank-demo/#">Calendar</a></li>
                        </ul>
                    </div>
                    <div className="box-search-style1">
                        <a href="https://st.ourhtmldemo.com/new/finbank-demo/#" className="search-toggler">
                            <span className="icon-search"></span>
                            Search
                        </a>
                    </div>
                  
                </div>
                {/*End Main Header Style1 Top Right*/}

            </div>
        </div>
    </div>
    {/*End Main Header Style1 Top*/}

    <nav className="main-menu main-menu-style1">
        <div className="main-menu__wrapper clearfix">
            <div className="container">
                <div className="main-menu__wrapper-inner">

                    <div className="main-menu-style1-left">
                        <div className="logo-box-style1">
                            <a href="https://st.ourhtmldemo.com/new/finbank-demo/index.html">
                                <img src={logo1} alt="Awesome Logo" title=""/>
                            </a>
                        </div>

                        <div className="main-menu-box">
                            <a href="https://st.ourhtmldemo.com/new/finbank-demo/#" className="mobile-nav__toggler">
                                <i className="icon-menu"></i>
                            </a>

                            <ul className="main-menu__list">
                                <li className="dropdown megamenu current">
                                    <a href="https://st.ourhtmldemo.com/new/finbank-demo/index.html">Home</a>
                                </li>
                                <li className="dropdown">
                                    <a href="https://st.ourhtmldemo.com/new/finbank-demo/#">Serviços</a>
                                </li>
                                <li className="dropdown">
                                    <a href="https://st.ourhtmldemo.com/new/finbank-demo/#">Sua conta</a>
                                </li>
                                <li className="dropdown">
                                    <a href="https://st.ourhtmldemo.com/new/finbank-demo/#">Sobre</a>
                                </li>
                                <li>
                                    <a href="https://st.ourhtmldemo.com/new/finbank-demo/contact.html">Contato</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="main-menu-style1-right">
                        <div className="header-btn-one">
                            <Link to="/login">
                                <span className="icon-home-button"></span>Login
                            </Link>
                            <Link className="style2" to="/register">
                                <span className="icon-payment"></span>Abra sua conta
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </nav>

    {/*Start Main Header Style1 Bottom*/}
    <div className="main-header-style1-bottom">
        <div className="auto-container">
            <div className="outer-box">
                <div className="update-box">
                    <div className="inner-title">
                        <span className="icon-megaphone"></span>
                        <h4> </h4>
                    </div>
                    {/* <div className="text">
                        <p>Get upto 4%* on our Savings Account Balances with Finbank.</p>
                        <a href="https://st.ourhtmldemo.com/new/finbank-demo/#"><span className="icon-chevron"></span>More Details</a>
                    </div> */}
                </div>
                {/* <div className="slogan-box">
                    <p>Dear Customer, We have launched Video KYC facility for New customer to open savings ac
                    </p>
                </div> */}
            </div>
        </div>
    </div>
    {/*End Main Header Style1 Bottom*/}

</header>


{/* <div className="stricky-header stricked-menu main-menu stricky-fixed">
    <div className="sticky-header__content">
        <div className="main-menu__wrapper clearfix">
            <div className="container">
                <div className="main-menu__wrapper-inner">

                    <div className="main-menu-style1-left">
                        <div className="logo-box-style1">
                            <a href="https://st.ourhtmldemo.com/new/finbank-demo/index.html">
                                <img src="./Finbank __ Responsive HTML 5 Template_files/logo-1.png" alt="Awesome Logo" title=""/>
                            </a>
                        </div>

                        <div className="main-menu-box">
                            <a href="https://st.ourhtmldemo.com/new/finbank-demo/#" className="mobile-nav__toggler">
                                <i className="icon-menu"></i>
                            </a>

                            <ul className="main-menu__list">
                                <li className="dropdown megamenu current">
                                    <a href="https://st.ourhtmldemo.com/new/finbank-demo/index.html">Home</a>
                                </li>

                                <li className="dropdown">
                                    <a href="https://st.ourhtmldemo.com/new/finbank-demo/#">Serviços</a>
                                </li>
                                <li className="dropdown">
                                    <a href="https://st.ourhtmldemo.com/new/finbank-demo/#">Sua conta</a>
                                </li>
                                <li className="dropdown">
                                    <a href="https://st.ourhtmldemo.com/new/finbank-demo/#">Sobre</a>
                                </li>
                                <li>
                                    <a href="https://st.ourhtmldemo.com/new/finbank-demo/contact.html">Contato</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="main-menu-style1-right">
                        <div className="header-btn-one">
                            <a href="https://st.ourhtmldemo.com/new/finbank-demo/#">
                                <span className="icon-home-button"></span>Login
                            </a>
                            <a className="style2" href="https://st.ourhtmldemo.com/new/finbank-demo/#">
                                <span className="icon-payment"></span>Abra sua conta
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>  */}
</>
  );
}

export default nav;
