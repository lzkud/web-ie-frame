import Nerv from 'nervjs';

import Header from 'components/header';
import Footer from 'components/footer';

class Index extends Nerv.Component {
  constructor() {
    super(...arguments);
    this.state = {
      dnid: 0,
      indexData: {
        list:[
            {
                name:'name1',
                age:"15"
            },{
                name:'name2',
                age:"16"
            },{
                name:'name3',
                age:"17"
            },{
                name:'name4',
                age:"18"
            }
        ]
      }
    };
  }
  tsone(id) {
    this.setState({
        dnid:id
    })
  }
  render() {
    const Hdata = { title: '捐赠我们', imgL: '', imgR: '' };
    const thisPath = '/details.html';
    return (
      <div>
        <Header Hdata={Hdata} />
        <h1>{this.state.dnid}</h1>
        <div className="cm_main">
          <ul>
              {this.state.indexData.list.map((v, k) => {
                return (
                    <li>
                        <div key={k}
                          onClick={() => this.tsone(v.age)}
                      >
                        {v.name}
                      </div>
                    </li>
                );
              })}
          </ul>
        </div>
        <Footer path={thisPath} />
      </div>
    );
  }
}

export default Index;
