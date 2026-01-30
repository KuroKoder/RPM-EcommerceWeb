'use client';
import React from 'react';
import Link from 'next/link';



export default function CampaignPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Header */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <h1 className="text-3xl font-bold text-gray-900">Campaign Management</h1>
                    <p className="text-gray-600 mt-2">Manage and track your marketing campaigns</p>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Action Button */}
                <div className="mb-8">
                    <Link href="/campaigns/new">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                            + New Campaign
                        </button>
                    </Link>
                </div>

                {/* Campaign Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Placeholder Campaign Card */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">No campaigns yet</h3>
                        <p className="text-gray-600">Create your first campaign to get started</p>
                    </div>
                </div>
            </main>
        </div>
    );
}