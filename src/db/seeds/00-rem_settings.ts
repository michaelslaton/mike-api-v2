import { Knex } from 'knex';

export async function seed (knex: Knex): Promise<void> {
  await knex("rem_settings").insert([
    {
      motd: "Hi there!",
    },
  ]);
};