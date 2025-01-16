<template>
  <div class="mt-8">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search customers..."
      class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mb-4"
    />
    <div class="overflow-x-auto">
      <table class="table-auto w-full border-collapse border border-gray-300">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-700">Name</th>
            <th class="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-700">Email</th>
            <th class="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-700">Phone</th>
            <th class="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-700">State</th>
            <th class="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-700">Status</th>
            <th class="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in filteredCustomers" :key="customer.id" class="odd:bg-white even:bg-gray-50">
            <td class="px-4 py-2 border border-gray-300">{{ customer.firstName }} {{ customer.lastName }}</td>
            <td class="px-4 py-2 border border-gray-300">{{ customer.email }}</td>
            <td class="px-4 py-2 border border-gray-300">{{ customer.phone }}</td>
            <td class="px-4 py-2 border border-gray-300">{{ customer.state }}</td>
            <td class="px-4 py-2 border border-gray-300">{{ customer.active ? 'Active' : 'Inactive' }}</td>
            <td class="px-4 py-2 border border-gray-300">
              <button @click="deleteCustomer(customer.id)" class="text-red-600 hover:text-red-800 font-medium">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useCustomerStore } from "~/stores/customerStore";

const store = useCustomerStore();
const searchQuery = ref('');

const filteredCustomers = computed(() => {
  return searchQuery.value
    ? store.searchCustomers(searchQuery.value)
    : store.customers;
});

const deleteCustomer = (id) => {
  store.deleteCustomer(id);
};
</script>
