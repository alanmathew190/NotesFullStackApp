import { Edit, Trash2, Plus } from "lucide-react";

function ListNotes() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header with Add Button */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">My Notes</h1>
          <button className="flex items-center space-x-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-500 transition">
            <Plus className="w-5 h-5" />
            <span>Add Note</span>
          </button>
        </div>

        {/* Notes Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Sl No
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Title
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Content
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {/* Sample Row 1 */}
                <tr className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-sm text-gray-800">1</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Sample Note Title
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    This is a sample note content...
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center space-x-3">
                      <button
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                        title="Edit"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                        title="Delete"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Sample Row 2 */}
                <tr className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-sm text-gray-800">2</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Another Note
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Another sample content for demonstration...
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center space-x-3">
                      <button
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                        title="Edit"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                        title="Delete"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Sample Row 3 */}
                <tr className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-sm text-gray-800">3</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Third Note
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    More sample content here...
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center space-x-3">
                      <button
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                        title="Edit"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                        title="Delete"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListNotes;
