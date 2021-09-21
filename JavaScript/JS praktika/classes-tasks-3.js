console.group('https://edabit.com/challenge/2FF7RKw9RLwc3EBY9');
{
  class Challenge {
    static levels = {
      VE: 5,
      EA: 10,
      ME: 20,
      HA: 40,
      VH: 80,
      EX: 120
    };

    constructor(id, level) {
      this.id = id;
      if (Challenge.levels[level]) this.level = level;
      else throw new Error('Blogas lygio įvardinimas');
    }

    get points() {
      return Challenge.levels[this.level];
    }
  }

  class User {
    constructor(name, xp, log) {
      this.name = name;
      this.xp = xp;
      this.log = log;
    }

    newSolvedChallenge(challenge) {
      if (!this.log.includes(challenge.id)) {
        this.xp += challenge.points;
        this.log.push(challenge.id);
      } else {
        console.error(`Vartotojas ${this.name} jau yra išsprendęs užduotį su id ${challenge.id}`);
      }
    }
  }

  const challenge1 = new Challenge(1, "VE");
  const challenge2 = new Challenge(2, "EA");
  const challenge3 = new Challenge(3, "ME");
  const challenge4 = new Challenge(4, "HA");
  const challenge5 = new Challenge(5, "VH");
  const challenge6 = new Challenge(6, "EX");

  const user1 = new User("Madam", 0, []);
  const user2 = new User("Steve", 0, []);

  user1.newSolvedChallenge(challenge1);
  user1.newSolvedChallenge(challenge4);
  user1.newSolvedChallenge(challenge6);

  user2.newSolvedChallenge(challenge5);
  user2.newSolvedChallenge(challenge3);
  user2.newSolvedChallenge(challenge2);

}
console.groupEnd();

console.groupCollapsed('https://edabit.com/challenge/ifDM26p25bqS8EsFu');
{
  // ... code
}
console.groupEnd();

