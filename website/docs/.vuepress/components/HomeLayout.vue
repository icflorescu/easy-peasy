<template>
  <v-app light>
    <div class="header">
      <div class="title">
        Easy peasy global state
        <br>for React
      </div>
      <div class="logo-container">
        <img class="logo" src="../../assets/logo.png">
      </div>
    </div>
    <Content :custom="false"/>
  </v-app>
</template>

<style scoped>
.header {
  display: flex;
  height: 200px;
  margin: 0 auto;
  max-width: 900px;
  padding: 0 30px;
}

.title {
  align-items: center;
  display: flex;
  font-weight: bold;
  font-size: 3rem;
  height: 100%;
}

.logo-container {
  align-items: center;
  display: flex;
  flex-grow: 1;
  height: 100%;
  justify-content: center;
}

.header > div {
  flex-grow: 1;
}

.logo {
  width: 120px;
}
</style>