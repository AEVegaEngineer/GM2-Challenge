import { startServer } from "./server";

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

async function main() {
  try {
    await startServer();
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

main();