import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import iconSearch from "../../imgs/icon-search.png"

@customElement('eve-header')
export class Header extends LitElement {
    static styles = css`
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
            gap: 108px;
            height: 100%;
            padding: 26px 60px;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--primary-color);
        }

        img {
            width: 20px;
            height: 20px;
        }

        button {
            background-color: var(--primary-color);
            color: var(--surface-color);
            border: none;
            padding: 10px 27px;
            border-radius: 0 10px 10px 0;
            cursor: pointer;
        }

        button:hover {
            background-color: var(--accent-color);
        }

        .inputForm {
            display: flex;
        }
        
        input {
            padding: 20px 13px;
            border: 1px solid var(--muted-text-color);
            font-size: var(--roboto-font);
            font-family: var(--roboto-size);
            line-height: var(--roboto-line-height);
            letter-spacing: var(--roboto-letter-spacing);

        }
        .inputForm input:first-child {
            border-radius: 10px 0 0 10px;
            border: 1px solid var(--muted-text-color);
            border-right: none;
        }
        input:focus {
            outline: solid 1px var(--primary-color) ;
        }


    `
    render() {
        return html `
            <header>
                <div class="logo">eve</div>
                <div>
                    <form class="inputForm">
                        <input type="text"></input>
                        <input type="text"></input>
                        <button>
                            <img src=${iconSearch} alt="">
                        </button>
                    </form>

                </div>
            </header>
        ` 
    }
}