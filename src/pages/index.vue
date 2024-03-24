<template>
  <div
    :class="`flex justify-center items-center relative w-full h-[750px] ${styles.background}`"
  >
    <img class="absolute w-[98%] h-[98%]" src="/images/mv-border.svg" />
    <img class="absolute w-[520px]" src="/images/logo-lg.png" />
  </div>
  <!--catchcopy-->
  <div class="flex justify-center w-full bg-[#DDD3C3]">
    <div class="flex items-center px-5 py-10">
      <img class="h-[66px]" src="/images/leaf1.svg" />
      <p
        class="flex items-center text-center text-main px-5 sm:px-10"
        :style="{ fontFamily: 'Noto Serif JP, serif' }"
      >
        女性スタイリストによるプライベートヘアサロン<br />天井が高く、木の香りが清々しいプライベート空間を貸切
      </p>
      <img class="h-[66px] scale-x-[-1]" src="/images/leaf1.svg" />
    </div>
  </div>
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
