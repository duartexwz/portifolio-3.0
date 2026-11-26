import NavBar from './components/Navbar.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from './assets/perfil-site.jpg'
import './App.css'
function App() {
  return (
    <>
      <section id="nav">
        <div className="container-section">
          <NavBar />
        </div>
      </section>
      <main id="page">
        <section id="home">
          <div className="container-section">
            <div className="home-contain">
              <div className="informations-home">
                <div className="informations-text">
                  <p id='dev'>Desenvolvedor Full Stack</p>
                  <h1>Modernidade por fora, eficiência por dentro: A evolução que o seu negócio precisa.</h1>
                  <p>Foco na experiência do usuário, sistemas seguros e performance - a tecnologia certa para transformar processos manuais em sistemas que rodam sozinhos.</p>
                </div>
                <div className="information-button">
                  <button className="projetos">
                    Ver meus projetos <i className="fa-solid fa-arrow-right"></i>
                  </button>
                  <button className="contato">
                    Fale comigo
                  </button>
                </div>
              </div>
              <div className="image-home">
                <div className="image-contain">
                  <div className="imagem">
                    <img src={logo} alt="Imagem de perfil do Dev" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App