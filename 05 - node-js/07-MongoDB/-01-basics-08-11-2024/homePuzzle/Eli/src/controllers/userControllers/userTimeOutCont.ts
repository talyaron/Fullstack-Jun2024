import { loggedUsers, UserModel } from "../../models/userModel";

export function checkedLoggedUsers() {
  const timeNow = new Date();
  if (loggedUsers.length === 0) return;
  loggedUsers.forEach((user) => {
    if (user.remember) return;
    const userTimeLeft = user.date.getTime() - timeNow.getTime();
    if (isNaN(userTimeLeft)) {
      console.error("Invalid date calculation");
    } else {
      //  console.log(`User time left in milliseconds: ${userTimeLeft}`);

      if (userTimeLeft > 300000) {
        console.log("5 minutes have passed for this user.");
        timeLogOut(user.userID);
      } else {
        //   console.log("Less than 5 minutes have passed for this user.");
      }
    }
  });
}

const timeLogOut=async(userID: string)=> {
  const foundUser = await UserModel.findById({userID});
  const foundUserIndex = loggedUsers.findIndex(
    (user) => (user.userID = userID)
  );
  if (!foundUser) {
    console.log("no such user");
    return;
  }
  if (foundUserIndex !== -1) {
    foundUser.key = "";
    loggedUsers.splice(foundUserIndex, 1);
  }
}
