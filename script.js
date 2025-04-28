// Change the About Me text
document.getElementById("change-text-btn").addEventListener("click", function() {
  document.getElementById("intro").textContent = "I love building software solutions that solve real-world problems!";
});

// Change the main heading's style
document.getElementById("change-style-btn").addEventListener("click", function() {
  const heading = document.getElementById("main-heading");
  heading.style.color = "teal";
  heading.style.fontSize = "3rem";
  heading.style.textDecoration = "underline";
});

// Add a new project
document.getElementById("add-element-btn").addEventListener("click", function() {
  const newProject = document.createElement("li");
  newProject.textContent = "Gambling Behavior Tracker App";
  newProject.id = "new-project";
  document.getElementById("project-list").appendChild(newProject);
});

// Remove the new project
document.getElementById("remove-element-btn").addEventListener("click", function() {
  const project = document.getElementById("new-project");
  if (project) {
    project.remove();
  }
});
