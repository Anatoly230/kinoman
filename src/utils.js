import dayjs from 'dayjs';

function getValueOfArguments(from, to) {
  if (typeof from !== 'number') {
    return false;
  }
  if (from < 0) {
    from = Math.abs(from);
  }
  if (from > to) {
    [from, to] = [to, from];
  }

  return {
    from: from,
    to: to
  }
}

function getRandomNum(from = 1000, to = 0) {
  try {
    let range = getValueOfArguments(from, to);
    from = range.from,
      to = range.to;
    range = null;
    return Math.floor(Math.random() * (to - from + 1)) + from;
  } catch (err) {
    console.log(err)
    return false;
  }
}

function getRandomFloat(from = 1000, to = 0, countNum = 3) {
  try {
    let range = getValueOfArguments(from, to);
    from = range.from,
      to = range.to;
    range = null;
    return Number((Math.random() * (to - from + 1) + from).toFixed(countNum));
  } catch (err) {
    console.log(err.stack);
    return false;
  }
}

function defineStringLength(str, charCount) {
  if (str.length > charCount) {
    return false;
  }
  return true;
}

function getRangeNumbers(from = 1, to = 25) {
  let range = getValueOfArguments(from, to);
  from = range.from;
  to = range.to;
  range = [];
  try {
    while (from <= to) {
      range.push(from)
      from++
    }
    return range;
  }
  catch (err) {
    console.log(err)
  }
}

function arrayClone(arr) {
  return arr.map(function (item) {
    return item;
  })
}

function arrayCopy(instance, target) {
  target.length = 0;
  for (let i = 0; i < instance.length; i++) {
    target[i] = instance[i];
  }
  return target;
}

function arrayScatter(array) {
  let arr = arrayClone(array),
    result = [];
  while (arr.length > 0) {
    result.push(...arr.splice(getRandomNum(0, arr.length)))
  }
  arr = null;
  return result;
}

function detachFromArray(array) {
  if (array.length < 1) {
    array = null;
    return false;
  }
  let index = getRandomNum(0, array.length - 1);
  return array.splice(index, 1)[0];
}

function selectFromArray(array) {
  if (array.length < 1) {
    array = null;
    return false;
  }
  let index = getRandomNum(0, array.length - 1);
  return array[index];
}

function getObjects(callBack, length = 25) {
  try {
    if (callBack === undefined) {
      throw new Error('Необходимо добавить функцию конструткор')
    }
    if (typeof length === 'object' || Number(length) !== Number(length) || Number(length) === 0) {
      throw new Error('Ошибка ввода данных, должно быть число не меньше 1')
    }
    return Array.from({ length: length }, callBack);
  } catch (err) {
    console.log(err)
  }
}

function getRandomYear(y) {
  if (y) {
    return y;
  }
  return getRandomNum(new Date().getFullYear(), 2015)
}

function getRandomMonth() {
  return getRandomNum(11, 0)
}

function getRandomDay() {
  return getRandomNum(31, 1)
}


function getRandomDate() {
  return new Date(getRandomYear(), getRandomMonth(), getRandomDay())
}

function humanizeTaskDuedate(dueDate) {
  return dayjs(dueDate).format('DD MMMM YYYY')
}

function formatStringToYear(dueDate) {
  return dayjs(dueDate).format('YYYY')
}

function formatMinutsToTime(minuts) {
  return `${Math.floor(minuts / 60)} час. ${minuts % 60} мин.`;
}

function getTrueOrFalse() {
  return getRandomNum(1, 0) ? true : false;
}

export {
  getTrueOrFalse,
  getRangeNumbers,
  arrayCopy,
  arrayScatter,
  detachFromArray,
  getRandomFloat,
  selectFromArray,
  getRandomNum,
  getObjects,
  getRandomDate,
  humanizeTaskDuedate,
  formatStringToYear,
  formatMinutsToTime
};

