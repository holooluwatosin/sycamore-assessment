// Store (store/customerStore.js)
import { defineStore } from 'pinia';

export const useCustomerStore = defineStore('customerStore', {
  state: () => ({
    customers: [],
  }),
  actions: {
    addCustomer(customer) {
      this.customers.push({
        id: Date.now(),
        ...customer,
      });
    },
    updateCustomer(id, updatedCustomer) {
      const index = this.customers.findIndex((cust) => cust.id === id);
      if (index !== -1) this.customers[index] = { id, ...updatedCustomer };
    },
    deleteCustomer(id) {
      this.customers = this.customers.filter((cust) => cust.id !== id);
    },
    searchCustomers(query) {
      const lowerQuery = query.toLowerCase();
      return this.customers.filter((cust) =>
        ['firstName', 'lastName', 'email', 'phone', 'state', 'status']
          .some((key) => cust[key]?.toLowerCase().includes(lowerQuery))
      );
    },
  },
});