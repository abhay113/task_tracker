import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';
import FilterOptions from './Components/FilterOptions';
import SortOptions from './Components/SortOptions';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router> {/* Wrap your components with Router */}
      <div>
        <Navbar />
        <FilterOptions />
        <SortOptions />
        <TaskForm />
        <TaskList />
      </div>
    </Router>
  );
}

export default App;
