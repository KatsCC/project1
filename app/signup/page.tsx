import { createUser } from "../lib/action";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="sm:w-full sm:max-w-sm bg-white shadow-md rounded-md overflow-hidden">
        <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
          Sign up
        </h2>
        <form className="px-6 py-8 space-y-6" action={createUser} method="POST">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="name"
              required
              className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="userId"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              User ID
            </label>
            <input
              id="userId"
              name="userId"
              type="userId"
              required
              className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 focus:outline-none"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md font-semibold text-sm shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 focus:outline-none"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
