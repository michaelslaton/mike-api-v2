import { Knex } from 'knex';

export async function seed (knex: Knex): Promise<void> {
  return knex("rem_awards").insert([
    {
      name: "Weebo Belt",
    },
    {
      name: "Employee of the Month",
      type: "trophy"
    },
    {
      name: "Drift Belt",
      holder: 1,
    },
  ]);
};