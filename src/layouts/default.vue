<script setup lang="ts">
const menuFucn = (state: boolean) => {};
</script>

<template>
  <Header />
  <slot />
  <ReservationBar />
  <Footer />
</template>
