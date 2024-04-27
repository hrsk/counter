import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CounterWithSettings } from './counter_with_settings/CounterWithSettings';
import { Settings } from './counter_with_settings/settings/Settings';
import { Dashboard } from './dashboard/Dashboard';
import { InitialStateType, setMaxValue, setStartValue } from './reducers/counter-with-settings-reducer';
import { SimpleCounter } from './simple_counter/SimpleCounter';
import { AppStateType } from './store/store';
import { useEffect } from 'react';
import { setCounterError } from './reducers/counter-errors-reducer';
import { setCounterValue } from './reducers/simple-counter-reducer';

export const App = () => {

  const values = useSelector<AppStateType, InitialStateType>(state => state.counterWithSettings)
  const counterValue = useSelector<AppStateType, number>((state) => state.simpleCounter.value)

  const dispatch = useDispatch()

  // useEffect on first load page: check localstorage on presence of values and set

  useEffect(() => {
    dispatch(setCounterValue(0))
  }, [])

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
    if (values.counterValue === undefined) {
      dispatch(setCounterError([`Enter values and press 'Save'!`]));
    }
    if (values.maxValue < values.startValue || values.startValue < 0 || values.maxValue < 0 || values.startValue === values.maxValue) {
      dispatch(setCounterError(['Input values is incorrect!']))
    }
    if (values.counterValue === values.startValue) {
      dispatch(setCounterError([]));
    }
  }, [values.startValue, values.maxValue, values.counterValue]);


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <Dashboard />} />
        <Route
          path="simple-counter"
          element={<SimpleCounter counterValue={counterValue} />}
        >
        </Route>
        <Route path={"settings"} element={
          <Settings counterValue={values.counterValue}
            startValue={values.startValue}
            maxValue={values.maxValue} />
        }>
        </Route>
        <Route path="counter-with-settings" element={
          <CounterWithSettings counterValue={values.counterValue}
            startValue={values.startValue}
            maxValue={values.maxValue}
          />
        }>
        </Route>
      </Routes>
    </div>
  );
}
