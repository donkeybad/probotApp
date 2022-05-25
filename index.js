/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");
  app.log.info("Yay, the app was loaded2222!");
  app.log.info("Yay, creating issue");
  try {
    app.on("issues.opened", async (context) => {
      const issueComment = context.issue({
        body: "Thanks for opening this issue!",
      });
      return context.octokit.issues.createComment(issueComment);
    });
  } catch (exception) {
    console.error(exception);
  }
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
