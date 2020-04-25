<template>
  <div>
    <b-modal
      id="EditCompanyModal"
      
      ok-only
      size="xl"
      v-bind:hide-footer="true"
      @submit="updateCompany"
    >
      <template v-slot:modal-header="{ close }">
        <!-- Emulate built in modal header close button action -->
        <h5>Edit Company</h5>
        <b-button size="sm" variant="light" @click="close()" style="z-index: 1;">
            <i class="material-icons">clear</i>
        </b-button>
      </template>
      <b-form @submit.stop.prevent="updateCompany" class="companyForm">
        <b-form-group
          id="input-group-1"
          label="Company Name:"
          label-for="input-1"
          description="Please enter the name"
        >
          <b-form-input
            id="input-1"
            v-model="form.name"
            type="text"
            required
            placeholder="Enter Company name"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Delivery Locations:">
          <b-form-checkbox-group
            id="checkbox-group-2"
            v-model="form.deliveryLocations"
            name="flavour-2"
          >
            <b-form-checkbox value="GTA">GTA</b-form-checkbox>
            <b-form-checkbox value="Brampton">Brampton</b-form-checkbox>
            <b-form-checkbox value="Hamilton">Hamilton</b-form-checkbox>
            <b-form-checkbox value="Caledon">Caledon</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        <b-form-group label="Delivery days:">
          <b-form-checkbox-group id="checkbox-group-2" v-model="form.deliveryDays" name="flavour-2">
            <b-form-checkbox value="Monday">Monday</b-form-checkbox>
            <b-form-checkbox value="Tuesday">Tuesday</b-form-checkbox>
            <b-form-checkbox value="Wednesday">Wednesday</b-form-checkbox>
            <b-form-checkbox value="Thursday">Thursday</b-form-checkbox>
            <b-form-checkbox value="Friday">Friday</b-form-checkbox>
            <b-form-checkbox value="Saturday">Saturday</b-form-checkbox>
            <b-form-checkbox value="Sunday">Sunday</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        <b-row>
          <b-col>
            <p>Time:</p>
            <b-form-select v-model="form.cutOff.time" :options="orderCutOffOptions"></b-form-select>
          </b-col>
          <b-col>
            <p>Time Period:</p>
            <b-form-select
              label="Cut off"
              v-model="form.cutOff.zone"
              :options="orderCutOffTimeZone"
            ></b-form-select>
          </b-col>
        </b-row>
        <b-form-group label="Payment Options:">
          <b-form-checkbox-group
            id="checkbox-group-2"
            v-model="form.paymentOptions"
            name="flavour-2"
          >
            <b-form-checkbox value="Stripe">Stripe</b-form-checkbox>
            <b-form-checkbox value="Paypal">Paypal</b-form-checkbox>
            <b-form-checkbox value="Credit card">Credit card</b-form-checkbox>
            <b-form-checkbox value="cash">Cash</b-form-checkbox>
            <b-form-checkbox value="E-Transfer">e-transfer</b-form-checkbox>
            <b-form-checkbox value="none">None</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        <b-row>
          <b-col>
            <b-form-group
              id="input-group-1"
              label="Lowest:"
              label-for="input-1"
              description="Please enter the lowest meal price"
            >
              <b-form-input
                id="input-1"
                v-model="form.priceRange.lowest"
                type="number"
                step="0.01"
                required
                placeholder="Enter lowest Price"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              id="input-group-1"
              label="Highest:"
              label-for="input-1"
              description="Please enter the higest meal price"
            >
              <b-form-input
                id="input-1"
                v-model="form.priceRange.highest"
                type="number"
                step="0.01"
                required
                placeholder="Enter highest Price"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-form-group label="Bulk Discount">
          <b-form-radio v-model="form.bulkDiscount" name="some-radios" value="True">Yes</b-form-radio>
          <b-form-radio v-model="form.bulkDiscount" name="some-radios" value="False">No</b-form-radio>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Number of Meals"
          label-for="input-1"
          description="number of meals the company offers"
        >
          <b-form-input
            id="input-1"
            v-model="form.numberOfMeals"
            type="number"
            required
            placeholder="Number of meals"
          ></b-form-input>
        </b-form-group>
        <b-row>
          <b-col>
            <p>BreakFast:</p>
            <b-form-select v-model="form.mealOptions[0].breakFast" :options="mealOptions"></b-form-select>
          </b-col>
          <b-col>
            <p>Lunch:</p>
            <b-form-select
              label="Cut off"
              v-model="form.mealOptions[0].lunch"
              :options="mealOptions"
            ></b-form-select>
          </b-col>
          <b-col>
            <p>Dinner:</p>
            <b-form-select
              label="Cut off"
              v-model="form.mealOptions[0].dinner"
              :options="mealOptions"
            ></b-form-select>
          </b-col>
          <b-col>
            <p>Snacks:</p>
            <b-form-select
              label="Cut off"
              v-model="form.mealOptions[0].snacks"
              :options="mealOptions"
            ></b-form-select>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group label="Menu Changes:">
              <b-form-radio v-model="form.menuChanges" name="menuChange-radios" value="True">Yes</b-form-radio>
              <b-form-radio v-model="form.menuChanges" name="menuChange-radios" value="False">No</b-form-radio>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="Size Options:">
              <b-form-radio v-model="form.sizeOptions" name="sizeOptions-radios" value="True">Yes</b-form-radio>
              <b-form-radio v-model="form.sizeOptions" name="sizeOptions-radios" value="False">No</b-form-radio>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="Vegetarian:">
              <b-form-radio v-model="form.vegetarian" name="vegOption-radios" value="True">Yes</b-form-radio>
              <b-form-radio v-model="form.vegetarian" name="vegOption-radios" value="False">No</b-form-radio>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="Extra Protien:">
              <b-form-radio v-model="form.extraProtien" name="extraProtien-radios" value="True">Yes</b-form-radio>
              <b-form-radio v-model="form.extraProtien" name="extraProtien-radoos" value="False">No</b-form-radio>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="Vegan:">
              <b-form-radio v-model="form.vegan" name="vegan-radios" value="True">Yes</b-form-radio>
              <b-form-radio v-model="form.vegan" name="vegan-radoos" value="False">No</b-form-radio>
            </b-form-group>
          </b-col>
        </b-row>
        <b-form-group
          id="input-group-1"
          label="Intagram Followers: "
          label-for="input-1"
          description="Please enter the higest meal price"
        >
          <b-form-input
            id="input-1"
            v-model="form.instagramFollowers"
            type="number"
            required
            placeholder="Enter number of Instagram followers"
          ></b-form-input>
        </b-form-group>
        <b-button variant="outline-primary" type="submit">submit</b-button>
      </b-form>
    </b-modal>
    <div class="container-fluid">
      <div class="row">
        <h1 class="ml-4">All Companies</h1>
      </div>
      <div class="row">
        <b-table-simple responsive striped condensed class="ml-0 pl-4 pr-4 col-sm-12">
          <b-thead>
            <b-tr>
              <b-th>Name</b-th>
              <b-th>Delivery Location</b-th>
              <b-th>Delivery Days</b-th>
              <b-th>Order Cut off</b-th>
              <b-th>PaymentOptions</b-th>
              <b-th>Price Range</b-th>
              <b-th>Bulk Discount</b-th>
              <b-th>Number of Meals</b-th>
              <b-th>Meal Options</b-th>
              <b-th>Menu Changes</b-th>
              <b-th>Size Options</b-th>
              <b-th>Vegertarian</b-th>
              <b-th>Extra Protien</b-th>
              <b-th>Vegan</b-th>
              <b-th>Instagram Followers</b-th>
              <b-th>Rating</b-th>
              <b-th>Edit</b-th>
              <b-th>Delete</b-th>
            </b-tr>
          </b-thead>
          <tbody>
            <b-tr v-for="(company, index) in companys" v-bind:key="index.id">
              <td>
                <p>{{company.name}}</p>
              </td>
              <td>
                <ul>
                  <li
                    v-for="(location , index) in company.deliveryLocations"
                    v-bind:key="index.id"
                  >{{location}}</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li v-for="(days , index) in company.deliveryDays" v-bind:key="index.id">{{days}}</li>
                </ul>
              </td>
              <td>
                <p>{{company.cutOff.time}}{{company.cutOff.zone}}</p>
              </td>
              <td>
                <ul>
                  <li
                    v-for="(option, index) in company.paymentOptions"
                    v-bind:key="index.id"
                  >{{option}}</li>
                </ul>
              </td>
              <td>
                <p>Lowest: {{company.priceRange.lowest}}</p>
                <p>Highest: {{company.priceRange.highest}}</p>
              </td>
              <td>
                <p>{{company.bulkDiscount ? 'Yes' : 'No'}}</p>
              </td>
              <td>
                <p>{{company.numberOfMeals}}</p>
              </td>
              <td>
                <ul
                  v-for="(option, index) in company.mealOptions"
                  v-bind:key="index.id"
                  style="padding-left: 10px;"
                >
                  <li>Breakfast: {{option.breakFast}}</li>
                  <li>Lunch: {{option.lunch}}</li>
                  <li>Dinner: {{option.dinner}}</li>
                  <li>Snacks: {{option.snacks}}</li>
                </ul>
              </td>
              <td>
                <p>{{company.menuChanges}}</p>
              </td>
              <td>
                <p>{{company.sizeOptions}}</p>
              </td>
              <td>
                <p>{{company.vegetarian}}</p>
              </td>
              <td>
                <p>{{company.extraProtien}}</p>
              </td>
              <td>
                <p>{{company.vegan}}</p>
              </td>
              <td>{{company.instagramFollowers}}</td>
              <td>
                <p>{{company.averageRating}}</p>
              </td>
              <td>
                <b-button
                  variant="outline-warning"
                  v-b-modal.EditCompanyModal
                  @click="editCompany(company._id)"
                >
                  <i class="material-icons">edit</i>
                </b-button>
              </td>
              <td>
                <b-button variant="outline-danger" @click="deleteCompany(company._id)">
                  <i class="material-icons">delete</i>
                </b-button>
              </td>
            </b-tr>
          </tbody>
        </b-table-simple>
      </div>
    </div>
  </div>
</template>

<script>
var API_URL = "https://prepdmeals.ca:3000/api/allCompanys";
var API_SINGLE = "https://prepdmeals.ca:3000/api/singleCompany";
var API_URL_DELETE = "https://prepdmeals.ca:3000/api/delete-company";
var API_UPDATE = "https://prepdmeals.ca:3000/api/update-company";

export default {
  data() {
    return {
      currentCompany: -1,
      companys: [],
      form: {},
      orderCutOffTimeZone: [
        {
          value: "AM",
          text: "AM"
        },
        {
          value: "PM",
          text: "PM"
        }
      ],
      mealOptions: [
        {
          value: "None",
          text: "none"
        },
        {
          value: "1",
          text: "1"
        },
        {
          value: "2",
          text: "2"
        },
        {
          value: "3",
          text: "3"
        },
        {
          value: "4",
          text: "4"
        },
        {
          value: "5",
          text: "5"
        },
        {
          value: "6",
          text: "6"
        },
        {
          value: "7",
          text: "7"
        },
        {
          value: "8",
          text: "8"
        },
        {
          value: "9",
          text: "9"
        },
        {
          value: "10 +",
          text: "10 +"
        }
      ],
      orderCutOffOptions: [
        {
          value: "1",
          text: "1"
        },
        {
          value: "2",
          text: "2"
        },
        {
          value: "3",
          text: "3"
        },
        {
          value: "4",
          text: "4"
        },
        {
          value: "5",
          text: "5"
        },
        {
          value: "6",
          text: "6"
        },
        {
          value: "7",
          text: "7"
        },
        {
          value: "8",
          text: "8"
        },
        {
          value: "9",
          text: "9"
        },
        {
          value: "10",
          text: "10"
        },
        {
          value: "11",
          text: "11"
        },
        {
          value: "12",
          text: "12"
        }
      ]
    };
  },
  created: function() {
    this.resetForm();
    this.$http
      .get(API_URL)
      .then(response => {
        this.companys = response.data;
      })
      .catch(error => {
        console.log(error.response);
      });
  },
  methods: {
    deleteCompany: function(id) {
      this.$http
        .post(API_URL_DELETE, {
          companyID: JSON.stringify(id)
        })
        .then(response => {
          if (response.data.message === "true") {
            const index = this.companys.findIndex(
              company => company._id === id
            );
            if (~index) {
              this.companys.splice(index, 1);
            }
          }
        });
    },
    editCompany: async function(id) {
      const index = this.companys.findIndex(company => company._id === id);
      const currentCompanyID = this.companys[index]._id;

      var companyData;

      await this.$http
        .post(API_SINGLE, { companyID: JSON.stringify(currentCompanyID) })
        .then(response => {
          if (response.data) {
            companyData = response.data;
          }
        })
        .catch(err => {
          console.log(err.response);
        });

      this.currentCompany = currentCompanyID;
      this.form = companyData;
    },
    updateCompany: async function() {
      await this.$http
        .put(API_UPDATE, { company: JSON.stringify(this.form) })
        .then(response => {
          if (response.data.message) {
            location.reload();
          }
        })
        .catch(err => {
          console.log(err.response);
        });
    },
    resetForm: function() {
      this.form = {
        name: "",
        deliveryLocations: [],
        deliveryDays: [],
        cutOff: {
          time: "",
          zone: ""
        },
        paymentOptions: [],
        priceRange: {
          lowest: "",
          highest: ""
        },
        bulkDiscount: null,
        numberOfMeals: "",
        mealOptions: [
          {
            breakFast: "",
            lunch: "",
            dinner: "",
            snacks: ""
          }
        ],
        menuChanges: "",
        sizeOptions: "",
        vegetarian: "",
        extraProtien: "",
        vegan: "",
        instagramFollowers: ""
      };
    }
  }
};
</script>

<style>
.edit {
  padding: 30px;
  color: black;
}
.edit:hover {
  color: red;
}
.delete {
  padding: 30px;
  color: black;
}
.delete:hover {
  color: red;
}
.table {
  margin-left: 10px;
  margin-right: 10px;
}
.table td {
  padding: 30px;
}
</style>
