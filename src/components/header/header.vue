<template>
  <div>
    <header>
      <div class="header-logo ">
        <img src="../../images/31logo.png" alt="logo" class="logo">
      </div>
      <div class="header-operations">
        <span><img src="../../images/userLogo.png" class="userLogo"/></span>
        <span class="username">{{user.name}}</span>
      </div>
    </header>
  </div>
</template>

<script>
  export default {
    props: {
      user: {}
    },
    data() {
      return {};
    },
  };
</script>

<style lang="scss">
  header {
    background-color: rgb(255, 255, 255);
    border-bottom: 1px solid rgb(224, 224, 224);
    height: 60px;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    padding: 0 20px 0 0;
    z-index: 999;
    box-sizing: border-box;
    position: fixed;
    .header-logo {
      display: inline-block;
      width: 199px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      background-color: rgb(25, 145, 235);
      overflow: hidden;
      .logo {
        max-width: 100%;
        vertical-align: middle;
      }
    }
    .header-operations {
      display: inline-block;
      float: right;
      height: 100%;
      .userLogo {
        width: 40px;
        vertical-align: middle;
      }
      .username {
        margin-left: 10px;
        color: rgb(51, 51, 51);
      }
    }
    .header-operations:after,
    &:after {
      display: inline-block;
      content: "";
      height: 100%;
      vertical-align: middle;
    }
  }
  
  .header-opacity {
    opacity: .7;
  }
</style>
