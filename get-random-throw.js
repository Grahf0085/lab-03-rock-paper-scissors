export function getRandomThrow() {
    const RPS = Math.random() * 10;

    if (RPS <= 3.33) return 'rock';
    if (RPS >= 6.67) return 'paper';
    return 'scissors';
}