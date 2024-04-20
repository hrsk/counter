import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CounterWithSettings } from './counter_with_settings/CounterWithSettings';
import { Settings } from './counter_with_settings/settings/Settings';
import { Dashboard } from './dashboard/Dashboard';
import { SimpleCounter } from './simple_counter/SimpleCounter';
import { AppStateType } from './store/store';
import { InitialStateType } from './reducers/counter-with-settings-reducer';

export const App = () => {

  const values = useSelector<AppStateType, InitialStateType>(state => state.counterWithSettings)

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
