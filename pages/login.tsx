// pages/login.tsx
import Login from '@/components/auth/Login';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

const LoginPage: React.FC = () => {
    return (
        <div>
            <Login />
        </div>
    );
};

export default LoginPage;
