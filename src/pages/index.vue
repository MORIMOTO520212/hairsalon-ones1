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
  <!--blog & info-->
  <div class="py-10">
    <SectionTitle value="Blog" />
    <div class="w-[250px] py-6 mx-auto">
      <img class="w-[250px] h-[250px] object-cover" src="/images/dummy/1.jpg" />
      <div>
        <p
          class="text-sm sm:text-base text-main py-2"
          :style="{ fontFamily: 'Jost, sans-serif' }"
        >
          2024.03.02
        </p>
        <p class="text-sm sm:text-base text-main py-2">
          ご新規のお客様へ。ご予約のとり方に関してのお知らせ
        </p>
      </div>
      <div class="flex justify-center">
        <a
          href=""
          class="inline-block border border-main text-main px-10 py-2 mt-3"
          :style="{
            fontFamily: 'Jost, sans-serif',
            letterSpacing: '0.1em',
          }"
          >more</a
        >
      </div>
    </div>
  </div>
  <!--concept-->
  <div class="relative py-[80px]">
    <!--concept 1-->
    <div class="relative h-[555px] my-10">
      <img
        class="w-[95%] h-[270px] sm:w-[945px] sm:h-[495px] object-cover rounded-lg"
        src="/images/DSC_0286.jpg"
      />
      <div
        class="absolute bottom-0 right-0 lg:right-[10%] max-w-[550px] h-[300px] bg-[rgba(255,255,255,95%)] p-3 ms-4 sm:ms-0"
      >
        <div
          class="w-full h-full border-2 border-dashed border-[#BA7B55] p-5"
          :style="{ borderRadius: '10px' }"
        >
          <h2
            class="inline-block text-3xl border-b border-main text-main"
            :style="{ fontFamily: 'Jost, sans-serif' }"
          >
            Concept
          </h2>
          <div class="flex items-center h-full">
            <p
              class="text-[14px] md:text-[16px] text-main leading-9 tracking-[.25em]"
            >
              高天井の隠れ家サロン。女性スタイリストによる貸し切りの贅沢空間で、あなただけの時間を豊かな木の香りと共に、あなたの理想を叶えるプライベートサロンを体験できます。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="h-[120px] md:h-[80px]"></div>
    <!--concept 2-->
    <div class="relative h-[510px] sm:h-[650px] my-10">
      <img
        class="absolute top-0 right-0 w-[80%] h-[270px] sm:w-[648px] sm:h-[490px] object-cover rounded-lg"
        src="/images/DSC_0289.jpg"
      />
      <div
        class="absolute bottom-0 left-0 lg:left-[10%] max-w-[550px] h-[300px] bg-[rgba(255,255,255,95%)] p-3 me-4 sm:me-0"
      >
        <div
          class="w-full h-full border-2 border-dashed border-[#BA7B55] p-5"
          :style="{ borderRadius: '10px' }"
        >
          <div class="flex items-center h-full">
            <p
              class="text-[14px] md:text-[16px] text-main leading-9 tracking-[.25em]"
            >
              確かな技術のベテランスタイリストがお客様に合わせたスタイルを提案し、初めての方にも安心してご利用いただけます。お気軽にお越しください。
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--background images-->
    <img
      class="absolute top-[530px] lg:top-0 right-0 -z-10"
      src="/images/leaf2.svg"
    />
  </div>
  <!--gallery-->
  <div class="bg-[#F1EAE5] px-[10px] sm:px-[50px] py-[80px]">
    <SectionTitle value="Gallery" />
    <div class="flex justify-center mt-[50px]">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-7">
        <div
          v-for="item in new Array(8)"
          class="relative w-[150px] h-[150px] sm:w-[220px] sm:h-[220px]"
        >
          <span
            class="absolute top-[8px] left-[8px] w-full h-full bg-[#B3907A]"
          ></span>
          <img
            class="absolute top-0 left-0 w-full h-full"
            src="/images/dummy/1.jpg"
          />
        </div>
      </div>
    </div>
  </div>
  <!--menu-->
  <div class="py-[80px]">
    <SectionTitle value="Menu" />
    <div class="flex justify-center mt-[50px]">
      <div class="inline-block">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <!--cut menu-->
          <div class="max-w-[470px]">
            <div class="bg-[#DED5D0] px-5 py-2 mb-5">
              <h2 class="text-main" :style="{ fontFamily: 'Jost, sans-serif' }">
                Cut Menu（シャンプー・ブロー付き）
              </h2>
            </div>
            <div
              v-for="item in new Array(4)"
              class="flex justify-between text-main px-3 py-3"
            >
              <p class="inline-block text-sm sm:text-base">
                パーマ（カット・シャンプー・ブロー・トリートメント付）
              </p>
              <span class="w-[50px]"></span>
              <p class="inline-block text-sm sm:text-base">￥5,800</p>
            </div>
          </div>
          <!--other menu-->
          <div class="max-w-[470px]">
            <div class="bg-[#DED5D0] px-5 py-2 mb-5">
              <h2 class="text-main" :style="{ fontFamily: 'Jost, sans-serif' }">
                Other Menu
              </h2>
            </div>
            <div
              v-for="item in new Array(4)"
              class="flex justify-between text-main px-3 py-3"
            >
              <p class="inline-block text-sm sm:text-base">
                パーマ（カット・シャンプー・ブロー・トリートメント付）
              </p>
              <span class="w-[50px]"></span>
              <p class="inline-block text-sm sm:text-base">￥5,800</p>
            </div>
          </div>
        </div>
      </div>
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
