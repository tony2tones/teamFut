const initState = {
    projects: [
        {id:'1',title: 'Title of project one', content:'this is a long text to make this all go down a stormy storm.'},
        {id:'2',title: 'Title of project two', content:'this is a long text to make this all go down a stormy storm.'},
        {id:'3',title: 'Title of project three', content:'this is a long text to make this all go down a stormy storm.'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('create project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project', action.err);
            return state;
            default: 
            return state;
    }
}

export default projectReducer;