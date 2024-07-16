import LoginForm from "../ui/login-form";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="sm:w-full sm:max-w-sm bg-white shadow-md rounded-md overflow-hidden">
        <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
          Log in
        </h2>

        <LoginForm></LoginForm>
      </div>
    </div>
  );
}
