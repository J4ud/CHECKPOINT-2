// <card></card>
import { getImage } from '../../services/getImage';
import { getFact } from '../../services/getFact';

export enum Attrs {
	'img' = 'img',
	'fact' = 'fact',
}
class CatButton extends HTMLElement {
	img?: string;
	fact?: string;

	constructor() {
		super(); // always call super() first in the ctor.
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render;
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ``;
			if (this.shadowRoot) {
				this.shadowRoot.innerHTML = `

        `;
			}

			const bton = this.ownerDocument.createElement('button');
			const btonText = this.ownerDocument.createElement('h2');
			btonText.textContent = 'GET A NEW FACT';
			bton.appendChild(btonText);

			bton.addEventListener('click', async () => {
				if (this.fact) {
					const catfData = await getFact();
					const fact = this.ownerDocument.createElement('fact');
					fact.textContent = catfData.fact;

					this.shadowRoot?.appendChild(fact);
				}
			});
			this.shadowRoot.appendChild(bton);
		}
	}

	static() {
		const Attributes: Record<Attrs, null> = {
			img: null,
			fact: null,
		};
		return Object.keys(Attributes);
	}
	attributeChangedCallback(attrName: Attrs, oldVal: string | undefined, newVal: string | undefined) {
		switch (attrName) {
			default:
				this[attrName] = newVal;
				break;
		}
		this.render;
	}
}
export default CatButton;
window.customElements.define('cat-button', CatButton);
