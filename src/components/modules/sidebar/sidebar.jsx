import React from 'react'
import misc_avatar from "../../styles/img/misc/avatar_small.png"
import dashboard from "../../styles/img/icons/packs/fugue/16x16/dashboard.png"
import list from "../../styles/img/icons/packs/fugue/16x16/clipboard-list.png"
import notification from "../../styles/img/icons/packs/fugue/16x16/application--exclamation.png"

const Sidebar = () => {
  return (
    <div>
       <aside id="sidebar">
    <div id="search-bar">
      <form
        id="search-form"
        name="search-form"
        action="https://envato.stammtec.de/themeforest/grape/search.php"
        method="post">
        <input
          type="text"
          id="query"
          name="query"
          value=""
          autocomplete="off"
          placeholder="Search"
        />
      </form>
    </div>
    <section id="login-details">
      <img
        class="img-left framed"
        src={misc_avatar}
        alt="Hello Admin"
      />
      <h3>Logged in as</h3>
      <h2>
        <a class="user-button" href="/#">
          Administrator&nbsp;
          <span class="arrow-link-down"></span>
        </a>
      </h2>
      <ul class="dropdown-username-menu">
        <li>
          <a href="#">Profile</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
        <li>
          <a href="#">Messages</a>
        </li>
        <li>
          <a href="#">Logout</a>
        </li>
      </ul>
      <div class="clearfix"></div>
    </section>
    <nav id="nav">
      <ul class="menu collapsible shadow-bottom">
        <li>
          <a href="/dashboard" class="current">
            <img src={dashboard} />
            Dashboard
            <span class="badge">2</span>
          </a>
        </li>
        <li>
          <a href="/#">
            <img src={list} />
            Lists
            <span class="badge grey">3</span>
          </a>
          <ul class="sub">
            <li>
              <a href="list_block.html">Block Lists</a>
            </li>
            <li>
              <a href="list_shortcut.html">Shortcut List</a>
            </li>
            <li>
              <a href="list_contact.html">Contact List</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="notifications.html">
            <img src={notification} />
            Notifications
          </a>
        </li>
      </ul>
    </nav>
  </aside>
    </div>
  )
}

export default Sidebar
