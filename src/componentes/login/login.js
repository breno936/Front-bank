import axios from "axios";
import {useState} from 'react'
import { useNavigate } from "react-router-dom";

function Login(){
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    let navigate = useNavigate();
    function logar(){
        
    console.log("chegou");
     const url = "http://127.0.0.1:8000/user/logar/";
        axios.post(url, {
            email:email,
            senha:senha,
        })
        .then(res => {
            localStorage.setItem("email",res.data[0].email);
            localStorage.setItem("logado",true);
            
            navigate("/");
        })
        .catch(err => console.log(err));
    }
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
            <div className="form-holder" style={{zIndex:'999'}}>
                <div className="form-content">
                    <div className="form-items">
                        <h3>Get more things done with Loggin platform.</h3>
                        <p>Access to the most powerfull tool in the entire design and web industry.</p>
               
                            <input className="form-control" value={email} onChange={e => setEmail(e.target.value)} type="text" name="username" placeholder="E-mail Address" required=""/>
                            <input className="form-control"  alue={senha} onChange={e => setSenha(e.target.value)} type="password" name="password" placeholder="Password" required=""/>
                            <div className="form-button">
                                <button onClick={logar} className="ibtn">Login</button> <a href="http://brandio.io/envato/iofrm/html/forget1.html">Forget password?</a>
                            </div>
                        
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

export default Login;