<template>

  post 1
</template>

<script setup lang="ts">
const route = useRoute();

const data = {
  title: `Post ${route.params.id}`,
  description: `Post ${route.params.id} description`,
  content: `Post ${route.params.id}, an amazing site`
}

useSeoMeta({
  title: data.title,
  ogTitle: data.title,
  description: data.description,
  ogDescription: data.description,
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
});

useHead({
  title: data.title,
  meta: [{ name: data.description, content: data.content }],
  bodyAttrs: {
    class: 'postBody',
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
});

definePageMeta({
  validate(route) {
    // Check if the id is made up of digits
    return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id);
  }
});
</script>
