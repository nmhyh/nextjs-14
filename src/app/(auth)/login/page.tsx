import LoginForm from "@/app/(auth)/login/login-forn";

export default function LoginPage() {
    return (
        <div>
            <h1 className="text-xl font-semibold text-center">Login page</h1>
            <div className="flex justify-center">
                <LoginForm/>
            </div>
        </div>
    )
}
