"use client";
import React, { useState } from "react";

const TeamForm = ({ onSubmit, existingTeamName = "" }) => {
  const [teamName, setTeamName] = useState(existingTeamName);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (teamName) {
      onSubmit(teamName);
      setTeamName(""); // Reset the form after submission
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-white"
    >
      <div>
        <label htmlFor="teamName" className="block text-lg">
          Team Name
        </label>
        <input
          type="text"
          id="teamName"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          className="w-full p-2 mt-2 border rounded-md"
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        {existingTeamName ? "Update Team" : "Create Team"}
      </button>
    </form>
  );
};

export default TeamForm;
