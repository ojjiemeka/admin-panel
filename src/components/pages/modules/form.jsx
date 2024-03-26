import React from 'react'

const Form = () => {
  return (
    <div id="main-content">
    <div class="container_12">
        <div class="grid_12">
            <h1>Forms</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
        </div>
        <div class="grid_6">
            <div class="block-border">
                <div class="block-header">
                    <h1>Form-Elements with Validation</h1>
                    <span></span>
                </div>
                <form id="validate-form" class="block-content form" action="" method="post">
                    <div class="_100">
                        <p>
                            <label for="textfield">Textfield</label>
                            <input id="textfield" name="textfield" class="required text error" type="text" value=""/>
                        <div for="textfield" generated="true" class="error">This field is required.</div>
                        </p>
                    </div>
                    <div class="_100">
                        <p>
                            <label for="textarea">Textarea</label>
                            <textarea id="textarea" name="textarea" class="required uniform error" rows="5" cols="40"></textarea>
                        <div for="textarea" generated="true" class="error">This field is required.</div>
                        </p>
                    </div>
                    <div class="_100">
                        <p>
                            <label for="datepicker">Datepicker</label>
                            <input id="datepicker" name="datepicker" class="required hasDatepicker text error" type="text" value=""/>
                        <div for="datepicker" generated="true" class="error">This field is required.</div>
                        </p>
                    </div>
                    <div class="_100">
                        <p>
                            <label for="select">Select</label>
                        <div class="selector" id="uniform-undefined">
                            <span>Lorem Ipsum</span>
                            <select style={{opacity: '0'}}>
                                <option>Lorem Ipsum</option>
                                <option>Consetetur Sadipscing</option>
                                <option>Eirmod Tempor</option>
                            </select>
                        </div>
                        </p>
                    </div>
                    <div class="_100">
                        <p>
                            <label for="file">Upload a file</label>
                        <div class="uploader" id="uniform-undefined">
                            <input type="file" size="19" style={{opacity: '0'}}/>
                            <span class="filename">No file selected</span>
                            <span class="action">Choose File</span>
                        </div>
                        </p>
                    </div>
                    <div class="_50">
                        <p>
                            <span class="label">Radio-Buttons</span>
                            <label>
                                <div class="radio" id="uniform-undefined">
                                    <span>
                                        <input type="radio" name="radio" style={{opacity: '0'}}/>
                                    </span>
                                </div>
                                Dolor sit
                            </label>
                            <label>
                                <div class="radio" id="uniform-undefined">
                                    <span>
                                        <input type="radio" name="radio" style={{opacity: '0'}}/>
                                    </span>
                                </div>
                                Et accusam
                            </label>
                            <label>
                                <div class="radio" id="uniform-undefined">
                                    <span>
                                        <input type="radio" name="radio" style={{opacity: '0'}}/>
                                    </span>
                                </div>
                                Justo duo
                            </label>
                        </p>
                    </div>
                    <div class="_50">
                        <p>
                            <span class="label">Checkboxes</span>
                            <label>
                                <div class="checker" id="uniform-undefined">
                                    <span>
                                        <input type="checkbox" name="checkbox" style={{opacity: '0'}}/>
                                    </span>
                                </div>
                                Check me
                            </label>
                            <label>
                                <div class="checker" id="uniform-undefined">
                                    <span>
                                        <input type="checkbox" style={{opacity:'0'}}/>
                                    </span>
                                </div>
                                Or me
                            </label>
                            <label>
                                <div class="checker" id="uniform-undefined">
                                    <span>
                                        <input type="checkbox" style={{opacity: '0'}}/>
                                    </span>
                                </div>
                                Lorem ipsum
                            </label>
                        </p>
                    </div>
                    <div class="clear"></div>
                    <div class="block-actions">
                        <ul class="actions-left">
                            <li>
                                <a class="button red" id="reset-validate-form" href="\#">Reset</a>
                            </li>
                        </ul>
                        <ul class="actions-right">
                            <li>
                                <input type="submit" class="button" value="Click here to validate the form!"/>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
        <div class="grid_6">
            <div class="block-border">
                <div class="block-header">
                    <h1>Form with Fieldsets</h1>
                    <span></span>
                </div>
                <form id="form" class="block-content form" action="" method="post">
                    <fieldset>
                        <legend>Fieldset #1</legend>
                        <div class="_50">
                            <p>
                                <label for="textfield1">Textfield #1</label>
                                <input id="textfield1" type="text" value="" class="text"/>
                            </p>
                        </div>
                        <div class="_50">
                            <p>
                                <label for="textfield2">Textfield #2</label>
                                <input id="textfield2" type="text" value="" class="text"/>
                            </p>
                        </div>
                        <div class="_100">
                            <p>
                                <label for="textfield2">Textfield #3</label>
                                <input id="textfield2" type="text" value="" class="text"/>
                            </p>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Fieldset #2</legend>
                        <p class="inline-small-label">
                            <label for="field4">Textfield #4</label>
                            <input type="text" name="field4" class="text"/>
                        </p>
                        <p class="inline-small-label">
                            <label for="field5">Textfield #5</label>
                            <input type="text" name="field5" class="text"/>
                        </p>
                    </fieldset>
                    <fieldset>
                        <legend>Fieldset #3</legend>
                        <div class="_100">
                            <p class="inline-small-label">
                                /
                                <span class="label">Select #1</span>
                            <div class="selector" id="uniform-undefined">
                                <span>Lorem Ipsum</span>
                                <select style={{opacity: 0}}>
                                    <option>Lorem Ipsum</option>
                                    <option>Consetetur Sadipscing</option>
                                    <option>Eirmod Tempor</option>
                                </select>
                            </div>
                            </p>
                        </div>
                    </fieldset>
                    <div class="block-actions">
                        <ul class="actions-left">
                            <li>
                                <a class="close-toolbox button red" href="\#">Reset</a>
                            </li>
                        </ul>
                        <ul class="actions-right">
                            <li>
                                <a class="close-toolbox button" href="\#">Create it!</a>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
        <div class="clear"></div>
        <div class="grid_6">
            <div class="block-border">
                <div class="block-header">
                    <h1>Grid</h1>
                    <span></span>
                </div>
                <form id="form" class="block-content form" action="" method="post">
                    <div class="_100">
                        <p>
                            <label for="100">100%</label>
                            <input id="100" type="text" value="" class="text" />
                        </p>
                    </div>
                    <div class="_50">
                        <p>
                            <label for="50">50%</label>
                            <input id="50" type="text" value="" class="text"/>
                        </p>
                    </div>
                    <div class="_50">
                        <p>
                            <label for="50">
                                50%
                            </label>
                            <input id="50" type="text" value="" class="text" />
                        </p>
                    </div>
                    <div class="_25">
                        <p>
                            <label for="25">25%</label>
                            <input id="25" type="text" value="" class="text" />
                        </p>
                    </div>
                    <div class="_75">
                        <p>
                            <label for="75">75%</label>
                            <input id="75" type="text" value="" class="text" />
                        </p>
                    </div>
                    <div class="_25">
                        <p>
                            <label for="25">25%</label>
                            <input id="25" type="text" value="" class="text" />
                        </p>
                    </div>
                    <div class="_25">
                        <p>
                            <label for="25">25%</label>
                            <input id="25" type="text" value="" class="text" />
                        </p>
                    </div>
                    <div class="_25">
                        <p>
                            <label for="25">
                                25%
                            </label>
                            <input id="25" type="text" value="" class="text" />
                        </p>
                    </div>
                    <div class="_25">
                        <p>
                            <label for="25">25%</label>
                            <input id="25" type="text" value="" class="text" />
                        </p>
                    </div>
                    <div class="clear"></div>
                </form>
            </div>
        </div>
        <div class="grid_6">
            <div class="block-border">
                <div class="block-header">
                    <h1>Inline Form</h1>
                    <span></span>
                </div>
                <form id="form" class="block-content form" action="" method="post">
                    <p class="inline-label">
                        <label for="field1">Inline Label</label>
                        <input type="text" name="field1" class="text" />
                    </p>
                    <p class="inline-medium-label">
                        <label for="field2">Medium Label</label>
                        <input type="text" name="field2" class="text" />
                    </p>
                    <p class="inline-small-label">
                        <label for="field3">Small Label</label>
                        <input type="text" name="field3" class="text" />
                    </p>
                </form>
            </div>
        </div>
        <div class="clear height-fix"></div>
    </div>
</div>
    )
}

export default Form