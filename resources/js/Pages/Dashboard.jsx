import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, router } from '@inertiajs/react';

export default function Dashboard({ users }) {
    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this user?')) {
            router.delete(`/users/${id}`);
        }
    };

    const handleEdit = (id) => {
        router.visit(`/users/${id}/edit`);
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="p-6">
                <h3 className="text-lg font-bold mb-4">Users List</h3>
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                    <thead>
                        <tr className="bg-gray-100 dark:bg-gray-700">
                            <th className="border p-2">Name</th>
                            <th className="border p-2">Email</th>
                            <th className="border p-2">Phone</th>
                            <th className="border p-2">Birthdate</th>
                            <th className="border p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id} className="border-t dark:border-gray-600 align-center">
                                <td className="p-2 text-center">{user.name}</td>
                                <td className="p-2 text-center">{user.email}</td>
                                <td className="p-2 text-center">{user.phone}</td>
                                <td className="p-2 text-center">{user.birthdate}</td>
                                <td className="p-2 text-center">
                                    <button onClick={() => handleEdit(user.id)} className="text-blue-500 mr-2">Edit</button>
                                    <button onClick={() => handleDelete(user.id)} className="text-red-500">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}
