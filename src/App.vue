<template>
  <div id="app">
    <!-- 父子切换动画 -->
    <!-- <transition name="direction">
			<router-view class="direction-view"/>
		</transition> -->
    <transition name="fade" mode="out-in">
      <router-view class="direction-view" />
    </transition>
  </div>
</template>

<style lang="scss">
.el-row {
  margin-bottom: 20px;
}
/* 父子切换动画 */
/* .direction-enter,
	.direction-leave-to {
	  transform: translate3d(100%, 0, 0);
	}
	
	.direction-view {
	  position: absolute;
	  top: 0;
	  left: 0;
	  bottom: 0;
	  width: 100vw;
	  z-index: 100;
	  overflow: hidden;
	  transition: transform 0.3s;
	} */
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  background: url(assets/loading.png) center center no-repeat;
  background-size: 300px;
}
.direction-view {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  z-index: 100;
  overflow: hidden;
  background-color: #fff;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
