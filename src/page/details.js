import Nerv from 'nervjs';
import Index from 'views/details';

class App extends Nerv.Component {
  render() {
    return <Index />;
  }
}

Nerv.render(<App />, document.querySelector('#aiplat'));
