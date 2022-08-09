module.exports = function toReadable (number) {
    number = String(number).split("");
      let number1;
      let number2;
      let number3;
      if (number[0] == undefined) {
          return "zero";
      }
      
      if (number[number.length - 1] == 1) {
        number3 = "one";
      } else if (number[number.length - 1] == 2) {
        number3 = "two";
      } else if (number[number.length - 1] == 3) {
        number3 = "three";
      } else if (number[number.length - 1] == 4) {
        number3 = "four";
      } else if (number[number.length - 1] == 5) {
        number3 = "five";
      } else if (number[number.length - 1] == 6) {
        number3 = "six";
      } else if (number[number.length - 1] == 7) {
        number3 = "seven";
      } else if (number[number.length - 1] == 8) {
        number3 = "eight";
      } else if (number[number.length - 1] == 9) {
        number3 = "nine";
      } else if (number[number.length - 1] == 0) {
        number3 = "zero";
      }
      if (number[number.length - 2] == 2) {
        number2 = "twenty";
      } else if (number[number.length - 2] == 3) {
        number2 = "thirty";
      } else if (number[number.length - 2] == 4) {
        number2 = "forty";
      } else if (number[number.length - 2] == 5) {
        number2 = "fifty";
      } else if (number[number.length - 2] == 6) {
        number2 = "sixty";
      } else if (number[number.length - 2] == 7) {
        number2 = "seventy";
      } else if (number[number.length - 2] == 8) {
        number2 = "eighty";
      } else if (number[number.length - 2] == 9) {
        number2 = "ninety";
      }
      if (number[number.length - 3] == 1) {
        number1 = "one";
      } else if (number[number.length - 3] == 2) {
        number1 = "two";
      } else if (number[number.length - 3] == 3) {
        number1 = "three";
      } else if (number[number.length - 3] == 4) {
        number1 = "four";
      } else if (number[number.length - 3] == 5) {
        number1 = "five";
      } else if (number[number.length - 3] == 6) {
        number1 = "six";
      } else if (number[number.length - 3] == 7) {
        number1 = "seven";
      } else if (number[number.length - 3] == 8) {
        number1 = "eight";
      } else if (number[number.length - 3] == 9) {
        number1 = "nine";
      }

      if (number.length == 2) {
        if (number[0] + number[1] == 10) {
            return `ten`;
        } else if (number[0] + number[1] == 11) {
            return `eleven`;
        } else if (number[0] + number[1] == 12) {
            return `twelve`;
        } else if (number[0] + number[1] == 13) {
            return `thirteen`;
        } else if (number[0] + number[1] == 14) {
            return `fourteen`;
        } else if (number[0] + number[1] == 15) {
            return `fifteen`;
        } else if (number[0] + number[1] == 16) {
            return `sixteen`;
        } else if (number[0] + number[1] == 17) {
            return `seventeen`;
        } else if (number[0] + number[1] == 18) {
            return `eighteen`;
        } else if (number[0] + number[1] == 19) {
            return `nineteen`;
        } else if (number[0] + number[1] == 20) {
            return `twenty`;
        } else if (number[0] + number[1] == 30) {
            return `thirty`;
        } else if (number[0] + number[1] == 40) {
            return `forty`;
        } else if (number[0] + number[1] == 50) {
            return `fifty`;
        } else if (number[0] + number[1] == 60) {
            return `sixty`;
        } else if (number[0] + number[1] == 70) {
            return `seventy`;
        } else if (number[0] + number[1] == 80) {
            return `eighty`;
        } else if (number[0] + number[1] == 90) {
            return `ninety`;
        } else {
            return `${number2}` + ` ${number3}`;
        }
    } else if (number.length == 1) {
        return number3;
    } else
      if (number.length == 3) {
          if (number[1] == 0 && number[2] == 0) {
              return number1 + ` hundred`;
          }
          if (number[1] == 0) {
              return number1 + ` hundred` + ` ${number3}`;
          } else if (number[1] + number[2] == 10) {
              return number1 + ` hundred` + ` ten`;
          } else if (number[1] + number[2] == 11) {
              return number1 + ` hundred` + ` eleven`;
          } else if (number[1] + number[2] == 12) {
              return number1 + ` hundred` + ` twelve`;
          } else if (number[1] + number[2] == 13) {
              return number1 + ` hundred` + ` thirteen`;
          } else if (number[1] + number[2] == 14) {
              return number1 + ` hundred` + ` fourteen`;
          } else if (number[1] + number[2] == 15) {
              return number1 + ` hundred` + ` fifteen`;
          } else if (number[1] + number[2] == 16) {
              return number1 + ` hundred` + ` sixteen`;
          } else if (number[1] + number[2] == 17) {
              return number1 + ` hundred` + ` seventeen`;
          } else if (number[1] + number[2] == 18) {
              return number1 + ` hundred` + ` eighteen`;
          } else if (number[1] + number[2] == 19) {
              return number1 + ` hundred` + ` nineteen`;
          } else if (number[1] + number[2] == 20) {
              return number1 + ` hundred` + ` twenty`;
          } else if (number[1] + number[2] == 30) {
              return number1 + ` hundred` + ` thirty`;
          } else if (number[1] + number[2] == 40) {
              return number1 + ` hundred` + ` forty`;
          } else if (number[1] + number[2] == 50) {
              return number1 + ` hundred` + ` fifty`;
          } else if (number[1] + number[2] == 60) {
              return number1 + ` hundred` + ` sixty`;
          } else if (number[1] + number[2] == 70) {
              return number1 + ` hundred` + ` seventy`;
          } else if (number[1] + number[2] == 80) {
              return number1 + ` hundred` + ` eighty`;
          } else if (number[1] + number[2] == 90) {
              return number1 + ` hundred` + ` ninety`;
          } else {
              return number1 + ` hundred` + ` ${number2}` + ` ${number3}`;
          }
      } else if (number.length == 2) {
          if (number[0] + number[1] == 10) {
              return `ten`;
          } else if (number[0] + number[1] == 11) {
              return `eleven`;
          } else if (number[0] + number[1] == 12) {
              return `twelve`;
          } else if (number[0] + number[1] == 13) {
              return `thirteen`;
          } else if (number[0] + number[1] == 14) {
              return `fourteen`;
          } else if (number[0] + number[1] == 15) {
              return `fifteen`;
          } else if (number[0] + number[1] == 16) {
              return `sixteen`;
          } else if (number[0] + number[1] == 17) {
              return `seventeen`;
          } else if (number[0] + number[1] == 18) {
              return `eighteen`;
          } else if (number[0] + number[1] == 19) {
              return `nineteen`;
          } else if (number[0] + number[1] == 20) {
              return `twenty`;
          } else if (number[0] + number[1] == 30) {
              return `thirty`;
          } else if (number[0] + number[1] == 40) {
              return `forty`;
          } else if (number[0] + number[1] == 50) {
              return `fifty`;
          } else if (number[0] + number[1] == 60) {
              return `sixty`;
          } else if (number[0] + number[1] == 70) {
              return `seventy`;
          } else if (number[0] + number[1] == 80) {
              return `eighty`;
          } else if (number[0] + number[1] == 90) {
              return `ninety`;
          } else {
              return `${number2}` + ` ${number3}`;
          }
      } else if (number.length == 1) {
          return number3;
      }
  }