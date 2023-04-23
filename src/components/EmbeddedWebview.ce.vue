<template>
  <div id="webview-container"></div>
</template>

<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  src: {
    type: String
  }
})

fetch('http://localhost:3000/', {
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ src: props.src })
})
  .then(response => response.text())
  .then(html => {
    const container = document.querySelector('embedded-webview').shadowRoot.getElementById('webview-container')
    const shadow = container.attachShadow({ mode: 'closed' })
    shadow.innerHTML = html
  })
</script>