console.groupCollapsed('https://edabit.com/challenge/2FF7RKw9RLwc3EBY9');
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

console.group('https://edabit.com/challenge/ifDM26p25bqS8EsFu');
{
  class Player {
    // Private properties
    #hp;
    #maxHp;
    #en;
    #maxEn;
    // Public properties
    armor;
    name;

    constructor(name, health, energy, armor) {
      this.name = name;
      this.hp = health;
      this.#maxHp = health;
      this.en = energy;
      this.#maxEn = energy;
      this.armor = armor;
    }

    get hpPerc() {
      return Math.round(100 * 100 * this.#hp / this.#maxHp) / 100;
    }

    set hp(value) {
      if (value > this.#maxHp) this.#hp = this.#maxHp;
      else if (value < 0) this.#hp = 0;
      else this.#hp = value;
    }
    get hp() {
      return this.#hp;
    }

    set en(value) {
      if (value > this.#maxEn) this.#en = this.#maxEn;
      else if (value < 0) this.#en = 0;
      else this.#en = value;
    }
    get en() {
      return this.#en;
    }

    learnSkill = (skillName, stats) => {
      this[skillName] = function (target) {
        const effectiveArmor = target.armor - stats.penetration;
        if (this.en < stats.cost) {
          return `${this.name} attempted to use ${skillName}, but didn't have enough energy!`;
        } else {
          this.en -= stats.cost;
        }
        const calculatedDamage = stats.damage * (100 - effectiveArmor) / 100;
        const calculatedDamageRounded = Math.round(calculatedDamage * 100) / 100;
        let returnString = `${this.name} used ${skillName}, ${stats.desc}, against ${target.name}, doing ${calculatedDamageRounded} damage!`;
        const hpBeforeHeal = this.hp;
        this.hp += stats.heal;
        const healedAmount = this.hp - hpBeforeHeal;
        if (healedAmount > 0) {
          returnString += ` ${this.name} healed for ${stats.heal} health!`;
        }
        target.hp -= calculatedDamage;
        returnString += target.hp <= 0
          ? ` ${target.name} died. `
          : ` ${target.name} is at ${target.hpPerc}% health.`;
        return returnString;
      }
    }
  }

  const alice = new Player("Alice", 110, 50, 10);
  const bob = new Player("Bob", 100, 60, 20);

  alice.learnSkill("fireball", {
    damage: 23,
    penetration: 1.2,
    heal: 5,
    cost: 15,
    desc: "a firey magical attack"
  });

  console.log(alice.fireball(bob));

  bob.learnSkill("superbeam", {
    damage: 200,
    penetration: 50,
    heal: 50,
    cost: 75,
    desc: "an overpowered attack, pls nerf"
  });
  console.log(bob.superbeam(alice));

  bob.learnSkill('Meteor Strike', {
    damage: 118,
    penetration: 4,
    heal: 5,
    cost: 20,
    desc: "an attack that basically ends the game (gg)"
  })
  console.log(bob['Meteor Strike'](alice));
}
console.groupEnd();
