// components/ProtectedRoute.tsx
import React, { useEffect, useState } from 'react';
import { useUserContext } from '@/context/userContext';
import { useRouter } from 'next/router';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const { password } = useUserContext();
	const router = useRouter();
	const [loading, setLoading] = useState(true);
  
	useEffect(() => {
	  if (!password || password === '') {
		router.push('/login');
	  } else {
		setLoading(false);
	  }
	}, [password, router]);
  
	if (loading) return <div>Loading...</div>;
  
	return <>{children}</>;
  };
  
  export default ProtectedRoute;