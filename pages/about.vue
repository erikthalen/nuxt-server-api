<script setup>
const url = 'api.sampleapis.com/coffee/hot'

const { data } = await useFetch('/api/cms', {
  query: { url },
})
</script>

<template>
  <div>
    <ul>
      <li><nuxt-link to="/">Index</nuxt-link></li>
      <li><nuxt-link to="/about">About</nuxt-link></li>
    </ul>
    <code>
      <pre>{{ data }}</pre>
    </code>
  </div>
</template>
