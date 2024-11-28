import "./about.scss"

function About() {
    
    return (
        <div className="about">
            <div className="about__content">
                <div className="about__content-img">
                    <img src="https://i.ibb.co/pyKVtPp/image-5.png" />
                </div>
                <div className="about__content-text">
                    <h2 className="title">Bianca Nicoletti Liz</h2>
                    <p className="description">
                    Olá! Meu nome é Bianca Nicoletti e sou a alma criativa por trás da minha patisserie artesanal. Desde que me lembro, a cozinha sempre foi meu lugar feliz – 
                    onde ingredientes simples se transformam em momentos doces e memoráveis. Aos 21 anos já trilhei um caminho de paixão e dedicação. Aperfeiçoando técnicas 
                    e explorando sabores que combinam tradição e inovação.
                    </p>
                    <p className="description">
                    Minha jornada começou em uma pequena cozinha caseira, onde aprendi com receitas passadas de geração em geração e experimentei novas criações que se tornaram 
                    favoritas entre amigos e familiares. Com o tempo, essa paixão se transformou em uma profissão, levando-me a buscar cursos de especialização e a aprimorar meus
                    conhecimentos em pâtisserie fina.
                    </p>
                    <p className="description">
                    No meu ateliê, cada doce é feito à mão com os melhores ingredientes, desde truffes delicadas e Tartelettes com recheios surpreendentes até bolos que 
                    mesclam texturas e sabores de forma harmoniosa. Acreditando que a pâtisserie é uma arte, busco sempre o equilíbrio perfeito entre sabor, apresentação e originalidade.
                    </p>
                </div>
            </div>
            <div className="about__footer">
                <p className="about__footer-text">Criar sobremesas que trazem alegria e encantam os olhos é mais do que um trabalho – é um chamado. Meu objetivo é levar um pouco da minha paixão por doces para cada cliente, oferecendo não apenas produtos, mas experiências que tornam cada ocasião especial.</p>
                <p className="about__footer-text">Sinta-se à vontade para explorar minhas criações e descobrir como pequenos detalhes podem fazer toda a diferença.</p>
                <div>
                    <p className="about__footer-text">Com carinho,</p>
                    <p className="about__footer-text">Bianca Nicoletti</p>
                </div>
            </div>
        </div>
    )
}

export default About