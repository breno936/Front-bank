import image from '../formFiles/logo-light.svg'
import axios from "axios";
import {useState} from 'react'

function Register(){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [nasc, setNasc] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

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
          
                <div className="logo">
                    <img className="logo-size" src="./iofrm_files/logo-light.svg" alt=""/>
                </div>
           
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
                    
                      
                            <input className="form-control" value={nome} onChange={e => setNome(e.target.value)}  type="text" name="name" placeholder="Full Name" required=""/>
                            <input className="form-control" value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" placeholder="E-mail Address" required=""/>
                            <input className="form-control" value={password} onChange={e => {setPassword(e.target.value); setPassword2(e.target.value)}} type="password" name="password" placeholder="Password" required=""/>
                            <input className="form-control" value={nasc} onChange={e => setNasc(e.target.value)} type="date" name="data" placeholder="Data de nascimento" required=""/>
                            <div className="form-button">
                                <button id="submit" onClick={registrar} className="ibtn">Register</button>
                            </div>
                  
                 
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}

export default Register;