function logMessage(msg, color) {
  if (!color) {
    color = "black";
  }
  var log = document.getElementById("log");
  var div = document.createElement("div");
  div.textContent = msg;
  div.style.color = color;
  log.appendChild(div);
}

function Charactor(name, hp, att) {
  this.name = name;
  this.hp = hp;
  this.att = att;
}

var battle, gameover;
battle = false;
gameover = false;

Charactor.prototype.attacked = function(damage) {
  this.hp -= damage;
  logMessage(this.name + "的目前hp:" + this.hp, "red");
  if (this.hp <= 0) {
    logMessage(this.name + "死了");
    battle = false;
  }
};

Charactor.prototype.attack = function(target) {
  logMessage(this.name + "攻击了 " + target.name, "blue");
  target.attacked(this.att);
};

function Hero(name, hp, att, lev, exp) {
  Charactor.apply(this, arguments);
  this.lev = lev || 1;
  this.exp = exp || 0;
}

Hero.prototype = Object.create(Charactor.prototype);
Hero.prototype.constructor = Hero;

Hero.prototype.attacked = function(damage) {
  this.hp -= damage;
  logMessage(this.name + "的目前hp:" + this.hp, "tomato");
  if (this.hp <= 0) {
    gameover = true;
    battle = false;
    logMessage("游戏结束了！你的最终等级是" + this.lev);
  }
};

Hero.prototype.attack = function(target) {
  logMessage(this.name + "攻击了 " + target.name);
  target.attacked(this.att);
  if (target.hp <= 0) {
    this.gainExp(target);
  }
};

Hero.prototype.gainExp = function(target) {
  logMessage("战斗中取得胜利，获得" + target.exp + "经验");
  this.exp += target.exp;
  if (this.exp > this.lev * 10 + 50) {
    this.lev += 1;
    this.exp = 0;
    this.att += 5;
    this.hp += this.lev * 20 + 50;
    logMessage("恭喜！你升级了！目前等级：" + this.lev, "green");
  }
};

function Monster(name, hp, att, lev, exp) {
  Charactor.apply(this, arguments);
  this.lev = lev || 10;
  this.exp = exp || 10;
}

Monster.prototype = Object.create(Charactor.prototype);
Monster.prototype.constructor = Monster;

function MakeMonster() {
  monsterList = [
    ["soldier", 20, 10, 5, 20],
    ["S.W.A.T", 35, 20, 10, 40],
    ["007", 50, 35, 20, 60],
    ["Army", 100, 50, 25, 80],
    ["Devil", 200, 70, 30, 100]
  ];
  monster = monsterList[Math.floor(Math.random() * 5)];
  return new Monster(
    monster[0],
    monster[1],
    monster[2],
    monster[3],
    monster[4]
  );
}

hero = new Hero(prompt("Hero name:"), 250, 30);
logMessage(hero.name + "的冒险开始，瞧一瞧能升级到等级几", "purple");
while (!gameover) {
  monster = MakeMonster();
  logMessage("路上遇到了" + monster.name + "战斗即将开始！");
  battle = true;
  while (battle) {
    hero.attack(monster);
    if (monster.hp > 0) {
      monster.attack(hero);
    }
  }
}
