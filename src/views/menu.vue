<template>
  <div class="menu-container" v-motion-slide-left>
    <app-header rootClassName="header-root-class-name"></app-header>
    <div class="menu-container1">
      <div class="menu-container2">
        <div @click="router.push('/distance')"
         class="menu-card">
          <div class="menu-container3"></div>
          <span class="menu-text">Distance</span>
        </div>
        <div @click="router.push('/volume')"
        class="menu-card1">
          <div class="menu-container4"></div>
          <span class="menu-text1">Volume</span>
        </div>
        <div @click="router.push('/mass')"
         class="menu-card2">
          <div class="menu-container5"></div>
          <span class="menu-text2">Mass</span>
        </div>
      </div>
    </div>
    <app-tabs rootClassName="tabs-root-class-name"></app-tabs>
  </div>
</template>

<script setup>
import AppHeader from '@/components/header.vue'
import AppTabs from '@/components/tabs.vue'
import { useRouter } from 'vue-router';

const router = useRouter()
</script>

<style scoped>
.menu-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.menu-container1 {
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  justify-content: center;
  background-image: url('https://cdn.pixabay.com/photo/2018/02/23/12/38/flower-3175428_1280.jpg');
  background-repeat: no-repeat;
  background-position: center;
}
.menu-container2 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 25vw;
  padding-right: 25vw;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.27);
}
.menu-card {
  width: 100%;
  height: 20vh;
  display: flex;
  transition: 0.3s;
  align-items: center;
  border-radius: 22px;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: column;
  justify-content: flex-start;
}
.menu-card:hover {
  height: 24vh;
}
.menu-container3 {
  width: 100%;
  height: 154px;
  display: flex;
  align-items: flex-start;
  border-radius: 70px;
  background-size: cover;
  background-image: url('https://cdn.pixabay.com/photo/2014/01/04/12/34/road-238458_1280.jpg');
  background-position: center;
}
.menu-text {
  color: #ffffff;
  font-size: 21px;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  font-family: Poppins;
  font-weight: 700;
}
.menu-card1 {
  width: 100%;
  height: 20vh;
  display: flex;
  transition: 0.3s;
  align-items: center;
  border-radius: 22px;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: column;
  justify-content: flex-start;
}
.menu-card1:hover {
  height: 24vh;
}
.menu-container4 {
  width: 100%;
  height: 154px;
  display: flex;
  align-items: flex-start;
  border-radius: 40px;
  background-size: cover;
  background-image: url('https://cdn.pixabay.com/photo/2015/05/28/01/17/gallon-787382_1280.jpg');
  background-position: center;
}
.menu-text1 {
  color: #ffffff;
  font-size: 21px;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  font-family: Poppins;
  font-weight: 700;
}
.menu-card2 {
  width: 100%;
  height: 20vh;
  display: flex;
  transition: 0.3s;
  align-items: center;
  border-radius: 22px;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: column;
  justify-content: flex-start;
}
.menu-card2:hover {
  width: 100%;
  height: 24vh;
}
.menu-container5 {
  width: 100%;
  height: 154px;
  display: flex;
  transition: 0.3s;
  align-items: flex-start;
  border-radius: 40px;
  background-size: cover;
  background-image: url('https://cdn.pixabay.com/photo/2018/05/28/13/14/dumbell-3435990_1280.jpg');
  background-position: center;
}

.menu-text2 {
  color: #ffffff;
  font-size: 21px;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  font-family: Poppins;
  font-weight: 700;
}
@media(max-width: 479px) {
  .menu-container3 {
    border-color: #000000;
    border-width: 0px;
    border-radius: 40px;
  }
  .menu-container4 {
    border-color: #000000;
    border-width: 0px;
    border-radius: 40px;
  }
  .menu-container5 {
    border-radius: 40px;
  }
}
</style>
