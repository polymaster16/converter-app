<template>
  <header data-role="Header" class="header-header" v-bind:class="rootClassName">
    <svg viewBox="0 0 809.1062857142856 1024" class="header-icon">
      <path
        d="M465.714 490.857c6.286 48-52 85.714-92.571 61.143-45.714-20-45.714-92.571-1.143-113.143 38.286-23.429 93.714 7.429 93.714 52zM529.143 478.857c-10.286-81.143-102.286-134.857-177.143-101.143-47.429 21.143-79.429 71.429-77.143 124.571 2.857 69.714 69.143 126.857 138.857 120.571s124-74.286 115.429-144zM665.714 169.143c-25.143-33.143-68-38.857-105.714-45.143-106.857-17.143-216.571-17.714-323.429 1.143-35.429 5.714-75.429 12-97.714 44 36.571 34.286 88.571 39.429 135.429 45.143 84.571 10.857 171.429 11.429 256 0.571 47.429-5.714 100-10.286 135.429-45.714zM698.286 760.571c-16 56-6.857 131.429-66.286 164-102.286 56.571-226.286 62.857-338.857 42.857-59.429-10.857-129.143-29.714-161.714-85.714-14.286-54.857-23.429-110.857-32.571-166.857l3.429-9.143 10.286-5.143c170.286 112.571 408.571 112.571 579.429 0 26.857 8 6.857 40.571 6.286 60zM801.714 211.429c-19.429 125.143-41.714 249.714-63.429 374.286-6.286 36.571-41.714 57.143-71.429 72.571-106.857 53.714-231.429 62.857-348.571 50.286-79.429-8.571-160.571-29.714-225.143-79.429-30.286-23.429-30.286-63.429-36-97.143-20-117.143-42.857-234.286-57.143-352.571 6.857-51.429 64.571-73.714 107.429-89.714 57.143-21.143 118.286-30.857 178.857-36.571 129.143-12.571 261.143-8 386.286 28.571 44.571 13.143 92.571 31.429 122.857 69.714 13.714 17.714 9.143 40 6.286 60z"
      ></path>
    </svg>
    <div class="header-container"></div>
    <div class="header-btn-group"></div>
    <div data-role="BurgerMenu" class="header-burger-menu">
      <svg viewBox="0 0 1024 1024" class="header-icon02">
        <path
          d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
        ></path>
      </svg>
    </div>
    <div data-role="MobileMenu" class="header-mobile-menu">
      <nav class="header-nav">
        <div class="header-container1">
          <img :alt="image_alt" :src="image_src" class="header-image" />
          <div data-role="CloseMobileMenu" class="header-close-mobile-menu">
            <svg viewBox="0 0 1024 1024" class="header-icon04">
              <path
                d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
              ></path>
            </svg>
          </div>
        </div>
      </nav>
      <div>
        <svg viewBox="0 0 950.8571428571428 1024" class="header-icon06">
          <path
            d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
          ></path></svg
        ><svg viewBox="0 0 877.7142857142857 1024" class="header-icon08">
          <path
            d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
          ></path></svg
        ><svg viewBox="0 0 602.2582857142856 1024" class="header-icon10">
          <path
            d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
          ></path>
        </svg>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    image_alt: {
      type: String,
      default: 'image',
    },
    image_src: {
      type: String,
      default:
        'https://presentation-website-assets.teleporthq.io/logos/logo.png',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.header-header {
  width: 100%;
  height: 10vh;
  display: flex;
  position: relative;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: space-between;
  background-color: var(--dl-color-gray-white);
}
.header-icon {
  fill: #ec79a6;
  width: auto;
  height: 5vh;
}
.header-container {
  flex: 0 0 auto;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  align-items: center;
  flex-direction: row;
}
.header-btn-group {
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.header-burger-menu {
  display: none;
}
.header-icon02 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  display: none;
}
.header-mobile-menu {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: 32px;
  z-index: 100;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
}
.header-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.header-container1 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.header-image {
  height: 2rem;
}
.header-close-mobile-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.header-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.header-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.header-icon10 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}


@media(max-width: 991px) {
  .header-icon02 {
    display: flex;
  }
}
@media(max-width: 767px) {
  .header-header {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .header-icon {
    width: 49px;
    height: 43px;
  }
  .header-btn-group {
    display: none;
  }
  .header-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media(max-width: 479px) {
  .header-header {
    padding: var(--dl-space-space-unit);
  }
  .header-icon {
    fill: #d4578b;
  }
  .header-icon02 {
    width: 29px;
    height: 30px;
  }
  .header-mobile-menu {
    padding: 16px;
  }
}
</style>
