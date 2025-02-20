<template>
  <div class="flex justify-end">
    <i class="cursor-pointer bi bi-shield-shaded"></i>
  </div>
  <div class="bg-stone-300 flex justify-between rounded-md w-3/6 p-0.5">
    <div class="w-full flex justify-center gap-1">
      <i class="cursor-pointer bi bi-lock-fill"></i>
      <slot></slot>
    </div>
    <i class="cursor-pointer bi bi-arrow-clockwise pe-2"></i>
  </div>
</template>
