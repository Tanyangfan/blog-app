import React, {Component} from 'react';
import './index.css'

const postDatas = [
    {
        id: '1',
        title: 'title 1',
        content: 'content 1'
    }, {
        id: '2',
        title: 'title 2',
        content: 'content 2'
    }, {
        id: '3',
        title: 'title 3',
        content: 'content 3'
    }, {
        id: '4',
        title: 'title 4',
        content: 'content 4'
    }, {
        id: '5',
        title: 'title 5',
        content: 'content 5'
    }, {
        id: '6',
        title: 'title 6',
        content: 'content 6'
    }, {
        id: '7',
        title: 'title 7',
        content: 'content 7'
    }, {
        id: '8',
        title: 'title 8',
        content: 'content 8'
    }, {
        id: '9',
        title: 'title 9',
        content: 'content 9'
    }, {
        id: '9',
        title: 'title 9',
        content: 'content 9'
    }, {
        id: '9',
        title: 'title 9',
        content: 'content 9'
    }, {
        id: '9',
        title: 'title 9',
        content: 'contentsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssshjsahjkshakjskahjhksakjhaskjsakhsjakhjsakjaskjsahhjkakhjaskhjsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss 9'
    }
];

class AppList extends Component {
    render() {
        return (
            <div>
                {postDatas.map((data, key) => (
                    <div key={key} className="listItem">
                        <div className="listItem-title">
                            title: {data.title}
                        </div>
                        <div className="listItem-content">
                            content: {data.content}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default AppList;