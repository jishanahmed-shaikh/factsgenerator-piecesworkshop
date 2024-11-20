# Personal Fun Facts Generator App

## Overview
The **Personal Fun Facts Generator App** is a fun, interactive web application that generates random "fun facts" about the user. Built using HTML, CSS, and JavaScript, this app allows users to apply the concepts of prompt engineering, context setting, and handling AI limitations (hallucinations) learned in GenAI 101.

## Purpose
This app was designed as a capstone project for the GenAI 101 workshop, allowing participants to:

- Understand prompt engineering and context setting.
- Recognize and address potential hallucinations in AI-generated content.
- Practice creating and customizing a simple, shareable web application using Pieces Copilot and basic web technologies.

## Key Features
- **Random Fun Fact Generation**: Displays a random, user-defined fun fact each time you click the button.
- **Customizable Facts**: Users can personalize the app by adding their own unique facts.
- **Easy Hosting on GitHub Pages**: With no additional setup, users can deploy their app online to share with others.

## Live Demo
You can view a sample app hosted on GitHub Pages here: [https://ialimustufa.github.io/genai101-project/](https://ialimustufa.github.io/genai101-project/)  

## Step-by-Step Project Guide
This project is designed to be completed in 15 minutes. Each step incorporates key concepts from GenAI 101.

### Step 1: Define the Project Goal 
- **Objective**: Create a fun, shareable app with "fun facts" about yourself, generated and customized using Pieces Copilot.
- **GenAI Concept**: Setting a clear project goal and prompt focus.

### Step 2: Generate Initial Fun Facts with Pieces Copilot
1. Open Pieces Copilot and input a prompt like, “Generate a fun fact about someone who loves hiking and has traveled to five national parks.”
2. Experiment with variations, adjusting the prompt to include specific details (e.g., hobbies, skills) and see how different prompt styles affect the generated text.
   - **GenAI Concept**: Practice prompt engineering and adjusting context to create accurate outputs.

### Step 3: Identify and Correct Hallucinations
1. **Review the Generated Output**: Check for any unrealistic or fabricated details in the fun facts.
2. **Refine the Prompt**: Modify the prompt in Pieces Copilot if you notice hallucinations, ensuring the facts are realistic and accurate.
   - **GenAI Concept**: Learn to identify hallucinations and handle inaccuracies in AI-generated content.
  
### Step 4: Build and Customize the App 
1. Use Pieces Copilot to generate code snippets for HTML, CSS, and JavaScript to create a simple single-page app.
   - **index.html**: Provides the basic HTML structure.
   - **style.css**: Adds styling for a personalized look and feel.
   - **script.js**: Contains JavaScript to handle random fact generation and user interactions.
2. Customize the fun facts by modifying the facts array in `script.js`.

Example:
```javascript
const facts = [
    "I love hiking and have traveled to five national parks.",
    "I am an avid reader and read around 20 books per year.",
    "I once baked a 3-tiered cake for a family gathering!",
    "I speak three languages fluently.",
    "I’m learning to play the guitar in my free time."
];
```
3. **GenAI Concept**: Document prompt adjustments and observe how context changes impact code accuracy.

### Step 5: Host on GitHub Pages and Share
1. Go to your GitHub repository and navigate to **Settings > Pages**.
2. Under **Source**, select the main branch and set the folder to `/root`.
3. Click **Save**. Your app will be live at a link like `https://yourusername.github.io/genai101/`.
4. Share the link to let others explore and enjoy your fun facts generator app.

   - **GenAI Concept**: Share a practical AI-powered creation, reinforcing the importance of presentation and sharing.

### How to Use the App
1. Open the app in a browser using your GitHub Pages link.
2. Click the **Generate Another Fun Fact** button.
3. A new fun fact will appear each time you click the button.
4. Share the link with friends or on social media to let others enjoy your personalized fun facts!

### Troubleshooting Tips
- **Fun facts not displaying?**
  - Check that `script.js` is correctly linked in `index.html`.
  - Ensure each fun fact in the facts array is enclosed in quotes and separated by commas.
- **Site not loading on GitHub Pages?**
  - Confirm you’ve set the source to the main branch in GitHub Pages settings.
  - Make sure your GitHub Pages URL is correctly formatted as `https://yourusername.github.io/genai101/`.

### License
This project is open-source and available under the MIT License. Feel free to use, modify, and distribute it as you like.
