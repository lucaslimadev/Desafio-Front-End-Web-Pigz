import { Header } from './components/Header'
import { Card } from './components/Card'
import { CardButton } from './components/CardButton'
import { Footer } from './components/Footer'
import { Form } from './components/Form'

import imgBurguer from './assets/burguer_2.png'
import imgPigzPigz from './assets/pigz-pigz.svg'

import imgStore from './assets/store.svg'
import imgSmartphone from './assets/smartphone.svg'
import imgManagement from './assets/management.svg'
import imgPrint from './assets/print.svg'

import imgPhones from './assets/phones.png'

import styles from './App.module.css'

export function App() {

  return (
    <div className='container'>
      <Header />

      <section className={styles.contentForm}>
        <header>
          <div className={styles.contentFormText}>
            <h1>Pigz: tudo que você precisa pra vender ainda mais!</h1>
          </div>
          <div>
            <img src={imgBurguer} alt={'Imagem de Hamburguer'} />
          </div>
        </header>
        <p className={styles.contentFormLegend}>
          Temos uma equipe ansiosa para cadastrar
          seus produtos no Pigz Marketplace e deixar
          sua loja prontinha para iniciar as vendas.
        </p>

        <Form />

        <img src={imgPigzPigz} alt="Imagem da logo pigz" />
      </section>

      <section className={styles.contentCards}>
        <h3>Você tem um novo Pigzdido!</h3>

        <Card
          title={'Marketplace'}
          description={'Pra sua loja verder mais'}
          image={imgStore}
        />
        <Card
          title={'É fácil e rápido'}
          description={'Fazer um pedido no Pigz'}
          image={imgSmartphone}
        />
        <Card
          title={'Pigz Gestão'}
          description={'Você no controle, sempre'}
          image={imgManagement}
        />
        <Card
          title={'Vias de impressão'}
          description={'Personalizáveis'}
          image={imgPrint}
        />
      </section>

      <section className={styles.contentInfo}>
        <h3>Tudo que você precisa por apenas R$199/mês</h3>
        <p>Tenha todas as funcionalidades Pigz sem taxa de adesão,
          sem comissão por cada venda, sem letrinhas miúdas.
        </p>

        <div className={styles.carouselCards}>
          <div className={styles.selectionCard}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <h3>Pigz Marketplace</h3>

        <div className={styles.cardCarousel}>
          <p>Além de uma página exclusiva, com o Pigz Marketplace sua loja terá mais visibilidade, no app e no site. Uma vitrine com milhares de clientes todos os dias, para vender muito mais.</p>
          <img src={imgPhones} alt={'Dois telefones representando o aplicativo do Pigz'} />
        </div>

        <div className={styles.contentInfoDescription}>
          <h3>E mais: suporte que realmente funciona!</h3>
          <p>Respostas automáticas e robôs? Aqui não. Nossa equipe
            está sempre disponível pra ajudar você e seus clientes.
          </p>
        </div>
      </section>

      <CardButton 
        title={'Pigz'}
        description={'Tudo o que você precisa'}
        price={'R$199/mês'}
        buttonTitle={'Vender no Pigz agora'}
      />

      <CardButton 
        title={'Pagamento On-line'}
        description={'Segurança e agilidade'}
        price={'2,99% por transação'}
        buttonTitle={'Saiba mais'}
      />

      <Footer />
    </div>
  );
}

