"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import TeamForm from "@/components/TeamForm";
import TeamList from "@/components/TeamList";
import { useTeam } from "@/hooks/useTeam";

const Teams = () => {
  const { teams, createTeam, deleteTeam } = useTeam();
  const [showForm, setShowForm] = useState(false);

  const handleCreateTeam = (teamName) => {
    createTeam(teamName);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            My Pokémon Teams
          </h1>
          <button
            onClick={() => setShowForm((prev) => !prev)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {showForm ? "Cancel" : "Create Team"}
          </button>
        </div>
        {showForm && <TeamForm onSubmit={handleCreateTeam} />}
        <TeamList teams={teams} deleteTeam={deleteTeam} />
      </div>
    </div>
  );
};

export default Teams;
