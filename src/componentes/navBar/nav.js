import logo1 from '../arquivos/logo-1.png'
import {Link} from 'react-router-dom'
function nav() {
  return (
    <>
    <header className="main-header main-header-style1">

 

    <nav className="main-menu main-menu-style1">
        <div className="main-menu__wrapper clearfix">
            <div className="container">
                <div className="main-menu__wrapper-inner">

                    <div className="main-menu-style1-left">
                     

                        <div className="main-menu-box">
                            {/* <a href="https://st.ourhtmldemo.com/new/finbank-demo/#" className="mobile-nav__toggler">
                                <i className="icon-menu"></i>
                            </a> */}

                            <ul className="main-menu__list">
                                <li className="dropdown megamenu current">
                                    <Link to="/"> Home</Link>
                                </li>
                                <li className="dropdown">
                                    <a href="#servicos">Serviços</a>
                                </li>
                                <li className="dropdown">
                                <Link to="/profile">Sua conta</Link>
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
