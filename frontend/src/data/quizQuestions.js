const quizQuestions = [
  {
    "category": "Programming Fundamentals",
    "question": "Which data type stores true or false values in JavaScript?",
    "options": [
      "String",
      "Boolean",
      "Number",
      "Object"
    ],
    "answer": 1,
    "explanation": "Boolean represents a logical true or false value."
  },
  {
    "category": "Programming Fundamentals",
    "question": "Which symbol begins a single-line comment in JavaScript?",
    "options": [
      "//",
      "<!--",
      "#",
      "**"
    ],
    "answer": 0,
    "explanation": "The // sequence begins a JavaScript single-line comment."
  },
  {
    "category": "Programming Fundamentals",
    "question": "Which loop checks its condition before each iteration?",
    "options": [
      "do...while",
      "while",
      "Both always execute first",
      "None"
    ],
    "answer": 1,
    "explanation": "A while loop checks its condition before executing the body."
  },
  {
    "category": "Programming Fundamentals",
    "question": "Which operator gives the remainder?",
    "options": [
      "/",
      "%",
      "**",
      "//"
    ],
    "answer": 1,
    "explanation": "The remainder operator is %."
  },
  {
    "category": "Programming Fundamentals",
    "question": "Which keyword exits a loop immediately?",
    "options": [
      "skip",
      "stop",
      "break",
      "returnAll"
    ],
    "answer": 2,
    "explanation": "break terminates the nearest loop or switch."
  },
  {
    "category": "Programming Fundamentals",
    "question": "Which structure stores key-value pairs in JavaScript?",
    "options": [
      "Array",
      "Map only",
      "Object",
      "String"
    ],
    "answer": 2,
    "explanation": "Objects store properties as key-value pairs."
  },
  {
    "category": "Programming Fundamentals",
    "question": "What is the result of 3 + 2 * 4?",
    "options": [
      "20",
      "11",
      "14",
      "24"
    ],
    "answer": 1,
    "explanation": "Multiplication has higher precedence than addition."
  },
  {
    "category": "Programming Fundamentals",
    "question": "Which converts a string to an integer in JavaScript?",
    "options": [
      "parseInt()",
      "toString()",
      "join()",
      "push()"
    ],
    "answer": 0,
    "explanation": "parseInt parses an integer from a string."
  },
  {
    "category": "Programming Fundamentals",
    "question": "Which keyword declares a constant binding?",
    "options": [
      "var",
      "let",
      "const",
      "fixed"
    ],
    "answer": 2,
    "explanation": "const creates a block-scoped binding that cannot be reassigned."
  },
  {
    "category": "Programming Fundamentals",
    "question": "An algorithm is:",
    "options": [
      "A programming language",
      "A finite sequence of steps to solve a problem",
      "A database",
      "A computer device"
    ],
    "answer": 1,
    "explanation": "An algorithm is a well-defined procedure for solving a problem."
  },
  {
    "category": "JavaScript",
    "question": "Which keyword declares a block-scoped variable?",
    "options": [
      "var",
      "let",
      "static",
      "define"
    ],
    "answer": 1,
    "explanation": "let declares a block-scoped variable that can be reassigned."
  },
  {
    "category": "JavaScript",
    "question": "What does === check?",
    "options": [
      "Only value",
      "Value and type without coercion",
      "Only type",
      "Object length"
    ],
    "answer": 1,
    "explanation": "Strict equality compares value and type."
  },
  {
    "category": "JavaScript",
    "question": "Which method adds an item to the end of an array?",
    "options": [
      "pop()",
      "shift()",
      "push()",
      "slice()"
    ],
    "answer": 2,
    "explanation": "push() appends one or more items."
  },
  {
    "category": "JavaScript",
    "question": "Which method removes the last array item?",
    "options": [
      "pop()",
      "push()",
      "unshift()",
      "map()"
    ],
    "answer": 0,
    "explanation": "pop() removes and returns the final item."
  },
  {
    "category": "JavaScript",
    "question": "What does JSON.parse() do?",
    "options": [
      "Creates JSON text",
      "Converts JSON text to a JavaScript value",
      "Deletes an object",
      "Sorts an array"
    ],
    "answer": 1,
    "explanation": "JSON.parse parses a JSON string."
  },
  {
    "category": "JavaScript",
    "question": "Which is used to handle a rejected Promise?",
    "options": [
      "catch()",
      "finallyOnly()",
      "repeat()",
      "rejectNow()"
    ],
    "answer": 0,
    "explanation": "catch() handles a rejection in a promise chain."
  },
  {
    "category": "JavaScript",
    "question": "What does DOM stand for?",
    "options": [
      "Data Object Model",
      "Document Object Model",
      "Digital Ordinance Model",
      "Document Output Method"
    ],
    "answer": 1,
    "explanation": "DOM is the browser's object representation of a document."
  },
  {
    "category": "JavaScript",
    "question": "Which array method creates a new array by transforming each item?",
    "options": [
      "filter()",
      "map()",
      "find()",
      "reduceOnly()"
    ],
    "answer": 1,
    "explanation": "map() returns a new array of transformed values."
  },
  {
    "category": "JavaScript",
    "question": "What is the result of typeof 42?",
    "options": [
      "integer",
      "float",
      "number",
      "Number"
    ],
    "answer": 2,
    "explanation": "JavaScript reports numeric values with typeof as 'number'."
  },
  {
    "category": "JavaScript",
    "question": "Which statement handles multiple possible values?",
    "options": [
      "if only",
      "switch",
      "try only",
      "while"
    ],
    "answer": 1,
    "explanation": "switch compares an expression against multiple case labels."
  },
  {
    "category": "React",
    "question": "What does JSX allow developers to write?",
    "options": [
      "SQL inside CSS",
      "HTML-like syntax in JavaScript",
      "Java inside HTML",
      "Only JSON"
    ],
    "answer": 1,
    "explanation": "JSX is a syntax extension commonly used to describe React UI."
  },
  {
    "category": "React",
    "question": "Which hook manages state in a function component?",
    "options": [
      "useRoute",
      "useState",
      "useStyle",
      "useClass"
    ],
    "answer": 1,
    "explanation": "useState returns a state value and setter."
  },
  {
    "category": "React",
    "question": "Props are generally:",
    "options": [
      "Mutable child-owned values",
      "Read-only inputs from a parent",
      "Database tables",
      "CSS selectors"
    ],
    "answer": 1,
    "explanation": "Props are passed into components and should not be mutated."
  },
  {
    "category": "React",
    "question": "Why should list items have keys?",
    "options": [
      "To add CSS",
      "To help React identify items between renders",
      "To encrypt data",
      "To sort automatically"
    ],
    "answer": 1,
    "explanation": "Stable keys help React reconcile list changes."
  },
  {
    "category": "React",
    "question": "Which hook is used for side effects?",
    "options": [
      "useEffect",
      "useColor",
      "useHTML",
      "useArray"
    ],
    "answer": 0,
    "explanation": "useEffect runs side effects after rendering."
  },
  {
    "category": "React",
    "question": "What does a controlled input use?",
    "options": [
      "Only innerHTML",
      "React state as its value",
      "A database trigger",
      "A CSS variable"
    ],
    "answer": 1,
    "explanation": "A controlled input receives value and onChange from React state."
  },
  {
    "category": "React",
    "question": "How do you pass a prop named title?",
    "options": [
      "<Card title=\"Hello\" />",
      "<Card title:Hello />",
      "Card.title(\"Hello\")",
      "<Card title->"
    ],
    "answer": 0,
    "explanation": "JSX attributes pass props to components."
  },
  {
    "category": "React",
    "question": "What should a component return to render nothing conditionally?",
    "options": [
      "undefined always",
      "null",
      "NaN",
      "window"
    ],
    "answer": 1,
    "explanation": "Returning null renders no UI for that component."
  },
  {
    "category": "React",
    "question": "Which command starts a CRA development server?",
    "options": [
      "npm run build",
      "npm start",
      "node compile",
      "npm publish"
    ],
    "answer": 1,
    "explanation": "Create React App uses npm start for its development server."
  },
  {
    "category": "React",
    "question": "What is a React fragment used for?",
    "options": [
      "Add a database",
      "Group elements without an extra DOM node",
      "Fetch API data",
      "Create a route"
    ],
    "answer": 1,
    "explanation": "Fragments group multiple children without adding a wrapper element."
  },
  {
    "category": "DBMS",
    "question": "Which key uniquely identifies a row?",
    "options": [
      "Foreign key",
      "Primary key",
      "Alternate index",
      "Duplicate key"
    ],
    "answer": 1,
    "explanation": "A primary key uniquely identifies each row."
  },
  {
    "category": "DBMS",
    "question": "Which SQL command retrieves data?",
    "options": [
      "GET",
      "SELECT",
      "FETCHALL",
      "OPEN"
    ],
    "answer": 1,
    "explanation": "SELECT reads rows from one or more tables."
  },
  {
    "category": "DBMS",
    "question": "Which clause filters rows before grouping?",
    "options": [
      "HAVING",
      "ORDER BY",
      "WHERE",
      "GROUP"
    ],
    "answer": 2,
    "explanation": "WHERE filters individual rows before grouping."
  },
  {
    "category": "DBMS",
    "question": "Which clause filters grouped results?",
    "options": [
      "HAVING",
      "WHERE",
      "LIMIT",
      "FROM"
    ],
    "answer": 0,
    "explanation": "HAVING applies conditions to groups."
  },
  {
    "category": "DBMS",
    "question": "Which command changes existing rows?",
    "options": [
      "INSERT",
      "UPDATE",
      "CREATE",
      "DROP"
    ],
    "answer": 1,
    "explanation": "UPDATE modifies existing records."
  },
  {
    "category": "DBMS",
    "question": "What does SQL JOIN do?",
    "options": [
      "Deletes tables",
      "Combines related rows from tables",
      "Encrypts a column",
      "Creates a user"
    ],
    "answer": 1,
    "explanation": "JOIN combines rows based on a related column or condition."
  },
  {
    "category": "DBMS",
    "question": "What is normalization intended to reduce?",
    "options": [
      "Data integrity",
      "Redundancy and anomalies",
      "All indexes",
      "All relationships"
    ],
    "answer": 1,
    "explanation": "Normalization organizes data to reduce duplication and anomalies."
  },
  {
    "category": "DBMS",
    "question": "Which property means a transaction is all-or-nothing?",
    "options": [
      "Consistency",
      "Isolation",
      "Atomicity",
      "Durability"
    ],
    "answer": 2,
    "explanation": "Atomicity means a transaction completes entirely or not at all."
  },
  {
    "category": "DBMS",
    "question": "Which SQL function counts rows?",
    "options": [
      "SUM()",
      "COUNT()",
      "AVG()",
      "MAX()"
    ],
    "answer": 1,
    "explanation": "COUNT returns the number of rows or non-null values depending on its argument."
  },
  {
    "category": "DBMS",
    "question": "A foreign key enforces:",
    "options": [
      "Referential integrity",
      "Sorting",
      "Compression",
      "Encryption"
    ],
    "answer": 0,
    "explanation": "Foreign keys maintain valid references between related tables."
  },
  {
    "category": "OOP",
    "question": "Which OOP concept hides internal data?",
    "options": [
      "Inheritance",
      "Encapsulation",
      "Compilation",
      "Iteration"
    ],
    "answer": 1,
    "explanation": "Encapsulation controls access to an object's state."
  },
  {
    "category": "OOP",
    "question": "Which concept allows one interface with different implementations?",
    "options": [
      "Polymorphism",
      "Normalization",
      "Indexing",
      "Paging"
    ],
    "answer": 0,
    "explanation": "Polymorphism lets the same operation behave differently for different types."
  },
  {
    "category": "OOP",
    "question": "A class is best described as:",
    "options": [
      "An object instance only",
      "A blueprint for objects",
      "A loop",
      "A database query"
    ],
    "answer": 1,
    "explanation": "A class defines the structure and behavior of its objects."
  },
  {
    "category": "OOP",
    "question": "Which relationship is represented by 'is-a'?",
    "options": [
      "Inheritance",
      "Aggregation",
      "Association only",
      "Composition"
    ],
    "answer": 0,
    "explanation": "Inheritance commonly models an is-a relationship."
  },
  {
    "category": "OOP",
    "question": "Which access modifier restricts access to the class in Java?",
    "options": [
      "public",
      "protected",
      "private",
      "global"
    ],
    "answer": 2,
    "explanation": "private members are accessible within their declaring class."
  },
  {
    "category": "OOP",
    "question": "An abstract class:",
    "options": [
      "Must always be final",
      "Cannot be instantiated directly",
      "Cannot have methods",
      "Is a database"
    ],
    "answer": 1,
    "explanation": "An abstract class cannot be instantiated directly."
  },
  {
    "category": "OOP",
    "question": "Method overloading is usually resolved at:",
    "options": [
      "Compile time",
      "Network time",
      "Database time",
      "Shutdown"
    ],
    "answer": 0,
    "explanation": "Overloaded method selection is generally compile-time polymorphism."
  },
  {
    "category": "OOP",
    "question": "Method overriding supports:",
    "options": [
      "Runtime polymorphism",
      "File compression",
      "SQL grouping",
      "Memory paging"
    ],
    "answer": 0,
    "explanation": "An overridden method implementation is selected at runtime for dynamic dispatch."
  },
  {
    "category": "OOP",
    "question": "Which keyword refers to the current object in Java?",
    "options": [
      "base",
      "this",
      "self",
      "current"
    ],
    "answer": 1,
    "explanation": "this refers to the current instance."
  },
  {
    "category": "OOP",
    "question": "An interface mainly specifies:",
    "options": [
      "A contract of behavior",
      "A memory address",
      "A database row",
      "A loop condition"
    ],
    "answer": 0,
    "explanation": "An interface defines a contract that implementing classes provide."
  },
  {
    "category": "Operating Systems",
    "question": "Which component allocates CPU time to processes?",
    "options": [
      "Scheduler",
      "Compiler",
      "Browser",
      "Assembler"
    ],
    "answer": 0,
    "explanation": "The CPU scheduler selects a process or thread to run."
  },
  {
    "category": "Operating Systems",
    "question": "A process is:",
    "options": [
      "A program in execution",
      "A source file only",
      "A keyboard",
      "A network cable"
    ],
    "answer": 0,
    "explanation": "A process is an executing program with associated resources."
  },
  {
    "category": "Operating Systems",
    "question": "Which is a necessary deadlock condition?",
    "options": [
      "Circular wait",
      "Fast CPU",
      "Large disk",
      "High bandwidth"
    ],
    "answer": 0,
    "explanation": "Circular wait is one of the four Coffman deadlock conditions."
  },
  {
    "category": "Operating Systems",
    "question": "Virtual memory commonly uses:",
    "options": [
      "Paging",
      "HTML",
      "DNS",
      "CSS"
    ],
    "answer": 0,
    "explanation": "Paging maps virtual memory pages to physical frames."
  },
  {
    "category": "Operating Systems",
    "question": "A thread shares which resource with other threads in the same process?",
    "options": [
      "Address space",
      "Program counter",
      "Stack",
      "CPU register set"
    ],
    "answer": 0,
    "explanation": "Threads in a process share its address space and process resources."
  },
  {
    "category": "Operating Systems",
    "question": "Which is volatile memory?",
    "options": [
      "RAM",
      "SSD",
      "DVD",
      "ROM"
    ],
    "answer": 0,
    "explanation": "RAM is volatile and normally loses contents when power is removed."
  },
  {
    "category": "Operating Systems",
    "question": "What is context switching?",
    "options": [
      "Changing process/thread on CPU",
      "Formatting a disk",
      "Compiling code",
      "Sending an email"
    ],
    "answer": 0,
    "explanation": "Context switching saves and restores execution state."
  },
  {
    "category": "Operating Systems",
    "question": "Which scheduling algorithm uses time slices?",
    "options": [
      "Round Robin",
      "FCFS only",
      "Shortest Job First only",
      "Static linking"
    ],
    "answer": 0,
    "explanation": "Round Robin gives each ready process a time quantum."
  },
  {
    "category": "Operating Systems",
    "question": "A semaphore is used for:",
    "options": [
      "Process/thread synchronization",
      "Image editing",
      "DNS resolution",
      "Code formatting"
    ],
    "answer": 0,
    "explanation": "Semaphores coordinate access to shared resources."
  },
  {
    "category": "Operating Systems",
    "question": "Thrashing is associated with:",
    "options": [
      "Excessive paging",
      "Fast compilation",
      "High screen brightness",
      "Network routing"
    ],
    "answer": 0,
    "explanation": "Thrashing occurs when the system spends too much time paging."
  },
  {
    "category": "Computer Networks",
    "question": "Which layer routes packets in the OSI model?",
    "options": [
      "Network",
      "Session",
      "Presentation",
      "Physical"
    ],
    "answer": 0,
    "explanation": "The network layer handles logical addressing and routing."
  },
  {
    "category": "Computer Networks",
    "question": "What does DNS resolve?",
    "options": [
      "Domain names to records such as IP addresses",
      "Files to folders",
      "HTML to CSS",
      "Passwords to hashes"
    ],
    "answer": 0,
    "explanation": "DNS provides name resolution."
  },
  {
    "category": "Computer Networks",
    "question": "Which protocol provides reliable ordered delivery?",
    "options": [
      "UDP",
      "TCP",
      "IP only",
      "ARP"
    ],
    "answer": 1,
    "explanation": "TCP provides reliable, ordered byte-stream delivery."
  },
  {
    "category": "Computer Networks",
    "question": "HTTPS uses which security protocol?",
    "options": [
      "TLS",
      "FTP",
      "DHCP",
      "SMTP"
    ],
    "answer": 0,
    "explanation": "HTTPS protects HTTP using TLS."
  },
  {
    "category": "Computer Networks",
    "question": "What is the default port for HTTP?",
    "options": [
      "21",
      "25",
      "80",
      "443"
    ],
    "answer": 2,
    "explanation": "HTTP commonly uses TCP port 80."
  },
  {
    "category": "Computer Networks",
    "question": "Which device forwards frames within a LAN using MAC addresses?",
    "options": [
      "Switch",
      "Router",
      "Modem only",
      "Repeater only"
    ],
    "answer": 0,
    "explanation": "A switch forwards Ethernet frames based on MAC address learning."
  },
  {
    "category": "Computer Networks",
    "question": "What does LAN stand for?",
    "options": [
      "Local Area Network",
      "Large Access Node",
      "Linked Application Number",
      "Long Address Network"
    ],
    "answer": 0,
    "explanation": "A LAN covers a limited local area."
  },
  {
    "category": "Computer Networks",
    "question": "Which protocol automatically assigns IP configuration?",
    "options": [
      "DHCP",
      "DNS",
      "HTTP",
      "SSH"
    ],
    "answer": 0,
    "explanation": "DHCP can provide IP address, gateway and DNS settings."
  },
  {
    "category": "Computer Networks",
    "question": "An IPv4 address has how many bits?",
    "options": [
      "16",
      "32",
      "64",
      "128"
    ],
    "answer": 1,
    "explanation": "IPv4 addresses are 32 bits long."
  },
  {
    "category": "Computer Networks",
    "question": "Which protocol is commonly used to send email between mail servers?",
    "options": [
      "SMTP",
      "SNMP",
      "SFTP",
      "ARP"
    ],
    "answer": 0,
    "explanation": "SMTP is used for sending and relaying email."
  },
  {
    "category": "DSA",
    "question": "Which data structure follows LIFO?",
    "options": [
      "Queue",
      "Stack",
      "Tree",
      "Graph"
    ],
    "answer": 1,
    "explanation": "A stack removes the most recently added item first."
  },
  {
    "category": "DSA",
    "question": "Which data structure follows FIFO?",
    "options": [
      "Stack",
      "Queue",
      "Heap",
      "Set"
    ],
    "answer": 1,
    "explanation": "A queue removes the earliest added item first."
  },
  {
    "category": "DSA",
    "question": "Binary search requires data to be:",
    "options": [
      "Sorted",
      "Encrypted",
      "Reversed",
      "Unique only"
    ],
    "answer": 0,
    "explanation": "Binary search relies on sorted order to discard half the search range."
  },
  {
    "category": "DSA",
    "question": "Worst-case time complexity of linear search is:",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "Linear search may inspect every element."
  },
  {
    "category": "DSA",
    "question": "Which traversal visits root, left, right?",
    "options": [
      "Inorder",
      "Preorder",
      "Postorder",
      "Level order"
    ],
    "answer": 1,
    "explanation": "Preorder traversal visits node before its subtrees."
  },
  {
    "category": "DSA",
    "question": "Which structure is commonly used for BFS?",
    "options": [
      "Queue",
      "Stack",
      "Hash only",
      "Array only"
    ],
    "answer": 0,
    "explanation": "BFS uses a queue to visit nodes level by level."
  },
  {
    "category": "DSA",
    "question": "Average lookup in a well-designed hash table is:",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n²)",
      "O(log n) always"
    ],
    "answer": 0,
    "explanation": "Average-case hash lookup is O(1), though worst case can be O(n)."
  },
  {
    "category": "DSA",
    "question": "Which sorting algorithm is generally stable by standard implementation?",
    "options": [
      "Merge sort",
      "Selection sort",
      "Heap sort",
      "Quick sort always"
    ],
    "answer": 0,
    "explanation": "Merge sort can preserve the relative order of equal elements."
  },
  {
    "category": "DSA",
    "question": "A linked list node usually contains:",
    "options": [
      "Data and link(s)",
      "Only an index",
      "Only a key",
      "A SQL table"
    ],
    "answer": 0,
    "explanation": "A node stores data and references to adjacent nodes."
  },
  {
    "category": "DSA",
    "question": "What is the worst-case time complexity of merge sort?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(n²)"
    ],
    "answer": 2,
    "explanation": "Merge sort divides and merges in O(n log n) time."
  },
  {
    "category": "Web Development",
    "question": "Which HTML element creates a hyperlink?",
    "options": [
      "<link>",
      "<a>",
      "<href>",
      "<url>"
    ],
    "answer": 1,
    "explanation": "The anchor element uses href to define the destination."
  },
  {
    "category": "Web Development",
    "question": "Which CSS property changes text color?",
    "options": [
      "font-style",
      "color",
      "background-image",
      "display"
    ],
    "answer": 1,
    "explanation": "The color property sets foreground text color."
  },
  {
    "category": "Web Development",
    "question": "Which CSS layout is one-dimensional?",
    "options": [
      "Flexbox",
      "Grid only",
      "Float",
      "Table"
    ],
    "answer": 0,
    "explanation": "Flexbox is designed for one-dimensional row or column layouts."
  },
  {
    "category": "Web Development",
    "question": "Which HTTP method is commonly used to create a resource?",
    "options": [
      "GET",
      "POST",
      "TRACE",
      "HEAD"
    ],
    "answer": 1,
    "explanation": "POST commonly submits data to create a resource."
  },
  {
    "category": "Web Development",
    "question": "What does REST stand for?",
    "options": [
      "Representational State Transfer",
      "Remote Execution Style Tool",
      "Request State Table",
      "Reliable Server Text"
    ],
    "answer": 0,
    "explanation": "REST is an architectural style for networked applications."
  },
  {
    "category": "Web Development",
    "question": "Which file commonly defines npm dependencies?",
    "options": [
      "package.json",
      "index.html",
      "README.txt",
      "server.log"
    ],
    "answer": 0,
    "explanation": "package.json contains project metadata, scripts and dependencies."
  },
  {
    "category": "Web Development",
    "question": "What does CORS control?",
    "options": [
      "Cross-origin browser requests",
      "CSS colors",
      "Database indexes",
      "CPU scheduling"
    ],
    "answer": 0,
    "explanation": "CORS lets servers specify which origins may access resources from browsers."
  },
  {
    "category": "Web Development",
    "question": "Which tool is commonly used to inspect browser network requests?",
    "options": [
      "Developer Tools",
      "Task Manager only",
      "Paint",
      "Calculator"
    ],
    "answer": 0,
    "explanation": "Browser Developer Tools includes a Network panel."
  },
  {
    "category": "Web Development",
    "question": "Which tag is used for the main page content?",
    "options": [
      "<main>",
      "<meta>",
      "<style>",
      "<title>"
    ],
    "answer": 0,
    "explanation": "The main element represents the dominant content of the document."
  },
  {
    "category": "Web Development",
    "question": "Which CSS unit is relative to the root font size?",
    "options": [
      "px",
      "rem",
      "cm",
      "pt"
    ],
    "answer": 1,
    "explanation": "rem is relative to the root element's font size."
  }
];
export default quizQuestions;
