import { Knex } from 'knex';

export async function seed (knex: Knex): Promise<void> {
  return knex("rem_projects").insert([
    {
      name: "Movie Night",
      host: 1,
      type: "Watch Night",
      description: "Movie watch nights",
    },
    {
      name: "Hunt Event",
      host: 2,
      type: "Game Night",
      description: "Lets do the current hunt event",
    },
  ]);
};