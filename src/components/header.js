import Nerv from 'nervjs';

class Index extends Nerv.Component {
  render() {
    return (
      <div>
          {this.props.Hdata.title}
      </div>
    );
  }
}

export default Index;
