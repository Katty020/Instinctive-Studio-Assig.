import React, { useState, useEffect } from 'react';

export default function Students() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const storedStudents = localStorage.getItem('students');
        if (storedStudents) {
            setStudents(JSON.parse(storedStudents));
        }
    }, []);

    const handleDeleteStudent = (id) => {
        const updatedStudents = students.filter(student => student.id !== id);
        setStudents(updatedStudents);
        localStorage.setItem('students', JSON.stringify(updatedStudents));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Students</h1>
            <h2 className="text-xl font-medium mb-2">Student List</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {students.map(student => (
                    <li key={student.id} className="bg-white shadow-md rounded-lg p-4">
                        <div className="flex flex-col">
                            <p className="font-semibold text-lg mb-2">{student.name}</p>
                            <p><span className="font-medium">Cohort:</span> {student.cohort}</p>
                            <p><span className="font-medium">Courses:</span> {student.courses.join(', ')}</p>
                            <p><span className="font-medium">Date Joined:</span> {student.dateJoined}</p>
                            <p><span className="font-medium">Last Login:</span> {student.lastLogin}</p>
                            <p><span className="font-medium">Status:</span> {student.status}</p>
                            <button onClick={() => handleDeleteStudent(student.id)} className="bg-red-500 text-white p-2 rounded-sm mt-4">Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
