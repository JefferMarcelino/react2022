import Data from "./Data"

function App() {
  var dados = [
    {nome: "Raimundo Molide", about: "Amante de T.I, fiz Engenharia em Informática e Telecomunicações no ISUTC e sou Programador, nos tempos livres gosto de aprender e ensinar."},
    {nome: "Antônio Sitoe", about: "Front-end developer and UI Designer, criador de conteúdo na Comunidade Maputo Frontenders e DeVTalksMz."},
    {nome: "Otília Cossa", about: "Social Media Manager de Maputo Frontenders. Sou fascinada por Tech, nos tempos livres sofro com as derrotas do Barcelona."},
    {nome: "Wak'Oleva Maia", about: "Sou Presidente de Maputo Frontenders, Web Dev App e adoro fiscalizar."}
  ]

  return (
    <div className="App">
      <h1>MPT FRONTENDERS</h1>
      {
        dados.map(dado => {
            return <Data name={dado.nome}  about={dado.about} />
        })
      }
    </div>
  )
}

export default App