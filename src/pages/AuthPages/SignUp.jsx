import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignUpForm from "../../components/auth/SignUpForm";

export default function SignUp() {
  return (
    <>
      <PageMeta
        title="Bakhtar Telecom"
        description="Bakhtar Telecom"
      />
      <AuthLayout>
        <SignUpForm />
      </AuthLayout>
    </>
  );
}
