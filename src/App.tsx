import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CounterWithSettings } from './counter_with_settings/CounterWithSettings';
import { Dashboard } from './dashboard/Dashboard';
import { SimpleCounter } from './simple_counter/SimpleCounter';

export const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <Dashboard />} />
        <Route
          path="simple-counter"
          element={<SimpleCounter />}
        >
        </Route>
        <Route path="counter-with-settings" element={
          <CounterWithSettings />
        }>
        </Route>
      </Routes>
    </div>
  );
}
