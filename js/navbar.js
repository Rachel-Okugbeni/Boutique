class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `<div class="navbar">
            <nav>
                <ul>
                    <li><a href="/html/categorypages/category-page-jewellery.html">JEWELLERY</a></li>|
                    <li><a href="/html/categorypages/category-page-mens.html">MENS</a></li>|
                    <li><a href="/html/categorypages/category-page-accessories.html">ACCESSORIES</a></li>|
                    <li><a href="/html/categorypages/category-page-other.html">OTHER</a></li>
                </ul>
            </nav>
        </div>`;
    }
}
customElements.define('nav-bar', Navbar);
