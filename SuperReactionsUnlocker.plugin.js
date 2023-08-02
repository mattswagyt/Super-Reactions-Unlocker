// Define a variable to track the number of unlocked super reactions
let unlockedReactions = 0;

// Listen for the reaction added event
document.addEventListener("DOMNodeInserted", function (event) {
  // Check if the added node is a reaction
  if (event.target && event.target.classList.contains("reactionInner-15NvIl")) {
    // Check if the user has unlocked all available reactions for the week
    if (unlockedReactions < 5) {
      // Increment the unlocked reactions count
      unlockedReactions++;

      // Add a class to style the unlocked reactions
      event.target.classList.add("unlockedReaction");

      // Display a notification
      BdApi.showToast(`Super Reaction unlocked! (${unlockedReactions} out of 5)`, {
        type: "success"
      });
    } else {
      // Display a notification when the user has unlocked all available reactions
      BdApi.showToast("You have unlocked all available super reactions for the week.", {
        type: "error"
      });
    }
  }
});
