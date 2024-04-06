<script setup lang="ts"></script>

<template>
  <div class="flex justify-center">
    <h1
      :id="$attrs.props.id ?? ''"
      class="inline-block text-4xl leading-[4rem] border-b border-main text-main"
      :style="{ fontFamily: 'Jost, sans-serif' }"
    >
      {{ $attrs.props.value ?? '' }}
    </h1>
  </div>
</template>
