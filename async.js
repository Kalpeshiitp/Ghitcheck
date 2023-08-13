const preMovie = async () => {
  const promiseWifeBringingticket = new Promise((resolve, reject) => {
    setTimeout(() => resolve("ticket"), 3000);
  });
  const getPopcorn = new Promise((resolve, reject) => resolve("popcorn"));

  const getButter = new Promise((resolve, reject) => resolve("butter"));

  const getColdDrink = new Promise((resolve, reject) => resolve("Cold drink"));

  let ticket = await promiseWifeBringingticket;
  console.log(`wife: i have the ticket ${ticket}`);
  console.log(`husband: we should go in`);
  console.log(`wife: no i am hungry`);
  let popcorn = await getPopcorn;

  console.log(`husband: i have the ${popcorn}`);
  console.log("we should go in");
  console.log(`wife: i need butter on my popcorn`);

  let butter = await getButter;

  console.log(`husband: i got some ${butter} on popcorn`);
  console.log("wife: i need cold drink");

  let coldDrink = await getColdDrink;

  console.log(`husband: i have ${coldDrink}`);
  console.log("wife: lets go we are getting late");

  return ticket;
};
preMovie().then((m) => console.log(`person:shoe me ${m}`));
console.log("person2:show me ticket ");
console.log("person3:show me ticket ");
