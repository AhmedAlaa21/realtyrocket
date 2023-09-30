import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Sign up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-lg focus:outline-none"
          id="username"
        />
        <input
          type="email"
          placeholder="E-mail"
          className="border p-3 rounded-lg focus:outline-none"
          id="email"
        />
        <input
          type="passowrd"
          placeholder="Password"
          className="border p-3 rounded-lg focus:outline-none"
          id="password"
        />
        <button
          className="bg-slate-700 p-3 text-white rounded-lg uppercase
        hover:opacity-95 disabled:opacity-80"
        >
          SignUp
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-700 font-semibold underline">Sign in</span>
        </Link>
      </div>
    </div>
  );
}
