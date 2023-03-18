// ReactDOM.render (<ul>Minha Lista de Estudo</ul>, <li>HTML</li>, document.getElementById("root"))

// ReactDOM.render ([<ul>Minha Lista de Estudo</ul>, <li>html</li>,, <li>css</li>, <li>javascript</li>, <h2>teste de elementos no mesmo comando REACTDOM</h2>], document.querySelector("#root"))

// function MainContent(){
//     return(
//         <h1>I'm learning React!</h1>
//     )
// }
// ReactDOM.render(<MainContent/>, document.querySelector("#root"))

// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/

//maneira imperativa de programar
    // const h1 = document.createElement('h1')
    // h1.textContent = "This ia an imperactive way to program."
    // h1.ClassName ="header"
    // document.querySelector("#root").appendChild(h1)

//maneira decritiva de programar
    // ReactDOM.render(<h1 className="header">Hello, React!</h1>,document.querySelector("#root"))

//Entendendo a dinamica de elementos renderizados.
//mais de um elemento na mesma renderização 
    // ReactDOM.render(
    //     <p>Será que funciona?</p>
    //     <h1>praticando renderização de elementos</h1>,
    //     document.querySelector("#root")
    // )

//Apenas 1 elemento renderizado, com 2 elementos dentro dele.
    // ReactDOM.render(
    //     <div>
    //         <h1>Agora vai funcionar</h1>
    //         <p>Para renderizarmos mais de 1 elemento, precizamos de um elemento "coringa", para colocarmos todos os elementos desejados dentro dele e descrever a renderizaçã apenas dele.</p>
    //     </div>,
    //     document.querySelector("#root")
    // )


//Outra maneira de transformar multiplos elementos em 1 unico objeto é criar uma variavel / array.
    // const pagina = (
    //     <div>
    //         <h1 className = "header">Isto é JSX!</h1>
    //         <p>Este paragrafo está dentro da variavel "pagina".</p>
    //     </div>
    // )
    // ReactDOM.render(
    //     pagina,
    //     document.querySelector("#root")
    // )


//HORA DE PRATICAR, O EXERCICIO É CRIAR UMA NAV BAR USANDO O APRENDIDO ATÉ AQUI.

const menu = (
    <nav>
        <h1>Aprendendo React!</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)
    ReactDOM.render(
        menu,
        document.querySelector("#root")
    )    