/**
 * This script prompts the user to input their name and then displays it.
 *
 * It first displays a message asking for the user's name, then waits for the user input.
 * Once the user enters their name, it displays the entered name to the console.
 * Finally, it handles the exit event and displays a closing message when the script exits.
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name !== null) {
    process.stdout.write(`Your name is: ${name}`);
  }
});
process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
