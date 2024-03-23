<template>
  <div
    class="inline-block h-[40px] border border-solid border-main rounded-full"
  >
    <div class="inline-flex h-full items-center px-[20px] mx-auto">
      <img class="h-[55%] lg:pe-2" :src="iconPath" />
      <div class="hidden lg:inline-block flex-1 text-main">{{ text }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { css } from '@emotion/css';
const attrs = useAttrs();
const iconPath = ref<string>();
const text = ref<string>();

(() => {
  switch (attrs.type) {
    case 'phone':
      iconPath.value = '/icons/phone.svg';
      text.value = '予約・お問い合せ';
      break;

    case 'web':
      iconPath.value = '/icons/pc.svg';
      text.value = 'Webで予約';
      break;

    case 'line':
      iconPath.value = '/icons/line.svg';
      text.value = '予約・お問い合せ';
      break;

    default:
      break;
  }
})();
</script>
