class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        ` <div class="nav-links-left">
            <ul>
                <li><a href="/index.html">HOME</a></li>
                <li><a href="/html/contact.html">CONTACT</a></li>
            </ul>
            </div>
            <div class="nav-links-right">
                <ul>
                        <li><a href="/html/login.html">LOGIN</a></li>
                        <li><a href="/html/checkout.html"><i class="fas fa-shopping-basket fa-lg"></i> <span id="cartVal">0</span></a></li>
                    </ul>
            </div>`;
    }
}

class Banner extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `<div class="logo">
        <h1>Maison Fleurie</h1>
        </div>`
    }
}



          

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `<div class="footer-links">
                <ul>
                    <li><a href="html/contact.html">Contact</a></li>|
                    <li><a href="#">FAQ</a></li>|
                    <li><a href="#">Delivery & Payment Info</a></li>|
                    <li><a href="#">Care Instructions</a></li>|
                    <li><a href="#">Careers</a></li>
                </ul>
        </div>`
    }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);
customElements.define('logo-header', Banner);
