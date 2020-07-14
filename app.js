const profileDataArgs = process.argv.slice(2, process.argv.length)
console.log(profileDataArgs)

profileDataArgs.forEach(profileItem => console.log(profileItem));