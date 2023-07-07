import { useFormStore } from "../../store/index";

const TableComponent = () => {
  const { formData } = useFormStore();

  return (
    <div className="mt-8">
      <h2 className="text-lg font-bold mb-2">Submitted Data:</h2>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">Name</th>
            <th className="border border-gray-400 px-4 py-2">Email</th>
            <th className="border border-gray-400 px-4 py-2">Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-4 py-4">
              {formData.name}
            </td>
            <td className="border border-gray-400 px-4 py-2">
              {formData.email}
            </td>
            <td className="border border-gray-400 px-4 py-2">{formData.age}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
