<template>
  <div class="flex justify-center items-center gap-2 xl:w-full">
    <div class="xl:flex justify-end hidden">
      <i class="cursor-pointer bi bi-shield-shaded"></i>
    </div>
    <div class="bg-stone-300 flex justify-between rounded-md xl:w-full p-0.5">
      <div class="w-full flex justify-center gap-1">
        <i class="cursor-pointer bi bi-lock-fill"></i>
        <slot></slot>
      </div>
      <i class="cursor-pointer bi bi-arrow-clockwise pe-2"></i>
    </div>
  </div>
</template>
