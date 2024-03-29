<script setup lang="ts">
import { useRoute } from 'vue-router';
import { css } from '@emotion/css';

const route = useRoute();

const styles = {
  background: css`
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: no-repeat url('/images/DSC_0287.jpg');
      background-size: cover;
      background-position: 50% 75%;
      filter: brightness(0.8);
    }
  `,
};
</script>

<template>
  <div
    :class="`${styles.background} relative flex justify-center items-center w-full h-[245px]`"
  ></div>
  <div class="max-w-[800px] p-[20px] mt-[100px] m-auto">
    <h1 class="text-center text-[30px] text-main mb-10">
      パープルレッドなお客様
    </h1>
    <p class="text-main text-end mb-10" :style="{ fontFamily: 'jost' }">
      2024.03.15
    </p>
    <img
      class="w-[250px] h-[250px] object-cover m-auto mb-[100px]"
      src="/images/DSC_0286.jpg"
    />
    <div class="text-main mb-[100px]">
      <!-- ここへコンテンツ -->
      パープルレッドなお客様✨ 綺麗な色が入りましたネ✨ 以前お店のロゴマークをデザインしてもらいました(one’ｓ１の1が✂️マークです お世話になっている デザイナーさんです💞 刈り上げてスッキリ✂️ いつもありがとうございます。
    </div>
  </div>
</template>
