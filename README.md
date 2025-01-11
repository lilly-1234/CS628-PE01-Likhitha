# MyResume

## Input
The **MyResume** web application creates a detailed and appealing resume by using static data from a `ResumeData.json` file. This JSON file includes:
- **Personal Information**: Name, address, phone, and email.
- **Education**: Degrees, institutions, start and end dates, and GPAs.
- **Skills**: Categories and a list of specific skills.
- **Work Experience**: Previous roles, companies, durations, and descriptions.
- **Projects**: Titles, descriptions, and source code links.

## Process
1. **Development Environment Setup**:
   - The `npx create-react-app client`is used to create a new React app.
   - The app is structured to include `Resume.js`, `Resume.css`, and `ResumeData.json` in the `src` folder.
   - Run `npm install` to install the dependency packages for the application to run.
   - Running `npm start`starts the development server and opens the browser's web application.

2. **Component Structure**:
   - `Resume.js` is the main component that uses data from `ResumeData.json` to dynamically render data in sections for projects, work experience, education, skills and personal information.
   - `Resume.css` handles styling to ensure alignment to the given specifications for design.

3. **Dynamic Rendering**:
   - To provide the information in the individual resume sections,`Resume.js` destructures JSON data.
   - React's `.map()`method is used to map the data over and render lists for projects, work experience, education, and skills.

4. **Styling**:
   - CSS classes are used to style the layout, ensuring consistency in fonts, colors, and margins.
   - `Black` is the default text color, and `#bdfb04`is the background color. 
5. **Rendering**:
   - The `Resume.js` component is imported into `App.js` and displayed within the main React application.
   

## Output
The **MyResume** application generates a fully rendered resume that appears in the browser and includes the following sections:

- **Personal Information**: Name, address, phone number, and email are shown at the top.
- **Education**: Includes degree, institution, duration, and GPA.
- **Skills**: Skills are grouped by category and separated by commas.
- **Work Experience**: Includes job titles, companies, durations, and descriptions.
- **Projects**: Titles, descriptions, and clickable source code links (if provided).

### Features
- **Dynamic Content**: The data is easily updated or modified because it is dynamically rendered from ResumeData.json.
- **Maintaining Style:**: The resume layout is responsive and has a neat, professional appearance.
- **Interactive Links**: There are clickable links to the source code or under the Projects section.



