<script setup>
const props = defineProps({
  pad: String,
  classIn: String,
  classOut: String,
});
</script>

<template>
  <main :class="`flex justify-center ${classOut ?? ' '}`">
    <div :class="'container xl:w-[1124]'">
      <div :class="pad ?? ' '">
        <div :class="classIn ?? ' '"><slot /></div>
      </div>
    </div>
  </main>
</template>
<style></style>

export const H800p3 = base(Contain, { classOut: "min-h-[800px]", pad: "px-2
md:px-[3%]", classIn: " flex ", }); export const H0p3 = base(Contain, {
classOut: "", pad: "px-2 md:px-[%]", classIn: " flex ", }); export const
Brilliant = base(Contain, { classOut: "", pad: "px-2 sm:px-[15%] md:px-[20%]
lg:px-[22%] xl:px-[24%]", classIn: " flex flex-wrap ", }); export const ContainX
= { H800p3, H0p3, Brilliant, };
