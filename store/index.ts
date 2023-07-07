import create from "zustand";

type FormData = {
  name: string;
  email: string;
  age: string;
};

type FormStore = {
  formData: FormData;
  errors: Record<string, string>;
  setFormData: (data: FormData) => void;
  setFieldError: (field: string, error: string) => void;
  handleSubmit: () => void;
};

export const useFormStore = create<FormStore>((set) => ({
  formData: {
    name: "",
    email: "",
    age: "",
  },
  errors: {},
  setFormData: (data) => set({ formData: data }),
  setFieldError: (field, error) =>
    set((state) => ({ errors: { ...state.errors, [field]: error } })),
  handleSubmit: () => {
    // Perform form validation
    const errors: Record<string, string> = {};
    const { name, email, age } = useFormStore.getState().formData;

    if (!name) {
      errors.name = "Name is required";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      errors.email = "Invalid email format";
    }

    if (!age) {
      errors.age = "Age is required";
    } else if (!isValidAge(age)) {
      errors.age = "Age must be a number";
    }

    if (Object.keys(errors).length === 0) {
      // If form is valid, perform further actions
      // Submit form data, display success message, etc.
      console.log("Form submitted:", useFormStore.getState().formData);
    } else {
      // If form is invalid, set errors in the store
      useFormStore.setState({ errors });
    }
  },
}));

const isValidEmail = (value: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

const isValidAge = (value: string) => {
  const ageRegex = /^[0-9]+$/;
  return ageRegex.test(value);
};
