<template>
  <div class="home-container" v-motion-slide-left>
    <app-header></app-header>
    <div class="home-container1">
      <div class="home-container2">
        <span class="home-text">Physical quantity converter app</span>
        <button @click="router.push('/menu')"
         class="home-find button">
          <span class="home-text1">
            <span class="home-text2">Start</span>
            <br />
          </span>
        </button>
      </div>
    </div>
    <app-tabs></app-tabs>
  </div>
</template>

<script setup>
import AppHeader from '@/components/header.vue'
import AppTabs from '@/components/tabs.vue'
import { useRouter } from 'vue-router';
const router = useRouter()
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.home-container1 {
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
.home-container2 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.24);
}
.home-text {
  color: #ffffff;
  font-size: 48px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 700;
}
.home-find {
  color: var(--dl-color-gray-white);
  width: 147px;
  height: 73px;
  align-self: center;
  font-style: normal;
  margin-top: var(--dl-space-space-threeunits);
  transition: 0.3s;
  font-weight: 500;
  padding-top: var(--dl-space-space-unit);
  border-width: 0px;
  padding-left: var(--dl-space-space-oneandhalfunits);
  border-radius: 56px;
  padding-right: var(--dl-space-space-oneandhalfunits);
  padding-bottom: var(--dl-space-space-unit);
  background-color: rgb(255, 77, 210);
}
.home-find:hover {
  opacity: 0.5;
}
.home-text1 {
  font-style: normal;
  font-family: Poppins;
  font-weight: 700;
}
.home-text2:hover {
  opacity: 0.5;
}
@media(max-width: 991px) {
  .home-find {
    width: 139px;
    text-align: center;
    margin-right: 0px;
  }
  .home-text2 {
    width: 139px;
    text-align: center;
    margin-right: 0px;
  }
}
@media(max-width: 767px) {

  .home-container2 {
    height: 843px;
    padding-left: 5vw;
    padding-right: 5vw;
  }
  .home-text {
    text-align: center;
  }
  .home-find {
    width: 137px;
  }
  .home-text2 {
    width: 137px;
  }
}
@media(max-width: 479px) {
  .home-container1 {
    height: 826px;
  }
  .home-container2 {
    height: 853px;
  }
  .home-text {
    font-size: 42px;
    text-align: center;
  }
}
@media(max-width: 474px) {
  .home-find {
    margin-top: var(--dl-space-space-oneandhalfunits);
  }
  .home-text2 {
    margin-top: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
