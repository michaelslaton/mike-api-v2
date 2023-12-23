import { Knex } from 'knex';

export async function seed (knex: Knex): Promise<void> {
  await knex("rem_ranks").insert([
    {
      name: "Ceo",
      rank: 1,
      color: "#00c8d6",
    },
    {
      name: "Head of Accounting",
      rank: 2,
      color: "#0ec855",
    },
    {
      name: "Vice President",
      rank: 3,
      color: "#7e00e6",
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