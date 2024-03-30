<script setup lang="ts">
import { css } from '@emotion/css';

const blogListData = await fetchBlogList();

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
  >
    <h1
      class="text-[40px] font-light text-white z-[1]"
      :style="{ fontFamily: 'Jost, sans-serif', letterSpacing: '2px' }"
    >
      Blog
    </h1>
  </div>
  <div class="relative max-w-[1150px] px-4 m-auto">
    <!--card-->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-[20px] mx-[20px] mt-[100px]"
    >
      <div
        v-for="item in blogListData?.contents"
        class="flex place-content-center"
      >
        <a
          :href="`/post/${item.id}`"
          class="w-[314px] h-[352px] flex flex-col bg-[#E5E0DD]"
          :style="{ boxShadow: '3px 3px 20px rgb(122,94,77,0.24)' }"
        >
          <img
            class="w-full h-[157px] object-cover"
            :src="item.thumbnail.url"
          />
          <div
            class="flex-1 border border-dashed border-t-0 border-[#BA7B55] p-4 m-[20px] mt-0"
            :style="{ borderRadius: '0 0 10px 10px' }"
          >
            <p
              class="text-main tracking-widest mb-3"
              :style="{ fontFamily: 'Jost, sans-serif' }"
            >
              {{ strftime(item.postAt) }}
            </p>
            <p
              class="text-main tracking-widest"
              :style="{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: '4',
                overflow: 'hidden',
              }"
            >
              {{ item.title }}
            </p>
          </div>
        </a>
      </div>
    </div>
    <!--pagination-->
    <div class="flex justify-around w-[95%] sm:w-[400px] my-10 m-auto">
      <a :href="`./${Number($route.params.page) - 1 || 1}`">
        <span
          class="grid place-content-center w-[50px] h-[50px] bg-[#A86E49] rounded-[50px] sm:me-10"
          ><img class="" src="/icons/chevron.svg"
        /></span>
      </a>

      <a href="./1"
        ><span
          class="grid place-content-center w-[50px] h-[50px] text-[20px] text-white font-light bg-[#A86E49] rounded-[50px]"
          :style="{ fontFamily: 'Jost, sans-serif' }"
          >1</span
        ></a
      >
      <a href="">
        <span
          class="grid place-content-center w-[50px] h-[50px] text-[20px] text-white font-light bg-[#A86E49] rounded-[50px]"
          :style="{ fontFamily: 'Jost, sans-serif' }"
          >...</span
        >
      </a>
      <a :href="`./${Number(blogListData?.totalCount) / 9 || 1}`">
        <span
          class="grid place-content-center w-[50px] h-[50px] text-[20px] text-white font-light bg-[#A86E49] rounded-[50px]"
          :style="{ fontFamily: 'Jost, sans-serif' }"
          >{{ blogListData?.totalCount }}</span
        >
      </a>
      <a :href="`./${Number($route.params.page) + 1}`">
        <span
          class="grid place-content-center w-[50px] h-[50px] bg-[#A86E49] rounded-[50px] sm:ms-10"
          ><img class="scale-x-[-1]" src="/icons/chevron.svg"
        /></span>
      </a>
    </div>
    <!--background-->
    <img class="absolute top-[-75px] left-0 -z-10" src="/images/flowers3.svg" />
    <img class="absolute bottom-0 right-0 -z-10" src="/images/flowers4.svg" />
  </div>
</template>
