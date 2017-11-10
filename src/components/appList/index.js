import React,{Component} from 'react';


const postDatas = [
  {
    title: 'title',
    content: 'content',
  },
  {
    title: 'title',
    content: 'content',
  },
  {
    title: 'title',
    content: 'content',
  },
  {
    title: 'title',
    content: 'content',
  },
  {
    title: 'title',
    content: 'content',
  },
  {
    title: 'title',
    content: 'content',
  },
  {
    title: 'title',
    content: 'content',
  },
]

class AppList extends Component {
    render() {
        return (
            <div>
                {
                  postDatas.map((data, key) => (
                    <div key={key}>
                    <div>
                      {data.title}
                    </div>
                    <div>
                      {data.content}
                    </div>
                    </div>
                  ))
                }
            </div>
        );
    }
}

export default AppList;
