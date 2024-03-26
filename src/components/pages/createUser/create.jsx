import React from "react";

const Create = () => {
  return (
    <div id="main-content">
      <div class="container_12">
        <div class="grid_12">
          <h1>Create</h1>
          <p>Fill in the form below</p>
        </div>

        <div class="grid_12">
          <div class="block-border">
            <div class="block-header">
              <h1>Form</h1>
              <span></span>
            </div>
            <form id="form" class="block-content form" action="" method="post">
              <fieldset>
                <legend>Info</legend>
                <div class="_100">
                  <p class="inline-small-label">
                    <label for="field4">Fullname</label>
                    <input type="text" name="field4" class="text" />
                  </p>
                  <p class="inline-small-label">
                    <span class="label">Country</span>
                    <div class="selector" id="uniform-undefined">
                      <span>Lorem Ipsum</span>
                      <select style={{ opacity: 0 }}>
                        <option>Actor</option>
                        <option>Singer</option>
                        <option>Comedian</option>
                        <option>Influencer</option>
                      </select>
                    </div>
                  </p>
                  <p>
                    <label for="datepicker">Date of birth</label>
                    <input
                      id="datepicker"
                      name="datepicker"
                      class="required hasDatepicker text error"
                      type="date"
                      value=""
                    />
                    <div for="datepicker" generated="true" class="error">
                      This field is required.
                    </div>
                  </p>
                </div>

                <div class="_100">
                  <p class="inline-small-label">
                    <span class="label">Select Category</span>
                    <div class="selector" id="uniform-undefined">
                      <span>Lorem Ipsum</span>
                      <select style={{ opacity: 0 }}>
                        <option>Actor</option>
                        <option>Singer</option>
                        <option>Comedian</option>
                        <option>Influencer</option>
                      </select>
                    </div>
                  </p>
                </div>
              </fieldset>
              <fieldset>
                <legend>Image</legend>
                <div class="_100">
                  <p>
                    <label for="file">Upload photo</label>
                    <div class="uploader" id="uniform-undefined">
                      <input type="file" size="19" style={{ opacity: "0" }} />
                      <span class="filename">No file selected</span>
                      <span class="action">Choose File</span>
                    </div>
                  </p>
                </div>
              </fieldset>
              <div class="block-actions">
                <ul class="actions-left">
                  <li>
                    <a class="close-toolbox button red" href="\#">
                      Reset
                    </a>
                  </li>
                </ul>
                <ul class="actions-left">
                  <li>
                    <input
                      type="submit"
                      class="button"
                      value="Click here to validate the form!"
                    />
                  </li>
                </ul>
                <ul class="actions-right">
                  <li>
                    <a class="close-toolbox button" href="\#">
                      Create it!
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>

        <div class="clear"></div>

        <div class="clear height-fix"></div>
      </div>
    </div>
  );
};

export default Create;
