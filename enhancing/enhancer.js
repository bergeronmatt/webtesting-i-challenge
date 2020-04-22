module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  let enhancement = item.enhancement;
  if(enhancement < 20){
    enhancement++
  }
  return { ...item, enhancement };
}

function fail(item) {
  let enhancement = item.enhancement;
  let durability = item.durability;
  if(enhancement < 15) {
    durability = durability -5
  } else {
    durability = durability -10
  } if(enhancement > 16){
    enhancement--
  }
  return { ...item, enhancement, durability };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  let enhancement = item.enhancement;
  let name = item.name;
  if (enhancement > 0){
    name = `[+${enhancement}]${item.name}`
  }
  
  return name;
}
