# 11 Express.js: Note Taker

https://newton-notes.herokuapp.com/

## My Task

A note taker deployed through heroku, with a save and delete function. After reviewing previous lessons, I made sure the routes/notes were properly functioning/loading and saving, I tried deploying through heroku first, which failed. After struggling with heroku for a bit I decided to restructure and rewrite my code, adding the delete function and making sure everything worked locally through node first. I ended up installing the uuid package manager to generate ids for the notes.

After all this, I tried deploying to heroku again, which failed again. After searching I realized my problem was that I didn't push the changes to heroku, which was probably what the problem was at first too. However, it was a learning experience and now my code is much more efficient than before as well.

Home Page
![image](https://cdn.discordapp.com/attachments/695157509761269790/915877281371664434/unknown.png)

Notes Route & Example Notes
![image](https://cdn.discordapp.com/attachments/695157509761269790/915877207501594644/unknown.png)

## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```