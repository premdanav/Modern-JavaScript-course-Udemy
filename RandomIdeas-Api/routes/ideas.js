const express = require('express')
const router = express.Router();
const Idea = require('./models/idea.js');
const ideas = [
    {
        id: 1,
        text: "Create a new mobile app",
        tag: "Technology",
        username: "john_doe",
        date: "2023-11-05",
    },
    {
        id: 2,
        text: "Write a novel",
        tag: "Writing",
        username: "jane_smith",
        date: "2023-11-06",
    },
    {
        id: 3,
        text: "Learn a new programming language",
        tag: "Learning",
        username: "alice_coder",
        date: "2023-11-07",
    },

];

router.get('/', async (req, res) => {
    try {
        const ideass = await Idea.find();
        if (!ideass) throw 'No idea found';
        res.json({ success: true, data: ideass })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
})

router.get('/:id', (req, res) => {
    const idea = ideas.find(idea => idea.id === +req.params.id);

    if (!idea) {
        return res.status(404).json({ success: false, error: 'Resource not found' });
    }
    res.json({ success: true, data: idea });
})

//add an idea
router.post('/', (req, res) => {
    const idea = {
        id: ideas.length + 1,
        text: req.body.text,
        tag: req.body.tag,
        username: req.body.username,
        date: new Date().toISOString().slice(0, 10),
    }
    ideas.push(idea);
    res.json({ success: true, data: idea });
})

//update ideas
router.put('/:id', (req, res) => {
    const idea = ideas.find(idea => idea.id === +req.params.id);

    if (!idea) {
        return res.status(404).json({ success: false, error: 'resource not found' })
    }

    idea.text = req.body.text || idea.text;
    idea.tag = req.body.tag || idea.tag;
    res.json({ success: true, data: idea });
})

//delete idea
router.delete('/:id', (req, res) => {
    const ideaIndex = ideas.indexOf(ideas.find(idea => idea.id === +req.params.id));
    if (ideaIndex < 0 || ideaIndex > ideas.length) {
        return res.status(404).json({ success: false, error: 'resource not found' })
    }

    ideas.splice(ideaIndex, 1);
    res.json({ success: true, message: `Idea with ID ${req.params.id} has been deleted` });
})



module.exports = router;