import { db } from "~/server/db";

async function main() {
  const admin = await db.user.create({
    data: {
      username: 'admin',
      password: 'N/A',
    }
  });

  await db.event.createMany({
    data: [{
      eventName: 'Championship Wagers: Clash of Titans',
      odds: 1.75,
      createdById: admin.id
    }, {
      eventName: 'Bet Blitz: The Ultimate Sports Showdown',
      odds: 1.05,
      createdById: admin.id
    }, {
      eventName: 'Gamblers\' Gauntlet: All Bets Are On!',
      odds: 1.42,
      createdById: admin.id
    }, {
      eventName: 'Lucky Lineup League: Bet, Win, Repeat',
      odds: 1.75,
      createdById: admin.id
    }, {
      eventName: 'Sports Spectacle Showdown: Betting Bonanza',
      odds: 1.124,
      createdById: admin.id
    }]
  });
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });