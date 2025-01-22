// Objects in Javascript.
// How we can create, a class, then objects, then get properties from it.
// Also change an attribute value.

var course = new Object();

// The lame way. We won't use this. This is just to show.
course.title = "Javascript in a day";
course.instructor = "Arindam";
course.level = 1;
course.published = true;

// This is one way. More like a dictionary.
var course = {
	title: "Javascript in a day",
	instructor: "Arindam",
	level: 1,
	published: true,
	views: 0,
	updateViews: function () {
		return ++course.views;
	}
}

console.log(course.views);
console.log(course.title);
course.updateViews();
console.log(course.views);

// Problem with this method is, we will have to create a lot
// of objects.

// Class style. Probably the best.

function Course(title, instructor, level, published, views) {
	this.title = title;
	this.instructor = instructor;
	this.level = level;
	this.published = published;
	this.views = views;
	this.updateViews = function () {
		return ++this.views;
	};
}

var course_JS = new Course('JS in a day', "AriRoy", 1, true, 0); // Create a course.
var course_Python_PyTest = new Course('Pytest for beginners', "AriRoy", 1, false, 0);
course_Python_PyTest.updateViews(); // This is same as someone viewing the course once.

console.log(course_JS);
console.log(course_Python_PyTest.views); // This works.
console.log(course_Python_PyTest['views']); // This works too.

// better way to create a class
class NewCourse {
	constructor(title, instructor, level, published, views) {
		this.title = title;
		this.instructor = instructor;
		this.level = level;
		this.published = published;
		this.views = views;
		this.updateViews = function () {
			return ++this.views;
		};
	}
	toString() {
		return `Title:${this.title} by ${this.instructor}` // Use backticks else it will not work.
	}
}

var courseJSwithClass = new NewCourse('JS in a day', "User1", 1, true, 0); // Create a course.
var courseReact = new NewCourse('React for beginners', "User2", 1, false, 0);
courseReact.updateViews(); // This is same as someone viewing the course once.

console.log(`New class for course: ${courseReact}`)
console.log(courseReact.views); // This works.
console.log(`Number of views: ${courseReact['views']}`); // This works too.
