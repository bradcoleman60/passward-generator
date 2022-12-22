# **Password-Generator**


# **Table of Contents**
1. [Description](#description)
2. [Testing](#testing)
3. [Technology Used and Credits](#technology-used-and-credits)
4. [Learnings](#learnings)
5. [About the Author](#about-the-author)
6. [License](#license)

[Visit the Deployed Site](https://bradcoleman60.github.io/passward-generator/)


# **Description**

This goal of this project was generate a password that matched the length and the character classes (numbers, upper case letters, lower case letters, and symbols) that the visitor selects.  This was a project that used predominently Java Script. This was my first time coding Java Script and I was excited to learn this new language.  

The project inlcudes one function that consumes the desired password length using a PROMPT method and consumes the answer to whether or not the visitor desires to include the 4 types of character classes using CONFIRM methods. The function includes validations that ensure that the password length is at least 8 characters but no more that 128 character and that it includes at least on character class.  If these are not validated then an ALERT method is used to notify the visitor and the function is restarted.  

The function also includes a math methods that are described further in the highlighted code example directly below. 

# **Highlighted Code Example**

The following is code that I created that I would like to highlight.  Though this was the first time I created code in Java Script, the code below demonstrated for me the usefulness of built in methods of Java Script.  I have included the commemnts in the script file that I believe do a good job in describing what this snippet of code does.   These built-in methods include:

- CharAt(x) - Returns the character within a string at position (x)
- Math.floor() - Rounds a number down to the nearest integer
- Math.random() - Returns a randum number between 0 (inclusive) up to but not including 1.


```
//Establishes the variable to hold the length of the stringToChoseFrom, needed in the calculation of the random string generator. 
  var stringLength = stringToChooseFrom.length;
  
//This FOR loop iterates for a number of times equal to the desired password length. In each loop, a random number between zero and the stringLength and then the "charAt" function selects the character in the position of that random number.  The "+=" operator increments the password string with each loop and the loop is finished when the desired password length is reached. The "Math.Random()" function is a built-in function that selects a random number between 0 and 1.  The random number is multiplied by the number of characters in the string to ensure that each character has a chance to be randomly selected.  The "Math.floor" function is a built-in function that rounds down the random number to a whole number, since  the "charAt" function can only use whole numbers. 
  for (let i = 0; i < passwordLength; i++) {
      passwordResult += stringToChooseFrom.charAt(Math.floor(Math.random() * stringLength));
    }
```

# **Testing** 

To test to ensure the code rendered the desired output I iterated a series of tests to ensure that all acceptance criteria were met and documented completion below:


1. WHEN I click the button to generate a password THEN I am presented with a series of prompts for password criteria  

    - **Completed**.  The button is linked to the function called "generatePassword" that generates the password.

2. WHEN prompted for password criteria THEN I select which criteria to include in the password

    - **Completed**.  The function, "generatePassword" includes 1 prompt for the length of the desired password and 4 confirms to choose whether or not to include the 4 types of characters.

3. WHEN prompted for the length of the password THEN I choose a length of at least 8 characters and no more than 128 characters

    - **Completed**.  The entered length is checked using an IF statement to determined whether the visitor entered an number less than 8 or more than 128.  If so, an alert is sent to the browser and the function is called on again.  

4. WHEN asked for character types to include in the password THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

    - **Completed**.  4 confirm statements are used to capture the Boolean value of whether the visitor wants the particular type of character. 

5. WHEN I answer each prompt THEN my input should be validated and at least one character type should be selected

    - **Completed**.  After the 4 confirm statements are captured, and IF statement checks whether at least one character type has been confirmed.  If not, an alter statememt is sent to the browswer and the "generatePassword" function is re invoked to start again. 

6. WHEN all prompts are answered THEN a password is generated that matches the selected criteria

    - **Completed**.  I ran a series of scenarios and observed the out put  to ensure that the password length matched the prompt value and that the characters only include the confirmed character type classes.  

7. WHEN the password is generated THEN the password is either displayed in an alert or written to the page

    - **Completed**.  In each of the scenarios completed, I observed that the password generated was rendered to the page. 

# **Technology Used and Credits**

I used many useful references in completing this project including the following.  In particular, I found the layout of the w3schools reference materials to be extremely intuitive and helpful.  They even have a "try me" feature where elements of code can be reviewed and tested. 

- [W3Schools - Java Script Code reference:](https://www.w3schools.com/js/default.asp)


# **Learnings**

[ADD SPECIFICS HERE]

I had two major learnings on the project:

1. I failed to perform a GIT COMMIT at an integral step in my code development.  During this project, I completed the functionality of generating the desired password using static variables for password length and Boolean answers for whether to include the 4 classes of characters.  This was before I created the PROMPT and CONFIRM code to consumer such variables from the visitor.  At this point with the random generator working, I failed to COMMIT the code to my repo.  I then furter iterated the code and subsequently broke it.  This caused uncessary delay and rebuild of the code.  Though, I didnt see this as a major set back, and it helped me gain confidence that I fully understood the logic of the METHODS I was using.

2.  I learned that there are code short cuts in Java Script.  In particular "X += Y" is short hand for "X = X + Y". 

# **About the Author**

My name is Brad Coleman. I am fairly new to web development but have considered it a hobby for several years and have hacked my way through learning various aspects including php, html and mysql.  I am currently enrolled in the Cal Berkeley Extension Web Development Boot camp and am excited to learn web development more holistically.  I have spent my earlier career working as a corporate controller / CPA.

- [Linkedin Profile](https://www.linkedin.com/in/brad-coleman-109529/)
- [GitHub Repos](https://github.com/bradcoleman60?tab=repositories)


# **License**

MIT License

Copyright (c) 2022 Brad Coleman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.