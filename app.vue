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

