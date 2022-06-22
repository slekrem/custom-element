class CustomElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `<p>ich bin ein <code>&lt;custom-element>&lt;/custom-element></code></p>`;
    }
}

customElements.define('custom-element', CustomElement);
