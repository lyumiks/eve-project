class HeaderElement extends HTMLElement {
    constructor () {
        super();
        this.build();
    }

    build() {
        const shadow = this.attachShadow({ mode: 'open' });

        const html = this.template();
        const css = this.style();

        const minhaDiv = document.createElement('div');
        const meuStyle = document.createElement('style');

        minhaDiv.innerHTML = html;
        meuStyle.innerText = css;

        shadow.appendChild(minhaDiv);

        shadow.appendChild(meuStyle);
    }

    template() {
        return `
            <header>
                <div class="logo">eve</div>
            </header>
        `.trim();
    }

    style() {
        return `
            :host {
                display: block;
                width: 100%;
                padding: 10px 20px;
                background-color: var(--surface-color);
                box-sizing: border-box;
                border-bottom: 1px solid var(--border-color);
            }

            header {
                display: flex;
                align-items: center;
                height: 100%;
                padding: 20px;
            }

            .logo {
                font-size: 1.5rem;
                font-weight: bold;
                color: var(--primary-color);
            }
        `;
    }
}

export default HeaderElement;
