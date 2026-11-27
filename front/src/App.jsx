import NavBar from './components/Navbar.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from './assets/perfil-site.jpg'
import './App.css'
import tecnologias from './data/tecnologias.json';
import { useState } from 'react'


function App() {
  const categorias = ['Todas', ...new Set(tecnologias.map((t) => t.categoria))]
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todas');

  const tecnologiasFiltradas = categoriaAtiva === 'Todas'
    ? tecnologias
    : tecnologias.filter((tech) => tech.categoria === categoriaAtiva)
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
                  <p id="subtitle" >Desenvolvedor Full Stack</p>
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
        <section id="servicos">
          <div className="container-section">
            <div className="container-servicos">
              <div className="title-servicos">
                <p id="subtitle" >SERVIÇOS</p>
                <h2>Soluções digitais que transformam ideias em resultados</h2>
              </div>
              <div className="services-group" id="servicesGroup">
                <div className="service-card">
                  <div className="top">
                    <div className="card-icon fixed">
                      <i className="fa-solid fa-window-maximize"></i>
                    </div>
                  </div>
                  <div className="center">
                    <h3>Sites & Landing Pages</h3>
                    <p>Páginas rápidas, responsivas e otimizadas para conversão, vendas e captura de clientes.</p>
                  </div>
                  <div className="bottom">
                    <a href="#" className="saiba-mais" id="saibaMaisServicos">Saiba mais <i className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
                <div className="service-card">
                  <div className="top">
                    <div className="card-icon fixed">
                      <i className="fa-solid fa-layer-group"></i>
                    </div>
                  </div>
                  <div className="center">
                    <h3>Sistemas Web Sob Medida</h3>
                    <p>Plataformas completas com painéis administrativos, agendamentos, banco de dados e controle de acesso.</p>
                  </div>
                  <div className="bottom">
                    <a href="#" className="saiba-mais" id="saibaMaisServicos">Saiba mais <i className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
                <div className="service-card">
                  <div className="top">
                    <div className="card-icon fixed">
                      <i className="fa-solid fa-server"></i>
                    </div>
                  </div>
                  <div className="center">
                    <h3>Desenvolvimento de APIs</h3>
                    <p>Back-ends seguros e integrações eficientes com bancos de dados, gateways de pagamento e sistemas externos.</p>
                  </div>
                  <div className="bottom">
                    <a href="#" className="saiba-mais" id="saibaMaisServicos">Saiba mais <i className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
                <div className="service-card">
                  <div className="top">
                    <div className="card-icon fixed">
                      <i className="fa-solid fa-robot"></i>
                    </div>
                  </div>
                  <div className="center">
                    <h3>Automações em Python</h3>
                    <p>Scripts inteligentes, coleta de dados e rotinas automáticas para eliminar tarefas manuais e ganhar escala.</p>
                  </div>
                  <div className="bottom">
                    <a href="#" className="saiba-mais" id="saibaMaisServicos">Saiba mais <i className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="tecnologias">
          <div className="container-section">
            <div className="container-tecnologias">
              <div className="title-tecnologias">
                <p id="subtitle" >TECNOLOGIAS</p>
                <h2>Ferramentas que uso no dia a dia</h2>
              </div>
              <div className="filtros-tecnologias">
                {categorias.map((categoria) => (
                  <span
                    key={categoria}
                    className={`filtro ${categoriaAtiva === categoria ? 'active-filter' : ''}`}
                    onClick={() => setCategoriaAtiva(categoria)}
                  >
                    {categoria}
                  </span>
                ))}
              </div>
              <div className="tecnologias" id="tecnologias">
                <div className="tech-card">
                  {tecnologiasFiltradas.map((tech) => (
                    <div className="tecnologia-card" key={tech.id}>
                      <div className="name-tech">
                        <div className="name-sigla">
                          <span>{tech.sigla}</span>
                        </div>
                        <div className="name-title">
                          <h4>{tech.nome}</h4>
                          <p>{tech.categoria}</p>
                        </div>
                      </div>
                      <div className="load-experience">
                        <div className="barra">
                          <div
                            className="load-fill"
                            style={{ width: `${tech.porcentagem}%` }}
                          ></div>
                        </div>
                        <span>{tech.porcentagem}%</span>
                      </div>
                    </div>
                  ))}
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