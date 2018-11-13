import Nerv from 'nervjs';

import Header from 'components/header';
import Footer from 'components/footer';


class Index extends Nerv.Component {
  constructor() {
    super(...arguments);
    this.state = {
      icon: '',
      indexData: {
        description:'5555555',
        gitList: [{
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
        ],
      }
    };
  }
  toShow(item) {
    alert('名字:'+item.name+',年龄:'+item.age)
  }
  render() {
    const Hdata = { title: '222', imgL: '', imgR: '' };
    const thisPath = '/index.html';
    return (
      <div>
        <Header Hdata={Hdata} />
        <div>
          <h1>这是标题</h1>
          <ul>
            <li>
                {this.state.indexData.gitList.map((v, k) => {
                  return (
                    <div onClick={() =>this.toShow(v)}>
                      名字：{v.name } <br />
                      年龄：{v.age } <br />
                    </div>
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
