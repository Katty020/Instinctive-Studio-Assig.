import React, { useState, useEffect } from 'react';

function AddStudentForm({ onAddStudent, onClose, studentToEdit, onEditStudent }) {
	const [name, setName] = useState(studentToEdit ? studentToEdit.name : '');
	const [cohort, setCohort] = useState(studentToEdit ? studentToEdit.cohort : '');
	const [courses, setCourses] = useState(studentToEdit ? studentToEdit.courses.join(', ') : '');
	const [dateJoined, setDateJoined] = useState(studentToEdit ? studentToEdit.dateJoined : '');
	const [lastLogin, setLastLogin] = useState(studentToEdit ? studentToEdit.lastLogin : '');
	const [status, setStatus] = useState(studentToEdit ? studentToEdit.status : 'active');

	const handleSubmit = (e) => {
		e.preventDefault();
		const studentData = {
			id: studentToEdit ? studentToEdit.id : Date.now().toString(),
			name,
			cohort,
			courses: courses.split(',').map(course => course.trim()),
			dateJoined,
			lastLogin,
			status,
		};
		if (studentToEdit) {
			onEditStudent(studentData);
		} else {
			onAddStudent(studentData);
		}
		onClose();
	};

	return (
		<form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-sm border border-gray-200 mb-4">
			<h2 className="text-gray-700 font-medium mb-2">{studentToEdit ? 'Edit Student' : 'Add New Student'}</h2>
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
			<div className="mb-2">
				<label className="block text-gray-600 mb-1">Cohort</label>
				<input
					type="text"
					value={cohort}
					onChange={(e) => setCohort(e.target.value)}
					className="w-full p-2 border border-gray-300 rounded-sm"
					required
				/>
			</div>
			<div className="mb-2">
				<label className="block text-gray-600 mb-1">Courses (comma separated)</label>
				<input
					type="text"
					value={courses}
					onChange={(e) => setCourses(e.target.value)}
					className="w-full p-2 border border-gray-300 rounded-sm"
					required
				/>
			</div>
			<div className="mb-2">
				<label className="block text-gray-600 mb-1">Date Joined</label>
				<input
					type="date"
					value={dateJoined}
					onChange={(e) => setDateJoined(e.target.value)}
					className="w-full p-2 border border-gray-300 rounded-sm"
					required
				/>
			</div>
			<div className="mb-2">
				<label className="block text-gray-600 mb-1">Last Login</label>
				<input
					type="datetime-local"
					value={lastLogin}
					onChange={(e) => setLastLogin(e.target.value)}
					className="w-full p-2 border border-gray-300 rounded-sm"
					required
				/>
			</div>
			<div className="mb-2">
				<label className="block text-gray-600 mb-1">Status</label>
				<select
					value={status}
					onChange={(e) => setStatus(e.target.value)}
					className="w-full p-2 border border-gray-300 rounded-sm"
					required
				>
					<option value="active">Active</option>
					<option value="inactive">Inactive</option>
				</select>
			</div>
			<button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-sm">{studentToEdit ? 'Update Student' : 'Add Student'}</button>
			<button type="button" onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded-sm ml-2">Cancel</button>
		</form>
	);
}

export default function StudentTable() {
	const [students, setStudents] = useState([]);
	const [showForm, setShowForm] = useState(false);
	const [studentToEdit, setStudentToEdit] = useState(null);

	useEffect(() => {
		const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
		setStudents(storedStudents);
	}, []);

	const handleAddStudent = (newStudent) => {
		const updatedStudents = [...students, newStudent];
		setStudents(updatedStudents);
		localStorage.setItem('students', JSON.stringify(updatedStudents));
	};

	const handleEditStudent = (updatedStudent) => {
		const updatedStudents = students.map(student => student.id === updatedStudent.id ? updatedStudent : student);
		setStudents(updatedStudents);
		localStorage.setItem('students', JSON.stringify(updatedStudents));
		setStudentToEdit(null);
	};

	const handleDeleteStudent = (studentId) => {
		const updatedStudents = students.filter(student => student.id !== studentId);
		setStudents(updatedStudents);
		localStorage.setItem('students', JSON.stringify(updatedStudents));
	};

	const handleEditClick = (student) => {
		setStudentToEdit(student);
		setShowForm(true);
	};

	return (
		<div className="bg-white px-6 py-4 rounded-sm border border-gray-200 flex-1">
			<div className="flex justify-between items-center mb-4">
				<strong className="text-gray-700 font-medium">Student Records</strong>
				<button onClick={() => { setShowForm(true); setStudentToEdit(null); }} className="bg-blue-500 text-white px-4 py-2 rounded-sm">Add Student</button>
			</div>
			{showForm && <AddStudentForm onAddStudent={handleAddStudent} onClose={() => setShowForm(false)} studentToEdit={studentToEdit} onEditStudent={handleEditStudent} />}
			<div className="overflow-x-auto mt-4">
				<table className="w-full border-collapse">
					<thead>
						<tr className="bg-gray-100 text-gray-700">
							<th className="p-2 text-left">Student Name</th>
							<th className="p-2 text-left">Cohort</th>
							<th className="p-2 text-left">Courses</th>
							<th className="p-2 text-left">Date Joined</th>
							<th className="p-2 text-left">Last Login</th>
							<th className="p-2 text-left">Status</th>
							<th className="p-2 text-left">Actions</th>
						</tr>
					</thead>
					<tbody>
						{students.map((student) => (
							<tr key={student.id} className="border-b">
								<td className="p-2 cursor-pointer" onClick={() => handleEditClick(student)}>{student.name}</td>
								<td className="p-2">{student.cohort}</td>
								<td className="p-2">
									{student.courses.map((course, index) => (
										<span
											key={index}
											className="inline-flex items-center gap-1 bg-gray-200 text-sm px-2 py-1 rounded-full mr-2"
										>
											<img
												src={`https://via.placeholder.com/20?text=${course.charAt(0)}`}
												alt={course}
												className="w-5 h-5 rounded-full"
											/>
											{course}
										</span>
									))}
								</td>
								<td className="p-2">{new Date(student.dateJoined).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
								<td className="p-2">{new Date(student.lastLogin).toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</td>
								<td className="p-2">
									<span
										className={`inline-block w-3 h-3 rounded-full ${
											student.status === 'active' ? 'bg-green-500' : 'bg-red-500'
										}`}
									></span>
								</td>
								<td className="p-2">
									<button onClick={() => handleEditClick(student)} className="bg-yellow-500 text-white px-2 py-1 rounded-sm mr-2">Edit</button>
									<button onClick={() => handleDeleteStudent(student.id)} className="bg-red-500 text-white px-2 py-1 rounded-sm">Delete</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}