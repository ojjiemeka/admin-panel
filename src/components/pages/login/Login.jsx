import React from 'react'

const Login = () => {
  return (
    <div>
    <div id="container">
    <section id="login-box">
    <div class="block-border">
          <div class="block-header"><h1>Login</h1></div>
          <form
            id="login-form"
            class="block-content form"
            action="https://envato.stammtec.de/themeforest/grape/dashboard.html"
            method="post">
              <p class="inline-small-label">
              <label for="username">Username</label>
              <input type="text" name="username" value="" class="required" />
            </p>
            <p class="inline-small-label">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                value=""
                class="required" />
            </p>
            <p>
              <label>
                <input type="checkbox" name="keep_logged" /> 
                Auto-login in future.
                </label>
            </p>
            <div class="clear"></div>
            <div class="block-actions">
              <ul class="actions-left">
                <li>
                  <a href='/Dashboard' class="button" name="recover_password" >Recover Password</a>
                </li>
                <li class="divider-vertical"></li>
                <li>
                  <a class="button red" id="reset-login" href="/#" >Cancel</a >
                </li>
              </ul>
              <ul class="actions-right">
                <li><input type="submit" class="button" value="Login" /></li>
              </ul>
              </div>
            </form>
    </div>
    </section>
    </div>
    </div>
  )
}

export default Login
