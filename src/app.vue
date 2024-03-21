<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width,initial-scale=1' },
  ],
});

useSeoMeta({
  title: '美容室ワンズワン',
  ogTitle: '美容室ワンズワン',
  description: 'プライベートサロン美容室ワンズワン',
  ogDescription: 'プライベートサロン美容室ワンズワン',
  ogImage: '',
  twitterCard: 'summary_large_image',
});
</script>
