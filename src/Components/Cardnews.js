class Cardnews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
        

    }
    build() {
        //Container section - Principal
        const componentRoot = document.createElement("section");
        componentRoot.classList.add("card"); // Props

        //Div Filha da section - Esquerda
        const cardLeft = document.createElement("div");
        cardLeft.classList.add("card__left");// Props

        const autor = document.createElement("span");
        autor.classList.add("name"); // Props
        autor.textContent = "By" + (this.getAttribute("autor") || "Anonymous"); 

        const linkTitle = document.createElement("a");
        linkTitle.classList.add("title");// Props
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url"); //acessar prop já existente no elemento <a> 

        const newsContent = document.createElement("p");
        newsContent.classList.add("contet");// Props
        newsContent.textContent = this.getAttribute("contet");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        //Div Filha da section - Direita
        const cardRight = document.createElement("div");
        cardRight.classList.add("card__right");// Props
        const newImage = document.createElement("img");
        newImage.src = this.getAttribute("photo") || "assets/default-profile.jpg";
        newImage.alt = "Foto da notícia"
        newImage.classList.add("image");// Props
        cardRight.appendChild(newImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    style() {
        const style = document.createElement("style");
        style.textContent = `

        
            html, body, div, span, applet, object, iframe,
            h1, h2, h3, h4, h5, h6, p, blockquote, pre,
            a, abbr, acronym, address, big, cite, code,
            del, dfn, em, img, ins, kbd, q, s, samp,
            small, strike, strong, sub, sup, tt, var,
            b, u, i, center,
            dl, dt, dd, ol, ul, li,
            fieldset, form, label, legend,
            table, caption, tbody, tfoot, thead, tr, th, td,
            article, aside, canvas, details, embed, 
            figure, figcaption, footer, header, hgroup, 
            menu, nav, output, ruby, section, summary,
            time, mark, audio, video {
            	margin: 0;
            	padding: 0;
            	border: 0;
            	font-size: 100%;
            	font: inherit;
            	vertical-align: baseline;
            }
            /* HTML5 display-role reset for older browsers */
            article, aside, details, figcaption, figure, 
            footer, header, hgroup, menu, nav, section {
            	display: block;
            }
            body {
            	line-height: 1;
            }
            ol, ul {
            	list-style: none;
            }
            blockquote, q {
            	quotes: none;
            }
            blockquote:before, blockquote:after,
            q:before, q:after {
            	content: '';
            	content: none;
            }
            table {
            	border-collapse: collapse;
            	border-spacing: 0;
            }

            a {
            	color: inherit;
            	text-decoration: none;
            }
        
            * {
            font-family: 'Roboto', sans-serif;
            font-size: 1rem;
            
           
            box-sizing: border-box;
            }

            :root{
                --branco: #FFFFFF;
                --preto: #000000;
                --cinza: #a5a6af;
                --azulClaro:    #86939e;
                --backgroundComOpacidade: rgba(230, 230, 230, 0.712);
            }

            .card{    
                display: flex;
                border: 1px solid var(--backgroundComOpacidade);    
                max-width: 820px;
                gap: 1rem;
                align-self: center;
                margin: 3rem;
                padding: 2rem;
                box-shadow: 9px 9px 20px 0px var(--backgroundComOpacidade);
            }
            
            
            .card__left{
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            .name{
                font-weight: 500;
                color: var(--cinza);
            }
            .title{
                font-weight: 700;
                font-size: 1.8rem;
                padding: .5rem 0;
            }
            .contet{
                color: var(--azulClaro);
            }
            
            
            
            .image{
                max-width: 300px;
                max-height: 200px;
            }
            
        
        `;


        return style;
    }
}

//chamando 
customElements.define('card-new', Cardnews)