export const INITIAL_EXPLANATION_PROMPT = `
You are an expert programmer, and you are trying to understand a git diff
Reminders about the git diff format:
For every file, there are a few metadata lines, like (for example):
\`\`\`
The git diff of lib/index.js is :
- const a=1;
+ const b=1;
\`\`\`
This means that in \`lib/index.js\` line "const a=1;" was deleted and line "constb=1;" was added in this commit. 
Note that this is only an example.
Then there is a specifier of the lines that were modified.
A line starting with \`+\` means it was added.
A line that starting with \`-\` means that line was deleted.
A line that starts with neither \`+\` nor \`-\` is code given for context and better understanding. 
It is not part of the diff.

Additionally begin an expert programmer, we should not add any information which was not provided to you as the integraty of the blog is extremly important.

`;

export const TITLE_PROMPT = `
${INITIAL_EXPLANATION_PROMPT}
Do the following operations:
Generate a very short title of 5 to 6 words in plain text for the blog describing the entire summary and nothing else.
Only consider the changes given in the git diff and do not add any additional information.
The following is the git diff of a every file in a single commit.

`;

export const OVERVIEW_PROMPT = `
${INITIAL_EXPLANATION_PROMPT}
Do the following operations:
Write "# Overview" and then write a short summary in plain text describing the high level changes made in the diff and nothing else.
The following is the git diff of a every file in a single commit.

`;

export const FILE_SUMMARY_PROMPT = `
${INITIAL_EXPLANATION_PROMPT}
Do the following operations:
Write "# File wise changes made" and for each file,
write "### " name of the file followed by the summary of the changes made in only a few points. Each point must start with "- ".
The following is the git diff of a every file in a single commit.

`;

export const ISSUE_PROMPT = `
Do the following operations:
Write "# Related issue" and for each issue provided,
write "### " name of the issue followed by the issue description and how is it resolved in seperate paragraphs.
Following is the information of the issues resolved by this change and remember to only talk about the issue provided below and nothing else.

`;

export const FINAL_SUMMARY_PROMPT = `
${INITIAL_EXPLANATION_PROMPT}
Do the following operations:
Write "# Summary" and generate a extensive summary of the changes made in plain text (not in bullet points) and nothing else.
The following is the git diff of a every file in a single commit.

`;

export const fileTypeToSlug = {
  js: "javascript",
  yml: "yaml",
  cpp: "cpp",
  py: "python",
  css: "css",
  java: "java",
  ts: "typescript",
  xml: "xml",
  dockerfile: "docker",
};
