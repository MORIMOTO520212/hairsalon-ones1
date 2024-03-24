<template>
  <a href="">
    <div
      class="inline-block w-[240px] md:w-auto h-[40px] border border-solid border-white md:border-main rounded-full"
    >
      <div class="inline-flex h-full items-center px-[20px] mx-auto">
        <img
          class="hidden md:block h-[55%] pe-2 md:pe-0 lg:pe-2"
          :src="iconPath[0]"
        />
        <img
          class="block md:hidden h-[55%] pe-2 md:pe-0 lg:pe-2"
          :src="iconPath[1]"
        />
        <div
          class="inline-block md:hidden lg:inline-block flex-1 text-white md:text-main"
        >
          {{ text }}
        </div>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { css } from '@emotion/css';
const attrs = useAttrs();
const iconPath = ref<Array<string>>(['', '']);
const text = ref<string>();

(() => {
  switch (attrs.type) {
    case 'phone':
      iconPath.value = ['/icons/phone.svg', '/icons/phone-white.svg'];
      text.value = '予約・お問い合せ';
      break;

    case 'web':
      iconPath.value = ['/icons/pc.svg', '/icons/pc-white.svg'];
      text.value = 'Webで予約';
      break;

    case 'line':
      iconPath.value = ['/icons/line.svg', '/icons/line-white.svg'];
      text.value = '予約・お問い合せ';
      break;

    default:
      text.value = '未設定';
      break;
  }
})();
</script>
