import styles from './Form.module.css'

export function Form() {
    return (
        <div className={styles.form}>
            <form action="#">
                <h2>Quero vender no Pigz</h2>
                <p>Dê o primeiro passo para aumentar suas vendas</p>

                <div>
                    <label>{'title'}</label>
                    <input
                        type={'type'}
                        placeholder={'Leonercio Goesfeeld'}
                    />
                </div>
                <div>
                    <label htmlFor="">E-mail</label>
                    <input
                        type={'email'}
                        placeholder={'leonercio.goesfeeld@email.com'}
                    />
                </div>
                <div>
                    <label htmlFor="">Telefone</label>
                    <input
                        type={'text'}
                        placeholder={'(95) 99876-5432'}
                    />
                </div>
                <span>Ao continuar, aceito que a Pigz entre em contato comigo por telefone, e-mail ou WhatsApp.</span>
                <div>
                    <button>Continuar</button>
                </div>
            </form>
        </div>
    );
}