<template>
  <div class="distance-container" v-motion-slide-left>
    <app-header rootClassName="header-root-class-name1"></app-header>
    <div class="distance-container1">
      <div class="distance-container2">
        <span class="distance-text">Distance</span>
        <input
        v-model="value"
          type="number"
          placeholder="Enter value"
          class="distance-textinput input"
        />
        <v-select
        v-model="selectedUnit"
        :items="units"
        label="From"
         class="distance-select ">
         
        </v-select>

        <v-select
        v-model="toConvertUnit"
        :items="units"
        label="To"
         class="distance-select ">
         
        </v-select>
       
        <span class="distance-text">{{ solution.toFixed(3) }} {{ toConvertUnit  }}</span>

     
      </div>
    </div>
    <app-tabs rootClassName="tabs-root-class-name1"></app-tabs>
  </div>
</template>

<script setup>
import AppHeader from '@/components/header.vue'
import AppTabs from '@/components/tabs.vue'
import { ref, computed, watch } from 'vue';

const units= ['metres', 'kilometres', 'miles','feet']
const selectedUnit = ref('')
const toConvertUnit = ref('')

const value = ref(0)
const solution = ref(0)

watch(toConvertUnit, (x) =>{
if(selectedUnit.value === 'metres'){
    if(toConvertUnit.value === 'metres'){
    solution.value = value.value 
  }else if(toConvertUnit.value === 'kilometres'){
    solution.value = value.value/1000
  }
  else if(toConvertUnit.value === 'miles'){
    solution.value = value.value*0.00062137 
  }
  else if(toConvertUnit.value === 'feet'){
    solution.value = value.value*3.28084
  }
  }
   else 
   if(selectedUnit.value === 'kilometres'){
    if(toConvertUnit.value === 'metres'){
    solution.value = value.value * 1000
  }else if(toConvertUnit.value === 'kilometres'){
    solution.value = value.value
  }
  else if(toConvertUnit.value === 'miles'){
    solution.value = value.value*0.62137 
  }
  else if(toConvertUnit.value === 'feet'){
    solution.value = value.value*3280.84
  } 
  }
  else 
   if(selectedUnit.value === 'miles'){
    if(toConvertUnit.value === 'metres'){
    solution.value = value.value /0.00062137
  }else if(toConvertUnit.value === 'kilometres'){
    solution.value = value.value /0.62137
  }
  else if(toConvertUnit.value === 'miles'){
    solution.value = value.value
  }
  else if(toConvertUnit.value === 'feet'){
    solution.value = value.value*5280
  } 
  }

  else 
   if(selectedUnit.value === 'feet'){
    if(toConvertUnit.value === 'metres'){
    solution.value = value.value * 0.3048
  }else if(toConvertUnit.value === 'kilometres'){
    solution.value = value.value * 0.0003048
  }
  else if(toConvertUnit.value === 'miles'){
    solution.value = value.value*0.000189394
  }
  else if(toConvertUnit.value === 'feet'){
    solution.value = value.value
  } 
  }

})

function covert(){




}


</script>

<style scoped>
.distance-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.distance-container1 {
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: flex-start;
  background-size: cover;
  justify-content: center;
  background-image: url('https://cdn.pixabay.com/photo/2018/02/23/12/38/flower-3175428_1280.jpg');
  background-position: center;
}
.distance-container2 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 5vh;
  padding-bottom: 10vh;
  padding-left: 30vw;
  padding-right: 30vw;
  flex-direction: column;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0.17);
}
.distance-text {
  color: #ffffff;
  font-size: 42px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 800;
}
.distance-select {
  width: 100%;
  margin-top: var(--dl-space-space-twounits);
}
.distance-textinput {
  width: 100%;
  height: 12%;
  margin-top: var(--dl-space-space-twounits);
}
.distance-find {
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
.distance-find:hover {
  opacity: 0.5;
}
.distance-text1 {
  font-style: normal;
  font-family: Poppins;
  font-weight: 700;
}
.distance-text2:hover {
  opacity: 0.5;
}
.distance-textinput1 {
  width: 100%;
  height: 12%;
  margin-top: var(--dl-space-space-twounits);
}
.distance-select1 {
  width: 100%;
  height: 10%;
  margin-top: var(--dl-space-space-twounits);
}
@media(max-width: 991px) {
  .distance-find {
    width: 139px;
    text-align: center;
    margin-right: 0px;
  }
  .distance-text2 {
    width: 139px;
    text-align: center;
    margin-right: 0px;
  }
}
@media(max-width: 767px) {
  .distance-container2 {
    padding-left: 20vw;
    padding-right: 20vw;
  }
  .distance-find {
    width: 137px;
  }
  .distance-text2 {
    width: 137px;
  }
}
@media(max-width: 479px) {
  .distance-container2 {
    padding-top: 5vh;
    padding-left: 10vw;
    padding-right: 10vw;
    justify-content: flex-start;
  }
  .distance-text {
    font-size: 32px;
    font-style: normal;
    font-family: Poppins;
    font-weight: 700;
  }
}
@media(max-width: 474px) {
  .distance-find {
    margin-top: var(--dl-space-space-oneandhalfunits);
  }
  .distance-text2 {
    margin-top: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
