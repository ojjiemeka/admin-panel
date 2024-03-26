import React from "react";

const QuickMenu = () => {
  return (
    <>
      <div class="grid_4">
        <div class="block-border">
          <div class="block-header">
            <h1>Create a Celeb</h1>
            <span></span>
          </div>
          <form
            id="validate-form"
            class="block-content form"
            action="dashboard.html"
            method="post">
            <p class="inline-mini-label">
              <label for="title">Name</label>
              <input type="text" name="title" class="required text" />
            </p>
            <p class="inline-mini-label">
              <label for="category">Category</label>
              <div class="selector" id="uniform-category">
                <span>Select a category</span>
                <select name="category" id="category" style={{ opacity: 0 }}>
                  <option>Actor</option>
                  <option>Singer</option>
                  <option>Influencer</option>
                </select>
              </div>
            </p>
            <p class="inline-mini-label">
              <label for="post">About</label>
              <textarea
                id="post"
                name="post"
                class="required uniform"
                rows="5"
                cols="40"></textarea>
            </p>
            <p></p>
            <div class="clear"></div>
            <div class="block-actions">
              <ul class="actions-left">
                <li>
                  <a class="button red" id="reset-validate-form" href="\#">
                    Cancel
                  </a>
                </li>
              </ul>
              <ul class="actions-right">
                <li>
                  <input type="submit" class="button" value="Create Post" />
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
      <div class="grid_4">
        <div class="block-border">
          <div class="block-header">
            <h1>Active List</h1>
            <span></span>
          </div>
          <div class="block-content">
            <ul class="block-list with-icon">
              <li class="i-16-status">User 1</li>
              <li class="i-16-status">User 2</li>
              <li class="i-16-status">User 3</li>
            </ul>
          </div>
          <div class="block-content dark-bg">
            <p>
              Visit the
              <a href="\#">Block List</a> page to see the other types of block
              lists.
            </p>
          </div>
        </div>
      </div>
      <div class="grid_4">
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
                <a href="\#">
                  <span>8262</span> Total Visits
                </a>
              </li>
              <li>
                <a href="\#">
                  <span>521</span>
                  Today Visits
                </a>
              </li>
              <li>
                <a href="\#">
                  <span>257</span> Comments
                </a>
              </li>
              <li>
                <a href="\#">
                  <span>42</span> Support Tickets
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickMenu;
