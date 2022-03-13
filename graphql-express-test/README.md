## Query

    query {
        userByEmail(email: "flavio@email.fr") {
            id,
            name {
                firstName
                lastName
            }
        }
    }
