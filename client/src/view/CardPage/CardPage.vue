<template>
  <div class="cardpage" :class="{hidecard: !hide}">
    <el-card style="padding: 10px">
      <h1>{{ card.name }}</h1>
      <el-button type="primary" @click="$emit('back')">Назад</el-button>
      <div>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
        <p>11</p>
        <p>12</p>
        <p>13</p>
        <p>14</p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'CardPage',
  props: ['card', 'hide'],
  emits: ['back'],
  data() {
    return {

    }
  },
  computed: {

  },

}
</script>
