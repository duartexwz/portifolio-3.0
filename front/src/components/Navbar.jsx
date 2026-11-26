
function NavBar() {
    return (
        <>
            <nav className="nav-bar">
                <div className="name-nav">
                    <div className="card-name">
                        <h4>MD</h4>
                    </div>
                    <div className="name">
                        <h3>Mayckon Duarte</h3>
                        <p>Desenvolvedor Full-Stack</p>
                    </div>
                </div>
                <div className="navegation">
                    <ul className="sections">
                        <li className="section-item active">Home</li>
                        <li className="section-item">Sobre mim</li>
                        <li className="section-item">Tecnologias</li>
                        <li className="section-item">Projetos</li>
                        <li className="section-item">Contato</li>
                    </ul>
                </div>
                <div className="button-cv">
                    <button className="btn-curriculo">
                        Baixar CV
                    </button>
                </div>
            </nav>
        </>
    )
}

export default NavBar