<template>
  <div>
    <div :class="styles.logo">
      <img src="" />
    </div>
    <div :class="styles.navMenu">
      <div :class="styles.menu"></div>
      <div :class="styles.reservation">
        <HeaderButton type="phone" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { css } from '@emotion/css';

const styles = {
  logo: css({}),
  navMenu: css({}),
  menu: css({}),
  reservation: css({}),
};
</script>
