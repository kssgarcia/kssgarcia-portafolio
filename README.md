# Portfolio Website

Welcome to the repository for my personal portfolio website. This site showcases my projects, skills, and professional details. Built with React, Three.js, and GSAP for dynamic and engaging animations.

## Features

- **React**: Utilizes React for scalable and efficient front-end development.
- **Three.js**: Implements Three.js for 3D visual effects.
- **GSAP**: Animates transitions and other effects using GSAP.
- **Responsive Design**: Ensures the website looks great on devices of all sizes.

## Local Setup

To set up this project locally, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/kssgarcia/kssgarcia-portafolio.git
   cd kssgarcia-portafolio
   ```

2. **Install Dependencies**
   ```bash
    npm i -y
   ```
3. **Run the Development Server**
   ```bash
    npm run dev
   ```
4. **Predeploy**
   ```bash
    npm run predeploy
   ```
5. **Deploy**
   ```bash
    npm run deploy
   ```
## Adding New Projects

To add new projects to the portfolio, you need to update the `Projects.json` file located in `src/assets`. Here’s how you can add a new project:

### Step 1: Update the Projects JSON

1. Open the `Projects.json` file. You will see an array of project objects.
2. Add a new object to the array with the following structure:

```json
{
    "id": "project-id",
    "title": "Project Title",
    "description": "A brief description of the project.",
    "imageUrl": "path/to/image.jpg",
    "techStack": ["Technology1", "Technology2", "Technology3"],
    "githubUrl": "https://github.com/yourusername/project",
    "liveUrl": "https://example.com/project"
}
```

## License
This project is open source and available under the MIT License.