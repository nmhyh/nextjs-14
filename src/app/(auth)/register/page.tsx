import RegisterForm from "@/app/(auth)/register/register-forn";

export default function RegisterPage() {
    return (
        <div>
            <h1 className="text-xl font-semibold text-center">Register page</h1>
            <div className="flex justify-center">
                <RegisterForm />
            </div>
        </div>
    )
}
