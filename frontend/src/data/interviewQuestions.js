const questions = [
  {
    "category": "C Programming",
    "question": "What is a pointer?",
    "answer": "A pointer is a variable that stores the memory address of another variable.",
    "explanation": "Use the address-of operator (&) to get an address and * to access the pointed value.",
    "example": "int value = 10; int *ptr = &value;"
  },
  {
    "category": "C Programming",
    "question": "What is the difference between malloc and calloc?",
    "answer": "malloc allocates one block of uninitialized memory; calloc allocates space for multiple elements and initializes bytes to zero.",
    "explanation": "Both return a pointer that should be checked and later released with free().",
    "example": "int *a = malloc(5 * sizeof(int)); int *b = calloc(5, sizeof(int));"
  },
  {
    "category": "C Programming",
    "question": "What is a NULL pointer?",
    "answer": "A NULL pointer intentionally points to no valid object or function.",
    "explanation": "Check pointers before dereferencing them to avoid invalid memory access.",
    "example": "if (ptr != NULL) { /* use ptr */ }"
  },
  {
    "category": "C Programming",
    "question": "What is the difference between structure and union?",
    "answer": "A structure gives each member separate storage; union members share the same memory area.",
    "explanation": "A structure can hold all member values at once, while a union is typically used for one active member at a time.",
    "example": "struct Student { int id; float marks; };"
  },
  {
    "category": "Java",
    "question": "What is the JVM?",
    "answer": "The Java Virtual Machine runs Java bytecode and provides a runtime environment.",
    "explanation": "The compiler converts source code to bytecode; the JVM executes it on a platform.",
    "example": "javac Main.java creates Main.class."
  },
  {
    "category": "Java",
    "question": "What is the difference between JDK, JRE and JVM?",
    "answer": "JVM executes bytecode, JRE includes the JVM and runtime libraries, and JDK includes development tools plus the runtime.",
    "explanation": "Use the JDK to compile and develop Java applications.",
    "example": "The javac compiler is part of the JDK."
  },
  {
    "category": "Java",
    "question": "What is method overloading?",
    "answer": "Method overloading means defining methods with the same name but different parameter lists.",
    "explanation": "It is compile-time polymorphism; changing only the return type is not enough.",
    "example": "add(int a, int b) and add(double a, double b)."
  },
  {
    "category": "Java",
    "question": "What is method overriding?",
    "answer": "Overriding occurs when a subclass provides its own implementation of an inherited method with a compatible signature.",
    "explanation": "It supports runtime polymorphism through dynamic method dispatch.",
    "example": "A Dog class overrides Animal.sound()."
  },
  {
    "category": "Java",
    "question": "What is the difference between == and equals()?",
    "answer": "For objects, == checks whether references point to the same object; equals() checks logical equality when implemented accordingly.",
    "explanation": "String overrides equals() to compare character content.",
    "example": "\"java\".equals(new String(\"java\")) is true."
  },
  {
    "category": "Python",
    "question": "What is the difference between a list and a tuple?",
    "answer": "A list is mutable, while a tuple is immutable after creation.",
    "explanation": "Use lists for changing collections and tuples for fixed records.",
    "example": "items = [1, 2]; point = (3, 4)."
  },
  {
    "category": "Python",
    "question": "What is a dictionary?",
    "answer": "A dictionary stores key-value pairs and provides efficient average-case key lookup.",
    "explanation": "Keys must be hashable and unique.",
    "example": "student = {\"name\": \"Anu\", \"year\": 3}."
  },
  {
    "category": "Python",
    "question": "What is list comprehension?",
    "answer": "It is a concise syntax for creating a list from an iterable, optionally applying a condition.",
    "explanation": "It can make simple transformations easier to read.",
    "example": "squares = [n*n for n in range(5)]."
  },
  {
    "category": "Python",
    "question": "What is the purpose of self?",
    "answer": "self refers to the current instance inside a Python instance method.",
    "explanation": "It is the conventional first parameter used to access instance attributes and methods.",
    "example": "def show(self): print(self.name)"
  },
  {
    "category": "JavaScript",
    "question": "What is the difference between let, const and var?",
    "answer": "let and const are block-scoped; var is function-scoped. const prevents reassignment of the binding.",
    "explanation": "Use const by default and let when reassignment is required.",
    "example": "const name = \"Anjali\"; let score = 0;"
  },
  {
    "category": "JavaScript",
    "question": "What is hoisting?",
    "answer": "Hoisting describes how declarations are processed before code execution within their scope.",
    "explanation": "Function declarations can be called before their textual position; let and const remain in the temporal dead zone until initialized.",
    "example": "Declare variables near their first use for clarity."
  },
  {
    "category": "JavaScript",
    "question": "What is a Promise?",
    "answer": "A Promise represents the eventual success or failure of an asynchronous operation.",
    "explanation": "It can be pending, fulfilled, or rejected and is commonly handled with then/catch or async/await.",
    "example": "fetch('/api/tasks').then(response => response.json())."
  },
  {
    "category": "JavaScript",
    "question": "What is the difference between == and ===?",
    "answer": "== allows type coercion before comparison; === compares without type coercion.",
    "explanation": "Strict equality makes comparisons more predictable.",
    "example": "5 === \"5\" is false."
  },
  {
    "category": "JavaScript",
    "question": "What is event bubbling?",
    "answer": "Event bubbling is the propagation of an event from its target element up through its ancestors.",
    "explanation": "It enables event delegation; stopPropagation() can stop propagation when needed.",
    "example": "A parent click handler can receive a child click."
  },
  {
    "category": "HTML and CSS",
    "question": "What is semantic HTML?",
    "answer": "Semantic HTML uses elements that describe the meaning of their content, such as header, nav, main and article.",
    "explanation": "It improves accessibility, maintainability and document structure.",
    "example": "Use <main> for the primary page content."
  },
  {
    "category": "HTML and CSS",
    "question": "What is the difference between id and class?",
    "answer": "An id identifies one element in a document; a class can be shared by multiple elements.",
    "explanation": "CSS selects ids with # and classes with a dot.",
    "example": "#profile and .card"
  },
  {
    "category": "HTML and CSS",
    "question": "What is the CSS box model?",
    "answer": "The box model describes content, padding, border and margin around an element.",
    "explanation": "box-sizing: border-box makes declared width include padding and border.",
    "example": "* { box-sizing: border-box; }"
  },
  {
    "category": "HTML and CSS",
    "question": "What is responsive web design?",
    "answer": "Responsive design adapts a layout to different screen sizes and devices.",
    "explanation": "It commonly uses flexible layouts, relative units and media queries.",
    "example": "@media (max-width: 700px) { ... }"
  },
  {
    "category": "React.js",
    "question": "What is a React component?",
    "answer": "A component is a reusable piece of UI, usually written as a JavaScript function that returns JSX.",
    "explanation": "Components help split an interface into small maintainable pieces.",
    "example": "function Welcome(){ return <h1>Hello</h1>; }"
  },
  {
    "category": "React.js",
    "question": "What are props?",
    "answer": "Props are read-only inputs passed from a parent component to a child component.",
    "explanation": "They allow components to display different data while reusing the same structure.",
    "example": "<Greeting name=\"Anjali\" />"
  },
  {
    "category": "React.js",
    "question": "What is state in React?",
    "answer": "State is data managed by a component that can change over time and trigger a re-render.",
    "explanation": "The useState hook is commonly used in function components.",
    "example": "const [count, setCount] = useState(0);"
  },
  {
    "category": "React.js",
    "question": "What is useEffect used for?",
    "answer": "useEffect runs side effects after rendering, such as fetching data or subscribing to events.",
    "explanation": "Its dependency array controls when the effect runs; cleanup can release resources.",
    "example": "useEffect(() => { loadData(); }, []);"
  },
  {
    "category": "React.js",
    "question": "Why are keys used when rendering lists?",
    "answer": "Keys help React identify which list items changed, were added, or were removed.",
    "explanation": "Use stable unique ids rather than array indexes when list order can change.",
    "example": "items.map(item => <li key={item.id}>{item.name}</li>)"
  },
  {
    "category": "Node.js",
    "question": "What is Node.js?",
    "answer": "Node.js is a JavaScript runtime built on the V8 engine that runs JavaScript outside the browser.",
    "explanation": "It is commonly used for APIs and network applications.",
    "example": "node server.js"
  },
  {
    "category": "Node.js",
    "question": "What is Express.js?",
    "answer": "Express is a minimal web framework for Node.js used to define routes and middleware.",
    "explanation": "It simplifies handling HTTP requests and responses.",
    "example": "app.get('/api/health', (req,res) => res.json({status:'ok'}));"
  },
  {
    "category": "Node.js",
    "question": "What is middleware in Express?",
    "answer": "Middleware is a function that can inspect or modify a request and response, end the cycle, or pass control onward.",
    "explanation": "Middleware is used for parsing JSON, authentication, logging and error handling.",
    "example": "app.use(express.json());"
  },
  {
    "category": "MongoDB",
    "question": "What is MongoDB?",
    "answer": "MongoDB is a document-oriented NoSQL database that stores records as BSON documents.",
    "explanation": "It supports flexible document structures and queries.",
    "example": "A task can be stored as a document in a collection."
  },
  {
    "category": "MongoDB",
    "question": "What is a collection?",
    "answer": "A collection is a group of MongoDB documents, similar in purpose to a table in a relational database.",
    "explanation": "Documents in a collection can have flexible fields.",
    "example": "The tasks collection stores task documents."
  },
  {
    "category": "MongoDB",
    "question": "What is Mongoose?",
    "answer": "Mongoose is an ODM library for Node.js that provides schemas, models, validation and query helpers for MongoDB.",
    "explanation": "It helps define application-level data structure and validation.",
    "example": "const Task = mongoose.model('Task', schema);"
  },
  {
    "category": "DBMS",
    "question": "What is a primary key?",
    "answer": "A primary key uniquely identifies each row in a table and cannot contain NULL values.",
    "explanation": "A table has one primary key, which may consist of multiple columns.",
    "example": "student_id can identify a student row."
  },
  {
    "category": "DBMS",
    "question": "What is normalization?",
    "answer": "Normalization organizes relational data to reduce unnecessary duplication and update anomalies.",
    "explanation": "Common forms include 1NF, 2NF and 3NF.",
    "example": "Store department details separately and reference them by a key."
  },
  {
    "category": "DBMS",
    "question": "What is a foreign key?",
    "answer": "A foreign key is a column or set of columns that references a candidate key in another table.",
    "explanation": "It helps maintain referential integrity between related tables.",
    "example": "orders.customer_id references customers.id."
  },
  {
    "category": "DBMS",
    "question": "What is the difference between DELETE and TRUNCATE?",
    "answer": "DELETE removes selected rows and can use a WHERE clause; TRUNCATE removes all rows from a table in many DBMSs.",
    "explanation": "Transaction and identity-reset behavior varies by database system.",
    "example": "DELETE FROM tasks WHERE completed = 1;"
  },
  {
    "category": "Operating Systems",
    "question": "What is a process?",
    "answer": "A process is a program in execution with its own process state and resources.",
    "explanation": "The operating system schedules processes and manages their resources.",
    "example": "A running browser instance is a process."
  },
  {
    "category": "Operating Systems",
    "question": "What is a thread?",
    "answer": "A thread is an execution path within a process; threads in a process commonly share its address space.",
    "explanation": "Threads can improve responsiveness but require safe coordination of shared data.",
    "example": "A server may use multiple worker threads."
  },
  {
    "category": "Operating Systems",
    "question": "What is deadlock?",
    "answer": "Deadlock is a state where processes wait indefinitely for resources held by one another.",
    "explanation": "The four classic conditions are mutual exclusion, hold and wait, no preemption and circular wait.",
    "example": "Two processes each hold one lock and wait for the other."
  },
  {
    "category": "Operating Systems",
    "question": "What is virtual memory?",
    "answer": "Virtual memory gives each process a virtual address space that the OS maps to physical memory or secondary storage.",
    "explanation": "It provides isolation and allows programs to use an address space larger than available RAM.",
    "example": "Paging is a common implementation."
  },
  {
    "category": "Computer Networks",
    "question": "What is an IP address?",
    "answer": "An IP address identifies a network interface for communication using the Internet Protocol.",
    "explanation": "IPv4 uses 32 bits and IPv6 uses 128 bits.",
    "example": "192.168.1.10 is an IPv4 address."
  },
  {
    "category": "Computer Networks",
    "question": "What is DNS?",
    "answer": "DNS translates domain names into records such as IP addresses.",
    "explanation": "It lets users access services using readable names instead of remembering numeric addresses.",
    "example": "A browser resolves example.com before connecting."
  },
  {
    "category": "Computer Networks",
    "question": "What is the difference between TCP and UDP?",
    "answer": "TCP is connection-oriented and provides ordered reliable delivery; UDP is connectionless and has lower protocol overhead.",
    "explanation": "The choice depends on whether reliability or low-latency delivery is more important.",
    "example": "Web pages commonly use TCP-based HTTPS; live media may use UDP."
  },
  {
    "category": "Computer Networks",
    "question": "What is HTTP?",
    "answer": "HTTP is an application-layer protocol used for request-response communication between clients and servers.",
    "explanation": "HTTPS is HTTP protected by TLS.",
    "example": "A browser sends a GET request to retrieve a page."
  },
  {
    "category": "OOP Concepts",
    "question": "What are the four pillars of OOP?",
    "answer": "The commonly taught pillars are encapsulation, abstraction, inheritance and polymorphism.",
    "explanation": "They help organize code around objects and reusable behavior.",
    "example": "A class hides data and exposes methods."
  },
  {
    "category": "OOP Concepts",
    "question": "What is encapsulation?",
    "answer": "Encapsulation bundles data with methods and controls access to an object's internal state.",
    "explanation": "It protects invariants by exposing a clear public interface.",
    "example": "Use private fields and public getter/setter methods."
  },
  {
    "category": "OOP Concepts",
    "question": "What is abstraction?",
    "answer": "Abstraction exposes essential behavior while hiding implementation details.",
    "explanation": "Interfaces and abstract classes are common ways to express abstractions.",
    "example": "A user calls pay() without knowing payment processing internals."
  },
  {
    "category": "OOP Concepts",
    "question": "What is inheritance?",
    "answer": "Inheritance lets a class derive fields and behavior from another class.",
    "explanation": "It can support reuse, but composition may be better when there is no true 'is-a' relationship.",
    "example": "class Dog extends Animal."
  },
  {
    "category": "Data Structures",
    "question": "What is a stack?",
    "answer": "A stack is a linear data structure that follows Last In, First Out (LIFO).",
    "explanation": "Push adds an item and pop removes the most recently added item.",
    "example": "Browser undo history can use stack-like behavior."
  },
  {
    "category": "Data Structures",
    "question": "What is a queue?",
    "answer": "A queue is a linear data structure that follows First In, First Out (FIFO).",
    "explanation": "Enqueue adds at the rear and dequeue removes from the front.",
    "example": "A printer job queue processes jobs in order."
  },
  {
    "category": "Data Structures",
    "question": "What is binary search?",
    "answer": "Binary search finds a target in a sorted collection by repeatedly halving the search interval.",
    "explanation": "Its time complexity is O(log n).",
    "example": "Search a sorted array by checking the middle element."
  },
  {
    "category": "Data Structures",
    "question": "What is the time complexity of linear search?",
    "answer": "Linear search takes O(n) time in the worst case because it may inspect every element.",
    "explanation": "It works on unsorted data and uses O(1) extra space in an iterative implementation.",
    "example": "Check each item until the target is found."
  }
];
export default questions;
