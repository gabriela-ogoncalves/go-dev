import './index.scss';

export default function Banner() {
    return(
        <section className='banner'>
            <div className='banner__title'>Aprendendo programação brincando!</div>
            <div className='banner__info'>
                <span>
                    O Go Dev é uma aplicação feita para você que quer aprender programação.
                    Aqui tudo é espanidido em trilhas, que contêm aulas e exercícios.
                    Após a conclusão de cada trilha, além de uma boa base prática e teórica, você também tem a oportunidade de garantir seu certificado.
                </span>
                <a href='/trilhas' role='button'>Quero conhecer as trilhas!</a>
            </div>
        </section>
    );
}
