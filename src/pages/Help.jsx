import React from 'react';

export default function Help() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Help & Support</h1>
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <div className="p-4 border rounded-lg hover:bg-gray-100 transition duration-300">
                        <h3 className="font-semibold text-lg">How do I add a new student?</h3>
                        <p className="text-gray-700">To add a new student, navigate to the Students page and fill out the form to add a new student.</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:bg-gray-100 transition duration-300">
                        <h3 className="font-semibold text-lg">How do I edit a student's information?</h3>
                        <p className="text-gray-700">To edit a student's information, click the "Edit" button next to the student's name on the Students page.</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:bg-gray-100 transition duration-300">
                        <h3 className="font-semibold text-lg">How do I delete a student?</h3>
                        <p className="text-gray-700">To delete a student, click the "Delete" button next to the student's name on the Students page.</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:bg-gray-100 transition duration-300">
                        <h3 className="font-semibold text-lg">How do I add a new chapter?</h3>
                        <p className="text-gray-700">To add a new chapter, navigate to the Chapters page and fill out the form to add a new chapter.</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:bg-gray-100 transition duration-300">
                        <h3 className="font-semibold text-lg">How do I edit a chapter's information?</h3>
                        <p className="text-gray-700">To edit a chapter's information, click the "Edit" button next to the chapter's name on the Chapters page.</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:bg-gray-100 transition duration-300">
                        <h3 className="font-semibold text-lg">How do I delete a chapter?</h3>
                        <p className="text-gray-700">To delete a chapter, click the "Delete" button next to the chapter's name on the Chapters page.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}