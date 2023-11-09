import { Knex } from 'knex';

export async function seed (knex: Knex): Promise<void> {
  await knex("rem_ranks").insert([
    {
      name: "Ceo",
      rank: 1,
      color: "#ffa500",
    },
    {
      name: "Head of Accounting",
      rank: 2,
      color: "#ffa500",
    },
    {
      name: "Vice President",
      rank: 3,
      color: "#ffa500",
    },
    {
      name: "Shareholder",
      rank: 4,
      color: "#ffa500",
    },
    {
      name: "Intern",
      rank: 5,
      color: "#ffa500",
    },
  ]);
};