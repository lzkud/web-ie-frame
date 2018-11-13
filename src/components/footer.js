import Nerv from 'nervjs';
class Index extends Nerv.Component {
  render() {
    const path = this.props.path;
    const MenuList = [
      {
        name: '首页',
        url: '/index.html',
        img: '',
        imgOn: ''
      },
      {
        name: '详情',
        url: '/details.html',
        img: '',
        imgOn: ''
      },
      {
        name: '列表',
        url: '/list.html',
        img: '',
        imgOn: ''
      }
    ];
    return (
      <div className = 'footer' >
          {MenuList.map((m, key) => {
            return (
              <a  href={m.url}
                  key={key}
              >
                <div>
                  <img src={path == m.url ? m.imgOn : m.img} />
                </div>
                <div >
                  <span >{m.name}</span>
                </div>
              </a>
            );
          })}
      </div>
    );
  }
}

export default Index;
