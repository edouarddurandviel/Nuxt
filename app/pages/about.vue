<template>
  <section>
    <p>This page will be displayed at the /about route.</p>
    <p>{{ data?.title }}</p>
    <p>{{ data?.intro }}</p>
    <p>{{ data?.article }}</p>
  </section>
</template>

<script setup lang="ts">
const route = useRoute();

const { data, pending, error } = await useFetch('/api/about', {
  server: true,
  lazy: false,
  query: { key: 'about' },
});

const meta = {
  title: `Post ${route.params.id}`,
  description: `Post ${route.params.id} description`,
  content: `Post ${route.params.id}, an amazing site`,
};

useHead({
  title: 'About',
  meta: [{ name: meta.title, content: meta.content }],
  bodyAttrs: {
    class: 'about',
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
});

useSeoMeta({
  title: meta.title,
  ogTitle: meta.title,
  description: meta.description,
  ogDescription: meta.description,
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
});
</script>
