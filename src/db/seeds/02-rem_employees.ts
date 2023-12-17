import { Knex } from 'knex';

export async function seed (knex: Knex): Promise<void> {
  return knex("rem_employees").insert([
    {
      name: "Rembo",
      birthday: null,
      uid: "NclXDHnc0HUvpTlVyZjXLNJ4kXu1",
      rank: 1,
      admin: true,
      description: "It's the boss!",
    },
    {
      name: "Ren",
      birthday: null,
      uid: "aSwNeBahYsNAEahwZqcjR8EO36b2",
      description: "It's Mike!",
    },
    {
      name: "Wes",
      birthday: null,
      uid: "Px5kWtye6cNAbyZNQEvTBfe0c6u2",
      description: "Hoobooie!!!",
    },
  ]);
};