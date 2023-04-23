import { defineCustomElement } from 'vue'
import EmbeddedWebview from './components/EmbeddedWebview.ce.vue'

const embeddedWebview = defineCustomElement(EmbeddedWebview)

customElements.define('embedded-webview', embeddedWebview)