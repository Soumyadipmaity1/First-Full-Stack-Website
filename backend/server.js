import express from "express";
const app = express();
app.get("/", (req, res) => {
    res.send("Hello World!");
    });

    //get a list of 5 jokes 

app.get("/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Joke 1",
            content: "What do you call a fake noodle? An Impasta."
        }
        ,
        {
            id: 2,
            title: "Joke 2",
            content: "I would avoid the sushi if I was you. It’s a little fishy."
        }
        ,
        {
            id: 3,
            title: "Joke 3",
            content: "Want to hear a joke about construction? I’m still working on it."
        }
        ,
        {
            id: 4,
            title: "Joke 4",
            content: "Why couldn’t the bicycle stand up by itself? It was two tired."
        },
        {
            id: 5,
            title: "Joke 5",
            content: "Did you hear about the restaurant on the moon? Great food, no atmosphere."
        }
    ];
    res.send(jokes);
});

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);

