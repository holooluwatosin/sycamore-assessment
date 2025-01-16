// Form Component (components/CustomerForm.vue)
<template>
  <form
    @submit.prevent="handleSubmit"
    class="space-y-4 max-w-md p-6 bg-white shadow-md rounded-md"
  >
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1"
        >First Name</label
      >
      <input
        type="text"
        v-model="form.firstName"
        class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-syca-green focus:border-syca-green"
      />
      <p v-if="errors.firstName" class="text-sm text-red-500 mt-1">
        {{ errors.firstName }}
      </p>
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1"
        >Last Name</label
      >
      <input
        type="text"
        v-model="form.lastName"
        class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-syca-green focus:border-syca-green"
      />
      <p v-if="errors.lastName" class="text-sm text-red-500 mt-1">
        {{ errors.lastName }}
      </p>
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
      <input
        type="email"
        v-model="form.email"
        class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-syca-green focus:border-syca-green"
      />
      <p v-if="errors.email" class="text-sm text-red-500 mt-1">
        {{ errors.email }}
      </p>
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1"
        >Phone Number</label
      >
      <input
        type="tel"
        v-model="form.phone"
        class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-syca-green focus:border-syca-green"
      />
      <p v-if="errors.phone" class="text-sm text-red-500 mt-1">
        {{ errors.phone }}
      </p>
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">State</label>
      <select
        v-model="form.state"
        class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-syca-green focus:border-syca-green"
      >
        <option value="">Select State</option>
        <option v-for="state in states" :key="state" :value="state">
          {{ state }}
        </option>
      </select>
      <p v-if="errors.state" class="text-sm text-red-500 mt-1">
        {{ errors.state }}
      </p>
    </div>
    <div>
      <label class="inline-flex items-center text-sm text-gray-700">
        <input
          type="checkbox"
          v-model="form.active"
          class="rounded border-gray-300 text-syca-green shadow-sm focus:ring-syca-green"
        />
        <span class="ml-2">Set to Active</span>
      </label>
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1"
        >Customer's Details</label
      >
      <textarea
        v-model="form.details"
        class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-syca-green focus:border-syca-green"
      ></textarea>
    </div>
    <button
      type="submit"
      class="w-full bg-syca-green text-white font-medium py-2 px-4 rounded-md hover:bg-syca-light-green hover:text-syca-green focus:outline-none focus:ring-2 focus:ring-syca-green focus:ring-offset-2"
    >
      Submit
    </button>
  </form>
</template>

<script setup>
import { reactive } from "vue";
import { useCustomerStore } from "~/stores/customerStore";
import useValidation from "~/plugin/useValidation";

const store = useCustomerStore();
const { validate, errors } = useValidation();

const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  state: "",
  active: false,
  details: "",
});

const states = ["Lagos", "Abuja", "Kano", "Rivers", "Enugu"];

const handleSubmit = () => {
  if (validate(form)) {
    store.addCustomer({ ...form });
    Object.keys(form).forEach(
      (key) => (form[key] = key === "active" ? false : "")
    );
  }
};
</script>
