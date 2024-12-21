import React, { useState } from 'react';

export default function Settings() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleSave = (e) => {
        e.preventDefault();
        console.log('Settings saved:', { username, email, password });
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000); 
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Settings</h1>
            <form onSubmit={handleSave} className="bg-white shadow-md rounded-lg p-4">
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-sm"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-sm"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-sm"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-sm">Save Settings</button>
            </form>
            {showPopup && (
                <div className="fixed top-0 left-0 right-0 bg-green-500 text-white p-4 text-center">
                    Settings saved successfully!
                </div>
            )}
        </div>
    );
}