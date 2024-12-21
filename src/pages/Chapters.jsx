import React, { useState } from 'react';

export default function Chapters() {
    const [chapters, setChapters] = useState([]);
    const [name, setName] = useState('');
    const [editingChapter, setEditingChapter] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newChapter = {
            id: editingChapter ? editingChapter.id : Date.now().toString(),
            name,
        };

        if (editingChapter) {
            setChapters(chapters.map(chapter => chapter.id === editingChapter.id ? newChapter : chapter));
            setEditingChapter(null);
        } else {
            setChapters([...chapters, newChapter]);
        }

        setName('');
    };

    const handleEdit = (chapter) => {
        setEditingChapter(chapter);
        setName(chapter.name);
    };

    const handleDelete = (id) => {
        setChapters(chapters.filter(chapter => chapter.id !== id));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Chapters</h1>
            <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-sm border border-gray-200 mb-4">
                <h2 className="text-gray-700 font-medium mb-2">{editingChapter ? 'Edit Chapter' : 'Add New Chapter'}</h2>
                <div className="mb-2">
                    <label className="block text-gray-600 mb-1">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-sm"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-sm">
                    {editingChapter ? 'Update Chapter' : 'Add Chapter'}
                </button>
            </form>

            <h2 className="text-xl font-medium mb-2">Chapter List</h2>
            <ul>
                {chapters.map(chapter => (
                    <li key={chapter.id} className="mb-2">
                        <div className="flex justify-between items-center">
                            <div>
                                <p>Name: {chapter.name}</p>
                            </div>
                            <div>
                                <button onClick={() => handleEdit(chapter)} className="bg-yellow-500 text-white p-2 rounded-sm mr-2">Edit</button>
                                <button onClick={() => handleDelete(chapter.id)} className="bg-red-500 text-white p-2 rounded-sm">Delete</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}