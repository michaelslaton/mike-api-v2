import { Knex } from 'knex';

export async function seed (knex: Knex): Promise<void> {
  return knex("rem_awards").insert([
    {
      name: "Weebo Belt",
      date: "2026-01-25T08:00:00.000Z",
      awardedFor: "Suckin huevos!",
    },
    {
      name: "Employee of the Month",
      type: "trophy",
      date: "2026-01-25T08:00:00.000Z",
      awardedFor: "Notable excellence!",
      class: "silver",
    },
    {
      name: "Drift Belt",
      holder: 1,
      date: "2026-01-25T08:00:00.000Z",
      awardedFor: "The perfect driiiiift!",
      class: "gold",
    },
  ]);
};