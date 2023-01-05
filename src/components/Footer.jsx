import styles from './Footer.module.css'

import imgWhatsapp from '../assets/icon-whatsapp.svg'
import imgPigzLogoGray from '../assets/pigz-logo-gray.svg'
import imgAppStore from '../assets/selo-app-store.svg'
import imgGooglePlay from '../assets/selo-google-play.svg'
import imgContact from '../assets/contact.svg'
import imgLinkedin from '../assets/linkedin.svg'
import imgInstagram from '../assets/instagram.svg'
import imgFacebook from '../assets/facebook.svg'
import imgYoutube from '../assets/youtube.svg'
import imgLogoOrange from '../assets/logo-orange.svg'

export function Footer() {
    return (
        <>
            <header className={styles.headerFooter}>
                <p>Fale com a Pigz</p>
                <img src={imgWhatsapp} alt={'Logo do whatsapp'} />
                <p><span>95</span>3224-2603</p>
            </header>
            <div className={styles.globalFooter}>
                <div className={styles.contentFooter}>
                    <img src={imgPigzLogoGray} alt="Loga da Pigz na cor cinza" />
                    <p>Tudo que você precisa.</p>
                </div>

                <div className={styles.appFooter}>
                    <p>Baixe o App</p>
                    <div>
                        <img src={imgAppStore} alt="Selo da Apple Store" />
                        <img src={imgGooglePlay} alt="Selo da Google Play" />
                    </div>
                </div>

                <div className={styles.aboutFooter}>
                    <h4>Pigz</h4>
                    <ul>
                        <li><a href="#">Sobre o Pigz</a></li>
                        <li><a href="#">Portal do Parceiro</a></li>
                        <li><a href="#">Quero ser um Pigz Partner</a></li>
                    </ul>
                </div>

                <div className={styles.contactFooter}>
                    <div>
                        <img src={imgContact} alt="Icone de fone de ouvido e micronofone que representa o contato da empresa" />
                        <h4>Fale conosco</h4>
                    </div>
                    <ul>
                        <li><a href="#">falecom@pigz.com.br</a></li>
                        <li><a href="#">(95) 3224-2603</a></li>
                    </ul>
                </div>

                <div className={styles.socialLinksFooter}>
                    <h4>Pigz nas redes</h4>

                    <div>
                        <a href="#">
                            <img src={imgLinkedin} alt="Icone do Linkedin" />
                        </a>
                        <a href="#">
                            <img src={imgInstagram} alt="Icone do Instagram" />
                        </a>
                        <a href="#">
                            <img src={imgFacebook} alt="Icone do Facebook" />
                        </a>
                        <a href="#">
                            <img src={imgYoutube} alt="Icone do YouTube" />
                        </a>
                    </div>
                </div>

                <div className={styles.line}></div>

                <div className={styles.infoFooter}>
                    <a href="#">Nossos termos</a>
                    <a href="#">Privacidade</a>
                    <a href="#">Ajuda</a>
                </div>

                <div className={styles.copyFooter}>
                    <p>
                        &copy; Copyright 2021 • Pigz • Todos os direitos reservados <br />
                        Orange Labs Tecnologia LTDA. CNPJ 34.895.008/0001-85
                    </p>
                    <img src={imgLogoOrange} alt="Logo da Orange Labs" />
                </div>
            </div>
            <div className={styles.lineOrange}></div>
        </>

    );
}