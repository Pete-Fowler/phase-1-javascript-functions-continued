function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(str = 'go to the office') {
  return `This Monday, I will ${str}.`;
}

function wrapAdjective(str) {
  return (quality = 'special') => {
    return `You are ${str}${quality}${str}!`;
  }
}