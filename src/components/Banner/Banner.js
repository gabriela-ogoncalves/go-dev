import './index.scss';

export default function Banner() {
    return(
        <section className='banner'>
            <div className='banner__image'></div>
            <div className='banner__text'>
                <div className='banner__text__title'>Aprenda programação brincando!</div>
                <div className='banner__text__info'>
                    <span>
                        O Go Dev é uma aplicação feita para você que quer aprender programação.
                        Aqui tudo é dividido em trilhas, que contêm aulas e exercícios.
                        Ao final de cada trilha, você adquire uma boa base prática e teórica, além de ter a oportunidade de garantir seu certificado.
                    </span>
                    <a href='/trilhas' role='button'>Quero conhecer as trilhas!</a>
                </div>
            </div>
        </section>
    );
}
