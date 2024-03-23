import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" type="login">
      {/* children */}
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
