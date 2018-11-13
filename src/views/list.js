import Nerv from 'nervjs';

import Header from 'components/header';
import Footer from 'components/footer';

class Index extends Nerv.Component {
  constructor() {
    super(...arguments);
    this.state = {
      icon: '',
      indexData: [{
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
      },
      ]
    };
  }
  toDown(url) {
    if (!url) {
      return false;
    }
    window.location = url;
  }
  handleClick() {

    alert('asdsd')
  }
  render() {
    const Hdata = { title: '应用展示', imgL: '', imgR: '' };
    const thisPath = '/list.html';
    return (
      <div>
        <Header Hdata={Hdata} />
        <div>
          <ul >
            <li>
              {this.state.indexData.map((item2, key) => {
                return (
                    <li>
                      名字:{item2.name} <br />
                      年龄:{item2.age}
                    </li>
                );
              })}
            </li>
          </ul>
        </div>
        <Footer path={thisPath} />
      </div>
    );
  }
}

export default Index;
