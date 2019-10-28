export const mapStateToProps = state => {
    return {
        inputValue: state.inputValue.inputValue,
        fetchData: state.fetchData.fetchData
    }
};
export const mapDispatchToProps = dispatch => {
    return {
        onInputChange: (e) => {
            const action = {type: 'INPUT', value: e.target.value};
            dispatch(action)
        },
        onDidMountFetchData: async () => {
            const result = await fetch('http://jsonplaceholder.typicode.com/albums')
                .then(response => response.json())
                .then(json => json);
            const action = {type: 'FETCH', value: result};
            dispatch(action)
        },
        fetchThunk: () => dispatch(async (dispatch) => {
            const result = await fetch('https://jsonplaceholder.typicode.com/todos/2')
                .then(response => response.json())
                .then(json => {
                    console.log(json)
                    return json
                })
            dispatch({type: 'FETCH', value: result})
        })
    }
};
