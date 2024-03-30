<script setup lang="ts">
import { useRoute } from 'vue-router';
import { css } from '@emotion/css';

const route = useRoute();
const blogData = await fetchBlog(route.params.id.toString());

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
  contents: css`
    & h1 {
      position: relative;
      max-width: 600px;
      background: #a86e49;
      color: white;
      font-size: 18px;
      font-weight: bold;
      padding: 10px 15px;
      margin-bottom: 10px;

      &::after {
        position: absolute;
        content: '';
        top: 3px;
        bottom: 3px;
        left: 3px;
        right: 3px;
        border: dashed 1px #fff;
      }
    }
    & ul {
      margin: 5px 0;
      & li {
        list-style: inside;
      }
    }
    & figure {
      margin: 15px 0 20px 0;
      & img {
        width: 100%;
        max-width: 600px;
        border-radius: 10px;
      }
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
      {{ blogData.title }}
    </h1>
    <p class="text-main text-end mb-10" :style="{ fontFamily: 'jost' }">
      {{ strftime(blogData.postAt) }}
    </p>
    <img
      class="w-[250px] h-[250px] object-cover m-auto mb-[100px]"
      :src="blogData.thumbnail.url"
    />
    <div
      v-html="blogData.contents"
      :class="`${styles.contents} text-main tracking-widest leading-7 mb-[100px]`"
    ></div>
  </div>
</template>
