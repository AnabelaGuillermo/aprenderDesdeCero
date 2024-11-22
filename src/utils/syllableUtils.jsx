let regexStep1 = [];
let cutPositionsStep1 = [];

let regexStep2 = [];
let cutPositionsStep2 = [];

regexStep1.push(/^[aeiouáéíóúü]+([^aeiouáéíóúü]|$)/);
cutPositionsStep1.push(0);

regexStep1.push(/^[^aeiouáéíóúü][aeiouáéíóúü]+([^aeiouáéíóúü]|$)/);
cutPositionsStep1.push(0);

regexStep1.push(
  /^[^aeiouáéíóúü][^aeiouáéíóúü][aeiouáéíóúü]+([^aeiouáéíóúü]|$)/
);
cutPositionsStep1.push(1);

regexStep1.push(
  /^[^aeiouáéíóúü][^aeiouáéíóúü][^aeiouáéíóúü][aeiouáéíóúü]+([^aeiouáéíóúü]|$)/
);
cutPositionsStep1.push(2);

regexStep1.push(
  /^[^aeiouáéíóúü][^aeiouáéíóúü][^aeiouáéíóúü][^aeiouáéíóúü][aeiouáéíóúü]+([^aeiouáéíóúü]|$)/
);
cutPositionsStep1.push(3);

regexStep1.push(/^[aeiouáéíóúü]+$/);
cutPositionsStep1.push(-1);

regexStep1.push(/^[^aeiouáéíóúü]+$/);
cutPositionsStep1.push(-1);

regexStep2.push(/[aeoáéó][aeoáéó]/);
cutPositionsStep2.push(1);

regexStep2.push(/[íú][aeo]/);
cutPositionsStep2.push(1);

regexStep2.push(/[aeo][íú]/);
cutPositionsStep2.push(1);

regexStep2.push(/[iuüíú][aeoáéó][aeoáéó]/);
cutPositionsStep2.push(2);

regexStep2.push(/[aeoáéó][aeoáéó][iuüíú]/);
cutPositionsStep2.push(1);

regexStep2.push(/.*/);
cutPositionsStep2.push(-1);

export function divide(word) {
  word = word.toLowerCase().trim();
  let cutPosition = 0;
  let syllables = [];
  let finalSyllables = [];
  let head = "";
  let securityBreak = 0;
  let end = false;

  while (!end) {
    ++securityBreak;
    if (securityBreak > 20) {
      throw "Error procesando la palabra";
      return "";
    }
    for (let i = 0; i < regexStep1.length; ++i) {
      let match = word.match(regexStep1[i]);
      if (match) {
        let m = match[0];
        cutPosition = cutPositionsStep1[i];
        if (cutPosition < 0) {
          syllables.push(head + m);
          end = true;
        } else {
          let cutChar = m[cutPosition];
          if (cutChar == "r" || cutChar == "l" || cutChar == "h") {
            cutPosition--;
          }
          if (cutPosition < 0) cutPosition = 0;
          syllables.push(head + m.substring(0, cutPosition));
          head = m.substring(cutPosition, m.length - 1);
        }

        word = word.substring(m.length - 1);
      }
    }
  }

  for (let s = 0; s < syllables.length; ++s) {
    let sillable = syllables[s];
    if (sillable == "") continue;

    for (let i = 0; i < regexStep2.length; ++i) {
      let match = sillable.match(regexStep2[i]);
      if (match) {
        if (cutPositionsStep2[i] < 0) {
          finalSyllables.push(sillable);
        } else {
          let cutPosition = match.index + cutPositionsStep2[i];
          finalSyllables.push(sillable.substring(0, cutPosition));
          finalSyllables.push(sillable.substring(cutPosition));
        }
        break;
      }
    }
  }
  return finalSyllables;
}

export function stress(syllables) {
  if (typeof syllables === "string") {
    syllables = divide(syllables);
  }

  if (syllables.length == 1) {
    return 0;
  }

  for (let i = 0; i < syllables.length; ++i) {
    if (syllables[i].match(/[áéíóú]/)) {
      return i;
    }
  }

  if (syllables[syllables.length - 1].match(/.*[nsaeiou]$/)) {
    return syllables.length - 2;
  } else {
    return syllables.length - 1;
  }
}

export function difficulty(syllables) {
  if (typeof syllables === "string") {
    syllables = divide(syllables);
  }

  let result = [];
  for (let i = 0; i < syllables.length; ++i) {
    result.push(difficultySyllable(syllables[i]));
  }
  return result;
}

function difficultySyllable(text) {
  let value = 0;

  text = text.replace("ll", "y");
  text = text.replace("rr", "r");

  text = text.replace("que", "qe");
  text = text.replace("qui", "qi");
  text = text.replace("qué", "qe");
  text = text.replace("quí", "qi");
  text = text.replace("gü", "g");

  if (text.match(/[bcdfghjklmnñpqrstvwxyz]l/g)) {
    value += 1;
  }

  if (text.match(/[bcdfghjklmnñpqrstvwxyz]n/g)) {
    dvalue += 1;
  }

  if (text.match(/[bcdfghjklmnñpqrstvwxyz]h/g)) {
    value += 1;
  }

  if (text.match(/[bcdfghjklmnñpqrstvwxyz]s/g)) {
    value += 1;
  }

  text = text.replace("h", "");

  let consonantsHard = text.match(/[kñwxy]/g);
  if (consonantsHard) {
    value += consonantsHard.length * 3;
  }

  let consonants = text.match(/[bcdfghjlmnpqrstvz]/g);
  if (consonants) {
    value += consonants.length * 2;
  }

  let vowels = text.match(/[aeiouáéíóú]/g);
  if (vowels) {
    value += vowels.length;
  }

  return value;
}
