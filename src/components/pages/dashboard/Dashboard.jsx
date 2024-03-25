import React from "react";
import logo from "../../styles/img/logo.png"
import mail from '../../styles/img/icons/packs/fugue/16x16/mail.png'
import misc_avatar from "../../styles/img/misc/avatar_small.png"
import dashboard from "../../styles/img/icons/packs/fugue/16x16/dashboard.png"
import list from "../../styles/img/icons/packs/fugue/16x16/clipboard-list.png"
import notification from "../../styles/img/icons/packs/fugue/16x16/application--exclamation.png"
import sidebar from "../../modules/sidebar/sidebar";
const Dashboard = () => {
  return (
    <>
      <div id="container">
        <div id="header-surround">
          <header id="header">
            <img src={logo} alt="Grape" class="logo" />
            <div class="divider-header divider-vertical"></div>
            <a
              href="/#"
              onclick="$('#info-dialog').dialog({ modal: true });">
              <span class="btn-info"></span>
            </a>
            <div id="info-dialog" title="About" style={{ display: 'none' }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <ul class="toolbox-header">
              <li>
                <a
                  rel="tooltip"
                  title="Create a User"
                  class="toolbox-action"
                  href="/#">
                  <span class="i-24-user-business"></span>
                </a>
                <div class="toolbox-content">
                  <div class="block-border">
                    <div class="block-header small">
                      <h1>Create a User</h1>
                    </div>
                    <form
                      id="create-user-form"
                      class="block-content form"
                      action="#"
                      method="post">
                      <div class="_100">
                        <p>
                          <label for="username">Username</label>
                          <input
                            id="username"
                            name="username"
                            class="required"
                            type="text"
                            value=""
                          />
                        </p>
                      </div>
                      <div class="_50">
                        <p class="no-top-margin">
                          <label for="firstname">Firstname</label>
                          <input
                            id="firstname"
                            name="firstname"
                            class="required"
                            type="text"
                            value=""
                          />
                        </p>
                      </div>
                      <div class="_50">
                        <p class="no-top-margin">
                          <label for="lastname">Lastname</label>
                          <input
                            id="lastname"
                            name="lastname"
                            class="required"
                            type="text"
                            value=""
                          />
                        </p>
                      </div>
                      <div class="clear"></div>
                      <div class="block-actions">
                        <ul class="actions-left">
                          <li>
                            <a
                              class="close-toolbox button red"
                              id="reset"
                              href="/#">
                              Cancel
                            </a>
                          </li>
                        </ul>
                        <ul class="actions-right">
                          <li>
                            <input
                              type="submit"
                              class="button"
                              value="Create the User"
                            />
                          </li>
                        </ul>
                      </div>
                    </form>
                  </div>
                </div>
              </li>
              <li>
                <a
                  rel="tooltip"
                  title="Write a Message"
                  class="toolbox-action"
                  href="/#">
                  <span class="i-24-inbox-document"></span>
                </a>
                <div class="toolbox-content">
                  <div class="block-border">
                    <div class="block-header small">
                      <h1>Write a Message</h1>
                    </div>
                    <form
                      id="write-message-form"
                      class="block-content form"
                      action="#"
                      method="post">
                      <p class="inline-mini-label">
                        <label for="recipient">Recipient</label>
                        <input type="text" name="recipient" class="required" />
                      </p>
                      <p class="inline-mini-label">
                        <label for="subject">Subject</label>
                        <input type="text" name="subject" />
                      </p>{" "}
                      <div class="_100">
                        <p class="no-top-margin">
                          <label for="message">Message</label>
                          <textarea
                            id="message"
                            name="message"
                            class="required"
                            rows="5"
                            cols="40"></textarea>
                        </p>
                      </div>
                      <div class="clear"></div>
                      <div class="block-actions">
                        <ul class="actions-left">
                          <li>
                            <a
                              class="close-toolbox button red"
                              id="reset2"
                              href="/#">
                              Cancel
                            </a>
                          </li>
                        </ul>
                        <ul class="actions-right">
                          <li>
                            <input
                              type="submit"
                              class="button"
                              value="Send Message"
                            />
                          </li>
                        </ul>
                      </div>
                    </form>
                  </div>
                </div>
              </li>
              <li>
                <a
                  rel="tooltip"
                  title="Create a Folder"
                  class="toolbox-action"
                  href="/#">
                  <span class="i-24-folder-horizontal-open"></span>
                </a>
                <div class="toolbox-content">
                  <div class="block-border">
                    <div class="block-header small">
                      <h1>Create a Folder</h1>
                    </div>
                    <form
                      id="create-folder-form"
                      class="block-content form"
                      action="#"
                      method="post">
                      <p class="inline-mini-label">
                        <label for="folder-name">Name</label>
                        <input
                          type="text"
                          name="folder-name"
                          class="required"
                        />
                      </p>{" "}
                      <div class="block-actions">
                        <ul class="actions-left">
                          <li>
                            <a
                              class="close-toolbox button red"
                              id="reset3"
                              href="/#">
                              Cancel
                            </a>
                          </li>
                        </ul>
                        <ul class="actions-right">
                          <li>
                            <input
                              type="submit"
                              class="button"
                              value="Create Folder"
                            />
                          </li>
                        </ul>
                      </div>
                    </form>
                  </div>
                </div>
              </li>
            </ul>
            <div id="user-info">
              <p>
                <span class="messages">
                  Hello
                  <a href="/#">Administrator</a> (
                  <a href="/#">
                    <img
                      src={mail}
                      alt="Messages"
                    />
                    3 new messages
                  </a>{" "}
                  )
                </span>
                <a href="/#" class="toolbox-action button">
                  Settings
                </a>
                <a href="/#" class="button red">
                  Logout
                </a>
              </p>
            </div>
          </header>
        </div>
        <div class="fix-shadow-bottom-height"></div>
       
       

        <div id="main" role="main">
          <div id="title-bar">
            <ul id="breadcrumbs">
              <li>
                <a href="dashboard.html" title="Home">
                  <span id="bc-home"></span>
                </a>
              </li>
              <li class="no-hover">Dashboard</li>
            </ul>
          </div>
          <div class="shadow-bottom shadow-titlebar"></div>
          <div id="main-content">
            <div class="container_12">
              <div class="grid_12">
                <h1>Dashboard</h1>
                <p>Here you have a quick overview of some features</p>
                <div class="alert info">
                  <span class="hide">x</span>
                  <strong>
                    Hey there! Welcome to the professional and flexible admin
                    template &quot;Grape&quot;. I hope you enjoy your stay and
                    please make sure, that you visit the other pages.
                  </strong>
                </div>
              </div>
              <div class="grid_12">
                <div class="block-border">
                  <div class="block-content">
                    <ul class="shortcut-list">
                      <li>
                        <a href="/#">
                          <img src="img/icons/packs/crystal/48x48/apps/kedit.png" />{" "}
                          Write an Article
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <img src="img/icons/packs/crystal/48x48/apps/penguin.png" />{" "}
                          User Manager
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <img src="img/icons/packs/crystal/48x48/apps/wifi.png" />{" "}
                          Control Monitor
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <img src="img/icons/packs/crystal/48x48/apps/mailreminder.png" />{" "}
                          Check the Mails
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <img src="img/icons/packs/crystal/48x48/apps/Volume%20Manager.png" />{" "}
                          Statistics
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <img src="img/icons/packs/crystal/48x48/apps/terminal.png" />{" "}
                          Manage Console
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <img src="img/icons/packs/crystal/48x48/apps/knotes.png" />{" "}
                          Notes
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <img src="img/icons/packs/crystal/48x48/apps/kview.png" />{" "}
                          Manage Images
                        </a>
                      </li>
                    </ul>
                    <div class="clear"></div>
                  </div>
                </div>
              </div>
              <div class="grid_4">
                <div class="block-border">
                  <div class="block-header">
                    <h1>Create a Blogpost</h1>
                    <span></span>
                  </div>
                  <form
                    id="validate-form"
                    class="block-content form"
                    action="https://envato.stammtec.de/themeforest/grape/dashboard.html"
                    method="post">
                    <p class="inline-mini-label">
                      <label for="title">Title</label>
                      <input type="text" name="title" class="required" />
                    </p>
                    <p class="inline-mini-label">
                      <label for="category">Category</label>
                      <select name="category" id="category">
                        <option>Lorem Ipsum</option>
                        <option>Consetetur Sadipscing</option>
                        <option>Eirmod Tempor</option>
                      </select>
                    </p>
                    <p class="inline-mini-label">
                      <label for="post">Post</label>
                      <textarea
                        id="post"
                        name="post"
                        class="required"
                        rows="5"
                        cols="40"></textarea>
                    </p>
                    <div class="clear"></div>
                    <div class="block-actions">
                      <ul class="actions-left">
                        <li>
                          <a
                            class="button red"
                            id="reset-validate-form"
                            href="/#">
                            Cancel
                          </a>
                        </li>
                      </ul>
                      <ul class="actions-right">
                        <li>
                          <input
                            type="submit"
                            class="button"
                            value="Create Post"
                          />
                        </li>
                      </ul>
                    </div>
                  </form>
                </div>
              </div>
              <div class="grid_4">
                <div class="block-border">
                  <div class="block-header">
                    <h1>What you should do</h1>
                    <span></span>
                  </div>
                  <div class="block-content">
                    <ul class="block-list with-icon">
                      <li class="i-16-calendar">Lorem ipsum</li>
                      <li class="i-16-application">Lorem ipsum</li>
                      <li class="i-16-balloon">Lorem ipsum</li>
                      <li class="i-16-chart">Lorem ipsum</li>
                      <li class="i-16-drive">Lorem ipsum</li>
                    </ul>
                  </div>
                  <div class="block-content dark-bg">
                    <p>
                      Visit the
                      <a href="list_block.html">Block List</a>
                      page to see the other types of block lists.
                    </p>
                  </div>
                </div>
              </div>
              <div class='"grid_4"'>
                <div class="block-border">
                  <div class="block-header">
                    <h1>Overview-List</h1>
                    <span></span>
                  </div>
                  <div class="block-content">
                    <div class="alert info no-margin top">
                      You have 12 new support tickets.
                    </div>
                    <ul class="overview-list">
                      <li>
                        <a href="/#">
                          <span>8262</span>
                          Total Visits
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <span>521</span> Today Visits
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <span>257</span> Comments
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <span>42</span> Support Tickets
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="clear height-fix"></div>
            </div>
          </div>
        </div>
        <footer id="footer">
          <div class="container_12">
            <div class="grid_12">
              <div class="footer-icon align-center">
                <a class="top" href="/#top"></a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Dashboard;
