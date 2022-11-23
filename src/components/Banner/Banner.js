import './index.scss';

export default function Banner() {
    return(
        <section className='banner'>
            <div className='banner__image'></div>
            <div className='banner__text'>
                <div className='banner__text__title'>Aprenda programação brincando!</div>
                <div className='banner__text__info'>
                    <span>
                        Go Dev é feito para você que quer aprender ou aprofundar os conhecimentos de programação.
                        Temos trilhas sobre vários assuntos divididas em aulas e exercícios.
                        Além de adquirir uma boa base prática e teórica, você pode garantir seu certificado.
                    </span>
                    <a href='/trilhas' role='button'>Quero conhecer as trilhas!</a>
                </div>
            </div>
        </section>
    );
}
