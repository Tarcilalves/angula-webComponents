class TituloDinamico extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});

        //Base do componente <h1> Tah Alves </h2>
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo");

        //Estilizar o componente
        const style = document.createElement("style");
        style.textContent = `
        h1{
            color: gray;
        }
        
        `

        //enviar para a shadow - Anexando a nossa árvore
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

//chamando atraves do elementos customizado:
customElements.define('titulo-dinamico', TituloDinamico);