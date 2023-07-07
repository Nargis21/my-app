import { useFormStore } from '../../store/index';
import TableComponent from './TableComponent'
import '../app/globals.css'

const IndexPage = () => {
  const { formData, errors, setFormData, setFieldError, handleSubmit } = useFormStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error message when user starts typing in a field
    if (errors[name]) {
      setFieldError(name, '');
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    handleSubmit(); // Manually handle form submission
  };

  return (
    <div className="container mx-auto p-4 w-[50%]">
      <form onSubmit={handleFormSubmit} className="mb-4 border p-4">
        <div className="mb-2">
          <label htmlFor="name" className="block">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`border border-gray-400 p-1 w-full ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="block">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`border border-gray-400 p-1 w-full ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
        </div>
        <div className="mb-2">
          <label htmlFor="age" className="block">
            Age:
          </label>
          <input
            type="text"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className={`border border-gray-400 p-1 w-full ${errors.age ? 'border-red-500' : ''}`}
          />
          {errors.age && <p className="text-red-500 mt-1">{errors.age}</p>}
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4">
          Submit
        </button>
      </form>
      <TableComponent />
    </div>
  );
};

export default IndexPage;

