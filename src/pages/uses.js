import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <div className="mt-10 w-2/4 flex gap-4 flex-col justify-center mx-auto">
    <div className="">
        <p class="text-gray-800 text-xl font-semibold mb-2">Desenvolvimento:</p>
        <ul className="list-disc mx-8">
          <li>
            VSCode com o tema Winter is Coming (Dark Blue) -{" "}
            <span className="italic text-blue-900">
              Um bom programador não tem o mesmo tema por mais que uma semana. -
              César Correia
            </span>
          </li>
          <li>
            Tipicamente como fonte uso a Fira Code 16. Sim, eu gosto de letras
            grandes.
          </li>
          <li>
            OS costuma ser o PopOs{" "}
            <span className="italic">quando me estou a sentir edgy</span>, ou
            Ubuntu{" "}
            <span className="italic">
              para quando me sinto um básico casual
            </span>
            .
          </li>
          <li>Putty</li>
          <li><a href="https://insomnia.rest/" target="_blank">Insomnia</a></li>
        </ul>
      </div>
      <div>
        <p class="text-gray-800 text-xl font-semibold mb-2">Hosting:</p>
        <ul className="list-disc mx-8">
          <li>
            Vultr - se não conhecerem já <a className="italic text-blue-500 underline transition hover:text-blue-800" href="https://www.vultr.com/?ref=8770143" target="_blank">sabem</a> 😉.
          </li>
          <li>
            Amen.pt porque tem dominíos.pt grátis várias vezes.
          </li>
        </ul>
      </div>
      <div>
        <p class="text-gray-800 text-xl font-semibold mb-2">Hardware:</p>
        <ul className="list-disc mx-8">
          <li>
            Lenovo T495s - máquina completa, super satisfeito.
          </li>
          <li>
            Logitech MX Master 3 - melhor rato alguma vez desenvolvido, sem margem de dúvida.
          </li>
          <li>
            Teclado Corsair K55
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default SecondPage
