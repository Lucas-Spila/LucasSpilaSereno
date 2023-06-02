import styles from '../layout/Login.module.css'
import perfilregistro from '../../assets/Perfil1.png'
import logo from '../../assets/HS-ICON.png'
import LoginForm from '../LoginFormulario/LoginForm'

function Login() {

    return(
     <>
        <div className={styles.Login_container} >
            <h1><img src={logo} alt="HS-ICON"/>HubServis</h1>
            <h2>Entrar</h2>
            <p>Bem vindo de volta! Por favor, insira seus dados</p>
            <LoginForm />

            
            
        </div>

        <div className={styles.Background_container}>
          <img src={perfilregistro} alt="perfil"/>
        </div>
     </>
    )


}

export default Login