import React from 'react'

class Loading extends React.Component {
    render() {
        return (
            <div>
                测试懒加载
            </div>
        )
    }
}

function add(a, b) {
    return a + b;
}

export {
    Loading,
    add
}