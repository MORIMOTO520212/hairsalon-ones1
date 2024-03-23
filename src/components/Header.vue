<template>
  <div class="hidden md:flex justify-between h-[100px]">
    <div
      class="flex justify-center items-center w-[213px] h-[141px] rounded-br-[30px] bg-[#A86E49] z-10"
    >
      <img class="w-[95%]" src="/images/logo-lg.png" />
    </div>
    <div class="flex flex-1 justify-end">
      <ul class="flex flex-1 justify-around items-center w-full max-w-[400px]">
        <li class="text-main px-1"><a href="">Blog</a></li>
        <li class="text-main px-1"><a href="">Concept</a></li>
        <li class="text-main px-1"><a href="">Gallery</a></li>
        <li class="text-main px-1"><a href="">Menu</a></li>
        <li class="text-main px-1"><a href="">Stylist</a></li>
      </ul>
      <ul class="flex items-center">
        <li class="px-1"><HeaderButton type="phone" /></li>
        <li class="px-1"><HeaderButton type="web" /></li>
        <li class="px-1"><HeaderButton type="line" /></li>
      </ul>
    </div>
  </div>
  <!--mobile-->
  <div class="flex md:hidden h-[70px]">
    <div
      class="flex justify-center items-center w-[213px] h-[141px] rounded-br-[30px] bg-[#A86E49] z-10"
    >
      <img class="w-[95%]" src="/images/logo-lg.png" />
    </div>
  </div>
  <div class="">
    <input type="checkbox" id="navButton" />
    <label for="navButton" class="w-[50px] h-[50px]"></label>
  </div>
</template>

<script setup lang="ts">
import { css } from '@emotion/css';
</script>
