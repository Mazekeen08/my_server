# my_server
Creating API CRUD using Node JS and express .

CRUD is an acronym that comes from the world of databases. Each letter stands for one type of action that a user can perform on a set of data: Create, Read, Update, and Delete. In relational databases, the four activities match the SQL commands INSERT, SELECT, UPDATE and DELETE.

It’s possible to apply the CRUD concept to the world wide web and its underlying HTTP protocol. Every URL points to a resource, that is, a set of data. And you can access those with different HTTP verbs: GET, PUT, POST and DELETE. Spoiler alert: these verbs do not match CRUD exactly. But more about that later.

Many APIs follow this paradigm, so you’d be in good company. For developers who have already worked with other APIs, the developer experience will immediately be familiar and consistent, which is fantastic. On the other hand, you should think about whether performing CRUD operations on resources is the best approach for your use case.

Here’s an idea on how you could assess the CRUD paradigm’s applicability for your API. First, see if you can name one or more resources or things, for example, files, documents, appointments, contacts, tasks, etc… Then, put them into the following sentence: “Using my API, users can create, read, update and delete $THINGs.” If you feel that this sentence is a good summary of your API, go for it! If you think it captures the essence of your API, but some part is missing, for example, because users can do a multitude of other actions on the resources, you can still use the CRUD paradigm and bolt on those other actions. We’ll discuss this in the section about URL design. If the whole phrase feels off, another design paradigm could be better suited. For example, the RPC (Remote Procedure Call) approach means that you think of your API in terms of executing commands instead of performing actions on resources.

One more remark: many developers think that CRUD is necessary for your API to be RESTful. That is a common misconception. These terms describe different aspects of API design. However, CRUD and REST work nicely together.
