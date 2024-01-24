import { Knex } from 'knex';

export async function seed (knex: Knex): Promise<void> {
  return knex("rem_projects").insert([
    {
      name: "Movie Night",
      host: 1,
      date: "2026-01-25T08:00:00.000Z",
      type: "Watch Night",
      description: "Movie watch nights",
    },
    {
      name: "Hunt Event",
      host: 2,
      date: "2026-01-25T08:00:00.000Z",
      attending: "NclXDHnc0HUvpTlVyZjXLNJ4kXu1,aSwNeBahYsNAEahwZqcjR8EO36b2,Px5kWtye6cNAbyZNQEvTBfe0c6u2",
      type: "Game Night",
      description: "Lets do the current hunt event",
    },
  ]);
};