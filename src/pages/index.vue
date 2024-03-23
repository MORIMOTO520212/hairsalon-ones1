<template>
  <div
    :class="`flex justify-center items-center relative w-full h-[750px] ${styles.background}`"
  >
    <img class="absolute w-[98%] h-[98%]" src="/images/mv-border.svg" />
    <img class="absolute w-[520px]" src="/images/logo-lg.png" />
  </div>
  <div>contents</div>
</template>

<script setup lang="ts">
import { css } from '@emotion/css';

const styles = {
  background: css`
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: no-repeat url('/images/mv.jpg');
      background-size: cover;
      background-position: cover;
      filter: brightness(0.8);
    }
  `,
};
</script>
