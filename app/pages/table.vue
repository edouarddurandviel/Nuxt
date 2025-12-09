<template>
  <section>
    <p>This page will be displayed at the /table route.</p>
    <p>{{ data && 'posted' }}</p>
     <p>{{ !error && 'no errors' }}</p>
  </section>
</template>

<script setup lang="ts">
import { postAbout } from '~~/server/database/queries/postAbout';

const route = useRoute();

// backend query => sends automaticaly headers
// db queries
const { data, error } = await useAsyncData(`table`, () => {
  return postAbout('table', { id: '656546', content: "new content" })
})

const { data: usersAndRoles, status } = await useAsyncData('users-roles', async (_nuxtApp, { signal }) => {
  const [users, roles] = await Promise.all([
    $fetch('/users', { signal }),
    $fetch('/roles', { signal }),
  ])

  return { users, roles }
})

  const meta = {
  title: `Post ${route.params.id}`,
  description: `Post ${route.params.id} description`,
  content: `Post ${route.params.id}, an amazing site`
}

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

