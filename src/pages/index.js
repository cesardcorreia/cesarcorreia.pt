import * as React from "react"

import Layout from "../components/layout"
import GithubIcon from "../components/githubicon"
import TwitterIcon from "../components/twittericon"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <title>césar c. - fullstack developer</title>
    </Helmet>
    <div className="mt-10 md:w-2/4 flex gap-4 flex-col justify-center mx-auto">
      <h3 className="text-gray-800 text-2xl font-bold">
        Sou um Fullstack Developer em Porto, Portugal.
      </h3>
      <p>
        Costumo brincar com várias tecnologias e desenvolver algumas
        plataformas, só que tenho a mesma condição que grande parte dos
        programadores tem, o{" "}
        <span className="italic">
          Sindrome do Não Terminar e Começar De Novo Duas Semanas Depois
        </span>
        .
      </p>
      <div>
        <p class="text-gray-800 text-xl font-semibold mb-2">As minhas especialidades:</p>
        <ul className="list-disc mx-8">
          <li>No backend são o PHP, Laravel, Python</li>
          <li>No frontend (😭): Javascript, VueJS, NuxtJS, Tailwindcss</li>
          <li>Bases de dados: MySQL, Redis</li>
        </ul>
      </div>
      <div>
        <p class="text-gray-800 text-xl font-semibold mb-2">
          Últimamente tenho andado entretido com:
        </p>
        <ul className="list-disc mx-8">
          <li>
            <a
              className="italic text-blue-500 underline transition hover:text-blue-800"
              href="https://tem-multibanco.pt"
              target="_blank"
            >
              tem-multibanco.pt
            </a>{" "}
            - Uma plataforma para poder informar as pessoas se certos estabelecimentos têm meios de pagamento eletrônicos.
          </li>
        </ul>
        <ul className="list-disc mx-8">
          <li>
            <a
              className="italic text-blue-500 underline transition hover:text-blue-800"
              href="https://devoabastecer.pt"
              target="_blank"
            >
              devoabastecer.pt
            </a>{" "}
            - Uma plataforma na qual indica o valor semanal do combustível e
            recomenda, ou não, a abastecer o depósito antes que o preço mude no
            início da semana.
          </li>
        </ul>
      </div>
      <div className="flex justify-center gap-4">
        <a href="https://github.com/cesardcorreia/" target="_blank" className="w-6 h-6"><GithubIcon /></a>
        <a href="https://twitter.com/cesardcorreia" target="_blank" className="w-6 h-6"><TwitterIcon /></a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
