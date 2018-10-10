<template>
  <div id="app">
    <!-- App -->
  <f7-app :params="f7params">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Left Panel -->
    <!-- <f7-panel left reveal theme-dark>
      <f7-view url="/panel-left/"></f7-view>
    </f7-panel> -->

    <!-- Right Panel -->
    <!-- <f7-panel right cover theme-dark>
      <f7-view url="/panel-right/"></f7-view>
    </f7-panel> -->

    <!-- Main View -->
    <f7-view url="/" main></f7-view>

    <!-- Popup -->
    <!-- <f7-popup id="popup">
      <f7-view>
        <f7-page>
          <f7-navbar title="Popup">
            <f7-nav-right>
              <f7-link popup-close>Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</f7-block>
        </f7-page>
      </f7-view>
    </f7-popup> -->
    <!-- Login Screen -->
    <!-- <f7-login-screen id="login-screen">
      <f7-view>
        <f7-page login-screen>
          <f7-login-screen-title>Login</f7-login-screen-title>
          <f7-list form>
            <f7-list-item>
              <f7-label>Username</f7-label>
              <f7-input name="username" placeholder="Username" type="text"></f7-input>
            </f7-list-item>
            <f7-list-item>
              <f7-label>Password</f7-label>
              <f7-input name="password" type="password" placeholder="Password"></f7-input>
            </f7-list-item>
          </f7-list>
          <f7-list>
            <f7-list-button title="Sign In" login-screen-close></f7-list-button>
            <f7-block-footer>
              <p>Click Sign In to close Login Screen</p>
            </f7-block-footer>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-login-screen> -->
  </f7-app>
  </div>
</template>

<style lang="scss">
</style>

<script>
import { f7App, f7Panel, f7View, f7Statusbar } from "framework7-vue";
// Import Routes
import routes from "./router.js";

export default {
  components: {
    f7App,
    f7View,
    f7Statusbar
  },
  data() {
    return {
      // Framework7 parameters here
      f7params: {
        id: "cn.framework7.app", // App bundle ID
        name: "f7", // App name
        theme: "ios", // Automatic theme detection
        // App routes
        routes: routes,
        view: {
          name: "main",
          main: true,
          xhrCache: false,
          iosDynamicNavbar: false,
          pushState: true,
          pushStateRoot: "http://localhost:8080", // 确保与部署的根域名保持一致
          pushStateSeparator: "" // 这里保持为空
        },
        on: {
          init: function() {
            console.log("App init");
          }
        }
      }
    };
  }
};
</script>

