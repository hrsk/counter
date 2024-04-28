import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CounterWithSettings } from './counter_with_settings/CounterWithSettings';
import { Settings } from './counter_with_settings/settings/Settings';
import { Dashboard } from './dashboard/Dashboard';
import { InitialStateType, setMaxValue, setStartValue } from './reducers/counter-with-settings-reducer';
import { SimpleCounter } from './simple_counter/SimpleCounter';
import { AppStateType } from './store/store';
import { setCounterError } from './reducers/counter-errors-reducer';

export const App = () => {

  const dispatch = useDispatch()
  const values = useSelector<AppStateType, InitialStateType>(state => state.counterWithSettings)


  const maxValueFromLocalStorage = () => {
    const valueAsString = localStorage.getItem("maxValue");
    if (valueAsString) {
      return JSON.parse(valueAsString)
    } else return values.maxValue
  }

  const startValueFromLocalStorage = () => {
    const valueAsString = localStorage.getItem("startValue");
    if (valueAsString) {
      return JSON.parse(valueAsString)
    } else return values.startValue
  }

  useEffect(() => {
    dispatch(setMaxValue(maxValueFromLocalStorage()))
    dispatch(setStartValue(startValueFromLocalStorage()))
  }, [])

  // useEffect errors 

  useEffect(() => {
    if (values.counterValue === undefined && values.startValue === 0 && values.maxValue === 0) {
      dispatch(setCounterError([`Enter values and press 'Save'!`]));
    }
    if (values.maxValue < values.startValue || values.startValue < 0 || values.maxValue < 0 || (values.startValue === values.maxValue && values.startValue !== 0 && values.maxValue !== 0)) {
      dispatch(setCounterError(['Input values is incorrect!']))
    }
    if (values.counterValue === values.startValue || values.startValue < values.maxValue) {
      dispatch(setCounterError([]));
    }
  }, [values.startValue, values.maxValue]);

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
          <Settings />
        }>
        </Route>
        <Route path="counter-with-settings" element={
          <CounterWithSettings />
        }>
        </Route>
      </Routes>
    </div>
  );
}
