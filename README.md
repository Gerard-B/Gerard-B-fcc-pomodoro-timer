## Welcome to my 25+5 (Pomodoro)-timer
<br>

#### To see the Timer live, click **[here](https://gerard-b.github.io/Gerard-B-fcc-pomodoro-timer/)**!
<br>

I made this 25+5 (Pomodoro)-timer with [jQuery](https://jquery.com/) as [project #5](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-25--5-clock) of the Front End Libraries, part of the [FreeCodeCamp](https://www.freecodecamp.org/) curriculum.

---
##### To do list
- _I want to use more Bootstrap elements for a better UI/UX. This also allows me to learn more about the wide-functionality of Bootstrap. Possibly I can also use the icons of Bootstrap, or I can utilize Font Awesome icons to make the page look prettier._
- _Because I made the timer over a longer period of time, I sometimes lost track of the progress and the challenges. To make sure I could progress quicker, even if I didn't work on the timer for a few days, I added many(!) console.logs. These helped me a lot, but it also makes the code about 30% longer._
- _The logic of the Javascript is not perfect yet. I use quite some variables and I am confident that I can reduce some of them. Furthermore, during execution I sometimes make too many conversions. For example I convert seconds to minutes, while I can do this more succint via better variables._

##### Reasons for suggested changes later on
For the front-end parts: It would make the app more intuitive, and better cross-device functionality.
For the back-end parts: it would utilize the latest technology options, and improving the logic would decrease the messiness of the code.

---
#### UX
You can adjust the timer from a minimum of 1 minute, to a maximum of 60 minutes for both the session-time as well as the breaktime. You can achieve this by clicking on the plus and minus buttons.
When you click start, the plus-minus buttons dissapear and the timer starts counting down.
When the session finishes, automatically the break will start. There is a moment that the background of the container becomes red so the user is aware of the change of sessions.
When the timer reaches zero, a beeping sound will play.
At any moment the user can click reset and this will reset the entire program to the default values.
For testing purposes there is a "test-settings" button which decreases the session and time to one minute: this saves the user clicking a lot of buttons every time something needs to be tested.
The test-suite of freeCodeCamp is still available in the top-left corner to test if all user-stories are still accomplised.

#### User Stories

See the userstories at the freeCodeCamp-project-website: [Build a 25 + 5 Clock.](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-25--5-clock)

#### Techniques
Dependencies:
- Bootstrap: v4.5.3,
- jQuery: v3.5.1,
- jQuery UI - v1.12.1

Basic techniques: HTML5 + HTML5-audio, JavaScript, CSS, Google Fonts, Markdown.
