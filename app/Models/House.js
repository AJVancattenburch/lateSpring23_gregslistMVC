import { appState } from "../AppState.js"
import { HomesController } from "../Controllers/HomesController.js"
import { generateId } from "../Utils/generateId.js"
export class House {
  constructor(data) {
    this.id = data.id || generateId()
    this.creatorName = data.creatorName || ''
    this.year = data.year
    this.name = data.name
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }

  get CardTemplate() {
    return `
      <div class="col-md-4 col-12">
        <div class="rounded elevation-5">
          <img class="img-fluid rounded-top"
            src="${this.img}"
            alt="">
          <div class="d-flex justify-content-between px-2">
            <p>${this.year}</p>
            <span>${this.name} $${this.price}</span>
            <p>${this.sqft}</p>
            <span>Bedrooms: ${this.bedrooms} Bathrooms: ${this.bathrooms}</span>
            <p>${this.description}</p>
            <p></p>
          </div>
        </div>
      </div>`
  }

  get ActiveTemplate() {
    return
    `<div class="col-12">
      <div class="container-contact100 container card">
        <div class="wrap-contact100">
          <form class="contact100-form validate-form">
            <span class="contact100-form-title">
              Contact Us
            </span>
            <div class="wrap-input100 validate-input bg1" data-validate="Please Type Your Name">
              <span class="label-input100">FULL NAME *</span>
              <input class="input100" type="text" name="name" placeholder="Enter Your Name">
            </div>
            <div class="wrap-input100 validate-input bg1 rs1-wrap-input100" data-validate="Enter Your Email (e@a.x)">
              <span class="label-input100">Email *</span>
              <input class="input100" type="text" name="email" placeholder="Enter Your Email ">
            </div>
            <div class="wrap-input100 bg1 rs1-wrap-input100">
              <span class="label-input100">Phone</span>
              <input class="input100" type="text" name="phone" placeholder="Enter Number Phone">
            </div>
            <div class="wrap-input100 input100-select bg1">
              <span class="label-input100">Needed Services *</span>
              <div>
                <select class="js-select2 select2-hidden-accessible" name="service" tabindex="-1" aria-hidden="true">
                  <option>Please chooses</option>
                  <option>eCommerce Bussiness</option>
                  <option>UI/UX Design</option>
                  <option>Online Services</option>
                </select><span class="select2 select2-container select2-container--default" dir="ltr"
                  style="width: 184px;"><span class="selection"><span class="select2-selection select2-selection--single"
                      role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0"
                      aria-labelledby="select2-service-je-container"><span class="select2-selection__rendered"
                        id="select2-service-je-container" title="Please chooses">Please chooses</span><span
                        class="select2-selection__arrow" role="presentation"><b
                          role="presentation"></b></span></span></span><span class="dropdown-wrapper"
                    aria-hidden="true"></span></span>
                <div class="dropDownSelect2"></div>
              </div>
            </div>
            <div class="w-full dis-none js-show-service">
              <div class="wrap-contact100-form-radio">
                <span class="label-input100">What type of products do you sell?</span>
                <div class="contact100-form-radio m-t-15">
                  <input class="input-radio100" id="radio1" type="radio" name="type-product" value="physical" checked="checked">
                  <label class="label-radio100" for="radio1">
                    Phycical Products
                  </label>
                </div>
                <div class="contact100-form-radio">
                  <input class="input-radio100" id="radio2" type="radio" name="type-product" value="digital">
                  <label class="label-radio100" for="radio2">
                    Digital Products
                  </label>
                </div>
                <div class="contact100-form-radio">
                  <input class="input-radio100" id="radio3" type="radio" name="type-product" value="service">
                  <label class="label-radio100" for="radio3">
                    Services Consulting
                  </label>
                </div>
              </div>
              <div class="wrap-contact100-form-range">
                <span class="label-input100">Budget *</span>
                <div class="contact100-form-range-value">
                  "$ "<span id="value-lower">1500</span> - "$ "<span id="value-upper">3900</span>
                  <input type="text" name="from-value">
                  <input type="text" name="to-value">
                </div>
                <div class="contact100-form-range-bar">
                  <div id="filter-bar" class="noUi-target noUi-ltr noUi-horizontal">
                    <div class="noUi-base">
                      <div class="noUi-origin" style="left: 0%;">
                        <div class="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider"
                          aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="40.0" aria-valuenow="0.0"
                          aria-valuetext="1500.00" style="z-index: 5;"></div>
                      </div>
                      <div class="noUi-connect" style="left: 0%; right: 60%;"></div>
                      <div class="noUi-origin" style="left: 40%;">
                        <div class="noUi-handle noUi-handle-upper" data-handle="1" tabindex="0" role="slider"
                          aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="100.0" aria-valuenow="40.0"
                          aria-valuetext="3900.00" style="z-index: 6;"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="wrap-input100 validate-input bg0 rs1-alert-validate" data-validate="Please Type Your Message">
              <span class="label-input100">Message</span>
              <textarea class="input100" name="message" placeholder="Your message here..."></textarea>
            </div>
            <div class="container-contact100-form-btn">
              <button class="contact100-form-btn">
                <span>
                  Submit
                  <i class="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>`
  }

  static houseForm() {
    return `
    <div class="wrap-contact100">
      <form class="contact100-form validate-form">
        <span class="contact100-form-title">
          Contact Us
        </span>
        <div class="wrap-input100 validate-input bg1" data-validate="Please Type Your Name">
          <span class="label-input100">FULL NAME *</span>
          <input class="input100" type="text" name="name" placeholder="Enter Your Name">
        </div>
        <div class="wrap-input100 validate-input bg1 rs1-wrap-input100" data-validate="Enter Your Email (e@a.x)">
          <span class="label-input100">Email *</span>
          <input class="input100" type="text" name="email" placeholder="Enter Your Email ">
        </div>
        <div class="wrap-input100 bg1 rs1-wrap-input100">
          <span class="label-input100">Phone</span>
          <input class="input100" type="text" name="phone" placeholder="Enter Number Phone">
        </div>
        <div class="wrap-input100 input100-select bg1">
          <span class="label-input100">Needed Services *</span>
          <div>
            <select class="js-select2 select2-hidden-accessible" name="service" tabindex="-1" aria-hidden="true">
              <option>Please chooses</option>
              <option>eCommerce Bussiness</option>
              <option>UI/UX Design</option>
              <option>Online Services</option>
            </select><span class="select2 select2-container select2-container--default" dir="ltr" style="width: 184px;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-service-je-container"><span class="select2-selection__rendered" id="select2-service-je-container" title="Please chooses">Please chooses</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
            <div class="dropDownSelect2"></div>
          </div>
        </div>
        <div class="w-full dis-none js-show-service">
          <div class="wrap-contact100-form-radio">
            <span class="label-input100">What type of products do you sell?</span>
            <div class="contact100-form-radio m-t-15">
              <input class="input-radio100" id="radio1" type="radio" name="type-product" value="physical" checked="checked">
                <label class="label-radio100" for="radio1">
                  Phycical Products
                </label>
            </div>
            <div class="contact100-form-radio">
              <input class="input-radio100" id="radio2" type="radio" name="type-product" value="digital">
                <label class="label-radio100" for="radio2">
                  Digital Products
                </label>
            </div>
            <div class="contact100-form-radio">
              <input class="input-radio100" id="radio3" type="radio" name="type-product" value="service">
                <label class="label-radio100" for="radio3">
                  Services Consulting
                </label>
            </div>
          </div>
          <div class="wrap-contact100-form-range">
            <span class="label-input100">Budget *</span>
            <div class="contact100-form-range-value">
              $<span id="value-lower">1500</span> - $<span id="value-upper">3900</span>
              <input type="text" name="from-value">
                <input type="text" name="to-value">
                </div>
                <div class="contact100-form-range-bar">
                  <div id="filter-bar" class="noUi-target noUi-ltr noUi-horizontal"><div class="noUi-base"><div class="noUi-origin" style="left: 0%;"><div class="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="40.0" aria-valuenow="0.0" aria-valuetext="1500.00" style="z-index: 5;"></div></div><div class="noUi-connect" style="left: 0%; right: 60%;"></div><div class="noUi-origin" style="left: 40%;"><div class="noUi-handle noUi-handle-upper" data-handle="1" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="100.0" aria-valuenow="40.0" aria-valuetext="3900.00" style="z-index: 6;"></div></div></div></div>
                </div>
            </div>
          </div>
          <div class="wrap-input100 validate-input bg0 rs1-alert-validate" data-validate="Please Type Your Message">
            <span class="label-input100">Message</span>
            <textarea class="input100" name="message" placeholder="Your message here..."></textarea>
          </div>
          <div class="container-contact100-form-btn">
            <button class="contact100-form-btn">
              <span>
                Submit
                <i class="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
              </span>
            </button>
          </div>
      </form>
    </div>`
  }

  // static CreateHouse() {
  //   return `<div class="col-2 pt-3">
  //   <button onclick="app.HomesController.getHouseForm()" data-bs-toggle="modal" data-bs-target="#modal"
  //     class="btn btn-info p-2"><i class="mdi mdi-train-car-flatbed-car pe-3"></i>List
  //     Car</button>
  // </div>`

  // }

}

// ${appState.userName != '' ? '' : 'disabled'}