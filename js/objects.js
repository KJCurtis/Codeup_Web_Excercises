

// TODO: Create person object
// var person = todo;

// TODO: Create firstName and lastName properties in your person object; assign your name to them

// TODO: Add a sayHello method to the person object that
//       alerts a greeting using the firstName and lastName properties

// Say hello from the person object.
// person.sayHello();


var person = {
    'name': 'Kenny',
    'age': '21',
    'gender': 'male',
    'height': '6ft',
    'sayHello': function() {
        console.log('Hello World!');
    }
};

var booksArray = [
    {
        'title':'	Da Vinci Code,The',
        'Author': {
            'firstName':'Dan',
            'lastName':'Brown'
        }

    },
    {
        'title':'Harry Potter and the Deathly Hallows',
        'Author': {
            'firstName':'J.K.',
            'lastName':'Rowling'
        }

    },
    {
        'title':'Harry Potter and the Deathly Hallows',
        'Author': {
            'firstName':'J.K.',
            'lastName':'Rowling'
        }

    },
    {
        'title':'3 Harry Potter and the Philosopher\'s Stone',
        'Author': {
            'firstName':'J.K.',
            'lastName':'Rowling'
        }

    },
    {
        'title':'Fifty Shades of Grey',
        'Author': {
            'firstName':'E. L.',
            'lastName':'James'
        }

    }

];
var verifyUserInput = function(userInput) {
    if (userInput == null || userInput == ''){
        return false;
    } else {
        return true;
    }
    
};
for (var i = 0; i < booksArray.length; i++) {
    console.log('=========================');
    console.log('Book #: ' + (i + 1));
    console.log('Title: ' + booksArray[i].title);
    console.log('Author: ' + booksArray[i].Author.firstName + ", " + booksArray[i].Author.lastName);
}
while () {
    var toAddBook = confirm('would you like to add a book to the list?');
    if (toAddBook) {
        var inputBookTitle = prompt('enter Title:');
        if (inputBookTitle == null || inputBookTitle.trim() == '');
        alert('no input detected!');
        continue
    } else {
        console.log('========================');
        booksArray.push({'Title:'})
    }

};

