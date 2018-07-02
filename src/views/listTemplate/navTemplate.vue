<template>
  <div class="navTemplate">
      <div class="navicon">
          <router-link to="/pcTemplate">
            <span class="fa fa-desktop navicon-pc" v-on:click="active='pc'" v-bind:style="active=='/pcTemplate'?'color:#1991eb;':''"></span>
          </router-link>
          <router-link to="/moblieTemplate">
           <span class="fa fa-mobile navicon-mobile" v-on:click="active='mobile'" v-bind:style="active=='/moblieTemplate'?'color:#1991eb;':''"></span>
          </router-link>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "pc"
    };
  },
  mounted() {
    this.active = this.$router.currentRoute.path;
  },
  methods: {}
};
</script>

<style lang="scss">
.navTemplate {
  padding-top: 60px;
  .navicon {
    width: 100%;
    height: 60px;
    background-color: #ffffff;
    border-bottom: solid 1px #e5e5e5;
    text-align: center;
    line-height: 74px;
    position: fixed;
    top: 60px;
    z-index: 100;
    .navicon-pc {
      display: inline-block;
      width: 31px;
      height: 31px;
      margin-right: 52px;
      cursor: pointer;
      font-size: 30px;
      vertical-align: text-bottom;
    }
    .navicon-mobile {
      display: inline-block;
      width: 20px;
      height: 30px;
      cursor: pointer;
      font-size: 38px;
    }
  }
}
</style>
