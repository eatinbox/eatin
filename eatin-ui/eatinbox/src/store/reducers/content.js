const initialState = {
    contentArray: [
        {
            url: require('../../assets/pic1.jpg'),
            heading: 'Lorem Ipsum',
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },

        {
            url: require('../../assets/pic2.jpg'),
            heading: 'Lorem Ipsum',
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },

        {
            url: require('../../assets/pic3.jpg'),
            heading: 'Lorem Ipsum',
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },
    ]
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default reducer;