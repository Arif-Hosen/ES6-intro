
document.getElementById('add-border').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    container.style.border = '5px solid steelblue';
})

function addBackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'salmon';
    }
}

document.getElementById('add-friend').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    const newFriend = document.createElement('div');
    newFriend.classList = 'friend';
    newFriend.innerHTML = ` 
                        <h3 class="friend-name">new friend</h3>
                        <p>Possimus, libero.</p>
                        `
    container.appendChild(newFriend);
})

function colorFriendName() {
    const friendName = document.getElementsByClassName('friend-name');
    for (const friend of friendName) {
        friend.style.color = 'lightgreen';
    }

}