export const deletePlayer = (playerList, player) => {
  for (let i = 0; i <= playerList.length; i++) {
    if (playerList[i] === player) {
      playerList.splice(i, 1, null);
      return playerList;
    }
  }
};

export const addPlayer = (arr, player) => {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      arr[i] = player;
      return arr;
    }
  }
};

export const auth = {
  isAutheticate: !!localStorage.getItem("token"),
  authenticate() {
    console.log("dkm");
    this.isAutheticate = true;
  },
  sigout() {
    this.isAutheticate = false;
    console.log("dkm dung log out");
  },
};

export const authAdmin = {
  isAuthenticatedAdmin: !!localStorage.getItem("token"),
  authenticateAdmin() {
    console.log("Buon ngu vkl");
    this.isAuthenticatedAdmin = true;
  },
  sigoutAdmin() {
    console.log("Dkm lai log out");
    this.isAuthenticatedAdmin = false;
  },
};
