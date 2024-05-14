import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
// import Carts from '@/Layouts/Carts';
export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Dashboard" />

            <div>
                <div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div>
                            <div className="max-w-7xl mx-auto">
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
