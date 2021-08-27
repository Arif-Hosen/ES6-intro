const priya = 'asif akbar';
const meye = "tumi ki dukkho dekhona";
const kobit = `maye tumi sopno carini`;

const multiLine = 'this is first line\n' +
    'this is second line\n' +
    'this is third line';
console.log(multiLine);

const multiLineNew = `this is first line 
    this is second line 
    this is third line`;
console.log(multiLineNew);

const friend = ['kabul', 'babul', 'habul', 'cabul'];
const count = 5;
const old = '<h3 class="friend-name">friend-5</h3>'
const old2 = '<h3 class="friend-name">friend-' + count + '</h3>';
const new1 = `<h3 class="friend-name">friend-${count}</h3>`;
const newFriend = `<h3 class="friend-name">friend-${friend.length}</h3>`;
console.log(new1);

const first = 'mamun';
const last = 'miya';
const fullold = 'This person is' + first + ' ' + last;
const fullNew = `This person is ${first} ${last}. Has money ${(friend.length + 5) * 500}`;
console.log(fullNew);