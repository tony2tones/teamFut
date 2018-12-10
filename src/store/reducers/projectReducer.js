const initState = {
    projects: [
        {id:'1',title: 'Title of project one', content:'this is a long text to make this all go down a stormy storm.'},
        {id:'2',title: 'Title of project two', content:'this is a long text to make this all go down a stormy storm.'},
        {id:'3',title: 'Title of project three', content:'this is a long text to make this all go down a stormy storm.'}
    ]
}

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer;