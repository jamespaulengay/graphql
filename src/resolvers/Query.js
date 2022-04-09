const Query = {
  me() {
    return {
      id: "TUPM-18-2041",
      name: "James Paul Engay",
      email: "jamespaulengay@tup.edu.ph",
    };
  },
  post() {
    return {
      id: "1",
      title: "Learning GraphQL",
      body: "GraphQL is a specification",
      published: "true",
    };
  },
  users(parent, args, { db }, info) {
    if (!args.query) {
      return db.users;
    }

    return db.users.filter((user) =>
      user.name.toLowerCase().includes(args.query)
    );
  },
  posts(parent, args, { db }, info) {
    if (!args.query) {
      return db.posts;
    }

    return db.posts.filter((post) => {
      const isTitleMatch = post.title.toLowerCase().includes(args.query);
      const isBodyMatch = post.title.toLowerCase().includes(args.query);

      return isTitleMatch || isBodyMatch;
    });
  },
  comments(parent, args, { db }, info) {
    if (!args.query) {
      return db.comments;
    }
  },
};

export { Query as default };
