
    const store = {
        _state: {
            
            navbarLinks: [
                { name: 'Profile', link: 'profile' },
                { name: 'Chat', link: 'dialogs' },
                { name: 'News', link: 'news' },
                { name: 'Music', link: 'music' },
                { name: 'Settings', link: 'settings' },
            ],
 
            

                Friends: [
                    { id: 1, name: 'Daniel',    img: 'https://picsum.photos/id/10/50/50' },
                    { id: 2, name: 'Michał',    img: 'https://picsum.photos/id/20/50/50' },
                    { id: 3, name: 'Wojtek',    img: 'https://picsum.photos/id/30/50/50' },
                    { id: 4, name: 'Tomasz',    img: 'https://picsum.photos/id/40/50/50' },
                    { id: 5, name: 'Karolina',  img: 'https://picsum.photos/id/50/50/50' }
                ],

                dialogItems: [
                    { user: "Michał Sztefanica", status: "", id: "1", msg: "Witam od Michała" },
                    { user: "Michał Sztefanica", status: "", id: "2", msg: "Witam od Daniela" },
                ],

                ProfilePage: {
                    msgData:[
                        { id: '1', user: 'User1', msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iusto molestias modi alias dolorem', likes: 22 },
                        { id: '2', user: 'User2', msg: 'quaerat reprehenderit porro. Facilis veniam delectus inventore itaque nemo reiciendis reprehenderit ve', likes: 12 },
                        { id: '3', user: 'User3', msg: 'quaerat reprehenderit porro. Facilis veniam delectus inventore itaque nemo reiciendis reprehenderit ve', likes: 12 },
                ], 

                postText:  'this is post text'
            },
        },

        getState(){
            return this._state;
        },

        _callSubsriber() {
            console.log('something changed')
        },

        getAddPost(){
            return this.AddPost
        },

        addPost(){
            let newPost = {
                id: 4, user: 'Admin', msg: this._state.ProfilePage.postText, likes: 0
            }
            this._state.ProfilePage.msgData.push(newPost);
            this._state.ProfilePage.postText = ''
            this._callSubsriber(this._state);
        },

        changeNewPostText(text) {
            let newText = text
            this._state.ProfilePage.postText = newText;
            this._callSubsriber(this._state);
        },

        subscribe(observer) {
            this._callSubsriber = observer
        }
}
export default store
window.store = store