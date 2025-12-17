
We are working with two chat windows here One is strictly an advisor and planner called "Claude UI" 

The other is strictly an executor called "Claude Code"

Use exactly these terms as they are explicitly stated as role assignments in all of the instructions that are loaded.

Dump The contents of each folder ("Claude UI" and"Claude Code") into the appropriate chat or have them siloed in different directories/repos.

(for  00-Start_Here.md - review the #USER preferences section to tweak for your own purposes if needed) 


Work flow:

Tell "Claude UI" to read the 00-Start_Here.md file and then to review the last one or two sessions in the executive timeline.

If this is the first run tell it to familiarize itself with the lock templates and look at The existing lock and spec files in the directory as an example of what to do.

Tell "Claude UI" to look at the inventory content file to see what the site looks like. Then scroll through the site and brain dump everything that you're thinking about changing.

"Claude UI" should respond with a bunch of clarifying questions. After which it should create a spec file and new content, design, and architecture lock files depending on what you are changing.

Take the lock files and the spec file and dump it into "Claude Code". Make sure that all three lock files and the spec file are in the docs folder of the repo for which "Claude Code" operates.

In the docs folder of the repo copy the PROMPT-header File into a new chat and tell it to follow the instructions explicitly.

When it's done and the site is tested, manually commit and then Copy the PROMPT-changelog file into the chat.

After the change log is updated then copy the PROMPT-inventory file into the chat.

Take the inventory content file that that prompt creates and put it back into the "Claude UI" chat.

When you feel like enough broad strokes have been done and want to manually edit things run" PROMPT-generate-copy-and-design-reference.md in "Claude Code" The resulting file you can either manually look at or use Claude Code to tell you what lines of the code to look at to change whatever specific thing you ask for.

repeat as necessary.