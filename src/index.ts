import CatButton, { Attrs } from './components/CatButton/Catbutton';
import { getFact } from './services/getFact';
import { getImage } from './services/getImage';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	async connectedCallback() {
		const dataFact = await getFact();
		console.log(dataFact);

		this.render(dataFact);
	}

	render(dataFact: any) {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ``;
		}

		const catSection = this.ownerDocument.createElement('section');
		catSection.setAttribute(Attrs.fact, dataFact.fact);
	}
}

customElements.define('app-container', AppContainer);
