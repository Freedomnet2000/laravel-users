import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function EditUser({ user }) {
    const { data, setData, put, processing, errors } = useForm({
        name: user.name,
        email: user.email,
        phone: user.phone || '',
        birthdate: user.birthdate || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/users/${user.id}`);
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Edit User</h2>}
        >
            <Head title="Edit User" />
            <div className="p-6 max-w-xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block">Name</label>
                        <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} className="w-full border p-2" />
                        {errors.name && <div className="text-red-500">{errors.name}</div>}
                    </div>
                    <div>
                        <label className="block">Email</label>
                        <input type="email" value={data.email} onChange={e => setData('email', e.target.value)} className="w-full border p-2" />
                        {errors.email && <div className="text-red-500">{errors.email}</div>}
                    </div>
                    <div>
                        <label className="block">Phone</label>
                        <input type="text" value={data.phone} onChange={e => setData('phone', e.target.value)} className="w-full border p-2" />
                    </div>
                    <div>
                        <label className="block">Birthdate</label>
                        <input type="date" value={data.birthdate} onChange={e => setData('birthdate', e.target.value)} className="w-full border p-2" />
                    </div>
                    <button type="submit" disabled={processing} className="bg-blue-500 text-white px-4 py-2 rounded">
                        Save
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
