'use client';
import { useState } from 'react';



export default function AccountPage() {
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+1234567890',
        address: '123 Main St, City',
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        setIsEditing(false);
        // TODO: Send data to API
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold mb-6">Akun Saya</h1>

                <div className="space-y-4">
                    {Object.entries(user).map(([key, value]) => (
                        <div key={key}>
                            <label className="block text-sm font-medium text-gray-700 capitalize">
                                {key}
                            </label>
                            <input
                                type="text"
                                name={key}
                                value={value}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className="w-full mt-1 px-3 py-2 border rounded-md disabled:bg-gray-100"
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-6 flex gap-2">
                    {!isEditing ? (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                        >
                            Edit
                        </button>
                    ) : (
                        <>
                            <button
                                onClick={handleSave}
                                className="flex-1 bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
                            >
                                Simpan
                            </button>
                            <button
                                onClick={() => setIsEditing(false)}
                                className="flex-1 bg-gray-400 text-white py-2 rounded-md hover:bg-gray-500"
                            >
                                Batal
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}