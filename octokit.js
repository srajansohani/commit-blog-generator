import { GitHub } from "@actions/github/lib/utils";
import { Octokit } from "@octokit/rest";


export const octokit = new Octokit({
    auth:  process.env.GITHUB_ACCESS_TOKEN
})


