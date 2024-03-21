import Chance from 'chance'

const chance = Chance()

const userName = () => chance.name();
console.log(userName());
export default userName;