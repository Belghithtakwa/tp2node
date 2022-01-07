function sortTab(tab){
  return tab.sort();
};

function randomElementTab(tab){
  return tab[Math.floor(Math.random() * tab.length)];
}

module.exports = {sortTab, randomElementTab}
