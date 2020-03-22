module.exports = function createDreamTeam(members) {
  if (members == null || members == undefined) {
    return false;
  }
  let dreamTeam = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == "string") {
      let firstletter = members[i].trim().toUpperCase();
      dreamTeam.push(firstletter[0]);
    }
  }
  return dreamTeam.length > 0 ? dreamTeam.sort().join('') : false;
};