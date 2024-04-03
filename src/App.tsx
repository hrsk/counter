import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard } from './dashboard/Dashboard';
import { SimpleCounter } from './simple_counter/SimpleCounter';
import { Settings } from './counter_with_settings/settings/Settings';
import { CounterWithSettings } from './counter_with_settings/CounterWithSettings';
import { useState } from 'react';

export const App = () => {

  const [value, setValue] = useState<number>(0)
  const [startValue, setStartValue] = useState<number>(0)
  const [endValue, setEndValue] = useState<number>(0)

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
        <Route path={"settings"} element={
          <Settings value={value}
            setValue={setValue}
            startValue={startValue}
            setStartValue={setStartValue}
            endValue={endValue}
            setEndValue={setEndValue} />
        }>
        </Route>
        <Route path="counter-with-settings" element={
          <CounterWithSettings value={value}
            setValue={setValue}
            startValue={startValue}
            setStartValue={setStartValue}
            endValue={endValue}
            setEndValue={setEndValue} />
        }>
        </Route>
      </Routes>
    </div>
  );
}
