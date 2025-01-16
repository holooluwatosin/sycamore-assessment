// Validation Plugin (plugins/useValidation.js)
import { ref } from 'vue';

export default function useValidation() {
  const errors = ref({});

  const validate = (form) => {
    errors.value = {};

    if (!form.firstName) errors.value.firstName = 'First Name is required';
    if (!form.lastName) errors.value.lastName = 'Last Name is required';
    if (!form.email || !/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      errors.value.email = 'Valid Email is required';
    if (!form.phone) errors.value.phone = 'Phone Number is required';
    if (!form.state) errors.value.state = 'State is required';

    return Object.keys(errors.value).length === 0;
  };

  return { validate, errors };
}
