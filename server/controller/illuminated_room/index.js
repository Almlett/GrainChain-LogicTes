/**
 * File: index.js
 * Description: This file contains the main function that will be called by the server.
 * Date: 07/11/2022
 * Author: Michel Andrade
 */

/**
 * It reverses the array and then calls the getLightedRoom function.
 * @param room - a 2D array of 0s and 1s, where 0s are dark and 1s are lighted.
 */
const main = ({ content }) => {
    const response = formatContent({content});
    if (response.status_code === 200) {
      const room_inverted = revertArrayItems({room:response.room});
      const result = getLightedRoom({room:room_inverted});
      response["room_filled"] = result.room;
      response["total_lights"] = result.total_lights;
    }
    return response;
  };
  
  /**
   * It takes a string of numbers separated by newlines, and returns an object with the room's width,
   * height, and a 2D array of the room's contents
   * @param content - The content of the room.txt file.
   */
const formatContent = ({ content }) => {
    const lines = content.split("\n");
    const room = [];
    let room_width = 0;
    const room_height = lines.length;
    let validation = true;
    lines.forEach((line) => {
      if (line.length > 0) {
        if (room_width !== 0 && line.length !== room_width) {
          validation = false;
        }
        room_width = line.length;
        let data = line.split("");
        data = data.map((item) => {
          return parseInt(item);
        });
        room.push(data);
      }
    });
    const result = {
      room: [],
      room_width: room_width,
      room_height: room_height,
      status_code: 500,
      message: {
        success: false,
        message: "The room is not valid",
      },
    };
    if (validation) {
      result["room"] = room;
      result["room_width"] = room_width;
      result["room_height"] = room_height;
      result["status_code"] = 200;
      result["message"] = {
        success: true,
        message: "upload complete",
      };
    }
    return result;
};
  
  /**
   * It converts the array to a string, then converts the string back to an array, then pushes the new
   * array to the original array
   * @param room - The array of arrays to be reverted.
   * @returns A new array with the same items as the original array, but with the values of each item
   * reversed.
   */
  const revertArrayItems = ({ room }) => {
    const new_arr = [];
    room.forEach((item) => {
      new_arr.push(item.map((i) => (i === 0 ? 1 : 0)));
    });
    return new_arr;
  };
  
  /**
   * It takes a room, finds the maximum value in the room, then fills the room with that
   * value, and then checks to see if the room is valid. If it's not, it fills the room again
   * @param room - the array of the room
   * @returns the room with the most lights on.
   */
  const getLightedRoom = ({ room }) => {
    result = getMaxCellValue({room});
    result = getFillRoom({room:result});
    let total_lights = 1;
    while (!validRoom({room:result})) {
        total_lights += 1;
        result = getFillRoom({room:result});
    }
    return {
        room:result,
        total_lights:total_lights
    }
  };
  
  /**
   * The function takes in a 2D array of 1's and 0's and returns a 2D array of the same size where each
   * cell contains the number of 1's in the largest square that can be formed with that cell as the top
   * left corner
   * @param room - The array of arrays that we're going to be working with.
   * @returns a new array with the max value of each cell.
   */
  const getMaxCellValue = ({ room }) => {
    const arrString = JSON.stringify(room);
    const new_arr = JSON.parse(arrString);
    const vertical_max = room.length - 1;
    const horizontal_max = room[0].length - 1;
    for (let i = 0; i <= vertical_max; i++) {
      for (let j = 0; j <= horizontal_max; j++) {
        let temp_i = i;
        let temp_j = j;
        let sum = 0;
        //Sum down while not out of bounds or find a 0
        while (temp_i <= vertical_max && room[temp_i][temp_j] === 1) {
          sum += 1;
          new_arr[i][j] = sum;
          temp_i++;
        }
        temp_i = i;
        temp_j = j;
        //Sum up while not out of bounds or find a 0
        while (temp_i >= 0 && room[temp_i][temp_j] === 1) {
          sum += 1;
          new_arr[i][j] = sum;
          temp_i--;
        }
        temp_i = i;
        temp_j = j;
        //Sum right while not out of bounds or find a 0
        while (temp_j <= horizontal_max && room[temp_i][temp_j] === 1) {
          sum += 1;
          new_arr[i][j] = sum;
          temp_j++;
        }
        temp_i = i;
        temp_j = j;
        //Sum left while not out of bounds or find a 0
        while (temp_j >= 0 && room[temp_i][temp_j] === 1) {
          sum += 1;
          new_arr[i][j] = sum;
          temp_j--;
        }
      }
    }
    return new_arr;
  };
  
  /**
   * The function takes in a 2D array and returns a 2D array with the largest number in the original
   * array replaced with a "*" and all the other numbers replaced with a "-" if they are surrounded by
   * the largest number
   * @param room - a 2D array of integers
   * @returns A new array with the largest number in the original array replaced with a "*" and all the
   * numbers that are in the same row and column as the largest number replaced with a "-".
   */
  const getFillRoom = ({ room }) => {
    const arrString = JSON.stringify(room);
    const new_arr = JSON.parse(arrString);
    const vertical_max = room.length - 1;
    const horizontal_max = room[0].length - 1;
    let max = 0;
    let max_i = 0;
    let max_j = 0;
    for (let i = 0; i < room.length; i++) {
      for (let j = 0; j < room[0].length; j++) {
        if (room[i][j] > max) {
          max = room[i][j];
          max_i = i;
          max_j = j;
        }
      }
    }
    new_arr[max_i][max_j] = "*";
    for (let i = 0; i <= vertical_max; i++) {
      for (let j = 0; j <= horizontal_max; j++) {
        if (new_arr[i][j] === "*") {
          //Fill vertical
          let temp_i = i;
          let temp_j = j;
          //Fill down while not out of bounds or find a 0
          while (temp_i <= vertical_max && room[temp_i][temp_j] !== 0) {
            if (new_arr[temp_i][temp_j] !== "*") {
              new_arr[temp_i][temp_j] = "-";
            }
            temp_i++;
          }
          temp_i = i;
          temp_j = j;
          //Fill up while not out of bounds or find a 0
          while (temp_i >= 0 && room[temp_i][temp_j] !== 0) {
            if (new_arr[temp_i][temp_j] !== "*") {
              new_arr[temp_i][temp_j] = "-";
            }
            temp_i--;
          }
          temp_i = i;
          temp_j = j;
          //Fill right while not out of bounds or find a 0
          while (temp_j <= horizontal_max && room[temp_i][temp_j] !== 0) {
            if (new_arr[temp_i][temp_j] !== "*") {
              new_arr[temp_i][temp_j] = "-";
            }
            temp_j++;
          }
          temp_i = i;
          temp_j = j;
          //Fill left while not out of bounds or find a 0
          while (temp_j >= 0 && room[temp_i][temp_j] !== 0) {
            if (new_arr[temp_i][temp_j] !== "*") {
              new_arr[temp_i][temp_j] = "-";
            }
            temp_j--;
          }
        }
      }
    }
    new_arr[max_i][max_j] = "*";
    return new_arr;
  };
  
  /**
   * It checks if the room is valid by checking if the room contains only 0, *, and -
   * @param room - an array of arrays, each of which represents a row in the room.
   * @returns a boolean value.
   */
  const validRoom = ({ room }) => {
    let isValid = true;
    room.forEach((item) => {
      item.forEach((i) => {
        if (i !== 0 && i !== "*" && i !== "-") {
          isValid = false;
        }
      });
    });
    return isValid;
  };
  

module.exports = { main };