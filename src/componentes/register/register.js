import image from '../formFiles/logo-light.svg'

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
                    
                        <form>
                            <input className="form-control" type="text" name="name" placeholder="Full Name" required=""/>
                            <input className="form-control" type="email" name="email" placeholder="E-mail Address" required=""/>
                            <input className="form-control" type="password" name="password" placeholder="Password" required=""/>
                            <div className="form-button">
                                <button id="submit" type="submit" className="ibtn">Register</button>
                            </div>
                        </form>
                        <div className="other-links">
                            <span>Or register with</span><a href="http://brandio.io/envato/iofrm/html/register1.html#">Facebook</a><a href="http://brandio.io/envato/iofrm/html/register1.html#">Google</a><a href="http://brandio.io/envato/iofrm/html/register1.html#">Linkedin</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}

export default Register;