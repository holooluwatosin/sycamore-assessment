<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Customer Entry Dashboard</h1>
    <customer-form />
    <customer-table />
  </div>
</template>

<script setup>
import CustomerForm from "~/components/customerForm.vue";
import CustomerTable from "~/components/customerTable.vue";
</script>

<style>
@import 'tailwindcss/tailwind.css';
</style>


<!-- <script setup>
import { useCounterStore } from '~/stores/counter';

const counterStore = useCounterStore();
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white shadow-md rounded-lg p-6 max-w-sm w-full text-center">
      <p class="text-lg font-semibold text-gray-700 mb-4">
        Count: <span class="text-blue-500">{{ counterStore.count }}</span>
      </p>
      <button
        @click="counterStore.increment"
        class="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition"
      >
        Increment
      </button>
    </div>
  </div>
</template> -->
