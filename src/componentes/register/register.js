function Register(){
    return(
        <div className="form-body">
        <div className="website-logo">
            <a href="http://brandio.io/envato/iofrm/html/index.html">
                <div className="logo">
                    <img className="logo-size" src="./iofrm_files/logo-light.svg" alt=""/>
                </div>
            </a>
        </div>
        <div className="row">
            <div className="img-holder">
                <div className="bg"></div>
                <div className="info-holder">

                </div>
            </div>
            <div className="form-holder">
                <div className="form-content">
                    <div className="form-items">
                        <h3>Get more things done with Loggin platform.</h3>
                        <p>Access to the most powerfull tool in the entire design and web industry.</p>
                        <div className="page-links">
                            <a href="http://brandio.io/envato/iofrm/html/login1.html" className="active">Login</a><a href="http://brandio.io/envato/iofrm/html/register1.html">Register</a>
                        </div>
                        <form>
                            <input className="form-control" type="text" name="username" placeholder="E-mail Address" required=""/>
                            <input className="form-control" type="password" name="password" placeholder="Password" required=""/>
                            <div className="form-button">
                                <button id="submit" type="submit" className="ibtn">Login</button> <a href="http://brandio.io/envato/iofrm/html/forget1.html">Forget password?</a>
                            </div>
                        </form>
                        <div className="other-links">
                            <span>Or login with</span><a href="http://brandio.io/envato/iofrm/html/login1.html#">Facebook</a><a href="http://brandio.io/envato/iofrm/html/login1.html#">Google</a><a href="http://brandio.io/envato/iofrm/html/login1.html#">Linkedin</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Register;