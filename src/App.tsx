import './App.css';
import { CounterWithSettings } from './counter_with_settings/CounterWithSettings';
import { SimpleCounter } from './simple_counter/SimpleCounter';

export const App = () => {
  return (
    <div className="App">
      <CounterWithSettings />
    </div>
  );
}
