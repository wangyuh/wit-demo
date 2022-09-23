import Vue from "vue";

/* 数据值不存在的时候的占位值 */
Vue.filter('placeholder', value => {
    return value ? value : "--";
})