import { getTemplate } from "../utils/template"

export default class PostComponent extends HTMLElement {
    static name = "post-component"
    templateUri = '/templates/postDetail.html'

    constructor() {
        super();
    }

    connectedCallback() {
        console.log(window.location.pathname);

        this.render();
    }

    /**
    * Get base template from templates folder and set the innerHtml of the current component with it.
    */
    async render() {
        const template = await getTemplate(this.templateUri);
        this.innerHTML = template;
    }
}