class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `<nav>
        <ul>
            <li><a href="/index.html">HOME</a></li>
            <li><a href="#">CONTACT</a></li>
        </ul>
    </nav>
    <h1>Maison Fleurie</h1>
    <nav >
        <ul>
            <li><a href="/html/login.html">LOGIN/REGISTER</a></li>
            <li><a href="/html/checkout.html"><i class="fas fa-shopping-basket fa-lg"></i> <span id="cartVal">0</span></a></li>
        </ul>
    </nav>`;
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `<div class="footer-links">
            <nav>
                <ul>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Delivery & Payment Info</a></li>
                    <li><a href="#">Care Instructions</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>
            </nav>
        </div>`
    }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);
