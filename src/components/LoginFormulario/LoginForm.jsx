import SubmitButton from '../Form/SubmitButton'
import Input from '../Form/input'
 
import styles from './LoginForm.module.css'

function LoginForm({btnText}) {
    return(
       <form className={styles.form}>
          <div className={styles.Text1}>
            <Input type="text" text="Seu Email" placeholder="Ex: LoremIpslum@???.com" name="name" />
          </div>
          <div className={styles.Text2}>
          <Input type="number" text="Sua Senha" placeholder="************" name="number" />
          </div>
          <div className={styles.formText}>
            <label><input type="checkbox" /> Lembrar-me por 30 dias</label>
            <a href="#">Esqueci minha Senha</a>
          </div>
          <SubmitButton text={btnText} />

          <div className={styles.Formsp}>
            <p>Não tem uma conta? <a href="#">registre-se</a></p>
          </div>
       </form>
    )
}

export default LoginForm