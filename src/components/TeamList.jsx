"use client";
import React from "react";
import Link from "next/link";

const TeamList = ({ teams, deleteTeam }) => {
  return (
    <div className="space-y-4">
      {teams.map((team, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 bg-gray-200 rounded-lg dark:bg-gray-800 dark:text-white"
        >
          <Link href={`/teams/${team.name}`}>
            <p className="text-lg font-semibold text-blue-500 hover:underline">
              {team.name}
            </p>
          </Link>
          <button
            onClick={() => deleteTeam(team.name)}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Delete Team
          </button>
        </div>
      ))}
    </div>
  );
};

export default TeamList;
