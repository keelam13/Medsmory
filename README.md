# Know your meds


![Am I responsive?]()

View the deployed site: [Know your meds](https://github.com/keelam13/know-your-meds)

Test your knowledge on medications commonly prescribed for different ailments. This quiz is inspired by the creator's desire to know what the differrent medications are for.

Among the six rights for medication administration is the right medication. The healthcare professional must make sure the the client is receiving the right medication prescribed: medication label must be checked, name, dosage, and strength of the medication must be verified.

This multiple choice quiz will help players get familiarized with different kinds of drugs and will refresh their knowledge on drug mode of action, while having fun.

---

## CONTENTS

* [User Experience](#user-experience-ux)
  * [User Stories](#user-stories)

* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)

  * [Wireframes](#wireframes)

* [Features](#features)
  * [General Features on Each Page](#general-features-on-each-page)
  * [Future Implementations](#future-implementations)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Other Technologies used](#other-technologies-used)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)

* [Testing](#testing)

* [Credits](#credits)
  * [Code Used](#code-used)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgments](#acknowledgments)

---

## User Experience (UX)

### User Stories

#### First Time Visitor Goals
* I want to take part of the quiz and improve my knowledge on medications.
* I want to ba able to take the quiz on different device screen-sizes.
* I want to easily navigate through the site.

#### Returning Visitor Goals
* 

#### Frequent Visitor Goals
* 


## Design

### Colour Scheme

![Color pallete](assets/images/color-palette.webp)
The color palette was generated through the Coolors website.
* The color #f5b700 was used as the main background.
* The color #5bc0eb was used as the backgrounf of the alert box.
* The colors #c3423f and #404e4d in combination were used for in the result display.


### Typography

Font used for this site was imported from [Google Fonts](https://fonts.google.com/).

![Font Sora](assets/images/google-fonts.webp)
* Sora Google font was used as the primary font for the site for content readability.
  
### Imagery

Photo used for the site was taken from the web, which I included in the [Credits](#credits) section.

### Wireframes

#### Mobile devices
* Home display

![Mobile home page]()

* Quiz display

![Mobile quiz display]()

* Alert display

![Mobile alert display]()

* Result display

![Mobile result display]()

#### Tablets
* Home display

![Tablet home page]()

* Quiz display

![Tablet quiz page]()

* Alert display

![Tablet alert display]()

* Result display

![Tablet result display]()

#### Desktop
* Home display

![Browser home page]()

* Quiz display

![Browser quiz page]()

* Alert display

![Browser alert display]()

* Result display

![Browser result display]()

## Features

### General features

The website only has a single page which displays the different sections during navigation. These are the home display, quiz display, alert display and the result display. The site has a fixed background for consistency. The site is also responsive to a range of device screens.

* The page has a favicon in the browser tab.

![Tab Favicon]()

* The page displays every section with the site title and the hero image.

![Title]()

#### Home Display

This section contains the instruction on how to play and a "Start" button, which initiates the quiz.

* Home section view on larger screens

![Home browser]()

* Home section view on mobile devices

![Home mobile]()

#### Quiz Display

It displays the question number, the question and the buttons with options. Player can select an answer by clicking on the button containing the desired answer. Below is a "Submit" button to confirm the selected answer. The selected answer will then be checked. On the upper right corner is a close button which brings the player back to home display.

* Quiz view on larger screens

![Quiz Browser]()

* Quiz view on mobile devices

![Quiz mobile]()


### Alert Display

The display is a way to tell the player whether the answer was correct or not. It will show a tick icon in color green, if the answer is correct, and otherwise it will show a x icon in red color. The box also contains an "OK" button to acknowledge the alert and move on to the next question.

* Alert display view on larger devices

![Alert display us browser]()

* Alert displayview on mobile devices

![Alert display us mobile]()

### Result Display

The game ends by showing how well the player did on the quiz. Each correct answer will be counted during the game and will be displayed over the number of questions on the result section. Under the score are two buttons: The "Play again" button which lets the player to retake the quiz, and the "Exit game" button which brings player back to home display.   

* Result Display view on larger screens

![Result Display browser]()

* Result Display view on mobile devices

![Result Display mobile]()


### Future Implementations

* Categorize the questions by specific drug class (eg. anti-hypertensives , anti-diabetics, etc). 
* Add level of difficulty or more categories.
* Allow players to save their scores and show high scores.
* Improve quaity of commit messages and commit every after bit of changes.

### Accessibility

I have been mindful during coding to ensure that the website is as accessible friendly as possible. I have achieved this by:

1. Using semantic HTML.
2. Using descriptive alt attributes on images on the site.
3. Providing information for screen readers where there are icons used and no text.
4. Ensuring that there is a sufficient colour contrast throughout the site.
5. Using hover state on all buttons for player to see which buttons they are hovering over.

## Technologies Used

### Languages Used

HTML, CSS and JavaScript were used to create this website.

### Other Technologies used

* [Balsamiq](https://balsamiq.com/) - Used to create wireframes.
* [Miro](https://miro.com) - Used to create the framework.
* [Git](https://git-scm.com/) - For version control.
* [Github](https://github.com/) - To save and store the files for the website.
* [Google Fonts](https://fonts.google.com/) - To import the fonts used on the website.
* [Font Awesome](https://fontawesome.com/) - For the iconography on the website.
* [Google Dev Tools](https://developer.chrome.com/docs/devtools) - To troubleshoot and test features, solve issues with responsiveness and styling.
* [Design.com](https://www.design.com/) To create a logo.
* [Birme](https://www.birme.net/?target_width=500&target_height=300&no_resize=true&image_format=webp) To resize images and change to webp format.
* [Favicon.io](https://favicon.io/) To create favicon.
* [Am I Responsive?](https://ui.dev/amiresponsive) To show the website image on a range of devices.
* [Coolors](https://coolors.co/) was used to create the color palette.
* [Removebg](https://www.remove.bg/) was used to remove backgrounds from images.

## Deployment & Local Development

### Deployment

The site is deployed using GitHub Pages - [Medsmory](https://keelam13.github.io/Medsmory/)

To Deploy the site using GitHub Pages:
1. Login (or signup) to Github.
2. Go to the repository for this project, keelam13/Medsmory
3. Click the settings button.
4. Select pages in the left hand navigation menu.
5. From the source dropdown select main branch and press save.
6. The site has now been deployed, please note that this process may take a few minutes before the site goes live.

### Local Development

#### How to Fork

To fork the Medsmory repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, keelam13/Medsmory.
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the Medsmory repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, keelam13/Medsmory.
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

## Testing

Please refer to the [TESTING.md](TESTING.md) file for all test-related documentation.

## Credits

### Code Used

* [Image gallery with horizontal scroll]()
* [Fading image]()
* [Blink animation]()
* [Refresh page metadata]()


### Content

The inspiration for the content came from the increasing number of hikers and tourists alike who want to climb Mt. Pulag.  

###  Media

Some of the images images used on the website are personal collection, and the other were taken from different bloggers who went to Mt. Pulag.

  
###  Acknowledgments

- The Almighty for the opportunity to do coding.
- My family for their unending support.
- My other half for the love and understanding.
- Cici my girl for the inspiration.
- [Iuliia Konovalova](https://github.com/IuliiaKonovalova) my mentor for the advice, tips and guiding me through the project.
- [Kera Cudmore](https://github.com/kera-cudmore) for the great help on constructing a README file.
- [Code Institute](https://codeinstitute.net/) lessons, tutors and Slack community members for their support and help.
- [Kevin Powell](https://www.youtube.com/user/KepowOb) for his amazing CSS tutorials.
