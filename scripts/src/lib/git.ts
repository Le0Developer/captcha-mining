import path from "node:path";
import process from "node:process";

import simpleGit from "simple-git";

const git = simpleGit({ baseDir: path.resolve("..") });

export async function tryAndPush(files: Array<string>, commitMessage: string) {
  if (!process.env.CI) {
    console.log("Not pushing changes as not in CI environment.");
    return;
  }
  try {
    await git.pull();
    const prevCommit = (await git.log({ maxCount: 1 })).latest!;
    const result = await git.status();
    if (result.files.length === 0) {
      console.log("No changes to commit");
      return;
    }

    await git.add(files);
    await git.commit(commitMessage);
    const commit = (await git.log({ maxCount: 1 })).latest!;
    if (commit.hash !== prevCommit.hash) {
      await git.push();
      const commitUrl = `https://github.com/le0developer/captcha-mining/commit/${commit.hash}`;
      return commitUrl;
    }
  } catch (err) {
    console.error(err);
  }
}
