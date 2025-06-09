import { useState } from 'react'

export default function Todo() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  const addTask = () => {
    if (task.trim()) {
      if (editIndex !== null) {
        // Update existing task
        const updatedTasks = tasks.map((t, i) => 
          i === editIndex ? task : t
        )
        setTasks(updatedTasks)
        setEditIndex(null)
      } else {
        // Add new task
        setTasks([...tasks, task])
      }
      setTask('')
    }
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
    if (editIndex === index) {
      setEditIndex(null)
      setTask('')
    }
  }

  const editTask = (index) => {
    setTask(tasks[index])
    setEditIndex(index)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask()
    }
  }

  return (
    <section className="todo-app">
      <h2>Todo List</h2>
      <div className="task-input">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a task"
        />
        <button onClick={addTask}>
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
      </div>
      
      {tasks.length > 0 ? (
        <ul className="task-list">
          {tasks.map((t, i) => (
            <li key={i} className={i === editIndex ? 'editing' : ''}>
              <span>{t}</span>
              <div className="task-actions">
                <button onClick={() => editTask(i)}>✏️</button>
                <button onClick={() => deleteTask(i)}>🗑️</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-message">No tasks yet. Add one above!</p>
      )}
    </section>
  )
}