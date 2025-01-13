<script>
  let val1 = 0;
  let val2 = 0;
</script>

<input type="number" bind:value={val1}>
<input type="number" bind:value={val2}>

<p>{val1 + val2}</p>
<template>
  <div>
    <input type="number" v-model.number="val1">
    <input type="number" v-model.number="val2">
    <p>{{val1 + val2}}</p>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        val1: 0,
        val2: 0,
      };
    }
  };
</script>
