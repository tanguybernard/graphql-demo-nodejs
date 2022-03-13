# GraphQL Demo


__WORKING PROGRESS__

## Applications

Three app
- With express-graphql
- With apollo, one file
- With apollo, better skeleton



## Graphqli Query

### Simple example

    query {
        course(id: 3) {
            title
        }
    }

### Named

getSingleCourse

    query getSingleCourse($courseID: Int!) {
        course(id: $courseID) {
            title
            author
            description
            topic
            url
        }
    }

Query Variables

    {
        "courseID": 1
    }


### Other

    {
        user(id: 1){
            email
        }
    }

### Curl

    curl --location -g --request POST 'http://localhost:5000/graphql?query={user(id:2){email}}'


## Mutation Request

### Example 1

    mutation {
        createAuthor(author : {
            name: "Toto"
            }
        ) {
            id,
            name
        }
    }

## Credits

https://medium.com/codingthesmartway-com-blog/creating-a-graphql-server-with-node-js-and-express-f6dddc5320e1

https://tech-wiki.online/fr/graphql-node-express.html

https://dev.to/codesphere/how-to-build-a-graphql-server-with-nodejs-and-express-2g8j

About structure :

https://javascript.plainenglish.io/writing-a-node-js-graphql-backend-that-actually-scales-a-complete-guide-part-1-setup-cddceae25bdc

https://cloudnweb.dev/2019/06/graphql-with-apollo-server-and-express-graphql-series-part-1/

Grphql alongside Api :

https://www.freecodecamp.org/news/add-a-graphql-server-to-a-restful-express-js-api-in-2-minutes/
