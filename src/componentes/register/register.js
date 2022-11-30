import image from '../formFiles/logo-light.svg'
import axios from "axios";
import {useState} from 'react'

function Register(){
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [nasc, setNasc] = useState();
    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState();

    function setName(event){
        setNome(event.target.value);
    }
    
    function setEmail(event){
        setEmail(event.target.value);
    }

    function setNasc(event){
        setNasc(event.target.value);       
    }

    function setPassword(event){
        setPassword(event.target.value);        
        setPassword2(event.target.value)
    }
    function registrar(){
    
        const url = "http://127.0.0.1:8000/user/user/";
           axios.post(url, {
               name:nome,
               email:email,
               data_nasc:nasc,
               hash_password:password,
               salt_password:password,
           })
           .then(res => console.log(res))
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
            <div className="form-holder">
                <div className="form-content">
                    <div className="form-items">
                        <h3>Get more things done with Loggin platform.</h3>
                        <p>Access to the most powerfull tool in the entire design and web industry.</p>
                    
                        <form>
                            <input className="form-control" onChange={this.setName}  type="text" name="name" placeholder="Full Name" required=""/>
                            <input className="form-control" onChange={this.setEmail} type="email" name="email" placeholder="E-mail Address" required=""/>
                            <input className="form-control" onChange={this.setPassword} type="password" name="password" placeholder="Password" required=""/>
                            <input className="form-control" onChange={this.setPassword} type="date" name="data" placeholder="Data de nascimento" required=""/>
                            <div className="form-button">
                                <button id="submit" type="submit" onClick={registrar} className="ibtn">Register</button>
                            </div>
                        </form>
                 
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}

export default Register;