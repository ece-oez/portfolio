<script setup></script>
<template>
  <div class="">
    <form
      action="/action_page.php"
      class="w-full flex flex-col gap-4 p-4 bg-inputbox rounded-2xl shadow-xl shadow-stone-600">
      <label for="name" class="text-stone-300">Ihr Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Max Mustermann"
        class="bg-dunkelgrau text-stone-400 p-2 px-5 rounded-lg" />
      <label for="betreff" class="text-stone-300">Betreff</label>
      <input
        type="betreff"
        id="betreff"
        name="betreff"
        placeholder="Vorstellungsgespräch"
        class="bg-dunkelgrau text-stone-400 p-2 ps-5 rounded-lg" />

      <label for="nachricht" class="text-stone-300">Nachricht</label>
      <textarea
        id="subject"
        name="subject"
        placeholder="Hiermit würden wir Sie gerne zum Vorstellungsgespräch einladen."
        style="height: 150px"
        class="bg-dunkelgrau text-stone-400 p-2 ps-5 rounded-lg resize-none"></textarea>

      <button
        class="flex gap-3 p-2 rounded-lg bg-white text-stone-600 cursor-pointer w-max">
        Senden
        <i class="bi bi-envelope-plus-fill"></i>
      </button>
    </form>
  </div>
</template>
