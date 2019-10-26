import React, {Component} from 'react';
import styles from './styles.module.scss'
import cn from 'classnames'
import {connect} from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from './connect'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.onDidMountFetchData()
    }

    static defaultProps = {};

    render() {
        const {inputValue, onInputChange, fetchData} = this.props;
        return (
            <div className={cn(styles.root, 'browniu-app-root')}>
                hello browniu!
                <input value={inputValue}
                       onChange={(e) => onInputChange(e)}
                       type="text"
                       style={{background: '#f1f1f1'}}/>
                <ul>
                    {fetchData.map(item => <li key={item.id}>{item.title}</li>)}
                </ul>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
