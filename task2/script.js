document.addEventListener('DOMContentLoaded', function() {
    const tasksContainer = document.querySelector('.tasks');
  
    // Sample tasks data
    const tasks = [
      { title: 'Create homepage', deadline: '2023-09-01', priority: 'High', label: 'Design' },
      { title: 'Optimize images', deadline: '2023-09-10', priority: 'Medium', label: 'Development' },
      // Add more tasks here
    ];
  
    // Populate tasks
    tasks.forEach(task => {
      const taskElement = document.createElement('div');
      taskElement.classList.add('task');
      taskElement.innerHTML = `
        <h2>${task.title}</h2>
        <p>Deadline: ${task.deadline}</p>
        <p>Priority: ${task.priority}</p>
        <p>Label: ${task.label}</p>
      `;
      tasksContainer.appendChild(taskElement);
    });
  });
  