import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  // definisi props dan pengambilannya
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div
        className="
      w-full max-w-xs"
      >
        <h1 className="text-blue-600 text-3xl mb-2 font-bold">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, please enter your details
        </p>
        {children}

        <p className="text-sm mt-5 text-center">

          {/* ternary oprator untuk 2 kondisi */}
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account? "}{" "}

          {/* oprator AND untuk lebih dari 2 kondisi */}
          {type === "login" && (
            <Link to="/register" className="font-bold text-blue-600">
              Register
            </Link>
          )}
          {type === "register" && (
            <Link to="/login" className="font-bold text-blue-600">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
