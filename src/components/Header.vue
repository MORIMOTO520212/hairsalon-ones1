<script setup lang="ts">
import { css } from '@emotion/css';
const navMenu = ref(false);
const homeData = await fetchHome();
</script>

<template>
  <div class="hidden md:flex justify-between h-[100px]">
    <div
      class="flex justify-center items-center w-[213px] h-[141px] rounded-br-[30px] bg-[#A86E49] z-10"
    >
      <a href="/"><img class="w-[95%]" src="/images/logo-lg.png" /></a>
    </div>
    <div class="flex flex-1 justify-end">
      <ul class="flex flex-1 justify-around items-center w-full max-w-[400px]">
        <li class="text-main px-1"><a href="/blog/1">Blog</a></li>
        <li class="text-main px-1"><a href="/#concept">Concept</a></li>
        <li class="text-main px-1"><a href="/#gallery">Gallery</a></li>
        <li class="text-main px-1"><a href="/#menu">Menu</a></li>
        <li class="text-main px-1"><a href="/#stylist">Stylist</a></li>
      </ul>
      <ul class="flex items-center">
        <li class="px-1">
          <a :href="`tel:${homeData.access.tel ?? ''}`"
            ><HeaderButton type="phone"
          /></a>
        </li>
        <li class="px-1">
          <a :href="homeData.hotpepperUrl ?? ''"><HeaderButton type="web" /></a>
        </li>
        <li class="px-1">
          <a :href="homeData.lineUrl ?? ''"><HeaderButton type="line" /></a>
        </li>
      </ul>
    </div>
  </div>
  <!--mobile-->
  <div class="flex md:hidden justify-between h-[70px]">
    <div
      class="flex justify-center items-center w-[213px] h-[141px] rounded-br-[30px] bg-[#A86E49] z-10"
    >
      <a href="/"><img class="w-[95%]" src="/images/logo-lg.png" /></a>
    </div>
    <div class="flex items-center px-3">
      <input
        type="checkbox"
        id="navButton"
        class="hidden my-navinput"
        v-model="navMenu"
      />
      <label
        for="navButton"
        class="my-navbutton block cursor-pointer px-[5px] py-[21px] z-20"
      >
        <span
          class="my-navpath relative block bg-main w-[35px] h-[2.2px]"
        ></span>
      </label>
    </div>
    <!--mobile-menu-->
    <div
      :class="`${
        navMenu ? 'visible opacity-100' : 'invisible opacity-0'
      } fixed top-0 left-0 w-[100vw] h-[100vh]  bg-[#A86E49] transition-[opacity,visibility] ease-in-out duration-500 z-10`"
    >
      <span class="block fixed top-3 left-2 w-[220px]"
        ><img class="w-full" src="/images/flower1.svg"
      /></span>
      <span class="block fixed bottom-2 right-3 w-[130px]"
        ><img class="w-full" src="/images/flower2.svg"
      /></span>

      <ul
        class="fixed top-20 w-full text-center tracking-widest z-auto"
        :style="{ fontFamily: 'Jost, sans-serif' }"
      >
        <li class="text-2xl text-white py-6">
          <a href="/blog/1" @click="navMenu = false">Blog</a>
        </li>
        <li class="text-2xl text-white py-6">
          <a href="/#concept" @click="navMenu = false">Concept</a>
        </li>
        <li class="text-2xl text-white py-6">
          <a href="/#menu" @click="navMenu = false">Menu</a>
        </li>
        <li class="text-2xl text-white py-6">
          <a href="/#gallery" @click="navMenu = false">Gallery</a>
        </li>
        <li class="text-2xl text-white py-6">
          <a href="/#stylist" @click="navMenu = false">Stylist</a>
        </li>
        <li class="py-6"></li>
        <li class="py-3">
          <a :href="`tel:${homeData.access.tel ?? ''}`"
            ><HeaderButton type="phone"
          /></a>
        </li>
        <li class="py-3">
          <a :href="homeData.hotpepperUrl ?? ''"><HeaderButton type="web" /></a>
        </li>
        <li class="py-3">
          <a :href="homeData.lineUrl ?? ''"><HeaderButton type="line" /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* nav button */
.my-navpath {
  transition: 0.2192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
}
.my-navpath::before,
.my-navpath::after {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #773818;
  transition: 0.2192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
}
.my-navpath::before {
  bottom: 16px;
}
.my-navpath::after {
  top: 16px;
}

.my-navinput:checked ~ .my-navbutton .my-navpath {
  background: rgba(0, 0, 0, 0);
  transition: 0.2192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
}
.my-navinput:checked ~ .my-navbutton .my-navpath::before,
.my-navinput:checked ~ .my-navbutton .my-navpath::after {
  background: #fff;
}
.my-navinput:checked ~ .my-navbutton .my-navpath::before {
  bottom: 0px;
  transform: rotate(45deg);
}
.my-navinput:checked ~ .my-navbutton .my-navpath::after {
  top: 0px;
  transform: rotate(-45deg);
}
</style>
